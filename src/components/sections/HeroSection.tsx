"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Terminal, Network, Briefcase, Mail } from "lucide-react";

export function HeroSection() {
  const stats = [
    { label: "CGPA", value: "9.1+" },
    { label: "Certifications", value: "10+" },
    { label: "Experiences", value: "3+" },
    { label: "Projects", value: "Multiple" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-12 bg-background">
      {/* Background gradients & subtle waves */}
      <div className="absolute inset-0 bg-background z-0" />
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-primary/10 to-transparent opacity-60 z-0 pointer-events-none" />
      
      {/* Decorative Wave/Gradient */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute top-[20%] left-[10%] w-[80vw] h-[40vh] border border-primary/20 rounded-[100%] rotate-12 blur-[100px] bg-primary/10 z-0 pointer-events-none"
      />

      <div className="container relative z-10 px-4 md:px-8 w-full max-w-7xl flex flex-col items-center justify-center">
        
        {/* Main Hero Header */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center relative mb-16 mt-8">
          
          {/* Left Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start w-full md:w-1/3 mb-10 md:mb-0 relative"
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-foreground mb-12">
              Hello,
            </h1>
            
            <div className="flex flex-col gap-8 relative border-l border-border/50 pl-6 ml-2">
              <div className="relative group">
                <div className="absolute -left-[30px] top-1.5 w-3 h-3 bg-primary rounded-full shadow-[0_0_15px_rgba(var(--primary-rgb),0.8)]" />
                <h3 className="text-lg md:text-xl font-semibold text-foreground">CS Engineer</h3>
                <p className="text-sm text-muted-foreground">B.Tech at GECJ (9.1+ CGPA)</p>
              </div>
              <div className="relative group">
                <div className="absolute -left-[30px] top-1.5 w-3 h-3 bg-primary rounded-full shadow-[0_0_15px_rgba(var(--primary-rgb),0.8)]" />
                <h3 className="text-lg md:text-xl font-semibold text-foreground">Data Analytics</h3>
                <p className="text-sm text-muted-foreground">Power BI, Python & Forecasting</p>
              </div>
              <div className="relative group">
                <div className="absolute -left-[30px] top-1.5 w-3 h-3 bg-primary rounded-full shadow-[0_0_15px_rgba(var(--primary-rgb),0.8)]" />
                <h3 className="text-lg md:text-xl font-semibold text-foreground">AI Enthusiast</h3>
                <p className="text-sm text-muted-foreground">LLMs, Agents & Automation</p>
              </div>
            </div>
          </motion.div>

          {/* Center Graphic (Placeholder for Portrait) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/3 flex justify-center items-center mb-10 md:mb-0 relative z-10"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center shadow-[0_0_40px_-10px_var(--primary)] overflow-hidden">
               {/* Replace this div with an actual <img> tag when image is available */}
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
               <div className="text-center p-6 flex flex-col items-center">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                     <span className="text-4xl text-primary font-bold">A</span>
                  </div>
                  <p className="text-xs text-muted-foreground font-mono uppercase tracking-widest">Available for <br/>Opportunities</p>
               </div>
               
               {/* Connection Dots floating around */}
               <div className="absolute top-[20%] -right-4 w-10 h-10 bg-card border border-primary/40 rounded-md flex items-center justify-center shadow-lg">
                 <Terminal className="w-5 h-5 text-primary" />
               </div>
               <div className="absolute bottom-[20%] -left-4 w-10 h-10 bg-card border border-primary/40 rounded-md flex items-center justify-center shadow-lg">
                 <Network className="w-5 h-5 text-primary" />
               </div>
            </div>
          </motion.div>

          {/* Right Text */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-end text-right w-full md:w-1/3"
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground leading-[1.1]">
              I am<br/>
              <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
                Aditya<br/>Chaturvedi
              </span>
            </h2>
            <div className="mt-8 flex gap-4">
               <Button size="lg" className="rounded-full px-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_-5px_var(--primary)]">
                 <Mail className="mr-2 h-4 w-4" /> Contact Me
               </Button>
            </div>
          </motion.div>
        </div>

        {/* About Me Premium Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full bg-card/60 backdrop-blur-2xl border border-border/50 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="flex flex-col gap-6">
              <h3 className="text-3xl md:text-4xl font-bold">About Me</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I&apos;m a Data Analytics Intern and Computer Science Engineer passionate about building at the intersection of <strong className="text-foreground">Technology, Analytics, Business Strategy, and Product</strong>. I specialize in delivering data-driven solutions and intelligent systems that help businesses thrive.
              </p>
            </div>

            {/* Right Highlights */}
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-background/50 border border-border/50 hover:border-primary/50 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-foreground mb-1">Industry Experience</h4>
                  <p className="text-sm text-muted-foreground">Data Analytics Intern at Intime Tec, with a track record of delivering 5+ freelance & full-stack projects.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-background/50 border border-border/50 hover:border-primary/50 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Terminal className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-foreground mb-1">Technical Arsenal</h4>
                  <p className="text-sm text-muted-foreground">Next.js, React, Python, Power BI, SQL, AI Agents, and full-stack development.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full max-w-5xl mt-12"
        >
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-4 rounded-2xl bg-transparent border border-border/30 backdrop-blur-sm hover:bg-card/40 transition-colors">
              <span className="text-3xl font-bold text-foreground mb-1">{stat.value}</span>
              <span className="text-[10px] text-muted-foreground text-center uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
