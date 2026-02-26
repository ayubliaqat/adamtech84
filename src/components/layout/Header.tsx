"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // 1. Import the hook
import { FaHome, FaUser, FaBriefcase } from "react-icons/fa";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname(); // 2. Get current path
  const [time, setTime] = useState(new Date());
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    setMounted(true);
    const savedTheme =
      (localStorage.getItem("theme") as "light" | "dark") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");

    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark");
  };

  // NEW CODE (Forced to Berlin Timezone)
  const formattedTime = time.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "Europe/Berlin", // This ensures everyone sees Germany's time
  });

  if (!mounted) return <div className="h-20" />;

  return (
    <header className="fixed top-0 left-0 w-full z-50 p-4 md:p-6 lg:px-12 flex items-center pointer-events-none">
      <div className="flex-1 hidden md:block text-[12px] font-medium text-muted pointer-events-auto">
        <span className="text-muted/60 uppercase tracking-tighter text-[10px]">
          Based in
        </span>{" "}
        <br />
        <span className="text-foreground font-semibold">Europe/Berlin</span>
      </div>

      <div className="flex-1 md:hidden" />

      <nav
        aria-label="Main Navigation"
        className="pointer-events-auto flex justify-center"
      >
        <div className="glass flex items-center gap-1 p-1.5 rounded-full shadow-2xl">
          {/* 3. Pass the 'active' prop by checking the pathname */}
          <NavLink
            href="/"
            icon={<FaHome size={14} />}
            label="Home"
            active={pathname === "/"}
          />
          <NavLink
            href="/about"
            icon={<FaUser size={14} />}
            label="About"
            active={pathname === "/about"}
          />
          <NavLink
            href="/services"
            icon={<FaBriefcase size={14} />}
            label="Services"
            active={pathname === "/services"}
          />

          <div className="w-[1px] h-4 bg-border-subtle mx-1 hidden sm:block" />

          <button
            onClick={toggleTheme}
            className="p-2.5 hover:bg-foreground/5 rounded-full transition-all duration-300 text-foreground flex items-center justify-center"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <BsSunFill
                size={16}
                className="text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.4)]"
              />
            ) : (
              <BsMoonStarsFill size={15} className="text-slate-700" />
            )}
          </button>
        </div>
      </nav>

      <div className="flex-1 text-[12px] font-mono text-muted text-right pointer-events-auto">
        <span className="hidden sm:inline text-muted/60 uppercase tracking-tighter text-[10px]">
          Local Time
        </span>{" "}
        <br />
        <span className="text-foreground tabular-nums font-bold">
          {formattedTime}
        </span>
      </div>
    </header>
  );
}

// 4. Update NavLink to handle the active state
function NavLink({
  href,
  icon,
  label,
  active,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`
        flex items-center gap-2 px-3 py-2 md:px-5 md:py-2.5 text-[13px] font-medium rounded-full transition-all duration-300 group
        ${
          active
            ? "bg-foreground/10 text-foreground shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]"
            : "text-muted hover:text-foreground hover:bg-foreground/5"
        }
      `}
    >
      <span
        className={`transition-colors ${active ? "text-accent" : "text-foreground/70 group-hover:text-accent"}`}
      >
        {icon}
      </span>
      <span className="hidden sm:inline">{label}</span>

      {/* Optional: Add a small dot or underglow for the active link */}
      {active && (
        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full hidden md:block" />
      )}
    </Link>
  );
}
