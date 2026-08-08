"use client";

import { motion } from "framer-motion";
import { User, Award, Briefcase, Target } from "lucide-react";

export function AboutSection() {
  const highlights = [
    {
      icon: <User className="w-6 h-6 text-primary" />,
      title: "Multidisciplinary",
      description: "Expertise spanning Analytics, AI, Product Management, and Web Development.",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-primary" />,
      title: "Real-World Impact",
      description: "Contributed to digital transformation for startups and financial organizations.",
    },
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      title: "Recognized Certifications",
      description: "Credentials from NVIDIA, Oracle, McKinsey, Atlassian, and LinkedIn.",
    },
    {
      icon: <Target className="w-6 h-6 text-primary" />,
      title: "Vision",
      description: "Building impactful tech products through data-driven scalable solutions.",
    },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden bg-background">
      {/* Decorative gradient for depth */}
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container px-4 md:px-8 relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-foreground">
              My Core Philosophy
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full mt-2 mb-8 mx-auto"></div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-4xl leading-relaxed font-light"
          >
            I am a B.Tech CSE student at Government Engineering College, Jaipur with expertise in <strong className="text-foreground font-semibold">Data Analytics, Product Strategy & Management, and Smart Business Solution & Execution</strong>.
            <br className="hidden md:block" />
            <br className="hidden md:block" />
            As a multi-certified professional with credentials from McKinsey Forward, Atlassian, and Financial Markets programs, I am recognized for <strong className="text-foreground font-semibold">data-driven insights, strategic problem-solving, and building high-impact tech solutions</strong>.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: "easeOut" }}
              className="group relative p-8 rounded-3xl bg-card/20 backdrop-blur-md border border-border/40 hover:border-primary/50 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-muted-foreground text-base leading-relaxed font-medium">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
