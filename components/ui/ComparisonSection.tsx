"use client";

import { motion } from "framer-motion";
import { Check, X, Zap, ShieldCheck, Flame, Rocket, BarChart3, Users } from "lucide-react";
import Button from "@/components/ui/Button";

export default function ComparisonSection() {
  const comparisonItems = [
    {
      feature: "Content Turnaround Time",
      traditional: "2 - 3 weeks of bureaucratic approval layers",
      viral: "< 48 hours to capitalize on live trending audio & memes",
    },
    {
      feature: "Traffic Strategy",
      traditional: "Overpaying for paid ads that stop working when budget runs out",
      viral: "Engineered organic reach that cascades and compounds for free",
    },
    {
      feature: "Hook Engineering",
      traditional: "Boring corporate intros with high 3-second dropoff",
      viral: "Proprietary 3-second scroll-stopping psychological hooks",
    },
    {
      feature: "Creative Talent",
      traditional: "Outsourced generic stock footage and stiff actors",
      viral: "Vetted network of 150+ authentic creators & top video editors",
    },
    {
      feature: "Success Metric",
      traditional: "Vanity impressions and bloated agency hours",
      viral: "Bottom-line revenue, conversions, and viral shares",
    },
  ];

  const pillars = [
    {
      icon: <Zap className="text-[#39D7FF]" size={24} />,
      title: "Real-Time Trendjacking",
      desc: "Social media changes hourly. Our proprietary monitoring spots breakout sounds and formats before your competitors even wake up.",
    },
    {
      icon: <BarChart3 className="text-[#39D7FF]" size={24} />,
      title: "Retention-Engineered Edits",
      desc: "Every cut, zoom, text caption, and sound effect is timed mathematically to keep viewers hooked past the 80% completion mark.",
    },
    {
      icon: <Users className="text-[#39D7FF]" size={24} />,
      title: "150+ Creator Network",
      desc: "Access our exclusive roster of niche influencers, UGC creators, and on-camera talent across Pakistan, UAE, and the UK.",
    },
    {
      icon: <Rocket className="text-[#39D7FF]" size={24} />,
      title: "Compounding Growth Funnel",
      desc: "We don't just generate views. We funnel attention into followers, email leads, and paying customers who keep re-ordering.",
    },
  ];

  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-accent-cyan/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-cyan-dim/30 bg-bg-secondary/40 backdrop-blur-sm text-xs font-bold uppercase tracking-widest text-[#168BFF] mb-4">
          <Flame size={12} className="text-[#39D7FF]" />
          The Viral Advantage
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
          Why traditional marketing <br />
          <span className="text-gradient-cyan drop-shadow-[0_0_20px_rgba(57,215,255,0.45)]">
            is failing your brand
          </span>
        </h2>
        <p className="text-sm sm:text-base text-white/60 leading-relaxed max-w-2xl mx-auto">
          Audiences skip ads. They ignore polished corporate videos. We build content that blends seamlessly into culture — driving millions of organic views without paying for every single click.
        </p>
      </div>

      {/* Comparison Table / Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
        {/* Traditional Agency Card */}
        <div className="rounded-2xl border border-red-500/20 bg-bg-secondary/20 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-red-500/20 mb-6">
              <span className="font-display text-lg sm:text-xl font-bold uppercase tracking-wider text-red-400">
                Traditional Agencies
              </span>
              <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
                Outdated & Slow
              </span>
            </div>

            <div className="flex flex-col gap-5">
              {comparisonItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/15 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0 mt-0.5">
                    <X size={14} />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-white/40 block mb-0.5">
                      {item.feature}
                    </span>
                    <span className="text-xs sm:text-sm text-white/70 leading-relaxed">
                      {item.traditional}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Viral Marketing Card (Winning) */}
        <div className="rounded-2xl border-2 border-accent-cyan bg-bg-secondary/50 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between shadow-[0_0_30px_rgba(22,139,255,0.25)] relative overflow-hidden">
          {/* Neon Corner Accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-cyan/20 rounded-full blur-2xl pointer-events-none" />

          <div>
            <div className="flex items-center justify-between pb-4 border-b border-accent-cyan-dim/30 mb-6 relative z-10">
              <span className="font-display text-lg sm:text-xl font-black uppercase tracking-wider text-[#39D7FF]">
                Viral Marketing Solution
              </span>
              <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-accent-cyan-glow/20 text-[#39D7FF] border border-[#39D7FF]/40 shadow-glow/20">
                The New Standard
              </span>
            </div>

            <div className="flex flex-col gap-5 relative z-10">
              {comparisonItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent-cyan-glow/25 border border-[#39D7FF] flex items-center justify-center text-[#39D7FF] shrink-0 mt-0.5 shadow-glow/15">
                    <Check size={14} />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-accent-cyan block mb-0.5">
                      {item.feature}
                    </span>
                    <span className="text-xs sm:text-sm text-white font-medium leading-relaxed">
                      {item.viral}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4 Core Pillars Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((pillar, index) => (
          <div
            key={index}
            className="rounded-2xl border border-accent-cyan-dim/20 bg-bg-secondary/30 backdrop-blur-md p-6 flex flex-col justify-between hover:border-[#39D7FF]/50 hover:shadow-[0_0_25px_rgba(57,215,255,0.15)] transition-all duration-300"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-accent-cyan-glow/15 border border-accent-cyan-dim/30 flex items-center justify-center mb-4 shadow-glow/10">
                {pillar.icon}
              </div>
              <h3 className="font-display text-lg font-bold tracking-wide text-white mb-2 uppercase">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-sans">
                {pillar.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
