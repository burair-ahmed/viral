"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, Cpu, Video, Share2 } from "lucide-react";
import Button from "@/components/ui/Button";
import GlowCard from "@/components/ui/GlowCard";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Marquee from "@/components/ui/Marquee";

export default function Home() {
  const serviceItems = [
    {
      icon: <TrendingUp className="text-accent-cyan" size={28} />,
      title: "Viral Velocity Loops",
      description: "We design organic referral flywheels and in-app triggers that motivate users to recruit more users, scaling your growth exponentially.",
    },
    {
      icon: <Sparkles className="text-accent-cyan" size={28} />,
      title: "Cultural Hijacking",
      description: "We embed your brand into active social discourse, creating high-impact, authentic memes and trends that capture attention overnight.",
    },
    {
      icon: <Cpu className="text-accent-cyan" size={28} />,
      title: "Algorithm Arbitrage",
      description: "Using data-driven feedback loops, we engineer content tailored to game discovery feeds on TikTok, Instagram, and YouTube.",
    },
    {
      icon: <Video className="text-accent-cyan" size={28} />,
      title: "Content Laboratory",
      description: "Bespoke production of highly addictive short-form videos and visually striking assets that command thumb-stops.",
    },
  ];

  const stats = [
    { value: 450, suffix: "M+", label: "Organic Views Engineered" },
    { value: 340, suffix: "%", label: "Average CAC Reduction" },
    { value: 120, suffix: "+", label: "Brands Transformed" },
    { value: 15, suffix: "x", label: "Highest Campaign ROI" },
  ];

  const processSteps = [
    {
      num: "01",
      title: "Auditing Culture",
      desc: "We analyze your brand DNA and scan social media for active cultural hooks.",
    },
    {
      num: "02",
      title: "Loop Engineering",
      desc: "We draft the sharing mechanics and viral nodes to embed into your campaign.",
    },
    {
      num: "03",
      title: "Distribution Inject",
      desc: "We launch content through our high-velocity creator networks.",
    },
    {
      num: "04",
      title: "Optimize & Multiply",
      desc: "We track engagement analytics and immediately double down on winning hooks.",
    },
  ];

  // Hero staggered words reveal setup
  const heroTitle = "Let's make your brand Viral";
  const words = heroTitle.split(" ");

  return (
    <div className="w-full flex flex-col items-center">
      {/* 1. HERO SECTION */}
      <section className="relative w-full max-w-7xl mx-auto px-6 pt-16 pb-24 md:py-32 flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Glow behind hero */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-accent-cyan/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Floating animated sparkles badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-cyan-dim/30 bg-bg-secondary/40 backdrop-blur-sm text-xs font-bold uppercase tracking-widest text-[#2EE6E6] mb-8"
        >
          <Sparkles size={12} className="animate-spin" />
          Attention Engineering Agency
        </motion.div>

        {/* Headline Word Stagger */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tight max-w-4xl leading-[0.95] mb-6">
          {words.map((word, idx) => (
            <motion.span
              key={idx}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: idx * 0.1,
                duration: 0.6,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              className={`inline-block mr-3 sm:mr-5 ${
                word.toLowerCase() === "viral"
                  ? "text-gradient-cyan drop-shadow-[0_0_15px_rgba(46,230,230,0.3)]"
                  : ""
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-base sm:text-xl text-[#F5F9FA]/70 max-w-xl leading-relaxed mb-10 font-sans"
        >
          We build growth loops and culture-shaping content systems that turn passive observers into active promoters.
        </motion.p>

        {/* Hero CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md"
        >
          <Button href="/contact" variant="glow" size="lg" className="w-full sm:w-auto">
            Launch a Campaign
          </Button>
          <Button href="/about" variant="sheen" size="lg" className="w-full sm:w-auto">
            Our Method
          </Button>
        </motion.div>
      </section>

      {/* 2. INFINITE MARQUEE TICKER */}
      <section className="w-full border-y border-accent-cyan-dim/15 bg-bg-secondary/20 py-8 overflow-hidden select-none">
        <Marquee speed="25s" direction="left">
          {["Growth Hacking", "Viral Loops", "Content Lab", "Culture Hijacking", "Algorithmic Arbitrage", "Velocity Scaling", "Distribution Loops", "MEME Dynamics"].map(
            (tag, idx) => (
              <span
                key={idx}
                className="font-display text-lg sm:text-2xl font-bold tracking-widest text-[#F5F9FA]/50 uppercase flex items-center gap-4 mx-6"
              >
                <Share2 size={18} className="text-accent-cyan" />
                {tag}
              </span>
            )
          )}
        </Marquee>
      </section>

      {/* 3. SERVICES SECTION */}
      <section id="services" className="w-full max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight mb-4">
            We Engineer Virality
          </h2>
          <p className="text-sm sm:text-base text-[#F5F9FA]/60">
            We don&apos;t just buy ads. We engineer social machines that gather momentum on their own.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceItems.map((service, index) => (
            <GlowCard key={index} cursorViewText="EXAMINE">
              <div className="flex flex-col gap-4 h-full justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-accent-cyan-glow/10 border border-accent-cyan-dim/30 flex items-center justify-center mb-4 shadow-glow/10">
                    {service.icon}
                  </div>
                  <h3 className="font-display text-xl font-bold tracking-wide text-[#F5F9FA] mb-2 uppercase">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#F5F9FA]/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center text-xs font-bold tracking-widest text-accent-cyan uppercase group cursor-pointer">
                  Explore Case Studies
                  <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </section>

      {/* 4. STATS / DASHBOARD */}
      <section className="w-full bg-bg-secondary/30 border-y border-accent-cyan-dim/10 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-circuit-grid opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                className="text-4xl sm:text-6xl font-display font-black text-accent-cyan drop-shadow-[0_0_10px_rgba(46,230,230,0.3)] mb-2"
              />
              <span className="text-xs sm:text-sm font-sans tracking-wider uppercase text-[#F5F9FA]/60 font-semibold max-w-[150px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. PROCESS / TIMELINE */}
      <section className="w-full max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight mb-4">
            The Viral Shutter Method
          </h2>
          <p className="text-sm sm:text-base text-[#F5F9FA]/60">
            A battle-tested deployment pipeline designed to inject brands into the social lexicon.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="relative flex flex-col gap-4 p-6 bg-bg-secondary/20 border border-accent-cyan-dim/10 rounded-lg">
              <div className="font-display text-5xl font-black text-accent-cyan-dim/20 absolute -top-8 left-4">
                {step.num}
              </div>
              <h3 className="font-display text-lg font-bold tracking-wider text-[#F5F9FA] uppercase mt-2">
                {step.title}
              </h3>
              <p className="text-sm text-[#F5F9FA]/60 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="w-full max-w-5xl mx-auto px-6 pb-28 pt-12">
        <GlowCard className="bg-gradient-to-br from-bg-secondary/60 to-bg-primary/90 text-center border-accent-cyan-dim/25 p-12 md:p-16 flex flex-col items-center">
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight max-w-xl mb-4 leading-none">
            Ready to break the internet?
          </h2>
          <p className="text-sm sm:text-base text-[#F5F9FA]/70 max-w-lg mb-8 leading-relaxed">
            Stop competing for ad placements. Let&apos;s engineer custom viral loops that drive real, organic momentum for your business.
          </p>
          <Button href="/contact" variant="glow" size="lg">
            Connect With Our Engineers
          </Button>
        </GlowCard>
      </section>
    </div>
  );
}
