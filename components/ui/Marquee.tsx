"use client";

import { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  direction?: "left" | "right";
  speed?: string;
  pauseOnHover?: boolean;
  className?: string;
  repeat?: number;
}

export default function Marquee({
  children,
  direction = "left",
  speed = "35s",
  pauseOnHover = true,
  className = "",
  repeat = 3,
}: MarqueeProps) {
  const animClass = direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div
      className={`group flex overflow-hidden w-full select-none ${className}`}
      style={{ "--marquee-speed": speed } as React.CSSProperties}
    >
      {/* Track 1 */}
      <div
        className={`flex shrink-0 items-center justify-around ${animClass} ${
          pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""
        }`}
      >
        {Array.from({ length: repeat }).map((_, index) => (
          <div key={`track-1-${index}`} className="flex shrink-0 items-center">
            {children}
          </div>
        ))}
      </div>

      {/* Track 2 (Seamless Infinite Clone) */}
      <div
        aria-hidden="true"
        className={`flex shrink-0 items-center justify-around ${animClass} ${
          pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""
        }`}
      >
        {Array.from({ length: repeat }).map((_, index) => (
          <div key={`track-2-${index}`} className="flex shrink-0 items-center">
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}
