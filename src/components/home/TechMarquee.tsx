"use client";
import React from "react";

export default function ServiceSlider() {
  const services = [
    "Consultancy", "Systems Design", "Applied AI", 
    "Network Architecture", "TensorFlow", "Strategic Audits", 
    "Tech Mentorship", "ML Pipelines", "Data Science", 
    "Enterprise Infra", "German Tech Market"
  ];

  return (
    <section 
      className="py-6 md:py-10 bg-background overflow-hidden select-none border-y border-border-subtle"
      aria-label="Expertise Slider"
    >
      <div className="relative flex items-center">
        {/* Edge Fades: Softens the entry/exit of text */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-background to-transparent z-10" />

        {/* The Marquee */}
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {[...Array(3)].map((_, groupIndex) => (
            <div key={groupIndex} className="flex items-center">
              {services.map((item, i) => (
                <React.Fragment key={`${groupIndex}-${i}`}>
                  {/* FIX: Reduced from 'font-black' to 'font-bold' for a cleaner look */}
                  {/* FIX: Set color to your cyan-600 while maintaining dark mode compatibility */}
                  <span className="text-xl md:text-2xl font-semibold tracking-[0.1em] text-cyan-600 dark:text-cyan-500/90 px-6 md:px-10 cursor-default uppercase">
                    {item}
                  </span>
                  
                  {/* FIX: Small elegant separator ensures each skill is "separate" and readable */}
                  <span className="text-muted/30 font-light text-xl md:text-2xl">/</span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}