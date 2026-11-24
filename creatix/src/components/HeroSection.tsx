

import React from 'react';
import Image from '@/lib/Image';
import { motion } from 'motion/react';
import { CreatixBurst, CreatixSpark, SquiggleDoodle, HeroDoodleLoop } from './Icons';
import { Star, ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenInquiry?: () => void;
}

export default function HeroSection({ onOpenInquiry }: HeroSectionProps) {
  return (
    <section className="relative w-full pt-20 md:pt-24 px-3 sm:px-4 lg:px-6 pb-2">
      {/* Outer White Card with large rounded bottom */}
      <div className="relative w-full max-w-7xl mx-auto bg-white text-neutral-900 rounded-3xl md:rounded-[48px] overflow-hidden shadow-2xl px-6 sm:px-10 lg:px-14 pt-8 md:pt-12 pb-14 md:pb-18">
        
        {/* Top-Left Lime Starburst Icon */}
        <motion.div
          initial={{ rotate: 0, scale: 0.8, opacity: 0 }}
          animate={{ rotate: 360, scale: 1, opacity: 1 }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
            scale: { duration: 0.6 },
            opacity: { duration: 0.6 },
          }}
          className="absolute top-6 left-6 sm:top-10 sm:left-10 text-[#a8f216] select-none pointer-events-none"
        >
          <CreatixBurst className="w-12 h-12 sm:w-16 sm:h-16 text-[#a8f216]" />
        </motion.div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto pt-6 sm:pt-4 pb-8 sm:pb-12 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold tracking-tight text-neutral-900 leading-[1.08] font-display"
          >
            Empowering Brands{' '}
            <span className="inline-block relative">
              Through Creative Solutions
              {/* Green Sparkle on top right */}
              <motion.span
                animate={{ scale: [1, 1.25, 1], rotate: [0, 15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 -right-6 sm:-right-8 text-[#98e600] inline-block"
              >
                <CreatixSpark className="w-6 h-6 sm:w-8 sm:h-8 text-[#98e600]" />
              </motion.span>
            </span>
          </motion.h1>
        </div>

        {/* 3-Column Hero Layout: Left text, Center photo with doodle loop & action buttons, Right experience badge */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Left Column: Subtext & Innovate button */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3 flex flex-col items-start gap-4 text-left order-2 lg:order-1"
          >
            <div className="text-[#84cc16]">
              <SquiggleDoodle className="w-8 h-8 text-[#84cc16]" />
            </div>
            <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
              From web development to branding, we deliver innovative strategies that elevate
              your brand and drive growth. Let&apos;s create something exceptional together.
            </p>
            <button
              onClick={onOpenInquiry}
              className="mt-2 inline-flex items-center gap-2 px-5 py-2 rounded-full border border-neutral-300 text-xs font-semibold text-neutral-800 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white transition-all active:scale-95"
            >
              <span>Innovate Your Brand</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>

          {/* Center Column: Woman Photo with Hand-Drawn Doodle Loop & Action Pill Group */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center order-1 lg:order-2">
            
            {/* Background Hand-Drawn Loop Doodle */}
            <div className="absolute -inset-6 sm:-inset-10 z-0 pointer-events-none opacity-80">
              <HeroDoodleLoop className="w-full h-full text-neutral-700" />
            </div>

            {/* Main Center Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-64 sm:w-80 md:w-96 aspect-[4/5] rounded-3xl overflow-hidden shadow-xl bg-neutral-100"
            >
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                alt="Empowering Creative Solutions - Creative Executive"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-top hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Bottom floating CTA pill group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative -mt-6 z-20 flex items-center gap-2 p-1.5 bg-[#121417] rounded-full shadow-2xl border border-neutral-800"
            >
              <button
                onClick={onOpenInquiry}
                className="px-5 py-2.5 rounded-full bg-[#b8ff2c] text-black text-xs sm:text-sm font-bold tracking-tight hover:bg-[#cbf74d] hover:shadow-[0_0_20px_rgba(184,255,44,0.4)] transition-all transform hover:scale-105 active:scale-95"
              >
                Start Your Project
              </button>
              <button
                onClick={onOpenInquiry}
                className="px-4 sm:px-5 py-2.5 rounded-full text-white text-xs sm:text-sm font-medium hover:text-[#b8ff2c] hover:bg-white/5 transition-all"
              >
                Let&apos;s Collaborate
              </button>
            </motion.div>
          </div>

          {/* Right Column: 5 Stars + 10 Years Experience Badge */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3 flex flex-col items-start lg:items-end text-left lg:text-right gap-1 order-3"
          >
            {/* 5 Green Stars */}
            <div className="flex items-center gap-1 text-[#84cc16] mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#84cc16] text-[#84cc16]" />
              ))}
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight font-display">
              10 Years
            </div>
            <div className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
              Experience
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
