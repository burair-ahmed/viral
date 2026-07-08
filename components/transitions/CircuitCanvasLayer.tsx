"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { transitionConfig } from "./transitionConfig";
import { createFragmentGrid, Fragment } from "./fragmentGrid";
import { generateTracePaths } from "./tracePathGenerator";

interface CircuitCanvasLayerProps {
  outgoingTexture: HTMLImageElement | null;
  incomingTexture: HTMLImageElement | null;
  origin: { x: number; y: number };
  onComplete: () => void;
}

export default function CircuitCanvasLayer({
  outgoingTexture,
  incomingTexture,
  origin,
  onComplete,
}: CircuitCanvasLayerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // 1. Resize canvas to cover viewport
    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);

    // 2. Calculate cell sizes
    const cols = transitionConfig.gridCols;
    const rows = transitionConfig.gridRows;
    const cellWidth = width / cols;
    const cellHeight = height / rows;

    // Find nearest cell index for click origin
    const clickCol = Math.min(cols - 1, Math.max(0, Math.floor(origin.x / cellWidth)));
    const clickRow = Math.min(rows - 1, Math.max(0, Math.floor(origin.y / cellHeight)));
    const originIndex = clickRow * cols + clickCol;

    // 3. Create grids and paths
    const outgoingFrags = createFragmentGrid(cols, rows, cellWidth, cellHeight);
    const incomingFrags = createFragmentGrid(cols, rows, cellWidth, cellHeight);
    const paths = generateTracePaths(cols, rows, clickCol, clickRow, cellWidth, cellHeight, width, height);

    // Setup incoming initial states (offscreen)
    incomingFrags.forEach((frag, i) => {
      const path = paths[i];
      frag.x = path.startX;
      frag.y = path.startY;
      frag.scale = 0.3;
      frag.opacity = 0;
      frag.rotation = gsap.utils.random(-15, 15);
      frag.glow = 0;
    });

    // Setup outgoing initial states (onscreen)
    outgoingFrags.forEach((frag) => {
      frag.x = 0;
      frag.y = 0;
      frag.scale = 1;
      frag.opacity = 1;
      frag.rotation = 0;
      frag.glow = 0;
    });

    // 4. Custom progress target objects for GSAP to animate
    const outgoingTargets = outgoingFrags.map((f) => ({
      progress: 0,
      scale: 1,
      opacity: 1,
      rotation: 0,
      glow: 0,
    }));

    const incomingTargets = incomingFrags.map((f) => ({
      progress: 0, // 0 = offscreen, 1 = snapped
      scale: 0.3,
      opacity: 0,
      rotation: f.rotation,
      glow: 0,
    }));

    // 5. GSAP Timeline
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      },
    });

    // Outgoing animation
    tl.to(
      outgoingTargets,
      {
        progress: 1,
        scale: 0.25,
        opacity: 0,
        rotation: () => gsap.utils.random(-20, 20),
        duration: transitionConfig.duration * 0.7,
        ease: "power2.in",
        stagger: {
          each: 0.003,
          from: originIndex,
          grid: [rows, cols],
        },
      },
      "start"
    );

    // Incoming animation (overlaps by config value)
    tl.to(
      incomingTargets,
      {
        progress: 1,
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: transitionConfig.duration * 0.7,
        ease: "back.out(1.3)",
        stagger: {
          each: 0.003,
          from: originIndex,
          grid: [rows, cols],
        },
      },
      `start+=${transitionConfig.overlap}`
    );

    // 6. Animation Ticker / Render Loop
    let animId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw background void
      ctx.fillStyle = transitionConfig.voidColor;
      ctx.fillRect(0, 0, width, height);

      // Draw Outgoing page fragments
      if (outgoingTexture) {
        outgoingFrags.forEach((frag, i) => {
          // Synchronize animated values from target
          const target = outgoingTargets[i];
          frag.scale = target.scale;
          frag.opacity = target.opacity;
          frag.rotation = target.rotation;

          // Stepped trace calculations
          const path = paths[i];
          if (target.progress < 0.5) {
            const t = target.progress * 2;
            if (path.stepped === "horizontal-first") {
              frag.x = path.exitX * t;
              frag.y = 0;
            } else {
              frag.x = 0;
              frag.y = path.exitY * t;
            }
          } else {
            const t = (target.progress - 0.5) * 2;
            if (path.stepped === "horizontal-first") {
              frag.x = path.exitX;
              frag.y = path.exitY * t;
            } else {
              frag.x = path.exitX * t;
              frag.y = path.exitY;
            }
          }

          // Flash glow on detach
          frag.glow = Math.max(0, 1 - target.progress * 3);

          if (frag.opacity <= 0.01) return;

          ctx.save();
          ctx.translate(
            frag.targetX + frag.x + frag.sourceWidth / 2,
            frag.targetY + frag.y + frag.sourceHeight / 2
          );
          ctx.rotate((frag.rotation * Math.PI) / 180);
          ctx.scale(frag.scale, frag.scale);
          ctx.globalAlpha = frag.opacity;

          // Fast simulated border-glow plate
          if (frag.glow > 0.05) {
            ctx.fillStyle = `rgba(46, 230, 230, ${frag.glow * 0.25})`;
            ctx.fillRect(
              -frag.sourceWidth / 2 - 4,
              -frag.sourceHeight / 2 - 4,
              frag.sourceWidth + 8,
              frag.sourceHeight + 8
            );
          }

          // Draw image crop
          ctx.drawImage(
            outgoingTexture,
            frag.sourceX,
            frag.sourceY,
            frag.sourceWidth,
            frag.sourceHeight,
            -frag.sourceWidth / 2,
            -frag.sourceHeight / 2,
            frag.sourceWidth,
            frag.sourceHeight
          );

          // 1px cyan border outline
          ctx.strokeStyle = transitionConfig.borderColor;
          ctx.lineWidth = 1;
          ctx.strokeRect(-frag.sourceWidth / 2, -frag.sourceHeight / 2, frag.sourceWidth, frag.sourceHeight);

          ctx.restore();
        });
      }

      // Draw Incoming page fragments
      if (incomingTexture) {
        incomingFrags.forEach((frag, i) => {
          const target = incomingTargets[i];
          frag.scale = target.scale;
          frag.opacity = target.opacity;
          frag.rotation = target.rotation;

          // Stepped trace calculations (inward)
          const path = paths[i];
          const invProgress = 1 - target.progress; // 1 to 0

          if (invProgress < 0.5) {
            const t = invProgress * 2; // 1 to 0
            if (path.stepped === "horizontal-first") {
              frag.x = path.startX * t;
              frag.y = 0;
            } else {
              frag.x = 0;
              frag.y = path.startY * t;
            }
          } else {
            const t = (invProgress - 0.5) * 2; // 1 to 0
            if (path.stepped === "horizontal-first") {
              frag.x = path.startX;
              frag.y = path.startY * t;
            } else {
              frag.x = path.startX * t;
              frag.y = path.startY;
            }
          }

          // Glow flash on "snap" arrival
          if (target.progress > 0.8) {
            frag.glow = (target.progress - 0.8) * 5; // ramp to 1
          } else {
            frag.glow = 0;
          }

          if (frag.opacity <= 0.01) return;

          ctx.save();
          ctx.translate(
            frag.targetX + frag.x + frag.sourceWidth / 2,
            frag.targetY + frag.y + frag.sourceHeight / 2
          );
          ctx.rotate((frag.rotation * Math.PI) / 180);
          ctx.scale(frag.scale, frag.scale);
          ctx.globalAlpha = frag.opacity;

          if (frag.glow > 0.05) {
            ctx.fillStyle = `rgba(46, 230, 230, ${frag.glow * 0.25})`;
            ctx.fillRect(
              -frag.sourceWidth / 2 - 4,
              -frag.sourceHeight / 2 - 4,
              frag.sourceWidth + 8,
              frag.sourceHeight + 8
            );
          }

          ctx.drawImage(
            incomingTexture,
            frag.sourceX,
            frag.sourceY,
            frag.sourceWidth,
            frag.sourceHeight,
            -frag.sourceWidth / 2,
            -frag.sourceHeight / 2,
            frag.sourceWidth,
            frag.sourceHeight
          );

          ctx.strokeStyle = transitionConfig.borderColor;
          ctx.lineWidth = 1;
          ctx.strokeRect(-frag.sourceWidth / 2, -frag.sourceHeight / 2, frag.sourceWidth, frag.sourceHeight);

          ctx.restore();
        });
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      tl.kill();
    };
  }, [outgoingTexture, incomingTexture, origin, onComplete]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-[9998] pointer-events-none"
      style={{ mixBlendMode: "normal" }}
    />
  );
}
