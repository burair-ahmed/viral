"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, MessageSquare } from "lucide-react";
import Button from "@/components/ui/Button";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "How quickly can our brand expect to see viral results?",
    answer:
      "While every brand has a unique audience, our clients typically see their first breakout viral video (ranging from 100K+ to 1.5M+ views) within the first 14 to 28 days of launching our testing framework. We test multiple hook variations per week to rapidly identify what the algorithm is rewarding in your niche.",
  },
  {
    question: "Do we need to provide our own video footage, or do you handle everything?",
    answer:
      "We provide true end-to-end production. Our team handles creative ideation, scriptwriting, professional on-camera creators from our 150+ creator roster, filming, audio design, and retention-focused video editing. If you prefer to provide your own raw footage or product samples, we will happily polish and format them into viral assets.",
  },
  {
    question: "How does your pricing model work?",
    answer:
      "Our retainers are 100% transparent and start from PKR 75k to PKR 200k+ per month depending on video volume, creator tier requirements, and ad scaling support. We do not lock you into rigid bureaucratic long-term contracts; we earn your business month after month through real performance.",
  },
  {
    question: "Can viral marketing work for niche B2B or local Pakistan brands?",
    answer:
      "Absolutely. In fact, niche and B2B brands often achieve the highest ROI. Decision-makers and founders spend their evenings scrolling TikTok and Reels just like everyone else. By translating complex B2B value propositions into compelling storytelling hooks, we generate qualified, high-ticket leads at a fraction of traditional advertising costs.",
  },
  {
    question: "What is your revision and creative approval workflow?",
    answer:
      "You always have full editorial control. Before any video goes live, we share scripts and draft cuts through our private client portal. You can leave timestamped feedback, and our editors turn around revisions within 24 hours.",
  },
  {
    question: "How do you track and verify organic performance?",
    answer:
      "We provide weekly executive dashboards detailing organic impressions, average watch time, audience retention drops, profile visits, and website conversions. No vanity numbers or confusing agency jargon — just clear, bottom-line metrics.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative w-full max-w-5xl mx-auto px-6 py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-cyan/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-cyan-dim/30 bg-bg-secondary/40 backdrop-blur-sm text-xs font-bold uppercase tracking-widest text-[#168BFF] mb-4">
          <HelpCircle size={12} className="text-[#39D7FF]" />
          Frequently Asked Questions
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
          Everything you need <br />
          <span className="text-gradient-cyan drop-shadow-[0_0_20px_rgba(57,215,255,0.45)]">
            to know before scaling
          </span>
        </h2>
        <p className="text-sm sm:text-base text-white/60 leading-relaxed">
          Got questions? Here are honest answers about our process, expectations, timelines, and how we deliver measurable viral growth.
        </p>
      </div>

      {/* FAQ Accordion List */}
      <div className="flex flex-col gap-4 relative z-10 mb-16">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? "border-[#39D7FF]/50 bg-bg-secondary/50 shadow-[0_0_25px_rgba(57,215,255,0.15)]"
                  : "border-accent-cyan-dim/20 bg-bg-secondary/25 hover:border-accent-cyan-dim/40"
              }`}
            >
              <button
                onClick={() => toggleFaq(index)}
                aria-expanded={isOpen}
                className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className="font-display text-base sm:text-lg font-bold text-white uppercase tracking-wide">
                  {faq.question}
                </span>
                <div
                  className={`w-8 h-8 rounded-full border border-accent-cyan-dim/30 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen
                      ? "bg-accent-cyan text-bg-primary rotate-180"
                      : "bg-bg-primary/50 text-white/70"
                  }`}
                >
                  <ChevronDown size={18} />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-xs sm:text-sm text-white/75 leading-relaxed font-sans border-t border-accent-cyan-dim/15 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Direct Contact Callout */}
      <div className="relative z-10 rounded-2xl border border-accent-cyan-dim/30 bg-gradient-to-r from-bg-secondary/60 via-bg-primary/90 to-bg-secondary/60 p-8 text-center flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-md">
        <div className="text-left">
          <h4 className="font-display text-lg font-bold text-white uppercase tracking-wider mb-1">
            Have a specific question not covered here?
          </h4>
          <p className="text-xs sm:text-sm text-white/60">
            Our founder and growth strategists are available on WhatsApp and email.
          </p>
        </div>
        <Button href="/contact" variant="glow" size="md" className="shrink-0">
          Ask Our Team
        </Button>
      </div>
    </section>
  );
}
