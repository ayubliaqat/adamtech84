"use client";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiServer, FiBookOpen } from "react-icons/fi";

export default function TheDualPath() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-6 md:py-12 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Path A: Enterprise - Pure White / Technical Line Art */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative bg-white border border-zinc-100 rounded-[3rem] p-10 md:p-16 overflow-hidden min-h-[550px] flex flex-col justify-end hover:border-cyan-500/30 transition-all duration-500"
        >
          {/* Subtle Icon Watermark */}
          <div className="absolute top-12 right-12 text-zinc-50 group-hover:text-cyan-500/10 transition-colors duration-500">
            <FiServer size={120} />
          </div>
          
          <div className="relative z-10">
            <span className="text-cyan-600 text-[10px] font-bold tracking-[0.4em] uppercase block mb-6">
              Pillar 01
            </span>
            <h3 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6 leading-[0.9] tracking-tighter">
              Enterprise <br/> Infrastructure
            </h3>
            <p className="text-zinc-500 mb-10 max-w-[300px] text-sm leading-relaxed font-light">
              Strategic engineering for telecom networks and scaled AI production pipelines.
            </p>
            <a 
              href="/services#consulting" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-cyan-600 transition-all duration-300"
            >
              Consultancy <FiArrowUpRight size={14} />
            </a>
          </div>
        </motion.div>

        {/* Path B: Junior Academy - Pure White / Technical Line Art */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="group relative bg-white border border-zinc-100 rounded-[3rem] p-10 md:p-16 overflow-hidden min-h-[550px] flex flex-col justify-end hover:border-cyan-500/30 transition-all duration-500"
        >
          {/* Subtle Icon Watermark */}
          <div className="absolute top-12 right-12 text-zinc-50 group-hover:text-cyan-500/10 transition-colors duration-500">
            <FiBookOpen size={120} />
          </div>

          <div className="relative z-10">
            <span className="text-zinc-400 text-[10px] font-bold tracking-[0.4em] uppercase block mb-6">
              Pillar 02
            </span>
            <h3 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6 leading-[0.9] tracking-tighter">
              Academy & <br/> Mentorship
            </h3>
            <p className="text-zinc-500 mb-10 max-w-[300px] text-sm leading-relaxed font-light">
              Accelerated technical training and career strategy for the German tech ecosystem.
            </p>
            <a 
              href="/services#training" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-white border border-zinc-900 text-zinc-900 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-zinc-900 hover:text-white transition-all duration-300"
            >
              Join Program <FiArrowUpRight size={14} />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}