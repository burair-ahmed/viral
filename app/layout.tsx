import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import { Inter, Space_Grotesk, Caveat } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import EzoicRouteListener from "@/components/ads/EzoicRouteListener";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/layout/CustomCursor";
import CircuitBackground from "@/components/layout/CircuitBackground";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import FloatingBackToTop from "@/components/ui/FloatingBackToTop";

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
        <Script
          src="https://the.gatekeeperconsent.com/cmp.min.js"
          strategy="beforeInteractive"
          data-cfasync="false"
        />
        <Script
          id="ezoic-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.ezstandalone = window.ezstandalone || {};
              window.ezstandalone.cmd = window.ezstandalone.cmd || [];
            `,
          }}
        />
        <Script
          src="https://www.ezojs.com/ezoic/sa.min.js"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MarketingAgency",
              name: "Viral Marketing Solution",
              alternateName: "Viral Marketing PK",
              url: "https://theviralmarketing.pk",
              logo: "https://theviralmarketing.pk/logo.png",
              description:
                "Leading digital marketing agency in Karachi, Pakistan specializing in viral campaigns, Meta ads, TikTok marketing, and high-retention short-form video production.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Plot C/10/C, Street 7, Badar Commercial Phase 5, DHA",
                addressLocality: "Karachi",
                addressRegion: "Sindh",
                postalCode: "75500",
                addressCountry: "PK",
              },
              telephone: "+923114941631",
              email: "info@viralmarketingsolution.com",
              sameAs: [
                "https://www.facebook.com/theviralmarketingpk/",
                "https://www.instagram.com/viralmarketingpk/",
              ],
              founder: [
                {
                  "@type": "Person",
                  name: "Ashraf Jabbar Qureshi",
                  jobTitle: "Chairman & Founder",
                },
                {
                  "@type": "Person",
                  name: "Dai Ali Daniyal",
                  jobTitle: "Chief Executive Officer",
                },
                {
                  "@type": "Person",
                  name: "Armash Ashraf",
                  jobTitle: "Chief Operating Officer",
                },
              ],
            }),
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${spaceGrotesk.variable} ${caveat.variable} font-sans antialiased text-[#FFFFFF] bg-[#06112F] overflow-x-hidden`}
      >
        <Suspense fallback={null}>
          <EzoicRouteListener />
        </Suspense>
        <SmoothScroll>
          {/* Custom animated canvas background */}
          <CircuitBackground />
          
          {/* Custom spring cursor element */}
          <CustomCursor />
          
          {/* Main sticky navigation */}
          <Navbar />
          
          {/* Page contents (wrapped inside template.tsx for transitions) */}
          <main className="min-h-screen pt-28 sm:pt-32 pb-0 flex flex-col justify-start">
            {children}
          </main>
          
          {/* Global Footer */}
          <Footer />

          {/* Floating Action Buttons */}
          <FloatingWhatsApp />
          <FloatingBackToTop />
        </SmoothScroll>
      </body>
    </html>
  );
}
