

import React from 'react';
import Image from '@/lib/Image';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { CATEGORY_FEATURE_CARDS } from '@/lib/plants-data';

interface FeatureCardsProps {
  onCardClick: (id: string, title: string) => void;
}

export default function FeatureCards({ onCardClick }: FeatureCardsProps) {
  return (
    <section id="feature-cards-grid" className="px-2 sm:px-4 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5">
        {/* Card 1: Pet Friendly Plants (Wide, 6 columns) */}
        <motion.div
          id="feature-card-pet-friendly"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -4 }}
          onClick={() => onCardClick('pet-friendly', 'Pet Friendly Plants')}
          className="md:col-span-6 relative rounded-[28px] overflow-hidden min-h-[300px] sm:min-h-[340px] p-6 sm:p-8 flex flex-col justify-between text-white cursor-pointer shadow-lg group"
        >
          {/* Background image & gradient overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1512428813834-c702c7702b78?q=80&w=1200&auto=format&fit=crop"
              alt="Pet Friendly Plants foliage background"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e211a]/95 via-[#0e211a]/80 to-[#0e211a]/60 group-hover:via-[#0e211a]/70 transition-colors" />
          </div>

          {/* Top Row: Title + Arrow Action Button */}
          <div className="relative z-10 flex items-start justify-between gap-4">
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight leading-tight max-w-[260px]">
              Pet Friendly Plants
            </h3>
            <div className="w-9 h-9 rounded-full bg-white text-[#11231d] flex items-center justify-center shadow-md transform group-hover:scale-110 group-hover:rotate-45 transition-all shrink-0">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Bottom Area: Description & Family Badge */}
          <div className="relative z-10 pt-6">
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-md">
              There are many houseplants options for your home that are nontoxic. These plants will add life to your home while keeping your kids and pets safe.
            </p>
            <div className="mt-4">
              <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-medium text-white/90">
                Piperaceae
              </span>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Orchids (3 columns) */}
        <motion.div
          id="feature-card-orchids"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ y: -4 }}
          onClick={() => onCardClick('orchids', 'Orchids')}
          className="md:col-span-3 relative rounded-[28px] overflow-hidden min-h-[300px] sm:min-h-[340px] p-6 sm:p-7 flex flex-col justify-between text-white cursor-pointer shadow-lg group"
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?q=80&w=800&auto=format&fit=crop"
              alt="Orchids botanical background"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e211a]/95 via-[#0e211a]/85 to-[#0e211a]/65 group-hover:via-[#0e211a]/75 transition-colors" />
          </div>

          <div className="relative z-10">
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight leading-tight">
              Orchids
            </h3>
            <p className="text-xs sm:text-[13px] text-white/80 leading-relaxed mt-3">
              Orchids are easily everyones favorite flowering plant. Find new orchids and orchid success items in this collection.
            </p>
          </div>

          <div className="relative z-10 pt-4">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-medium text-white/90">
              Araceae
            </span>
          </div>
        </motion.div>

        {/* Card 3: Succulents (3 columns) */}
        <motion.div
          id="feature-card-succulents"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -4 }}
          onClick={() => onCardClick('succulents', 'Succulents')}
          className="md:col-span-3 relative rounded-[28px] overflow-hidden min-h-[300px] sm:min-h-[340px] p-6 sm:p-7 flex flex-col justify-between text-white cursor-pointer shadow-lg group"
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=800&auto=format&fit=crop"
              alt="Succulents botanical texture"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e211a]/95 via-[#0e211a]/85 to-[#0e211a]/65 group-hover:via-[#0e211a]/75 transition-colors" />
          </div>

          <div className="relative z-10">
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight leading-tight">
              Succulents
            </h3>
            <p className="text-xs sm:text-[13px] text-white/80 leading-relaxed mt-3">
              All succulents are cacti, but not all cacti are succulents. Both make low maintenance houseplants
            </p>
          </div>

          <div className="relative z-10 pt-4">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-medium text-white/90">
              Moraceae
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
