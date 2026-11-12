"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, ArrowRight } from "lucide-react";
import Logo from "../ui/logo";
import Button from "../ui/Button";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Podcast", href: "/podcast" },
  { label: "Insights", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-40 transition-all duration-300">
        {/* Top Announcement Bar */}
        <AnimatePresence>
          {showAnnouncement && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full bg-gradient-to-r from-bg-secondary via-accent-cyan-glow/30 to-bg-secondary border-b border-accent-cyan-dim/20 py-2 px-4 text-center overflow-hidden z-50 backdrop-blur-md"
            >
              <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-3 text-xs pr-6 sm:pr-0">
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-accent-cyan-glow/20 border border-accent-cyan-dim/40 text-[10px] font-bold text-[#39D7FF] uppercase tracking-wider shrink-0">
                  <Sparkles size={11} className="text-[#39D7FF] animate-pulse" />
                  Special Offer
                </span>

                <span className="font-medium text-[11px] sm:text-xs text-white/90 truncate sm:overflow-visible sm:whitespace-normal">
                  For exclusive offers and announcements — Get up to 20% off your first campaign!
                </span>

                <Link
                  href="/contact"
                  className="hidden sm:inline-flex items-center gap-1 font-bold text-[11px] sm:text-xs text-[#39D7FF] hover:text-white transition-colors duration-200 uppercase tracking-wider shrink-0 group ml-1"
                >
                  <span className="underline underline-offset-2">Claim Now</span>
                  <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <button
                  onClick={() => setShowAnnouncement(false)}
                  className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 p-1 text-white/50 hover:text-white transition-colors"
                  aria-label="Dismiss announcement"
                >
                  <X size={14} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Navigation Bar */}
        <div
          className={`transition-all duration-500 ${
            isScrolled
              ? "bg-bg-primary/80 border-b border-accent-cyan-dim/20 backdrop-blur-md shadow-glow-inset py-3"
              : "bg-transparent border-b border-transparent py-4 sm:py-5"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Logo width={190} height={60} />

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative font-sans text-sm font-semibold tracking-wider transition-colors duration-300 uppercase ${
                    isActive ? "text-[#168BFF]" : "text-[#FFFFFF]/80 hover:text-[#39D7FF]"
                  }`}
                >
                  {item.label}
                  {/* Underline grow effect */}
                  <span
                    className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-[#168BFF] to-[#39D7FF] transition-all duration-300 rounded-full ${
                      isActive ? "w-full shadow-[0_0_10px_rgba(57,215,255,0.4)]" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Contact Button CTA */}
          <div className="hidden md:block">
            <Button href="/contact" size="sm" variant="glow">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#FFFFFF] hover:text-[#168BFF] transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#06112F]/95 backdrop-blur-lg z-30 md:hidden flex flex-col justify-center px-8"
          >
            <div className="absolute top-24 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-accent-cyan-dim/20" />
            <nav className="flex flex-col gap-8 text-center">
              {navItems.map((item, index) => {
                const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <motion.div
                    key={item.href}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                  >
                    <Link
                      href={item.href}
                      className={`text-2xl font-display font-bold tracking-widest uppercase ${
                        isActive ? "text-[#168BFF]" : "text-[#FFFFFF] hover:text-[#168BFF]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
              
              {/* Mobile CTA */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ delay: navItems.length * 0.1, duration: 0.4 }}
                className="mt-6 flex justify-center"
              >
                <Button href="/contact" variant="glow" className="w-full max-w-xs">
                  Get Started
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
