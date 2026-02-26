"use client";
import { motion } from "framer-motion";

export default function ServiceHero() {
  return (
    <section 
      className="relative bg-background max-w-7xl mx-auto px-6 pt-24 pb-12 overflow-hidden"
      aria-labelledby="service-hero-title"
    >
      {/* 1. BACKGROUND DNA: Synced with Homepage */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Subtle Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_50%_0%,#0891b208_0%,transparent_70%)]" />
        
        {/* The Technical Grid Mask */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* SEO: Structured Data stays exactly as you had it */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Technical Consulting & AI Training",
            "provider": {
              "@type": "Person",
              "name": "Adam Tech",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Berlin",
                "addressCountry": "DE"
              }
            },
            "description": "Bridge the gap between infrastructure and intelligence with 12+ years of experience in Telecom and AI."
          }),
        }}
      />

      <div className="flex flex-col items-center text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          {/* Status Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/5 border border-cyan-500/20 text-[10px] md:text-[11px] font-bold text-cyan-600 uppercase tracking-[0.2em] mb-8 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Expertise & Solutions
          </span>

          {/* Main Title */}
          <h1 
            id="service-hero-title"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground leading-[0.95] mb-8"
          >
            Expert <span className="text-cyan-600 italic font-medium">Consulting</span> <br className="hidden md:block" />
            <span className="text-muted/40 font-light">&</span> Training Architecture.
          </h1>

          {/* Description */}
          <p className="text-[17px] md:text-xl text-muted leading-relaxed max-w-2xl mx-auto font-light transition-colors duration-500">
            Leveraging <span className="text-foreground font-semibold">12+ years</span> of industry experience in 
            Telecommunications and AI to build robust systems 
            and launch <span className="text-cyan-600/80 underline decoration-cyan-600/20 underline-offset-4">high-impact careers</span>.
          </p>

          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-16 flex flex-col items-center gap-3"
          >
            <div className="w-[1px] h-16 bg-gradient-to-b from-cyan-600 to-transparent" />
            <span className="text-[9px] uppercase tracking-[0.4em] text-muted font-black">Scroll to explore</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}