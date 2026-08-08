"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, BookOpen, MapPin } from "lucide-react";

export function EducationSection() {
  const education = [
    {
      degree: "Bachelor of Technology",
      school: "Government Engineering College Jaipur",
      date: "2023 – 2027",
      details: "Computer Science Engineering",
      score: "CGPA: 9.1+",
      location: "Jaipur, India",
    },
    {
      degree: "High School (CBSE – PCM)",
      school: "St. Xavier’s Senior Secondary School",
      date: "2015 – 2023",
      details: "Physics, Chemistry, Mathematics",
      score: "Science Stream",
      location: "Jaipur, India",
    }
  ];

  return (
    <section id="education" className="py-32 relative overflow-hidden bg-background">
      <div className="container px-4 md:px-8 relative z-10 max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-foreground">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full mt-2"></div>
          </motion.div>
        </div>

        <div className="relative">
          {/* Glowing Line */}
          <div className="absolute left-4 md:left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent -translate-x-[0.5px]"></div>

          <div className="space-y-16">
            {education.map((edu, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className="relative flex flex-col md:flex-row items-center group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-12 h-12 rounded-full bg-background border-2 border-primary/30 flex items-center justify-center -translate-x-[24px] md:-translate-x-1/2 z-10 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-500 shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)] group-hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.6)]">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>

                  {/* Content Container */}
                  <div className={`w-full flex ${isEven ? 'md:justify-end md:pr-16' : 'md:justify-start md:pl-16 md:flex-row-reverse'} pl-16 md:pl-0`}>
                    <div className="w-full md:w-5/12">
                      <div className="bg-card/20 backdrop-blur-md border border-border/40 p-8 rounded-[2rem] hover:border-primary/50 hover:bg-card/40 transition-all duration-500 relative overflow-hidden group-hover:-translate-y-2 shadow-lg">
                        
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <div className="relative z-10">
                          <div className="inline-flex items-center text-xs font-bold tracking-widest uppercase text-primary mb-4 bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                            <Calendar className="w-3.5 h-3.5 mr-2" />
                            {edu.date}
                          </div>
                          
                          <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                            {edu.degree}
                          </h3>
                          
                          <h4 className="text-lg text-foreground/80 font-medium mb-6">
                            {edu.school}
                          </h4>
                          
                          <div className="space-y-3">
                            <div className="flex items-center text-sm text-muted-foreground font-medium">
                              <BookOpen className="w-4 h-4 mr-3 text-primary/70" />
                              {edu.details}
                            </div>
                            
                            <div className="flex items-center justify-between mt-6 pt-6 border-t border-border/30">
                              <div className="flex items-center text-sm text-muted-foreground">
                                <MapPin className="w-4 h-4 mr-2 text-primary/70" />
                                {edu.location}
                              </div>
                              <span className="text-sm font-bold text-foreground bg-foreground/10 px-3 py-1 rounded-md">
                                {edu.score}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
