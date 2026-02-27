"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FiCode,
  FiZap,
  FiTarget,
  FiTrendingUp,
  FiCheck,
  FiArrowRight,
} from "react-icons/fi";

export default function ServiceTraining() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const programs = [
    {
      category: "Programming",
      icon: <FiCode />,
      topics: ["Python (Automation)", "R (Statistics)", "C/C++ (Systems)"],
      color: "from-blue-500/10",
    },
    {
      category: "AI & Data",
      icon: <FiZap />,
      topics: [
        "ML Pipelines",
        "Scikit-learn / TensorFlow",
        "Data Storytelling",
      ],
      color: "from-cyan-500/10",
    },
    {
      category: "Networking",
      icon: <FiTarget />,
      topics: ["TCP/IP Fundamentals", "Network Security", "VPN & Encryption"],
      color: "from-indigo-500/10",
    },
  ];

  if (!mounted) return null;

  return (
    <section
      className="max-w-7xl mx-auto px-6 py-12 md:py-24 bg-background transition-colors duration-500"
      aria-labelledby="training-heading"
    >
      {/* 1. MAIN CONTAINER: Using your theme variable 'bg-card-background' */}
      <div className="relative bg-card-background border border-border-subtle rounded-[2.5rem] md:rounded-[4rem] px-8 py-16 md:p-20 overflow-hidden shadow-2xl transition-all duration-500">
        {/* Deep Mind Glow - Subtle and theme-aware */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/[0.03] dark:bg-cyan-500/[0.07] blur-[120px] rounded-full pointer-events-none -z-10" />

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-cyan-600 font-bold tracking-[0.4em] text-[10px] md:text-[11px] uppercase mb-6 block"
          >
            // Pillar 02: Educational Excellence
          </motion.span>

          <h2
            id="training-heading"
            className="text-4xl md:text-7xl font-bold tracking-tighter mb-8 text-foreground leading-[0.95] transition-colors duration-500"
          >
            Training{" "}
            <span className="text-cyan-600 italic font-medium">Programs.</span>
          </h2>

          <p className="text-muted max-w-2xl text-[17px] md:text-xl font-light leading-relaxed transition-colors duration-500">
            Bridge the gap between academic theory and industry reality.
            Practical mentorship designed for
            <span className="text-foreground font-medium italic underline underline-offset-8 decoration-cyan-500/30 ml-1">
              high-impact careers
            </span>
            .
          </p>
        </div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative z-10">
          {programs.map((prog, i) => (
            <motion.div
              key={prog.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              /* CARD: Using background-background to pop against card-background */
              className="group bg-background p-8 lg:p-10 rounded-[2.5rem] border border-border-subtle hover:border-cyan-500/30 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden relative"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${prog.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-card-background border border-border-subtle flex items-center justify-center text-cyan-600 mb-10 text-2xl group-hover:bg-cyan-500 group-hover:text-white transition-all duration-500 shadow-sm">
                  {prog.icon}
                </div>
                <h3 className="text-2xl font-bold mb-8 text-foreground tracking-tight transition-colors duration-500">
                  {prog.category}
                </h3>
                <ul className="space-y-5">
                  {prog.topics.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-center gap-4 text-sm text-muted font-light group-hover:text-foreground transition-colors"
                    >
                      <FiCheck className="text-cyan-500 flex-shrink-0" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Train With Me */}
        <div className="mt-28 md:mt-40 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h3 className="text-3xl md:text-5xl font-bold italic text-foreground leading-[1.1] tracking-tight transition-colors duration-500">
              &quot;A practical approach tailored for the{" "}
              <span className="text-cyan-600">German job market.</span>&quot;
            </h3>

            <div className="grid grid-cols-2 gap-x-8 gap-y-12">
              {[
                { label: "Experience", value: "12+ Years Industry" },
                { label: "Education", value: "MSc Data Science" },
                { label: "Location", value: "Online / Berlin" },
                { label: "Focus", value: "Job-Ready Skills" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="border-l-2 border-cyan-500 pl-6 group"
                >
                  <p className="text-[10px] font-black uppercase text-muted tracking-[0.2em] mb-2 group-hover:text-cyan-600 transition-colors">
                    {stat.label}
                  </p>
                  <p className="text-lg font-bold text-foreground tracking-tight transition-colors duration-500">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* HIGH CONTRAST BOX: Flips using your variables */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-foreground text-background p-12 md:p-16 rounded-[3.5rem] relative overflow-hidden group shadow-2xl transition-colors duration-500"
          >
            <FiTrendingUp className="absolute -right-16 -bottom-16 text-[22rem] opacity-[0.05] pointer-events-none group-hover:scale-110 transition-transform duration-1000" />

            <div className="relative z-10">
              <h4 className="text-3xl font-bold mb-8 tracking-tighter transition-colors duration-500">
                Who is this for?
              </h4>
              <ul className="space-y-6 mb-12 opacity-70">
                {[
                  "Fresh graduates in CS/Engineering",
                  "Juniors looking to upskill",
                  "Newcomers to German Tech",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-4 text-base font-light"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                    {item}
                  </li>
                ))}
              </ul>

              <motion.a
                href="/book"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto bg-background text-foreground px-10 py-5 rounded-full font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-cyan-500 hover:text-white transition-all duration-500 shadow-xl group/btn flex items-center justify-center gap-3 cursor-pointer"
              >
                Check Availability
                <FiArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
