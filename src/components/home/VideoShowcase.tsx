"use client";
import { motion } from "framer-motion";

export default function VideoShowcase() {
  return (
    <section className="relative py-8 md:py-12 overflow-hidden bg-background">
      {/* Background Glow to bridge the sections */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative group"
        >
          {/* Decorative Label */}

          {/* Video Container with Glassmorphism Frame */}
          <div className="relative rounded-2xl md:rounded-[2.5rem] overflow-hidden border border-border-subtle bg-card shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
            <div className="aspect-video w-full h-full relative">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover scale-105" // Slightly scaled to avoid edge artifacts
              >
                <source src="/video/animated_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Subtle Overlay to keep it high-end */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
            </div>

            {/* Glass Corner Tag (Optional Decor) */}
            <div className="absolute bottom-6 right-6 glass px-4 py-2 rounded-full hidden md:flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-foreground">
                Engine_v2.04
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}