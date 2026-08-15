"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { serif } from "@/app/fonts";
import { RotatingText } from "@/components/ui/RotatingText";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.75], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.75], [0, 40]);

  const rotatingWords = ["Data-Driven", "Innovative", "Analytical", "Impactful"];

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative flex flex-col min-h-[100dvh] w-full items-center justify-center bg-transparent select-none text-foreground overflow-hidden"
    >
      <motion.main
        style={{ opacity, scale, y }}
        className="relative w-full min-h-[100dvh] flex flex-col items-center justify-between overflow-hidden pt-24 sm:pt-28 pb-8 sm:pb-12"
      >
        <div className="flex-1 flex flex-col items-center justify-center w-full">
          {/* Main Hero Title & Actions */}
          <section className="relative z-10 flex flex-col items-center justify-center text-center gap-6 sm:gap-8 max-w-5xl mx-auto px-4 sm:px-6 w-full">
            <motion.h1
              initial={{ opacity: 0, y: 35, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
              className={`${serif.className} text-foreground text-center text-balance font-normal tracking-tight text-[10vw] xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl drop-shadow-md leading-tight sm:leading-none max-w-full overflow-hidden`}
            >
              Aditya Chaturvedi
            </motion.h1>

            {/* Quant Subtitle Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[10px] xs:text-xs sm:text-sm font-mono tracking-[0.12em] sm:tracking-[0.25em] text-primary/90 font-semibold uppercase px-3 sm:px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20 backdrop-blur-md shadow-sm max-w-full text-center"
            >
              <span>Technology</span>
              <span className="text-primary/40 font-light">•</span>
              <span>Finance</span>
              <span className="text-primary/40 font-light">•</span>
              <span>Strategy</span>
            </motion.div>

            {/* Minimalist Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-center gap-5 sm:gap-6 pt-1 sm:pt-2"
            >
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Link
                  href="#contact"
                  className="group relative inline-flex items-center text-foreground/80 hover:text-foreground font-mono text-xs sm:text-base font-medium tracking-wide transition-colors cursor-pointer"
                >
                  <span>Contact Me</span>
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              </motion.div>

              <span className="text-foreground/20 font-light select-none">|</span>

              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Link
                  href="#projects"
                  className="group relative inline-flex items-center gap-1 text-foreground/80 hover:text-foreground font-mono text-xs sm:text-base font-medium tracking-wide transition-colors cursor-pointer"
                >
                  <span>View Works</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-primary/70 group-hover:text-primary transition-colors" />
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              </motion.div>
            </motion.div>
          </section>
        </div>

        {/* Rotating Text - Safe Responsive Bottom Placement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20 pointer-events-none flex items-center justify-center text-center max-w-full px-4 pt-4 pb-2 sm:pb-6 shrink-0"
        >
          <div className="flex items-center justify-center gap-2 sm:gap-3.5 font-mono text-base sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-foreground text-center">
            <span className="text-foreground/40 font-light whitespace-nowrap">
              Stay
            </span>
            <RotatingText
              texts={rotatingWords}
              rotationInterval={2500}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              staggerDuration={0.02}
              splitBy="none"
              loop
              auto
              mainClassName="inline-flex items-center justify-center whitespace-nowrap font-mono text-base sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center"
              elementLevelClassName="inline-block"
            />
          </div>
        </motion.div>
      </motion.main>
    </section>
  );
}
