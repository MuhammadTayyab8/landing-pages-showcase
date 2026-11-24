

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, DollarSign, Plane, ShieldCheck } from 'lucide-react';
import { CreditCard } from './CreditCard';

interface BenefitsProps {
  onOpenAuth: (mode?: 'signup' | 'login') => void;
}

export const Benefits: React.FC<BenefitsProps> = ({ onOpenAuth }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const bullets = [
    {
      icon: DollarSign,
      text: 'Get 2% cashback on all purchases.',
      desc: 'Earn instant rewards in USD, EUR, or crypto with every physical and virtual card transaction.',
    },
    {
      icon: Plane,
      text: 'Access exclusive travel deals and discounts on flights and hotels.',
      desc: 'Complimentary lounge passes at 1,400+ airports worldwide and up to 25% off premier airline bookings.',
    },
    {
      icon: ShieldCheck,
      text: 'Includes travel insurance and purchase protection.',
      desc: 'Automatic baggage delay compensation, rental car coverage, and 90-day buyer protection.',
    },
  ];

  return (
    <section id="benefits" className="py-20 md:py-28 bg-white text-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Dual Vertical Credit Cards with Slider dots */}
          <div className="lg:col-span-6 flex items-center justify-center lg:justify-start gap-4 sm:gap-6">
            
            {/* Carousel navigation dots */}
            <div className="flex flex-col gap-3 py-4 select-none">
              <button
                onClick={() => setActiveSlide(0)}
                className={`w-3 h-3 rounded-full transition-all duration-200 cursor-pointer ${
                  activeSlide === 0
                    ? 'bg-[#FF4500] ring-4 ring-[#FF4500]/20 scale-110'
                    : 'bg-neutral-800/40 hover:bg-neutral-800'
                }`}
                aria-label="Slide 1"
              />
              <button
                onClick={() => setActiveSlide(1)}
                className={`w-3 h-3 rounded-full transition-all duration-200 cursor-pointer ${
                  activeSlide === 1
                    ? 'bg-[#FF4500] ring-4 ring-[#FF4500]/20 scale-110'
                    : 'bg-neutral-800/40 hover:bg-neutral-800'
                }`}
                aria-label="Slide 2"
              />
              <button
                onClick={() => setActiveSlide(2)}
                className={`w-3 h-3 rounded-full transition-all duration-200 cursor-pointer ${
                  activeSlide === 2
                    ? 'bg-[#FF4500] ring-4 ring-[#FF4500]/20 scale-110'
                    : 'bg-neutral-800/40 hover:bg-neutral-800'
                }`}
                aria-label="Slide 3"
              />
            </div>

            {/* Visual Card Pair matching screenshot */}
            <div className="relative flex items-center justify-center py-4">
              
              {/* Vertical Orange Card (Front-Left) */}
              <motion.div
                animate={{
                  y: activeSlide === 0 ? [0, -6, 0] : 0,
                  rotate: -6,
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="transform -mr-12 sm:-mr-16 z-20 hover:z-30 transition-transform duration-300"
              >
                <CreditCard
                  type="vertical-orange"
                  className="scale-95 sm:scale-100 hover:scale-105 transition-transform"
                />
              </motion.div>

              {/* Vertical Black Visa Card (Back-Right) */}
              <motion.div
                animate={{
                  y: activeSlide === 1 ? [0, -6, 0] : 0,
                  rotate: 8,
                }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="transform z-10 hover:z-30 transition-transform duration-300"
              >
                <CreditCard
                  type="vertical-black"
                  holderName="Ralph Edwards"
                  className="scale-95 sm:scale-100 hover:scale-105 transition-transform"
                />
              </motion.div>

            </div>
          </div>

          {/* Right Column: Title + Bullet Points + CTA */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 block mb-2">
                BENEFITS
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-neutral-900 leading-[1.05]">
                SHOPPING ON<br />INTERNATIONAL
              </h2>
            </div>

            {/* Feature Bullets with Round Icons */}
            <div className="space-y-6">
              {bullets.map((bullet, idx) => {
                const Icon = bullet.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="flex items-start gap-4 group"
                  >
                    {/* Circle icon badge matching screenshot */}
                    <div className="w-10 h-10 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center shrink-0 group-hover:bg-[#FF4500] group-hover:border-[#FF4500] transition-colors duration-200">
                      <Icon className="w-5 h-5 text-neutral-800 group-hover:text-white transition-colors duration-200" />
                    </div>

                    <div className="space-y-1">
                      <p className="text-sm sm:text-base font-bold text-neutral-900 leading-snug">
                        {bullet.text}
                      </p>
                      <p className="text-xs text-neutral-500 leading-relaxed font-normal">
                        {bullet.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Button: LEARN MORE ↗ */}
            <div className="pt-2">
              <button
                id="benefits-learn-more-btn"
                onClick={() => onOpenAuth('signup')}
                className="group inline-flex items-center gap-3 bg-[#FF4500] hover:bg-[#FF5500] text-white font-extrabold text-xs uppercase tracking-wider px-7 py-4 rounded-full transition-all duration-200 shadow-xl shadow-orange-600/25 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>LEARN MORE</span>
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-200 group-hover:rotate-45">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
