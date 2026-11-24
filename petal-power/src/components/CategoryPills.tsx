

import React from 'react';
import { motion } from 'motion/react';

export type CategoryType = 'Outdoor Plant' | 'Indoor Plant' | 'Flower Pot' | 'Potted Plant' | 'All';

interface CategoryPillsProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  onSeeAllClick: () => void;
}

const CATEGORIES = ['Outdoor Plant', 'Indoor Plant', 'Flower Pot', 'Potted Plant'];

export default function CategoryPills({
  selectedCategory,
  onSelectCategory,
  onSeeAllClick,
}: CategoryPillsProps) {
  return (
    <div id="category-filter-bar" className="py-6 px-2 sm:px-4 flex flex-wrap items-center justify-between gap-3">
      {/* Category Pills */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <motion.button
              key={cat}
              id={`category-pill-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onSelectCategory(cat)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 shadow-sm border ${
                isActive
                  ? 'bg-[#11231d] text-white border-[#11231d]'
                  : 'bg-white/90 hover:bg-white text-[#20362f] border-[#d2dcd6] hover:border-[#b4c5bc]'
              }`}
            >
              {cat}
            </motion.button>
          );
        })}
      </div>

      {/* Right: See All Pill */}
      <motion.button
        id="see-all-categories-btn"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={onSeeAllClick}
        className="px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium bg-white/90 hover:bg-white text-[#20362f] border border-[#d2dcd6] hover:border-[#11231d] transition-all shadow-sm"
      >
        See All
      </motion.button>
    </div>
  );
}
