

import React, { useState } from 'react';
import Image from '@/lib/Image';
import { ArrowRight, CheckCircle2, Sparkles, Send } from 'lucide-react';
import { motion } from 'motion/react';

const SOCIAL_LINKS = ['Instagram', 'Twitter', 'LinkedIn', 'Telegram', 'Pinterest'];

export default function FooterCommunity() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [activeSocial, setActiveSocial] = useState('Telegram');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <footer id="footer-community-section" className="pt-10 pb-6 px-2 sm:px-4">
      {/* Dark Lush Community Banner Card */}
      <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden bg-[#112a23] p-8 sm:p-12 md:p-14 text-center text-white shadow-2xl">
        {/* Background Foliage Image with Soft Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1600&auto=format&fit=crop"
            alt="Lush botanical foliage background"
            fill
            className="object-cover opacity-35"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c221a]/95 via-[#0e271f]/90 to-[#0b1d16]/95" />
        </div>

        {/* Inner Content */}
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          {/* Floral Emblem Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-12 h-12 rounded-full border border-white/25 bg-white/10 backdrop-blur-md flex items-center justify-center text-white mb-6 shadow-md"
          >
            <svg className="w-6 h-6 fill-current text-white/90" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" opacity="0.25"/>
              <circle cx="12" cy="12" r="3" />
              <path d="M12 3a9 9 0 0 0-9 9c0 1.6.42 3.1 1.15 4.41L12 12V3z" opacity="0.7"/>
              <path d="M12 3a9 9 0 0 1 9 9c0 1.6-.42 3.1-1.15 4.41L12 12V3z" opacity="0.7"/>
            </svg>
          </motion.div>

          {/* Heading: Join the community! */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight"
          >
            Join the community!
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs sm:text-sm text-white/80 max-w-lg mx-auto leading-relaxed mt-3 sm:mt-4 mb-8"
          >
            Subscribe to The Forager to receive monthly plant tips, store updates, promotions & more
          </motion.p>

          {/* Interactive Newsletter Form */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="w-full max-w-md mb-10"
          >
            {!subscribed ? (
              <form onSubmit={handleSubmit} className="flex items-center bg-black/40 backdrop-blur-md border border-white/20 rounded-full p-1.5 shadow-inner">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  required
                  className="w-full bg-transparent px-4 py-2 text-xs sm:text-sm text-white placeholder-white/50 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="bg-white text-[#11231d] px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold hover:bg-emerald-100 transition-colors flex items-center gap-1.5 shrink-0"
                >
                  <span>Join</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            ) : (
              <div className="bg-white/15 backdrop-blur-md border border-emerald-400/40 rounded-full px-5 py-2.5 text-xs sm:text-sm text-emerald-200 flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Welcome to The Forager circle! Check your inbox.</span>
              </div>
            )}
          </motion.div>

          {/* Bottom Social Capsule (Instagram, Twitter, LinkedIn, Telegram, Pinterest) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full max-w-xl bg-white rounded-full p-1 sm:p-1.5 shadow-xl flex items-center justify-between overflow-x-auto no-scrollbar gap-1"
          >
            {SOCIAL_LINKS.map((social) => {
              const isActive = activeSocial === social;
              return (
                <button
                  key={social}
                  id={`social-link-${social.toLowerCase()}`}
                  onClick={() => setActiveSocial(social)}
                  className={`px-3 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    isActive
                      ? 'bg-[#11231d] text-white shadow-sm'
                      : 'text-[#30443d] hover:text-black hover:bg-[#eef4f0]'
                  }`}
                >
                  {social}
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Copyright notice at very bottom of card */}
        <div className="relative z-10 mt-10 pt-4 text-center">
          <p className="text-[11px] sm:text-xs text-white/50 tracking-wider">
            ©2023, All Right Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
