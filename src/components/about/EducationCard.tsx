"use client";
import { motion } from "framer-motion";

export default function EducationSection() {
  const studies = [
    {
      degree: "MSc Data Science & AI",
      school: "GISMA University of Applied Sciences",
      year: "2024",
      focus: "Applied Machine Learning & Predictive Analytics",
    },
    {
      degree: "BSc Electrical Engineering",
      school: "University of Technology",
      year: "2012",
      focus: "Telecommunications & Power Systems Architecture",
    },
  ];

  return (
    <section id="studies" className="scroll-mt-48 space-y-12">
      {/* Section Header - Cyan-600 Standard */}
      <h3 className="text-cyan-600 uppercase text-[11px] font-black tracking-[0.4em]">
        // 02. Academic Foundation
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {studies.map((study, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative p-8 rounded-3xl bg-card border border-border-subtle hover:border-cyan-600/50 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-cyan-500/5"
          >
            {/* Subtle background number/index */}
            <span className="absolute -right-4 -bottom-4 text-8xl font-black text-foreground/[0.03] group-hover:text-cyan-600/[0.05] transition-colors">
              0{index + 1}
            </span>

            <div className="relative z-10 space-y-4">
              <span className="text-[10px] font-mono font-bold text-cyan-600 uppercase tracking-widest bg-cyan-600/5 px-2 py-1 rounded">
                Class of {study.year}
              </span>
              
              <div className="space-y-1">
                <h4 className="text-xl font-bold text-foreground leading-tight group-hover:text-cyan-600 transition-colors duration-300">
                  {study.degree}
                </h4>
                <p className="text-sm font-medium text-muted/80 tracking-tight">
                  {study.school}
                </p>
              </div>

              <div className="pt-4 border-t border-border-subtle/50">
                <p className="text-xs text-muted leading-relaxed font-light italic">
                  Specialization: <span className="text-foreground/70 font-normal">{study.focus}</span>
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}