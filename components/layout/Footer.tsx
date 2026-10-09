"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import Logo from "../ui/logo";

const footerLinks = [
  {
    title: "Agency",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Meta Ads", href: "/services" },
      { label: "Social Media Marketing", href: "/services" },
      { label: "Website Development", href: "/services" },
      { label: "Graphic Designing", href: "/services" },
      { label: "AI Content & Automation", href: "/services" },
      { label: "UGC Ads Creation", href: "/services" },
      { label: "Video Editing", href: "/services" },
    ],
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: (
        <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      href: "https://www.facebook.com/theviralmarketingpk/",
      label: "Facebook",
    },
    {
      icon: (
        <svg className="w-[18px] h-[18px] stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
      href: "https://www.instagram.com/viralmarketingpk/",
      label: "Instagram",
    },
    {
      icon: (
        <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
        </svg>
      ),
      href: "https://wa.me/923114941631",
      label: "WhatsApp",
    },
  ];

  return (
    <footer className="relative border-t border-accent-cyan-dim/10 bg-bg-primary py-16 overflow-hidden">
      {/* Decorative background grid and glow */}
      <div className="absolute inset-0 bg-circuit-grid opacity-30 pointer-events-none" />
      <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-accent-cyan/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Narrative */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <Logo width={210} height={70} />
            <p className="text-sm text-[#FFFFFF]/60 max-w-sm mt-2 leading-relaxed">
              We engineer hyper-viral marketing systems that capture culture, scale conversations, and transform boutique brands into digital empires.
            </p>

            {/* Social Icons with rotate-in glow */}
            <div className="flex gap-4 mt-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-10 h-10 rounded-lg bg-bg-secondary border border-accent-cyan-dim/20 flex items-center justify-center text-[#FFFFFF]/80 hover:text-[#39D7FF] hover:border-[#39D7FF] transition-all duration-300 shadow-glow/10 hover:shadow-[0_0_15px_rgba(57,215,255,0.3)]"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links Columns */}
          {footerLinks.map((group, groupIndex) => (
            <div key={groupIndex} className="flex flex-col gap-4">
              <h3 className="font-display text-sm font-bold tracking-widest text-accent-cyan uppercase">
                {group.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {group.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#FFFFFF]/75 hover:text-[#39D7FF] hover:pl-1 transition-all duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar with Copyright & Scroll to Top */}
        <div className="pt-8 border-t border-accent-cyan-dim/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs text-[#FFFFFF]/40 text-center sm:text-left">
            &copy; {new Date().getFullYear()}{' '} Viral Marketing Solution. All rights reserved. Let&apos;s make your brand Viral.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-bg-secondary border border-accent-cyan-dim/20 text-xs font-bold tracking-widest uppercase text-[#FFFFFF]/80 hover:text-[#39D7FF] hover:border-[#39D7FF] transition-all duration-300 shadow-glow/5 hover:shadow-[0_0_15px_rgba(57,215,255,0.25)]"
          >
            Back to Top
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
