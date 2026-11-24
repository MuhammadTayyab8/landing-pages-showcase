

import React, { useState } from 'react';
import { X, Lock, Mail, User, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1800);
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
            className="relative w-full max-w-md bg-[#f4f6f3] rounded-[32px] shadow-2xl border border-white/50 overflow-hidden z-10 p-6 sm:p-8"
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#d8e3dc]">
              <div>
                <h3 className="font-display font-extrabold text-2xl text-[#11231d]">
                  {isLogin ? 'Welcome Back' : 'Create Account'}
                </h3>
                <p className="text-xs text-[#5f776d] mt-0.5">
                  {isLogin ? 'Access your plant care club & saved orders' : 'Join our botanical destination today'}
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

            {submitted ? (
              <div className="py-10 text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-display font-bold text-lg text-[#11231d]">
                  {isLogin ? 'Signed in successfully!' : 'Account registered!'}
                </h4>
                <p className="text-xs text-[#526c61] mt-1">Welcome to Petal Power.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="pt-5 space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#30483f] mb-1.5">
                    Email Address
                  </label>
                  <div className="relative flex items-center">
                    <Mail className="w-4 h-4 absolute left-3.5 text-[#6c8279]" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full bg-white border border-[#d2ded5] focus:border-[#11231d] rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-[#11231d] focus:outline-none shadow-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#30483f] mb-1.5">
                    Password
                  </label>
                  <div className="relative flex items-center">
                    <Lock className="w-4 h-4 absolute left-3.5 text-[#6c8279]" />
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full bg-white border border-[#d2ded5] focus:border-[#11231d] rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-[#11231d] focus:outline-none shadow-xs"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#11231d] hover:bg-black text-white font-semibold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 transition-all mt-2"
                >
                  <span>{isLogin ? 'Log In' : 'Create Account'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="pt-2 text-center">
                  <button
                    type="button"
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-xs text-[#4b6359] hover:text-[#11231d] font-medium"
                  >
                    {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Log in'}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
