

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Send, Sparkles } from 'lucide-react';
import { CreatixBurst } from './Icons';

interface ProjectInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: 'project' | 'career' | 'process';
}

export default function ProjectInquiryModal({
  isOpen,
  onClose,
  initialType = 'project',
}: ProjectInquiryModalProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>(['UI/UX Design']);
  const [budget, setBudget] = useState('$10k - $25k');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const services = ['UI/UX Design', 'Web Development', '3D Designs', 'Motion Graphics', 'Branding'];
  const budgets = ['$5k - $10k', '$10k - $25k', '$25k - $50k', '$50k+'];

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-xl bg-[#121418] border border-white/15 rounded-3xl p-6 sm:p-8 text-white shadow-2xl overflow-hidden my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-neutral-300 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Modal Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="text-[#b8ff2c]">
              <CreatixBurst className="w-6 h-6 text-[#b8ff2c]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white font-display">
                {initialType === 'career' ? 'Join the Creatix Roster' : 'Start Your Next Project'}
              </h3>
              <p className="text-xs text-neutral-400">
                {initialType === 'career'
                  ? 'Send us your portfolio & let’s build iconic products together.'
                  : 'Tell us about your objectives and we will send a tailored proposal in 24h.'}
              </p>
            </div>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-8 text-center space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-[#b8ff2c]/20 text-[#b8ff2c] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-[#b8ff2c]" />
              </div>
              <h4 className="text-2xl font-bold font-display">Inquiry Received!</h4>
              <p className="text-sm text-neutral-300 max-w-sm mx-auto">
                Thank you, <span className="text-[#b8ff2c] font-semibold">{name || 'there'}</span>.
                Our creative directors are reviewing your project parameters and will reach out to{' '}
                <span className="text-[#b8ff2c] font-semibold">{email}</span>.
              </p>
              <button
                onClick={handleReset}
                className="mt-4 px-6 py-2.5 rounded-full bg-[#b8ff2c] text-black font-bold text-sm hover:bg-[#c9ff4d] transition-all"
              >
                Back to Site
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                  Required Services
                </label>
                <div className="flex flex-wrap gap-2">
                  {services.map((service) => {
                    const isSelected = selectedServices.includes(service);
                    return (
                      <button
                        type="button"
                        key={service}
                        onClick={() => toggleService(service)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                          isSelected
                            ? 'bg-[#b8ff2c] text-black shadow-md'
                            : 'bg-white/5 border border-white/10 text-neutral-300 hover:bg-white/10'
                        }`}
                      >
                        {service}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Budget Range */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                  Estimated Budget
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {budgets.map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setBudget(b)}
                      className={`py-2 px-3 rounded-xl text-xs font-medium text-center transition-all ${
                        budget === b
                          ? 'bg-[#b8ff2c] text-black font-bold'
                          : 'bg-white/5 border border-white/10 text-neutral-300 hover:bg-white/10'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Rivera"
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white placeholder:text-neutral-500 text-xs focus:outline-none focus:border-[#b8ff2c]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">Your Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white placeholder:text-neutral-500 text-xs focus:outline-none focus:border-[#b8ff2c]"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">Project Brief / Goals</label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about the deliverables, timeline, or links to inspiration..."
                  className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white placeholder:text-neutral-500 text-xs focus:outline-none focus:border-[#b8ff2c] resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-[#b8ff2c] text-black font-extrabold text-sm hover:bg-[#c9ff4d] transition-all flex items-center justify-center gap-2 shadow-xl hover:shadow-[0_0_20px_rgba(184,255,44,0.4)]"
              >
                <Send className="w-4 h-4" />
                <span>Submit Project Inquiry</span>
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
