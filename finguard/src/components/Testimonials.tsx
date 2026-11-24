

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote:
        '“finguard has completely transformed the way I manage my finances. The real-time updates and personalized advice have been invaluable.”',
      name: 'Kelly Williams',
      role: 'Head of Design, Layers',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
    },
    {
      id: 2,
      quote:
        '“The zero-fee international conversions and instant cashback on my FinGuard card saved our company thousands during our overseas expansion.”',
      name: 'Marcus Vance',
      role: 'Chief Financial Officer, Apex Global',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
    },
    {
      id: 3,
      quote:
        '“Managing multiple multi-currency accounts used to be a nightmare. FinGuard’s automated tax buckets and sub-second transfers give us complete clarity.”',
      name: 'Elena Rostova',
      role: 'Founder & Managing Partner, Solaris Ventures',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80',
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 md:py-28 bg-[#F4F4F6] text-neutral-900 overflow-hidden border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tag & Big Orange Quotes */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF4500] block">
              WHAT THEY SAYS ABOUT US
            </span>
          </div>

          {/* Huge Orange Quotation Marks SVG matching screenshot */}
          <div className="text-[#FF4500] select-none">
            <svg width="48" height="40" viewBox="0 0 48 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.8 40C5.76 40 0 34.24 0 27.2C0 20.16 4.48 11.2 13.44 0.32L17.6 3.84C11.52 11.84 8.64 17.6 8.96 21.12C10.24 20.48 11.84 20.16 13.44 20.16C18.24 20.16 22.08 24 22.08 28.8C22.08 34.88 17.92 40 12.8 40ZM38.4 40C31.36 40 25.6 34.24 25.6 27.2C25.6 20.16 30.08 11.2 39.04 0.32L43.2 3.84C37.12 11.84 34.24 17.6 34.56 21.12C35.84 20.48 37.44 20.16 39.04 20.16C43.84 20.16 47.68 24 47.68 28.8C47.68 34.88 43.52 40 38.4 40Z" />
            </svg>
          </div>
        </div>

        {/* Large Quote Content */}
        <div className="min-h-[140px] md:min-h-[160px] flex items-center mb-12">
          <AnimatePresence mode="wait">
            <motion.h3
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black tracking-tight text-neutral-900 leading-[1.2] max-w-5xl"
            >
              {current.quote}
            </motion.h3>
          </AnimatePresence>
        </div>

        {/* Bottom Author Info & Carousel Controls */}
        <div className="flex items-center justify-between pt-6 border-t border-neutral-300/80">
          
          {/* Author info */}
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-neutral-200 border border-neutral-300 shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={current.avatar}
                alt={current.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <p className="text-base font-black text-neutral-900 leading-tight">
                {current.name}
              </p>
              <p className="text-xs text-neutral-500 font-medium">{current.role}</p>
            </div>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2.5">
            <button
              id="testimonial-prev-btn"
              onClick={handlePrev}
              className="w-11 h-11 rounded-full bg-white border border-neutral-300 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white flex items-center justify-center text-neutral-800 transition-all duration-200 cursor-pointer shadow-sm"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              id="testimonial-next-btn"
              onClick={handleNext}
              className="w-11 h-11 rounded-full bg-white border border-neutral-300 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white flex items-center justify-center text-neutral-800 transition-all duration-200 cursor-pointer shadow-sm"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
