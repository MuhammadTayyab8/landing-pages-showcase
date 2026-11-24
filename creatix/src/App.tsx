

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import MasterpieceSection from '@/components/MasterpieceSection';
import ServicesSection from '@/components/ServicesSection';
import MarqueeBanner from '@/components/MarqueeBanner';
import TeamSection from '@/components/TeamSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import TickerRibbon from '@/components/TickerRibbon';
import ContactCTASection from '@/components/ContactCTASection';
import Footer from '@/components/Footer';
import ProjectInquiryModal from '@/components/ProjectInquiryModal';
import CustomCursor from '@/components/CustomCursor';
import { SmoothScroll, ScrollProgress, BackToTop, Reveal } from '@/lib/polish';

export default function LandingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'project' | 'career' | 'process'>('project');

  const handleOpenModal = (type: 'project' | 'career' | 'process' = 'project') => {
    setModalType(type);
    setModalOpen(true);
  };

  return (
    <main className="relative min-h-screen bg-[#090b0e] text-white overflow-x-hidden selection:bg-[#b8ff2c] selection:text-black">
      <SmoothScroll />
      <ScrollProgress color="#b8ff2c" />
      <CustomCursor />

      {/* Floating Navbar */}
      <Navbar onOpenInquiry={() => handleOpenModal('project')} />

      {/* Hero Section with Signature White Container */}
      <HeroSection onOpenInquiry={() => handleOpenModal('project')} />

      {/* Key Metrics / Stats Bar */}
      <Reveal><StatsSection /></Reveal>

      {/* "Turning Ideas Into Masterpieces" Showcase */}
      <MasterpieceSection />

      {/* "Our Services" 3-Column Interactive Grid */}
      <ServicesSection
        onOpenInquiry={() => handleOpenModal('project')}
        onOpenProcessModal={() => handleOpenModal('process')}
      />

      {/* Infinite Marquee Typography Ribbon */}
      <MarqueeBanner />

      {/* "Meet the Team" 6-Member Grid */}
      <TeamSection onJoinTeam={() => handleOpenModal('career')} />

      {/* Client Testimonials / Reviews */}
      <TestimonialsSection />

      {/* White Diagonal / Horizontal Discipline Ticker */}
      <TickerRibbon />

      {/* "Get in Touch Today!" CTA Block */}
      <Reveal><ContactCTASection /></Reveal>

      {/* Footer */}
      <Footer />

      <BackToTop className="bg-[#b8ff2c] text-black" />


      {/* Interactive Project Inquiry & Hiring Modal */}
      <ProjectInquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialType={modalType}
      />
    </main>
  );
}
