"use client";
import { motion } from "framer-motion";
import { FiArrowRight, FiShield } from "react-icons/fi";

export default function HomeHero() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-28 pb-20 bg-background" aria-label="Introduction">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-5%] right-[-5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-accent/10 rounded-full blur-[100px] md:blur-[150px]" />
        <div className="absolute bottom-[10%] left-[-5%] w-[250px] md:w-[450px] h-[250px] md:h-[450px] bg-accent/5 rounded-full blur-[80px] md:blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Subtle Welcome - Reduced weight for elegance */}
          <span className="text-accent font-medium tracking-[0.4em] text-[10px] md:text-[12px] uppercase mb-6 block">
            Welcome to
          </span>

          {/* Brand Name - Responsive sizing is key here */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[10rem] font-black tracking-[-0.05em] text-foreground leading-[0.9] mb-8">
            Adam<span className="text-cyan-600">Tech</span>
          </h1>

          {/* The WOW Tagline - Lightened the weight for better contrast */}
          <h3 className="text-lg md:text-2xl lg:text-3xl font-light text-muted max-w-3xl mx-auto leading-relaxed mb-12 px-4">
            Engineering <span className="text-foreground font-medium">Resilient Infrastructure.</span> <br className="hidden md:block" />
            Architecting <span className="text-foreground font-medium">Intelligence without Limits.</span>
          </h3>

          {/* Responsive Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="/services" 
              className="w-full sm:w-auto px-10 py-4.5 bg-foreground text-background rounded-full font-bold text-[11px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all hover:shadow-[0_10px_30px_-10px_rgba(var(--accent-rgb),0.3)]"
            >
              The Strategy <FiArrowRight className="text-lg" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="/book" 
              className="w-full sm:w-auto px-10 py-4.5 border border-border-subtle rounded-full font-bold text-[11px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-foreground/5 transition-all"
            >
              <FiShield className="text-accent text-lg" /> Book Audit
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}