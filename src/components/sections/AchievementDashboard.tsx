"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, Briefcase, GraduationCap, Star, TrendingUp } from "lucide-react";

export function AchievementDashboard() {
  const metrics = [
    { label: "CGPA", value: "9.1+", icon: <GraduationCap className="w-5 h-5" /> },
    { label: "Certifications", value: "10+", icon: <Award className="w-5 h-5" /> },
    { label: "Projects", value: "5+", icon: <BookOpen className="w-5 h-5" /> },
    { label: "Experiences", value: "3+", icon: <Briefcase className="w-5 h-5" /> },
    { label: "Recommendations", value: "2", icon: <Star className="w-5 h-5" /> },
    { label: "Industry Projects", value: "Multiple", icon: <TrendingUp className="w-5 h-5" /> },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-primary/5">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Achievement Dashboard</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-6 rounded-3xl bg-card border border-border hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                {metric.icon}
              </div>
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="text-4xl md:text-5xl font-bold text-foreground mb-2"
              >
                {metric.value}
              </motion.span>
              <span className="text-sm md:text-base text-muted-foreground text-center uppercase tracking-wider font-medium">{metric.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
