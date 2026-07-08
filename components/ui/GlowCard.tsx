"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  cursorViewText?: string;
}

export default function GlowCard({ children, className = "", cursorViewText }: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for tracking mouse relative position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for rotation
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { damping: 20, stiffness: 200 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { damping: 20, stiffness: 200 });

  // Glowing circle position variables
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Relative position inside the card (-0.5 to 0.5)
    const relativeX = (e.clientX - rect.left) / rect.width - 0.5;
    const relativeY = (e.clientY - rect.top) / rect.height - 0.5;
    
    x.set(relativeX);
    y.set(relativeY);

    // Absolute pixel position inside the card for radial gradient
    glowX.set(e.clientX - rect.left);
    glowY.set(e.clientY - rect.top);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-cursor-view={cursorViewText}
      className={`relative rounded-xl border border-accent-cyan-dim/15 bg-bg-secondary/40 backdrop-blur-sm p-8 overflow-hidden transition-colors duration-500 hover:border-accent-cyan-dim/30 ${className}`}
      style={{
        perspective: 1000,
      }}
    >
      {/* 3D tilt content layer */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative z-10 w-full h-full"
      >
        {children}
      </motion.div>

      {/* Radial glow background layer */}
      <motion.div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
          background: useTransform(
            [glowX, glowY],
            ([gx, gy]) =>
              `radial-gradient(circle 200px at ${gx}px ${gy}px, rgba(46, 230, 230, 0.08) 0%, transparent 100%)`
          ),
        }}
      />
      
      {/* Sleek border glow tracing */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-xl transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
          border: "1px solid transparent",
          backgroundImage: useTransform(
            [glowX, glowY],
            ([gx, gy]) =>
              `radial-gradient(circle 120px at ${gx}px ${gy}px, rgba(46, 230, 230, 0.4) 0%, transparent 100%)`
          ),
          backgroundClip: "border-box",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
    </div>
  );
}
