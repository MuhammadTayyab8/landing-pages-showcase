

import React, { useState } from 'react';
import Image from '@/lib/Image';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { NEW_PLANTS, PlantItem } from '@/lib/plants-data';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPlant: (plant: PlantItem) => void;
}

export default function SearchModal({ isOpen, onClose, onSelectPlant }: SearchModalProps) {
  const [query, setQuery] = useState('');

  const filteredPlants = NEW_PLANTS.filter(
    (plant) =>
      plant.name.toLowerCase().includes(query.toLowerCase()) ||
      plant.description.toLowerCase().includes(query.toLowerCase()) ||
      (plant.botanicalName && plant.botanicalName.toLowerCase().includes(query.toLowerCase())) ||
      (plant.family && plant.family.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-20 flex items-start justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/65 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            className="relative w-full max-w-2xl bg-[#f4f6f3] rounded-[32px] shadow-2xl border border-white/40 overflow-hidden z-10"
          >
            {/* Search Input Header */}
            <div className="p-4 sm:p-5 border-b border-[#d6e0d9] bg-white flex items-center gap-3">
              <Search className="w-5 h-5 text-[#425d53] shrink-0" />
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search plants, botanical families (Piperaceae, Moraceae), care..."
                className="w-full bg-transparent text-sm sm:text-base font-medium text-[#11231d] placeholder-[#80958c] focus:outline-none"
              />
              <button
                onClick={onClose}
                aria-label="Close search"
                className="w-8 h-8 rounded-full border border-[#d2ddd6] flex items-center justify-center text-[#20362f] hover:bg-[#edf3ef] transition-colors shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Suggestions & Results */}
            <div className="p-5 sm:p-6 max-h-[60vh] overflow-y-auto space-y-3">
              {query === '' ? (
                <div>
                  <p className="text-xs font-semibold text-[#668075] uppercase tracking-wider mb-3">
                    Popular Botanical Categories
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Pet Friendly Plants', 'Orchids', 'Succulents', 'Philodendron', 'Calathea', 'Low Light'].map(
                      (tag) => (
                        <button
                          key={tag}
                          onClick={() => setQuery(tag)}
                          className="px-3.5 py-1.5 rounded-full bg-white border border-[#d2ddd6] hover:border-[#11231d] text-xs font-medium text-[#20362f] transition-all shadow-xs"
                        >
                          {tag}
                        </button>
                      )
                    )}
                  </div>
                </div>
              ) : filteredPlants.length > 0 ? (
                <div>
                  <p className="text-xs font-semibold text-[#668075] uppercase tracking-wider mb-3">
                    Matching Specimens ({filteredPlants.length})
                  </p>
                  <div className="space-y-2.5">
                    {filteredPlants.map((plant) => (
                      <div
                        key={plant.id}
                        onClick={() => {
                          onSelectPlant(plant);
                          onClose();
                        }}
                        className="p-3 bg-white hover:bg-[#eef4f0] rounded-2xl border border-[#d8e3dc] flex items-center justify-between gap-3 cursor-pointer group transition-colors shadow-xs"
                      >
                        <div className="flex items-center gap-3">
                          <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-[#e4ede7] shrink-0">
                            <Image
                              src={plant.image}
                              alt={plant.name}
                              fill
                              className="object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          <div>
                            <h4 className="font-display font-bold text-sm text-[#11231d] group-hover:text-emerald-900">
                              {plant.name}
                            </h4>
                            <p className="text-xs text-[#6a8077] italic">{plant.botanicalName}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className="font-display font-bold text-xs sm:text-sm text-[#11231d]">
                            {plant.formattedPrice}
                          </span>
                          <div className="w-7 h-7 rounded-full bg-[#11231d] text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                            <ArrowRight className="w-3.5 h-3.5" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="py-12 text-center">
                  <p className="text-sm font-semibold text-[#11231d]">No botanical matches for &quot;{query}&quot;</p>
                  <p className="text-xs text-[#627a70] mt-1">
                    Try searching for &quot;Peperomia&quot;, &quot;Orchid&quot;, &quot;Moist&quot;, or &quot;Fiddle&quot;.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
