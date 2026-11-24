

import React from 'react';
import Image from '@/lib/Image';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface IndoorCollectionProps {
  onCardClick: (id: string, title: string) => void;
}

export default function IndoorCollection({ onCardClick }: IndoorCollectionProps) {
  return (
    <section id="indoor-collection-section" className="py-12 px-2 sm:px-4">
      {/* Header Row */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-10">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs sm:text-sm text-[#4b6158] max-w-xs leading-relaxed"
        >
          Check out our video content including informative webinars where you can learn more about your indoor plants.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#11231d] tracking-tight text-right"
        >
          Indoor Collection
        </motion.h2>
      </div>

      {/* 4-Card Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5">
        {/* Card 1: Philodendron (7 columns) */}
        <motion.div
          id="indoor-card-philodendron"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -4 }}
          onClick={() => onCardClick('philodendron', 'Philodendron')}
          className="md:col-span-7 relative rounded-[28px] overflow-hidden min-h-[280px] sm:min-h-[320px] p-6 sm:p-8 flex flex-col justify-between text-white cursor-pointer shadow-lg group"
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1509423350716-97f9360b4e09?q=80&w=1200&auto=format&fit=crop"
              alt="Philodendron lush dark foliage"
              fill
              className="object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e211a]/95 via-[#0e211a]/75 to-[#0e211a]/55 group-hover:via-[#0e211a]/65 transition-colors" />
          </div>

          {/* Top Right Arrow Button */}
          <div className="relative z-10 flex justify-end">
            <div className="w-9 h-9 rounded-full bg-white text-[#11231d] flex items-center justify-center shadow-md transform group-hover:scale-110 group-hover:rotate-45 transition-all">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Bottom Title & Description */}
          <div className="relative z-10">
            <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
              Philodendron
            </h3>
            <p className="text-xs sm:text-[13px] text-white/80 leading-relaxed mt-2.5 max-w-md">
              Philodendron comes in a variety of leaf shapes and colors, making it a great plant to compliment your home decor while also being low maintenance.
            </p>
          </div>
        </motion.div>

        {/* Card 2: Calathea (5 columns) */}
        <motion.div
          id="indoor-card-calathea"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ y: -4 }}
          onClick={() => onCardClick('calathea', 'Calathea')}
          className="md:col-span-5 relative rounded-[28px] overflow-hidden min-h-[280px] sm:min-h-[320px] p-6 sm:p-8 flex flex-col justify-between text-white cursor-pointer shadow-lg group"
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1491147334573-44cbb4602074?q=80&w=1000&auto=format&fit=crop"
              alt="Calathea pattern foliage"
              fill
              className="object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e211a]/95 via-[#0e211a]/75 to-[#0e211a]/55 group-hover:via-[#0e211a]/65 transition-colors" />
          </div>

          <div className="relative z-10 flex justify-end">
            <div className="w-9 h-9 rounded-full bg-white text-[#11231d] flex items-center justify-center shadow-md transform group-hover:scale-110 group-hover:rotate-45 transition-all">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          <div className="relative z-10">
            <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
              Calathea
            </h3>
          </div>
        </motion.div>

        {/* Card 3: Air Purifying (5 columns) */}
        <motion.div
          id="indoor-card-air-purifying"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          whileHover={{ y: -4 }}
          onClick={() => onCardClick('air-purifying', 'Air Purifying Plants')}
          className="md:col-span-5 relative rounded-[28px] overflow-hidden min-h-[240px] sm:min-h-[270px] p-6 sm:p-8 flex flex-col justify-between text-white cursor-pointer shadow-lg group"
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=1000&auto=format&fit=crop"
              alt="Air Purifying Plants"
              fill
              className="object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e211a]/95 via-[#0e211a]/75 to-[#0e211a]/55 group-hover:via-[#0e211a]/65 transition-colors" />
          </div>

          <div className="relative z-10 flex justify-end">
            <div className="w-9 h-9 rounded-full bg-white text-[#11231d] flex items-center justify-center shadow-md transform group-hover:scale-110 group-hover:rotate-45 transition-all">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          <div className="relative z-10">
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-tight">
              Air Purifying
            </h3>
          </div>
        </motion.div>

        {/* Card 4: Low Light Tolerant (7 columns) */}
        <motion.div
          id="indoor-card-low-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ y: -4 }}
          onClick={() => onCardClick('low-light', 'Low Light Tolerant Plants')}
          className="md:col-span-7 relative rounded-[28px] overflow-hidden min-h-[240px] sm:min-h-[270px] p-6 sm:p-8 flex flex-col justify-between text-white cursor-pointer shadow-lg group"
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=1200&auto=format&fit=crop"
              alt="Low Light Tolerant Plants"
              fill
              className="object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e211a]/95 via-[#0e211a]/75 to-[#0e211a]/55 group-hover:via-[#0e211a]/65 transition-colors" />
          </div>

          <div className="relative z-10 flex justify-end">
            <div className="w-9 h-9 rounded-full bg-white text-[#11231d] flex items-center justify-center shadow-md transform group-hover:scale-110 group-hover:rotate-45 transition-all">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          <div className="relative z-10">
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-tight">
              Low Light Tolerant
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
