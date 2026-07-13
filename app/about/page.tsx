"use client";

import { motion } from "framer-motion";
import { Users, Lightbulb, Zap, Rocket, Star, Heart } from "lucide-react";
import GlowCard from "@/components/ui/GlowCard";
import Image from "next/image";

const teamMembers = [
  {
    name: "Ashraf Jabbar Qureshi",
    role: "Chairman & Founder",
    bio: "Serial entrepreneur with ventures spanning real estate, construction, and global retail. Founded Viral Marketing driven by a lifelong obsession with building things that last — and ideas that spread.",
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
    bio: "Engineer by training, operator by instinct. Armash runs the systems that keep campaigns moving at scale — precision, creativity, and relentless execution baked into every workflow.",
    image: "/7.webp",
  },
];

const values = [
  {
    icon: <Zap className="text-accent-cyan" size={24} />,
    title: "Viral Velocity",
    desc: "Speed is the currency of the internet. We deploy systems in hours, not months.",
  },
  {
    icon: <Lightbulb className="text-accent-cyan" size={24} />,
    title: "Attention Arbitrage",
    desc: "We look for underpriced attention pools and engineer high-yielding organic loops.",
  },
  {
    icon: <Rocket className="text-accent-cyan" size={24} />,
    title: "Data-Driven Madness",
    desc: "Creative without metrics is noise. We validate memes, structures, and systems with hard data.",
  },
];

const milestones = [
  { year: "2024", title: "Agency Foundation", desc: "Started by three growth hackers in a garage." },
  { year: "2025", title: "First 100M Campaign", desc: "Engineered the organic loop for a leading web3 protocol." },
  { year: "2026", title: "Viral Lab Expansion", desc: "Built our bespoke content labs in London and Berlin." },
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
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-cyan-dim/30 bg-bg-secondary/40 backdrop-blur-sm text-xs font-bold uppercase tracking-widest text-[#2EE6E6] mb-8"
        >
          <Users size={12} />
          The Minds Behind the Buzz
        </motion.div>

        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight max-w-4xl leading-[0.95] mb-6">
          We turn traffic into <span className="text-gradient-cyan drop-shadow-[0_0_15px_rgba(46,230,230,0.3)]">movements</span>
        </h1>
        <p className="text-base sm:text-xl text-[#F5F9FA]/75 max-w-2xl mx-auto leading-relaxed font-sans">
          Viral Marketing was founded on a simple premise: traditional advertising is dead. Today, brands must be dynamic, responsive, and deeply integrated into internet culture.
        </p>
      </section>

      {/* 2. OUR STORY SECTION */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-6">
          <h2 className="font-display text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#F5F9FA]">
            We exist to disrupt the algorithm
          </h2>
          <p className="text-sm sm:text-base text-[#F5F9FA]/70 leading-relaxed">
            The algorithms that dictate what people see are governed by engagement, relevance, and velocity. Standard advertising treats these as obstacles to buy over. We treat them as rules of a game we intend to win.
          </p>
          <p className="text-sm sm:text-base text-[#F5F9FA]/70 leading-relaxed">
            By analyzing trending subcultures, engineering viral feedback loops, and crafting high-fidelity content, we help brands get noticed naturally, scaling their userbases without inflating their advertising budgets.
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
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8 bg-gradient-to-br from-[#0B2A3B]/90 to-[#071822]/90">
              <span className="font-script text-accent-cyan text-4xl mb-2">Let&apos;s make it viral</span>
              <span className="font-display font-black text-[#F5F9FA]/30 text-5xl uppercase tracking-widest leading-none">
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
            <h2 className="font-display text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#F5F9FA] mb-4">
              Our Core Architecture
            </h2>
            <p className="text-sm text-[#F5F9FA]/60">
              These principles guide our campaigns, layouts, animations, and growth Blueprints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <GlowCard key={idx}>
                <div className="w-12 h-12 rounded-lg bg-accent-cyan-glow/10 border border-accent-cyan-dim/30 flex items-center justify-center mb-4">
                  {val.icon}
                </div>
                <h3 className="font-display text-lg font-bold tracking-wider text-[#F5F9FA] uppercase mb-2">
                  {val.title}
                </h3>
                <p className="text-sm text-[#F5F9FA]/70 leading-relaxed">
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
            Meet the Attention Engineers
          </h2>
          <p className="text-sm sm:text-base text-[#F5F9FA]/60">
            A boutique team of distribution scientists, meme researchers, and growth operators.
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
              <h3 className="font-display text-xl font-bold tracking-wider text-[#F5F9FA] uppercase">
                {member.name}
              </h3>
              <span className="text-xs font-bold uppercase tracking-widest text-accent-cyan mb-3">
                {member.role}
              </span>
              <p className="text-sm text-[#F5F9FA]/70 leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. HISTORY / MILESTONES TIMELINE */}
      <section className="w-full bg-bg-secondary/20 border-y border-accent-cyan-dim/10 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-circuit-grid opacity-10 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#F5F9FA]">
              Our Trajectory
            </h2>
          </div>

          <div className="relative border-l border-accent-cyan-dim/20 pl-8 flex flex-col gap-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative">
                {/* Timeline node */}
                <div className="absolute -left-12 top-1.5 w-8 h-8 rounded-lg bg-bg-secondary border border-accent-cyan flex items-center justify-center text-xs font-bold text-accent-cyan shadow-glow">
                  {milestone.year.substring(2)}
                </div>
                
                <h3 className="font-display text-lg font-bold tracking-wider text-[#F5F9FA] uppercase">
                  {milestone.title}
                </h3>
                <span className="text-xs font-bold text-accent-cyan/70 uppercase tracking-widest block mb-2">
                  {milestone.year}
                </span>
                <p className="text-sm text-[#F5F9FA]/60 max-w-lg leading-relaxed">
                  {milestone.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
