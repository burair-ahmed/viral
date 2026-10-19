"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, Sparkles, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

interface Platform {
  id: string;
  name: string;
  badge: string;
  stat: string;
  statLabel: string;
  tagline: string;
  tactics: string[];
  gradient: string;
}

const platforms: Platform[] = [
  {
    id: "tiktok",
    name: "TikTok",
    badge: "FYP Algorithm Dominance",
    stat: "7.2M+",
    statLabel: "Monthly FYP Impressions",
    tagline:
      "We reverse-engineer TikTok's recommendation engine with sub-second pacing and soundwave synchronization.",
    tactics: [
      "3-Second Scroll-Stop Hook Testing (5 variations per concept)",
      "Daily trending soundwave and audio meme alignment",
      "Native UGC format that bypasses ad-fatigue psychology",
      "Algorithmic retention curves targeting 85%+ completion rates",
    ],
    gradient: "from-cyan-500/20 via-blue-600/10 to-transparent",
  },
  {
    id: "reels",
    name: "Instagram Reels",
    badge: "Aesthetic Brand Virality",
    stat: "4.5M+",
    statLabel: "Reel Reach Across Pakistan & GCC",
    tagline:
      "Blending luxury visuals with viral storytelling so your brand looks premium while scaling exponentially.",
    tactics: [
      "Seamless infinite loop transitions for double-views",
      "Interactive DM automation triggers for viral lead capture",
      "High-share aesthetic carousels paired with short video",
      "Influencer co-authoring to tap established niche audiences",
    ],
    gradient: "from-pink-500/20 via-indigo-600/10 to-transparent",
  },
  {
    id: "youtube",
    name: "YouTube Shorts",
    badge: "Long-Tail Evergreen Reach",
    stat: "2.8M+",
    statLabel: "Shorts Views Delivered",
    tagline:
      "YouTube Shorts content that doesn't die in 24 hours. We build assets that continue accumulating views for months.",
    tactics: [
      "Curiosity gap pacing engineered for search & shelf discovery",
      "End-screen funnels driving viewers to full product demos",
      "Micro-documentary storytelling with documentary-level pacing",
      "High-converting pinned comment lead capture funnels",
    ],
    gradient: "from-red-500/20 via-blue-600/10 to-transparent",
  },
  {
    id: "meta-ads",
    name: "Meta Paid Scaling",
    badge: "High-ROAS Creative Testing",
    stat: "6.8x",
    statLabel: "Average Blended ROAS",
    tagline:
      "We don't gamble on one ad. We test 20+ viral creative angles every week to find breakout winners that scale profitably.",
    tactics: [
      "High-velocity creative iteration (hooks, angles, CTAs)",
      "Dynamic creative testing (DCT) matrix architecture",
      "Post-click landing page optimization for maximum conversion",
      "First-party retargeting funnels with zero wasted ad spend",
    ],
    gradient: "from-blue-600/20 via-cyan-500/10 to-transparent",
  },
];

export default function PlatformsSection() {
  const [activeTab, setActiveTab] = useState(platforms[0].id);
  const currentPlatform = platforms.find((p) => p.id === activeTab) || platforms[0];

  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 py-24 overflow-hidden">
      {/* Background radial accent glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-accent-cyan/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-cyan-dim/30 bg-bg-secondary/40 backdrop-blur-sm text-xs font-bold uppercase tracking-widest text-[#168BFF] mb-4">
          <Layers size={12} className="text-[#39D7FF]" />
          Platform Mastery
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
          Where we create <br />
          <span className="text-gradient-cyan drop-shadow-[0_0_20px_rgba(57,215,255,0.45)]">
            unfair organic advantages
          </span>
        </h2>
        <p className="text-sm sm:text-base text-white/60 leading-relaxed max-w-2xl mx-auto">
          Every platform has its own secret algorithmic pulse. We don&apos;t cross-post generic content; we engineer custom creatives natively built for each platform&apos;s audience behavior.
        </p>
      </div>

      {/* Platform Switcher Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-10">
        {platforms.map((platform) => {
          const isActive = activeTab === platform.id;
          return (
            <button
              key={platform.id}
              onClick={() => setActiveTab(platform.id)}
              className={`px-5 py-3 rounded-xl font-display text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                isActive
                  ? "bg-accent-cyan text-bg-primary shadow-[0_0_20px_rgba(22,139,255,0.4)] scale-105"
                  : "bg-bg-secondary/40 text-white/70 border border-accent-cyan-dim/20 hover:text-white hover:border-accent-cyan-dim/50"
              }`}
            >
              {platform.name}
            </button>
          );
        })}
      </div>

      {/* Active Platform Detail Showcase */}
      <div className="relative rounded-3xl border border-accent-cyan-dim/30 bg-bg-secondary/40 backdrop-blur-xl p-8 md:p-12 shadow-[0_0_40px_rgba(22,139,255,0.15)] overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${currentPlatform.gradient} transition-all duration-700 pointer-events-none`}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentPlatform.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#39D7FF] bg-accent-cyan-glow/20 px-3 py-1 rounded-full border border-accent-cyan-dim/30 mb-4 inline-block">
                {currentPlatform.badge}
              </span>

              <h3 className="font-display text-2xl sm:text-4xl font-black uppercase tracking-tight text-white mb-4">
                Dominate {currentPlatform.name}
              </h3>

              <p className="text-sm sm:text-base text-white/75 leading-relaxed mb-8">
                {currentPlatform.tagline}
              </p>

              {/* Tactics Checklist */}
              <div className="flex flex-col gap-3.5 mb-8 w-full">
                {currentPlatform.tactics.map((tactic, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-[#39D7FF] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-white/90 font-medium leading-relaxed">
                      {tactic}
                    </span>
                  </div>
                ))}
              </div>

              <Button href="/contact" variant="glow" size="md">
                Grow on {currentPlatform.name}
              </Button>
            </div>

            {/* Right Metric Callout */}
            <div className="lg:col-span-5 flex justify-center w-full">
              <div className="w-full max-w-sm rounded-2xl border border-accent-cyan-dim/30 bg-bg-primary/80 backdrop-blur-md p-8 flex flex-col items-center text-center shadow-glow/10">
                <span className="text-xs font-bold uppercase tracking-widest text-white/50 mb-2">
                  {currentPlatform.statLabel}
                </span>
                <span className="font-display text-5xl sm:text-6xl font-black text-accent-cyan drop-shadow-[0_0_20px_rgba(57,215,255,0.4)] mb-4">
                  {currentPlatform.stat}
                </span>
                <p className="text-xs text-white/60 leading-relaxed mb-6">
                  Backed by real performance data from our ongoing client roster across Pakistan and global markets.
                </p>
                <div className="w-full pt-4 border-t border-accent-cyan-dim/15 flex items-center justify-between text-xs text-accent-cyan font-bold uppercase tracking-wider">
                  <span>100% Organic Purity</span>
                  <span>Zero Fake Bots</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
