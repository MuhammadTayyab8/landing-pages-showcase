

import React from 'react';
import Image from '@/lib/Image';
import { X, Heart, Sun, Droplets, ShieldCheck, ArrowRight, Sparkles, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PlantItem } from '@/lib/plants-data';

interface PlantDetailModalProps {
  plant: PlantItem | null;
  onClose: () => void;
  onAddToCart: (plant: PlantItem) => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export default function PlantDetailModal({
  plant,
  onClose,
  onAddToCart,
  isFavorite,
  onToggleFavorite,
}: PlantDetailModalProps) {
  const [added, setAdded] = React.useState(false);

  if (!plant) return null;

  const handleAdd = () => {
    onAddToCart(plant);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-10 flex items-center justify-center">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/65 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', damping: 26, stiffness: 300 }}
          className="relative w-full max-w-3xl bg-[#f4f6f3] rounded-[32px] sm:rounded-[36px] shadow-2xl border border-white/50 overflow-hidden z-10"
        >
          {/* Close & Favorite Floating Buttons */}
          <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
            <button
              onClick={() => onToggleFavorite(plant.id)}
              aria-label="Toggle favorite"
              className="w-9 h-9 rounded-full bg-white/85 backdrop-blur-md border border-[#d2ddd6] flex items-center justify-center text-[#20362f] hover:bg-white transition-all shadow-sm"
            >
              <Heart
                className={`w-4 h-4 transition-colors ${
                  isFavorite ? 'fill-rose-500 text-rose-500' : 'text-[#334b41]'
                }`}
              />
            </button>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="w-9 h-9 rounded-full bg-white/85 backdrop-blur-md border border-[#d2ddd6] flex items-center justify-center text-[#20362f] hover:bg-white transition-all shadow-sm"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
            {/* Left Image Showcase */}
            <div className="md:col-span-6 relative min-h-[300px] sm:min-h-[420px] bg-[#e4ede7]">
              <Image
                src={plant.image}
                alt={plant.name}
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4">
                <span className="px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-white text-xs font-semibold border border-white/20">
                  {plant.family || 'Botanical Select'}
                </span>
              </div>
            </div>

            {/* Right Information & Action Panel */}
            <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between bg-white">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    {plant.tag || 'Horticultural Grade'}
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#11231d] tracking-tight">
                  {plant.name}
                </h3>
                {plant.botanicalName && (
                  <p className="text-xs sm:text-sm text-[#5f776d] italic mt-0.5 font-serif">
                    {plant.botanicalName}
                  </p>
                )}

                <p className="text-xs sm:text-sm text-[#4b6359] leading-relaxed mt-3.5">
                  {plant.description}
                </p>

                {/* Botanical Care Specs Grid */}
                <div className="grid grid-cols-2 gap-2.5 mt-5 pt-4 border-t border-[#edf2ee]">
                  <div className="p-2.5 rounded-xl bg-[#f5f8f6] border border-[#e2eae5]">
                    <div className="flex items-center gap-1.5 text-emerald-800 text-xs font-semibold">
                      <Sun className="w-3.5 h-3.5" /> Light
                    </div>
                    <p className="text-[11px] text-[#556e64] mt-0.5">{plant.lightRequirement}</p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#f5f8f6] border border-[#e2eae5]">
                    <div className="flex items-center gap-1.5 text-emerald-800 text-xs font-semibold">
                      <Droplets className="w-3.5 h-3.5" /> Water
                    </div>
                    <p className="text-[11px] text-[#556e64] mt-0.5">{plant.moisture}</p>
                  </div>
                </div>

                {/* Pet Safety Pill */}
                <div className="mt-3 flex items-center gap-2 text-xs text-[#4b6359]">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  <span>
                    {plant.petFriendly
                      ? '100% Non-toxic & Pet Friendly'
                      : 'Keep out of reach of inquisitive pets'}
                  </span>
                </div>
              </div>

              {/* Price & Add to Bag CTA */}
              <div className="pt-6 mt-4 border-t border-[#edf2ee] flex items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] text-[#6e857b] block">Price</span>
                  <span className="font-display font-extrabold text-xl text-[#11231d]">
                    {plant.formattedPrice}
                  </span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleAdd}
                  className={`px-6 py-3 rounded-full font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-md ${
                    added
                      ? 'bg-emerald-700 text-white'
                      : 'bg-[#11231d] hover:bg-black text-white'
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4" /> Added to Bag!
                    </>
                  ) : (
                    <>
                      <span>Add to Bag</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
