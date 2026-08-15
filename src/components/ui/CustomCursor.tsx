"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Exact pointer position (for inner dot)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth lerp springs for trailing outer ring
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Hide native cursor when active
    document.documentElement.classList.add("cursor-none");
    document.body.classList.add("cursor-none");

    const updateCursorPosition = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.getAttribute("role") === "button" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest("input") ||
        target.closest("textarea") ||
        window.getSelection()?.toString().length! > 0;

      setIsHovered(!!isInteractive);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", updateCursorPosition);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.documentElement.classList.remove("cursor-none");
      document.body.classList.remove("cursor-none");
      window.removeEventListener("mousemove", updateCursorPosition);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[999] overflow-hidden select-none">
      {/* Outer Circle Ring - Trails with lerp spring & expands/combines on hover */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? 48 : 36,
          height: isHovered ? 48 : 36,
          backgroundColor: isHovered ? "rgba(255, 255, 255, 0.25)" : "rgba(255, 255, 255, 0)",
          borderColor: isHovered ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0.8)",
          borderWidth: isHovered ? 1.5 : 2,
          boxShadow: isHovered
            ? "0 0 25px rgba(255, 255, 255, 0.4), inset 0 0 15px rgba(255, 255, 255, 0.2)"
            : "0 0 10px rgba(255, 255, 255, 0.2)",
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 300,
          mass: 0.4,
        }}
        className="fixed top-0 left-0 rounded-full border backdrop-blur-[1px]"
      />

      {/* Inner Solid White Dot - Precise position, morphs into outer ring on hover */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 3.8 : 1,
          opacity: isHovered ? 0 : 1,
        }}
        transition={{
          duration: 0.25,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
      />
    </div>
  );
}
