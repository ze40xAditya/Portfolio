"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

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
    <section id="experience" className="py-24 relative overflow-hidden bg-background">
      {/* Decorative gradient for depth */}
      <div className="absolute left-0 top-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container px-4 md:px-8 relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-2 text-foreground text-center md:text-left">
            Engineering Success Stories
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent rounded-full mx-auto md:mx-0 mt-6"></div>
        </motion.div>

        <div className="relative flex flex-col gap-6">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 top-4 bottom-4 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden md:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[28px] top-10 w-3 h-3 bg-background border-2 border-primary rounded-full z-10 hidden md:block group-hover:bg-primary group-hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.8)] transition-all duration-300" />

              <div className="md:ml-20 p-6 md:p-8 rounded-[2rem] bg-card/40 backdrop-blur-xl border border-border/40 hover:border-primary/40 transition-all duration-500 hover:bg-card/60 relative overflow-hidden group-hover:shadow-2xl group-hover:shadow-primary/5">
                
                {/* Subtle Hover Gradient Inside Card */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  
                  {/* Left: Role & Company */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {exp.title} <span className="text-muted-foreground font-normal">— {exp.company}</span>
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider mb-4">
                      {exp.duration}
                    </p>
                    
                    <ul className="space-y-2 mt-4">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start text-sm text-foreground/80 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-3 mt-1.5 shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right: Skills Tags */}
                  {exp.skills && (
                    <div className="flex flex-wrap md:flex-col lg:flex-row gap-2 shrink-0 md:min-w-[200px] justify-start md:justify-end mt-4 md:mt-0">
                      {exp.skills.map((skill, i) => (
                        <Badge 
                          key={i} 
                          variant="outline" 
                          className="px-4 py-1.5 rounded-full bg-background/50 border-border/50 text-foreground text-xs uppercase tracking-wider hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors cursor-default"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  )}
                  
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
