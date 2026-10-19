"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function FloatingBackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 250px
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Check initial scroll position
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50 flex items-center group"
        >
          {/* Tooltip on hover */}
          <span className="absolute right-16 px-3 py-1.5 rounded-lg bg-bg-secondary/95 border border-accent-cyan-dim/30 text-xs font-semibold text-white tracking-wide shadow-xl backdrop-blur-md whitespace-nowrap opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            Back to Top
          </span>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-bg-secondary/90 border border-accent-cyan-dim/40 text-accent-cyan hover:text-[#39D7FF] hover:border-[#39D7FF] shadow-[0_0_20px_rgba(22,139,255,0.3)] hover:shadow-[0_0_25px_rgba(57,215,255,0.6)] backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
          >
            <ArrowUp
              size={20}
              className="group-hover:-translate-y-1 transition-transform duration-300 text-[#39D7FF]"
            />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
