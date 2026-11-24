

import React from 'react';
import Image from '@/lib/Image';
import { Play } from 'lucide-react';
import { motion } from 'motion/react';

interface VideoShowcaseProps {
  onPlayVideo: () => void;
}

export default function VideoShowcase({ onPlayVideo }: VideoShowcaseProps) {
  return (
    <section id="quality-plants-section" className="py-14 px-2 sm:px-4 text-center">
      {/* Centered Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#11231d] tracking-tight max-w-4xl mx-auto leading-tight"
      >
        Quality Plants & Curated Goods
      </motion.h2>

      {/* Centered Description */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-xs sm:text-sm text-[#4b6158] max-w-2xl mx-auto leading-relaxed mt-4 sm:mt-5 mb-8 sm:mb-10 px-2"
      >
        We offer a carefully curated selection of indoor and outdoor plants, hand crafted home goods that put quality ahead of quantity, and living art made right here in the shop: terrariums, landscapes, arrangements, vessels, and holders.
      </motion.p>

      {/* Large Rounded Media Card with Gardener & Centered Play Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15 }}
        onClick={onPlayVideo}
        className="relative max-w-4xl mx-auto h-[340px] sm:h-[440px] md:h-[500px] rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-xl border border-[#c8d4cd] cursor-pointer group"
      >
        <Image
          src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1600&auto=format&fit=crop"
          alt="Gardener holding lush curated potted houseplant"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />

        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors duration-500" />

        {/* Centered Large Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#11231d]/90 hover:bg-[#11231d] text-white flex items-center justify-center shadow-2xl border border-white/20 backdrop-blur-sm transition-transform"
          >
            <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-white ml-1 text-white" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
