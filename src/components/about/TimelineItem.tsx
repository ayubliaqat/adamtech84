"use client";
import { motion } from "framer-motion";

interface ExperienceProps {
  title: string;
  company: string;
  period: string;
  description: string;
  isLast?: boolean;
}

export default function TimelineItem({ title, company, period, description, isLast }: ExperienceProps) {
  return (
    <div className="group relative pl-10 pb-16 last:pb-8">
      {/* 1. THE VERTICAL CONNECTING LINE */}
      {!isLast && (
        <div className="absolute left-[11px] top-8 w-[px] h-full bg-border-subtle group-hover:bg-cyan-600/30 transition-colors duration-500" 
             style={{ width: '1px' }} 
        />
      )}
      
      {/* 2. THE INTERACTIVE NODE (The Pulsing Dot) */}
      <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-background border-2 border-border-subtle group-hover:border-cyan-600 transition-all duration-500 flex items-center justify-center z-10 shadow-sm group-hover:shadow-cyan-500/20">
        <div className="w-1.5 h-1.5 rounded-full bg-border-subtle group-hover:bg-cyan-600 group-hover:scale-125 transition-all duration-300" />
      </div>

      {/* 3. CONTENT AREA */}
      <motion.div 
        initial={{ opacity: 0, x: 15 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="space-y-4"
      >
        <div className="space-y-2">
          {/* Period Tag */}
          <span className="text-[10px] font-mono font-bold text-cyan-600 uppercase tracking-[0.3em] bg-cyan-600/5 px-2.5 py-1 rounded-md border border-cyan-600/10">
            {period}
          </span>
          
          {/* Title & Company */}
          <div className="pt-2">
            <h4 className="text-2xl font-bold text-foreground tracking-tight group-hover:text-cyan-600 transition-colors duration-300">
              {title}
            </h4>
            <p className="text-[11px] font-black text-muted/50 uppercase tracking-[0.2em] mt-1">
              {company}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="max-w-2xl text-muted text-[15px] md:text-[16px] font-light leading-relaxed">
          {description}
        </p>

        {/* 4. TECHNICAL FOOTER (The 'Wow' Detail) */}
        <div className="pt-2 flex items-center gap-2">
          <div className="h-[1px] w-4 bg-cyan-600/20" />
          <span className="text-[10px] text-cyan-600/60 font-mono tracking-tight uppercase">
            Performance_Report: <span className="text-foreground/40 italic whitespace-nowrap">// Optimal Delivery Achieved</span>
          </span>
        </div>
      </motion.div>
    </div>
  );
}