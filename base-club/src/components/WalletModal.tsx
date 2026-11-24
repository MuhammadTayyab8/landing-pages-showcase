import React, { useState } from 'react';
import { X, Check, ArrowRight, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';
import { WalletState } from '../types';
import confetti from 'canvas-confetti';

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
  wallet: WalletState;
  onConnect: (address: string, ensName: string) => void;
  onDisconnect: () => void;
  onClaimFaucet: () => void;
}

export const WalletModal: React.FC<WalletModalProps> = ({
  isOpen,
  onClose,
  wallet,
  onConnect,
  onDisconnect,
  onClaimFaucet,
}) => {
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);

  if (!isOpen) return null;

  const providers = [
    {
      id: 'coinbase',
      name: 'Coinbase Smart Wallet',
      description: 'Zero gas passes & passkeys on Base',
      color: '#0052FF',
      iconUrl: 'https://avatars.githubusercontent.com/u/1885080?s=200&v=4',
      popular: true,
    },
    {
      id: 'metamask',
      name: 'MetaMask',
      description: 'Connect with standard browser extension',
      color: '#F6851B',
      iconUrl: 'https://raw.githubusercontent.com/MetaMask/brand-resources/master/SVG/metamask-fox.svg',
      popular: false,
    },
    {
      id: 'rainbow',
      name: 'Rainbow',
      description: 'Delightful Ethereum & Base wallet',
      color: '#001E59',
      iconUrl: 'https://avatars.githubusercontent.com/u/48327834?s=200&v=4',
      popular: false,
    },
    {
      id: 'phantom',
      name: 'Phantom',
      description: 'Multi-chain Web3 wallet',
      color: '#AB9FF2',
      iconUrl: 'https://avatars.githubusercontent.com/u/78782331?s=200&v=4',
      popular: false,
    },
  ];

  const handleProviderSelect = (providerId: string) => {
    setSelectedProvider(providerId);
    setIsConnecting(true);
    setTimeout(() => {
      setIsConnecting(false);
      const mockAddresses: Record<string, { address: string; ens: string }> = {
        coinbase: { address: '0x71C...4982', ens: 'basebuilder.base.eth' },
        metamask: { address: '0x94B...10aF', ens: 'pearl.eth' },
        rainbow: { address: '0x32A...89C4', ens: 'rainbowuser.eth' },
        phantom: { address: '0x88D...5301', ens: 'degen.base.eth' },
      };
      const chosen = mockAddresses[providerId] || { address: '0x12A...99FF', ens: 'guest.eth' };
      onConnect(chosen.address, chosen.ens);
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#0052FF', '#CCFF00', '#FFFFFF'],
      });
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl text-gray-900 border border-gray-100"
        id="wallet-modal-card"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-900 transition-all cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {wallet.isConnected ? (
          <div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#0047FF] text-white flex items-center justify-center font-bold text-lg">
                BASE
              </div>
              <div>
                <h3 className="font-display font-black text-xl text-gray-900">
                  {wallet.ensName || 'Connected Wallet'}
                </h3>
                <p className="text-xs text-gray-500 font-mono">
                  {wallet.address} • <span className="text-emerald-600 font-semibold">{wallet.network}</span>
                </p>
              </div>
            </div>

            {/* Balances Card */}
            <div className="mt-6 p-4 rounded-2xl bg-gray-50 border border-gray-200 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500 font-medium">$CLUB Balance</span>
                <span className="font-mono font-black text-[#0047FF] text-base">
                  {wallet.balanceClub.toFixed(2)} $CLUB
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500 font-medium">ETH (Gas on Base)</span>
                <span className="font-mono font-bold text-gray-800">
                  {wallet.balanceEth.toFixed(4)} ETH
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 space-y-3">
              <button
                onClick={() => {
                  onClaimFaucet();
                  confetti({
                    particleCount: 50,
                    spread: 60,
                    origin: { y: 0.6 },
                    colors: ['#CCFF00', '#0052FF'],
                  });
                }}
                className="w-full py-3 px-4 rounded-xl bg-[#CCFF00] hover:bg-[#bef200] text-black font-black text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                id="faucet-claim-btn"
              >
                <Sparkles className="w-4 h-4" />
                <span>Claim Free 50 $CLUB Faucet</span>
              </button>

              <button
                onClick={() => {
                  onDisconnect();
                  onClose();
                }}
                className="w-full py-2.5 px-4 rounded-xl border border-red-200 text-red-600 hover:bg-red-50 font-bold text-xs transition-all cursor-pointer"
              >
                Disconnect Wallet
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="text-left mb-6">
              <span className="text-[#0047FF] font-black text-xs uppercase tracking-widest bg-[#0047FF]/10 px-3 py-1 rounded-full font-unbounded">
                Web3 Authentication
              </span>
              <h3 className="font-display font-black text-2xl text-gray-900 mt-2">
                Connect Wallet
              </h3>
              <p className="text-gray-500 text-xs mt-1">
                Select your preferred Base-compatible wallet to start streaming $CLUB rewards.
              </p>
            </div>

            {/* Wallet Options */}
            <div className="space-y-2.5">
              {providers.map((p) => (
                <button
                  key={p.id}
                  onClick={() => handleProviderSelect(p.id)}
                  disabled={isConnecting}
                  className="w-full flex items-center justify-between p-3.5 rounded-2xl border border-gray-200 hover:border-[#0047FF] hover:bg-blue-50/50 transition-all text-left group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center p-2 border border-gray-200 group-hover:scale-105 transition-transform">
                      <span className="font-black text-xs text-[#0047FF]">
                        {p.name.slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-sm text-gray-900">{p.name}</span>
                        {p.popular && (
                          <span className="bg-[#CCFF00] text-black text-[10px] font-black px-1.5 py-0.2 rounded-full">
                            Recommended
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] text-gray-500 block">{p.description}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#0047FF] group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Verified Base Smart Contracts
              </span>
              <a 
                href="https://base.org" 
                target="_blank" 
                rel="noreferrer" 
                className="text-[#0047FF] font-semibold hover:underline flex items-center gap-0.5"
              >
                Learn more <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
