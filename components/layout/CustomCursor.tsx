"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [cursorType, setCursorType] = useState<"default" | "hover" | "view">("default");
  const [cursorText, setCursorText] = useState("");

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    setMounted(true);
    
    // Add custom cursor styling class to body
    document.body.classList.add("custom-cursor-active");

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const closestLink = target.closest("a, button, [role='button'], input[type='submit']");
      const closestViewCard = target.closest("[data-cursor-view]");

      if (closestViewCard) {
        setCursorType("view");
        setCursorText(closestViewCard.getAttribute("data-cursor-view") || "VIEW");
      } else if (closestLink) {
        setCursorType("hover");
        setCursorText("");
      } else {
        setCursorType("default");
        setCursorText("");
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!mounted) return null;

  const variants = {
    default: {
      width: 12,
      height: 12,
      backgroundColor: "#168BFF",
      border: "0px solid #168BFF",
    },
    hover: {
      width: 48,
      height: 48,
      backgroundColor: "rgba(57, 215, 255, 0.12)",
      border: "2px solid #39D7FF",
    },
    view: {
      width: 72,
      height: 72,
      backgroundColor: "rgba(57, 215, 255, 0.15)",
      border: "2px solid #39D7FF",
    },
  };

  return (
    <>
      {/* Central dot following mouse exactly */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-[#168BFF] rounded-full pointer-events-none z-[9999] mix-blend-difference -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] flex items-center justify-center -translate-x-1/2 -translate-y-1/2 hidden md:flex text-[9px] font-bold tracking-widest text-[#39D7FF] uppercase font-sans drop-shadow-[0_0_8px_rgba(57,215,255,0.6)]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={cursorType}
        variants={variants}
        transition={{ type: "spring", stiffness: 250, damping: 25 }}
      >
        {cursorType === "view" && <span className="animate-pulse">{cursorText}</span>}
      </motion.div>
    </>
  );
}
