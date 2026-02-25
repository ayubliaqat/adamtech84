"use client";

import Link from "next/link";
import { FaHome, FaUser, FaBriefcase } from "react-icons/fa";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { useEffect, useState } from "react";

export default function Header() {
  const [time, setTime] = useState(new Date());
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');

    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark');
  };

  const formattedTime = time.toLocaleTimeString("en-GB", {
    hour: "2-digit", minute: "2-digit", second: "2-digit",
  });

  if (!mounted) return null;

  return (
    <header className="fixed top-0 left-0 w-full z-50 p-4 md:p-6 lg:px-12 flex items-center pointer-events-none">
      
      {/* LEFT SLOT: flex-1 ensures this takes up space on the left */}
      <div className="flex-1 hidden md:block text-[12px] font-medium text-muted pointer-events-auto">
        <span className="opacity-50 uppercase tracking-tighter text-[10px]">Based in</span> <br />
        <span className="text-foreground transition-colors duration-300">Europe/Berlin</span>
      </div>

      {/* MOBILE SPACER: flex-1 for mobile when left location is hidden */}
      <div className="flex-1 md:hidden" />

      {/* CENTER SLOT: Floating Nav */}
      <nav aria-label="Main Navigation" className="pointer-events-auto flex justify-center">
        <div className="glass flex items-center gap-1 p-1 rounded-full shadow-xl transition-colors duration-500">
          <NavLink href="/" icon={<FaHome size={14}/>} label="Home" />
          <NavLink href="/about" icon={<FaUser size={14}/>} label="About" />
          <NavLink href="/services" icon={<FaBriefcase size={14}/>} label="Services" />
          
          <div className="w-[1px] h-4 bg-zinc-200 dark:bg-zinc-800 mx-1 hidden sm:block" />
          
          <button 
            onClick={toggleTheme}
            className="p-2.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-all duration-300 text-foreground"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <BsSunFill size={16} className="text-yellow-400" /> : <BsMoonStarsFill size={15} />}
          </button>
        </div>
      </nav>

      {/* RIGHT SLOT: flex-1 ensures this takes up equal space on the right */}
      <div className="flex-1 text-[12px] font-mono text-muted text-right pointer-events-auto">
        <span className="hidden sm:inline opacity-50 uppercase tracking-tighter text-[10px]">Local Time</span> <br />
        <span className="text-foreground tabular-nums transition-colors duration-300">{formattedTime}</span>
      </div>
      
    </header>
  );
}

function NavLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link 
      href={href} 
      className="flex items-center gap-2 px-3 py-2 md:px-5 md:py-2.5 text-[13px] font-semibold text-muted hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-all duration-300"
    >
      <span className="text-foreground/80">{icon}</span>
      <span className="hidden sm:inline">{label}</span>
    </Link>
  );
}