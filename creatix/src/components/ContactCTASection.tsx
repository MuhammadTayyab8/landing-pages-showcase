

import React, { useState } from 'react';
import Image from '@/lib/Image';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export default function ContactCTASection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setStatus('success');
  };

  return (
    <section id="contact" className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative rounded-3xl md:rounded-[40px] bg-[#121418] border border-white/10 overflow-hidden shadow-2xl p-8 sm:p-12 lg:p-16"
      >
        {/* Subtle Ambient Lime Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#b8ff2c]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          
          {/* Left Column: Form & Content */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#b8ff2c]/10 border border-[#b8ff2c]/30 text-[#b8ff2c] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let&apos;s Build Together</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1] font-display">
              Get in Touch Today!
            </h2>

            <p className="text-sm sm:text-base text-neutral-400 max-w-lg leading-relaxed">
              Let&apos;s transform your ideas into exceptional digital experiences. Whether
              you&apos;re looking for a complete redesign, a stunning website, or customized branding,
              our team is here to help.
            </p>

            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-5 rounded-2xl bg-[#b8ff2c]/15 border border-[#b8ff2c]/40 text-neutral-200 flex items-center gap-3"
              >
                <CheckCircle2 className="w-6 h-6 text-[#b8ff2c] shrink-0" />
                <div>
                  <h4 className="font-bold text-white text-sm">Thank you for reaching out!</h4>
                  <p className="text-xs text-neutral-300">
                    Our lead creative strategist will contact you at <span className="text-[#b8ff2c] font-medium">{email}</span> within 24 hours.
                  </p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md pt-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3.5 rounded-full bg-neutral-900/90 border border-white/15 text-white placeholder:text-neutral-500 text-sm focus:outline-none focus:border-[#b8ff2c] focus:ring-1 focus:ring-[#b8ff2c] transition-all"
                />
                <button
                  type="submit"
                  className="px-7 py-3.5 rounded-full bg-[#b8ff2c] text-black text-sm font-bold tracking-tight hover:bg-[#c6ff47] transition-all shadow-lg hover:shadow-[0_0_20px_rgba(184,255,44,0.3)] active:scale-95 flex items-center justify-center gap-2 shrink-0"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            <div className="flex items-center gap-6 pt-2 text-xs text-neutral-500">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#b8ff2c]" /> Free 30-min discovery call
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#b8ff2c]" /> NDA protected
              </span>
            </div>

          </div>

          {/* Right Column: Creative Portrait Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-64 sm:w-72 md:w-80 aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-neutral-900">
              <Image
                src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?q=80&w=800&auto=format&fit=crop"
                alt="Creative Strategist Ready to Collaborate"
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-cover object-top hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
