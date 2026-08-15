"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const centerNavLinks = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Skills", href: "#skills" },
  ];

  const allNavLinks = [...centerNavLinks, { name: "Contact", href: "#contact" }];

  return (
    <header className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[calc(100%-1.5rem)] max-w-7xl z-50 transition-all duration-300">
      <div className="relative w-full py-2 px-4 sm:px-6 rounded-xl bg-background/85 border border-white/10 backdrop-blur-2xl shadow-2xl flex items-center justify-between">
        {/* Left: Logo */}
        <a href="#" className="flex items-center group">
          <div className="relative flex items-center justify-center p-1 rounded-lg bg-card/40 border border-border/40 group-hover:border-primary/50 transition-all duration-300 group-hover:scale-105">
            <Image
              src="/AC-logo.png"
              alt="Aditya Logo"
              width={48}
              height={48}
              className="w-10 h-10 md:w-11 md:h-11 object-contain transition-transform duration-300"
            />
          </div>
        </a>

        {/* Center: Main Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 lg:gap-2 absolute left-1/2 -translate-x-1/2">
          {centerNavLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-mono font-semibold text-muted-foreground hover:text-foreground px-3.5 py-1.5 rounded-lg hover:bg-white/5 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Highlighted Contact Button (Desktop/Tablet) + Phone Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-mono font-bold text-primary-foreground bg-primary hover:bg-primary/90 px-4 py-2 rounded-lg shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] transition-all duration-200"
          >
            <span>Contact</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Phone & Tablet Hamburger Menu Toggle */}
          <button
            className="flex lg:hidden items-center gap-1.5 text-sm font-mono font-semibold text-foreground px-3.5 py-1.5 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span>Menu</span>
            {mobileMenuOpen ? <X className="w-4 h-4 text-primary" /> : <Menu className="w-4 h-4 text-primary" />}
          </button>
        </div>
      </div>

      {/* Phone Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-16 right-0 w-72 rounded-xl bg-card/95 backdrop-blur-2xl border border-white/10 p-6 shadow-2xl z-50 flex flex-col gap-3 lg:hidden"
          >
            {allNavLinks.map((link, i) => (
              <motion.a
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-mono font-semibold tracking-tight text-foreground hover:text-primary transition-colors py-2 border-b border-border/20 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
