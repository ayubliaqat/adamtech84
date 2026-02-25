"use client";
import { motion } from "framer-motion";
import { FiArrowRight, FiShield } from "react-icons/fi";

export default function HomeHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 bg-background" aria-label="Introduction">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[5%] left-[-5%] w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Subtle Welcome */}
          <span className="text-cyan-600 dark:text-cyan-400 font-bold tracking-[0.4em] text-[10px] md:text-[12px] uppercase mb-4 block opacity-80">
            Welcome to
          </span>

          {/* Brand Name */}
          <h1 className="text-7xl md:text-8xl lg:text-[10rem] font-black tracking-[ -0.05em] text-foreground leading-[0.8] mb-10">
            Adam<span className="text-cyan-600">Tech</span>
          </h1>

          {/* The WOW Tagline */}
          <h2 className="text-xl md:text-3xl lg:text-4xl font-light text-muted max-w-4xl mx-auto leading-tight mb-12">
            Engineering <span className="text-foreground font-semibold">Resilient Infrastructure.</span> <br className="hidden md:block" />
            Architecting <span className="text-foreground font-semibold">Intelligence without Limits.</span>
          </h2>

          {/* Responsive Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/services" 
              className="w-full sm:w-auto px-10 py-5 bg-foreground text-background rounded-full font-bold text-[11px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-colors hover:bg-cyan-600 hover:text-white shadow-xl shadow-cyan-900/10"
            >
              The Strategy <FiArrowRight />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/book" 
              className="w-full sm:w-auto px-10 py-5 border border-zinc-200 dark:border-white/10 rounded-full font-bold text-[11px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-zinc-50 dark:hover:bg-white/5 transition-all"
            >
              <FiShield className="text-cyan-500" /> Book Audit
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}