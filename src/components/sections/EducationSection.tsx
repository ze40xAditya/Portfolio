"use client";

import { MapPin, BookOpen, GraduationCap } from "lucide-react";
import { serif } from "@/app/fonts";
import { ScrollRevealText, ScrollRevealCard } from "@/components/ui/ScrollReveal";

export function EducationSection() {
  const education = [
    {
      id: "01",
      degree: "Bachelor of Technology",
      major: "Computer Science Engineering",
      school: "Government Engineering College Jaipur",
      date: "2023 – 2027",
      score: "CGPA: 9.1+",
      location: "Jaipur, India",
    },
    {
      id: "02",
      degree: "High School (CBSE – PCM)",
      major: "Physics, Chemistry, Mathematics",
      school: "St. Xavier’s Senior Secondary School",
      date: "2015 – 2023",
      score: "Science Stream",
      location: "Jaipur, India",
    }
  ];

  return (
    <section id="education" className="py-28 relative overflow-hidden bg-background border-t border-border/30">
      {/* Subtle ambient light backdrop */}
      <div className="absolute left-10 top-1/3 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container px-4 sm:px-6 md:px-10 relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <ScrollRevealText>
            <div className="text-xs font-mono tracking-[0.25em] text-primary uppercase mb-3">
              Academic Foundation
            </div>
            <h2 className={`${serif.className} text-4xl sm:text-5xl md:text-7xl font-normal tracking-tight text-foreground`}>
              Education Journey
            </h2>
          </ScrollRevealText>
        </div>

        {/* Unique Non-Card Editorial Academic Ledger */}
        <div className="space-y-4">
          {education.map((edu, index) => (
            <ScrollRevealCard key={index} delay={index * 0.1}>
              <div className="group relative py-10 border-b border-white/10 hover:border-primary/50 transition-colors duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Monospace Metadata & Score Badge (4 Cols on lg) */}
                  <div className="lg:col-span-4 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-primary">
                        [{edu.id}]
                      </span>
                      <span className="text-xs font-mono tracking-widest text-muted-foreground uppercase">
                        {edu.date}
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-foreground bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded-full">
                      <GraduationCap className="w-3.5 h-3.5 text-primary" />
                      <span>{edu.score}</span>
                    </div>
                  </div>

                  {/* Right Column: Degree Title, School & Details (8 Cols on lg) */}
                  <div className="lg:col-span-8 space-y-3">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                      {edu.degree}
                    </h3>

                    <h4 className="text-lg sm:text-xl text-foreground/80 font-medium">
                      {edu.school}
                    </h4>

                    <div className="flex flex-wrap items-center gap-6 pt-2 text-sm text-muted-foreground font-light">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-primary/70" />
                        <span>{edu.major}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary/70" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollRevealCard>
          ))}
        </div>
      </div>
    </section>
  );
}
