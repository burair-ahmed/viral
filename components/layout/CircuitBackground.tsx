"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  originalX: number;
  originalY: number;
  vx: number;
  vy: number;
  radius: number;
}

interface Connection {
  from: Node;
  to: Node;
  active: boolean;
  progress: number;
  speed: number;
}

export default function CircuitBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const nodes: Node[] = [];
    const connections: Connection[] = [];
    const maxNodes = 40;
    const connectionDistance = 150;

    // Initialize nodes in a grid-like fashion with slight offsets for circuit look
    const cols = Math.ceil(width / 180);
    const rows = Math.ceil(height / 180);

    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        if (nodes.length >= maxNodes) break;
        // Avoid placing too many nodes in small viewports
        if (Math.random() > 0.6) continue;

        const x = c * 180 + Math.random() * 60 + 40;
        const y = r * 180 + Math.random() * 60 + 40;

        nodes.push({
          x,
          y,
          originalX: x,
          originalY: y,
          vx: (Math.random() - 0.5) * 0.2, // very slow drift
          vy: (Math.random() - 0.5) * 0.2,
          radius: Math.random() * 1.5 + 1,
        });
      }
    }

    // Establish connections with Manhattan-like paths (circuit traces)
    for (let i = 0; i < nodes.length; i++) {
      let connectionCount = 0;
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = Math.abs(nodes[i].x - nodes[j].x);
        const dy = Math.abs(nodes[i].y - nodes[j].y);
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < connectionDistance && connectionCount < 3) {
          connections.push({
            from: nodes[i],
            to: nodes[j],
            active: Math.random() > 0.5,
            progress: Math.random(),
            speed: 0.002 + Math.random() * 0.003,
          });
          connectionCount++;
        }
      }
    }

    const resizeCanvas = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);

    // Animation Loop
    let lastTime = 0;
    const animate = (time: number) => {
      // Pause if tab is inactive
      if (document.hidden) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // 1. Draw grid backdrop (very faint)
      ctx.strokeStyle = "rgba(46, 230, 230, 0.015)";
      ctx.lineWidth = 1;
      const gridSize = 60;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 2. Update and drift nodes slightly
      nodes.forEach((node) => {
        // Drift within a 20px boundary from original coordinates
        node.x += node.vx;
        node.y += node.vy;

        const dx = node.x - node.originalX;
        const dy = node.y - node.originalY;

        if (Math.abs(dx) > 15) node.vx *= -1;
        if (Math.abs(dy) > 15) node.vy *= -1;

        // Draw nodes
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(46, 230, 230, 0.15)";
        ctx.fill();
      });

      // 3. Draw circuit connection lines
      connections.forEach((conn) => {
        ctx.beginPath();
        ctx.moveTo(conn.from.x, conn.from.y);
        
        // Manhattan layout drawing (orthogonal lines)
        // Draw horizontal then vertical
        const midX = (conn.from.x + conn.to.x) / 2;
        ctx.lineTo(midX, conn.from.y);
        ctx.lineTo(midX, conn.to.y);
        ctx.lineTo(conn.to.x, conn.to.y);
        
        ctx.strokeStyle = "rgba(46, 230, 230, 0.05)";
        ctx.lineWidth = 1;
        ctx.stroke();

        // 4. Drifting glow particles along active connections
        if (conn.active) {
          conn.progress += conn.speed;
          if (conn.progress > 1) {
            conn.progress = 0;
            conn.active = Math.random() > 0.3; // Randomly deactivate to make it dynamic
          }

          // Interpolated point along the path
          let px = conn.from.x;
          let py = conn.from.y;
          const midX = (conn.from.x + conn.to.x) / 2;

          if (conn.progress < 0.5) {
            // First leg: Horizontal to midX
            const segmentProgress = conn.progress * 2; // 0 to 1
            px = conn.from.x + (midX - conn.from.x) * segmentProgress;
            py = conn.from.y;
          } else {
            // Second and third leg (combined for simplified smooth rendering)
            const segmentProgress = (conn.progress - 0.5) * 2; // 0 to 1
            px = midX + (conn.to.x - midX) * segmentProgress;
            py = conn.from.y + (conn.to.y - conn.from.y) * segmentProgress;
          }

          ctx.beginPath();
          ctx.arc(px, py, 2, 0, Math.PI * 2);
          ctx.fillStyle = "#2EE6E6";
          ctx.shadowColor = "#2EE6E6";
          ctx.shadowBlur = 8;
          ctx.fill();
          
          // Reset shadow config
          ctx.shadowColor = "transparent";
          ctx.shadowBlur = 0;
        } else if (Math.random() < 0.005) {
          // Reactivate random inactive connections
          conn.active = true;
          conn.progress = 0;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 bg-[#071822]"
    />
  );
}
