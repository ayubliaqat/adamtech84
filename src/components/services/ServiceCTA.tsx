"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiCalendar, FiArrowRight } from "react-icons/fi";

export default function ServiceCTA() {
  return (
    // REDUCED: Changed py-20 to pt-4 (top) and pb-20 (bottom) to close the gap
    <section className="max-w-6xl mx-auto px-6 pt-4 pb-20 md:pt-8 md:pb-32 bg-background">
      
      {/* Container: Slightly more compact padding */}
      <div className="relative bg-card-background border border-border-subtle rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 overflow-hidden shadow-2xl transition-all duration-500 hover:border-cyan-500/30">
        
        {/* Visual Decoration */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Subtle Indicator - Kept small for elegance */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="text-cyan-600 text-[9px] font-bold tracking-[0.4em] uppercase">Let's Talk</span>
          </motion.div>

          {/* Heading: Tightened leading and margin */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6 leading-[1.1]">
            Ready to build <br /> 
            <span className="text-cyan-600 italic font-medium">something impactful?</span>
          </h2>

          <p className="text-muted text-sm md:text-base max-w-lg mb-10 font-extralight leading-relaxed px-4">
            Whether you are optimizing enterprise architecture or launching a career in the German tech market, let’s define the strategy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-foreground text-background rounded-full font-bold text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-cyan-600 transition-all"
            >
              Get in Touch <FiArrowRight size={14} />
            </motion.a>
            
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="/book" 
              className="w-full sm:w-auto px-8 py-4 border border-border-subtle text-foreground rounded-full font-bold text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-foreground/5 transition-all"
            >
              <FiCalendar size={16} className="text-cyan-500" /> Book a Call
            </motion.a>
          </div>

          {/* Metadata Footer: Tighter top margin */}
          <div className="mt-16 pt-8 border-t border-border-subtle/50 flex flex-wrap justify-center items-center gap-y-4 gap-x-8 opacity-40">
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 bg-cyan-500 rounded-full" />
                <span className="text-foreground text-[9px] font-mono tracking-tighter uppercase">Berlin / Remote</span>
              </div>
              <div className="text-foreground text-[9px] font-mono tracking-tighter uppercase">English / German / Arabic</div>
          </div>
        </div>
      </div>
    </section>
  );
}