

import React, { useState } from 'react';
import { X, Send, MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-10 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/65 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            className="relative w-full max-w-lg bg-[#f4f6f3] rounded-[32px] shadow-2xl border border-white/50 overflow-hidden z-10 p-6 sm:p-8"
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#d8e3dc]">
              <div>
                <h3 className="font-display font-extrabold text-2xl text-[#11231d]">
                  Get in Touch
                </h3>
                <p className="text-xs text-[#5f776d] mt-0.5">
                  Have a question about plant care, potting, or custom orders?
                </p>
              </div>
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="w-8 h-8 rounded-full border border-[#d2ddd6] flex items-center justify-center text-[#20362f] hover:bg-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {sent ? (
              <div className="py-10 text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-display font-bold text-lg text-[#11231d]">
                  Message Dispatched!
                </h4>
                <p className="text-xs text-[#526c61] mt-1">
                  Our master horticulturists will respond within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="pt-4 space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-[#30483f] mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full bg-white border border-[#d2ded5] focus:border-[#11231d] rounded-xl px-3.5 py-2 text-xs sm:text-sm text-[#11231d] focus:outline-none shadow-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#30483f] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full bg-white border border-[#d2ded5] focus:border-[#11231d] rounded-xl px-3.5 py-2 text-xs sm:text-sm text-[#11231d] focus:outline-none shadow-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#30483f] mb-1">
                    Message or Botanical Query
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your lighting conditions or potting requirements..."
                    className="w-full bg-white border border-[#d2ded5] focus:border-[#11231d] rounded-xl p-3 text-xs sm:text-sm text-[#11231d] focus:outline-none shadow-xs resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#11231d] hover:bg-black text-white font-semibold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 transition-all mt-2"
                >
                  <span>Send Message</span>
                  <Send className="w-3.5 h-3.5" />
                </button>

                <div className="pt-2 grid grid-cols-2 gap-2 text-[11px] text-[#5e776e] border-t border-[#d8e3dc]/80">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-800" />
                    <span>Greenhouse 04, Botania</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-emerald-800" />
                    <span>(555) 839-GROWTH</span>
                  </div>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
