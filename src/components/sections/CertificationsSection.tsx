"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Award } from "lucide-react";

export function CertificationsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "AI & ML", "Product & Leadership", "Analytics", "Business & Finance"];

  const certifications = [
    {
      title: "5-Day AI Agents Intensive Course",
      organization: "Google (via Kaggle)",
      category: "AI & ML",
      date: "Dec 2025",
      skills: ["AI Agents", "Agentic AI"],
    },
    {
      title: "Oracle Cloud Infrastructure 2025 AI Foundations",
      organization: "Oracle",
      category: "AI & ML",
      date: "Oct 2025",
      skills: ["AI", "Machine Learning"],
    },
    {
      title: "Applications of AI for Anomaly Detection",
      organization: "NVIDIA",
      category: "AI & ML",
      date: "Aug 2025",
      skills: ["Anomaly Detection", "Data training"],
    },
    {
      title: "Fundamentals of Deep Learning",
      organization: "NVIDIA",
      category: "AI & ML",
      date: "Mar 2025",
      skills: ["Deep Learning", "Data training"],
    },
    {
      title: "Execute 4.0 Hackathon – E-Summit'25",
      organization: "DTU",
      category: "Product & Leadership",
      date: "Jun 2025",
      skills: ["Problem Solving", "Leadership"],
    },
    {
      title: "McKinsey Forward Program",
      organization: "McKinsey & Company",
      category: "Product & Leadership",
      date: "Jul 2025",
      skills: ["Project Management", "Planning"],
    },
    {
      title: "Atlassian Agile Project Management",
      organization: "Atlassian",
      category: "Product & Leadership",
      date: "Mar 2025",
      skills: ["Agile Methodologies", "Scrum"],
    },
    {
      title: "Intelligent Automation for Project Managers",
      organization: "LinkedIn",
      category: "Product & Leadership",
      date: "Feb 2025",
      skills: ["Process Automation", "PM"],
    },
    {
      title: "Data Analytics & Visualization",
      organization: "Agn Hub Tech",
      category: "Analytics",
      date: "Aug 2025",
      skills: ["Data Analysis", "Visualization"],
    },
    {
      title: "Web Development & Business Management",
      organization: "Sita Trading Corp",
      category: "Business & Finance",
      date: "Jul 2024",
      skills: ["Web Dev", "Front-End"],
    },
    {
      title: "Investment Risk Management",
      organization: "Coursera",
      category: "Business & Finance",
      date: "Mar 2024",
      skills: ["Risk Management", "Investment"],
    },
    {
      title: "Business Analysis & Process Management",
      organization: "Coursera",
      category: "Business & Finance",
      date: "Mar 2024",
      skills: ["Business Analysis", "Management"],
    },
  ];

  const filteredCerts = activeCategory === "All" 
    ? certifications 
    : certifications.filter(c => c.category === activeCategory);

  return (
    <section id="certifications" className="py-32 relative overflow-hidden bg-background">
      <div className="container px-4 md:px-8 relative z-10 max-w-7xl mx-auto">
        
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-foreground">
              Credential Vault
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full mt-2 mb-10 mx-auto"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category 
                    ? "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)] scale-105" 
                    : "bg-card/50 border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
                key={cert.title}
                className="group relative h-full flex flex-col p-8 rounded-[2rem] bg-card/20 backdrop-blur-md border border-border/40 hover:border-primary/50 hover:bg-card/40 transition-all duration-500 overflow-hidden shadow-lg hover:shadow-primary/5"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <Badge variant="outline" className="bg-background/80 backdrop-blur-md border-border/50 text-xs py-1 text-muted-foreground">
                      {cert.date}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors leading-tight">
                    {cert.title}
                  </h3>
                  
                  <p className="text-sm md:text-base text-muted-foreground mb-6 font-medium tracking-wide">
                    {cert.organization}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-border/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, i) => (
                        <span key={i} className="text-[10px] uppercase tracking-widest px-2 py-1 rounded-md bg-foreground/5 text-foreground/70 font-semibold">
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    <a href="#" className="inline-flex items-center text-sm font-bold text-primary hover:text-primary/80 transition-colors whitespace-nowrap group-hover:translate-x-1 duration-300">
                      Verify <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
