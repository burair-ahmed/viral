"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Home,
  ArrowLeft,
  Sparkles,
  Compass,
  Mail,
  Zap,
  Terminal,
  Search,
} from "lucide-react";
import Button from "@/components/ui/Button";

export default function NotFound() {
  const router = useRouter();

  const quickLinks = [
    {
      title: "Viral Services",
      desc: "Meta ads, UGC video editing & social media dominance.",
      href: "/services",
      icon: Zap,
      tag: "Popular",
    },
    {
      title: "About Our Agency",
      desc: "Learn about our data-driven growth framework.",
      href: "/about",
      icon: Compass,
      tag: "Story",
    },
    {
      title: "Contact & Free Audit",
      desc: "Get in touch with our team in Karachi for a custom quote.",
      href: "/contact",
      icon: Mail,
      tag: "Let's Talk",
    },
  ];

  return (
    <div className="relative min-h-[calc(100vh-6rem)] w-full flex flex-col items-center justify-center px-4 py-12 md:py-16 overflow-hidden">
      {/* Ambient background glow orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[550px] md:w-[700px] h-[350px] sm:h-[550px] md:h-[700px] bg-radial from-[#168BFF]/15 via-[#39D7FF]/5 to-transparent blur-3xl -z-10"
      />
      
      {/* Decorative cyber grid lines */}
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-circuit-grid opacity-30 -z-10" 
      />

      <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Terminal status badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-bg-secondary/70 border border-accent-cyan/30 text-accent-highlight text-xs font-mono uppercase tracking-widest backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(22,139,255,0.2)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39D7FF] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#168BFF]"></span>
          </span>
          <Terminal size={14} className="text-[#39D7FF]" />
          <span>Error 404 // Signal Lost</span>
        </motion.div>

        {/* Big Holographic 404 Hero Display */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative select-none my-2 sm:my-4"
        >
          {/* Background Blurred Aura */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#168BFF]/20 via-[#39D7FF]/30 to-[#168BFF]/20 blur-2xl transform scale-110 pointer-events-none" />

          {/* 404 Typography */}
          <div className="relative font-display font-black text-8xl sm:text-9xl md:text-[13rem] leading-none tracking-tighter">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-[#8ec5fc] to-[#168BFF] drop-shadow-[0_0_35px_rgba(22,139,255,0.45)]">
              4
            </span>
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-b from-[#39D7FF] via-[#168BFF] to-[#0B1A4A] drop-shadow-[0_0_45px_rgba(57,215,255,0.6)] mx-1">
              0
              {/* Radar pulse scanning effect inside the zero */}
              <motion.span
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.4, 0.9, 0.4],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-2 sm:inset-4 rounded-full border border-[#39D7FF]/40 pointer-events-none -z-10"
              />
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-[#8ec5fc] to-[#168BFF] drop-shadow-[0_0_35px_rgba(22,139,255,0.45)]">
              4
            </span>
          </div>

          {/* Floating cyber satellite badge */}
          <motion.div
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-3 right-0 sm:right-6 bg-[#0B1A4A]/90 border border-accent-cyan/40 px-3 py-1 rounded-md text-[11px] font-mono text-[#39D7FF] shadow-glow backdrop-blur-sm hidden sm:flex items-center gap-1.5"
          >
            <Sparkles size={12} className="text-[#39D7FF]" />
            <span>PAGE_NOT_FOUND</span>
          </motion.div>
        </motion.div>

        {/* Heading & Subtext */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-xl mx-auto space-y-3"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight">
            This page didn&apos;t go viral.
            <span className="block text-gradient-cyan mt-1">It vanished into the void.</span>
          </h1>

          <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
            The link you clicked might be outdated, misspelled, or removed. Don&apos;t worry — our marketing algorithms will get you right back to the good stuff.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Button href="/" variant="glow" size="md" className="gap-2 shadow-glow">
            <Home size={18} />
            Back to Homepage
          </Button>

          <Button
            onClick={() => router.back()}
            variant="sheen"
            size="md"
            className="gap-2"
          >
            <ArrowLeft size={18} />
            Previous Page
          </Button>
        </motion.div>

        {/* Quick Nav Destination Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 w-full"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-accent-cyan-dim/40" />
            <span className="text-xs uppercase tracking-widest font-mono text-gray-400">
              Or Explore Popular Destinations
            </span>
            <div className="h-[1px] w-12 bg-accent-cyan-dim/40" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            {quickLinks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={idx}
                  href={item.href}
                  className="group relative p-5 rounded-xl bg-[#0B1A4A]/40 border border-accent-cyan-dim/20 hover:border-accent-cyan/60 backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_25px_rgba(22,139,255,0.25)] hover:-translate-y-1 flex flex-col justify-between"
                >
                  {/* Subtle hover gradient flare */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent-cyan/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-lg bg-accent-cyan-glow/30 border border-accent-cyan/30 flex items-center justify-center text-accent-highlight group-hover:scale-110 group-hover:bg-accent-cyan group-hover:text-white transition-all duration-300">
                        <Icon size={20} />
                      </div>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-300 group-hover:border-accent-cyan/40 group-hover:text-accent-cyan transition-colors">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-white text-base group-hover:text-accent-highlight transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center text-xs font-semibold text-accent-cyan group-hover:text-accent-highlight">
                    <span>Navigate</span>
                    <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </motion.div>

        {/* Minimal Diagnostic Footer Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center text-xs font-mono text-gray-500 flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
        >
          <span>HTTP STATUS: 404</span>
          <span className="hidden sm:inline">•</span>
          <span>PROTOCOL: HTTPS/2</span>
          <span className="hidden sm:inline">•</span>
          <span>LOCATION: VIRAL MARKETING NETWORK</span>
        </motion.div>
      </div>
    </div>
  );
}
