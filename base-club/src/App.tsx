import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeatureCards } from './components/FeatureCards';
import { WalletModal } from './components/WalletModal';
import { AirdropModal } from './components/AirdropModal';
import { StakingModal } from './components/StakingModal';
import { TokenomicsModal } from './components/TokenomicsModal';
import { StatsModal } from './components/StatsModal';
import { AboutModal } from './components/AboutModal';
import { CreatorSelectorModal } from './components/CreatorSelectorModal';
import { BaseClubLogo } from './components/SvgDoodles';
import { LiveLeaderboard } from './components/LiveLeaderboard';
import { SmoothScroll, ScrollProgress, BackToTop } from './lib/polish';
import { Creator, WalletState } from './types';
import { Twitter, Disc as Discord, Github, ExternalLink, ShieldCheck, Zap, Globe } from 'lucide-react';

export default function App() {
  // Wallet state
  const [wallet, setWallet] = useState<WalletState>({
    isConnected: false,
    address: null,
    ensName: null,
    balanceEth: 0.045,
    balanceClub: 250.0,
    network: 'Base Mainnet',
  });

  // Creator state
  const creatorsList: Creator[] = [
    {
      id: 'pearl',
      handle: 'pearl.eth',
      name: 'Pearl Crypto',
      avatar: 'punk',
      points: 293582,
      ratePerSecond: 0.0422,
      followers: 18400,
      category: 'Alpha & NFT',
      verified: true,
      avatarType: 'punk',
    },
    {
      id: 'baseclub',
      handle: 'baseclub.eth',
      name: 'Base Club Genesis',
      avatar: 'ape',
      points: 23422,
      ratePerSecond: 0.0125,
      followers: 8900,
      category: 'Community DAO',
      verified: true,
      avatarType: 'ape',
    },
    {
      id: 'nova',
      handle: 'nova.base.eth',
      name: 'Nova Studio',
      avatar: 'cat',
      points: 18900,
      ratePerSecond: 0.0098,
      followers: 54200,
      category: 'Base Ecosystem',
      verified: true,
      avatarType: 'cat',
    },
  ];

  const [activeCreator, setActiveCreator] = useState<Creator>(creatorsList[1]); // baseclub.eth by default
  const [rewardMultiplier, setRewardMultiplier] = useState<number>(1.0);

  // Modals state
  const [walletModalOpen, setWalletModalOpen] = useState(false);
  const [airdropModalOpen, setAirdropModalOpen] = useState(false);
  const [stakingModalOpen, setStakingModalOpen] = useState(false);
  const [tokenomicsModalOpen, setTokenomicsModalOpen] = useState(false);
  const [statsModalOpen, setStatsModalOpen] = useState(false);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [creatorSelectorOpen, setCreatorSelectorOpen] = useState(false);

  // Boost rewards handler
  const handleBoostRewards = () => {
    setRewardMultiplier((prev) => +(prev + 0.25).toFixed(2));
  };

  const handleConnect = (address: string, ensName: string) => {
    setWallet((prev) => ({
      ...prev,
      isConnected: true,
      address,
      ensName,
      balanceClub: prev.balanceClub + 50,
    }));
  };

  const handleDisconnect = () => {
    setWallet((prev) => ({
      ...prev,
      isConnected: false,
      address: null,
      ensName: null,
    }));
  };

  const handleClaimFaucet = () => {
    setWallet((prev) => ({
      ...prev,
      balanceClub: prev.balanceClub + 50,
    }));
  };

  const handleClaimAirdrop = (amount: number) => {
    setWallet((prev) => ({
      ...prev,
      balanceClub: prev.balanceClub + amount,
    }));
  };

  const handleStakeSuccess = (amount: number) => {
    setWallet((prev) => ({
      ...prev,
      balanceClub: Math.max(0, prev.balanceClub - amount),
    }));
  };

  const handleClaimStream = (amount: number) => {
    setWallet((prev) => ({
      ...prev,
      balanceClub: prev.balanceClub + amount,
    }));
  };

  return (
    <div className="min-h-screen bg-[#0045e6] text-white flex flex-col justify-between selection:bg-[#CCFF00] selection:text-black overflow-x-hidden font-body relative">
      
      <SmoothScroll />
      <ScrollProgress color="#CCFF00" />
      <BackToTop className="bg-[#CCFF00] text-black" />

      {/* Background Electric Grid Overlay */}
      <div className="absolute inset-0 bg-base-grid pointer-events-none opacity-90 -z-10" />

      {/* Top Main Navigation */}
      <Navbar
        wallet={wallet}
        onOpenWallet={() => setWalletModalOpen(true)}
        onOpenAbout={() => setAboutModalOpen(true)}
        onOpenStats={() => setStatsModalOpen(true)}
        onOpenTokenomics={() => setTokenomicsModalOpen(true)}
        onOpenAirdrop={() => setAirdropModalOpen(true)}
      />

      {/* Hero Section */}
      <main className="flex-1 flex flex-col justify-between w-full overflow-visible">
        <HeroSection
          onSelectCreator={(creator) => {
            setActiveCreator(creator);
            setCreatorSelectorOpen(true);
          }}
          onOpenAirdrop={() => setAirdropModalOpen(true)}
          onOpenAbout={() => setAboutModalOpen(true)}
        />

        {/* Feature Cards Bottom White Section */}
        <FeatureCards
          wallet={wallet}
          activeCreator={activeCreator}
          onOpenStaking={() => setStakingModalOpen(true)}
          onOpenCreatorSelector={() => setCreatorSelectorOpen(true)}
          onBoostRewards={handleBoostRewards}
          rewardMultiplier={rewardMultiplier}
        />

        {/* Signature: live, real-time creator leaderboard */}
        <LiveLeaderboard
          creators={creatorsList}
          activeCreatorId={activeCreator.id}
          multiplier={rewardMultiplier}
          onSubscribe={setActiveCreator}
        />
      </main>

      {/* Footer */}
      <footer className="w-full bg-white border-t border-gray-100 py-8 px-4 sm:px-8 text-gray-600 text-xs">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <BaseClubLogo />
            <span className="text-gray-400">|</span>
            <span className="text-gray-500 font-medium">Built on Base Layer 2</span>
          </div>

          <div className="flex items-center gap-6 font-semibold text-gray-700">
            <button 
              onClick={() => setAboutModalOpen(true)} 
              className="hover:text-[#0047FF] transition-colors cursor-pointer"
            >
              Docs & Whitepaper
            </button>
            <button 
              onClick={() => setTokenomicsModalOpen(true)} 
              className="hover:text-[#0047FF] transition-colors cursor-pointer"
            >
              Tokenomics
            </button>
            <button 
              onClick={() => setAirdropModalOpen(true)} 
              className="hover:text-[#0047FF] transition-colors cursor-pointer"
            >
              Airdrop Criteria
            </button>
            <a 
              href="https://base.org" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-[#0047FF] transition-colors flex items-center gap-1"
            >
              Base Network <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="text-gray-400 font-mono text-[11px]">
            © {new Date().getFullYear()} BASE CLUB SocialFi Protocol. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Interactive Modals */}
      <WalletModal
        isOpen={walletModalOpen}
        onClose={() => setWalletModalOpen(false)}
        wallet={wallet}
        onConnect={handleConnect}
        onDisconnect={handleDisconnect}
        onClaimFaucet={handleClaimFaucet}
      />

      <AirdropModal
        isOpen={airdropModalOpen}
        onClose={() => setAirdropModalOpen(false)}
        onClaimAirdrop={handleClaimAirdrop}
      />

      <StakingModal
        isOpen={stakingModalOpen}
        onClose={() => setStakingModalOpen(false)}
        wallet={wallet}
        activeCreator={activeCreator}
        onStakeSuccess={handleStakeSuccess}
      />

      <TokenomicsModal
        isOpen={tokenomicsModalOpen}
        onClose={() => setTokenomicsModalOpen(false)}
      />

      <StatsModal
        isOpen={statsModalOpen}
        onClose={() => setStatsModalOpen(false)}
        wallet={wallet}
        activeCreator={activeCreator}
        rewardMultiplier={rewardMultiplier}
        onClaimStream={handleClaimStream}
      />

      <AboutModal
        isOpen={aboutModalOpen}
        onClose={() => setAboutModalOpen(false)}
        onOpenAirdrop={() => {
          setAboutModalOpen(false);
          setAirdropModalOpen(true);
        }}
      />

      <CreatorSelectorModal
        isOpen={creatorSelectorOpen}
        onClose={() => setCreatorSelectorOpen(false)}
        creators={creatorsList}
        activeCreator={activeCreator}
        onSelectCreator={setActiveCreator}
      />

    </div>
  );
}
