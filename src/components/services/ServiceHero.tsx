"use client";
import { motion } from "framer-motion";

export default function ServiceHero() {
  return (
    <section 
      className="relative max-w-7xl mx-auto px-6 p-20 pb-4 md:pt-20 md:pb-12 overflow-hidden"
      aria-labelledby="service-hero-title"
    >
      {/* SEO: Structured Data for Service Business */}
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
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Badge: Using your specific Cyan glow palette */}
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-50 dark:bg-cyan-950/30 border border-cyan-100 dark:border-cyan-900 text-[10px] md:text-[11px] font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-[0.2em] mb-8 shadow-sm">
            Expertise & Solutions
          </span>

          {/* Main Title: Optimized for responsiveness and color variables */}
          <h1 
            id="service-hero-title"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.05] transition-colors duration-500"
          >
            Expert Consulting & Training <br className="hidden md:block" />
            <span className="text-muted opacity-80">for the High-Stakes Tech Market.</span>
          </h1>

          {/* Description: Balanced max-width for readability */}
          <p className="mt-10 text-[16px] md:text-lg lg:text-xl text-muted leading-relaxed max-w-2xl mx-auto font-light transition-colors duration-500">
            Leveraging <span className="text-foreground font-medium italic">12+ years</span> of industry experience in 
            Telecommunications and AI to help organizations build robust systems 
            and juniors launch high-impact careers.
          </p>

          {/* Scroll Indicator / Decorative Element */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex flex-col items-center gap-2"
          >
            <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-500 to-transparent opacity-50" />
            <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">Explore Expertise</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Decor: Radial Glow syncs with your globals.css variables */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-50 pointer-events-none">
        <div className="absolute inset-0 bg-radial-gradient from-cyan-100/20 to-transparent dark:from-cyan-900/10 dark:to-transparent blur-3xl" />
      </div>
    </section>
  );
}