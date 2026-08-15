"use client";

import { motion } from "framer-motion";
import { BrainCircuit, LineChart, Target, Coins, ShieldCheck, Cloud } from "lucide-react";
import { serif } from "@/app/fonts";

export function SkillsSection() {
  const categories = [
    {
      title: "AI & Machine Learning",
      icon: <BrainCircuit className="w-5 h-5 text-primary" />,
      skills: ["AI Agents", "LLMs", "Prompt Engineering", "Machine Learning", "Deep Learning", "Automation"],
    },
    {
      title: "Analytics & Data",
      icon: <LineChart className="w-5 h-5 text-emerald-400" />,
      skills: ["Data Analysis", "Power BI", "Forecasting", "Prediction Models", "Visualization"],
    },
    {
      title: "Product & Business",
      icon: <Target className="w-5 h-5 text-cyan-400" />,
      skills: ["Product Management", "Business Strategy", "Business Analysis", "Product Thinking"],
    },
    {
      title: "Finance & Investment",
      icon: <Coins className="w-5 h-5 text-purple-400" />,
      skills: ["Investment Strategies", "Equities", "Risk Management", "ROI Planning"],
    },
    {
      title: "Leadership & Agile",
      icon: <ShieldCheck className="w-5 h-5 text-amber-400" />,
      skills: ["Team Leadership", "Agile Methodologies", "Scrum", "Jira", "Problem Solving"],
    },
    {
      title: "Cloud & Development",
      icon: <Cloud className="w-5 h-5 text-indigo-400" />,
      skills: ["Cloud Computing", "Web Development", "React/Next.js", "Front-End", "SEO"],
    },
  ];

  return (
    <section id="skills" className="py-28 relative overflow-hidden bg-background border-t border-border/30">
      {/* Ambient glow backdrop */}
      <div className="absolute right-10 top-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container px-4 sm:px-6 md:px-10 relative z-10 max-w-7xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start mb-16"
        >
          <div className="text-xs font-mono tracking-[0.25em] text-primary uppercase mb-3">
            Technical Competencies
          </div>
          <h2 className={`${serif.className} text-4xl sm:text-5xl md:text-7xl font-normal tracking-tight text-foreground`}>
            Skills & Domain Arsenal
          </h2>
        </motion.div>

        {/* Refined Cards Grid with Smaller Border Radius (rounded-xl) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
                ease: "easeOut"
              }}
              className="group relative flex flex-col justify-between p-7 rounded-xl bg-card/40 backdrop-blur-2xl border border-white/10 hover:border-primary/50 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-[0_0_30px_rgba(168,85,247,0.12)] h-full"
            >
              {/* Top Accent Gradient Border Highlight on Hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-300">
                    {category.icon}
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground/60 tracking-widest uppercase">
                    0{index + 1}
                  </span>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>
              </div>
              
              <div className="relative z-10 flex flex-wrap gap-2 pt-6 mt-6 border-t border-white/10">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-mono text-muted-foreground group-hover:border-primary/30 group-hover:text-foreground hover:bg-primary/10 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
