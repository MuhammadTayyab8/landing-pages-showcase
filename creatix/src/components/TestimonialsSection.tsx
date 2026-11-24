

import React, { useState } from 'react';
import Image from '@/lib/Image';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ArrowLeft, ArrowRight, Star } from 'lucide-react';

interface Review {
  id: number;
  author: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
  rating: number;
}

const reviews: Review[] = [
  {
    id: 1,
    author: 'Alan Baker',
    role: 'CEO',
    company: 'Radiant Company',
    quote: 'Working with Creatix Studio has been an incredible experience. They truly listened to our needs and delivered a stunning design that exceeded our expectations. We couldn’t be happier with the final product!',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
    rating: 5,
  },
  {
    id: 2,
    author: 'Theresa Webb',
    role: 'Co-Founder',
    company: 'VentureLabs',
    quote: 'From start to finish, collaborating with Creatix was seamless. They captured our vision, overhauled our product architecture, and delivered on time and within budget. Truly world-class designers.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop',
    rating: 5,
  },
  {
    id: 3,
    author: 'Marcus Vance',
    role: 'VP of Product',
    company: 'Apex Horizon',
    quote: 'The design systems and 3D interactions Creatix engineered gave our brand the modern edge we needed. Our conversion rate climbed 48% within weeks of the new launch.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="reviews" className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-[#b8ff2c] mb-2 block"
          >
            Client Endorsements
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display"
          >
            What Our Partners Say
          </motion.h2>
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={prevReview}
            aria-label="Previous review"
            className="w-11 h-11 rounded-full border border-white/20 bg-neutral-900/80 text-white flex items-center justify-center hover:border-[#b8ff2c] hover:bg-[#b8ff2c] hover:text-black transition-all active:scale-95"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextReview}
            aria-label="Next review"
            className="w-11 h-11 rounded-full border border-white/20 bg-neutral-900/80 text-white flex items-center justify-center hover:border-[#b8ff2c] hover:bg-[#b8ff2c] hover:text-black transition-all active:scale-95"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Testimonials Display (Grid for Desktop, Carousel support) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, idx) => {
          const isFeatured = idx === 0;
          return (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 border ${
                isFeatured
                  ? 'bg-[#14171d] border-[#b8ff2c]/40 shadow-[0_0_30px_rgba(184,255,44,0.08)]'
                  : 'bg-[#111317] border-white/10 hover:border-white/20'
              }`}
            >
              <div>
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-[#b8ff2c]/10 text-[#b8ff2c] flex items-center justify-center">
                    <Quote className="w-5 h-5 fill-current" />
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#b8ff2c] text-[#b8ff2c]" />
                    ))}
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal italic">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-8 pt-5 border-t border-white/10 flex items-center gap-3.5">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#b8ff2c]/50">
                  <Image
                    src={review.avatar}
                    alt={review.author}
                    fill
                    sizes="44px"
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-display">
                    {review.author}
                  </h4>
                  <p className="text-xs text-neutral-400">
                    {review.role} at {review.company}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
