import React from 'react';
import { X, Sparkles, Zap, Shield, HeartHandshake, Layers, ArrowUpRight } from 'lucide-react';
import { BaseClubLogo } from './SvgDoodles';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAirdrop: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({
  isOpen,
  onClose,
  onOpenAirdrop,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl text-gray-900 border border-gray-100 max-h-[90vh] overflow-y-auto"
        id="about-modal-card"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-900 transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-left mb-6">
          <div className="mb-3">
            <BaseClubLogo />
          </div>
          <h3 className="font-display font-black text-2xl sm:text-3xl text-gray-900">
            About Base Club SocialFi
          </h3>
          <p className="text-gray-600 text-xs sm:text-sm mt-1 leading-relaxed">
            Base Club is the high-velocity creator economy protocol built natively on Base Layer 2, transforming passive followers into active yield-earning co-creators.
          </p>
        </div>

        <div className="space-y-4 mb-6 text-xs sm:text-sm">
          <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#0047FF] text-white flex items-center justify-center flex-shrink-0">
              <Zap className="w-4 h-4 text-[#CCFF00]" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm">Sub-Second Micro-Streams</h4>
              <p className="text-gray-600 text-xs mt-0.5 leading-normal">
                Instead of monthly lump sums or ad-revenue cliffs, rewards stream directly into user wallets on a per-second basis powered by Base L2 low-latency smart contracts.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100 flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
              <HeartHandshake className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm">Aligned Creator Staking</h4>
              <p className="text-gray-600 text-xs mt-0.5 leading-normal">
                Fans stake $CLUB behind their favorite creators. As creator engagement and on-chain points rise, staking yields auto-compound for both creators and stakers.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-100 flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-purple-600 text-white flex items-center justify-center flex-shrink-0">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm">Zero-Gas Layer 2 Economics</h4>
              <p className="text-gray-600 text-xs mt-0.5 leading-normal">
                Enjoy fractional sub-cent execution fees and instant confirmations without Ethereum mainnet gas spikes.
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            onClose();
            onOpenAirdrop();
          }}
          className="w-full py-3.5 px-6 rounded-2xl bg-[#CCFF00] hover:bg-[#bef200] text-black font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer transform active:scale-95"
        >
          <Sparkles className="w-4 h-4" />
          <span>Claim Your Starter Airdrop Now</span>
        </button>
      </div>
    </div>
  );
};
