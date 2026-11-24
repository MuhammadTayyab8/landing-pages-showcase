import React, { useState } from 'react';
import { X, Copy, Check, PieChart, Coins, Flame, Layers, Lock } from 'lucide-react';

interface TokenomicsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TokenomicsModal: React.FC<TokenomicsModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const contractAddress = '0xCLUB88290FA1C840798d1aB319808E51B8380024';

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const distribution = [
    { label: 'Community Airdrop & Genesis Streams', pct: 40, color: '#CCFF00', desc: 'Direct second-by-second reward distribution' },
    { label: 'Creator Staking & Staker Yields', pct: 30, color: '#0047FF', desc: 'Monthly recurring yield pool for loyal backers' },
    { label: 'Ecosystem Growth & Grants', pct: 15, color: '#6366F1', desc: 'Base builder bounties & developer tooling' },
    { label: 'DEX Liquidity on Aerodrome / Uniswap', pct: 10, color: '#10B981', desc: 'Locked liquidity pool pairing with ETH/USDC' },
    { label: 'Core Contributors (24m Vesting)', pct: 5, color: '#F59E0B', desc: 'Linear vesting with 6-month cliff' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl text-gray-900 border border-gray-100 max-h-[90vh] overflow-y-auto"
        id="tokenomics-modal-card"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-900 transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-left mb-6">
          <span className="text-[#0047FF] font-black text-xs uppercase tracking-widest bg-[#0047FF]/10 px-3 py-1 rounded-full font-unbounded">
            Protocol Economics
          </span>
          <h3 className="font-display font-black text-2xl sm:text-3xl text-gray-900 mt-2">
            $CLUB Tokenomics
          </h3>
          <p className="text-gray-500 text-xs sm:text-sm mt-1">
            Deflationary utility and streaming token native to Base Layer 2.
          </p>
        </div>

        {/* Total Supply Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
          <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-200">
            <div className="text-[11px] text-gray-500 font-semibold uppercase">Total Supply</div>
            <div className="text-lg font-mono font-black text-gray-900 mt-0.5">1,000,000,000</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-200">
            <div className="text-[11px] text-gray-500 font-semibold uppercase">Initial Circulating</div>
            <div className="text-lg font-mono font-black text-[#0047FF] mt-0.5">180,000,000</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-200 col-span-2 sm:col-span-1">
            <div className="text-[11px] text-gray-500 font-semibold uppercase">Burn Rate</div>
            <div className="text-lg font-mono font-black text-emerald-600 mt-0.5">1.5% / Transfer</div>
          </div>
        </div>

        {/* Visual Distribution Bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between text-xs font-bold text-gray-700 mb-2">
            <span>Token Distribution</span>
            <span>100% Fixed</span>
          </div>
          <div className="h-4 w-full rounded-full overflow-hidden flex shadow-inner">
            {distribution.map((d, i) => (
              <div
                key={i}
                style={{ width: `${d.pct}%`, backgroundColor: d.color }}
                title={`${d.label}: ${d.pct}%`}
                className="h-full first:rounded-l-full last:rounded-r-full hover:opacity-90 transition-opacity"
              />
            ))}
          </div>
        </div>

        {/* Breakdown Items List */}
        <div className="space-y-3 mb-6">
          {distribution.map((d, i) => (
            <div key={i} className="p-3 rounded-xl bg-gray-50/80 border border-gray-200/80 flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2.5">
                <span className="w-3.5 h-3.5 rounded-full flex-shrink-0" style={{ backgroundColor: d.color }} />
                <div>
                  <span className="font-bold text-gray-900">{d.label}</span>
                  <span className="block text-[11px] text-gray-500">{d.desc}</span>
                </div>
              </div>
              <span className="font-mono font-black text-sm text-gray-900 bg-white px-2 py-1 rounded-md border border-gray-200 shadow-xs">
                {d.pct}%
              </span>
            </div>
          ))}
        </div>

        {/* Contract Address Bar */}
        <div className="p-3.5 rounded-2xl bg-blue-50/80 border border-blue-200 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <div className="text-[10px] uppercase font-bold text-[#0047FF] tracking-wider">
              Base Smart Contract Address
            </div>
            <div className="font-mono text-xs text-gray-800 truncate mt-0.5">
              {contractAddress}
            </div>
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#0047FF] text-white text-xs font-bold hover:bg-[#0038E0] transition-colors cursor-pointer flex-shrink-0"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
