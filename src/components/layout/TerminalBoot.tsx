"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TerminalBootProps {
  onComplete: () => void;
}

export function TerminalBoot({ onComplete }: TerminalBootProps) {
  const [typedText, setTypedText] = useState("");
  const [stage, setStage] = useState<"typing" | "initializing" | "sequences" | "granted" | "collapsing" | "finished">("typing");
  const [sequenceIndex, setSequenceIndex] = useState(0);
  const [shouldSkip, setShouldSkip] = useState(false);

  const fullWord = "booting";

  const systemLines = [
    { id: "01", name: "CORE ENGINE", dots: "............", status: "OK" },
    { id: "02", name: "MARKET ENGINE", dots: "..........", status: "OK" },
    { id: "03", name: "AI ENGINE", dots: "..............", status: "OK" },
    { id: "04", name: "DATA SYSTEM", dots: "............", status: "OK" },
    { id: "05", name: "PROJECT DATABASE", dots: ".......", status: "OK" },
    { id: "06", name: "PORTFOLIO", dots: "..............", status: "READY" },
  ];

  // Mobile simplified lines
  const mobileSystemLines = [
    { id: "01", name: "CORE ENGINE", dots: "....", status: "OK" },
    { id: "02", name: "AI ENGINE", dots: "......", status: "OK" },
    { id: "03", name: "DATA", status: "OK" },
    { id: "04", name: "PORTFOLIO", status: "READY" },
  ];

  const hasStartedRef = useRef(false);

  useEffect(() => {
    if (hasStartedRef.current) return;
    hasStartedRef.current = true;

    // Check prefers-reduced-motion only
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setShouldSkip(true);
      onComplete();
      return;
    }

    // 1. Type "booting" character by character
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex <= fullWord.length) {
        setTypedText(fullWord.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setStage("initializing"), 300);
      }
    }, 120);

    return () => clearInterval(typingInterval);
  }, []);

  // Handle sequential lines
  useEffect(() => {
    if (stage === "initializing") {
      const timer = setTimeout(() => {
        setStage("sequences");
      }, 350);
      return () => clearTimeout(timer);
    }

    if (stage === "sequences") {
      if (sequenceIndex < systemLines.length) {
        const lineTimer = setTimeout(() => {
          setSequenceIndex((prev) => prev + 1);
        }, 180);
        return () => clearTimeout(lineTimer);
      } else {
        const grantedTimer = setTimeout(() => {
          setStage("granted");
        }, 250);
        return () => clearTimeout(grantedTimer);
      }
    }

    if (stage === "granted") {
      const collapseTimer = setTimeout(() => {
        setStage("collapsing");
      }, 1400); // 1.4s pause so user can read ACCESS GRANTED
      return () => clearTimeout(collapseTimer);
    }

    if (stage === "collapsing") {
      const finishTimer = setTimeout(() => {
        setStage("finished");
        onComplete();
      }, 600);
      return () => clearTimeout(finishTimer);
    }
  }, [stage, sequenceIndex, systemLines.length, onComplete]);

  if (shouldSkip || stage === "finished") return null;

  return (
    <AnimatePresence>
      <motion.div
        key="terminal-overlay"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0.9, filter: "blur(12px)" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-[#050505] text-foreground flex flex-col justify-center items-center px-6 font-mono select-none overflow-hidden"
        >
          {/* Subtle CRT Scanline Texture Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] opacity-10 pointer-events-none" />

          {/* Quant Radial Background Glow */}
          <div className="absolute w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />

          {/* Terminal Screen Container */}
          <motion.div
            animate={
              stage === "collapsing"
                ? { scale: 0.85, opacity: 0, filter: "blur(10px)", y: -20 }
                : { scale: 1, opacity: 1, filter: "blur(0px)", y: 0 }
            }
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-xl flex flex-col justify-start items-start space-y-4 tracking-wider text-xs sm:text-sm text-foreground/90 font-mono"
          >
            {/* Top Prompt Section: "booting" typing */}
            <div className="flex items-center gap-2 text-foreground/90 font-mono text-sm sm:text-base">
              <span className="text-emerald-400 font-bold select-none">&gt;</span>
              <span className="font-semibold">{typedText}</span>
              <span className="animate-pulse text-emerald-400 font-bold text-base sm:text-lg">▌</span>
            </div>

            {/* Stage: INITIALIZING PORTFOLIO SYSTEM */}
            {(stage === "initializing" || stage === "sequences" || stage === "granted" || stage === "collapsing") && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="text-muted-foreground/80 font-mono text-xs sm:text-sm pt-2"
              >
                &gt; INITIALIZING PORTFOLIO SYSTEM...
              </motion.div>
            )}

            {/* Desktop System Sequence Lines */}
            {(stage === "sequences" || stage === "granted" || stage === "collapsing") && (
              <div className="w-full space-y-2 pt-2 font-mono text-xs sm:text-sm hidden sm:block">
                {systemLines.slice(0, sequenceIndex).map((line, idx) => (
                  <motion.div
                    key={line.id}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.15 }}
                    className="flex items-center justify-between text-foreground/80"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-500/60">[{line.id}]</span>
                      <span className="font-medium text-foreground/90">{line.name}</span>
                      <span className="text-muted-foreground/40 font-mono">{line.dots}</span>
                    </div>
                    <span className="text-emerald-400 font-bold tracking-widest pl-2">
                      {line.status}
                    </span>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Mobile System Sequence Lines */}
            {(stage === "sequences" || stage === "granted" || stage === "collapsing") && (
              <div className="w-full space-y-2 pt-2 font-mono text-xs sm:hidden">
                {mobileSystemLines.slice(0, Math.min(sequenceIndex, mobileSystemLines.length)).map((line) => (
                  <motion.div
                    key={line.id}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.15 }}
                    className="flex items-center justify-between text-foreground/80"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-500/60">[{line.id}]</span>
                      <span className="font-medium text-foreground/90">{line.name}</span>
                    </div>
                    <span className="text-emerald-400 font-bold tracking-widest">
                      {line.status}
                    </span>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Stage: ACCESS GRANTED & PORTFOLIO READY */}
            {(stage === "granted" || stage === "collapsing") && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="pt-4 space-y-1 font-mono text-xs sm:text-sm"
              >
                <div className="text-emerald-400 font-bold tracking-widest flex items-center gap-2 shadow-emerald-500/20">
                  <span>&gt; ACCESS GRANTED</span>
                </div>
                <div className="text-foreground/90 font-medium tracking-wider">
                  <span>&gt; PORTFOLIO UNLOCKED</span>
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
    </AnimatePresence>
  );
}
