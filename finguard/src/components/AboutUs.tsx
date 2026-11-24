

import React from 'react';
import { motion } from 'motion/react';
import { User, Zap, Landmark } from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <section id="products" className="py-20 md:py-28 bg-white text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 block mb-2">
              ABOUT US
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-neutral-900 leading-[1.05]">
              GETTING TO<br />KNOW FINGUARD
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              We are more than just a financial service provider; we are your trusted partner in navigating the complexities of finance.
            </p>
          </div>
        </div>

        {/* 3 Metric Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: Vibrant Orange 500k users card (Spans 6 cols on md) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -4 }}
            className="md:col-span-6 bg-[#FF4500] rounded-3xl p-8 sm:p-10 text-white flex flex-col justify-between shadow-xl shadow-orange-500/15 border border-orange-400/30 relative overflow-hidden group"
          >
            {/* Top user icon badge */}
            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center mb-8 shrink-0 shadow-md">
              <User className="w-5 h-5 text-white" />
            </div>

            {/* Stat text */}
            <div className="my-auto py-4">
              <div className="flex items-baseline gap-2 flex-wrap">
                <span className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none text-white">
                  500k
                </span>
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white/90">
                  users
                </span>
              </div>
            </div>

            {/* Bottom description */}
            <p className="text-xs sm:text-sm text-white/90 font-medium leading-relaxed max-w-sm mt-4">
              finguard rapidly attracting a substantial user base of over 500,000 customer within its first year of operation.
            </p>
          </motion.div>

          {/* Card 2: Pitch Black 98% Speed Card (Spans 3 cols on md) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="md:col-span-3 bg-[#0D0D0D] rounded-3xl p-8 sm:p-9 text-white flex flex-col justify-between shadow-xl border border-neutral-800 relative overflow-hidden group"
          >
            {/* Top icon badge in orange rounded square */}
            <div className="w-10 h-10 rounded-xl bg-[#FF4500] flex items-center justify-center mb-8 shrink-0 shadow-md shadow-orange-600/30">
              <Zap className="w-5 h-5 text-white fill-white" />
            </div>

            {/* Stat text */}
            <div className="my-auto py-4">
              <div className="flex items-start">
                <span className="text-5xl sm:text-6xl font-black tracking-tight leading-none text-white">
                  98
                </span>
                <span className="text-2xl sm:text-3xl font-black text-white/80 ml-0.5 mt-0.5">
                  %
                </span>
              </div>
            </div>

            {/* Bottom description */}
            <p className="text-xs sm:text-sm text-neutral-400 font-medium leading-relaxed mt-4">
              Users enjoy faster transaction procession time
            </p>
          </motion.div>

          {/* Card 3: Light Neutral 24K ATM Network Card (Spans 3 cols on md) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="md:col-span-3 bg-[#F8F8F9] rounded-3xl p-8 sm:p-9 text-neutral-900 flex flex-col justify-between shadow-sm border border-neutral-200/90 relative overflow-hidden group hover:border-neutral-300 transition-colors"
          >
            {/* Top icon badge */}
            <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center mb-8 shrink-0 border border-orange-200">
              <Landmark className="w-5 h-5 text-[#FF4500]" />
            </div>

            {/* Stat text */}
            <div className="my-auto py-4">
              <div className="flex items-start">
                <span className="text-5xl sm:text-6xl font-black tracking-tight leading-none text-neutral-900">
                  24
                </span>
                <span className="text-2xl sm:text-3xl font-black text-neutral-900 ml-0.5 mt-0.5">
                  K
                </span>
              </div>
            </div>

            {/* Bottom description */}
            <p className="text-xs sm:text-sm text-neutral-600 font-medium leading-relaxed mt-4">
              A network of over 200,000 partner ATMs worldwide
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
