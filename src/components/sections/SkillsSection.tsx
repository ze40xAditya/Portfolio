"use client";

import { motion } from "framer-motion";
import { BrainCircuit, LineChart, Target, Coins, ShieldCheck, Cloud } from "lucide-react";

export function SkillsSection() {
  const categories = [
    {
      title: "AI & Machine Learning",
      icon: <BrainCircuit className="w-8 h-8 mb-4 text-primary" />,
      skills: ["AI Agents", "LLMs", "Prompt Engineering", "Machine Learning", "Deep Learning", "Automation"],
    },
    {
      title: "Analytics & Data",
      icon: <LineChart className="w-8 h-8 mb-4 text-primary" />,
      skills: ["Data Analysis", "Power BI", "Forecasting", "Prediction Models", "Visualization"],
    },
    {
      title: "Product & Business",
      icon: <Target className="w-8 h-8 mb-4 text-primary" />,
      skills: ["Product Management", "Business Strategy", "Business Analysis", "Product Thinking"],
    },
    {
      title: "Finance & Investment",
      icon: <Coins className="w-8 h-8 mb-4 text-primary" />,
      skills: ["Investment Strategies", "Equities", "Risk Management", "ROI Planning"],
    },
    {
      title: "Leadership & Agile",
      icon: <ShieldCheck className="w-8 h-8 mb-4 text-primary" />,
      skills: ["Team Leadership", "Agile Methodologies", "Scrum", "Jira", "Problem Solving"],
    },
    {
      title: "Cloud & Development",
      icon: <Cloud className="w-8 h-8 mb-4 text-primary" />,
      skills: ["Cloud Computing", "Web Development", "React/Next.js", "Front-End", "SEO"],
    },
  ];

  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-background">
      <div className="container px-4 md:px-8 relative z-10 max-w-7xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-foreground">
            My Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full mt-2"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ y: -5 }}
              className="group relative flex flex-col items-start p-8 rounded-3xl bg-card/30 backdrop-blur-md border border-border/40 hover:border-primary/50 transition-all duration-300 overflow-hidden"
            >
              {/* Subtle gradient hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 w-full">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  {category.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-background border border-border/50 rounded-full text-xs font-medium text-muted-foreground group-hover:border-primary/30 group-hover:text-foreground transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
