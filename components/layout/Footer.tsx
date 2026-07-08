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
      { label: "Growth Hacking", href: "/#services" },
      { label: "Viral Campaigns", href: "/#services" },
      { label: "Social Engine", href: "/#services" },
      { label: "Content Laboratory", href: "/#services" },
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
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      href: "https://twitter.com",
      label: "Twitter",
    },
    {
      icon: (
        <svg className="w-[18px] h-[18px] stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: (
        <svg className="w-[18px] h-[18px] stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
      href: "https://instagram.com",
      label: "Instagram",
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
            <Logo width={125} height={40} />
            <p className="text-sm text-[#F5F9FA]/60 max-w-sm mt-2 leading-relaxed">
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
                  className="w-10 h-10 rounded-lg bg-bg-secondary border border-accent-cyan-dim/20 flex items-center justify-center text-[#F5F9FA]/80 hover:text-accent-cyan hover:border-accent-cyan transition-all duration-300 shadow-glow/10 hover:shadow-glow/30"
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
                      className="text-sm text-[#F5F9FA]/75 hover:text-accent-cyan hover:pl-1 transition-all duration-300"
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
          <p className="text-xs text-[#F5F9FA]/40 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Viral Marketing Agency. All rights reserved. Let&apos;s make your brand Viral.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-bg-secondary border border-accent-cyan-dim/20 text-xs font-bold tracking-widest uppercase text-[#F5F9FA]/80 hover:text-accent-cyan hover:border-accent-cyan transition-all duration-300 shadow-glow/5"
          >
            Back to Top
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
