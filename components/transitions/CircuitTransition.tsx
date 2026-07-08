"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useCircuitCapture } from "./useCircuitCapture";
import CircuitCanvasLayer from "./CircuitCanvasLayer";

interface CircuitTransitionProps {
  children: React.ReactNode;
}

export default function CircuitTransition({ children }: CircuitTransitionProps) {
  const router = useRouter();
  const currentPathname = usePathname();

  const [outgoingTexture, setOutgoingTexture] = useState<HTMLImageElement | null>(null);
  const [incomingTexture, setIncomingTexture] = useState<HTMLImageElement | null>(null);
  const [origin, setOrigin] = useState({ x: 0, y: 0 });
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPendingRouteSwap, setIsPendingRouteSwap] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const { capture } = useCircuitCapture();
  const transitionInProgress = useRef(false);

  // Default coordinate center fallback (for popstate/programmatic routing)
  const getCenterCoords = () => ({
    x: typeof window !== "undefined" ? window.innerWidth / 2 : 0,
    y: typeof window !== "undefined" ? window.innerHeight / 2 : 0,
  });

  // Intercept all internal <a> tag clicks globally
  useEffect(() => {
    const handleGlobalClick = async (e: MouseEvent) => {
      // Find closest anchor tag
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Intercept only internal navigations (not anchors, external links, or target=_blank)
      const isInternal = href.startsWith("/") || href.startsWith(window.location.origin);
      const isHash = href.includes("#") || href === "/#services"; // exclude hash scrolling anchors
      const isExternal = anchor.getAttribute("target") === "_blank";

      if (isInternal && !isHash && !isExternal) {
        // Prevent rapid click spamming during active transitions
        if (transitionInProgress.current) {
          e.preventDefault();
          return;
        }

        e.preventDefault();
        transitionInProgress.current = true;

        // 1. Capture click coordinates for shockwave origin
        setOrigin({ x: e.clientX, y: e.clientY });

        // 2. Start transition flow
        await performTransition(href);
      }
    };

    window.addEventListener("click", handleGlobalClick);
    return () => window.removeEventListener("click", handleGlobalClick);
  }, [capture, router]);

  // Handle popstate (browser back/forward button clicks)
  useEffect(() => {
    const handlePop = () => {
      setOrigin(getCenterCoords());
      // On browser pop, Next.js executes routing instantly, so we default to a direct page reveal
    };
    window.addEventListener("popstate", handlePop);
    return () => window.removeEventListener("popstate", handlePop);
  }, []);

  const performTransition = async (targetHref: string) => {
    const container = containerRef.current;
    if (!container) {
      router.push(targetHref);
      transitionInProgress.current = false;
      return;
    }

    // 1. Check OS preferences for reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      // Direct crossfade without heavy Canvas deconstructions
      container.style.transition = "opacity 300ms ease";
      container.style.opacity = "0";
      setTimeout(() => {
        router.push(targetHref);
        setTimeout(() => {
          container.style.opacity = "1";
          transitionInProgress.current = false;
        }, 150);
      }, 300);
      return;
    }

    // Disable body pointer events to prevent interactions during animation
    document.body.style.pointerEvents = "none";
    document.body.style.overflow = "hidden";

    // 2. Snapshot current outgoing DOM state
    const outgoingImg = await capture(container);
    if (!outgoingImg) {
      // Fallback in case capture fails
      router.push(targetHref);
      document.body.style.pointerEvents = "auto";
      document.body.style.overflow = "auto";
      transitionInProgress.current = false;
      return;
    }

    setOutgoingTexture(outgoingImg);
    setIsTransitioning(true);
    setIsPendingRouteSwap(true);

    // 3. Trigger route changes in background under canvas cover
    router.push(targetHref);
  };

  // Triggered when Next.js swaps the route DOM (pathname updates)
  useEffect(() => {
    if (!isPendingRouteSwap) return;

    const captureIncoming = async () => {
      const container = containerRef.current;
      if (!container) {
        completeTransition();
        return;
      }

      // Wait 1 animation frame for Next.js 16 to mount and paint the new route DOM fully
      requestAnimationFrame(async () => {
        const incomingImg = await capture(container);
        if (incomingImg) {
          setIncomingTexture(incomingImg);
        } else {
          // If incoming capture fails, exit transition cleanly
          completeTransition();
        }
      });
    };

    captureIncoming();
  }, [currentPathname, isPendingRouteSwap, capture]);

  const completeTransition = () => {
    setOutgoingTexture(null);
    setIncomingTexture(null);
    setIsTransitioning(false);
    setIsPendingRouteSwap(false);
    transitionInProgress.current = false;

    // Restore user scrolling and click interactions
    document.body.style.pointerEvents = "auto";
    document.body.style.overflow = "auto";
  };

  return (
    <>
      {/* Real DOM Content wrapper */}
      <div
        ref={containerRef}
        id="transition-content-root"
        className="w-full min-h-screen"
        style={{
          opacity: isTransitioning && !incomingTexture ? 0 : 1,
          visibility: isTransitioning && !incomingTexture ? "hidden" : "visible",
        }}
      >
        {children}
      </div>

      {/* High-fidelity Canvas Fragment Animating overlay */}
      {isTransitioning && outgoingTexture && (
        <CircuitCanvasLayer
          outgoingTexture={outgoingTexture}
          incomingTexture={incomingTexture}
          origin={origin}
          onComplete={completeTransition}
        />
      )}
    </>
  );
}
