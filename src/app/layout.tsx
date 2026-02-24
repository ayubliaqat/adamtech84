import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AdamTech",
  description: "Modern digital solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
  className={`
    ${geistSans.variable} 
    ${geistMono.variable} 
    antialiased 
    flex 
    flex-col 
    min-h-screen
    bg-[radial-gradient(circle_at_center,_#50c7c7_0%,_#a8e6e6_40%,_#f5fdfd_75%,_#ffffff_100%)]
  `}
>
        <Header />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}