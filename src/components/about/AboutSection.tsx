"use client";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaExternalLinkAlt,
} from "react-icons/fa";
import Image from "next/image";

export default function AboutSection() {
  // These IDs must match the section IDs below
  const navItems = [
    { name: "Introduction", id: "introduction" },
    { name: "Work Experience", id: "experience" },
    { name: "Studies", id: "studies" },
    { name: "Technical skills", id: "skills" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 lg:py-24 flex flex-col lg:flex-row gap-12 lg:gap-20 items-start relative">
      {/* 1. LEFT SIDEBAR - Sticky Navigation */}
      <aside className="hidden lg:block w-40 sticky top-48 h-fit self-start">
        <nav className="space-y-4">
          {navItems.map((item, i) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="group flex items-center gap-3 cursor-pointer outline-none"
            >
              <div className="h-[1.5px] w-0 bg-zinc-900 dark:bg-zinc-100 transition-all duration-500 group-hover:w-4" />
              <span className="text-[12px] font-medium tracking-tight text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
                {item.name}
              </span>
            </a>
          ))}
        </nav>
      </aside>

      {/* 2. CENTER - Sticky Profile Info */}
      <div className="flex flex-col items-center lg:items-start gap-6 w-full lg:w-56 lg:sticky lg:top-48 h-fit self-start">
        <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden shadow-sm border border-zinc-100 dark:border-zinc-800 bg-card transition-colors">
          <Image
            src="/consultant.avif"
            alt="Adam Tech - Technical Lead"
            fill
            className="object-cover transition-all grayscale hover:grayscale-0 duration-700"
            sizes="(max-width: 768px) 144px, 176px"
          />
        </div>

        <div className="flex items-center gap-2 text-[13px] font-medium text-muted">
          <span className="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center text-[10px] text-white italic font-serif">
            A
          </span>
          Europe/Berlin
        </div>

        <div className="flex gap-2">
          <span className="px-3 py-1 rounded-full border border-border-subtle text-[10px] text-muted font-medium bg-card">
            English
          </span>
          <span className="px-3 py-1 rounded-full border border-border-subtle text-[10px] text-muted font-medium bg-card">
            Arabic
          </span>
        </div>
      </div>

      {/* 3. RIGHT - Scrollable Content Area */}
      <article className="flex-1 space-y-32 text-left pb-40">
        {/* SECTION: INTRODUCTION */}
        <section id="introduction" className="space-y-8 scroll-mt-48">
          <header className="space-y-4">
            <motion.div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/30 border border-cyan-100 dark:border-cyan-900 text-[11px] font-bold text-cyan-600">
              <span className="text-sm">📅</span> Schedule a call{" "}
              <span className="opacity-30">→</span>
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.05]">
              Adam Tech
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted font-light tracking-tight">
              Technical Lead & Consultant
            </h2>
          </header>

          <div className="flex flex-wrap gap-2">
            <SocialBtn icon={<FaGithub size={12} />} label="GitHub" href="#" />
            <SocialBtn
              icon={<FaLinkedin size={12} />}
              label="LinkedIn"
              href="#"
            />
            <SocialBtn icon={<FaEnvelope size={12} />} label="Email" href="#" />
          </div>

          <div className="max-w-2xl space-y-6 text-[15px] md:text-[16px] text-muted leading-relaxed">
            <p>
              I help organizations and individuals navigate the intersection of
              <strong className="text-zinc-900 font-semibold">
                {" "}
                Infrastructure and Intelligence
              </strong>
              . With over 12 years in Telecommunications Engineering and nearly
              three years dedicated to Applied AI, my approach is rooted in
              technical precision and clear communication.
            </p>
            <p>
              From supporting SMEs with network security to guiding junior
              developers through specialized mentorship for the
              <strong className="text-zinc-900 font-semibold">
                {" "}
                German tech market
              </strong>
              , I focus on sustainable growth and real-world impact. If you are
              looking for a consultant who listens deeply and delivers with
              care, let&apos;s connect to build your technical future.
            </p>
          </div>
        </section>

        {/* SECTION: WORK EXPERIENCE */}
        <section id="experience" className="space-y-12 scroll-mt-48">
          <h3 className="text-muted uppercase text-[12px] font-bold tracking-[0.2em]">
            Work Experience
          </h3>
          <div className="space-y-12">
            <ExperienceItem
              title="Technical Lead"
              company="Telecommunications Corp"
              period="2018 — Present"
              description="Leading cross-functional teams to deploy scalable network infrastructures and AI-driven monitoring systems."
            />
            <ExperienceItem
              title="Senior Consultant"
              company="Tech Advisors Intl"
              period="2012 — 2018"
              description="Advised global clients on telecommunications strategy and electrical engineering optimizations."
            />
          </div>
        </section>

        {/* SECTION: STUDIES */}
        <section id="studies" className="space-y-12 scroll-mt-48">
          <h3 className="text-muted uppercase text-[12px] font-bold tracking-[0.2em]">
            Studies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <StudyCard
              degree="MSc Data Science & AI"
              school="GISMA University"
              year="2024"
            />
            <StudyCard
              degree="BSc Electrical Engineering"
              school="University of Technology"
              year="2012"
            />
          </div>
        </section>

        {/* SECTION: TECHNICAL SKILLS */}
        <section id="skills" className="space-y-12 scroll-mt-48">
          <h3 className="text-zinc-400 uppercase text-[11px] font-bold tracking-[0.3em] text-center lg:text-left">
            Technical Skills
          </h3>

          <div className="flex flex-wrap justify-center lg:justify-start gap-3">
            {[
              // Programming & Systems
              "Python",
              "R-Stats",
              "C / C++",

              // AI & Data Science
              "TensorFlow",
              "Keras",
              "Scikit-Learn",
              "ML Pipelines",
              "Data Visualization",

              // Networking & Infrastructure (The 12-Year Core)
              // Security & Cloud
            ].map((skill) => (
              <span
                key={skill}
                className="px-5 py-3 rounded-2xl bg-white border border-zinc-100 text-[12px] text-zinc-800 font-bold tracking-tight hover:border-cyan-500 hover:text-cyan-600 transition-all duration-300 cursor-default shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </article>
    </section>
  );
}

// Reusable Components for Cleanliness
function ExperienceItem({ title, company, period, description }: any) {
  return (
    <div className="group relative pl-8 border-l border-zinc-100 dark:border-zinc-800 transition-colors">
      <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700 group-hover:bg-cyan-500 transition-colors" />
      <p className="text-xs font-bold text-cyan-600 mb-1">{period}</p>
      <h4 className="text-xl font-bold text-foreground">{title}</h4>
      <p className="text-sm font-medium text-zinc-400 mb-4">{company}</p>
      <p className="max-w-xl text-muted text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function StudyCard({ degree, school, year }: any) {
  return (
    <div className="p-6 rounded-2xl bg-card border border-border-subtle hover:border-zinc-400 transition-all">
      <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-4">
        {year}
      </p>
      <h4 className="text-lg font-bold text-foreground leading-tight">
        {degree}
      </h4>
      <p className="text-sm text-muted mt-1">{school}</p>
    </div>
  );
}

function SocialBtn({
  icon,
  label,
  href,
}: {
  icon: any;
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="flex items-center gap-2 px-4 py-2 bg-card hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-full text-[11px] font-bold text-muted border border-border-subtle transition-all"
    >
      {icon} <span>{label}</span>
    </a>
  );
}
