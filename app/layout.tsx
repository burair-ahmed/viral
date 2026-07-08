import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, Caveat } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/layout/CustomCursor";
import CircuitBackground from "@/components/layout/CircuitBackground";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Viral Marketing | Let's Make Your Brand Viral",
  description:
    "Viral Marketing is a premium, high-animated digital marketing agency that engineers hyper-viral campaigns, organic growth loops, and culture-shaping content systems for brands.",
  keywords: ["Viral Marketing", "Digital Agency", "Growth Hacking", "Viral Campaigns", "Marketing Agency"],
  authors: [{ name: "Viral Marketing Team" }],
  openGraph: {
    title: "Viral Marketing | Let's Make Your Brand Viral",
    description:
      "A premium, conversion-focused digital marketing agency. We build viral distribution engines that scale businesses organically.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Viral Marketing | Let's Make Your Brand Viral",
    description: "Digital growth hacking and viral systems for premium brands.",
  },
};

export const viewport: Viewport = {
  themeColor: "#071822",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth selection:bg-accent-cyan/30 selection:text-accent-cyan">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${caveat.variable} font-sans antialiased text-[#F5F9FA] bg-[#071822] overflow-x-hidden`}
      >
        <SmoothScroll>
          {/* Custom animated canvas background */}
          <CircuitBackground />
          
          {/* Custom spring cursor element */}
          <CustomCursor />
          
          {/* Main sticky navigation */}
          <Navbar />
          
          {/* Page contents (wrapped inside template.tsx for transitions) */}
          <main className="min-h-screen pt-24 pb-0 flex flex-col justify-start">
            {children}
          </main>
          
          {/* Global Footer */}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
