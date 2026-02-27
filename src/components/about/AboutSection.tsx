"use client";
import React from "react";
import SidebarNav from "./SidebarNav";
import ProfileCard from "./ProfileCard";
import IntroSection from "./AboutContent"; // The section with your original text
import TimelineItem from "./TimelineItem";
import EducationSection from "./EducationCard";
import SkillTag from "./SkillTag";
import ExperienceSection from "./Experience";

export default function AboutSection() {
  const skills = [
    "Python",
    "TensorFlow",
    "Kubernetes",
    "AWS",
    "PyTorch",
    "ML Pipelines",
    "Next.js",
    "C++",
    "R-Stats",
    "Data Visualization",
  ];

  return (
    <section className="relative w-full bg-background transition-colors duration-500">
      {/* 1. Engineering DNA Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#0891b208_0%,transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-24 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* LEFT COLUMN: Navigation (Hidden on mobile) */}
          <div className="hidden lg:block lg:col-span-2 sticky top-32 h-fit">
            <SidebarNav />
          </div>

          {/* MIDDLE COLUMN: Identity & Bio (Sticky on desktop) */}
          <div className="lg:col-span-3 lg:sticky lg:top-32 h-fit">
            <ProfileCard />
          </div>

          {/* RIGHT COLUMN: Detailed Technical Dossier */}
          <div className="lg:col-span-7 space-y-32 md:space-y-48">
            {/* SECTION 1: INTRODUCTION */}
            <IntroSection />
            {/* SECTION 3: EDUCATION */}

            {/* SECTION 2: WORK EXPERIENCE */}
            <section id="experience" className="scroll-mt-12 space-y-12">
              <h3 className="text-cyan-600 uppercase text-[11px] font-black tracking-[0.4em] flex items-center gap-3">
                <span className="h-[1px] w-8 bg-cyan-600/30"></span>
                // 01. Professional Path
              </h3>
              <div className="space-y-0">
                <TimelineItem
                  title="Technical Lead"
                  company="Telecommunications Corp"
                  period="2018 — Present"
                  description="Leading cross-functional teams to deploy scalable network infrastructures and AI-driven monitoring systems."
                />
                <TimelineItem
                  title="Senior Consultant"
                  company="Tech Advisors Intl"
                  period="2012 — 2018"
                  description="Advised global clients on telecommunications strategy and electrical engineering optimizations."
                  isLast
                />
              </div>
            </section>
            <EducationSection />
            {/* SECTION 4: TECHNICAL SKILLS */}
            <section id="skills" className="scroll-mt-32 space-y-12 pb-20">
              <h3 className="text-cyan-600 uppercase text-[11px] font-black tracking-[0.4em] flex items-center gap-3">
                <span className="h-[1px] w-8 bg-cyan-600/30"></span>
                // 03. Technical Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <SkillTag key={skill} label={skill} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
