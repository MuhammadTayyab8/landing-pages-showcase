import React, { useState, useEffect } from 'react';
import { BlackCurvedArrowLeft, BlackCurvedArrowRight } from './SvgDoodles';
import { ApeAvatar } from './Avatars';
import { Sparkles, ArrowUpRight, Zap, RefreshCw, Layers, ShieldCheck, ChevronRight } from 'lucide-react';
import { Creator, WalletState } from '../types';

interface FeatureCardsProps {
  wallet: WalletState;
  activeCreator: Creator;
  onOpenStaking: () => void;
  onOpenCreatorSelector: () => void;
  onBoostRewards: () => void;
  rewardMultiplier: number;
}

export const FeatureCards: React.FC<FeatureCardsProps> = ({
  wallet,
  activeCreator,
  onOpenStaking,
  onOpenCreatorSelector,
  onBoostRewards,
  rewardMultiplier,
}) => {
  // Live ticking reward counter (e.g. 20.2435 -> 20.2442...)
  const [liveStreamedClub, setLiveStreamedClub] = useState(20.2400);
  const [activeAccountReward, setActiveAccountReward] = useState(20.4220);
  const [monthlyYield, setMonthlyYield] = useState(188.34257);
  const [isBoosting, setIsBoosting] = useState(false);

  // Ticking effect for real-time streaming
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStreamedClub((prev) => +(prev + 0.0018 * rewardMultiplier).toFixed(4));
    }, 120);
    return () => clearInterval(interval);
  }, [rewardMultiplier]);

  const handleBoostClick = () => {
    setIsBoosting(true);
    onBoostRewards();
    setActiveAccountReward((prev) => +(prev * 1.05).toFixed(4));
    setMonthlyYield((prev) => +(prev * 1.05).toFixed(5));
    setTimeout(() => setIsBoosting(false), 500);
  };

  return (
    <div 
      className="relative z-20 w-full bg-white text-gray-900 rounded-t-[36px] sm:rounded-t-[44px] md:rounded-t-[54px] shadow-2xl pt-10 md:pt-14 pb-14 md:pb-20 px-4 sm:px-6 md:px-12 transition-all duration-300"
      id="features-cards-section"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header / Visual badge */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-gray-100">
          <div className="text-center sm:text-left">
            <span className="text-[#0047FF] font-black text-xs uppercase tracking-widest bg-[#0047FF]/10 px-3 py-1 rounded-full font-unbounded">
              SocialFi Protocol Mechanics
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-2 font-display uppercase tracking-tight">
              Earn Every Second, Multiply Every Month
            </h2>
          </div>

          <div className="flex items-center gap-3 text-xs font-semibold text-gray-600 bg-gray-50 px-4 py-2 rounded-full border border-gray-200">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Base Sub-Second Streaming Engine</span>
            <span className="font-mono text-[#0047FF] font-bold">~0.001s</span>
          </div>
        </div>

        {/* 3 Interactive Cards Grid with Arrow Connectors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative items-stretch">
          
          {/* CARD 1: SUBSCRIBE TO CREATORS */}
          <div 
            className="group relative bg-[#F8FAFC] hover:bg-[#F1F5F9] rounded-[28px] p-6 sm:p-7 flex flex-col justify-between border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            onClick={onOpenCreatorSelector}
            id="feature-card-subscribe"
          >
            {/* Top Text Content */}
            <div className="text-center">
              <h3 className="font-display font-black text-xl sm:text-2xl text-gray-900 tracking-tight leading-tight uppercase">
                SUBSCRIBE<br />TO CREATORS
              </h3>
              <p className="text-gray-500 font-medium text-xs sm:text-sm mt-2">
                you will receive $CLUB every second
              </p>
            </div>

            {/* Visual Badge Matching Reference Image */}
            <div className="mt-8 pt-4 flex flex-col items-center justify-center">
              <div className="relative flex flex-col items-center">
                
                {/* Main Blue Speech Bubble Avatar Card */}
                <div className="relative bg-[#0047FF] text-white px-4 py-3 rounded-[20px] rounded-br-none shadow-lg flex items-center gap-3 min-w-[190px] group-hover:scale-105 transition-transform">
                  <ApeAvatar className="w-9 h-9 ring-2 ring-white/70" />
                  <div className="text-left leading-tight">
                    <div className="font-bold text-xs lowercase flex items-center gap-1">
                      <span>{activeCreator.handle}</span>
                    </div>
                    <div className="text-[10px] text-white/75 font-mono">
                      {activeCreator.points.toLocaleString()} points
                    </div>
                  </div>

                  {/* Speech bubble tail */}
                  <div className="absolute -bottom-1.5 right-0 w-3 h-3 bg-[#0047FF] [clip-path:polygon(0_0,100%_0,100%_100%)]" />
                </div>

                {/* Floating Neon Chartreuse Pill Badge on Right: 20.24 $CLUB */}
                <div className="absolute -top-3 -right-6 bg-[#CCFF00] text-black font-black text-xs sm:text-sm px-3.5 py-1 rounded-full shadow-md flex items-center gap-1 border-2 border-white animate-pulse">
                  <Zap className="w-3 h-3 fill-black" />
                  <span className="font-mono">{liveStreamedClub.toFixed(2)}</span>
                  <span>$CLUB</span>
                </div>
              </div>

              {/* Bottom interactive action hint */}
              <div className="mt-6 flex items-center gap-1 text-[#0047FF] text-xs font-bold group-hover:translate-x-1 transition-transform">
                <span>Switch creator</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Desktop Connector Arrow to Card 2 */}
            <div className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 z-30 pointer-events-none">
              <BlackCurvedArrowLeft className="w-12 h-12 text-gray-800" />
            </div>
          </div>

          {/* CARD 2: CHOOSE HIGH $CLUB REWARDS */}
          <div 
            className="group relative bg-[#F8FAFC] hover:bg-[#F1F5F9] rounded-[28px] p-6 sm:p-7 flex flex-col justify-between border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            onClick={handleBoostClick}
            id="feature-card-rewards"
          >
            {/* Top Text Content */}
            <div className="text-center">
              <h3 className="font-display font-black text-xl sm:text-2xl text-gray-900 tracking-tight leading-tight uppercase">
                CHOOSE HIGH<br />$CLUB REWARDS
              </h3>
              <p className="text-gray-500 font-medium text-xs sm:text-sm mt-2">
                each account has a different of $CLUB
              </p>
            </div>

            {/* Visual Badge Matching Reference Image */}
            <div className="mt-8 pt-4 flex flex-col items-center justify-center">
              <div className="flex items-center gap-2">
                
                {/* Reward Value Pill */}
                <div className="bg-[#0047FF] text-white font-mono font-black text-xs sm:text-sm px-4 py-2 rounded-full shadow-md">
                  {activeAccountReward.toFixed(4)}
                </div>

                {/* $CLUB Badge */}
                <div className="bg-[#0047FF] text-white font-black text-xs sm:text-sm px-3.5 py-2 rounded-full shadow-md font-unbounded">
                  $CLUB
                </div>
              </div>

              {/* Glowing Neon Circular Arrow Button */}
              <div className="mt-4 flex items-center justify-center">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleBoostClick();
                  }}
                  className={`w-12 h-12 rounded-full bg-[#CCFF00] hover:bg-[#bef200] text-black flex items-center justify-center shadow-lg border-2 border-white transition-all transform active:scale-90 ${
                    isBoosting ? 'rotate-180 scale-110' : 'hover:scale-110'
                  }`}
                  title="Click to boost reward multiplier"
                  id="boost-reward-btn"
                >
                  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-black">
                    <path
                      d="M7 17L17 7M17 7H8M17 7V16"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              {/* Bottom interactive action hint */}
              <div className="mt-4 flex items-center gap-1 text-[#0047FF] text-xs font-bold">
                <span>Multiplier: {rewardMultiplier}x (Click to boost)</span>
              </div>
            </div>

            {/* Desktop Connector Arrow to Card 3 */}
            <div className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 z-30 pointer-events-none">
              <BlackCurvedArrowRight className="w-12 h-12 text-gray-800" />
            </div>
          </div>

          {/* CARD 3: STAKE $CLUB FOR CREATORS */}
          <div 
            className="group relative bg-[#F8FAFC] hover:bg-[#F1F5F9] rounded-[28px] p-6 sm:p-7 flex flex-col justify-between border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            onClick={onOpenStaking}
            id="feature-card-stake"
          >
            {/* Top Text Content */}
            <div className="text-center">
              <h3 className="font-display font-black text-xl sm:text-2xl text-gray-900 tracking-tight leading-tight uppercase">
                STAKE $CLUB<br />FOR CREATORS
              </h3>
              <p className="text-gray-500 font-medium text-xs sm:text-sm mt-2">
                you will receive $CLUB every month
              </p>
            </div>

            {/* Visual Badge Matching Reference Image */}
            <div className="mt-8 pt-4 flex flex-col items-center justify-center">
              {/* Neon Speech Bubble */}
              <div className="relative bg-[#CCFF00] text-black px-5 py-3.5 rounded-[22px] rounded-bl-none shadow-xl border-2 border-white text-center min-w-[190px] group-hover:scale-105 transition-transform">
                <div className="text-[10px] font-extrabold uppercase tracking-wider text-black/80">
                  EST. Monthly $CLUB
                </div>
                <div className="text-lg sm:text-xl font-mono font-black tracking-tight text-black mt-0.5">
                  {monthlyYield.toFixed(5)}
                </div>

                {/* Speech bubble tail pointing bottom left */}
                <div className="absolute -bottom-2 left-0 w-3.5 h-3.5 bg-[#CCFF00] [clip-path:polygon(0_0,100%_0,0_100%)]" />
              </div>

              {/* Bottom interactive action hint */}
              <div className="mt-6 flex items-center gap-1 text-[#0047FF] text-xs font-bold group-hover:translate-x-1 transition-transform">
                <span>Open Staking Calculator</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

        </div>

        {/* Live SocialFi Stats Strip */}
        <div className="mt-14 p-6 rounded-3xl bg-gradient-to-r from-[#0038E0] via-[#0047FF] to-[#0038E0] text-white shadow-xl flex flex-wrap items-center justify-around gap-6">
          <div className="text-center">
            <div className="text-white/70 text-xs font-semibold uppercase tracking-wider">
              Total Value Streamed
            </div>
            <div className="text-2xl sm:text-3xl font-black font-mono mt-1 text-[#CCFF00]">
              $14,892,450.00
            </div>
          </div>

          <div className="h-10 w-px bg-white/20 hidden sm:block" />

          <div className="text-center">
            <div className="text-white/70 text-xs font-semibold uppercase tracking-wider">
              Active Streamers
            </div>
            <div className="text-2xl sm:text-3xl font-black font-mono mt-1 text-white">
              64,280+
            </div>
          </div>

          <div className="h-10 w-px bg-white/20 hidden sm:block" />

          <div className="text-center">
            <div className="text-white/70 text-xs font-semibold uppercase tracking-wider">
              Avg. Creator Yield
            </div>
            <div className="text-2xl sm:text-3xl font-black font-mono mt-1 text-[#CCFF00]">
              38.4% APY
            </div>
          </div>

          <div className="h-10 w-px bg-white/20 hidden sm:block" />

          <div className="text-center">
            <div className="text-white/70 text-xs font-semibold uppercase tracking-wider">
              Network Fee
            </div>
            <div className="text-2xl sm:text-3xl font-black font-mono mt-1 text-white">
              &lt; $0.0005
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
