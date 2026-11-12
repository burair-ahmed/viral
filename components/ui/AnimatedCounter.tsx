"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export default function AnimatedCounter({
  value,
  duration = 2,
  decimals = 0,
  prefix = "",
  suffix = "",
  className = "",
}: AnimatedCounterProps) {
  const formatNumber = useCallback(
    (num: number) => {
      return num.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      });
    },
    [decimals]
  );

  // Crucial for SEO & AdSense bots: default to actual target value so initial HTML contains real metrics
  const [displayValue, setDisplayValue] = useState<string>(() =>
    value.toLocaleString(undefined, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })
  );

  const hasStartedAnimation = useRef(false);
  const elementRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(elementRef, { once: true, margin: "0px" });

  useEffect(() => {
    if (!isInView || hasStartedAnimation.current) return;
    hasStartedAnimation.current = true;

    let startTime: number | null = null;
    const startValue = 0;
    let animFrameId: number;

    const animateCount = (timestamp: number) => {
      if (!startTime) {
        startTime = timestamp;
        setDisplayValue(formatNumber(0));
      }
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      // Easing function: easeOutQuad
      const easedProgress = progress * (2 - progress);
      const rawCurrent = startValue + easedProgress * (value - startValue);

      if (progress >= 1) {
        setDisplayValue(formatNumber(value));
      } else {
        setDisplayValue(formatNumber(rawCurrent));
        animFrameId = requestAnimationFrame(animateCount);
      }
    };

    animFrameId = requestAnimationFrame(animateCount);
    return () => cancelAnimationFrame(animFrameId);
  }, [isInView, value, duration, formatNumber]);

  return (
    <span ref={elementRef} className={`font-display font-bold tabular-nums ${className}`}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
