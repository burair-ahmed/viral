"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "../ui/logo";
import Button from "../ui/Button";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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

  // Close mobile menu on page change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-bg-primary/75 border-b border-accent-cyan-dim/20 backdrop-blur-md shadow-glow-inset py-3"
            : "bg-transparent border-b border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Logo width={120} height={38} />

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative font-sans text-sm font-semibold tracking-wider transition-colors duration-300 uppercase ${
                    isActive ? "text-[#2EE6E6]" : "text-[#F5F9FA]/80 hover:text-[#2EE6E6]"
                  }`}
                >
                  {item.label}
                  {/* Underline grow effect */}
                  <span
                    className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-[2px] bg-[#2EE6E6] transition-all duration-300 rounded-full ${
                      isActive ? "w-full shadow-glow" : "w-0 group-hover:w-full"
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
            className="md:hidden p-2 text-[#F5F9FA] hover:text-[#2EE6E6] transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
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
            className="fixed inset-0 bg-[#071822]/95 backdrop-blur-lg z-30 md:hidden flex flex-col justify-center px-8"
          >
            <div className="absolute top-24 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-accent-cyan-dim/20" />
            <nav className="flex flex-col gap-8 text-center">
              {navItems.map((item, index) => {
                const isActive = pathname === item.href;
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
                        isActive ? "text-[#2EE6E6]" : "text-[#F5F9FA] hover:text-[#2EE6E6]"
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
