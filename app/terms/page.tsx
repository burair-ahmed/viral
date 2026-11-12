import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms and Conditions | Viral Marketing Solution",
  description:
    "Read the terms and conditions governing the use of the Viral Marketing Solution website and digital marketing services.",
};

export default function TermsPage() {
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
          <FileText size={22} />
        </div>
        <span className="text-xs font-bold uppercase tracking-widest text-[#39D7FF]">
          Legal & Compliance
        </span>
      </div>

      <h1 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
        Terms & Conditions
      </h1>
      <p className="text-xs sm:text-sm text-white/50 mb-10 pb-6 border-b border-white/10">
        Last Updated: {lastUpdated} &bull; Effective Date: January 1, 2024
      </p>

      <div className="space-y-8 text-sm sm:text-base text-white/80 leading-relaxed font-sans">
        <section className="space-y-3">
          <h2 className="font-display text-xl sm:text-2xl font-bold uppercase text-white tracking-wide">
            1. Agreement to Terms
          </h2>
          <p>
            By accessing or browsing the website of <strong>Viral Marketing Solution</strong> (accessible at{" "}
            <span className="text-white">theviralmarketing.pk</span>), you agree to be bound by these Terms and Conditions
            and all applicable local, national, and international laws. If you do not agree with any of these terms, you are
            prohibited from using or accessing this site.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl sm:text-2xl font-bold uppercase text-white tracking-wide">
            2. Intellectual Property Rights
          </h2>
          <p>
            All original articles, case studies, guides, visual assets, code snippets, branding, and layouts published on
            this website are the intellectual property of Viral Marketing Solution unless otherwise credited. You may not
            republish, sell, duplicate, or redistribute content from this website without explicit written permission.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl sm:text-2xl font-bold uppercase text-white tracking-wide">
            3. Agency Services & Client Agreements
          </h2>
          <p>
            Informational content provided in our blogs, case studies, and insights section is for general educational
            purposes. Formal digital marketing engagements (including Meta Ads management, UGC video production, and social
            media management) are governed by dedicated Master Services Agreements (MSAs) and Statements of Work (SOWs)
            executed directly between Viral Marketing Solution and the respective client.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl sm:text-2xl font-bold uppercase text-white tracking-wide">
            4. User Conduct & Acceptable Use
          </h2>
          <p>You agree not to use the website to:</p>
          <ul className="list-disc pl-6 space-y-2 text-white/70">
            <li>Engage in unauthorized data extraction, automated scraping, or denial-of-service attempts.</li>
            <li>Submit fraudulent, defamatory, or deceptive inquiries through our contact forms.</li>
            <li>Attempt to circumvent security mechanisms or interfere with third-party advertising modules.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl sm:text-2xl font-bold uppercase text-white tracking-wide">
            5. Disclaimer of Warranties
          </h2>
          <p>
            The materials and insights on Viral Marketing Solution&apos;s website are provided on an &ldquo;as is&rdquo;
            basis. Viral Marketing Solution makes no warranties, expressed or implied, and hereby disclaims and negates all
            other warranties including, without limitation, implied warranties of merchantability, fitness for a particular
            purpose, or non-infringement of intellectual property.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl sm:text-2xl font-bold uppercase text-white tracking-wide">
            6. Governing Law & Jurisdiction
          </h2>
          <p>
            Any claim related to Viral Marketing Solution&apos;s website or services shall be governed by the laws of the
            Islamic Republic of Pakistan without regard to its conflict of law provisions, with exclusive jurisdiction in
            the courts of Karachi, Sindh.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl sm:text-2xl font-bold uppercase text-white tracking-wide">
            7. Contact Information
          </h2>
          <p>If you have any questions about these Terms & Conditions, please contact us:</p>
          <div className="p-4 rounded-lg bg-bg-secondary/60 border border-white/10 space-y-1">
            <p className="font-bold text-white">Viral Marketing Solution</p>
            <p className="text-white/70">Plot C/10/C, Street 7, Badar Commercial Phase 5, DHA, Karachi, Sindh 75500, Pakistan</p>
            <p className="text-white/70">Email: info@viralmarketingsolution.com</p>
            <p className="text-white/70">Phone: +92 311 4941631</p>
          </div>
        </section>
      </div>
    </div>
  );
}
