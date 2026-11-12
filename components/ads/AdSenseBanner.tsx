"use client";

import { useEffect, useRef } from "react";

interface AdSenseBannerProps {
  slot?: string;
  format?: "auto" | "fluid" | "rectangle" | "horizontal";
  responsive?: boolean;
  className?: string;
}

export default function AdSenseBanner({
  slot = "1234567890",
  format = "auto",
  responsive = true,
  className = "",
}: AdSenseBannerProps) {
  const adRef = useRef<HTMLModElement>(null);
  const isLoaded = useRef(false);

  useEffect(() => {
    // Prevent duplicate adsbygoogle push on fast re-renders
    if (isLoaded.current) return;

    try {
      if (typeof window !== "undefined") {
        // @ts-expect-error - adsbygoogle is loaded via external script
        const adsbygoogle = window.adsbygoogle || [];
        adsbygoogle.push({});
        isLoaded.current = true;
      }
    } catch (err) {
      console.warn("AdSense push notification notice:", err);
    }
  }, []);

  return (
    <div
      className={`w-full my-8 p-4 rounded-xl border border-accent-cyan-dim/15 bg-bg-secondary/30 backdrop-blur-sm text-center overflow-hidden ${className}`}
    >
      <div className="text-[10px] uppercase font-bold tracking-widest text-white/30 mb-2">
        Advertisement
      </div>
      <div className="min-h-[100px] flex items-center justify-center">
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-9834908799284038"
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive={responsive ? "true" : "false"}
        />
      </div>
    </div>
  );
}

