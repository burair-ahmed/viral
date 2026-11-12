import type { Metadata } from "next";
import Image from "next/image";
import {
  Mic,
  Play,
  Flame,
  Clock,
  ExternalLink,
  Radio,
  CheckCircle2,
  Video,
  Award,
  MessageCircle,
  Mail,
} from "lucide-react";
import { podcastInfo, podcastEpisodes } from "@/lib/podcast-data";

export const metadata: Metadata = {
  title: "The Viral Podcast PK | Hosted by Dai Ali Daniyal | Viral Marketing Solution",
  description:
    "The Viral Podcast PK is Pakistan's premier long-form video podcast. Hosted by CEO Dai Ali Daniyal, featuring unfiltered conversations on investigative journalism, supernatural cases, sports, culture, and business virality.",
  keywords: [
    "The Viral Podcast PK",
    "Dai Ali Daniyal podcast",
    "Pakistani podcast YouTube",
    "Karachi podcast studio",
    "Faheem Siddique interview",
    "Mufti Khubaib jinn stories",
    "Viral Marketing Solution podcast",
  ],
  openGraph: {
    title: "The Viral Podcast PK | Unfiltered Long-Form Conversations",
    description:
      "Hosted by Dai Ali Daniyal. Deep-dives into investigative journalism, paranormal phenomena, cultural truths, and virality in Pakistan.",
    type: "website",
    url: "https://theviralmarketing.pk/podcast",
  },
};

export default function PodcastPage() {
  const featuredEpisode = podcastEpisodes[0]; // Episode 12 Mufti Khubaib
  const secondaryEpisode = podcastEpisodes[1]; // Episode 03 Faheem Siddique
  const remainingEpisodes = podcastEpisodes.slice(2);

  // Structured Podcast Schema for Google rich results & E-E-A-T
  const podcastSchema = {
    "@context": "https://schema.org",
    "@type": "PodcastSeries",
    name: podcastInfo.title,
    description: podcastInfo.description,
    url: "https://theviralmarketing.pk/podcast",
    webFeed: podcastInfo.youtubeVideosUrl,
    author: {
      "@type": "Person",
      name: podcastInfo.host.name,
      jobTitle: podcastInfo.host.role,
      image: "https://theviralmarketing.pk/10-2.webp",
    },
    publisher: {
      "@type": "Organization",
      name: "Viral Marketing Solution",
      url: "https://theviralmarketing.pk",
      logo: "https://theviralmarketing.pk/logo.png",
    },
    inLanguage: ["ur", "en"],
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Structured Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(podcastSchema) }}
      />

      {/* 1. HERO SECTION */}
      <section className="relative w-full max-w-7xl mx-auto px-6 pt-12 pb-20 md:py-24 text-center overflow-hidden">
        {/* Ambient Studio Lighting Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-accent-cyan/15 rounded-full blur-[120px] pointer-events-none" />

        {/* Studio Live Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-red-500/30 bg-red-950/20 backdrop-blur-sm text-xs font-bold uppercase tracking-widest text-red-400 mb-8">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
          <Radio size={14} className="text-red-400" />
          The Viral Studio Series &bull; Karachi, Pakistan
        </div>

        {/* Main Title */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tight max-w-5xl mx-auto leading-[0.95] mb-6 text-white">
          The Viral Podcast <span className="text-gradient-cyan drop-shadow-[0_0_25px_rgba(57,215,255,0.45)]">PK</span>
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-2xl font-display font-bold uppercase tracking-wider text-[#39D7FF] mb-4">
          {podcastInfo.tagline}
        </p>

        {/* Subtitle / Host Narrative */}
        <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed font-sans mb-10">
          Hosted by <strong className="text-white">{podcastInfo.host.name}</strong> (CEO, Viral Marketing Solution).
          Unfiltered conversations with journalists, scholars, athletes, and cultural disruptors exploring the raw realities of modern Pakistan.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md mx-auto mb-14">
          <a
            href={podcastInfo.youtubeVideosUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-display text-sm font-bold uppercase tracking-wider shadow-[0_0_30px_rgba(239,68,68,0.35)] transition-all duration-300 group"
          >
            <Play size={16} fill="white" className="group-hover:scale-110 transition-transform" />
            Watch on YouTube
            <ExternalLink size={14} className="opacity-70" />
          </a>

          <a
            href="#episodes"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-accent-cyan-dim/40 bg-bg-secondary/40 text-xs font-bold uppercase tracking-widest text-[#39D7FF] hover:bg-[#39D7FF] hover:text-bg-primary transition-all duration-300"
          >
            Browse Episodes
          </a>
        </div>

        {/* Broadcast Audio Waveform & Metrics Ticker */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto p-6 rounded-2xl border border-accent-cyan-dim/20 bg-bg-secondary/40 backdrop-blur-md">
          <div className="flex flex-col items-center">
            <span className="font-display font-black text-2xl sm:text-3xl text-white">4K UHD</span>
            <span className="text-[11px] uppercase tracking-wider text-white/50 font-semibold mt-1">
              Multi-Cam Cinema
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-display font-black text-2xl sm:text-3xl text-[#39D7FF]">100% Raw</span>
            <span className="text-[11px] uppercase tracking-wider text-white/50 font-semibold mt-1">
              Zero PR Scripts
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-display font-black text-2xl sm:text-3xl text-white">Shure SM7B</span>
            <span className="text-[11px] uppercase tracking-wider text-white/50 font-semibold mt-1">
              Broadcast Audio
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-display font-black text-2xl sm:text-3xl text-[#39D7FF]">Karachi HQ</span>
            <span className="text-[11px] uppercase tracking-wider text-white/50 font-semibold mt-1">
              DHA Phase 5 Studio
            </span>
          </div>
        </div>
      </section>

      {/* 2. HOST PROFILE SPOTLIGHT */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16 border-t border-accent-cyan-dim/15">
        <div className="rounded-3xl border border-accent-cyan-dim/30 bg-gradient-to-br from-bg-secondary/60 via-bg-primary to-bg-secondary/40 backdrop-blur-md p-8 sm:p-14 relative overflow-hidden">
          <div className="absolute inset-0 bg-circuit-grid opacity-15 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Host Photo & Badges */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border-2 border-[#39D7FF] shadow-[0_0_40px_rgba(57,215,255,0.3)] mb-6">
                <Image
                  src={podcastInfo.host.avatar}
                  alt={podcastInfo.host.name}
                  fill
                  className="object-cover contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/90 text-white text-[10px] font-black uppercase tracking-widest shadow-md">
                    <Mic size={12} /> The Voice of Viral PK
                  </span>
                </div>
              </div>

              <h3 className="font-display text-2xl font-black uppercase text-white tracking-wide">
                {podcastInfo.host.name}
              </h3>
              <p className="text-xs font-bold text-[#39D7FF] uppercase tracking-widest mt-1">
                {podcastInfo.host.role}
              </p>
            </div>

            {/* Host Vision & Narrative */}
            <div className="lg:col-span-7 space-y-5 text-white/80 leading-relaxed font-sans">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#39D7FF]">
                <Award size={14} /> Behind the Microphone
              </div>

              <h2 className="font-display text-2xl sm:text-4xl font-black uppercase text-white tracking-tight leading-tight">
                &ldquo;Traditional Pakistani media tells you what to think. We let real people tell you what actually happened.&rdquo;
              </h2>

              <p className="text-sm sm:text-base">
                As Chief Executive Officer of Viral Marketing Solution, <strong>Dai Ali Daniyal</strong> built his reputation
                decoding why certain ideas ignite while others fade into digital obscurity. With The Viral Podcast PK, he turns
                that analytical lens onto Pakistan itself.
              </p>

              <p className="text-sm sm:text-base text-white/70">
                From sitting across veteran investigative journalists breaking down Karachi&apos;s underworld syndicates, to
                unraveling chilling Ruqyah exorcism cases with Islamic scholars, Dai steers long-form dialogues with intellectual
                rigor, deep empathy, and zero commercial censorship.
              </p>

              <div className="pt-4 flex flex-wrap gap-3">
                <span className="px-3 py-1 rounded-lg bg-bg-secondary border border-white/10 text-xs font-semibold text-white/70">
                  Business Management
                </span>
                <span className="px-3 py-1 rounded-lg bg-bg-secondary border border-white/10 text-xs font-semibold text-white/70">
                  International Business
                </span>
                <span className="px-3 py-1 rounded-lg bg-bg-secondary border border-white/10 text-xs font-semibold text-white/70">
                  Media Architecture
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED FLAGSHIP EPISODES (SPOTLIGHT 1 & 2) */}
      <section id="episodes" className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan-glow/10 border border-accent-cyan-dim/30 text-xs font-bold uppercase tracking-widest text-[#39D7FF] mb-3">
            <Flame size={14} /> Flagship Studio Releases
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            Must-Watch Episodes
          </h2>
          <p className="text-xs sm:text-sm text-white/60 mt-2">
            The long-form discussions that ignited conversations across Pakistan and the diaspora.
          </p>
        </div>

        {/* Featured Episodes — 2-column side-by-side so thumbnails stay sharp */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">

          {/* Card 1 — Jinn & Ruqyah Cases */}
          <div className="group flex flex-col rounded-2xl border-2 border-accent-cyan-dim/40 bg-gradient-to-br from-bg-secondary/70 via-bg-primary/95 to-bg-secondary/50 overflow-hidden shadow-[0_0_30px_rgba(57,215,255,0.12)] hover:shadow-[0_0_45px_rgba(57,215,255,0.22)] transition-shadow duration-300">

            {/* Thumbnail — half-width so it renders at its native resolution */}
            {featuredEpisode.thumbnailUrl && (
              <a
                href={featuredEpisode.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block w-full aspect-video overflow-hidden shrink-0"
                aria-label={`Watch ${featuredEpisode.title} on YouTube`}
              >
                <Image
                  src={featuredEpisode.thumbnailUrl}
                  alt={featuredEpisode.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-red-600/90 group-hover:bg-red-500 shadow-[0_0_28px_rgba(239,68,68,0.6)] flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <Play size={22} fill="white" className="text-white ml-1" />
                  </div>
                </div>
                {featuredEpisode.badge && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-red-600 text-white shadow-md">
                    {featuredEpisode.badge}
                  </span>
                )}
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-black/70 text-white backdrop-blur-sm border border-white/10">
                  EP {featuredEpisode.episodeNumber}
                </span>
              </a>
            )}

            {/* Info */}
            <div className="flex flex-col flex-1 p-6">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-accent-cyan-glow/20 border border-accent-cyan-dim/40 text-[#39D7FF]">
                  {featuredEpisode.category}
                </span>
                <span className="text-xs text-white/50 flex items-center gap-1">
                  <Clock size={12} /> {featuredEpisode.duration}
                </span>
                <span className="text-xs text-white/40">&bull; {featuredEpisode.date}</span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-black uppercase text-white tracking-tight leading-tight mb-2">
                {featuredEpisode.title}
              </h3>

              <p className="text-xs font-semibold text-[#39D7FF] mb-3">
                Guest: <span className="text-white">{featuredEpisode.guest}</span>
                <span className="text-white/40 mx-1">&bull;</span>
                <span className="text-white/60">{featuredEpisode.guestRole}</span>
              </p>

              <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-4 flex-1">
                {featuredEpisode.description}
              </p>

              <div className="space-y-1.5 mb-5">
                {featuredEpisode.highlights.slice(0, 3).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-[11px] text-white/65">
                    <CheckCircle2 size={12} className="text-[#39D7FF] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <a
                href={featuredEpisode.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-600/30 transition-all duration-300"
              >
                <Play size={13} fill="white" />
                Play Full Episode
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Card 2 — Karachi / Faheem Siddique */}
          <div className="group flex flex-col rounded-2xl border border-accent-cyan-dim/30 bg-bg-secondary/40 backdrop-blur-md overflow-hidden hover:border-[#39D7FF]/40 hover:shadow-[0_0_30px_rgba(57,215,255,0.15)] transition-all duration-300">

            {/* Thumbnail */}
            {secondaryEpisode.thumbnailUrl && (
              <a
                href={secondaryEpisode.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block w-full aspect-video overflow-hidden shrink-0"
                aria-label={`Watch ${secondaryEpisode.title} on YouTube`}
              >
                <Image
                  src={secondaryEpisode.thumbnailUrl}
                  alt={secondaryEpisode.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#39D7FF]/90 group-hover:bg-[#39D7FF] shadow-[0_0_28px_rgba(57,215,255,0.5)] flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <Play size={22} fill="#06112F" className="ml-0.5" />
                  </div>
                </div>
                {secondaryEpisode.badge && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#39D7FF] text-bg-primary shadow-md">
                    {secondaryEpisode.badge}
                  </span>
                )}
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-black/70 text-white backdrop-blur-sm border border-white/10">
                  EP {secondaryEpisode.episodeNumber}
                </span>
              </a>
            )}

            {/* Info */}
            <div className="flex flex-col flex-1 p-6">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-accent-cyan-glow/20 border border-accent-cyan-dim/40 text-[#39D7FF]">
                  {secondaryEpisode.category}
                </span>
                <span className="text-xs text-white/50 flex items-center gap-1">
                  <Clock size={12} /> {secondaryEpisode.duration}
                </span>
                <span className="text-xs text-white/40">&bull; {secondaryEpisode.date}</span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-black uppercase text-white tracking-tight leading-tight mb-2">
                {secondaryEpisode.title}
              </h3>

              <p className="text-xs font-semibold text-[#39D7FF] mb-3">
                Guest: <span className="text-white">{secondaryEpisode.guest}</span>
                <span className="text-white/40 mx-1">&bull;</span>
                <span className="text-white/60">{secondaryEpisode.guestRole}</span>
              </p>

              <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-4 flex-1">
                {secondaryEpisode.description}
              </p>

              <div className="space-y-1.5 mb-5">
                {secondaryEpisode.highlights.slice(0, 3).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-[11px] text-white/65">
                    <CheckCircle2 size={12} className="text-[#39D7FF] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <a
                href={secondaryEpisode.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-accent-cyan-glow/20 border border-accent-cyan-dim/40 hover:bg-[#39D7FF] hover:text-bg-primary text-[#39D7FF] font-bold text-xs uppercase tracking-wider transition-all duration-300"
              >
                <Play size={13} />
                Watch on YouTube
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 4. FULL EPISODE CATALOG GRID */}
      <section className="w-full max-w-7xl mx-auto px-6 pb-20">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 pb-4 border-b border-white/10">
          <div>
            <h2 className="font-display text-2xl sm:text-4xl font-black uppercase text-white tracking-tight">
              All Podcast Releases
            </h2>
            <p className="text-xs sm:text-sm text-white/60 mt-1">
              Explore interviews spanning sports, culture, viral psychology, and field investigations.
            </p>
          </div>

          <a
            href={podcastInfo.youtubeChannelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#39D7FF] hover:text-white transition-colors"
          >
            <span>Subscribe to YouTube Channel</span>
            <ExternalLink size={13} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {remainingEpisodes.map((ep) => (
            <div
              key={ep.id}
              className="group rounded-2xl border border-accent-cyan-dim/20 bg-bg-secondary/40 backdrop-blur-md overflow-hidden flex flex-col hover:border-[#39D7FF]/40 hover:shadow-[0_0_25px_rgba(57,215,255,0.15)] transition-all duration-300"
            >
              {/* Episode Thumbnail */}
              {ep.thumbnailUrl ? (
                <a
                  href={ep.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block w-full aspect-video overflow-hidden shrink-0"
                  aria-label={`Watch ${ep.title} on YouTube`}
                >
                  <Image
                    src={ep.thumbnailUrl}
                    alt={ep.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/70 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-red-600/90 shadow-[0_0_20px_rgba(239,68,68,0.5)] flex items-center justify-center">
                      <Play size={18} fill="white" className="text-white ml-0.5" />
                    </div>
                  </div>
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-black/70 text-white backdrop-blur-sm border border-white/10">
                    {typeof ep.episodeNumber === "number" ? `EP ${ep.episodeNumber}` : ep.episodeNumber}
                  </span>
                </a>
              ) : null}

              <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-accent-cyan-glow/20 border border-accent-cyan-dim/40 text-[#39D7FF]">
                      {ep.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-white/50">
                      <Clock size={12} /> {ep.duration}
                    </div>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white tracking-tight group-hover:text-[#39D7FF] transition-colors leading-snug">
                    {ep.title}
                  </h3>

                  <p className="text-xs font-semibold text-[#39D7FF]">
                    Featuring: <span className="text-white">{ep.guest}</span> ({ep.guestRole})
                  </p>

                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                    {ep.description}
                  </p>

                  <div className="space-y-1 pt-2">
                    {ep.highlights.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[11px] text-white/60">
                        <span className="w-1 h-1 rounded-full bg-[#39D7FF]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] text-white/40">{ep.date}</span>

                  <a
                    href={ep.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600/20 border border-red-500/30 text-red-400 hover:bg-red-600 hover:text-white text-xs font-bold uppercase tracking-wider transition-all duration-300"
                  >
                    <Play size={12} fill="currentColor" /> Watch Episode
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. KARACHI STUDIO INFRASTRUCTURE */}
      <section className="w-full max-w-7xl mx-auto px-6 py-20 border-t border-accent-cyan-dim/15">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan-glow/10 border border-accent-cyan-dim/30 text-xs font-bold uppercase tracking-widest text-[#39D7FF] mb-3">
            <Video size={14} /> Production Standards
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-black uppercase tracking-tight text-white">
            Built Inside Viral Studios Karachi
          </h2>
          <p className="text-xs sm:text-sm text-white/60 mt-2">
            Every episode of The Viral Podcast PK is engineered in-house at our dedicated digital production facilities in Badar Commercial Phase 5, DHA, Karachi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {podcastInfo.studio.specs.map((spec, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-accent-cyan-dim/20 bg-bg-secondary/30 backdrop-blur-sm flex flex-col justify-between"
            >
              <div className="w-10 h-10 rounded-lg bg-accent-cyan-glow/10 border border-accent-cyan-dim/30 flex items-center justify-center text-[#39D7FF] mb-4">
                <Mic size={18} />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-white/40 block mb-1">
                  Spec 0{index + 1}
                </span>
                <p className="font-display text-base font-bold text-white uppercase">{spec}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. GUEST & SPONSORSHIP INQUIRY CTA */}
      <section className="w-full max-w-5xl mx-auto px-6 pb-28 pt-8">
        <div className="rounded-3xl border border-accent-cyan-dim/30 bg-gradient-to-br from-bg-secondary/70 via-bg-primary to-bg-secondary/90 p-8 sm:p-14 text-center flex flex-col items-center shadow-[0_0_50px_rgba(22,139,255,0.2)]">
          <span className="text-xs font-bold uppercase tracking-widest text-[#39D7FF] mb-3">
            Be Part of The Conversation
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white max-w-2xl mb-4 leading-tight">
            Have a Story That Pakistan Needs to Hear?
          </h2>
          <p className="text-sm sm:text-base text-white/70 max-w-xl mx-auto mb-8 leading-relaxed font-sans">
            We are always scouting for compelling investigative journalists, scholars, founders, athletes, and unusual
            voices. For guest pitching, corporate episode sponsorships, or brand integrations:
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:info@viralmarketingsolution.com?subject=The%20Viral%20Podcast%20PK%20-%20Guest%20/%20Sponsorship%20Inquiry"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-accent-cyan-glow/20 border border-accent-cyan-dim/40 text-xs font-bold uppercase tracking-widest text-[#39D7FF] hover:bg-[#39D7FF] hover:text-bg-primary transition-all duration-300"
            >
              <Mail size={15} /> Pitch Guest / Sponsor
            </a>

            <a
              href="https://wa.me/923114941631?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20The%20Viral%20Podcast%20PK."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-white/10 bg-white/5 text-xs font-bold uppercase tracking-widest text-white hover:border-[#39D7FF] transition-all duration-300"
            >
              <MessageCircle size={15} /> WhatsApp Producer
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
