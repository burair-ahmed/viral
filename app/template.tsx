"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function Template({ children }: { children: ReactNode }) {
  return (
    <>
      {/* Staggered Vertical Columns Shutter Page Transition */}
      <div className="fixed inset-0 grid grid-cols-5 pointer-events-none z-[9999]">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="w-full h-screen bg-[#071822] relative flex flex-col justify-end"
            initial={{ y: "0%" }}
            animate={{ y: "-100%" }}
            transition={{
              duration: 0.6,
              ease: [0.76, 0, 0.24, 1],
              delay: i * 0.08,
            }}
          >
            {/* Glowing cyan laser scanning lines at the bottom of each sliding column */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#2EE6E6] shadow-glow" />
          </motion.div>
        ))}
      </div>
      
      {/* Content wrapper with slight fade and push up */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
      >
        {children}
      </motion.div>
    </>
  );
}
