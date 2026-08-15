"use client";

import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Code2 } from "lucide-react";
import { serif } from "@/app/fonts";
import { ScrollRevealText, ScrollRevealCard } from "@/components/ui/ScrollReveal";

export function ProjectsSection() {
  const projects = [
    {
      id: "01",
      title: "Wealth Management Suite",
      description: "Advanced finance-focused digital tools for investment planning, growth projection, and risk estimation.",
      technologies: ["React", "Next.js", "Financial Math", "Data Viz"],
      type: "Finance Product",
      colSpan: "lg:col-span-2",
      gradient: "from-blue-600/20 via-purple-600/10 to-transparent",
    },
    {
      id: "02",
      title: "Adinath Finserv",
      description: "Digital transformation for a wealth management firm generating ₹1 Cr+ AUM with high client conversion.",
      technologies: ["Next.js", "React", "Tailwind CSS"],
      type: "Freelance Client",
      colSpan: "lg:col-span-1",
      gradient: "from-emerald-600/20 via-teal-600/10 to-transparent",
    },
    {
      id: "03",
      title: "Building Bites",
      description: "Responsive business platform with integrated health analytics calculators and interactive client dashboard.",
      technologies: ["React", "Node.js", "Tailwind CSS"],
      type: "Freelance Client",
      colSpan: "lg:col-span-1",
      gradient: "from-orange-600/20 via-red-600/10 to-transparent",
    },
    {
      id: "04",
      title: "Garage Management System",
      description: "Full-stack garage management platform for workshop operations, record keeping, and inventory tracking.",
      technologies: ["PHP", "MySQL", "UI/UX Design"],
      type: "Full Stack System",
      colSpan: "lg:col-span-2",
      gradient: "from-primary/20 via-indigo-600/10 to-transparent",
    },
    {
      id: "05",
      title: "Forecasting Dashboards",
      description: "Business insight visualization and demand prediction tools using machine learning models and Power BI.",
      technologies: ["Python", "Power BI", "Data Modeling"],
      type: "Data Analytics",
      colSpan: "lg:col-span-3",
      gradient: "from-purple-600/20 via-pink-600/10 to-transparent",
    },
  ];

  return (
    <section id="projects" className="py-28 relative overflow-hidden bg-background border-t border-border/30">
      {/* Ambient background glow */}
      <div className="absolute right-0 top-1/3 w-[550px] h-[550px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container px-4 sm:px-6 md:px-10 relative z-10 max-w-7xl mx-auto">
        <ScrollRevealText className="flex flex-col items-start mb-16">
          <div className="text-xs font-mono tracking-[0.25em] text-primary uppercase mb-3">
            Featured Portfolio & Systems
          </div>
          <h2 className={`${serif.className} text-4xl sm:text-5xl md:text-7xl font-normal tracking-tight text-foreground`}>
            Selected Works & Products
          </h2>
        </ScrollRevealText>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ScrollRevealCard key={index} delay={index * 0.08} className={project.colSpan}>
              <div className="group relative h-full min-h-[360px] rounded-xl overflow-hidden bg-card/40 backdrop-blur-2xl border border-white/10 hover:border-primary/50 transition-all duration-500 flex flex-col justify-between p-8 sm:p-10 shadow-xl hover:shadow-[0_0_35px_rgba(168,85,247,0.15)]">
                {/* Top Accent Gradient Line on Hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Dynamic Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40 group-hover:opacity-80 transition-all duration-700 pointer-events-none`} />
                
                {/* Top System Header Bar */}
                <div className="relative z-10 flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-primary" />
                    <span className="text-xs font-mono tracking-widest text-muted-foreground uppercase">
                      SYSTEM // PROJ_{project.id}
                    </span>
                  </div>

                  <Badge variant="outline" className="bg-white/5 border-white/10 text-primary font-mono uppercase tracking-widest text-[10px] px-3 py-1">
                    {project.type}
                  </Badge>
                </div>

                {/* Main Content Area */}
                <div className="relative z-10 space-y-4 my-auto">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm sm:text-base font-light leading-relaxed max-w-2xl">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Footer Area */}
                <div className="relative z-10 pt-6 mt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="text-xs font-mono text-foreground/80 bg-white/5 border border-white/10 px-3 py-1 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href="#contact"
                    className="inline-flex items-center text-xs font-mono font-bold text-primary hover:text-primary/80 transition-colors uppercase tracking-wider group-hover:translate-x-0.5 duration-200"
                  >
                    EXPLORE <ArrowUpRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </ScrollRevealCard>
          ))}
        </div>
      </div>
    </section>
  );
}
