"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "Wealth Management Suite",
      description: "Advanced finance-focused digital tools for investment planning and estimation.",
      technologies: ["React", "Next.js", "Financial Math", "Data Viz"],
      type: "Finance Product",
      colSpan: "lg:col-span-2",
      gradient: "from-blue-600/20 to-purple-600/20",
    },
    {
      title: "Adinath Finserv",
      description: "Digital transformation for a wealth management firm generating ₹1 Cr+ AUM.",
      technologies: ["Next.js", "React", "Tailwind CSS"],
      type: "Freelance",
      colSpan: "lg:col-span-1",
      gradient: "from-emerald-600/20 to-teal-600/20",
    },
    {
      title: "Building Bites",
      description: "Responsive business platform with integrated health analytics calculators.",
      technologies: ["React", "Node.js", "Tailwind CSS"],
      type: "Freelance",
      colSpan: "lg:col-span-1",
      gradient: "from-orange-600/20 to-red-600/20",
    },
    {
      title: "Garage Management System",
      description: "Full-stack garage management platform for workshop operations and records.",
      technologies: ["PHP", "Database Management", "UI/UX Design"],
      type: "Full Stack",
      colSpan: "lg:col-span-2",
      gradient: "from-primary/20 to-blue-600/20",
    },
    {
      title: "Forecasting Dashboards",
      description: "Business insight visualization and demand prediction tools using AI.",
      technologies: ["Python", "Power BI", "Data Cleaning"],
      type: "Data Analytics",
      colSpan: "lg:col-span-3", // spans full width at the bottom
      gradient: "from-purple-600/20 to-pink-600/20",
    },
  ];

  return (
    <section id="projects" className="py-32 relative overflow-hidden bg-background">
      {/* Background glow */}
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-4 md:px-8 relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center md:items-start text-center md:text-left mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-foreground">
            Selected Works
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent rounded-full mt-2"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`group relative h-full min-h-[400px] rounded-[2.5rem] overflow-hidden bg-card/20 border border-border/40 hover:border-primary/50 transition-colors duration-500 flex flex-col justify-end ${project.colSpan}`}
            >
              {/* Dynamic Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out`} />
              
              {/* Glass Overlay for Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent pointer-events-none" />

              <div className="relative z-10 p-8 md:p-10 w-full mt-auto translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                
                <Badge variant="outline" className="mb-4 bg-background/50 backdrop-blur-md border-primary/30 text-primary uppercase tracking-widest text-xs px-3 py-1">
                  {project.type}
                </Badge>
                
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-lg mb-6 max-w-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 h-0 group-hover:h-auto overflow-hidden">
                  {project.description}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border/30">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="text-sm font-medium text-foreground/70 bg-foreground/5 px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                     <Button size="icon" variant="secondary" className="rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all">
                       <ExternalLink className="w-4 h-4" />
                     </Button>
                     <Button size="icon" className="rounded-full bg-foreground text-background hover:bg-primary transition-all">
                       <ArrowRight className="w-4 h-4" />
                     </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
