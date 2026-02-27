import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap', // Ensures text remains visible during font load
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

// --- DEEP SEO AUDIT: adamtech84.com ---
export const metadata: Metadata = {
  title: {
    default: "AdamTech | Engineering the Next Decade",
    template: "%s | AdamTech"
  },
  description: "Advanced software architecture, AI pipelines, and professional tech training tailored for the German ecosystem. High-stakes engineering mentorship.",
  keywords: ["Software Engineering Berlin", "AI Data Pipelines", "Tech Mentorship Germany", "Cloud Infrastructure"],
  authors: [{ name: "AdamTech Team" }],
  creator: "AdamTech",
  metadataBase: new URL("https://adamtech84.com"),
  openGraph: {
    type: "website",
    locale: "en_DE",
    url: "https://adamtech84.com",
    title: "AdamTech | Engineering Excellence",
    description: "Architecting resilient digital systems and high-impact tech careers.",
    siteName: "AdamTech",
  },
  twitter: {
    card: "summary_large_image",
    title: "AdamTech | Engineering the Next Decade",
    description: "Bridging the gap between theory and industry reality.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          font-sans
          antialiased 
          bg-background
          text-foreground
          selection:bg-accent/20
          selection:text-accent
          flex 
          flex-col 
          min-h-screen
          transition-colors duration-500
        `}
      >
        {/* HEADER: Z-index check to ensure it stays above Hero */}
        <Header />
        
        {/* MAIN: Ensure content doesn't get hidden behind fixed headers */}
        <main className="flex-1 relative">
          {children}
        </main>
        
        {/* FOOTER: Anchored to bottom */}
        <Footer />
      </body>
    </html>
  );
}