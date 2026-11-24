

import React from 'react';
import Image from '@/lib/Image';
import { ArrowDown, ArrowRight, Sparkles, Leaf } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onExploreClick: () => void;
  onShopClick: () => void;
}

export default function Hero({ onExploreClick, onShopClick }: HeroProps) {
  return (
    <section 
      id="hero-section"
      className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden min-h-[560px] sm:min-h-[640px] md:min-h-[700px] flex flex-col justify-between p-6 sm:p-10 md:p-12 text-white shadow-2xl transition-all duration-500"
    >
      {/* Dark Lush Tropical Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2000&auto=format&fit=crop"
          alt="Lush green botanical houseplant leaves"
          fill
          priority
          className="object-cover object-center scale-105 transform hover:scale-100 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Soft Dark Vignette Overlay for Crisp Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-[#0d211a]/60 to-[#0c1f18]/85" />
      </div>

      {/* Hero Top Spacer */}
      <div className="relative z-10 pt-8" />

      {/* Hero Main Content (Centered) */}
      <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center justify-center my-auto py-8">
        {/* Subtitle: Petal power */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm font-medium tracking-wide text-white/90 mb-4"
        >
          <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
          <span>Petal power</span>
        </motion.div>

        {/* Massive Headline: growth */}
        <motion.h1
          id="hero-main-title"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-extrabold text-7xl sm:text-9xl md:text-[130px] lg:text-[150px] leading-none tracking-tighter text-white drop-shadow-sm select-none"
        >
          growth
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-white/85 text-xs sm:text-sm md:text-base font-normal max-w-lg sm:max-w-xl mx-auto leading-relaxed mt-4 sm:mt-6"
        >
          We&apos;re your online houseplant destination. We offer a wide range of houseplants and
          accessories shipped directly from our (green)house to yours!
        </motion.p>
      </div>

      {/* Hero Bottom Bar */}
      <div className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-end justify-between gap-4 pt-4">
        {/* Bottom Left Card: 100+ Plants Widget */}
        <motion.div
          id="hero-stats-card"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          whileHover={{ y: -3 }}
          className="bg-black/40 backdrop-blur-md border border-white/15 rounded-2xl p-3.5 sm:p-4 flex items-center justify-between gap-4 max-w-xs shadow-lg group cursor-pointer"
          onClick={onExploreClick}
        >
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-display font-bold text-lg sm:text-xl text-white">100+Plants</span>
            </div>
            <p className="text-[11px] sm:text-xs text-white/70 leading-snug mt-1 max-w-[180px]">
              We want our visitors to be inspired to get their hands dirty
            </p>
          </div>

          {/* Plant Pill Thumbnail */}
          <div className="relative w-12 h-16 sm:w-14 sm:h-18 rounded-xl overflow-hidden border border-white/20 shrink-0">
            <Image
              src="https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=300&auto=format&fit=crop"
              alt="Houseplants collection thumbnail"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        {/* Bottom Right: Down Arrow + "Shop tropical plants" Pill */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-end gap-2.5 sm:gap-3"
        >
          {/* Circular Down Arrow Button */}
          <motion.button
            id="hero-scroll-down-btn"
            whileHover={{ scale: 1.08, y: 2 }}
            whileTap={{ scale: 0.92 }}
            onClick={onExploreClick}
            aria-label="Scroll down to browse categories"
            className="w-11 h-11 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#12231e] hover:border-white transition-all shadow-md shrink-0"
          >
            <ArrowDown className="w-4 h-4" />
          </motion.button>

          {/* Shop Tropical Plants Pill Button */}
          <motion.button
            id="hero-shop-cta-btn"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={onShopClick}
            className="bg-white text-[#12231e] font-semibold text-xs sm:text-sm px-6 py-3 rounded-full hover:bg-[#e4ede8] transition-all shadow-xl flex items-center gap-2 group whitespace-nowrap"
          >
            <span>Shop tropical plants</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
