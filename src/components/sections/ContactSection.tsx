"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUpRight, Mail, Download, MapPin, Clock } from "lucide-react";
import Link from "next/link";
import { serif } from "@/app/fonts";

export function ContactSection() {
  return (
    <section id="contact" className="py-28 relative overflow-hidden bg-background border-t border-border/30">
      {/* Background subtle radial ambient glow */}
      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container px-4 sm:px-6 md:px-10 relative z-10 max-w-7xl mx-auto">
        {/* Editorial Section Header */}
        <div className="flex flex-col items-start mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-start"
          >
            <div className="text-xs font-mono tracking-[0.25em] text-primary uppercase mb-3">
              Let&apos;s Connect
            </div>
            <h2 className={`${serif.className} text-5xl sm:text-6xl md:text-8xl font-normal tracking-tight text-foreground mb-4`}>
              Get in Touch
            </h2>
            <p className="text-base sm:text-xl text-muted-foreground font-light leading-relaxed max-w-xl">
              Ready to collaborate? Let&apos;s build something impactful together.
            </p>
          </motion.div>
        </div>

        {/* Editorial 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column: Card Style Contact Form with Small Border Radius (rounded-xl) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 bg-card/30 backdrop-blur-2xl border border-white/10 p-8 sm:p-10 rounded-xl shadow-xl relative overflow-hidden space-y-6"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
            
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground relative z-10 mb-6">
              Send a Message
            </h3>

            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    className="bg-white/5 border-white/10 h-12 rounded-lg px-4 text-sm text-foreground placeholder:text-muted-foreground/40 focus-visible:ring-primary/50 font-mono transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="bg-white/5 border-white/10 h-12 rounded-lg px-4 text-sm text-foreground placeholder:text-muted-foreground/40 focus-visible:ring-primary/50 font-mono transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Product Inquiry, Opportunity, Consultation"
                  className="bg-white/5 border-white/10 h-12 rounded-lg px-4 text-sm text-foreground placeholder:text-muted-foreground/40 focus-visible:ring-primary/50 font-mono transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project or inquiry..."
                  className="min-h-[130px] bg-white/5 border-white/10 rounded-lg p-4 text-sm text-foreground placeholder:text-muted-foreground/40 resize-none focus-visible:ring-primary/50 font-mono transition-colors"
                />
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  className="group w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-mono text-xs uppercase tracking-[0.2em] font-semibold h-13 rounded-lg shadow-lg shadow-primary/20 transition-all duration-300"
                >
                  <span>SEND MESSAGE</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </Button>
              </div>
            </form>
          </motion.div>

          {/* Right Column: Direct Editorial Links & Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 space-y-10 lg:pl-6"
          >
            {/* Direct Email Link */}
            <div className="space-y-3 pb-8 border-b border-white/10">
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground block">
                DIRECT INBOX
              </span>
              <a
                href="mailto:adityachaturvedi361@gmail.com"
                className="group flex items-center justify-between text-lg sm:text-xl font-mono text-foreground hover:text-primary transition-colors py-1"
              >
                <span className="underline underline-offset-8 decoration-white/20 group-hover:decoration-primary transition-colors">
                  adityachaturvedi361@gmail.com
                </span>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </a>
            </div>

            {/* Recruiter Mode & Resume Link */}
            <div className="space-y-3 pb-8 border-b border-white/10">
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground block">
                CAREER RESUME
              </span>
              <Link
                href="/recruiter"
                className="group flex items-center justify-between text-lg sm:text-xl font-mono text-foreground hover:text-primary transition-colors py-1"
              >
                <span>OPEN RECRUITER MODE</span>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </Link>
            </div>

            {/* Location & Response Metadata */}
            <div className="space-y-4 pt-2 font-mono text-xs text-muted-foreground/80">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span>LOCATION: JAIPUR, INDIA (GMT +5:30)</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>RESPONSE TIME: WITHIN 24 HOURS</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
