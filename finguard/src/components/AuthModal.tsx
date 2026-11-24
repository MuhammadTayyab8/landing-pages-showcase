

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, CreditCard as CardIcon } from 'lucide-react';
import { FinGuardLogo } from './CreditCard';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'signup' | 'login';
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  initialMode = 'signup',
}) => {
  const [mode, setMode] = useState<'signup' | 'login'>(initialMode);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [cardTier, setCardTier] = useState<'metal-orange' | 'titanium-white' | 'obsidian-black'>('metal-orange');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 900);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setEmail('');
    setName('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-[#0E0E10] border border-neutral-800 rounded-3xl p-6 sm:p-8 text-white shadow-2xl z-10 overflow-hidden"
          >
            {/* Ambient background glow */}
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#FF4500]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-[#FF4500]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              id="auth-modal-close-btn"
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800/80 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSuccess ? (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <FinGuardLogo />
                </div>

                <div className="mb-6">
                  <h3 className="text-2xl font-black tracking-tight text-white">
                    {mode === 'signup' ? 'Claim Your FinGuard Card' : 'Welcome Back to FinGuard'}
                  </h3>
                  <p className="text-sm text-neutral-400 mt-1">
                    {mode === 'signup'
                      ? 'Join 500,000+ members enjoying instant high-yield savings and zero international fees.'
                      : 'Sign in to access your real-time dashboard and card controls.'}
                  </p>
                </div>

                {mode === 'signup' && (
                  <div className="mb-6">
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2 block">
                      Choose Your Signature Physical Card
                    </label>
                    <div className="grid grid-cols-3 gap-2.5">
                      <button
                        type="button"
                        onClick={() => setCardTier('metal-orange')}
                        className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all ${
                          cardTier === 'metal-orange'
                            ? 'border-[#FF4500] bg-[#FF4500]/10 ring-1 ring-[#FF4500]'
                            : 'border-neutral-800 bg-neutral-900/60 hover:border-neutral-700'
                        }`}
                      >
                        <div className="w-4 h-4 rounded-full bg-[#FF4500] mb-2" />
                        <span className="text-xs font-bold text-white">Orange Metal</span>
                        <span className="text-[10px] text-neutral-400">2% Cashback</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setCardTier('titanium-white')}
                        className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all ${
                          cardTier === 'titanium-white'
                            ? 'border-white bg-white/10 ring-1 ring-white'
                            : 'border-neutral-800 bg-neutral-900/60 hover:border-neutral-700'
                        }`}
                      >
                        <div className="w-4 h-4 rounded-full bg-neutral-200 mb-2" />
                        <span className="text-xs font-bold text-white">Titanium White</span>
                        <span className="text-[10px] text-neutral-400">No FX Fees</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setCardTier('obsidian-black')}
                        className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all ${
                          cardTier === 'obsidian-black'
                            ? 'border-neutral-400 bg-neutral-800/80 ring-1 ring-neutral-400'
                            : 'border-neutral-800 bg-neutral-900/60 hover:border-neutral-700'
                        }`}
                      >
                        <div className="w-4 h-4 rounded-full bg-neutral-900 border border-neutral-700 mb-2" />
                        <span className="text-xs font-bold text-white">Obsidian Black</span>
                        <span className="text-[10px] text-neutral-400">VIP Lounges</span>
                      </button>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {mode === 'signup' && (
                    <div>
                      <label className="text-xs font-semibold text-neutral-300 block mb-1.5">
                        Full Name
                      </label>
                      <input
                        id="auth-name-input"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Ralph Edwards"
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FF4500] focus:ring-1 focus:ring-[#FF4500] transition-colors"
                      />
                    </div>
                  )}

                  <div>
                    <label className="text-xs font-semibold text-neutral-300 block mb-1.5">
                      Email Address
                    </label>
                    <input
                      id="auth-email-input"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@domain.com"
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FF4500] focus:ring-1 focus:ring-[#FF4500] transition-colors"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      id="auth-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#FF4500] hover:bg-[#FF5500] text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 text-sm transition-all duration-200 transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 shadow-lg shadow-orange-600/30 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>{mode === 'signup' ? 'Create Account & Order Card' : 'Sign In to FinGuard'}</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>

                <div className="mt-6 pt-5 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
                  <span>
                    {mode === 'signup' ? 'Already have an account?' : "Don't have an account yet?"}
                  </span>
                  <button
                    type="button"
                    onClick={() => setMode(mode === 'signup' ? 'login' : 'signup')}
                    className="text-[#FF4500] hover:underline font-semibold"
                  >
                    {mode === 'signup' ? 'Sign in' : 'Create an account'}
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-[#FF4500]/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#FF4500]/40">
                  <CheckCircle2 className="w-8 h-8 text-[#FF4500]" />
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-2">
                  Welcome to FinGuard!
                </h3>
                <p className="text-sm text-neutral-300 max-w-sm mx-auto mb-6">
                  Your digital account is now active. We’ve sent a confirmation email to{' '}
                  <span className="font-semibold text-white">{email}</span>. Your physical card is being prepared!
                </p>

                <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 mb-6 text-left flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-[#FF4500] shrink-0" />
                  <div className="text-xs">
                    <p className="font-bold text-white">FDIC-Insured Protection</p>
                    <p className="text-neutral-400">All deposits are securely held and insured up to $250,000.</p>
                  </div>
                </div>

                <button
                  id="auth-done-btn"
                  onClick={handleReset}
                  className="w-full bg-[#FF4500] hover:bg-[#FF5500] text-white font-bold py-3 px-6 rounded-xl text-sm transition-all"
                >
                  Explore Your FinGuard Hub
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
