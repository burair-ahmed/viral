"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "glow" | "sheen";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "glow",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center font-sans font-bold tracking-wider uppercase transition-all duration-300 rounded-lg overflow-hidden select-none cursor-pointer focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";
  
  const sizeStyles = {
    sm: "px-5 py-2.5 text-xs",
    md: "px-7 py-3.5 text-sm",
    lg: "px-9 py-4.5 text-base",
  };

  const variantStyles = {
    glow: "bg-gradient-to-r from-accent-cyan to-[#0a9ca3] text-[#071822] hover:shadow-glow-strong hover:scale-[1.02] border border-transparent active:scale-95",
    sheen: "bg-transparent text-[#2EE6E6] border border-[#2EE6E6] hover:bg-accent-cyan-glow/10 active:scale-95",
  };

  const content = (
    <>
      {/* Sheen sweep animation effect */}
      {variant === "sheen" && (
        <span className="absolute inset-0 block w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[sheen_1.5s_infinite]" />
      )}
      <span className="relative z-10">{children}</span>
    </>
  );

  const innerStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className} group`;

  if (href) {
    return (
      <Link href={href} className="inline-block">
        <motion.div
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className={innerStyles}
        >
          {content}
        </motion.div>
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={innerStyles}
    >
      {content}
    </motion.button>
  );
}
