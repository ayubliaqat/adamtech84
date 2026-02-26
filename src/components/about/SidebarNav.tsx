"use client";
import React, { useEffect, useState } from "react";

export default function SidebarNav() {
  const [activeSection, setActiveSection] = useState("introduction");

  const sections = [
    { id: "introduction", label: "Introduction" },
    { id: "experience", label: "Work Experience" },
    { id: "studies", label: "Studies" },
    { id: "skills", label: "Technical skills" },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      // This margin ensures the section lights up when it's near the top
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // Accounts for fixed headers
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="space-y-6">
      {sections.map((item) => {
        const isActive = activeSection === item.id;

        return (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="group flex items-center gap-4 outline-none w-full text-left"
          >
            {/* The Indicator Line: Stretching and Glowing */}
            <div
              className={`h-[1.5px] transition-all duration-500 ease-in-out ${
                isActive
                  ? "w-10 bg-cyan-600 shadow-[0_0_10px_rgba(8,145,178,0.4)]"
                  : "w-4 bg-zinc-300 dark:bg-zinc-800 group-hover:w-8 group-hover:bg-zinc-400"
              }`}
            />

            {/* The Label: Clean, Bold, and Cyan-600 when active */}
            <span
              className={`text-[10px] uppercase tracking-[0.3em] font-black transition-all duration-300 ${
                isActive
                  ? "text-cyan-600 translate-x-1"
                  : "text-zinc-400 dark:text-zinc-600 group-hover:text-foreground"
              }`}
            >
              {item.label}
            </span>
          </button>
        );
      })}

      {/* Subtle Technical Stamp for the "Wow" factor */}
      <div className="pt-10 opacity-20 group pointer-events-none">
        <p className="text-[9px] font-mono tracking-tighter text-muted leading-tight">
          ARCH_TYPE: <span className="text-cyan-600">DOSSIER</span> <br />
          UNIT_STAT: <span className="text-cyan-600">ACTIVE</span>
        </p>
      </div>
    </nav>
  );
}