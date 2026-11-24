import React, { useState } from 'react';
import { NeonTopLoopArrow, NeonBottomUpArrow, GetStartedBadge } from './SvgDoodles';
import { PunkAvatar, ApeAvatar } from './Avatars';
import { Sparkles, CheckCircle2, TrendingUp, Zap } from 'lucide-react';
import { Creator } from '../types';

interface HeroSectionProps {
  onSelectCreator: (creator: Creator) => void;
  onOpenAirdrop: () => void;
  onOpenAbout: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSelectCreator,
  onOpenAirdrop,
}) => {
  const [pearlHovered, setPearlHovered] = useState(false);
  const [baseClubHovered, setBaseClubHovered] = useState(false);

  const pearlCreator: Creator = {
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
  };

  const baseClubCreator: Creator = {
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
  };

  return (
    <section 
      className="relative w-full max-w-7xl mx-auto px-4 md:px-8 pt-8 md:pt-14 pb-14 md:pb-20 flex flex-col items-center justify-center select-none overflow-visible"
      id="hero-banner-section"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-white/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Main Container */}
      <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Top Doodle Arrow - Looping from top down towards pearl.eth */}
        <div className="absolute -top-4 md:-top-10 right-4 md:right-28 pointer-events-none z-20">
          <NeonTopLoopArrow className="w-24 h-24 md:w-36 md:h-36 drop-shadow-[0_0_12px_rgba(204,255,0,0.7)] animate-pulse" />
        </div>

        {/* Floating Rotating "GET STARTED OF FREE" Badge (Desktop & Mobile) */}
        <div className="absolute right-0 md:right-8 -bottom-6 md:bottom-2 z-30 transform translate-y-4 md:translate-y-0 hidden sm:block">
          <GetStartedBadge onClick={onOpenAirdrop} />
        </div>

        {/* Bottom Left Neon Arrow - Pointing Up to baseclub.eth */}
        <div className="absolute bottom-2 md:bottom-6 left-2 md:left-24 pointer-events-none z-20 hidden sm:block">
          <NeonBottomUpArrow className="w-24 h-24 md:w-36 md:h-36 drop-shadow-[0_0_12px_rgba(204,255,0,0.7)]" />
        </div>

        {/* HERO TYPOGRAPHY DISPLAY */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center tracking-tighter uppercase font-display leading-[0.88] md:leading-[0.85]">
          
          {/* Row 1: #CLUB */}
          <div className="flex items-center justify-center text-[16vw] sm:text-[15vw] md:text-[11vw] lg:text-[132px] font-black text-white drop-shadow-sm">
            <span className="text-[#CCFF00] mr-1 md:mr-3 font-unbounded text-[17vw] sm:text-[16vw] md:text-[11.5vw] lg:text-[138px] drop-shadow-[0_0_20px_rgba(204,255,0,0.5)]">
              #
            </span>
            <span className="tracking-tight">CLUB</span>
          </div>

          {/* Row 2: SOCI [pearl.eth Card] LFI / FI */}
          <div className="relative w-full flex items-center justify-center text-[12vw] sm:text-[14.5vw] md:text-[10.5vw] lg:text-[126px] font-black text-white">
            <span className="tracking-tight">SOCI</span>
            {/* On desktop the floating card stands in for the "A" */}
            <span className="tracking-tight sm:hidden">A</span>

            {/* FLOATING CARD 1: pearl.eth (Desktop & Tablet position between text) */}
            <div
              onClick={() => onSelectCreator(pearlCreator)}
              onMouseEnter={() => setPearlHovered(true)}
              onMouseLeave={() => setPearlHovered(false)}
              className={`relative hidden sm:block mx-1 sm:mx-2 md:mx-4 -my-4 sm:-my-6 md:-my-8 z-30 cursor-pointer transition-all duration-300 transform ${
                pearlHovered ? 'scale-110 -rotate-1' : 'rotate-2 hover:scale-105'
              }`}
              id="hero-card-pearl"
            >
              <div className="glass-card rounded-[22px] md:rounded-[28px] p-3 sm:p-4 md:p-5 flex flex-col items-center text-center shadow-2xl backdrop-blur-xl border border-white/40 min-w-[130px] sm:min-w-[160px] md:min-w-[190px]">
                {/* 3D Pixel Punk Avatar */}
                <div className="relative mb-2 sm:mb-3">
                  <PunkAvatar className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 shadow-md ring-2 ring-white/60" />
                  <span className="absolute -bottom-1 -right-1 bg-[#CCFF00] text-black p-0.5 rounded-full shadow">
                    <Zap className="w-3 h-3 md:w-3.5 md:h-3.5 fill-black" />
                  </span>
                </div>

                {/* Handle */}
                <div className="flex items-center gap-1 text-white font-bold text-xs sm:text-sm md:text-base tracking-normal lowercase">
                  <span>pearl.eth</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#CCFF00] fill-[#CCFF00]/20" />
                </div>

                {/* Points */}
                <div className="text-white/80 font-mono text-[10px] sm:text-xs md:text-xs tracking-normal mt-0.5 whitespace-nowrap">
                  293 582 points
                </div>

                {/* Live stream badge */}
                <div className="mt-2 px-2 py-0.5 rounded-full bg-[#CCFF00]/20 border border-[#CCFF00]/40 text-[#CCFF00] text-[9px] sm:text-[10px] font-bold tracking-wider flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-ping" />
                  <span>0.042 $CLUB/s</span>
                </div>
              </div>
            </div>

            <span className="tracking-tight">LFI</span>
          </div>

          {/* Row 3: P [baseclub.eth Card] EOPLE */}
          <div className="relative w-full flex items-center justify-center text-[13.5vw] sm:text-[14.5vw] md:text-[10.5vw] lg:text-[126px] font-black text-white">
            <span className="tracking-tight">P</span>
            {/* On desktop the floating card stands in for the "E" */}
            <span className="tracking-tight sm:hidden">E</span>

            {/* FLOATING CARD 2: baseclub.eth */}
            <div
              onClick={() => onSelectCreator(baseClubCreator)}
              onMouseEnter={() => setBaseClubHovered(true)}
              onMouseLeave={() => setBaseClubHovered(false)}
              className={`relative hidden sm:block mx-1 sm:mx-2 md:mx-4 -my-4 sm:-my-6 md:-my-8 z-30 cursor-pointer transition-all duration-300 transform ${
                baseClubHovered ? 'scale-110 rotate-1' : '-rotate-3 hover:scale-105'
              }`}
              id="hero-card-baseclub"
            >
              <div className="glass-card rounded-[22px] md:rounded-[28px] p-3 sm:p-4 md:p-5 flex flex-col items-center text-center shadow-2xl backdrop-blur-xl border border-white/40 min-w-[130px] sm:min-w-[160px] md:min-w-[190px]">
                {/* Bored Ape Avatar */}
                <div className="relative mb-2 sm:mb-3">
                  <ApeAvatar className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 shadow-md ring-2 ring-white/60" />
                  <span className="absolute -bottom-1 -right-1 bg-[#CCFF00] text-black p-0.5 rounded-full shadow">
                    <TrendingUp className="w-3 h-3 md:w-3.5 md:h-3.5" />
                  </span>
                </div>

                {/* Handle */}
                <div className="flex items-center gap-1 text-white font-bold text-xs sm:text-sm md:text-base tracking-normal lowercase">
                  <span>baseclub.eth</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#CCFF00] fill-[#CCFF00]/20" />
                </div>

                {/* Points */}
                <div className="text-white/80 font-mono text-[10px] sm:text-xs md:text-xs tracking-normal mt-0.5 whitespace-nowrap">
                  23 422 points
                </div>

                {/* Live stream badge */}
                <div className="mt-2 px-2 py-0.5 rounded-full bg-white/20 border border-white/30 text-white text-[9px] sm:text-[10px] font-bold tracking-wider flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  <span>Top Creator</span>
                </div>
              </div>
            </div>

            <span className="tracking-tight">OPLE</span>
          </div>

        </div>


        {/* Mobile: compact creator chips + CTA (inline cards are hidden below sm) */}
        <div className="mt-6 flex w-full items-center justify-center gap-3 sm:hidden">
          {[
            { creator: pearlCreator, Avatar: PunkAvatar, label: "0.042 $CLUB/s" },
            { creator: baseClubCreator, Avatar: ApeAvatar, label: "Top creator" },
          ].map(({ creator, Avatar, label }) => (
            <button
              key={creator.id}
              type="button"
              onClick={() => onSelectCreator(creator)}
              className="glass-card flex items-center gap-2 rounded-2xl border border-white/40 px-3 py-2 text-left backdrop-blur-xl"
            >
              <Avatar className="h-9 w-9 ring-2 ring-white/60" />
              <span className="leading-tight">
                <span className="block text-xs font-bold lowercase text-white">{creator.handle}</span>
                <span className="block font-mono text-[10px] text-[#CCFF00]">{label}</span>
              </span>
            </button>
          ))}
        </div>

        {/* Sub-headline / Fast onboarding tagline */}
        <div className="mt-6 md:mt-8 max-w-xl text-center z-10">
          <p className="text-white/90 text-sm md:text-base font-medium leading-relaxed">
            The next-generation SocialFi creator protocol on <span className="font-bold text-white underline decoration-[#CCFF00] decoration-2 underline-offset-4">Base</span>. 
            Subscribe to verified creators, stream <span className="font-mono font-bold text-[#CCFF00]">$CLUB</span> rewards every single second, and earn monthly yields.
          </p>
        </div>

        {/* Mobile CTA (the rotating badge is desktop/tablet only) */}
        <button
          type="button"
          onClick={onOpenAirdrop}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#CCFF00] px-6 py-3 text-sm font-black uppercase text-black shadow-[0_0_24px_rgba(204,255,0,0.45)] sm:hidden"
        >
          Get started free
        </button>

      </div>
    </section>
  );
};
