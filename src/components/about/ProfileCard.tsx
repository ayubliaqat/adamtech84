"use client";
import Image from "next/image";

export default function ProfileCard() {
  return (
    <div className="flex flex-col items-center lg:items-start gap-8 w-full">
      {/* 1. CIRCULAR IMAGE CONTAINER */}
      <div className="relative group">
        {/* Outer Ring Animation */}
        <div className="absolute -inset-1.5 rounded-full border border-cyan-600/20 group-hover:border-cyan-600/50 transition-colors duration-700 pointer-events-none" />
        
        {/* Main Circle Frame */}
        <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-2 border-border-subtle bg-card shadow-xl transition-all duration-700 group-hover:border-cyan-600">
          <Image
            src="/images/ayub.JPEG"
            alt="Adam Tech"
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100 ease-out"
            sizes="(max-width: 768px) 176px, 208px"
            priority
          />
          
          {/* Subtle Cyan Tint on Hover */}
          <div className="absolute inset-0 bg-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </div>
      </div>

      {/* 2. LIVE STATUS & DETAILS */}
      <div className="space-y-6 w-full flex flex-col items-center lg:items-start">
        
        {/* Status Indicator */}
        <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-muted/20 border border-border-subtle w-fit">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] font-bold text-foreground/80 tracking-[0.2em] uppercase">
            Active // Berlin
          </span>
        </div>

        {/* Communication Stack */}
        <div className="space-y-3">
          <p className="text-[9px] font-black text-cyan-600 uppercase tracking-[0.4em] text-center lg:text-left">
            // Languages
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-2">
            {["English", "Arabic", "German"].map((lang) => (
              <span 
                key={lang} 
                className="px-3 py-1 rounded-full border border-border-subtle text-[10px] text-muted font-bold bg-card hover:border-cyan-600 hover:text-cyan-600 transition-all cursor-default"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>

        {/* Technical ID Stamp */}
        <div className="pt-2 opacity-25">
          <p className="text-[9px] font-mono leading-tight uppercase tracking-tighter text-muted text-center lg:text-left">
            SYS_ID: AT_26_GER <br />
            ACCESS: LEAD_ARCHITECT
          </p>
        </div>
      </div>
    </div>
  );
}