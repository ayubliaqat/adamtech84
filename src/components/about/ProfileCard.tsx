"use client";
import Image from "next/image";

export default function ProfileCard() {
  return (
    <div className="flex flex-col items-center lg:items-start gap-8 w-full">
      {/* 1. CIRCULAR IMAGE CONTAINER */}
      <div className="relative group">
        {/* Outer Glow - Subtle cyan glow for separation in Dark Mode */}
        <div className="absolute -inset-2 rounded-full bg-cyan-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        
        {/* Outer Ring Animation */}
        <div className="absolute -inset-1.5 rounded-full border border-cyan-500/10 group-hover:border-cyan-500/40 transition-colors duration-700 pointer-events-none" />
        
        {/* Main Circle Frame */}
        {/* Using bg-white and border-white to ensure a clean photo background regardless of theme */}
        <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-white bg-white shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-700 group-hover:border-cyan-500">
          <Image
            // Path corrected to match your file properties (lowercase .jfif)
            src="/images/profile-adam.jfif" 
            alt="Adam Tech Profile"
            fill
            className="object-cover transition-all duration-1000 scale-105 group-hover:scale-100 ease-out"
            sizes="(max-width: 768px) 176px, 208px"
            priority
          />
        </div>
      </div>

      {/* 2. LIVE STATUS & DETAILS */}
      <div className="space-y-6 w-full flex flex-col items-center lg:items-start">
        
        {/* Status Indicator */}
        <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-fit backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] font-bold text-zinc-400 tracking-[0.2em] uppercase">
            Active // Berlin
          </span>
        </div>

        {/* Communication Stack */}
        <div className="space-y-3">
          <p className="text-[9px] font-black text-cyan-500 uppercase tracking-[0.4em] text-center lg:text-left">
            // Languages
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-2">
            {["English", "Arabic", "German"].map((lang) => (
              <span 
                key={lang} 
                className="px-3 py-1 rounded-full border border-white/10 text-[10px] text-zinc-300 font-bold hover:border-cyan-500 hover:text-cyan-500 transition-all cursor-default bg-white/5"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>

        {/* Technical ID Stamp */}
        <div className="pt-2 opacity-30">
          <p className="text-[9px] font-mono leading-tight uppercase tracking-tighter text-zinc-500 text-center lg:text-left">
            SYS_ID: AT_26_GER <br />
            ACCESS: LEAD_ARCHITECT
          </p>
        </div>
      </div>
    </div>
  );
}