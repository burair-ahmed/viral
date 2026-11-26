"use client";

import { useEffect, useRef } from "react";

interface EzoicPlaceholderProps {
  id: number;
  className?: string;
  label?: boolean;
}

export default function EzoicPlaceholder({
  id,
  className = "",
  label = true,
}: EzoicPlaceholderProps) {
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    if (typeof window !== "undefined" && window.ezstandalone) {
      window.ezstandalone.cmd.push(() => {
        const ez = window.ezstandalone;
        if (!ez) return;

        ez.define(id);
        if (!ez.enabled) {
          ez.enable();
          ez.display();
        } else {
          ez.displayMore();
        }
      });
    }
  }, [id]);

  return (
    <div
      className={`w-full my-8 p-4 rounded-xl border border-accent-cyan-dim/15 bg-bg-secondary/30 backdrop-blur-sm text-center overflow-hidden ${className}`}
    >
      {label && (
        <div className="text-[10px] uppercase font-bold tracking-widest text-white/30 mb-2">
          Advertisement
        </div>
      )}
      <div
        id={`ezoic-pub-ad-placeholder-${id}`}
        style={{ minHeight: "250px" }}
      />
    </div>
  );
}

