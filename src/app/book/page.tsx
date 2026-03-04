"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function BookPage() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [showCalendar, setShowCalendar] = useState(false);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: isDark ? "dark" : "light",
        layout: "month_view",
        hideEventTypeDetails: true,
        styles: {
          branding: { brandColor: "#06b6d4" },
          body: { background: "transparent" },
        },
      });
    })();
  }, [isDark]);

  return (
    <main className="min-h-screen bg-background px-6 py-24 flex flex-col items-center">
      <div className="max-w-4xl w-full flex flex-col lg:flex-row gap-12 items-start">
        
        {/* LEFT SIDE */}
        <div className="lg:w-[40%] space-y-4">
          <div className="inline-flex items-center gap-2 px-2 py-1 rounded-md bg-accent/10 border border-accent/20">
            <span className="w-1 h-1 rounded-full bg-accent animate-pulse" />
            <span className="text-[9px] font-bold uppercase tracking-widest text-accent">
              Booking Live
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-snug">
            Secure your{" "}
            <span className="text-accent italic font-medium">Slot.</span>
          </h1>

          <p className="text-muted-foreground text-sm max-w-[250px]">
            Choose a date and time for a quick 15-minute session.
          </p>

          {/* VIEW BUTTON */}
          {!showCalendar && (
            <button
              onClick={() => setShowCalendar(true)}
              className={`mt-4 px-6 py-4 rounded-full text-sm font-semibold transition-all shadow-md
              ${
                isDark
                  ? "bg-white text-black hover:bg-zinc-200"
                  : "bg-zinc-900 text-white hover:bg-zinc-800"
              }`}
            >
              View Availability
            </button>
          )}
        </div>

        {/* RIGHT SIDE - CONDITIONAL CALENDAR */}
        <div className="lg:w-[60%] w-full">
          {showCalendar && (
            <div
              className={`rounded-2xl border border-border/50 shadow-lg overflow-hidden transition-all duration-500 ${
                isDark ? "bg-[#0A0A0A]" : "bg-white"
              }`}
            >
              <div className="h-1.5 w-full bg-gradient-to-r from-accent/50 to-accent/10" />

              <div className="p-3 md:p-6">
                <Cal
                  calLink="adamtech84/consultancy"
                  style={{
                    width: "100%",
                    height: "auto",
                    minHeight: "550px",
                  }}
                  config={{
                    layout: "month_view",
                    theme: isDark ? "dark" : "light",
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <p className="text-center mt-12 text-[8px] opacity-30 uppercase tracking-[0.4em] font-medium">
        Secure • Encrypted Booking
      </p>
    </main>
  );
}