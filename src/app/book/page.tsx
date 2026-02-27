"use client";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { useTheme } from "next-themes"; 

export default function BookPage() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: isDark ? "dark" : "light",
        styles: {
          branding: { brandColor: "#06b6d4" },
          body: { background: "transparent" }
        },
        ...({
          cssVars: {
            "--cal-bg": "transparent",
            "--cal-text": isDark ? "#ffffff" : "#18181b",
            "--cal-border": isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
          }
        } as any),
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, [isDark]);

  return (
    <main className="min-h-screen bg-background pt-32 pb-20 transition-colors duration-500">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: TITLE */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6">
            <span className="text-accent font-bold tracking-[0.5em] text-[10px] uppercase block underline decoration-accent/30 underline-offset-8">
              // Availability
            </span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-foreground leading-[0.85]">
              Secure <br /> your <span className="text-accent italic font-medium">Slot.</span>
            </h1>
          </div>

          {/* RIGHT COLUMN: THE ADAPTIVE CARD */}
          <div className="lg:col-span-8">
            <div 
              /* The 'key' ensures the iframe reloads colors immediately when theme switches */
              key={resolvedTheme} 
              className={`
                relative p-1 rounded-[2.5rem] transition-all duration-700
                ${isDark 
                  ? 'bg-zinc-900 border border-white/5 shadow-2xl' 
                  : 'bg-zinc-100 border border-black/5 shadow-xl'
                }
              `}
            >
              <div className="p-2 md:p-4">
                <Cal
                  calLink="ayubliaqat495"
                  style={{ 
                    width: "100%", 
                    /* minHeight allows the container to grow so you can scroll to the end options */
                    minHeight: "750px", 
                    background: "transparent" 
                  }}
                  config={{ 
                    layout: "month_view",
                    theme: isDark ? "dark" : "light" 
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