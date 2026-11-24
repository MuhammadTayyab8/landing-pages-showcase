import React, { useState } from 'react';
import { X, Gift, Sparkles, CheckCircle2, ArrowRight, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';

interface AirdropModalProps {
  isOpen: boolean;
  onClose: () => void;
  onClaimAirdrop: (amount: number) => void;
}

export const AirdropModal: React.FC<AirdropModalProps> = ({
  isOpen,
  onClose,
  onClaimAirdrop,
}) => {
  const [ensInput, setEnsInput] = useState('baseclub.eth');
  const [checking, setChecking] = useState(false);
  const [checkedResult, setCheckedResult] = useState<{
    eligible: boolean;
    allocation: number;
    multiplier: string;
    tier: string;
    criteria: { name: string; status: boolean; pts: number }[];
  } | null>({
    eligible: true,
    allocation: 480.50,
    multiplier: '2.5x Early Clubber',
    tier: 'Diamond Creator Tier',
    criteria: [
      { name: 'Base Network Genesis User', status: true, pts: 150 },
      { name: 'Farcaster / SocialFi Active', status: true, pts: 200 },
      { name: 'Creator Support Activity', status: true, pts: 130.5 },
    ],
  });
  const [claimed, setClaimed] = useState(false);

  if (!isOpen) return null;

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ensInput) return;
    setChecking(true);
    setClaimed(false);
    setTimeout(() => {
      setChecking(false);
      const isBase = ensInput.toLowerCase().includes('base') || ensInput.toLowerCase().includes('eth');
      const alloc = Math.floor(Math.random() * 350 + 200);
      setCheckedResult({
        eligible: true,
        allocation: alloc,
        multiplier: isBase ? '3.0x Base OG' : '1.5x Pioneer',
        tier: isBase ? 'Platinum Tier' : 'Gold Tier',
        criteria: [
          { name: 'On-chain Base Activity', status: true, pts: Math.floor(alloc * 0.4) },
          { name: 'SocialFi Stream Pass', status: true, pts: Math.floor(alloc * 0.35) },
          { name: 'Early Bird Multiplier', status: true, pts: Math.floor(alloc * 0.25) },
        ],
      });
    }, 500);
  };

  const handleClaim = () => {
    if (!checkedResult) return;
    setClaimed(true);
    onClaimAirdrop(checkedResult.allocation);
    confetti({
      particleCount: 100,
      spread: 90,
      origin: { y: 0.5 },
      colors: ['#CCFF00', '#0052FF', '#FFFFFF', '#FF3B30'],
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl text-gray-900 border border-gray-100 max-h-[90vh] overflow-y-auto"
        id="airdrop-modal-card"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-900 transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-left mb-6">
          <div className="flex items-center gap-2">
            <span className="bg-[#CCFF00] text-black font-black text-xs uppercase tracking-wider px-3 py-1 rounded-full font-unbounded">
              Season 1 Allocation
            </span>
            <span className="bg-blue-50 text-[#0047FF] text-xs font-bold px-2 py-0.5 rounded-full">
              400M $CLUB Pool
            </span>
          </div>
          <h3 className="font-display font-black text-2xl sm:text-3xl text-gray-900 mt-2">
            Get Started For Free
          </h3>
          <p className="text-gray-500 text-xs sm:text-sm mt-1">
            Check your Base address or ENS domain eligibility to claim your initial $CLUB streaming grant.
          </p>
        </div>

        {/* Input Form */}
        <form onSubmit={handleCheck} className="flex gap-2">
          <input
            type="text"
            value={ensInput}
            onChange={(e) => setEnsInput(e.target.value)}
            placeholder="e.g. pearl.eth or 0x..."
            className="flex-1 px-4 py-3 rounded-2xl bg-gray-50 border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-[#0047FF] focus:bg-white transition-all font-mono"
          />
          <button
            type="submit"
            disabled={checking}
            className="px-5 py-3 rounded-2xl bg-[#0047FF] hover:bg-[#0038E0] text-white font-bold text-sm transition-all shadow-md active:scale-95 cursor-pointer disabled:opacity-50"
          >
            {checking ? 'Checking...' : 'Check'}
          </button>
        </form>

        {/* Results */}
        {checkedResult && (
          <div className="mt-6 space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-200">
            {/* Main Allocation Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#0038E0] to-[#0052FF] text-white shadow-lg relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-white/80 font-medium">Eligible $CLUB Grant</div>
                  <div className="text-3xl sm:text-4xl font-mono font-black text-[#CCFF00] mt-1">
                    {checkedResult.allocation.toFixed(2)} <span className="text-white text-lg sm:text-xl font-display">$CLUB</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="bg-[#CCFF00] text-black font-black text-xs px-2.5 py-1 rounded-full uppercase">
                    {checkedResult.tier}
                  </span>
                  <div className="text-[11px] text-white/80 font-mono mt-1">
                    {checkedResult.multiplier}
                  </div>
                </div>
              </div>
            </div>

            {/* Criteria Breakdown */}
            <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200 space-y-2.5">
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                Eligibility Breakdown
              </div>
              {checkedResult.criteria.map((c, i) => (
                <div key={i} className="flex items-center justify-between text-xs py-1 border-b border-gray-200/60 last:border-0">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="font-medium text-gray-800">{c.name}</span>
                  </div>
                  <span className="font-mono font-bold text-[#0047FF]">+{c.pts} $CLUB</span>
                </div>
              ))}
            </div>

            {/* Claim Button */}
            {!claimed ? (
              <button
                onClick={handleClaim}
                className="w-full py-3.5 px-6 rounded-2xl bg-[#CCFF00] hover:bg-[#bef200] text-black font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transition-all cursor-pointer transform hover:scale-[1.01] active:scale-95"
                id="claim-airdrop-btn"
              >
                <Zap className="w-4 h-4 fill-black" />
                <span>Claim {checkedResult.allocation.toFixed(2)} $CLUB Tokens Now</span>
              </button>
            ) : (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-center font-bold text-sm flex items-center justify-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Successfully claimed! Tokens added to your stream balance.</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
