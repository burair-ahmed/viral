import type { Metadata } from "next";
import Link from "next/link";
import { Cookie, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Cookie Policy | Viral Marketing Solution",
  description:
    "Information on how cookies are used on the Viral Marketing Solution website, including Google AdSense cookies and how to manage them.",
};

export default function CookiePolicyPage() {
  const lastUpdated = "November 12, 2026";

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-12 md:py-16">
      {/* Breadcrumb / Back button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#39D7FF] uppercase mb-8 hover:text-white transition-colors"
      >
        <ArrowLeft size={14} /> Back to Home
      </Link>

      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-accent-cyan-glow/15 border border-accent-cyan-dim/30 flex items-center justify-center text-[#39D7FF]">
          <Cookie size={22} />
        </div>
        <span className="text-xs font-bold uppercase tracking-widest text-[#39D7FF]">
          Legal & Compliance
        </span>
      </div>

      <h1 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
        Cookie Policy
      </h1>
      <p className="text-xs sm:text-sm text-white/50 mb-10 pb-6 border-b border-white/10">
        Last Updated: {lastUpdated}
      </p>

      <div className="space-y-8 text-sm sm:text-base text-white/80 leading-relaxed font-sans">
        <section className="space-y-3">
          <h2 className="font-display text-xl sm:text-2xl font-bold uppercase text-white tracking-wide">
            1. What Are Cookies?
          </h2>
          <p>
            Cookies are small text files that are stored on your computer or mobile device when you visit a website. They
            are widely used to make websites work properly, improve user browsing experience, analyze site usage, and
            deliver personalized advertisements.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl sm:text-2xl font-bold uppercase text-white tracking-wide">
            2. Types of Cookies We Use
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <div className="p-4 rounded-xl border border-white/10 bg-bg-secondary/40">
              <h3 className="font-bold text-white mb-1">Essential Cookies</h3>
              <p className="text-xs text-white/70">
                Required for core website functionality, secure navigation, and remembering your session preferences.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-white/10 bg-bg-secondary/40">
              <h3 className="font-bold text-white mb-1">Analytical & Performance</h3>
              <p className="text-xs text-white/70">
                Help us understand how visitors interact with our content, which articles are popular, and where bounce
                rates occur.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-accent-cyan-dim/30 bg-bg-secondary/40 md:col-span-2">
              <h3 className="font-bold text-[#39D7FF] mb-1">Advertising & Google AdSense Cookies</h3>
              <p className="text-xs text-white/70">
                Used by Google and authorized third-party ad networks to serve relevant advertisements based on your prior
                visits to our website or other sites on the web. These cookies prevent the same ad from showing continuously
                and tailor advertisements to user interests.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl sm:text-2xl font-bold uppercase text-white tracking-wide">
            3. How to Manage and Disable Cookies
          </h2>
          <p>
            Most web browsers allow you to control cookie preferences through their settings. You can configure your
            browser to reject all cookies or notify you when a cookie is being sent:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-white/70 text-xs sm:text-sm">
            <li>Chrome: Settings &gt; Privacy and Security &gt; Cookies and other site data</li>
            <li>Firefox: Options &gt; Privacy &amp; Security &gt; Cookies and Site Data</li>
            <li>Safari: Preferences &gt; Privacy &gt; Manage Website Data</li>
            <li>Edge: Settings &gt; Site permissions &gt; Cookies and site data</li>
          </ul>
          <p className="text-xs text-white/60">
            Please note that disabling cookies may affect the visual display and functionality of certain pages.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl sm:text-2xl font-bold uppercase text-white tracking-wide">
            4. Inquiries
          </h2>
          <p>If you have any questions about our use of cookies, contact us at:</p>
          <p className="font-semibold text-white">
            Email:{" "}
            <a href="mailto:info@viralmarketingsolution.com" className="text-[#39D7FF] underline">
              info@viralmarketingsolution.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}

