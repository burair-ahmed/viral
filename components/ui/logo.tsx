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

export default function Logo({ className = "", width = 140, height = 45, showText = true }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center group focus:outline-none ${className}`}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative flex items-center justify-center transition-all duration-300"
      >
        <Image
          src="/logo-1 (1).webp"
          alt="Viral Marketing Logo"
          width={width}
          height={height}
          className="object-contain filter transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(46,230,230,0.5)]"
          priority
        />
      </motion.div>
    </Link>
  );
}
