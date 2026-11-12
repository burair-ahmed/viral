"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Flame,
  Eye,
  Share2,
  Sparkles,
  ArrowUpRight,
  Play,
} from "lucide-react";
import Link from "next/link";

interface SlideData {
  id: string;
  brand: string;
  category: string;
  title: string;
  description: string;
  platform: string;
  metrics: {
    views: string;
    growth: string;
    shares: string;
    roi: string;
  };
  highlight: string;
  badge: string;
  gradient: string;
  caseStudyUrl: string;
}

const slides: SlideData[] = [
  {
    id: "s1",
    brand: "UrbanPulse Apparel",
    category: "Streetwear & Fashion",
    title: "Viral Winter Drop Sensation",
    description:
      "Engineered a 3-second hook TikTok campaign that exploded into 2.4M organic views, selling out their limited winter drop in under 72 hours.",
    platform: "TikTok & Instagram Reels",
    metrics: {
      views: "2.4M+",
      growth: "+320%",
      shares: "48.2K",
      roi: "9.4x",
    },
    highlight: "Sold Out in 72 Hours",
    badge: "🔥 Trending #1 in Fashion",
    gradient: "from-cyan-500/20 via-blue-600/10 to-transparent",
    caseStudyUrl: "/blog/urbanpulse-apparel-case-study-organic-views-growth",
  },
  {
    id: "s2",
    brand: "Lumina Glaze Serum",
    category: "Skincare & Beauty",
    title: "Organic UGC Skincare Phenomenon",
    description:
      "Trained 15 micro-creators using our proprietary hook formula. The authentic reaction videos generated 4.8M impressions without paid spend.",
    platform: "TikTok UGC & Meta Ads",
    metrics: {
      views: "4.8M",
      growth: "+410%",
      shares: "62.1K",
      roi: "11.2x",
    },
    highlight: "+410% Online Orders",
    badge: "✨ Viral Hook Masterclass",
    gradient: "from-sky-500/20 via-indigo-600/10 to-transparent",
    caseStudyUrl: "/blog/meta-ads-vs-organic-ugc-cost-breakdown-ecommerce",
  },
  {
    id: "s3",
    brand: "SwiftEats Pakistan",
    category: "Food Delivery App",
    title: "Late-Night Cravings Blitz",
    description:
      "Transformed late-night food memes into high-converting video skits. Drove 12,400 app installs with an acquisition cost 45% below industry average.",
    platform: "Reels & YouTube Shorts",
    metrics: {
      views: "1.9M",
      growth: "12.4K",
      shares: "34.5K",
      roi: "7.8x",
    },
    highlight: "12.4K App Installs",
    badge: "⚡ 45% Lower Acquisition Cost",
    gradient: "from-blue-600/20 via-teal-500/10 to-transparent",
    caseStudyUrl: "/blog/how-to-structure-3-second-hook-tiktok-reels-pakistan",
  },
  {
    id: "s4",
    brand: "Nexus Wireless Audio",
    category: "Consumer Tech",
    title: "Noise-Cancelling Street Challenge",
    description:
      "Produced candid noise-cancellation street tests in busy Karachi markets. Captured raw reactions that drove 42,000 direct product page visits.",
    platform: "YouTube Shorts & TikTok",
    metrics: {
      views: "3.2M",
      growth: "+280%",
      shares: "51.8K",
      roi: "10.5x",
    },
    highlight: "42,000 Direct Clicks",
    badge: "🎯 89% Audience Retention",
    gradient: "from-teal-500/20 via-cyan-600/10 to-transparent",
    caseStudyUrl: "/blog/short-form-video-retention-audio-mastering-architecture",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance slides every 5.5s
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, current]);

  const slide = slides[current];

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div
      className="w-full max-w-5xl mx-auto mt-12 sm:mt-16 px-2 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Outer Card with Cyber Glow */}
      <div className="relative rounded-2xl md:rounded-3xl border border-accent-cyan-dim/30 bg-bg-secondary/40 backdrop-blur-xl p-6 sm:p-8 md:p-10 shadow-[0_0_50px_rgba(22,139,255,0.15)] overflow-hidden">
        {/* Ambient background gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} transition-all duration-700 pointer-events-none`}
        />

        {/* Top Header: Badge & Controls */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 mb-6 sm:mb-8 border-b border-accent-cyan-dim/15 pb-4">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-accent-cyan animate-ping" />
            <span className="text-xs font-bold tracking-widest uppercase text-accent-cyan flex items-center gap-1.5">
              <Flame size={14} className="text-[#39D7FF]" />
              Live Viral Campaign Showcase
            </span>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              aria-label="Previous Slide"
              className="w-9 h-9 rounded-lg bg-bg-primary/60 border border-accent-cyan-dim/25 flex items-center justify-center text-white/70 hover:text-white hover:border-accent-cyan hover:shadow-glow/20 transition-all"
            >
              <ChevronLeft size={18} />
            </button>
            <span className="text-xs font-mono font-bold text-white/50 px-1">
              0{current + 1} / 0{slides.length}
            </span>
            <button
              onClick={handleNext}
              aria-label="Next Slide"
              className="w-9 h-9 rounded-lg bg-bg-primary/60 border border-accent-cyan-dim/25 flex items-center justify-center text-white/70 hover:text-white hover:border-accent-cyan hover:shadow-glow/20 transition-all"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Slide Content Animated Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Category & Badge */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent-cyan-dim bg-accent-cyan-glow/10 px-2.5 py-1 rounded-md border border-accent-cyan-dim/20">
                  {slide.category}
                </span>
                <span className="text-xs font-bold text-[#39D7FF] bg-[#39D7FF]/10 px-2.5 py-1 rounded-md border border-[#39D7FF]/30">
                  {slide.badge}
                </span>
              </div>

              {/* Title & Brand */}
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-3">
                {slide.title}
              </h3>

              <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-6 font-sans max-w-xl">
                {slide.description}
              </p>

              {/* 4 Metrics Counter Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full mb-6">
                <div className="p-3 rounded-xl bg-bg-primary/60 border border-accent-cyan-dim/20 flex flex-col">
                  <span className="text-[10px] font-bold text-white/50 uppercase tracking-wider flex items-center gap-1">
                    <Eye size={11} className="text-[#39D7FF]" /> Views
                  </span>
                  <span className="font-display font-black text-lg sm:text-xl text-[#39D7FF]">
                    {slide.metrics.views}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-bg-primary/60 border border-accent-cyan-dim/20 flex flex-col">
                  <span className="text-[10px] font-bold text-white/50 uppercase tracking-wider flex items-center gap-1">
                    <TrendingUp size={11} className="text-[#39D7FF]" /> Growth
                  </span>
                  <span className="font-display font-black text-lg sm:text-xl text-white">
                    {slide.metrics.growth}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-bg-primary/60 border border-accent-cyan-dim/20 flex flex-col">
                  <span className="text-[10px] font-bold text-white/50 uppercase tracking-wider flex items-center gap-1">
                    <Share2 size={11} className="text-[#39D7FF]" /> Shares
                  </span>
                  <span className="font-display font-black text-lg sm:text-xl text-white">
                    {slide.metrics.shares}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-bg-primary/60 border border-accent-cyan-dim/20 flex flex-col">
                  <span className="text-[10px] font-bold text-white/50 uppercase tracking-wider flex items-center gap-1">
                    <Sparkles size={11} className="text-[#39D7FF]" /> ROI
                  </span>
                  <span className="font-display font-black text-lg sm:text-xl text-accent-cyan">
                    {slide.metrics.roi}
                  </span>
                </div>
              </div>

              {/* Action Buttons: Case Study Guide & Campaign CTA */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href={slide.caseStudyUrl}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-cyan-glow/20 border border-accent-cyan-dim/40 text-xs font-bold uppercase tracking-widest text-[#39D7FF] hover:bg-[#39D7FF] hover:text-bg-primary transition-all duration-300"
                >
                  <span>Read Breakdown</span>
                  <ArrowUpRight size={14} />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-white/70 hover:text-white transition-colors group"
                >
                  <span>Work With Us</span>
                  <ArrowUpRight
                    size={14}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </Link>
              </div>
            </div>

            {/* Right Video / Visual Card Mockup */}
            <div className="lg:col-span-5 flex justify-center w-full">
              <div className="relative w-full max-w-[320px] aspect-[9/13] rounded-2xl border-2 border-accent-cyan-dim/40 bg-gradient-to-b from-[#0B1A4A] to-[#06112F] p-4 flex flex-col justify-between overflow-hidden shadow-[0_0_30px_rgba(22,139,255,0.25)]">
                {/* Circuit Grid texture */}
                <div className="absolute inset-0 bg-circuit-grid opacity-25 pointer-events-none" />

                {/* Top of Phone/Card mockup */}
                <div className="relative z-10 flex items-center justify-between text-xs text-white/70">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-accent-cyan">
                    {slide.brand}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 text-[10px] font-black uppercase tracking-wider border border-red-500/30 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                    Viral Live
                  </span>
                </div>

                {/* Center Visual: Animated Play Soundwave */}
                <div className="relative z-10 flex flex-col items-center justify-center gap-4 my-auto">
                  <div className="w-16 h-16 rounded-full bg-accent-cyan-glow/25 border-2 border-[#39D7FF] flex items-center justify-center text-[#39D7FF] shadow-[0_0_25px_rgba(57,215,255,0.4)] hover:scale-110 transition-transform cursor-pointer">
                    <Play size={24} fill="#39D7FF" className="ml-1" />
                  </div>

                  {/* Soundwave bars animation */}
                  <div className="flex items-center gap-1.5 h-8">
                    {[40, 75, 100, 60, 90, 45, 80, 50, 95, 30].map((h, i) => (
                      <span
                        key={i}
                        className="w-1 bg-gradient-to-t from-accent-cyan to-[#39D7FF] rounded-full animate-pulse"
                        style={{
                          height: `${h}%`,
                          animationDelay: `${i * 0.15}s`,
                          animationDuration: "1.2s",
                        }}
                      />
                    ))}
                  </div>

                  <span className="text-xs font-bold text-white/90 text-center tracking-wide">
                    {slide.platform}
                  </span>
                </div>

                {/* Bottom Highlight Tag */}
                <div className="relative z-10 p-3 rounded-xl bg-bg-primary/80 border border-accent-cyan-dim/20 backdrop-blur-md">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white/50 block">
                    Verified Outcome
                  </span>
                  <span className="font-display font-black text-sm text-[#39D7FF]">
                    {slide.highlight}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress Bar & Dots */}
        <div className="relative z-10 mt-8 pt-4 border-t border-accent-cyan-dim/15 flex items-center justify-between gap-4">
          {/* Slide Indicator Tabs */}
          <div className="flex items-center gap-2 sm:gap-3">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full h-2 ${
                  current === idx
                    ? "w-8 sm:w-12 bg-gradient-to-r from-accent-cyan to-[#39D7FF] shadow-[0_0_10px_rgba(57,215,255,0.6)]"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          <span className="text-[11px] font-semibold text-white/40 tracking-wider hidden sm:block">
            Auto-advancing • Hover to pause
          </span>
        </div>
      </div>
    </div>
  );
}
