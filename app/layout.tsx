import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, Caveat } from "next/font/google";
import "./globals.css";
import Script from "next/script";
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
  title: "Viral Marketing | Social Media & Digital Marketing Agency in Pakistan",
  description:
    "Viral Marketing is a leading digital marketing agency in Karachi, Pakistan. We help businesses grow online through social media marketing, Meta ads, content creation, video editing, and website development.",
  keywords: [
    "digital marketing agency Pakistan",
    "social media marketing Pakistan",
    "viral marketing agency Karachi",
    "Meta ads Pakistan",
    "content creation agency",
    "video editing services Pakistan",
    "website development Karachi",
    "online marketing Pakistan",
    "brand growth Pakistan",
    "UGC ads Pakistan",
  ],
  authors: [{ name: "Viral Marketing Team" }],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
  other: {
    "google-adsense-account": "ca-pub-9834908799284038",
  },
  openGraph: {
    title: "Viral Marketing | Social Media & Digital Marketing Agency in Pakistan",
    description:
      "We help businesses grow online through social media marketing, paid ads, content creation, and professional video editing. Based in Karachi, serving clients worldwide.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Viral Marketing | Digital Marketing Agency Pakistan",
    description: "Social media marketing, Meta ads, content creation, and more. Helping brands grow online across Pakistan and beyond.",
  },
};

export const viewport: Viewport = {
  themeColor: "#06112F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth selection:bg-accent-cyan/30 selection:text-accent-cyan" suppressHydrationWarning>
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9834908799284038"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${caveat.variable} font-sans antialiased text-[#FFFFFF] bg-[#06112F] overflow-x-hidden`}
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
