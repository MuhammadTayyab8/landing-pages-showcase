

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { AboutUs } from '@/components/AboutUs';
import { Features } from '@/components/Features';
import { Benefits } from '@/components/Benefits';
import { Partners } from '@/components/Partners';
import { Testimonials } from '@/components/Testimonials';
import { Footer } from '@/components/Footer';
import { AuthModal } from '@/components/AuthModal';
import { PartnerModal } from '@/components/PartnerModal';
import { SavingsCalculator } from '@/components/SavingsCalculator';
import { SmoothScroll, ScrollProgress, BackToTop } from '@/lib/polish';

export default function Home() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signup' | 'login'>('signup');
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);

  const handleOpenAuth = (mode: 'signup' | 'login' = 'signup') => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const handleCloseAuth = () => {
    setAuthModalOpen(false);
  };

  const handleOpenPartner = () => {
    setPartnerModalOpen(true);
  };

  const handleClosePartner = () => {
    setPartnerModalOpen(false);
  };

  return (
    <main className="min-h-screen bg-black text-white relative">
      <SmoothScroll />
      <ScrollProgress color="#FF4500" />

      {/* Top Header & Navigation */}
      <Navbar onOpenAuth={handleOpenAuth} />

      {/* Hero Section with 3D Card Stack & Steppers */}
      <Hero onOpenAuth={handleOpenAuth} />

      {/* About Us & Metrics Section */}
      <AboutUs />

      {/* Features & All-In-One Savings Platform with Live Invoice Preview */}
      <Features />

      {/* Interactive savings projection */}
      <SavingsCalculator onOpenAuth={() => handleOpenAuth('signup')} />

      {/* Benefits & International Shopping Section */}
      <Benefits onOpenAuth={handleOpenAuth} />

      {/* Trusted Partners & Real-Time Financial Monitoring Bento Grid */}
      <Partners onOpenPartnerModal={handleOpenPartner} />

      {/* Customer Testimonials Carousel */}
      <Testimonials />

      {/* Footer with Giant 3D "finguard" Typography and Navigation Links */}
      <Footer onOpenAuth={handleOpenAuth} />

      <BackToTop className="bg-[#FF4500] text-white" />

      {/* Interactive Modals */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={handleCloseAuth}
        initialMode={authMode}
      />

      <PartnerModal
        isOpen={partnerModalOpen}
        onClose={handleClosePartner}
      />
    </main>
  );
}
