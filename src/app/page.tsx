"use client";

import { useState, useEffect, useCallback } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TerminalBoot } from "@/components/layout/TerminalBoot";
import { CursorParticleCanvas } from "@/components/layout/CursorParticleCanvas";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { AchievementDashboard } from "@/components/sections/AchievementDashboard";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  const [bootingComplete, setBootingComplete] = useState(false);

  const handleComplete = useCallback(() => {
    setBootingComplete(true);
  }, []);

  useEffect(() => {
    if (!bootingComplete) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [bootingComplete]);

  return (
    <main className="min-h-screen relative">
      <CustomCursor />
      <CursorParticleCanvas />
      {!bootingComplete && <TerminalBoot onComplete={handleComplete} />}
      
      {/* Portfolio Content */}
      <div className={`transition-opacity duration-700 ${bootingComplete ? "opacity-100" : "opacity-0"}`}>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <SkillsSection />
        <AchievementDashboard />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
