"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiServer, FiBookOpen } from "react-icons/fi";

export default function TheDualPath() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section 
      className="relative w-full py-20 md:py-32 overflow-hidden transition-colors duration-500 bg-background"
    >
      {/* 1. SEAMLESS BACKGROUND OVERLAY */}
      {/* Instead of hardcoded white, we use a transparent-to-muted gradient that adapts to both modes */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-muted/5 to-muted/10 dark:via-transparent dark:to-transparent" />

      {/* 2. IDENTICAL GLOW EFFECTS (Exact match to DNA section) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-400/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-400/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-cyan-600 dark:text-cyan-400 font-bold tracking-[0.5em] text-[10px] uppercase mb-4 block"
          >
            Expertise Units
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight"
          >
            Two Paths. <span className="text-cyan-600 dark:text-cyan-400 italic font-medium">One Standard.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted max-w-xl mx-auto text-base md:text-lg font-light leading-relaxed"
          >
            Refined engineering meets strategic mentorship. 
            <span className="text-foreground/80 font-normal block mt-2">Precision in every line of code.</span>
          </motion.p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Path A: Enterprise */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="group relative flex flex-col justify-end min-h-[450px] p-10 md:p-14 rounded-[2.5rem] border transition-all duration-500
                       bg-card-background border-border-subtle shadow-sm hover:shadow-2xl 
                       dark:hover:shadow-cyan-500/10 backdrop-blur-sm"
          >
            <div className="absolute top-10 right-10 text-foreground/[0.03] dark:text-white/[0.02] group-hover:text-cyan-500/10 transition-all duration-700">
              <FiServer size={80} />
            </div>
            
            <div className="relative z-10">
              <span className="text-cyan-500 font-mono text-[10px] font-bold tracking-widest uppercase mb-4 block">
                // Pillar 01
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
                Enterprise <br />
                <span className="text-cyan-600">Infrastructure</span>
              </h3>
              <p className="text-muted mb-10 max-w-[300px] text-base font-light leading-relaxed">
                Strategic engineering for telecom networks and high-availability AI pipelines.
              </p>
              <a 
                href="/services#consulting" 
                className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-foreground hover:text-cyan-500 transition-colors group/link"
              >
                Learn More 
                <FiArrowUpRight size={16} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Path B: Junior Academy */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="group relative flex flex-col justify-end min-h-[450px] p-10 md:p-14 rounded-[2.5rem] border transition-all duration-500
                       bg-card-background border-border-subtle shadow-sm hover:shadow-2xl 
                       dark:hover:shadow-cyan-600/10 backdrop-blur-sm"
          >
            <div className="absolute top-10 right-10 text-foreground/[0.03] dark:text-white/[0.02] group-hover:text-cyan-500/10 transition-all duration-700">
              <FiBookOpen size={80} />
            </div>

            <div className="relative z-10">
              <span className="text-cyan-600 font-mono text-[10px] font-bold tracking-widest uppercase mb-4 block">
                // Pillar 02
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
                Academy & <br />
                <span className="text-cyan-500">Mentorship</span>
              </h3>
              <p className="text-muted mb-10 max-w-[300px] text-base font-light leading-relaxed">
                Accelerated technical training and career navigation for the modern market.
              </p>
              <a 
                href="/services#training" 
                className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-foreground hover:text-cyan-500 transition-colors group/link"
              >
                Join Program 
                <FiArrowUpRight size={16} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}