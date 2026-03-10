"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaUser, FaBriefcase } from "react-icons/fa";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [time, setTime] = useState(new Date());
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    setMounted(true);
    const savedTheme =
      (localStorage.getItem("theme") as "light" | "dark") || "dark";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");

    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const formattedTime = time.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "Europe/Berlin",
  });

  if (!mounted) return <div className="h-20" />;

  return (
    <header className="fixed top-0 left-0 w-full z-50 p-4 md:p-6 lg:px-12 flex items-center justify-between pointer-events-none">
      {/* Updated: Now visible on all screens */}
      <div className="flex-1 text-[10px] md:text-[12px] font-medium text-muted pointer-events-auto leading-tight">
        <span className="text-muted/60 uppercase tracking-tighter text-[9px] md:text-[10px]">
          Based in
        </span>{" "}
        <br />
        <span className="text-foreground font-semibold">Europe/Berlin</span>
      </div>

      <nav
        aria-label="Main Navigation"
        className="pointer-events-auto flex justify-center px-2"
      >
        <div className="glass flex items-center gap-1 p-1.5 rounded-full shadow-2xl">
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

          {/* <button
    onClick={toggleTheme}
    className={`p-2.5 rounded-full transition-all duration-300 flex items-center justify-center ${
      theme === "dark"
        ? "bg-foreground/10 text-foreground shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]"
        : "text-muted hover:text-foreground hover:bg-foreground/5"
    }`}
    aria-label="Toggle Theme"
  >
    {theme === "dark" ? (
      <BsSunFill size={16} className="text-foreground" />
    ) : (
      <BsMoonStarsFill size={15} className="text-foreground/70" />
    )}
  </button> 
*/}
        </div>
      </nav>

      {/* Local Time side */}
      <div className="flex-1 text-[10px] md:text-[12px] font-mono text-muted text-right pointer-events-auto leading-tight">
        <span className="hidden sm:inline text-muted/60 uppercase tracking-tighter text-[9px] md:text-[10px]">
          Local Time
        </span>{" "}
        <br className="hidden sm:block" />
        <span className="text-foreground tabular-nums font-bold">
          {formattedTime}
        </span>
      </div>
    </header>
  );
}

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
        relative flex items-center gap-2 px-3 py-2 md:px-5 md:py-2.5 text-[13px] font-medium rounded-full transition-all duration-300 group
        ${
          active
            ? "bg-foreground/10 text-foreground shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]"
            : "text-muted hover:text-foreground hover:bg-foreground/5"
        }
      `}
    >
      <span
        className={`transition-colors ${
          active
            ? "text-foreground"
            : "text-foreground/70 group-hover:text-foreground"
        }`}
      >
        {icon}
      </span>
      <span className="hidden sm:inline">{label}</span>

      {active && (
        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-foreground rounded-full hidden md:block" />
      )}
    </Link>
  );
}
