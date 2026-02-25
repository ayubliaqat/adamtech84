import AboutSection from "@/components/about/AboutSection"; // Assuming your Header is here
import { Metadata } from "next";

// SEO Metadata - Vital for a professional portfolio
export const metadata: Metadata = {
  title: "About — Adam Tech",
  description: "AI Engineer and Full-stack Developer specialized in building robust backends and AI-native products.",
  openGraph: {
    title: "About — Adam Tech",
    description: "Full-stack background with a focus on AI-native products.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen">
      {/* 2. Main Layout Container */}
      <div className="pt-4 md:pt-8 pb-8">
        <AboutSection />
      </div>
    </main>
  );
}