"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function IntroSection() {
  return (
    <section id="introduction" className="scroll-mt-48 space-y-10">
      {/* 1. TOP BADGE & HEADERS */}
      <header className="space-y-6">
        <motion.a
          href="/book" // 👈 Added navigation
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{
            scale: 1.05,
            backgroundColor: "rgba(6, 182, 212, 0.1)",
          }} // Subtle hover lift
          whileTap={{ scale: 0.98 }}
          viewport={{ once: true }}
          /* UPDATED PADDING: px-6 py-2 instead of px-4 py-1.5 */
          className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-cyan-500/5 border border-cyan-500/20 text-[10px] font-bold text-cyan-600 dark:text-cyan-400 tracking-widest uppercase cursor-pointer transition-colors duration-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          Book a call now
        </motion.a>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-foreground leading-[0.9]">
          Adam<span className="text-cyan-600 italic">Tech.</span>
        </h1>

        <h2 className="text-2xl md:text-3xl text-muted font-light tracking-tight max-w-xl">
          AI Consultant | Telecom Network Solutions{" "}
          <span className="text-foreground font-medium"></span>
        </h2>
      </header>

      {/* 2. SOCIALS - Clean & Aligned */}
      <div className="flex flex-wrap gap-3">
        <SocialBtn
          icon={<FaLinkedin />}
          label="LinkedIn"
          href="http://www.linkedin.com/in/rasheed-ibrahim"
        />
        <SocialBtn
          icon={<FaEnvelope />}
          label="Email"
          href="Rasheed@adamtech84.com"
        />
      </div>

      {/* 3. YOUR ORIGINAL TEXT - Optimized for Readability */}
      <div className="max-w-2xl space-y-6 text-[15px] md:text-[17px] text-muted leading-relaxed font-light">
        <p>
          <span className="inline-flex items-center gap-2">
            <strong className="text-foreground pb-0.5">Hi, I'm Rasheed!</strong>
            <span className="animate-wave origin-[70%_70%] inline-block">
              👋
            </span>
          </span>
          <br />I am a{" "}
          <span className="text-foreground">
            Data Scientist and AI Consultant
          </span>{" "}
          with a background in large-scale telecom engineering. I help
          organizations navigate the intersection of{" "}
          <span className="text-foreground pb-0.5">
            Infrastructure and Intelligence
          </span>
          .
        </p>

        <p>
          I specialize in building machine learning models, designing data
          pipelines, and turning complex data into actionable insights. Whether
          it's{" "}
          <span className="text-foreground">
            training computer vision models
          </span>
          , developing predictive algorithms, or architecting scalable data
          systems, I focus on solutions that work in the real world.
        </p>

        <p>
          If you are looking for a{" "}
          <span className="text-foreground">consultant</span> who listens deeply
          and delivers with care, let&apos;s connect to build your technical
          future.
        </p>
      </div>
    </section>
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
      className="flex items-center gap-2 px-5 py-2.5 text-foreground/80 hover:bg-muted/50 rounded-xl text-[11px] font-black uppercase tracking-widest text-muted border border-border-subtle transition-all hover:border-cyan-600 hover:text-cyan-600"
    >
      {icon} <span>{label}</span>
    </a>
  );
}
