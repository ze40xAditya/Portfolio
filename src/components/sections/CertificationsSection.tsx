"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Award, ShieldCheck } from "lucide-react";
import { serif } from "@/app/fonts";

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
      skills: ["Anomaly Detection", "Data Training"],
    },
    {
      title: "Fundamentals of Deep Learning",
      organization: "NVIDIA",
      category: "AI & ML",
      date: "Mar 2025",
      skills: ["Deep Learning", "Neural Nets"],
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
      skills: ["Project Management", "Strategy"],
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
    <section id="certifications" className="py-28 relative overflow-hidden bg-background border-t border-border/30">
      {/* Ambient background glow */}
      <div className="absolute right-0 top-1/4 w-[550px] h-[550px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container px-4 sm:px-6 md:px-10 relative z-10 max-w-7xl mx-auto">
        
        <div className="flex flex-col items-start mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full flex flex-col items-start"
          >
            <div className="text-xs font-mono tracking-[0.25em] text-primary uppercase mb-3">
              Certifications & Badges
            </div>
            <h2 className={`${serif.className} text-4xl sm:text-5xl md:text-7xl font-normal tracking-tight text-foreground mb-8`}>
              Credential Vault
            </h2>
          </motion.div>

          {/* Filter Category Tabs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-2.5"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-xs font-mono font-semibold tracking-wider transition-all duration-300 ${
                  activeCategory === category 
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105" 
                    : "bg-white/5 border border-white/10 text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
                key={cert.title}
                className="group relative h-full flex flex-col justify-between p-7 rounded-xl bg-card/40 backdrop-blur-2xl border border-white/10 hover:border-primary/50 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-[0_0_30px_rgba(168,85,247,0.12)]"
              >
                {/* Top Accent Gradient Border Highlight on Hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Subtle background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="relative z-10 flex flex-col h-full justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                          {cert.organization}
                        </span>
                      </div>
                      <Badge variant="outline" className="bg-white/5 border-white/10 text-[10px] font-mono py-0.5 text-muted-foreground uppercase">
                        {cert.date}
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                      {cert.title}
                    </h3>
                  </div>
                  
                  <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4 mt-auto">
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.map((skill, i) => (
                        <span key={i} className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-foreground/80 font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    <a href="#" className="inline-flex items-center text-xs font-mono font-semibold text-primary hover:text-primary/80 transition-colors whitespace-nowrap group-hover:translate-x-0.5 duration-200">
                      VERIFY <ArrowUpRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
