import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Lock, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Viral Marketing Solution",
  description:
    "Learn how Viral Marketing Solution collects, uses, and protects your personal data, including our use of Google AdSense and third-party advertising cookies.",
};

export default function PrivacyPolicyPage() {
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
          <ShieldCheck size={22} />
        </div>
        <span className="text-xs font-bold uppercase tracking-widest text-[#39D7FF]">
          Legal & Compliance
        </span>
      </div>

      <h1 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
        Privacy Policy
      </h1>
      <p className="text-xs sm:text-sm text-white/50 mb-10 pb-6 border-b border-white/10">
        Last Updated: {lastUpdated} &bull; Effective Date: January 1, 2024
      </p>

      <div className="space-y-8 text-sm sm:text-base text-white/80 leading-relaxed font-sans">
        <section className="space-y-3">
          <h2 className="font-display text-xl sm:text-2xl font-bold uppercase text-white tracking-wide">
            1. Introduction & Overview
          </h2>
          <p>
            Viral Marketing Solution (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) operates the website{" "}
            <strong className="text-white">theviralmarketing.pk</strong> (and associated subdomains). We are committed to
            protecting your personal information and respecting your privacy rights.
          </p>
          <p>
            This Privacy Policy explains what data we collect from visitors, clients, and readers, how we utilize that
            information, how cookies and third-party advertising tools operate on our site, and the legal choices you have
            regarding your information.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl sm:text-2xl font-bold uppercase text-white tracking-wide">
            2. Information We Collect
          </h2>
          <p>We may collect information in the following ways:</p>
          <ul className="list-disc pl-6 space-y-2 text-white/70">
            <li>
              <strong className="text-white">Information You Provide Directly:</strong> When you fill out our contact
              form, request a marketing audit, subscribe to our insights newsletter, or contact us via WhatsApp or email,
              you may provide your full name, business email address, company name, phone number, and project budget.
            </li>
            <li>
              <strong className="text-white">Automatically Collected Technical Data:</strong> When you browse our site,
              our hosting infrastructure and analytics providers automatically record your IP address, browser type, device
              operating system, referring URLs, pages visited, and time spent on individual articles.
            </li>
            <li>
              <strong className="text-white">Cookies and Web Beacons:</strong> Small text files placed on your browser to
              recognize your preferences and support functional, analytical, and advertising tools.
            </li>
          </ul>
        </section>

        {/* IMPORTANT SECTION FOR GOOGLE ADSENSE COMPLIANCE */}
        <section className="space-y-4 p-6 rounded-xl border border-accent-cyan-dim/30 bg-bg-secondary/40 backdrop-blur-sm">
          <div className="flex items-center gap-2 text-[#39D7FF]">
            <Lock size={18} />
            <h2 className="font-display text-lg sm:text-xl font-bold uppercase tracking-wide">
              3. Google AdSense & Third-Party Advertising Cookies
            </h2>
          </div>
          <p>
            Our website uses <strong>Google AdSense</strong> to display relevant advertisements to our visitors. Google is
            a third-party vendor that uses cookies to serve ads on our site.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-white/80">
            <li>
              Google&apos;s use of advertising cookies (including the DoubleClick DART cookie) enables it and its partners
              to serve ads to our users based on their visit to our site and/or other websites on the Internet.
            </li>
            <li>
              Users may opt out of personalized advertising by visiting{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#39D7FF] underline hover:text-white"
              >
                Google Ads Settings
              </a>
              .
            </li>
            <li>
              Alternatively, you can opt out of a third-party vendor&apos;s use of cookies for personalized advertising by
              visiting{" "}
              <a
                href="https://www.aboutads.info/choices/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#39D7FF] underline hover:text-white"
              >
                www.aboutads.info
              </a>
              .
            </li>
          </ul>
          <p className="text-xs text-white/60">
            Third-party ad servers or ad networks use technology in their respective advertisements and links that appear on
            our website. They automatically receive your IP address when this occurs. We have no access to or control over
            these cookies that are used by third-party advertisers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl sm:text-2xl font-bold uppercase text-white tracking-wide">
            4. How We Use Your Information
          </h2>
          <p>We process collected data for lawful business and editorial purposes, including:</p>
          <ul className="list-disc pl-6 space-y-2 text-white/70">
            <li>Responding to business inquiries and preparing customized growth proposals.</li>
            <li>Operating, optimizing, and securing our website and digital resources.</li>
            <li>Delivering original, high-value editorial articles, guides, and tutorials.</li>
            <li>Measuring reader engagement and technical website performance.</li>
            <li>Complying with applicable legal, accounting, and regulatory obligations in Pakistan.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl sm:text-2xl font-bold uppercase text-white tracking-wide">
            5. Data Protection & Security
          </h2>
          <p>
            We implement industry-standard technical and operational security measures to safeguard your personal data from
            unauthorized access, alteration, disclosure, or destruction. We do not sell, rent, or trade your personal
            contact information to external third parties for marketing purposes.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl sm:text-2xl font-bold uppercase text-white tracking-wide">
            6. Children&apos;s Information
          </h2>
          <p>
            Another priority is adding protection for children while using the internet. We encourage parents and guardians
            to observe, participate in, and/or monitor and guide their online activity. Viral Marketing Solution does not
            knowingly collect any Personal Identifiable Information from children under the age of 13.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl sm:text-2xl font-bold uppercase text-white tracking-wide">
            7. Your Privacy Rights & Contact Information
          </h2>
          <p>
            Depending on your jurisdiction, you may have the right to request access to the personal data we hold about
            you, request corrections, or request deletion.
          </p>
          <div className="p-4 rounded-lg bg-bg-secondary/60 border border-white/10 space-y-1">
            <p className="font-bold text-white">Viral Marketing Solution</p>
            <p className="text-white/70">Plot C/10/C, Street 7, Badar Commercial Phase 5, DHA, Karachi, Sindh 75500, Pakistan</p>
            <p className="text-white/70">
              Email:{" "}
              <a href="mailto:info@viralmarketingsolution.com" className="text-[#39D7FF] underline">
                info@viralmarketingsolution.com
              </a>
            </p>
            <p className="text-white/70">Phone: +92 311 4941631</p>
          </div>
        </section>
      </div>
    </div>
  );
}
