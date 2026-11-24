

import React from 'react';
import Image from '@/lib/Image';
import { Play, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface PlantsForPeopleProps {
  onPlayVideo: () => void;
}

export default function PlantsForPeople({ onPlayVideo }: PlantsForPeopleProps) {
  return (
    <section id="plants-for-people-section" className="pt-12 sm:pt-16 pb-6 px-2 sm:px-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
        {/* Left: Title & Subtitle */}
        <div className="md:col-span-4 flex flex-col justify-center">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#11231d] tracking-tight leading-tight"
          >
            Plants for the People
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs sm:text-sm text-[#4b6158] mt-2 sm:mt-3 leading-relaxed"
          >
            We want our visitors to be inspired to get their hands dirty
          </motion.p>
        </div>

        {/* Center: Video leaf pill thumbnail with interactive play button */}
        <div className="md:col-span-3 flex justify-start md:justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            whileHover={{ scale: 1.03 }}
            onClick={onPlayVideo}
            className="relative w-full max-w-[220px] h-20 sm:h-24 rounded-full overflow-hidden shadow-md cursor-pointer border border-[#c9d5ce] group"
          >
            <Image
              src="https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=400&auto=format&fit=crop"
              alt="Horticultural leaf care preview"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/35 group-hover:bg-black/25 transition-colors" />

            {/* Centered Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-white/90 group-hover:bg-white text-[#11231d] flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: Expert Care Statement with Inline Flower Badge */}
        <div className="md:col-span-5">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-display font-bold text-lg sm:text-xl lg:text-2xl text-[#11231d] leading-snug tracking-tight"
          >
            Each plant is cared{' '}
            <span className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#11231d] text-white mx-1 align-middle shadow-sm">
              <svg className="w-4 h-4 text-emerald-300 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM19 8C20.1 8 21 8.9 21 10C21 11.1 20.1 12 19 12C17.9 12 17 11.1 17 10C17 8.9 17.9 8 19 8ZM5 8C6.1 8 7 8.9 7 10C7 11.1 6.1 12 5 12C3.9 12 3 11.1 3 10C3 8.9 3.9 8 5 8ZM12 18C13.1 18 14 18.9 14 20C14 21.1 13.1 22 12 22C10.9 22 10 21.1 10 20C10 18.9 10.9 18 12 18ZM17 14C18.1 14 19 14.9 19 16C19 17.1 18.1 18 17 18C15.9 18 15 17.1 15 16C15 14.9 15.9 14 17 14ZM7 14C8.1 14 9 14.9 9 16C9 17.1 8.1 18 7 18C5.9 18 5 17.1 5 16C5 14.9 5.9 14 7 14ZM12 10C13.1 10 14 10.9 14 12C14 13.1 13.1 14 12 14C10.9 14 10 13.1 10 12C10 10.9 10.9 10 12 10Z"/>
              </svg>
            </span>{' '}
            for by our horticultural experts, so they are as happy as healthy as they get.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
