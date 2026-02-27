"use client";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { useTheme } from "next-themes";
import { FiMail, FiMessageCircle, FiLinkedin, FiGithub } from "react-icons/fi";

export default function ContactPage() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: resolvedTheme === "dark" ? "dark" : "light",
        styles: { 
          branding: { brandColor: "#06b6d4" }, 
          body: { background: "transparent", padding: "0" } 
        },
        ...({
          cssVars: {
            "--cal-bg": "transparent",
            "--cal-bg-muted": resolvedTheme === "dark" ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
            "--cal-border": resolvedTheme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
          }
        } as any),
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, [resolvedTheme]);

  const socialLinks = [
    { icon: <FiMail />, href: "mailto:hello@adamtech84.com", label: "Email" },
    { icon: <FiMessageCircle />, href: "https://wa.me/yournumber", label: "WhatsApp" },
    { icon: <FiLinkedin />, href: "https://linkedin.com/in/yourprofile", label: "LinkedIn" },
    { icon: <FiGithub />, href: "https://github.com/yourusername", label: "GitHub" },
  ];

  return (
    <main className="min-h-screen bg-background pt-32 pb-20 transition-colors duration-500">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT: ICON COMMAND BAR */}
          <div className="lg:col-span-4 space-y-16">
            <header className="space-y-6">
              <span className="text-accent font-bold tracking-[0.5em] text-[10px] uppercase block">
                // System Contact
              </span>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-foreground leading-[0.85]">
                Let's <br /> <span className="text-accent italic">Sync.</span>
              </h1>
            </header>

            {/* THE ICON BAR */}
            <div className="flex items-center gap-6 pt-10 border-t border-border-subtle">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  aria-label={link.label}
                  className="p-4 rounded-2xl bg-card/20 border border-border-subtle text-2xl text-muted hover:text-accent hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 hover:-translate-y-1"
                >
                  {link.icon}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <p className="text-[10px] uppercase tracking-widest text-muted">Protocol: Direct encrypted channels</p>
            </div>
          </div>

          {/* RIGHT: THE CALENDAR */}
          <div className="lg:col-span-8">
            <div className="relative lg:border-l lg:border-border-subtle lg:pl-16">
              <div className="mb-8 flex items-center gap-4">
                <span className="text-[10px] uppercase tracking-[0.4em] text-muted whitespace-nowrap">Scheduling Protocol</span>
                <div className="h-[1px] flex-1 bg-border-subtle/30" />
              </div>

              <div className="relative overflow-hidden min-h-[660px]">
                <Cal
                  calLink="ayubliaqat495"
                  style={{ width: "100%", height: "660px", background: "transparent" }}
                  config={{ 
                    layout: "month_view", 
                    theme: resolvedTheme === "dark" ? "dark" : "light" 
                  }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}