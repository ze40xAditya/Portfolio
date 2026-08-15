"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, Briefcase, GraduationCap, Star, TrendingUp, Sparkles } from "lucide-react";
import { serif } from "@/app/fonts";

export function AchievementDashboard() {
  const metrics = [
    { label: "ACADEMIC CGPA", value: "9.1+", icon: <GraduationCap className="w-4 h-4 text-primary" /> },
    { label: "INDUSTRY CREDENTIALS", value: "10+", icon: <Award className="w-4 h-4 text-emerald-400" /> },
    { label: "FEATURED PROJECTS", value: "5+", icon: <BookOpen className="w-4 h-4 text-purple-400" /> },
    { label: "INDUSTRY ROLES", value: "3+", icon: <Briefcase className="w-4 h-4 text-cyan-400" /> },
    { label: "RECOMMENDATIONS", value: "2", icon: <Star className="w-4 h-4 text-amber-400" /> },
    { label: "ENTERPRISE SOLUTIONS", value: "MULTIPLE", icon: <TrendingUp className="w-4 h-4 text-indigo-400" /> },
  ];

  // Tripled for infinite smooth continuous loop
  const tickerRow1 = [...metrics, ...metrics, ...metrics];
  const tickerRow2 = [...metrics.slice().reverse(), ...metrics.slice().reverse(), ...metrics.slice().reverse()];

  return (
    <section className="py-28 relative overflow-hidden bg-background border-t border-border/30">
      {/* Subtle ambient backdrops */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container px-4 sm:px-6 md:px-10 relative z-10 max-w-7xl mx-auto mb-12">
        <div className="flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start"
          >
            <div className="text-xs font-mono tracking-[0.25em] text-primary uppercase mb-3">
              Metrics & Impact
            </div>
            <h2 className={`${serif.className} text-4xl sm:text-5xl md:text-7xl font-normal tracking-tight text-foreground`}>
              Achievement Dashboard
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Infinite Kinetic Moving Text Marquees */}
      <div className="space-y-6 select-none relative z-10">
        {/* Row 1: Leftward Moving Text Stream */}
        <div className="flex overflow-hidden group">
          <motion.div
            className="flex gap-4 shrink-0"
            animate={{ x: ["0%", "-33.333%"] }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity,
            }}
          >
            {tickerRow1.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 px-6 py-3.5 rounded-full bg-card/40 backdrop-blur-2xl border border-white/10 group-hover:border-primary/40 transition-all duration-300 shadow-lg shrink-0"
              >
                <div className="p-1.5 rounded-full bg-white/5 border border-white/10">
                  {item.icon}
                </div>
                <span className="text-xl sm:text-2xl font-bold font-mono text-foreground tracking-tight">
                  {item.value}
                </span>
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest pl-1">
                  {item.label}
                </span>
                <Sparkles className="w-3 h-3 text-primary/40 ml-2" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Rightward Moving Text Stream */}
        <div className="flex overflow-hidden group">
          <motion.div
            className="flex gap-4 shrink-0"
            animate={{ x: ["-33.333%", "0%"] }}
            transition={{
              ease: "linear",
              duration: 28,
              repeat: Infinity,
            }}
          >
            {tickerRow2.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 px-6 py-3.5 rounded-full bg-card/40 backdrop-blur-2xl border border-white/10 group-hover:border-primary/40 transition-all duration-300 shadow-lg shrink-0"
              >
                <div className="p-1.5 rounded-full bg-white/5 border border-white/10">
                  {item.icon}
                </div>
                <span className="text-xl sm:text-2xl font-bold font-mono text-foreground tracking-tight">
                  {item.value}
                </span>
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest pl-1">
                  {item.label}
                </span>
                <Sparkles className="w-3 h-3 text-primary/40 ml-2" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
