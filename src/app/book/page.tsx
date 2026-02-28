"use client";
import { getCalApi } from "@calcom/embed-react";
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
        styles: { branding: { brandColor: "#06b6d4" } },
        hideEventTypeDetails: false,
      });
    })();
  }, [isDark]);

  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div className="space-y-6">
          <span className="text-accent font-bold tracking-widest text-xs uppercase opacity-70">
            // Direct Booking
          </span>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-[0.9]">
            Secure <br /> your <span className="text-accent italic font-medium">Slot.</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Pick a time that works for you. No back-and-forth emails.
          </p>
          
          {/* THE TRIGGER BUTTON */}
          <button
            data-cal-link="ayubliaqat495"
            data-cal-config='{"layout":"month_view"}'
            className={`
              px-8 py-4 rounded-full font-bold text-lg transition-all
              ${isDark 
                ? 'bg-white text-black hover:bg-zinc-200' 
                : 'bg-zinc-900 text-white hover:bg-zinc-800'}
            `}
          >
            View Availability
          </button>
        </div>

        <div className="hidden lg:block mt-20">
           {/* You can put an image or abstract graphic here since the Cal is now a popup */}
           <div className="aspect-square bg-accent/10 rounded-3xl border border-accent/20 flex items-center justify-center">
              <span className="text-accent text-6xl">🗓️</span>
           </div>
        </div>
      </div>
    </main>
  );
}