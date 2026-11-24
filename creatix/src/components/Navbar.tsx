

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CreatixBurst } from './Icons';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenInquiry?: () => void;
}

export default function Navbar({ onOpenInquiry }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#masterpieces' },
    { name: 'Reviews', href: '#reviews' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center py-4 px-4 pointer-events-none">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`pointer-events-auto flex items-center justify-between gap-6 md:gap-8 px-6 py-2.5 rounded-full border transition-all duration-300 backdrop-blur-md shadow-2xl ${
          scrolled
            ? 'bg-[#0d0f12]/90 border-white/15 shadow-black/60'
            : 'bg-[#111317]/95 border-white/10'
        }`}
      >
        {/* Left Links on Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#about"
            className="text-sm font-medium text-neutral-300 hover:text-white transition-colors duration-200"
          >
            About Us
          </a>
          <a
            href="#services"
            className="text-sm font-medium text-neutral-300 hover:text-white transition-colors duration-200"
          >
            Services
          </a>
        </div>

        {/* Center Logo */}
        <a
          href="#"
          className="flex items-center gap-2 group transition-transform active:scale-95"
        >
          <div className="text-[#b8ff2c] transition-transform duration-500 group-hover:rotate-45">
            <CreatixBurst className="w-5 h-5 text-[#b8ff2c]" />
          </div>
          <span className="text-lg font-bold tracking-tight text-white font-display">
            Creatix
          </span>
        </a>

        {/* Right Links on Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#masterpieces"
            className="text-sm font-medium text-neutral-300 hover:text-white transition-colors duration-200"
          >
            Projects
          </a>
          <a
            href="#reviews"
            className="text-sm font-medium text-neutral-300 hover:text-white transition-colors duration-200"
          >
            Reviews
          </a>
        </div>

        {/* CTA or Mobile Toggle */}
        <div className="flex items-center gap-2">
          {onOpenInquiry && (
            <button
              onClick={onOpenInquiry}
              className="hidden lg:flex items-center gap-1 text-xs font-semibold bg-[#b8ff2c] text-black px-3.5 py-1.5 rounded-full hover:bg-[#c9ff4d] transition-all hover:scale-105"
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          )}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-neutral-300 hover:text-white p-1"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="pointer-events-auto absolute top-20 left-4 right-4 max-w-sm mx-auto bg-[#14171c] border border-white/15 rounded-3xl p-6 shadow-2xl backdrop-blur-xl md:hidden z-50"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-neutral-200 hover:text-[#b8ff2c] text-base font-medium py-2 px-3 rounded-xl hover:bg-white/5 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenInquiry?.();
                  }}
                  className="w-full text-center text-sm font-semibold bg-[#b8ff2c] text-black py-3 rounded-full hover:bg-[#c9ff4d] transition-transform active:scale-95"
                >
                  Start Your Project
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
