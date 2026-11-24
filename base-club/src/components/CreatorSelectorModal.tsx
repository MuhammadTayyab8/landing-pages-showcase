import React from 'react';
import { X, CheckCircle2, Zap, TrendingUp, Users, Sparkles } from 'lucide-react';
import { PunkAvatar, ApeAvatar, CatAvatar } from './Avatars';
import { Creator } from '../types';

interface CreatorSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  creators: Creator[];
  activeCreator: Creator;
  onSelectCreator: (creator: Creator) => void;
}

export const CreatorSelectorModal: React.FC<CreatorSelectorModalProps> = ({
  isOpen,
  onClose,
  creators,
  activeCreator,
  onSelectCreator,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl text-gray-900 border border-gray-100 max-h-[90vh] overflow-y-auto"
        id="creator-modal-card"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-900 transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-left mb-6">
          <span className="text-[#0047FF] font-black text-xs uppercase tracking-widest bg-[#0047FF]/10 px-3 py-1 rounded-full font-unbounded">
            Featured Creators
          </span>
          <h3 className="font-display font-black text-2xl sm:text-3xl text-gray-900 mt-2">
            Subscribe to Creators
          </h3>
          <p className="text-gray-500 text-xs sm:text-sm mt-1">
            Choose a verified creator to receive direct second-by-second $CLUB rewards.
          </p>
        </div>

        {/* Creator List */}
        <div className="space-y-3">
          {creators.map((c) => {
            const isSelected = activeCreator.id === c.id;
            return (
              <div
                key={c.id}
                onClick={() => {
                  onSelectCreator(c);
                  onClose();
                }}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                  isSelected
                    ? 'border-[#0047FF] bg-blue-50/70 shadow-md ring-2 ring-[#0047FF]/20'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  {c.avatarType === 'punk' && <PunkAvatar className="w-12 h-12 flex-shrink-0" />}
                  {c.avatarType === 'ape' && <ApeAvatar className="w-12 h-12 flex-shrink-0" />}
                  {c.avatarType === 'cat' && <CatAvatar className="w-12 h-12 flex-shrink-0" />}

                  <div>
                    <div className="flex items-center gap-1.5 font-bold text-gray-900 text-sm sm:text-base">
                      <span>{c.handle}</span>
                      {c.verified && (
                        <CheckCircle2 className="w-4 h-4 text-[#0047FF] fill-blue-100" />
                      )}
                    </div>
                    <div className="text-xs text-gray-500 font-mono mt-0.5">
                      {c.points.toLocaleString()} points • {c.category}
                    </div>
                  </div>
                </div>

                <div className="text-right flex flex-col items-end">
                  <span className="bg-[#CCFF00] text-black font-mono font-black text-xs px-2.5 py-1 rounded-full shadow-xs">
                    +{c.ratePerSecond} $CLUB/s
                  </span>
                  <span className="text-[10px] text-gray-500 font-medium mt-1">
                    {c.followers.toLocaleString()} subscribers
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
