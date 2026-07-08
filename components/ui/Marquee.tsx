import { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  direction?: "left" | "right";
  speed?: string;
  pauseOnHover?: boolean;
  className?: string;
}

export default function Marquee({
  children,
  direction = "left",
  speed = "30s",
  pauseOnHover = true,
  className = "",
}: MarqueeProps) {
  return (
    <div className={`overflow-hidden flex w-full relative select-none ${className}`}>
      {/* Tape 1 */}
      <div
        className={`flex min-w-full shrink-0 items-center justify-around gap-8 whitespace-nowrap ${
          direction === "left" ? "animate-[marquee-left_var(--speed)_linear_infinite]" : "animate-[marquee-right_var(--speed)_linear_infinite]"
        } ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
        style={{
          "--speed": speed,
        } as React.CSSProperties}
      >
        {children}
      </div>
      {/* Tape 2 (seamless duplication) */}
      <div
        aria-hidden
        className={`flex min-w-full shrink-0 items-center justify-around gap-8 whitespace-nowrap ${
          direction === "left" ? "animate-[marquee-left_var(--speed)_linear_infinite]" : "animate-[marquee-right_var(--speed)_linear_infinite]"
        } ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
        style={{
          "--speed": speed,
        } as React.CSSProperties}
      >
        {children}
      </div>
    </div>
  );
}
