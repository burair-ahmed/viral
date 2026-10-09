"use client";

import { motion } from "framer-motion";
import {
  Target,
  Share2,
  Globe,
  Palette,
  Bot,
  Video,
  Scissors,
  Star,
  Quote,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: "target",
    title: "Meta Ads",
    tagline: "Precision-targeted campaigns that convert.",
    description:
      "We engineer data-driven Meta advertising campaigns across Facebook and Instagram that reach the right audience at the right moment. From creative strategy to pixel tracking, we own every layer of your paid funnel.",
    features: [
      "Custom audience & lookalike targeting",
      "A/B tested ad creatives",
      "Retargeting funnels",
      "Full-funnel ROAS optimization",
    ],
    gradient: "from-[#168BFF]/20 to-[#39D7FF]/5",
    border: "border-[#168BFF]/30",
    glow: "hover:shadow-[0_0_40px_rgba(22,139,255,0.2)]",
    iconColor: "text-[#168BFF]",
  },
  {
    icon: "share2",
    title: "Social Media Marketing",
    tagline: "Build a brand that the internet talks about.",
    description:
      "We take your brand presence from invisible to unavoidable. Our social media managers craft scroll-stopping content, manage your community, and turn followers into loyal customers — organically and at scale.",
    features: [
      "Monthly content calendars",
      "Platform-native content strategy",
      "Community management & engagement",
      "Analytics & monthly reporting",
    ],
    gradient: "from-[#39D7FF]/20 to-[#168BFF]/5",
    border: "border-[#39D7FF]/30",
    glow: "hover:shadow-[0_0_40px_rgba(57,215,255,0.2)]",
    iconColor: "text-[#39D7FF]",
  },
  {
    icon: "globe",
    title: "Website Development",
    tagline: "Your digital HQ — fast, beautiful, and built to convert.",
    description:
      "We design and develop modern, high-performance websites that generate leads, build credibility, and scale with your business. From landing pages to full eCommerce platforms.",
    features: [
      "Custom UI/UX design",
      "Next.js & React development",
      "SEO-optimized architecture",
      "CMS integration & eCommerce",
    ],
    gradient: "from-[#a78bfa]/20 to-[#39D7FF]/5",
    border: "border-[#a78bfa]/30",
    glow: "hover:shadow-[0_0_40px_rgba(167,139,250,0.2)]",
    iconColor: "text-[#a78bfa]",
  },
  {
    icon: "palette",
    title: "Graphic Designing",
    tagline: "Visuals that stop the scroll and sell the story.",
    description:
      "Great design is the silent salesperson that never sleeps. Our designers craft brand identities, social visuals, ad creatives, and packaging that communicate your value instantly — and memorably.",
    features: [
      "Brand identity & logo design",
      "Social media templates & creatives",
      "Ad banners & marketing collateral",
      "Packaging & print design",
    ],
    gradient: "from-[#f472b6]/20 to-[#a78bfa]/5",
    border: "border-[#f472b6]/30",
    glow: "hover:shadow-[0_0_40px_rgba(244,114,182,0.2)]",
    iconColor: "text-[#f472b6]",
  },
  {
    icon: "bot",
    title: "AI Content & Automation",
    tagline: "Scale your output without scaling your team.",
    description:
      "We harness the power of AI to create content at speed and automate repetitive marketing workflows — email sequences, chatbots, content pipelines — so you can focus on what matters most.",
    features: [
      "AI-powered copywriting & scripting",
      "Automated content pipelines",
      "Chatbot & lead nurturing flows",
      "AI video & image generation",
    ],
    gradient: "from-[#34d399]/20 to-[#39D7FF]/5",
    border: "border-[#34d399]/30",
    glow: "hover:shadow-[0_0_40px_rgba(52,211,153,0.2)]",
    iconColor: "text-[#34d399]",
  },
  {
    icon: "video",
    title: "UGC Ads Creation",
    tagline: "Authentic content that audiences trust and share.",
    description:
      "User-Generated Content ads perform because they feel real. We produce high-converting UGC-style videos built to dominate TikTok, Reels, and Facebook feeds with native content that converts.",
    features: [
      "UGC script writing",
      "On-camera & voiceover talent",
      "Native-format ad production",
      "Hook testing & iteration",
    ],
    gradient: "from-[#fb923c]/20 to-[#f472b6]/5",
    border: "border-[#fb923c]/30",
    glow: "hover:shadow-[0_0_40px_rgba(251,146,60,0.2)]",
    iconColor: "text-[#fb923c]",
  },
  {
    icon: "scissors",
    title: "Professional Video Editing",
    tagline: "Raw footage transformed into viral-ready content.",
    description:
      "Our editors craft narratives that hold attention and drive action. From social short-form reels to long-form brand films, we deliver polished, high-energy video content engineered to go viral.",
    features: [
      "Short-form Reels & TikTok editing",
      "Color grading & sound design",
      "Motion graphics & subtitles",
      "Long-form YouTube & brand video",
    ],
    gradient: "from-[#facc15]/20 to-[#fb923c]/5",
    border: "border-[#facc15]/30",
    glow: "hover:shadow-[0_0_40px_rgba(250,204,21,0.2)]",
    iconColor: "text-[#facc15]",
  },
];

const testimonials = [
  {
    name: "Haris Mehmood",
    role: "CEO, NovaTech Solutions",
    rating: 5,
    text: "Viral Marketing completely transformed our online presence. Our Meta Ads ROAS went from 1.8x to 6.2x in just 60 days. The team genuinely understands performance marketing at a deep level.",
  },
  {
    name: "Sana Farooq",
    role: "Founder, Glamour Studio PK",
    rating: 5,
    text: "The UGC ads they created felt so authentic — customers kept asking who made those videos. Our Instagram conversions doubled within the first month. Absolutely worth every rupee.",
  },
  {
    name: "Bilal Rana",
    role: "Director, RanaFoods",
    rating: 5,
    text: "We hired them for website development and social media management. Six months later, our website traffic is up 340% and we get daily DM inquiries. World-class team.",
  },
  {
    name: "Ayesha Tariq",
    role: "Brand Manager, LuxeWear",
    rating: 5,
    text: "Their graphic design team understood our brand identity immediately. Every creative looks premium and on-brand. People ask if we work with an international agency — we say yes, kind of.",
  },
  {
    name: "Usman Khalid",
    role: "Owner, UrbanKitchen Lahore",
    rating: 5,
    text: "The AI Content & Automation setup saved us 20 hours a week. Our email flows, chatbot, and social posting are all automated now. Revenue per customer increased significantly.",
  },
  {
    name: "Mariam Siddiqui",
    role: "Founder, GlowCosmetics",
    rating: 5,
    text: "Three of our Reels crossed 500K views thanks to their editing and hook strategy. Professional video editing that actually goes viral — that is rare and they deliver it consistently.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: "easeOut" },
  }),
};

function ServiceIcon({ icon, className }: { icon: string; className: string }) {
  const props = { size: 32, className };
  switch (icon) {
    case "target": return <Target {...props} />;
    case "share2": return <Share2 {...props} />;
    case "globe": return <Globe {...props} />;
    case "palette": return <Palette {...props} />;
    case "bot": return <Bot {...props} />;
    case "video": return <Video {...props} />;
    case "scissors": return <Scissors {...props} />;
    default: return <Target {...props} />;
  }
}

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen bg-bg-primary overflow-hidden">
      <div className="absolute inset-0 bg-circuit-grid opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      {/* HERO */}
      <section className="relative pt-36 pb-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan text-xs font-bold tracking-[0.2em] uppercase mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
          What We Do
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl md:text-6xl font-black text-white leading-tight mb-6"
        >
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#168BFF] to-[#39D7FF]">
            Services
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-[#FFFFFF]/60 text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Every service we offer is engineered with one goal — to make your
          brand impossible to ignore. We do not offer generic packages; we
          build growth systems tailored to your market.
        </motion.p>
      </section>

      {/* SERVICES GRID */}
      <section className="relative px-6 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className={`relative group rounded-2xl border ${service.border} bg-gradient-to-br ${service.gradient} backdrop-blur-sm p-8 flex flex-col gap-5 transition-all duration-500 ${service.glow} cursor-default`}
            >
              <div className="w-14 h-14 rounded-xl bg-bg-primary/60 border border-white/10 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform duration-300">
                <ServiceIcon icon={service.icon} className={service.iconColor} />
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-white mb-1">
                  {service.title}
                </h2>
                <p className={`text-sm font-semibold ${service.iconColor}`}>
                  {service.tagline}
                </p>
              </div>

              <p className="text-[#FFFFFF]/65 text-sm leading-relaxed flex-1">
                {service.description}
              </p>

              <ul className="flex flex-col gap-2 mt-1">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-[#FFFFFF]/75">
                    <CheckCircle size={15} className="text-accent-cyan mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl border border-accent-cyan/20 bg-gradient-to-br from-[#168BFF]/10 to-[#39D7FF]/5 p-12 text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-circuit-grid opacity-20 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-accent-cyan/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-4xl font-black text-white mb-4">
                Ready to go{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#168BFF] to-[#39D7FF]">
                  Viral?
                </span>
              </h2>
              <p className="text-[#FFFFFF]/60 text-base mb-8 max-w-xl mx-auto">
                Book a free strategy call and we will show you exactly what is possible for your brand.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#168BFF] to-[#39D7FF] text-white font-bold text-sm tracking-wider uppercase shadow-[0_0_30px_rgba(57,215,255,0.35)] hover:shadow-[0_0_50px_rgba(57,215,255,0.5)] hover:scale-105 transition-all duration-300"
              >
                Get a Free Strategy Call
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative px-6 pb-28">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan text-xs font-bold tracking-[0.2em] uppercase mb-5"
            >
              <Star size={12} className="fill-current" />
              Client Reviews
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-3xl md:text-5xl font-black text-white"
            >
              What Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#168BFF] to-[#39D7FF]">
                Clients Say
              </span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                className="relative group rounded-2xl border border-accent-cyan-dim/15 bg-bg-secondary/50 backdrop-blur-sm p-7 flex flex-col gap-5 hover:border-accent-cyan/30 hover:shadow-[0_0_30px_rgba(57,215,255,0.1)] transition-all duration-300"
              >
                <Quote size={24} className="text-accent-cyan/40" />

                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <Star key={si} size={14} className="text-[#facc15] fill-[#facc15]" />
                  ))}
                </div>

                <p className="text-[#FFFFFF]/75 text-sm leading-relaxed flex-1 italic">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#168BFF] to-[#39D7FF] flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{t.name}</p>
                    <p className="text-[#FFFFFF]/45 text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

