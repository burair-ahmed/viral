"use client";

import { motion } from "framer-motion";
import { Users, Lightbulb, Zap, Rocket, Star, Heart, Flag, TrendingUp, Globe } from "lucide-react";
import GlowCard from "@/components/ui/GlowCard";
import Image from "next/image";

const teamMembers = [
  {
    name: "Ashraf Jabbar Qureshi",
    role: "Chairman & Founder",
    bio: "Serial entrepreneur with ventures spanning real estate, construction, and global retail. Founded Viral Marketing driven by a lifelong obsession with building things that last â€” and ideas that spread.",
    image: "/MQP06061-copy.webp",
  },
  {
    name: "Dai Ali Daniyal",
    role: "Chief Executive Officer",
    bio: "Armed with degrees in Business Management and International Business, Dai architects the strategy that turns content into culture. His vision: make every campaign impossible to ignore.",
    image: "/10-2.webp",
  },
  {
    name: "Armash Ashraf",
    role: "Chief Operating Officer",
    bio: "Engineer by training, operator by instinct. Armash runs the systems that keep campaigns moving at scale â€” precision, creativity, and relentless execution baked into every workflow.",
    image: "/7.webp",
  },
];

const values = [
  {
    icon: <Zap className="text-accent-cyan" size={24} />,
    title: "Speed That Matters",
    desc: "We move fast. While others are still planning, we are already launching and getting results for our clients.",
  },
  {
    icon: <Lightbulb className="text-accent-cyan" size={24} />,
    title: "Smart, Creative Thinking",
    desc: "We find the best opportunities to get your brand in front of the right people — without wasting budget on what does not work.",
  },
  {
    icon: <Rocket className="text-accent-cyan" size={24} />,
    title: "Results You Can See",
    desc: "Every campaign we run is tracked and measured. We show you exactly what is working and why — no guesswork, just real growth.",
  },
];

const milestones = [
  {
    year: "2023",
    title: "Where It All Started",
    desc: "Viral Marketing was founded in Karachi with one goal: help local businesses grow online through content people actually want to share.",
    icon: <Flag size={18} />,
    tag: "Foundation",
  },
  {
    year: "2024",
    title: "Our First Big Win",
    desc: "We ran our first major campaign across multiple platforms and reached over 50 million people — without spending a single rupee on ads.",
    icon: <TrendingUp size={18} />,
    tag: "Growth",
  },
  {
    year: "2025",
    title: "Going International",
    desc: "We expanded our work beyond Pakistan, helping brands grow in the Middle East, Europe, and South Asia.",
    icon: <Globe size={18} />,
    tag: "Expansion",
  },
  {
    year: "2026",
    title: "Our In-House Content Studio",
    desc: "We opened our own production studio so we can create high-quality videos and content faster and better than ever before.",
    icon: <Rocket size={18} />,
    tag: "Innovation",
  },
];

export default function About() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* 1. HERO SECTION */}
      <section className="relative w-full max-w-7xl mx-auto px-6 pt-16 pb-24 text-center overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-accent-cyan/5 rounded-full blur-[100px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-cyan-dim/30 bg-bg-secondary/40 backdrop-blur-sm text-xs font-bold uppercase tracking-widest text-[#168BFF] mb-8"
        >
          <Users size={12} className="text-[#39D7FF]" />
          The Team Behind Your Growth
        </motion.div>

        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight max-w-4xl mx-auto leading-[0.95] mb-6">
          We help brands grow <span className="text-gradient-cyan drop-shadow-[0_0_20px_rgba(57,215,255,0.45)]">online</span>
        </h1>
        <p className="text-base sm:text-xl text-[#FFFFFF]/75 max-w-2xl mx-auto leading-relaxed font-sans">
          We are a digital marketing agency based in Karachi. We help businesses reach more customers through social media, content creation, and online campaigns that actually work.
        </p>
      </section>

      {/* 2. OUR STORY SECTION */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-6">
          <h2 className="font-display text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#FFFFFF]">
            We grow your brand the smart way
          </h2>
          <p className="text-sm sm:text-base text-[#FFFFFF]/70 leading-relaxed">
            Most businesses waste money on ads that disappear the moment the budget runs out. We take a different approach — we create content and campaigns that keep working long after they are published.
          </p>
          <p className="text-sm sm:text-base text-[#FFFFFF]/70 leading-relaxed">
            By studying what is trending, creating content people want to share, and placing your brand in front of the right audience, we help you grow without endlessly increasing your ad spend.
          </p>
        </div>

        <div className="relative group rounded-xl overflow-hidden border border-accent-cyan-dim/20 aspect-video lg:aspect-square flex items-center justify-center bg-bg-secondary/20 shadow-glow/5">
          <div className="absolute inset-0 bg-circuit-grid opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent z-10" />
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="w-4/5 h-4/5 relative rounded-lg border border-accent-cyan-dim/30 overflow-hidden shadow-glow"
          >
            <div className="absolute inset-0 bg-accent-cyan/10 z-10 mix-blend-color" />
            {/* Abstract visual representations of data flow */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8 bg-gradient-to-br from-[#0B1A4A]/90 to-[#06112F]/90">
              <span className="font-script text-accent-cyan text-4xl mb-2">Let&apos;s make it viral</span>
              <span className="font-display font-black text-[#FFFFFF]/30 text-5xl uppercase tracking-widest leading-none">
                VIRAL LAB
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. VALUES GRID */}
      <section className="w-full bg-bg-secondary/20 border-y border-accent-cyan-dim/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="font-display text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#FFFFFF] mb-4">
              What We Believe In
            </h2>
            <p className="text-sm text-[#FFFFFF]/60">
              These are the values that guide every campaign we create and every decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <GlowCard key={idx}>
                <div className="w-12 h-12 rounded-lg bg-accent-cyan-glow/10 border border-accent-cyan-dim/30 flex items-center justify-center mb-4">
                  {val.icon}
                </div>
                <h3 className="font-display text-lg font-bold tracking-wider text-[#FFFFFF] uppercase mb-2">
                  {val.title}
                </h3>
                <p className="text-sm text-[#FFFFFF]/70 leading-relaxed">
                  {val.desc}
                </p>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TEAM SECTION */}
      <section className="w-full max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight mb-4">
            Meet Our Team
          </h2>
          <p className="text-sm sm:text-base text-[#FFFFFF]/60">
            A passionate team of marketers, content creators, and strategists who genuinely love what they do.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative group rounded-xl border border-accent-cyan-dim/15 bg-bg-secondary/40 backdrop-blur-sm overflow-hidden flex flex-col p-5 hover:border-accent-cyan-dim/30 transition-all duration-300"
            >
              {/* Image Frame */}
              <div className="relative aspect-square rounded-lg overflow-hidden mb-5 border border-accent-cyan-dim/10">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  className="object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-accent-cyan/10 opacity-60 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none mix-blend-color" />
              </div>

              {/* Bio Details */}
              <h3 className="font-display text-xl font-bold tracking-wider text-[#FFFFFF] uppercase">
                {member.name}
              </h3>
              <span className="text-xs font-bold uppercase tracking-widest text-accent-cyan mb-3">
                {member.role}
              </span>
              <p className="text-sm text-[#FFFFFF]/70 leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. HISTORY / MILESTONES TIMELINE */}
      <section className="w-full bg-bg-secondary/20 border-y border-accent-cyan-dim/10 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-circuit-grid opacity-10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-cyan/3 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10">
          {/* Section header */}
          <div className="text-center mb-16 px-6">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-cyan-dim/30 bg-bg-secondary/40 backdrop-blur-sm text-xs font-bold uppercase tracking-widest text-[#168BFF] mb-5">
              <Star size={11} /> Our Journey
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#FFFFFF]">
              How We Got Here
            </h2>
            <p className="text-xs text-[#FFFFFF]/30 mt-3 tracking-widest uppercase">Scroll to explore â†’</p>
          </div>

          {/* Horizontal scrollable timeline */}
          <div className="relative">
            {/* Left fade */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg-primary/80 to-transparent z-10 pointer-events-none" />
            {/* Right fade */}
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg-primary/80 to-transparent z-10 pointer-events-none" />

            <div className="overflow-x-auto scrollbar-hide pb-4 cursor-grab active:cursor-grabbing">
              <div className="flex items-end px-24 gap-0" style={{ width: "max-content" }}>
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex flex-col items-center"
                    style={{ width: "280px" }}
                  >
                    {/* Card above the spine */}
                    <div className="w-56 rounded-xl border border-accent-cyan-dim/15 bg-bg-secondary/50 backdrop-blur-sm p-5 hover:border-[#39D7FF]/40 hover:shadow-[0_0_15px_rgba(57,215,255,0.15)] transition-all duration-300 mb-6 group">
                      <span className={`inline-block text-xs font-bold uppercase tracking-widest rounded-full px-3 py-1 mb-3 ${
                        index === milestones.length - 1
                          ? "text-[#39D7FF] bg-[#39D7FF]/10 border border-[#39D7FF]/30 shadow-[0_0_10px_rgba(57,215,255,0.2)]"
                          : "text-accent-cyan bg-accent-cyan/10 border border-accent-cyan-dim/20"
                      }`}>
                        {milestone.tag}
                      </span>
                      <h3 className="font-display text-base font-bold tracking-wider text-[#FFFFFF] uppercase mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-xs text-[#FFFFFF]/60 leading-relaxed">
                        {milestone.desc}
                      </p>
                    </div>

                    {/* Connector line from card to node */}
                    <div className="w-px h-6 bg-gradient-to-b from-accent-cyan-dim/40 to-accent-cyan/70" />

                    {/* Node */}
                    <div className="relative flex items-center justify-center my-1 z-10">
                      <div className="absolute w-14 h-14 rounded-full bg-accent-cyan/5 border border-accent-cyan-dim/20 animate-pulse" />
                      <div className="relative w-10 h-10 rounded-full bg-bg-secondary border-2 border-accent-cyan flex items-center justify-center text-accent-cyan shadow-glow">
                        {milestone.icon}
                      </div>
                    </div>

                    {/* Horizontal spine segment */}
                    <div className="flex items-center w-full my-3">
                      {index === 0 && <div className="flex-1" />}
                      {index > 0 && <div className="flex-1 h-px bg-gradient-to-r from-accent-cyan-dim/20 to-accent-cyan-dim/40" />}
                      <div className="w-2 h-2 rounded-full bg-accent-cyan mx-1 shrink-0" />
                      {index < milestones.length - 1 && <div className="flex-1 h-px bg-gradient-to-r from-accent-cyan-dim/40 to-accent-cyan-dim/20" />}
                      {index === milestones.length - 1 && <div className="flex-1" />}
                    </div>

                    {/* Year label below */}
                    <span className="font-display text-sm font-black text-accent-cyan tracking-widest mt-1">
                      {milestone.year}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
