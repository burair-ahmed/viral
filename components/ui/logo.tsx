"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  showText?: boolean;
}

export default function Logo({ className = "", width = 200, height = 64, showText = true }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center group focus:outline-none ${className}`}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative flex items-center justify-center transition-all duration-300"
      >
        <Image
          src="/new-logo.png"
          alt="Viral Marketing Logo"
          width={width}
          height={height}
          style={{ height: `${height}px`, width: "auto" }}
          className="object-contain filter transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(57,215,255,0.6)]"
          priority
        />
      </motion.div>
    </Link>
  );
}
