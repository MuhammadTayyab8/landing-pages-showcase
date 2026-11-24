import React, { useState, useEffect } from 'react';
import { X, Zap, TrendingUp, Users, ArrowUpRight, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Creator, WalletState } from '../types';
import confetti from 'canvas-confetti';

interface StatsModalProps {
  isOpen: boolean;
  onClose: () => void;
  wallet: WalletState;
  activeCreator: Creator;
  rewardMultiplier: number;
  onClaimStream: (amount: number) => void;
}

export const StatsModal: React.FC<StatsModalProps> = ({
  isOpen,
  onClose,
  wallet,
  activeCreator,
  rewardMultiplier,
  onClaimStream,
}) => {
  const [unclaimedRewards, setUnclaimedRewards] = useState(42.8590);
  const [totalLifetimeClaimed, setTotalLifetimeClaimed] = useState(1280.45);
  const [isClaiming, setIsClaiming] = useState(false);
  const [claimSuccess, setClaimSuccess] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setUnclaimedRewards((prev) => +(prev + 0.0024 * rewardMultiplier).toFixed(4));
    }, 150);
    return () => clearInterval(interval);
  }, [isOpen, rewardMultiplier]);

  if (!isOpen) return null;

  const handleClaim = () => {
    setIsClaiming(true);
    setTimeout(() => {
      setIsClaiming(false);
      setClaimSuccess(true);
      onClaimStream(unclaimedRewards);
      setTotalLifetimeClaimed((prev) => +(prev + unclaimedRewards).toFixed(2));
      setUnclaimedRewards(0);
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#CCFF00', '#0052FF', '#FFFFFF'],
      });
      setTimeout(() => setClaimSuccess(false), 2000);
    }, 600);
  };

  const topCreators = [
    { rank: 1, handle: 'pearl.eth', points: '293,582', yield: '48.2% APY', streams: '12,490' },
    { rank: 2, handle: 'baseclub.eth', points: '23,422', yield: '42.0% APY', streams: '8,920' },
    { rank: 3, handle: 'nova.base.eth', points: '18,900', yield: '39.5% APY', streams: '6,410' },
    { rank: 4, handle: 'punk6529.eth', points: '14,200', yield: '36.8% APY', streams: '5,120' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl text-gray-900 border border-gray-100 max-h-[90vh] overflow-y-auto"
        id="stats-modal-card"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-900 transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-left mb-6">
          <span className="text-[#0047FF] font-black text-xs uppercase tracking-widest bg-[#0047FF]/10 px-3 py-1 rounded-full font-unbounded">
            Real-Time Analytics
          </span>
          <h3 className="font-display font-black text-2xl sm:text-3xl text-gray-900 mt-2">
            My Streaming Dashboard
          </h3>
          <p className="text-gray-500 text-xs sm:text-sm mt-1">
            Connected: <strong className="text-gray-800">{wallet.ensName || wallet.address || '0x71C...4982'}</strong>
          </p>
        </div>

        {/* Live Unclaimed Stream Balance */}
        <div className="p-5 rounded-3xl bg-gradient-to-br from-[#0038E0] via-[#0047FF] to-[#0038E0] text-white shadow-xl mb-6 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-white/80">
                <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-ping" />
                <span>Live Streaming $CLUB Accumulation</span>
              </div>
              <div className="text-3xl sm:text-4xl font-mono font-black text-[#CCFF00] mt-1">
                {unclaimedRewards.toFixed(4)} <span className="text-white text-lg sm:text-xl font-display">$CLUB</span>
              </div>
              <div className="text-xs text-white/70 mt-1 font-mono">
                Rate: {(0.0024 * rewardMultiplier * 10).toFixed(4)} $CLUB / sec • Multiplier: {rewardMultiplier}x
              </div>
            </div>
            
            <button
              onClick={handleClaim}
              disabled={isClaiming || unclaimedRewards <= 0}
              className="px-5 py-3 rounded-2xl bg-[#CCFF00] hover:bg-[#bef200] text-black font-black text-xs sm:text-sm shadow-lg active:scale-95 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              id="claim-stream-btn"
            >
              {isClaiming ? 'Claiming...' : 'Claim to Wallet'}
            </button>
          </div>

          {claimSuccess && (
            <div className="mt-3 p-2 bg-emerald-500/30 rounded-xl border border-emerald-400 text-emerald-100 text-xs font-bold text-center">
              Successfully claimed rewards to your wallet!
            </div>
          )}
        </div>

        {/* Metric Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
          <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-200">
            <div className="text-[11px] text-gray-500 font-semibold uppercase">Lifetime Claimed</div>
            <div className="text-lg font-mono font-black text-gray-900 mt-0.5">
              {totalLifetimeClaimed.toFixed(2)} $CLUB
            </div>
          </div>
          <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-200">
            <div className="text-[11px] text-gray-500 font-semibold uppercase">Active Streamers</div>
            <div className="text-lg font-mono font-black text-[#0047FF] mt-0.5">1 Subscribed</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-200 col-span-2 sm:col-span-1">
            <div className="text-[11px] text-gray-500 font-semibold uppercase">Global Rank</div>
            <div className="text-lg font-mono font-black text-emerald-600 mt-0.5">#412 Top 1%</div>
          </div>
        </div>

        {/* Leaderboard Table */}
        <div>
          <div className="flex items-center justify-between text-xs font-bold text-gray-700 mb-3">
            <span className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#0047FF]" />
              Top Base Club Creators Leaderboard
            </span>
            <span className="text-gray-400 font-mono text-[11px]">Updated live</span>
          </div>

          <div className="space-y-2">
            {topCreators.map((c) => (
              <div
                key={c.rank}
                className="flex items-center justify-between p-3 rounded-2xl bg-gray-50/80 hover:bg-gray-100 border border-gray-200/80 transition-all text-xs"
              >
                <div className="flex items-center gap-3">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center font-black text-xs ${
                    c.rank === 1 ? 'bg-[#CCFF00] text-black' : c.rank === 2 ? 'bg-blue-100 text-[#0047FF]' : 'bg-gray-200 text-gray-700'
                  }`}>
                    {c.rank}
                  </span>
                  <div>
                    <span className="font-bold text-gray-900 block">{c.handle}</span>
                    <span className="text-[10px] text-gray-500 font-mono">{c.points} points</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="font-mono font-bold text-emerald-600 block">{c.yield}</span>
                  <span className="text-[10px] text-gray-500">{c.streams} streams</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
