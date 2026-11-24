import React, { useState } from 'react';
import { X, Layers, TrendingUp, ShieldCheck, CheckCircle2, Sparkles, Zap } from 'lucide-react';
import { Creator, WalletState } from '../types';
import confetti from 'canvas-confetti';

interface StakingModalProps {
  isOpen: boolean;
  onClose: () => void;
  wallet: WalletState;
  activeCreator: Creator;
  onStakeSuccess: (amount: number) => void;
}

export const StakingModal: React.FC<StakingModalProps> = ({
  isOpen,
  onClose,
  wallet,
  activeCreator,
  onStakeSuccess,
}) => {
  const [stakeAmount, setStakeAmount] = useState<number>(5000);
  const [duration, setDuration] = useState<'flexible' | '30d' | '90d' | '365d'>('90d');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  if (!isOpen) return null;

  const durationConfig = {
    flexible: { label: 'Flexible', apy: 18.5, multiplier: 1.0 },
    '30d': { label: '30 Days', apy: 26.0, multiplier: 1.3 },
    '90d': { label: '90 Days', apy: 38.4, multiplier: 1.8 },
    '365d': { label: '365 Days', apy: 48.2, multiplier: 2.5 },
  };

  const selectedConfig = durationConfig[duration];
  const monthlyEstReward = (stakeAmount * (selectedConfig.apy / 100)) / 12;
  const secondRate = monthlyEstReward / (30 * 24 * 3600);

  const handleStake = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage(true);
      onStakeSuccess(stakeAmount);
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#CCFF00', '#0047FF', '#FFFFFF'],
      });
      setTimeout(() => {
        setSuccessMessage(false);
        onClose();
      }, 1500);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl text-gray-900 border border-gray-100 max-h-[90vh] overflow-y-auto"
        id="staking-modal-card"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-900 transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-left mb-6">
          <span className="text-[#0047FF] font-black text-xs uppercase tracking-widest bg-[#0047FF]/10 px-3 py-1 rounded-full font-unbounded">
            Creator Staking Yield
          </span>
          <h3 className="font-display font-black text-2xl sm:text-3xl text-gray-900 mt-2">
            Stake $CLUB for Creators
          </h3>
          <p className="text-gray-500 text-xs sm:text-sm mt-1">
            Back <span className="font-bold text-[#0047FF]">{activeCreator.handle}</span> to boost their protocol weight and receive recurring monthly $CLUB distributions.
          </p>
        </div>

        <form onSubmit={handleStake} className="space-y-5">
          {/* Amount input */}
          <div>
            <div className="flex items-center justify-between text-xs font-semibold text-gray-600 mb-1.5">
              <span>Stake Amount</span>
              <span className="font-mono">
                Available: {wallet.balanceClub.toFixed(2)} $CLUB
              </span>
            </div>
            <div className="relative">
              <input
                type="number"
                min="10"
                max="1000000"
                value={stakeAmount}
                onChange={(e) => setStakeAmount(Number(e.target.value))}
                className="w-full px-4 py-3.5 pr-20 rounded-2xl bg-gray-50 border border-gray-200 text-base font-mono font-bold text-gray-900 focus:outline-none focus:border-[#0047FF] focus:bg-white"
              />
              <div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setStakeAmount(2500)}
                  className="px-2 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700 text-[10px] font-bold rounded-md"
                >
                  2.5K
                </button>
                <button
                  type="button"
                  onClick={() => setStakeAmount(5000)}
                  className="px-2 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700 text-[10px] font-bold rounded-md"
                >
                  5K
                </button>
                <button
                  type="button"
                  onClick={() => setStakeAmount(10000)}
                  className="px-2 py-1 bg-[#0047FF] text-white text-[10px] font-bold rounded-md"
                >
                  MAX
                </button>
              </div>
            </div>
          </div>

          {/* Lock Duration Selector */}
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-2">
              Lock Duration & APY Tier
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {(Object.keys(durationConfig) as Array<keyof typeof durationConfig>).map((key) => {
                const conf = durationConfig[key];
                const isSelected = duration === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setDuration(key)}
                    className={`p-2.5 rounded-2xl border text-center transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[#0047FF] bg-blue-50/80 text-[#0047FF] shadow-sm font-bold'
                        : 'border-gray-200 bg-gray-50/50 hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <div className="text-xs font-semibold">{conf.label}</div>
                    <div className="text-sm font-mono font-black mt-0.5 text-emerald-600">
                      {conf.apy}% APY
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Live Yield Estimation Card (Matching Reference Image Style!) */}
          <div className="p-5 rounded-2xl bg-[#CCFF00] border-2 border-white shadow-xl text-black">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[11px] font-black uppercase tracking-wider text-black/70">
                  EST. Monthly $CLUB Reward
                </div>
                <div className="text-3xl font-mono font-black tracking-tight text-black mt-0.5">
                  {monthlyEstReward.toFixed(5)}
                </div>
              </div>
              <div className="text-right">
                <span className="bg-black text-[#CCFF00] text-xs font-mono font-bold px-2.5 py-1 rounded-full">
                  +{secondRate.toFixed(6)}/sec
                </span>
              </div>
            </div>
            
            <div className="mt-3 pt-3 border-t border-black/10 flex items-center justify-between text-xs text-black/80 font-medium">
              <span>Selected Creator: <strong className="text-black">{activeCreator.handle}</strong></span>
              <span>Multiplier: <strong>{selectedConfig.multiplier}x</strong></span>
            </div>
          </div>

          {/* Submit Button */}
          {!successMessage ? (
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-6 rounded-2xl bg-[#0047FF] hover:bg-[#0038E0] text-white font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transition-all cursor-pointer transform active:scale-95 disabled:opacity-50"
            >
              <Zap className="w-4 h-4 text-[#CCFF00] fill-[#CCFF00]" />
              <span>{isSubmitting ? 'Confirming On-Chain...' : `Stake ${stakeAmount.toLocaleString()} $CLUB`}</span>
            </button>
          ) : (
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-center font-bold text-sm flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Staking successful! Monthly yield streams activated.</span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
