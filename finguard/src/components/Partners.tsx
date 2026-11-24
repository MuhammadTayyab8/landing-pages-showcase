

import React from 'react';
import { motion } from 'motion/react';
import { Users2, ArrowUpRight } from 'lucide-react';

interface PartnersProps {
  onOpenPartnerModal: () => void;
}

export const Partners: React.FC<PartnersProps> = ({ onOpenPartnerModal }) => {
  return (
    <section id="partners" className="py-20 md:py-28 bg-[#09090A] text-white overflow-hidden border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-2">
              OUR TRUSTED PARTNERS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-[1.05]">
              REAL-TIME FINANCIAL<br />MONITORING
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-normal">
              Just like us, finguard believes in building long-term relationships with clients. Their focus on customer service aligns perfectly with our own value.
            </p>
          </div>
        </div>

        {/* 6-Card Bento Grid matching screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: 98% Satisfaction (Dark) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="bg-[#121214] border border-neutral-800 rounded-3xl p-8 sm:p-9 flex flex-col justify-between shadow-xl group"
          >
            <div className="w-10 h-10 rounded-xl bg-neutral-800/80 flex items-center justify-center mb-6">
              <Users2 className="w-5 h-5 text-neutral-300" />
            </div>

            <div className="my-auto py-2">
              <div className="flex items-start mb-2">
                <span className="text-5xl sm:text-6xl font-black tracking-tight leading-none text-white">
                  98
                </span>
                <span className="text-2xl sm:text-3xl font-black text-neutral-300 ml-0.5 mt-0.5">
                  %
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-medium">
              Partners are happy with our collaboration, noting increased efficiency and mutual growth since joining us.
            </p>
          </motion.div>

          {/* Card 2: Apple Pay (Vibrant Orange) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="bg-[#FF4500] rounded-3xl p-8 sm:p-9 flex items-center justify-center min-h-[220px] sm:min-h-[240px] shadow-xl shadow-orange-600/20 group cursor-pointer border border-orange-400/30"
          >
            <div className="flex items-center gap-2 text-white font-semibold text-3xl sm:text-4xl tracking-tight select-none">
              {/* Apple Logo SVG */}
              <svg viewBox="0 0 170 170" width="38" height="38" fill="currentColor" className="shrink-0">
                <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.6-7.85-11.71-14.42-6.19-9.87-10.87-20.98-14.04-33.32-3.17-12.34-4.76-23.77-4.76-34.29 0-15.11 3.96-27.42 11.89-36.93 7.92-9.5 17.5-14.37 28.73-14.6 4.9.12 10.36 1.48 16.39 4.09 6.03 2.61 10.01 4.04 11.96 4.29 1.41-.33 5.56-1.87 12.44-4.63 6.89-2.76 12.47-3.99 16.75-3.69 12.82.98 23.01 5.67 30.56 14.09-11.09 6.74-16.52 16.09-16.3 28.05.22 9.57 3.92 17.61 11.09 24.13 7.18 6.53 15.77 10.22 25.77 11.09-2.18 6.52-4.8 12.83-7.87 18.91zM119.22 33.02c0-7.39 2.67-14.4 8.01-21.03 5.33-6.63 12.18-10.98 20.54-13.04.22 1.09.33 2.18.33 3.26 0 7.39-2.83 14.57-8.48 21.52-5.65 6.96-12.61 11.2-20.87 12.72-.22-1.09-.33-2.18-.33-3.43z" />
              </svg>
              <span className="font-bold tracking-tight">Pay</span>
            </div>
          </motion.div>

          {/* Card 3: PayPal (Vibrant Orange) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="bg-[#FF4500] rounded-3xl p-8 sm:p-9 flex items-center justify-center min-h-[220px] sm:min-h-[240px] shadow-xl shadow-orange-600/20 group cursor-pointer border border-orange-400/30"
          >
            {/* Stylized Dual P PayPal icon */}
            <svg viewBox="0 0 100 100" width="56" height="56" fill="white">
              <path d="M72.5 31.8c-.8 5.7-3.1 9.9-6.9 12.7-4.2 3.1-9.9 4.6-17.2 4.6h-7.6l-5.6 35.5h-15l14.2-90h26.4c7.6 0 13.5 1.5 17.7 4.5 4.1 3 6.2 7.2 5.5 12.7h-11.5z" />
              <path d="M83.2 42.5c-.8 5.7-3.1 9.9-6.9 12.7-4.2 3.1-9.9 4.6-17.2 4.6h-7.6l-5.6 35.5H41l10-63.5h16.2c7.6 0 13.5 1.5 17.7 4.5 4.2 3.1 6.3 7.3 5.6 12.8l-7.3-.1z" opacity="0.75" />
            </svg>
          </motion.div>

          {/* Card 4: Wise / Fast Transfer '7' style bolt (Vibrant Orange) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="bg-[#FF4500] rounded-3xl p-8 sm:p-9 flex items-center justify-center min-h-[220px] sm:min-h-[240px] shadow-xl shadow-orange-600/20 group cursor-pointer border border-orange-400/30"
          >
            {/* Stylized Sharp Fast Bolt '7' Logo */}
            <svg viewBox="0 0 100 100" width="56" height="56" fill="white">
              <path d="M22 25 L78 25 L48 55 L70 55 L32 85 L44 55 L22 55 Z" />
            </svg>
          </motion.div>

          {/* Card 5: Google Pay (Vibrant Orange) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="bg-[#FF4500] rounded-3xl p-8 sm:p-9 flex items-center justify-center min-h-[220px] sm:min-h-[240px] shadow-xl shadow-orange-600/20 group cursor-pointer border border-orange-400/30"
          >
            <div className="flex items-center gap-2 text-white font-bold text-3xl sm:text-4xl tracking-tight select-none">
              <span className="font-black text-4xl">G</span>
              <span className="font-medium tracking-normal text-3xl">Pay</span>
            </div>
          </motion.div>

          {/* Card 6: "CREATING IMPACTFUL SOLUTIONS AND LASTING PARTNERSHIPS" (Dark) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            whileHover={{ y: -4 }}
            className="bg-[#121214] border border-neutral-800 rounded-3xl p-8 sm:p-9 flex flex-col justify-between shadow-xl"
          >
            <div className="mb-6">
              <h4 className="text-base sm:text-lg font-black uppercase tracking-tight text-white leading-snug">
                CREATING IMPACTFUL<br />SOLUTIONS AND LASTING<br />PARTNERSHIPS
              </h4>
            </div>

            <div className="pt-4">
              <button
                id="partners-work-together-btn"
                onClick={onOpenPartnerModal}
                className="w-full bg-white hover:bg-neutral-100 text-neutral-900 font-extrabold text-xs uppercase tracking-wider py-4 px-6 rounded-full transition-all duration-200 shadow-md transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                LETS WORK TOGETHER
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
