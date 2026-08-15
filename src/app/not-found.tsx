"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { serif } from "@/app/fonts";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);
  const [stage, setStage] = useState<
    "typing" | "searching" | "diagnostics" | "reveal" | "instant"
  >("typing");
  const [commandText, setCommandText] = useState("");
  const [progress, setProgress] = useState(0);
  const [diagnosticStep, setDiagnosticStep] = useState(0);

  const fullCommand = "> locate /requested-page";

  const diagnosticsList = [
    { label: "SIGNAL", dots: "..............", result: "LOST", color: "text-red-400/90" },
    { label: "ROUTE", dots: "...............", result: "NOT FOUND", color: "text-foreground/70" },
    { label: "STATUS", dots: "..............", result: "404", color: "text-emerald-400" },
  ];

  const mobileDiagnosticsList = [
    { label: "SIGNAL", dots: "....", result: "LOST", color: "text-red-400/90" },
    { label: "ROUTE", dots: ".....", result: "NOT FOUND", color: "text-foreground/70" },
    { label: "STATUS", dots: "....", result: "404", color: "text-emerald-400" },
  ];

  useEffect(() => {
    setMounted(true);
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setStage("instant");
      return;
    }

    // Stage 1: Type "> locate /requested-page"
    let charIdx = 0;
    const typeInterval = setInterval(() => {
      if (charIdx <= fullCommand.length) {
        setCommandText(fullCommand.slice(0, charIdx));
        charIdx++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => setStage("searching"), 200);
      }
    }, 45);

    return () => clearInterval(typeInterval);
  }, []);

  // Stage 2: Progress Animation
  useEffect(() => {
    if (stage === "searching") {
      let currentProgress = 0;
      const progressInterval = setInterval(() => {
        currentProgress += 10;
        if (currentProgress <= 100) {
          setProgress(currentProgress);
        } else {
          clearInterval(progressInterval);
          setTimeout(() => setStage("diagnostics"), 200);
        }
      }, 70);

      return () => clearInterval(progressInterval);
    }

    if (stage === "diagnostics") {
      let step = 0;
      const diagInterval = setInterval(() => {
        step++;
        setDiagnosticStep(step);
        if (step >= diagnosticsList.length) {
          clearInterval(diagInterval);
          setTimeout(() => setStage("reveal"), 300);
        }
      }, 180);

      return () => clearInterval(diagInterval);
    }
  }, [stage, diagnosticsList.length]);

  if (!mounted) return null;

  const isInstant = stage === "instant";
  const isRevealed = stage === "reveal" || isInstant;

  return (
    <div className="relative min-h-screen w-full bg-[#050505] text-foreground font-mono flex flex-col justify-between items-center px-4 py-8 select-none overflow-hidden">
      {/* Subtle CRT Scanline Texture Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] opacity-10 pointer-events-none" />

      {/* Ambient Quant Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-950/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Top Margin Spacer */}
      <div className="w-full max-w-4xl" />

      {/* Main Terminal Container */}
      <main className="w-full max-w-2xl my-auto py-8 flex flex-col items-start justify-center space-y-8 z-10">
        {!isInstant && (
          <div className="w-full space-y-4 text-xs sm:text-sm tracking-wider">
            {/* Command Input Line */}
            <div className="flex items-center gap-2 text-foreground/90 font-mono">
              <span>{commandText}</span>
              {stage === "typing" && <span className="animate-pulse text-emerald-400 font-bold">▌</span>}
            </div>

            {/* Searching Indicator & Progress */}
            {(stage === "searching" || stage === "diagnostics" || stage === "reveal") && (
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-2 pt-2 text-muted-foreground/80"
              >
                <div>SEARCHING...</div>
                <div className="flex items-center gap-3 text-emerald-400 font-bold">
                  <div className="tracking-widest">
                    {"█".repeat(Math.floor(progress / 10))}
                    <span className="text-foreground/20">
                      {"█".repeat(10 - Math.floor(progress / 10))}
                    </span>
                  </div>
                  <span>{progress}%</span>
                </div>
              </motion.div>
            )}

            {/* Diagnostic Output Items */}
            {(stage === "diagnostics" || stage === "reveal") && (
              <div className="pt-2 space-y-2 font-mono text-xs sm:text-sm">
                {/* Desktop Diagnostics */}
                <div className="hidden sm:block space-y-1.5">
                  {diagnosticsList.slice(0, diagnosticStep).map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -4 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground">{item.label}</span>
                        <span className="text-foreground/20">{item.dots}</span>
                      </div>
                      <span className={`font-bold tracking-widest ${item.color}`}>
                        {item.result}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile Diagnostics */}
                <div className="block sm:hidden space-y-1.5">
                  {mobileDiagnosticsList.slice(0, diagnosticStep).map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -4 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground">{item.label}</span>
                        <span className="text-foreground/20">{item.dots}</span>
                      </div>
                      <span className={`font-bold tracking-widest ${item.color}`}>
                        {item.result}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Signal Status Bar Animation */}
        <AnimatePresence>
          {isRevealed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="w-full space-y-8 pt-4"
            >
              {/* Subtle Signal Loss Divider */}
              <div className="w-full flex items-center justify-between text-[10px] sm:text-xs text-muted-foreground/60 border-t border-b border-border/20 py-2 font-mono">
                <span>SIGNAL STRENGTH:</span>
                <span className="text-red-400 font-semibold tracking-widest">
                  ░░░░░░░░░░ [0%]
                </span>
              </div>

              {/* Main 404 Display & Typography */}
              <div className="flex flex-col items-start justify-center space-y-3">
                <h1
                  className={`${serif.className} text-7xl sm:text-8xl md:text-9xl font-normal tracking-tight text-foreground drop-shadow-md`}
                >
                  404
                </h1>

                <div className="text-sm sm:text-base font-mono font-bold tracking-[0.2em] text-red-400 uppercase">
                  SIGNAL LOST.
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground font-mono font-light leading-relaxed max-w-md pt-1">
                  The route you&apos;re looking for doesn&apos;t exist or has been moved in the system.
                </p>
              </div>

              {/* Command Style CTA Button */}
              <div className="pt-6">
                <Link
                  href="/"
                  className="group inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-semibold text-foreground bg-white/5 hover:bg-white/10 border border-white/15 px-5 py-3 rounded-lg transition-all duration-200 cursor-pointer shadow-lg"
                >
                  <span className="text-emerald-400 font-bold group-hover:translate-x-0.5 transition-transform">
                    &gt;
                  </span>
                  <span>return --home</span>
                  <span className="animate-pulse text-emerald-400 font-bold ml-0.5">▌</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Bottom Terminal Status Footer */}
      <footer className="w-full max-w-4xl flex items-center justify-between text-[10px] sm:text-xs font-mono text-muted-foreground/60 pt-6 border-t border-border/20 z-10">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>SYSTEM STATUS: ONLINE</span>
        </div>

        <div className="uppercase tracking-widest font-semibold text-foreground/70">
          ADITYA CHATURVEDI
        </div>
      </footer>
    </div>
  );
}
