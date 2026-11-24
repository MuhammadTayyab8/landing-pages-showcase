

import React from 'react';
import Image from '@/lib/Image';
import { Heart, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { PlantItem, NEW_PLANTS } from '@/lib/plants-data';

interface NewPlantsProps {
  onSelectPlant: (plant: PlantItem) => void;
  onAddToCart: (plant: PlantItem, e: React.MouseEvent) => void;
  favorites: string[];
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
}

export default function NewPlants({
  onSelectPlant,
  onAddToCart,
  favorites,
  onToggleFavorite,
}: NewPlantsProps) {
  const [activePageIndex, setActivePageIndex] = React.useState(0);

  return (
    <section id="new-plants-section" className="py-12 px-2 sm:px-4">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-10">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#11231d] tracking-tight"
        >
          New Plants
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xs sm:text-sm text-[#4b6158] max-w-md leading-relaxed"
        >
          Bring nature inside and shop our big selections of fresh indoor plants, including
          Instagram-worthy houseplants, pet-friendly plants, orchids and one-of-a-kind rare plants.
        </motion.p>
      </div>

      {/* 3 Product Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
        {NEW_PLANTS.map((plant, index) => {
          const isFav = favorites.includes(plant.id);
          return (
            <motion.div
              key={plant.id}
              id={`product-card-${plant.id}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -6 }}
              onClick={() => onSelectPlant(plant)}
              className="bg-transparent rounded-3xl group cursor-pointer flex flex-col"
            >
              {/* Product Image Frame */}
              <div className="relative w-full aspect-square sm:aspect-[4/3.8] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-[#e6ede8] border border-[#d2ddd6] shadow-sm">
                <Image
                  src={plant.image}
                  alt={plant.name}
                  fill
                  className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />

                {/* Heart Favorite Button (Top Left) */}
                <motion.button
                  id={`favorite-btn-${plant.id}`}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.85 }}
                  onClick={(e) => onToggleFavorite(plant.id, e)}
                  aria-label={`Save ${plant.name} to favorites`}
                  className="absolute top-3.5 left-3.5 w-8 h-8 rounded-full bg-black/25 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-rose-500 transition-all z-10 shadow-sm"
                >
                  <Heart
                    className={`w-4 h-4 transition-colors ${
                      isFav ? 'fill-rose-500 text-rose-500' : 'text-white'
                    }`}
                  />
                </motion.button>
              </div>

              {/* Plant Meta Details */}
              <div className="pt-4 pb-2 px-1 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-[#11231d] group-hover:text-emerald-900 transition-colors">
                    {plant.name}
                  </h3>
                  <p className="text-xs text-[#6a8077] font-medium capitalize mt-0.5">
                    {plant.moisture}
                  </p>
                </div>

                {/* Price & Action Button */}
                <div className="flex items-center justify-between pt-3 mt-1">
                  <span className="font-display font-bold text-sm sm:text-base text-[#11231d]">
                    {plant.formattedPrice}
                  </span>

                  <motion.button
                    id={`add-to-cart-${plant.id}`}
                    whileHover={{ scale: 1.1, rotate: 45 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => onAddToCart(plant, e)}
                    aria-label={`Add ${plant.name} to bag`}
                    className="w-9 h-9 rounded-full bg-[#11231d] text-white flex items-center justify-center shadow-md hover:bg-black transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Pagination Indicator Dots */}
      <div className="flex items-center justify-center gap-1.5 pt-8 pb-2">
        <button
          onClick={() => setActivePageIndex(0)}
          className={`h-1.5 rounded-full transition-all duration-300 ${
            activePageIndex === 0 ? 'w-8 bg-[#11231d]' : 'w-2 bg-[#ccd6cf]'
          }`}
          aria-label="Go to page 1"
        />
        <button
          onClick={() => setActivePageIndex(1)}
          className={`h-1.5 rounded-full transition-all duration-300 ${
            activePageIndex === 1 ? 'w-8 bg-[#11231d]' : 'w-2 bg-[#ccd6cf]'
          }`}
          aria-label="Go to page 2"
        />
        <button
          onClick={() => setActivePageIndex(2)}
          className={`h-1.5 rounded-full transition-all duration-300 ${
            activePageIndex === 2 ? 'w-8 bg-[#11231d]' : 'w-2 bg-[#ccd6cf]'
          }`}
          aria-label="Go to page 3"
        />
      </div>
    </section>
  );
}
