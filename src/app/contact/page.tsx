"use client";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { useTheme } from "next-themes";
import { FiMail, FiMessageCircle, FiLinkedin, FiGithub } from "react-icons/fi";

export default function ContactPage() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: isDark ? "dark" : "light",
        styles: { branding: { brandColor: "#06b6d4" } },
        hideEventTypeDetails: false,
      });
    })();
  }, [isDark]);

  const socialLinks = [
    { icon: <FiMail />, href: "mailto:hello@adamtech84.com", label: "Email" },
    { icon: <FiMessageCircle />, href: "https://wa.me/yournumber", label: "WhatsApp" },
    { icon: <FiLinkedin />, href: "https://linkedin.com/in/yourprofile", label: "LinkedIn" },
    { icon: <FiGithub />, href: "https://github.com/yourusername", label: "GitHub" },
  ];

  return (
    <main className="min-h-screen bg-background pt-32 pb-20 transition-colors duration-500">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: Matches Book Page exactly */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-8">
            <div className="space-y-6">
              <span className="text-accent font-bold tracking-[0.5em] text-[10px] uppercase block underline decoration-accent/30 underline-offset-8">
                // System Contact
              </span>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-foreground leading-[0.85]">
                Let's <br /> <span className="text-accent italic font-medium">Sync.</span>
              </h1>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className={`p-4 rounded-2xl border transition-all duration-300 ${
                    isDark 
                      ? 'bg-zinc-900/50 border-white/10 text-zinc-400 hover:text-accent hover:border-accent/50' 
                      : 'bg-zinc-100 border-black/5 text-zinc-600 hover:text-accent'
                  }`}
                >
                  <div className="text-xl">{link.icon}</div>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: The Card - Matches Book Page exactly */}
          <div className="lg:col-span-8">
            <div 
              className={`
                relative p-8 md:p-12 rounded-[2.5rem] transition-all duration-700 flex flex-col items-center justify-center text-center space-y-8
                ${isDark 
                  ? 'bg-zinc-900 border border-white/5 shadow-2xl' 
                  : 'bg-zinc-100 border border-black/5 shadow-xl'
                }
              `}
            >
              <div className="space-y-4">
                {/* These classes pull from your globals.css to sync colors */}
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Ready to start?</h2>
                <p className="text-muted-foreground text-lg max-w-md mx-auto">
                  Schedule a direct protocol session to discuss your architecture or engineering needs.
                </p>
              </div>

              {/* Trigger Button: Matches Book Page exactly */}
              <button
                data-cal-link="ayubliaqat495"
                data-cal-config='{"layout":"month_view"}'
                className={`
                  px-10 py-5 rounded-full font-bold text-lg transition-all shadow-2xl
                  ${isDark 
                    ? 'bg-white text-black hover:bg-zinc-200' 
                    : 'bg-zinc-900 text-white hover:bg-zinc-800'}
                `}
              >
                View Availability
              </button>

              <div className="pt-4 flex items-center gap-2 opacity-50">
                <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                <span className="text-[10px] uppercase tracking-widest font-bold text-foreground">
                    Encrypted Scheduling Active
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}