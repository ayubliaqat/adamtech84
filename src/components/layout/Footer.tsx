"use client";
import React from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    /* FIX 1: Removed 'bg-background' to allow the RootLayout's radial gradient 
      to flow through. This prevents the "solid block" look at the bottom.
      FIX 2: Swapped zinc-borders for your CSS variable 'border-border-subtle'.
    */
    <footer className="w-full border-t border-border-subtle py-12 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center space-y-10">
          {/* Top Section: Brand Identity */}
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter text-foreground transition-colors">
              Adam<span className="text-accent">Tech</span>
            </h2>
            <p className="text-muted text-[11px] font-light tracking-[0.3em] uppercase transition-colors">
              Let&apos;s grow together 🚀
            </p>
          </div>

          {/* Middle Section: Social Connectivity */}
          <div className="flex items-center space-x-10">
            {[
              {
                icon: <FaGithub size={22} />,
                href: "https://github.com/your-profile",
                label: "Github",
              },
              {
                icon: <FaLinkedinIn size={22} />,
                href: "https://linkedin.com/in/your-profile",
                label: "LinkedIn",
              },
              {
                icon: <FaEnvelope size={22} />,
                href: "mailto:your-email@example.com",
                label: "Email",
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative text-muted hover:text-accent transition-all duration-300"
                aria-label={social.label}
              >
                {/* FIX 3: Dynamic Glow using the 'accent' variable instead of hardcoded cyan */}
                <div className="absolute -inset-3 bg-accent/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                  {social.icon}
                </div>
              </a>
            ))}
          </div>

          {/* Bottom Section: Formal Details */}
          {/* FIX 4: Updated border to use your system variables */}
          {/* Bottom Section: Formal Details */}
          <div className="pt-8 w-full max-w-sm border-t border-border-subtle/50">
            <p className="text-[10px] text-muted font-mono tracking-[0.2em] uppercase opacity-80">
              © {new Date().getFullYear()} AdamTech — High-Stakes Tech Strategy.
              All Rights Reserved.
            </p>
            <p className="text-[9px] text-muted/60 mt-3 font-mono uppercase tracking-widest">
              Berlin <span className="mx-2 text-accent">•</span> Remote{" "}
              <span className="mx-2 text-accent">•</span> Worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
