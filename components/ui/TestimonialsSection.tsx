"use client";

import { motion } from "framer-motion";
import { Star, Sparkles, Quote, ArrowRight, CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  tag: string;
  avatarBg: string;
  initials: string;
}

const testimonialsCol1: Testimonial[] = [
  {
    id: "t1",
    name: "Hamza Tariq",
    role: "Founder",
    company: "UrbanPulse Apparel",
    content:
      "Viral Marketing transformed our brand from obscurity to 2.4M organic views in our first month. Our sales tripled without increasing ad spend.",
    tag: "+320% Revenue",
    avatarBg: "from-cyan-500 to-blue-600",
    initials: "HT",
  },
  {
    id: "t2",
    name: "Ayesha Malik",
    role: "Head of Growth",
    company: "Lumina Skincare",
    content:
      "Their team understands TikTok and Reels algorithms better than any agency we've ever worked with. The viral engagement is genuinely real.",
    tag: "4.8M Impressions",
    avatarBg: "from-blue-600 to-indigo-600",
    initials: "AM",
  },
  {
    id: "t3",
    name: "Danial Sheikh",
    role: "Co-Founder",
    company: "SwiftEats PK",
    content:
      "They don't just post content; they build cultural hype. Every campaign we ran with them brought in thousands of organic app installs.",
    tag: "12k Installs",
    avatarBg: "from-sky-500 to-cyan-600",
    initials: "DS",
  },
  {
    id: "t4",
    name: "Sara Qureshi",
    role: "Marketing Director",
    company: "Velvet Aura",
    content:
      "The creative direction and short-form video hooks are world-class. Our customer acquisition cost dropped by over 45% in 60 days.",
    tag: "-45% CAC",
    avatarBg: "from-blue-500 to-teal-500",
    initials: "SQ",
  },
];

const testimonialsCol2: Testimonial[] = [
  {
    id: "t5",
    name: "Bilal Ahmed",
    role: "CEO",
    company: "Nexus Tech Gear",
    content:
      "Going viral used to feel like pure luck until we partnered with them. They turned virality into a predictable, repeatable growth engine for us.",
    tag: "8x Campaign ROI",
    avatarBg: "from-indigo-600 to-cyan-500",
    initials: "BA",
  },
  {
    id: "t6",
    name: "Zainab Khan",
    role: "Creative Producer",
    company: "Studio Artisans",
    content:
      "The attention to detail in every hook is insane. Our audience retention rates doubled and viewers actually watch our videos till the end.",
    tag: "89% Retention",
    avatarBg: "from-cyan-600 to-blue-700",
    initials: "ZK",
  },
  {
    id: "t7",
    name: "Omer Farooq",
    role: "Founder",
    company: "BoostFit Pakistan",
    content:
      "We went from 1,200 followers to over 180,000 engaged community members in under 90 days. Their viral video frameworks simply work.",
    tag: "180k+ Community",
    avatarBg: "from-teal-500 to-blue-600",
    initials: "OF",
  },
  {
    id: "t8",
    name: "Maham Siddiqui",
    role: "CMO",
    company: "Bloom Living",
    content:
      "Their transparent metrics, speed, and proactive ideation make them feel like an in-house powerhouse team rather than an external agency.",
    tag: "99% Goal Met",
    avatarBg: "from-blue-600 to-sky-400",
    initials: "MS",
  },
];

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div className="w-full rounded-2xl border border-accent-cyan-dim/20 bg-bg-secondary/40 backdrop-blur-md p-5 flex flex-col justify-between gap-3 shadow-lg hover:border-[#39D7FF]/40 hover:shadow-[0_0_20px_rgba(57,215,255,0.15)] transition-all duration-300">
      {/* Top row: Stars & Badge */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-1 text-[#39D7FF]">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={14} fill="#39D7FF" />
          ))}
        </div>
        <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-accent-cyan-glow/15 border border-accent-cyan-dim/30 text-[#39D7FF]">
          {item.tag}
        </span>
      </div>

      {/* Quote text */}
      <p className="text-xs sm:text-sm text-[#FFFFFF]/80 leading-relaxed font-sans">
        &ldquo;{item.content}&rdquo;
      </p>

      {/* Author info */}
      <div className="flex items-center gap-3 pt-2 border-t border-accent-cyan-dim/10">
        <div
          className={`w-9 h-9 rounded-full bg-gradient-to-tr ${item.avatarBg} flex items-center justify-center font-display font-bold text-xs text-white shadow-[0_0_10px_rgba(57,215,255,0.25)] border border-white/20 shrink-0`}
        >
          {item.initials}
        </div>
        <div className="flex flex-col min-w-0">
          <span className="font-display font-bold text-xs sm:text-sm text-white truncate">
            {item.name}
          </span>
          <span className="text-[11px] text-[#FFFFFF]/50 truncate">
            {item.role}, <span className="text-accent-cyan/90">{item.company}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  // Duplicate arrays to make continuous vertical infinite loops
  const col1Loop = [...testimonialsCol1, ...testimonialsCol1];
  const col2Loop = [...testimonialsCol2, ...testimonialsCol2];

  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 py-24 overflow-hidden">
      {/* Background radial accent glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[450px] h-[450px] bg-accent-cyan/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* LEFT COLUMN: Heading & Subheading */}
        <div className="lg:col-span-5 flex flex-col items-start text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-cyan-dim/30 bg-bg-secondary/40 backdrop-blur-sm text-xs font-bold uppercase tracking-widest text-[#168BFF] mb-6">
            <Sparkles size={12} className="text-[#39D7FF]" />
            What Our Clients Say
          </div>

          {/* Heading */}
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight leading-[1.05] text-[#FFFFFF] mb-6">
            Real brands. <br />
            Real people. <br />
            <span className="text-gradient-cyan drop-shadow-[0_0_20px_rgba(57,215,255,0.45)]">
              Viral results.
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-sm sm:text-base text-[#FFFFFF]/70 leading-relaxed max-w-md mb-8">
            Don&apos;t just take our word for it. Here is how ambitious businesses, founders, and creators are breaking records, crushing acquisition costs, and scaling their reach with us.
          </p>

          {/* Trust Highlights */}
          <div className="flex flex-col gap-3 mb-8 w-full">
            <div className="flex items-center gap-3 text-xs sm:text-sm text-[#FFFFFF]/80 font-medium">
              <CheckCircle2 size={16} className="text-[#39D7FF] shrink-0" />
              <span>4.9 / 5 average rating across 50+ launched campaigns</span>
            </div>
            <div className="flex items-center gap-3 text-xs sm:text-sm text-[#FFFFFF]/80 font-medium">
              <CheckCircle2 size={16} className="text-[#39D7FF] shrink-0" />
              <span>Over 15M+ organic views generated for partner brands</span>
            </div>
            <div className="flex items-center gap-3 text-xs sm:text-sm text-[#FFFFFF]/80 font-medium">
              <CheckCircle2 size={16} className="text-[#39D7FF] shrink-0" />
              <span>Zero wasted budget — every campaign engineered to scale</span>
            </div>
          </div>

          {/* Action button */}
          <Button href="/contact" variant="glow" size="md" className="group">
            Join Our Success Stories
            <ArrowRight size={14} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* RIGHT COLUMN: Two Vertically Moving Sliders with Top & Bottom Blur Gradients */}
        <div className="lg:col-span-7 relative h-[560px] overflow-hidden rounded-2xl">
          <style>{`
            @keyframes marqueeScrollDown {
              0% { transform: translateY(-50%); }
              100% { transform: translateY(0%); }
            }
            @keyframes marqueeScrollUp {
              0% { transform: translateY(0%); }
              100% { transform: translateY(-50%); }
            }
            .animate-slider-down {
              display: flex;
              flex-direction: column;
              animation: marqueeScrollDown 26s linear infinite;
              will-change: transform;
            }
            .animate-slider-up {
              display: flex;
              flex-direction: column;
              animation: marqueeScrollUp 26s linear infinite;
              will-change: transform;
            }
            .animate-slider-down:hover,
            .animate-slider-up:hover {
              animation-play-state: paused;
            }
          `}</style>

          {/* Top blur gradient overlay blending into bg */}
          <div className="pointer-events-none absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#06112F] via-[#06112F]/80 to-transparent z-20 backdrop-blur-[1px]" />

          {/* Bottom blur gradient overlay blending into bg */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#06112F] via-[#06112F]/80 to-transparent z-20 backdrop-blur-[1px]" />

          {/* Grid of the two sliders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
            {/* Left slider: Moving DOWN */}
            <div className="relative h-full overflow-hidden">
              <div className="animate-slider-down gap-4">
                {col1Loop.map((item, index) => (
                  <TestimonialCard key={`col1-${item.id}-${index}`} item={item} />
                ))}
              </div>
            </div>

            {/* Right slider: Moving UP */}
            <div className="relative h-full overflow-hidden">
              <div className="animate-slider-up gap-4">
                {col2Loop.map((item, index) => (
                  <TestimonialCard key={`col2-${item.id}-${index}`} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
