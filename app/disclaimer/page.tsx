import type { Metadata } from "next";
import Link from "next/link";
import { AlertCircle, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Disclaimer | Viral Marketing Solution",
  description:
    "Read our website disclaimer regarding marketing advice, earnings, campaign metrics, and advertising disclosures.",
};

export default function DisclaimerPage() {
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
          <AlertCircle size={22} />
        </div>
        <span className="text-xs font-bold uppercase tracking-widest text-[#39D7FF]">
          Legal & Compliance
        </span>
      </div>

      <h1 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
        Disclaimer
      </h1>
      <p className="text-xs sm:text-sm text-white/50 mb-10 pb-6 border-b border-white/10">
        Last Updated: {lastUpdated}
      </p>

      <div className="space-y-8 text-sm sm:text-base text-white/80 leading-relaxed font-sans">
        <section className="space-y-3">
          <h2 className="font-display text-xl sm:text-2xl font-bold uppercase text-white tracking-wide">
            1. General Informational & Educational Disclaimer
          </h2>
          <p>
            The content, strategies, case studies, formulas, and tutorials published on{" "}
            <strong className="text-white">theviralmarketing.pk</strong> are provided solely for general educational,
            informational, and analytical purposes. Nothing contained on this site constitutes binding financial,
            investment, or legal advice.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl sm:text-2xl font-bold uppercase text-white tracking-wide">
            2. Marketing Results & Earnings Disclaimer
          </h2>
          <p>
            Any case studies, statistics (such as views generated, ROAS multipliers, or cost per acquisition drops), and
            metrics shared on this website reflect historical outcomes achieved for specific clients under defined market
            conditions, budgets, and creative parameters.
          </p>
          <p>
            Past performance is not an absolute guarantee of future outcomes. Digital marketing results depend on diverse
            external factors, including platform algorithm updates (Meta, TikTok, Google), product market fit, offer
            quality, audience resonance, and operational execution. We do not guarantee that applying similar strategies will
            yield identical results for every brand.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl sm:text-2xl font-bold uppercase text-white tracking-wide">
            3. Advertising & Third-Party Endorsements
          </h2>
          <p>
            This website may display advertisements served automatically through networks such as Google AdSense. The
            appearance of an advertisement on our site does not represent an endorsement, sponsorship, or recommendation of
            the advertised product or service by Viral Marketing Solution. We do not control or verify the claims made by
            third-party advertisers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl sm:text-2xl font-bold uppercase text-white tracking-wide">
            4. External Links Disclaimer
          </h2>
          <p>
            Our articles may contain links to external websites that are not provided or maintained by or in any way
            affiliated with Viral Marketing Solution. Please note that we do not guarantee the accuracy, relevance,
            timeliness, or completeness of any information on these external sites.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl sm:text-2xl font-bold uppercase text-white tracking-wide">
            5. Contact Us
          </h2>
          <p>If you have any questions or require further clarification regarding this disclaimer:</p>
          <div className="p-4 rounded-lg bg-bg-secondary/60 border border-white/10 space-y-1">
            <p className="font-bold text-white">Viral Marketing Solution</p>
            <p className="text-white/70">Plot C/10/C, Street 7, Badar Commercial Phase 5, DHA, Karachi, Sindh 75500, Pakistan</p>
            <p className="text-white/70">Email: info@viralmarketingsolution.com</p>
          </div>
        </section>
      </div>
    </div>
  );
}

