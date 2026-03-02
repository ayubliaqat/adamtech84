import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
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

  // --- NEW FAVICON: TEXT-BASED "A" ---
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><circle cx=%2250%22 cy=%2250%22 r=%2250%22 fill=%22%230891b2%22/><text y=%22.7em%22 x=%2250%22 text-anchor=%22middle%22 font-size=%2260%22 font-weight=%22bold%22 fill=%22white%22 font-family=%22sans-serif%22>A</text></svg>',
  },

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
        <Header />
        <main className="flex-1 relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}