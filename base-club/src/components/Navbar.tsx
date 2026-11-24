import React, { useState } from 'react';
import { BaseClubLogo } from './SvgDoodles';
import { Wallet, Menu, X, ChevronRight, Sparkles, Activity, Layers, Gift } from 'lucide-react';
import { WalletState } from '../types';

interface NavbarProps {
  wallet: WalletState;
  onOpenWallet: () => void;
  onOpenAbout: () => void;
  onOpenStats: () => void;
  onOpenTokenomics: () => void;
  onOpenAirdrop: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  wallet,
  onOpenWallet,
  onOpenAbout,
  onOpenStats,
  onOpenTokenomics,
  onOpenAirdrop,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-50 w-full pt-4 md:pt-6 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between gap-4">
        {/* Left: Brand Logo */}
        <BaseClubLogo onClick={onOpenAbout} />

        {/* Center: Navigation Pill (Desktop) */}
        <nav 
          className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg text-white text-xs lg:text-sm font-medium tracking-wide"
          id="main-nav-pill"
        >
          <button
            onClick={onOpenAbout}
            className="px-3.5 py-1.5 rounded-full hover:bg-white/15 hover:text-white transition-all text-white/90 cursor-pointer"
            id="nav-about-club"
          >
            About Club
          </button>
          <button
            onClick={onOpenStats}
            className="px-3.5 py-1.5 rounded-full hover:bg-white/15 hover:text-white transition-all text-white/90 cursor-pointer flex items-center gap-1.5"
            id="nav-my-stats"
          >
            <span>My stats</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-pulse"></span>
          </button>
          <button
            onClick={onOpenTokenomics}
            className="px-3.5 py-1.5 rounded-full hover:bg-white/15 hover:text-white transition-all text-white/90 cursor-pointer"
            id="nav-tokenomics"
          >
            Tokenomic
          </button>
          <button
            onClick={onOpenAirdrop}
            className="px-3.5 py-1.5 rounded-full hover:bg-white/15 hover:text-[#CCFF00] transition-all text-white/90 cursor-pointer flex items-center gap-1"
            id="nav-airdrop"
          >
            <span>Airdrop</span>
            <span className="bg-[#CCFF00] text-black text-[10px] font-black px-1.5 py-0.2 rounded-full">
              LIVE
            </span>
          </button>
        </nav>

        {/* Right: Connect Wallet Button (Desktop & Mobile) */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenWallet}
            id="connect-wallet-btn"
            className="group relative flex items-center gap-2 px-4 md:px-6 py-2 rounded-full border border-white/40 bg-white/10 hover:bg-white text-white hover:text-[#0047FF] backdrop-blur-md font-semibold text-xs md:text-sm transition-all duration-200 shadow-md hover:shadow-xl active:scale-95 cursor-pointer"
          >
            {wallet.isConnected ? (
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse"></span>
                <span className="font-mono text-xs">
                  {wallet.ensName || `${wallet.address?.slice(0, 6)}...${wallet.address?.slice(-4)}`}
                </span>
                <span className="bg-[#CCFF00] text-black text-[10px] font-bold px-1.5 py-0.5 rounded-full hidden sm:inline-block">
                  {wallet.balanceClub.toFixed(1)} $CLUB
                </span>
              </div>
            ) : (
              <>
                <Wallet className="w-3.5 h-3.5 text-white group-hover:text-[#0047FF] transition-colors" />
                <span>Connect wallet</span>
              </>
            )}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all cursor-pointer"
            id="mobile-menu-toggle"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden mt-3 p-4 rounded-2xl bg-[#002FA7]/95 backdrop-blur-xl border border-white/20 shadow-2xl space-y-2 animate-in fade-in slide-in-from-top-3 duration-200"
          id="mobile-menu-drawer"
        >
          <button
            onClick={() => {
              onOpenAbout();
              setMobileMenuOpen(false);
            }}
            className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-white/10 text-white font-medium text-left"
          >
            <span className="flex items-center gap-2.5">
              <Sparkles className="w-4 h-4 text-[#CCFF00]" />
              About Club
            </span>
            <ChevronRight className="w-4 h-4 text-white/50" />
          </button>

          <button
            onClick={() => {
              onOpenStats();
              setMobileMenuOpen(false);
            }}
            className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-white/10 text-white font-medium text-left"
          >
            <span className="flex items-center gap-2.5">
              <Activity className="w-4 h-4 text-[#CCFF00]" />
              My stats & Earnings
            </span>
            <span className="bg-[#CCFF00] text-black text-xs font-bold px-2 py-0.5 rounded-full">
              Live
            </span>
          </button>

          <button
            onClick={() => {
              onOpenTokenomics();
              setMobileMenuOpen(false);
            }}
            className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-white/10 text-white font-medium text-left"
          >
            <span className="flex items-center gap-2.5">
              <Layers className="w-4 h-4 text-[#CCFF00]" />
              Tokenomics
            </span>
            <ChevronRight className="w-4 h-4 text-white/50" />
          </button>

          <button
            onClick={() => {
              onOpenAirdrop();
              setMobileMenuOpen(false);
            }}
            className="w-full flex items-center justify-between p-3 rounded-xl bg-[#CCFF00]/15 border border-[#CCFF00]/30 text-white font-bold text-left"
          >
            <span className="flex items-center gap-2.5 text-[#CCFF00]">
              <Gift className="w-4 h-4 text-[#CCFF00]" />
              Claim Airdrop
            </span>
            <span className="bg-[#CCFF00] text-black text-xs font-black px-2 py-0.5 rounded-full">
              Free $CLUB
            </span>
          </button>
        </div>
      )}
    </header>
  );
};
