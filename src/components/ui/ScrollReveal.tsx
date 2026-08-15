"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ScrollRevealTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export function ScrollRevealText({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
}: ScrollRevealTextProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Apple cubic-bezier ease out
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface ScrollRevealCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function ScrollRevealCard({
  children,
  className = "",
  delay = 0,
}: ScrollRevealCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 45, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
