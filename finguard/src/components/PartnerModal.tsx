

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, Handshake, Send, Building2 } from 'lucide-react';
import { FinGuardLogo } from './CreditCard';

interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PartnerModal: React.FC<PartnerModalProps> = ({ isOpen, onClose }) => {
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [partnershipType, setPartnershipType] = useState('Payment Gateway / API');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleClose = () => {
    setSubmitted(false);
    setCompany('');
    setEmail('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-[#0D0D0F] border border-neutral-800 rounded-3xl p-6 sm:p-8 text-white shadow-2xl z-10 overflow-hidden"
          >
            <button
              id="partner-modal-close-btn"
              onClick={handleClose}
              className="absolute top-6 right-6 p-2 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FF4500]/20 flex items-center justify-center border border-[#FF4500]/40">
                    <Handshake className="w-5 h-5 text-[#FF4500]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Partner with FinGuard</h3>
                    <p className="text-xs text-neutral-400">Join our global network of 200,000+ financial partners</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                  <div>
                    <label className="text-xs font-semibold text-neutral-300 block mb-1.5">
                      Company / Organization Name
                    </label>
                    <input
                      id="partner-company-input"
                      type="text"
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Stripe, Apple, Wise, or Enterprise Bank"
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FF4500] focus:ring-1 focus:ring-[#FF4500]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-neutral-300 block mb-1.5">
                      Work Email
                    </label>
                    <input
                      id="partner-email-input"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="partner@company.com"
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FF4500] focus:ring-1 focus:ring-[#FF4500]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-neutral-300 block mb-1.5">
                      Partnership Category
                    </label>
                    <select
                      id="partner-category-select"
                      value={partnershipType}
                      onChange={(e) => setPartnershipType(e.target.value)}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF4500] focus:ring-1 focus:ring-[#FF4500]"
                    >
                      <option value="Payment Gateway / API">Payment Gateway / Global API</option>
                      <option value="ATM Network & Banking">ATM Network & Banking Infrastructure</option>
                      <option value="Travel & Merchant Deals">Travel & Merchant Rewards</option>
                      <option value="Institutional Liquidity">Institutional Liquidity & Exchange</option>
                    </select>
                  </div>

                  <div className="pt-2">
                    <button
                      id="partner-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-white hover:bg-neutral-100 text-neutral-900 font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 text-sm transition-all duration-200 cursor-pointer shadow-lg"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Submit Partnership Proposal</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-[#FF4500]/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#FF4500]/40">
                  <CheckCircle className="w-8 h-8 text-[#FF4500]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Proposal Received</h3>
                <p className="text-sm text-neutral-300 max-w-sm mx-auto mb-6">
                  Thank you! Our Strategic Partnerships Director will review {company ? <span className="text-white font-semibold">{company}</span> : 'your organization'}’s proposal within 24 hours.
                </p>
                <button
                  id="partner-done-btn"
                  onClick={handleClose}
                  className="w-full bg-[#FF4500] hover:bg-[#FF5500] text-white font-bold py-3 px-6 rounded-xl text-sm"
                >
                  Close Window
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
