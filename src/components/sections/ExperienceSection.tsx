"use client";

import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";
import { serif } from "@/app/fonts";
import { ScrollRevealText, ScrollRevealCard } from "@/components/ui/ScrollReveal";

export function ExperienceSection() {
  const experiences: { title: string; company: string; duration: string; responsibilities: string[]; skills?: string[]; }[] = [
    {
      title: "Data Analytics Intern",
      company: "Intime Tec",
      duration: "May 2026 – July 2026",
      responsibilities: [
        "Data Analysis & Visualization",
        "Analytics Dashboarding",
        "Business Intelligence",
      ],
      skills: ["Data Analytics", "BI", "Forecasting"],
    },
    {
      title: "Trainee (Python & Power BI)",
      company: "AGN Hub",
      duration: "June 2024 – July 2024",
      responsibilities: [
        "Hands-on training in Python & Power BI",
        "Building dashboards and business intelligence reports",
        "Data-driven insights generation",
      ],
      skills: ["Python", "Power BI", "Dashboards"],
    },
    {
      title: "Trainee",
      company: "Sita Trading Corporation",
      duration: "July 2024",
      responsibilities: [
        "Exposure to financial operations",
        "Strategic problem-solving",
        "Process optimization",
      ],
      skills: ["Finance", "Strategy", "Optimization"],
    },
  ];

  return (
    <section id="experience" className="py-28 relative overflow-hidden bg-background border-t border-border/30">
      {/* Background subtle radial ambient glow */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container px-4 sm:px-6 md:px-10 relative z-10 max-w-7xl mx-auto">
        <ScrollRevealText className="flex flex-col items-start mb-16">
          <div className="text-xs font-mono tracking-[0.25em] text-primary uppercase mb-3">
            Career Progression
          </div>
          <h2 className={`${serif.className} text-4xl sm:text-5xl md:text-7xl font-normal tracking-tight text-foreground`}>
            Experience & Industry Roles
          </h2>
        </ScrollRevealText>

        {/* Centered Alternating Timeline Grid */}
        <div className="relative pt-4 pb-8">
          {/* Center Vertical Timeline Line (Visible on Desktop) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent -translate-x-[0.5px]" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0; // Even indices go Left, Odd go Right

              return (
                <ScrollRevealCard key={index} delay={index * 0.1}>
                  <div className="relative group">
                    {/* Glowing Center Node Dot */}
                    <div className="absolute left-4 md:left-1/2 top-8 w-4 h-4 rounded-full bg-background border-2 border-primary -translate-x-[7.5px] md:-translate-x-1/2 z-20 group-hover:bg-primary group-hover:shadow-[0_0_20px_rgba(168,85,247,0.9)] group-hover:scale-125 transition-all duration-300" />

                    {/* Alternating 2-Column Grid Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                      {/* Card Component placed on Left (isEven) or Right (!isEven) */}
                      <div
                        className={`pl-10 md:pl-0 ${
                          isEven
                            ? "md:col-start-1 md:pr-12 md:text-right"
                            : "md:col-start-2 md:pl-12 md:text-left"
                        }`}
                      >
                        <div className="group/card relative p-8 rounded-xl bg-card/40 backdrop-blur-2xl border border-white/10 hover:border-primary/50 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-[0_0_30px_rgba(168,85,247,0.12)]">
                          {/* Top Accent Gradient Border Line */}
                          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                          
                          {/* Subtle Card Background Glow */}
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />

                          <div className="relative z-10 space-y-4">
                            {/* Meta Duration Badge */}
                            <div
                              className={`flex items-center gap-2 ${
                                isEven ? "md:justify-end" : "md:justify-start"
                              }`}
                            >
                              <span className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-primary bg-primary/10 border border-primary/20 px-3.5 py-1 rounded-full uppercase tracking-wider">
                                <Calendar className="w-3.5 h-3.5" />
                                {exp.duration}
                              </span>
                            </div>

                            {/* Title & Company */}
                            <div>
                              <h3 className="text-2xl sm:text-3xl font-bold text-foreground group-hover/card:text-primary transition-colors leading-tight">
                                {exp.title}
                              </h3>
                              <p className="text-base text-foreground/80 font-medium pt-1 flex items-center gap-2 justify-start md:justify-inherit">
                                <Briefcase className="w-4 h-4 text-primary/70 inline" />
                                <span>{exp.company}</span>
                              </p>
                            </div>

                            {/* Responsibilities Bullet List */}
                            <ul className="space-y-2 pt-2 text-sm text-muted-foreground font-light leading-relaxed">
                              {exp.responsibilities.map((resp, i) => (
                                <li
                                  key={i}
                                  className={`flex items-start gap-2 ${
                                    isEven ? "md:flex-row-reverse" : "md:flex-row"
                                  }`}
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary/70 mt-2 shrink-0" />
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>

                            {/* Skills Tags */}
                            {exp.skills && (
                              <div
                                className={`flex flex-wrap gap-2 pt-4 border-t border-white/10 ${
                                  isEven ? "md:justify-end" : "md:justify-start"
                                }`}
                              >
                                {exp.skills.map((skill, i) => (
                                  <Badge
                                    key={i}
                                    variant="outline"
                                    className="px-3 py-1 rounded-md bg-white/5 border-white/10 text-foreground font-mono text-xs uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                                  >
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
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
