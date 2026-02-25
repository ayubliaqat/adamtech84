"use client";
import { motion } from "framer-motion";
import { FiMail, FiCalendar, FiArrowRight } from "react-icons/fi";

export default function ServiceCTA() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 bg-white" aria-labelledby="cta-heading">
      {/* Container: Changed to White with a subtle border instead of Dark Zinc */}
      <div className="bg-white rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-16 lg:p-24 relative overflow-hidden border border-zinc-100 shadow-sm transition-all duration-500 hover:shadow-xl hover:border-cyan-500/20">
        
        {/* Visual Decoration: Adjusted to be even more subtle on white background */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px] -mr-40 -mt-40 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[80px] -ml-20 -mb-20 pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Icon Box: Adjusted for White Theme */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 bg-zinc-50 border border-zinc-100 rounded-2xl flex items-center justify-center text-zinc-900 mb-10"
          >
            <FiMail size={28} className="text-cyan-600" />
          </motion.div>

          {/* Heading: Pure Black for maximum contrast */}
          <h2 id="cta-heading" className="text-4xl md:text-5xl lg:text-7xl font-black text-zinc-900 tracking-tighter mb-8 leading-[1]">
            Ready to build <br /> 
            <span className="text-zinc-300">something impactful?</span>
          </h2>

          <p className="text-zinc-500 text-[16px] md:text-lg lg:text-xl max-w-2xl mb-12 font-light leading-relaxed">
            Whether you are optimizing enterprise architecture or launching a career in the German tech market, let’s define the strategy.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto items-center">
            {/* Primary Action */}
            <motion.a 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="mailto:your-email@example.com"
              className="w-full sm:w-auto px-10 py-5 bg-zinc-900 text-white rounded-full font-bold text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-cyan-600 transition-all duration-300 shadow-lg"
            >
              Get in Touch <FiArrowRight size={16} />
            </motion.a>
            
            {/* Secondary Action: Updated to "Book a Call" Page */}
            <motion.a 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="/book" 
              className="w-full sm:w-auto px-10 py-5 bg-white text-zinc-900 border border-zinc-200 rounded-full font-bold text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-zinc-50 transition-all duration-300 shadow-sm"
            >
              <FiCalendar size={18} className="text-cyan-600" /> Book a Call
            </motion.a>
          </div>

          {/* Metadata Footer: Adjusted for readability on White */}
          <div className="mt-20 pt-10 border-t border-zinc-100 flex flex-col sm:flex-row items-center gap-8 opacity-60">
             <div className="flex items-center gap-3">
               <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse" />
               <span className="text-zinc-900 text-[10px] font-mono tracking-widest uppercase">Berlin / Remote</span>
             </div>
             <div className="hidden sm:block w-[1px] h-3 bg-zinc-200" />
             <div className="text-zinc-900 text-[10px] font-mono tracking-widest uppercase">English / Arabic / German</div>
             <div className="hidden sm:block w-[1px] h-3 bg-zinc-200" />
             <div className="text-zinc-900 text-[10px] font-mono tracking-widest uppercase">Legacy Est. 2012</div>
          </div>
        </div>
      </div>
    </section>
  );
}