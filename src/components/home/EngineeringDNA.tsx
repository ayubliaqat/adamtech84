"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function EngineeringDNA() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const principles = [
    {
      id: "01",
      title: "Resilience by Design",
      desc: "Infrastructure shouldn't just work; it should be impossible to break. I architect systems with zero-single-point-of-failure logic."
    },
    {
      id: "02",
      title: "Clean Intelligence",
      desc: "AI is only as powerful as the pipeline that feeds it. I prioritize low-latency throughput and scalable data modeling over hype."
    },
    {
      id: "03",
      title: "The German Standard",
      desc: "Navigating the EU tech ecosystem requires precision. I bridge global innovation with local regulatory excellence."
    }
  ];

  if (!mounted) return null;

  return (
    <section 
      className="relative w-full py-20 md:py-32 overflow-hidden bg-background transition-colors duration-500"
    >
      {/* Subtle background glow that works in both modes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#06b6d410_0%,transparent_50%)]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* 1. Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-cyan-600 font-bold tracking-[0.5em] text-[10px] uppercase mb-4 block"
          >
            Our Core DNA
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight"
          >
            Engineering for the <br />
            <span className="text-cyan-600 italic font-medium">
              Next Decade.
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-muted max-w-2xl mx-auto mt-8 text-base md:text-lg font-light leading-relaxed"
          >
            We don't just build systems; we architect legacies. Our philosophy is rooted in technical 
            uncompromising quality and structural integrity.
          </motion.p>
        </div>

        {/* 2. Adaptive Cards using your Theme Variables */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((item, i) => (
            <motion.article 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group flex flex-col justify-between h-full p-10 rounded-[2.5rem] border border-border-subtle transition-all duration-500
                         bg-card-background hover:border-cyan-500/30 shadow-sm hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-cyan-500/50 text-[11px] font-bold group-hover:text-cyan-600 transition-colors">
                    // {item.id}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_10px_#06b6d4]" />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight group-hover:text-cyan-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-muted text-sm md:text-base font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Smooth Bottom Accent */}
              <div className="mt-10 h-[2px] w-full bg-border-subtle/30 relative overflow-hidden rounded-full">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-700 ease-in-out" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}