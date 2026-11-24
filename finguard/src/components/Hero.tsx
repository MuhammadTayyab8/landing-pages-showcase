

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ArrowRight, ArrowDownRight, Sparkles } from 'lucide-react';
import { CreditCard } from './CreditCard';
import { Tilt } from './Tilt';

interface HeroProps {
  onOpenAuth: (mode?: 'signup' | 'login') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAuth }) => {
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  const avatars = [
    {
      name: 'Sarah M.',
      img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      bg: 'bg-orange-500',
    },
    {
      name: 'David L.',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
      bg: 'bg-emerald-500',
    },
    {
      name: 'Elena K.',
      img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
      bg: 'bg-purple-500',
    },
    {
      name: 'Marcus C.',
      img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
      bg: 'bg-amber-500',
    },
  ];

  const steps = [
    {
      id: 1,
      title: 'Selecting your provider',
      icon: ArrowUpRight,
      desc: 'Link your existing bank account in under 30 seconds via encrypted API.',
    },
    {
      id: 2,
      title: 'Set Up Your Account',
      icon: ArrowRight,
      desc: 'Customize smart spend limits, automated roundups, and savings buckets.',
    },
    {
      id: 3,
      title: 'Enjoy Seamless Banking FinGuard',
      icon: ArrowDownRight,
      desc: 'Instant zero-fee FX transfers, 2% cashback, and 24/7 priority support.',
    },
  ];

  return (
    <section className="relative min-h-screen bg-black text-white pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Subtle Gradient & Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,69,0,0.08),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Decorative 3D Orange Stars matching the screenshot top right */}
      <div className="absolute top-16 right-12 md:top-24 md:right-28 pointer-events-none select-none z-10">
        <motion.div
          animate={{
            y: [0, -8, 0],
            rotate: [0, 5, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative"
        >
          {/* Main 4-pointed 3D Star */}
          <svg width="68" height="68" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_10px_20px_rgba(255,69,0,0.5)]">
            <path
              d="M32 0C32 17.6731 46.3269 32 64 32C46.3269 32 32 46.3269 32 64C32 46.3269 17.6731 32 0 32C17.6731 32 32 17.6731 32 0Z"
              fill="url(#starGradientBig)"
            />
            <defs>
              <linearGradient id="starGradientBig" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF7A33" />
                <stop offset="0.5" stopColor="#FF4500" />
                <stop offset="1" stopColor="#D93800" />
              </linearGradient>
            </defs>
          </svg>

          {/* Secondary smaller 3D Star */}
          <svg width="34" height="34" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -bottom-4 -right-6 drop-shadow-[0_6px_12px_rgba(255,69,0,0.4)]">
            <path
              d="M32 0C32 17.6731 46.3269 32 64 32C46.3269 32 32 46.3269 32 64C32 46.3269 17.6731 32 0 32C17.6731 32 32 17.6731 32 0Z"
              fill="#FF5500"
            />
          </svg>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Main Massive Headline */}
        <div className="text-left mb-10 md:mb-14">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[86px] font-black uppercase tracking-tight leading-[0.93] text-white select-none"
          >
            SECURE YOUR<br />
            FINANCIAL FUTURE
          </motion.h1>
        </div>

        {/* 3-Column Hero Grid: Left Content, Center Card Visual, Right Stepper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* Left Column: Subtitle + CTA + Social Proof */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex flex-col justify-between h-full space-y-8"
          >
            <div className="space-y-6">
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-xs font-normal">
                Trusted Protection and Expert Guidance for Your Finances
              </p>

              {/* Get Started Button */}
              <div className="flex items-center gap-3">
                <button
                  id="hero-get-started-btn"
                  onClick={() => onOpenAuth('signup')}
                  className="group inline-flex items-center bg-[#FF4500] hover:bg-[#FF5500] text-white font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-orange-600/30 hover:shadow-orange-600/50 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>GET STARTED</span>
                </button>
                <button
                  id="hero-arrow-btn"
                  onClick={() => onOpenAuth('signup')}
                  className="w-10 h-10 rounded-full bg-[#FF4500] hover:bg-[#FF5500] flex items-center justify-center text-white transition-transform duration-200 hover:rotate-45 cursor-pointer shadow-lg shadow-orange-600/30"
                  aria-label="Open signup modal"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Active Users Social Proof */}
            <div className="pt-4 sm:pt-8 space-y-2 border-t border-neutral-900/80">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF4500] animate-pulse" />
                <span className="text-xs font-medium text-neutral-400">Active Users</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                  95K+
                </span>

                {/* Avatar pile */}
                <div className="flex items-center -space-x-2.5">
                  {avatars.map((avatar, idx) => (
                    <div
                      key={idx}
                      className="w-8 h-8 rounded-full border-2 border-black overflow-hidden bg-neutral-800 shadow-md relative"
                      title={avatar.name}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={avatar.img}
                        alt={avatar.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Center Column: 3D Floating Credit Cards Stack */}
          <Tilt className="lg:col-span-5 flex items-center justify-center py-6 sm:py-8 lg:py-0 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full max-w-[360px] h-[340px] sm:h-[380px] flex items-center justify-center"
            >
              {/* Back Card: Obsidian Black Card (Jaylen Brown) */}
              <motion.div
                animate={{
                  y: [0, 4, 0],
                  rotate: [6, 4, 6],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute transform z-10"
                style={{
                  top: '120px',
                  right: '0px',
                }}
              >
                <CreditCard
                  type="black"
                  holderName="Jaylen Brown"
                  className="scale-90 sm:scale-95 shadow-black/80 hover:scale-100 hover:z-40 transition-transform duration-300"
                />
              </motion.div>

              {/* Middle Card: Silver/Platinum Card (Ralph Edwards) */}
              <motion.div
                animate={{
                  y: [0, -6, 0],
                  rotate: [-8, -6, -8],
                }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute transform z-20"
                style={{
                  top: '40px',
                  left: '10px',
                }}
              >
                <CreditCard
                  type="silver"
                  holderName="Ralph Edwards"
                  className="scale-90 sm:scale-95 shadow-2xl hover:scale-100 hover:z-40 transition-transform duration-300"
                />
              </motion.div>

              {/* Front Card: Signature Vibrant Orange finguard Card */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [-14, -11, -14],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute transform z-30"
                style={{
                  top: '-15px',
                  left: '30px',
                }}
              >
                <CreditCard
                  type="orange"
                  holderName="Ralph Edwards"
                  className="scale-95 sm:scale-100 shadow-[0_25px_50px_-10px_rgba(255,69,0,0.5)] hover:scale-105 hover:z-40 transition-transform duration-300 cursor-pointer"
                />
              </motion.div>
            </motion.div>
          </Tilt>

          {/* Right Column: Sleek Step Pills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 flex flex-col space-y-3 sm:space-y-4 lg:pl-4"
          >
            {steps.map((step) => {
              const Icon = step.icon;
              const isSelected = selectedStep === step.id;

              return (
                <div
                  key={step.id}
                  onClick={() => setSelectedStep(isSelected ? null : step.id)}
                  className={`group relative p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-neutral-900/90 border-[#FF4500] ring-1 ring-[#FF4500]/50'
                      : 'bg-neutral-950/70 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/60'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs sm:text-sm font-bold text-white tracking-wide group-hover:text-white transition-colors">
                      {step.title}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-neutral-900 border border-neutral-700/80 flex items-center justify-center shrink-0 group-hover:border-[#FF4500] group-hover:text-[#FF4500] transition-colors">
                      <Icon className="w-3.5 h-3.5 text-neutral-300 group-hover:text-[#FF4500] transition-colors" />
                    </div>
                  </div>

                  {isSelected && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-xs text-neutral-400 mt-2.5 pt-2.5 border-t border-neutral-800 leading-relaxed"
                    >
                      {step.desc}
                    </motion.p>
                  )}
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
