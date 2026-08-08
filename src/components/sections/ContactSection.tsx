"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Download, Mail, Send, Sparkles } from "lucide-react";
import Link from "next/link";

export function ContactSection() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-background">
      {/* Background glow */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 w-[800px] h-[500px] bg-primary/10 rounded-[100%] blur-[120px] pointer-events-none" />

      <div className="container px-4 md:px-8 relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center justify-center mb-4"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground flex items-center gap-4">
              Get in Touch <Sparkles className="w-8 h-8 text-primary" />
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full mt-2 mb-6 mx-auto"></div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl text-muted-foreground max-w-2xl font-light"
          >
            Ready to collaborate? Let&apos;s build something impactful together.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
            className="bg-card/20 backdrop-blur-xl border border-border/40 p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
            <h3 className="text-3xl font-bold mb-8 text-foreground relative z-10">Send a Message</h3>
            
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-sm font-medium text-foreground/80">Name</label>
                  <Input id="name" placeholder="John Doe" className="bg-background/50 border-border/50 h-12 rounded-xl focus-visible:ring-primary/50" />
                </div>
                <div className="space-y-3">
                  <label htmlFor="email" className="text-sm font-medium text-foreground/80">Email</label>
                  <Input id="email" type="email" placeholder="john@example.com" className="bg-background/50 border-border/50 h-12 rounded-xl focus-visible:ring-primary/50" />
                </div>
              </div>
              <div className="space-y-3">
                <label htmlFor="subject" className="text-sm font-medium text-foreground/80">Subject</label>
                <Input id="subject" placeholder="Opportunities, Freelance, etc." className="bg-background/50 border-border/50 h-12 rounded-xl focus-visible:ring-primary/50" />
              </div>
              <div className="space-y-3">
                <label htmlFor="message" className="text-sm font-medium text-foreground/80">Message</label>
                <Textarea id="message" placeholder="Your message here..." className="min-h-[150px] bg-background/50 border-border/50 rounded-xl resize-none focus-visible:ring-primary/50" />
              </div>
              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 rounded-xl h-14 text-lg shadow-[0_0_20px_-5px_rgba(var(--primary-rgb),0.5)]">
                <Send className="w-5 h-5 mr-2" /> Send Message
              </Button>
            </form>
          </motion.div>

          {/* Download Center */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4, type: "spring" }}
            className="flex flex-col justify-center gap-8"
          >
            {/* Resume Card */}
            <div className="group bg-primary/10 border border-primary/20 hover:border-primary/50 hover:bg-primary/20 transition-all duration-500 p-10 rounded-[2.5rem] flex flex-col items-center text-center shadow-lg relative overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-20 h-20 rounded-[1.5rem] bg-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                <Download className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">Resume & Portfolio</h3>
              <p className="text-muted-foreground mb-8 font-medium">
                Download a clean, printer-friendly version of my professional resume and complete portfolio.
              </p>
              <Link href="/recruiter" className="w-full relative z-10">
                <Button className="w-full h-14 rounded-xl font-semibold bg-background hover:bg-background/90 text-foreground" size="lg" variant="outline">
                  Open Recruiter Mode
                </Button>
              </Link>
            </div>

            {/* Direct Contact Card */}
            <div className="group bg-card/20 backdrop-blur-md border border-border/40 hover:border-primary/40 hover:bg-card/40 transition-all duration-500 p-10 rounded-[2.5rem] flex flex-col items-center text-center shadow-lg">
              <div className="w-20 h-20 rounded-[1.5rem] bg-foreground/5 flex items-center justify-center text-foreground mb-6 group-hover:scale-110 group-hover:bg-primary/20 group-hover:text-primary transition-all duration-500">
                <Mail className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Direct Contact</h3>
              <p className="text-muted-foreground mb-8 font-medium">
                Prefer direct email? Reach out to me at my personal inbox.
              </p>
              <a href="mailto:adityachaturvedi26@gmail.com" className="w-full">
                <Button className="w-full h-14 rounded-xl font-semibold border-border/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300" size="lg" variant="outline">
                  adityachaturvedi26@gmail.com
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
