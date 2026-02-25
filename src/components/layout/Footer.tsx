"use client";
import React from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full border-t border-zinc-100 dark:border-zinc-800 bg-background py-16 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          
          {/* Top Section: Brand Identity */}
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter text-foreground">
              Adam<span className="text-cyan-600">Tech</span>
            </h2>
            <p className="text-muted text-sm font-light tracking-[0.2em] uppercase">
              Let&apos;s grow together 🚀
            </p>
          </div>

          {/* Middle Section: Social Connectivity */}
          <div className="flex items-center space-x-8">
            {[
              { icon: <FaGithub size={20} />, href: "https://github.com/your-profile", label: "Github" },
              { icon: <FaLinkedinIn size={20} />, href: "https://linkedin.com/in/your-profile", label: "LinkedIn" },
              { icon: <FaEnvelope size={20} />, href: "mailto:your-email@example.com", label: "Email" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300"
                aria-label={social.label}
              >
                {/* Subtle hover glow effect */}
                <div className="absolute -inset-2 bg-cyan-500/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative transform group-hover:scale-110 transition-transform">
                  {social.icon}
                </div>
              </a>
            ))}
          </div>

          {/* Bottom Section: Formal Details */}
          <div className="pt-8 w-full max-w-xs border-t border-zinc-100 dark:border-zinc-800/50">
            <p className="text-[10px] text-zinc-400 font-mono tracking-widest uppercase opacity-70">
              © {new Date().getFullYear()} — High-Stakes Tech Strategy
            </p>
            <p className="text-[9px] text-zinc-500 mt-2 font-mono italic">
              Berlin &bull; Remote &bull; Worldwide
            </p>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;