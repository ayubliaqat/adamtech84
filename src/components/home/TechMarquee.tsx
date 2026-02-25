"use client";
import React from "react";

export default function ServiceSlider() {
  const services = [
    "CONSULTANCY", 
    "SYSTEMS DESIGN", 
    "APPLIED AI", 
    "NETWORK ARCHITECTURE", 
    "TENSORFLOW", 
    "STRATEGIC AUDITS", 
    "TECH MENTORSHIP", 
    "ML PIPELINES", 
    "DATA SCIENCE", 
    "ENTERPRISE INFRA", 
    "GERMAN TECH MARKET"
  ];

  return (
    <section 
      className="py-6 md:py-12 bg-white overflow-hidden select-none border-y border-zinc-100"
      aria-label="Expertise Slider"
    >
      <div className="flex w-full">
        {/* The marquee container */}
        <div className="flex animate-marquee whitespace-nowrap gap-6 md:gap-8 items-center">
          {/* First set of services */}
          {services.map((item, i) => (
            <span 
              key={`first-${i}`} 
              className="text-3xl md:text-4xl font-bold tracking-[0.2em] text-cyan-600 transition-colors duration-300 cursor-default"
            >
              {item}
            </span>
          ))}
          {/* Duplicate set for a seamless infinite loop */}
          {services.map((item, i) => (
            <span 
              key={`second-${i}`} 
              className="text-4xl md:text-5xl font-bold tracking-[0.2em] text-zinc-200 hover:text-cyan-600 transition-colors duration-300 cursor-default"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}