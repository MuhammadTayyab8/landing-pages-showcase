

import React from 'react';
import { X, Sparkles, Volume2, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-10 flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Video Container Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-[#0e2119] rounded-[32px] overflow-hidden shadow-2xl border border-white/20 z-10 text-white"
          >
            {/* Top Bar */}
            <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-black/40">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-display font-bold text-sm sm:text-base text-white">
                  The Botanical Greenhouse Experience & Master Potting Tour
                </span>
              </div>
              <button
                onClick={onClose}
                aria-label="Close video"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Video Frame */}
            <div className="relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/fD_6V-U0O5w?autoplay=1&mute=0&loop=1&playlist=fD_6V-U0O5w&controls=1"
                title="Petal Power Greenhouse Care Tour"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Video Footer Highlights */}
            <div className="p-5 sm:p-6 bg-[#112a21] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-display font-bold text-base text-white">
                  Organic Soil Blends & Root Oxygenation
                </h4>
                <p className="text-xs text-white/70 mt-0.5">
                  Hosted by our Lead Horticulturists & Botanical Artisans
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-emerald-300 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Certified 100% Organic Soil Practices</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
