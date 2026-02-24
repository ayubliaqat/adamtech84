"use client";

import Link from "next/link";
import { FaHome, FaUser, FaServicestack } from "react-icons/fa";
import { BsMoon } from "react-icons/bs";
import { useEffect, useState } from "react";

export default function Header() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString("en-GB");

  return (
    <header className="fixed top-4 left-0 w-full z-50 px-10 flex items-center justify-between">
      
      {/* Left Side (Logo Area) */}
      <div className="text-sm font-medium text-gray-700">
        Europe/Berlin
      </div>

      {/* Center Floating Nav Card */}
      <div className="bg-white/30 backdrop-blur-md shadow-md rounded-full px-6 py-2">
        <nav className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-1 px-4 py-1 hover:bg-white/50 rounded-full transition">
            <FaHome /> Home
          </Link>
          <Link href="/about" className="flex items-center gap-1 px-4 py-1 hover:bg-white/50 rounded-full transition">
            <FaUser /> About
          </Link>
          <Link href="/services" className="flex items-center gap-1 px-4 py-1 hover:bg-white/50 rounded-full transition">
            <FaServicestack /> Services
          </Link>
          <button className="flex items-center px-4 py-1 hover:bg-white/50 rounded-full transition">
            <BsMoon />
          </button>
        </nav>
      </div>

      {/* Right Side (Live Time) */}
      <div className="text-sm font-mono text-gray-700">
        {formattedTime}
      </div>
    </header>
  );
}