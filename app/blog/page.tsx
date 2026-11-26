import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, Clock, ArrowRight, BookOpen, CheckCircle2, UserCheck } from "lucide-react";
import { blogPosts, authors } from "@/lib/blog-data";
import EzoicPlaceholder from "@/components/ads/EzoicPlaceholder";

export const metadata: Metadata = {
  title: "Insights & Guides | Viral Marketing Solution Pakistan",
  description:
    "Explore actionable guides, real campaign case studies, and growth playbooks on TikTok marketing, Meta ads, organic UGC, and video retention in Pakistan.",
  keywords: [
    "TikTok marketing Pakistan",
    "Meta ads guide",
    "Instagram Reels hooks",
    "E-commerce growth Pakistan",
    "UGC marketing Karachi",
    "Digital marketing case studies",
  ],
};

export default function BlogIndexPage() {
  const featuredPost = blogPosts[0];
  const remainingPosts = blogPosts.slice(1);

  return (
    <div className="w-full flex flex-col items-center">
      {/* 1. HERO SECTION */}
      <section className="relative w-full max-w-7xl mx-auto px-6 pt-12 pb-16 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent-cyan/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-cyan-dim/30 bg-bg-secondary/40 backdrop-blur-sm text-xs font-bold uppercase tracking-widest text-[#168BFF] mb-6">
          <BookOpen size={13} className="text-[#39D7FF]" />
          Editorial Knowledge Base & Guides
        </div>

        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight max-w-4xl mx-auto leading-[0.95] mb-6 text-white">
          Insights, Strategy & <span className="text-gradient-cyan drop-shadow-[0_0_20px_rgba(57,215,255,0.45)]">Playbooks</span>
        </h1>

        <p className="text-base sm:text-xl text-[#FFFFFF]/75 max-w-2xl mx-auto leading-relaxed font-sans mb-8">
          Original data breakdowns, real case studies, and actionable video blueprints designed to help Pakistani e-commerce
          and local businesses achieve viral distribution and profitable customer acquisition.
        </p>

        {/* E-E-A-T Trust Highlights */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-semibold text-white/60">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 size={14} className="text-[#39D7FF]" /> 100% Original Analysis
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 size={14} className="text-[#39D7FF]" /> Verified Local Data & Metrics
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 size={14} className="text-[#39D7FF]" /> Written by Growth Practitioners
          </span>
        </div>
      </section>

      {/* 2. FEATURED POST SPOTLIGHT */}
      <section className="w-full max-w-7xl mx-auto px-6 pb-16">
        <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[#39D7FF] flex items-center gap-2">
          <Sparkles size={14} /> Featured Cornerstone Guide
        </div>

        <Link
          href={`/blog/${featuredPost.slug}`}
          className="group block relative rounded-2xl border border-accent-cyan-dim/30 bg-gradient-to-br from-bg-secondary/60 via-bg-primary to-bg-secondary/40 backdrop-blur-md overflow-hidden p-8 sm:p-12 hover:border-[#39D7FF]/50 hover:shadow-[0_0_35px_rgba(57,215,255,0.2)] transition-all duration-300"
        >
          <div className="absolute inset-0 bg-circuit-grid opacity-20 pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-start justify-between">
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-accent-cyan-glow/20 border border-accent-cyan-dim/40 text-[#39D7FF]">
                  {featuredPost.category}
                </span>
                <span className="text-xs text-white/50 flex items-center gap-1">
                  <Clock size={12} /> {featuredPost.readTime}
                </span>
                <span className="text-xs text-white/40">&bull; {featuredPost.date}</span>
              </div>

              <h2 className="font-display text-2xl sm:text-4xl font-black uppercase text-white tracking-tight group-hover:text-[#39D7FF] transition-colors leading-tight">
                {featuredPost.title}
              </h2>

              <p className="text-sm sm:text-base text-white/70 leading-relaxed font-sans max-w-3xl">
                {featuredPost.excerpt}
              </p>

              {/* Author pill */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-accent-cyan-dim/40">
                  <Image
                    src={featuredPost.author.avatar}
                    alt={featuredPost.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-display text-sm font-bold text-white">{featuredPost.author.name}</p>
                  <p className="text-xs text-white/50">{featuredPost.author.role}</p>
                </div>
              </div>
            </div>

            <div className="self-end lg:self-center shrink-0">
              <span className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent-cyan-glow/20 border border-accent-cyan-dim/40 text-[#39D7FF] font-bold text-xs uppercase tracking-widest group-hover:bg-[#39D7FF] group-hover:text-bg-primary transition-all duration-300 shadow-glow/10">
                Read Full Guide <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        </Link>
      </section>

      {/* Ezoic Ad Placement */}
      <section className="w-full max-w-7xl mx-auto px-6 pb-8">
        <EzoicPlaceholder id={101} />
      </section>

      {/* 3. ALL ARTICLES GRID */}
      <section className="w-full max-w-7xl mx-auto px-6 py-12 border-t border-accent-cyan-dim/15">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
          <div>
            <h2 className="font-display text-2xl sm:text-4xl font-black uppercase text-white tracking-tight">
              Latest Growth Articles & Case Studies
            </h2>
            <p className="text-xs sm:text-sm text-white/60 mt-1">
              Field-tested strategies for e-commerce, content creators, and agencies.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {remainingPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col justify-between rounded-xl border border-accent-cyan-dim/20 bg-bg-secondary/40 backdrop-blur-md p-6 sm:p-8 hover:border-[#39D7FF]/40 hover:shadow-[0_0_25px_rgba(57,215,255,0.15)] transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-accent-cyan-glow/15 border border-accent-cyan-dim/30 text-[#39D7FF]">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-white/50">
                    <Clock size={12} /> {post.readTime}
                  </div>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white tracking-tight group-hover:text-[#39D7FF] transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs sm:text-sm text-white/70 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border border-accent-cyan-dim/30">
                    <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
                  </div>
                  <div>
                    <span className="font-display text-xs font-bold text-white block">{post.author.name}</span>
                    <span className="text-[10px] text-white/40">{post.date}</span>
                  </div>
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-[#39D7FF] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read <ArrowRight size={13} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. EDITORIAL TEAM & E-E-A-T SECTION */}
      <section className="w-full max-w-7xl mx-auto px-6 py-20 border-t border-accent-cyan-dim/15">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan-glow/10 border border-accent-cyan-dim/30 text-xs font-bold uppercase tracking-widest text-[#39D7FF] mb-3">
            <UserCheck size={14} /> Our Editorial Board & Authors
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-black uppercase tracking-tight text-white">
            Real Practitioners. Real Track Record.
          </h2>
          <p className="text-xs sm:text-sm text-white/60 mt-2">
            Every insight published on Viral Marketing Solution is authored and vetted by our founding executive team in
            Karachi, Pakistan, drawing directly from active multi-million view campaigns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.values(authors).map((author, index) => (
            <div
              key={index}
              className="rounded-xl border border-accent-cyan-dim/20 bg-bg-secondary/30 backdrop-blur-sm p-6 text-center flex flex-col items-center"
            >
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-[#39D7FF] mb-4 shadow-[0_0_20px_rgba(57,215,255,0.25)]">
                <Image src={author.avatar} alt={author.name} fill className="object-cover" />
              </div>
              <h3 className="font-display text-lg font-bold uppercase text-white">{author.name}</h3>
              <p className="text-xs font-semibold text-[#39D7FF] uppercase tracking-wider mb-3">{author.role}</p>
              <p className="text-xs text-white/70 leading-relaxed">{author.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
