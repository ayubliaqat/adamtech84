"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { sendBookingAction } from "@/app/actions/booking";

// UPDATE THIS LINE: Remove the prop, just use ()
export default function BookingForm() {
  // This hook now works perfectly because this is a Client Component
  const { resolvedTheme } = useTheme(); 
  const isDark = resolvedTheme === "dark";
  
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(formData: FormData) {
    setPending(true);
    const result = await sendBookingAction(formData);
    setPending(false);
    
    if (result.success) {
      setMessage("Request sent! Rasheed will contact you shortly.");
    } else {
      setMessage("Error sending request. Please try again.");
    }
  }

  return (
    <form action={handleSubmit} className="space-y-6 mt-8">
      <div className="space-y-4">
        <input 
          name="email" type="email" placeholder="Your professional email" required 
          className="w-full bg-transparent border-b border-muted-foreground/30 py-3 outline-none focus:border-cyan-600 transition-colors text-foreground"
        />
        <input 
          name="date" type="datetime-local" required 
          className="w-full bg-transparent border-b border-muted-foreground/30 py-3 outline-none focus:border-cyan-600 transition-colors text-foreground"
        />
        <textarea 
          name="message" placeholder="Briefly describe your project..." required 
          className="w-full bg-transparent border-b border-muted-foreground/30 py-3 outline-none focus:border-cyan-600 transition-colors h-24 resize-none text-foreground"
        />
      </div>
      
      <button
        type="submit"
        disabled={pending}
        className={`
          px-10 py-4 rounded-full font-bold text-lg transition-all w-full md:w-auto
          ${isDark 
            ? 'bg-white text-black hover:bg-zinc-200' 
            : 'bg-zinc-900 text-white hover:bg-zinc-800'}
          ${pending ? 'opacity-50 cursor-not-allowed' : 'active:scale-95'}
        `}
      >
        {pending ? "Processing..." : "Request Availability"}
      </button>

      {message && (
        <p className={`text-sm font-medium mt-4 ${message.includes("Error") ? "text-red-500" : "text-cyan-500"}`}>
          {message}
        </p>
      )}
    </form>
  );
}