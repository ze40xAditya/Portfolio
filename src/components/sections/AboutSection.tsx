"use client";

import { motion } from "framer-motion";
import { serif } from "@/app/fonts";
import { ScrollRevealText, ScrollRevealCard } from "@/components/ui/ScrollReveal";

export function AboutSection() {
  const corePillars = [
    {
      number: "01",
      title: "Analytical & Technical Rigor",
      description: "Combining computer science fundamentals with structured problem-solving to architect clean, efficient, and scalable software solutions.",
    },
    {
      number: "02",
      title: "Data & Intelligence Driven",
      description: "Leveraging data analytics, artificial intelligence, and predictive modeling to translate complex information into actionable insights.",
    },
    {
      number: "03",
      title: "Product-Minded Engineering",
      description: "Designing end-to-end digital experiences focused on high usability, performance, user impact, and business value.",
    },
    {
      number: "04",
      title: "Continuous Acquisition",
      description: "Relentless commitment to mastering emerging technologies, industry frameworks, and advanced engineering practices.",
    },
  ];

  return (
    <section id="about" className="py-28 relative overflow-hidden bg-background border-t border-border/30">
      {/* Subtle background ambient light */}
      <div className="absolute right-10 top-1/3 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container px-4 sm:px-6 md:px-10 relative z-10 max-w-7xl mx-auto">
        {/* Editorial Section Header */}
        <div className="flex flex-col items-start mb-16">
          <ScrollRevealText>
            <div className="text-xs font-mono tracking-[0.25em] text-primary uppercase mb-3">
              About Me
            </div>
            <h2 className={`${serif.className} text-4xl sm:text-5xl md:text-7xl font-normal tracking-tight text-foreground`}>
              Engineering with Purpose & Precision
            </h2>
          </ScrollRevealText>
        </div>

        {/* Professional Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollRevealText delay={0.1}>
              <p className="text-xl sm:text-2xl text-foreground font-light leading-relaxed">
                I am a Computer Science Engineering undergraduate at <strong className="font-semibold text-primary">Government Engineering College Jaipur (9.1+ CGPA)</strong>, driven by a deep fascination for intelligent software, data systems, and strategic product development.
              </p>
            </ScrollRevealText>

            <ScrollRevealText delay={0.2}>
              <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
                My approach sits at the intersection of computer science rigor and data intelligence. I focus on breaking down complex real-world challenges into structured engineering problems, building systems that are robust, performant, and visually refined.
              </p>
            </ScrollRevealText>

            <ScrollRevealText delay={0.3}>
              <div className="pt-4 flex items-center gap-8 border-t border-white/10">
                <div>
                  <span className="block text-2xl font-bold font-mono text-foreground">9.1+</span>
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Academic CGPA</span>
                </div>
                <div className="h-8 w-px bg-white/10" />
                <div>
                  <span className="block text-2xl font-bold font-mono text-foreground">B.Tech CSE</span>
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Engineering Major</span>
                </div>
              </div>
            </ScrollRevealText>
          </div>

          {/* Right Column: Clean Editorial List with Staggered Points 2 & 4 */}
          <div className="lg:col-span-6 space-y-6">
            {corePillars.map((pillar, idx) => {
              const isShiftedRight = idx % 2 === 1; // Points 02 and 04
              return (
                <ScrollRevealCard key={idx} delay={0.1 + idx * 0.08}>
                  <div
                    className={`group relative pb-6 border-b border-white/10 hover:border-primary/50 transition-all duration-300 ${
                      isShiftedRight ? "sm:pl-16 md:pl-24 lg:pl-28" : ""
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-semibold text-primary/70">{pillar.number}</span>
                        <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {pillar.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed pl-7">
                      {pillar.description}
                    </p>
                  </div>
                </ScrollRevealCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
