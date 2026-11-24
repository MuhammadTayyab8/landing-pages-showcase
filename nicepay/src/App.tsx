import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SmoothScroll, ScrollProgress, BackToTop } from './lib/polish';
import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronRight,
  CreditCard,
  DownloadCloud,
  FileText,
  Headphones,
  Heart,
  HelpCircle,
  Layers,
  Menu,
  Moon,
  PenTool,
  Plus,
  RefreshCw,
  Search,
  Send,
  Share2,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Trash2,
  TrendingUp,
  User,
  Users,
  Wallet,
  X,
  Zap,
} from 'lucide-react';

// --- Nicepay Custom SVG Brand Mark ---
export const NicepayIcon: React.FC<{ className?: string; size?: number }> = ({ className = 'w-6 h-6', size }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    style={size ? { width: size, height: size } : undefined}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      {/* Top Left Leaf */}
      <path
        d="M20 50 C20 33.43 33.43 20 50 20 C50 36.57 36.57 50 20 50 Z"
        className="fill-[#6C5CE7] opacity-95"
      />
      {/* Top Right Leaf */}
      <path
        d="M50 20 C66.57 20 80 33.43 80 50 C63.43 50 50 36.57 50 20 Z"
        className="fill-[#7D6DF8] opacity-90"
      />
      {/* Bottom Right Leaf */}
      <path
        d="M80 50 C80 66.57 66.57 80 50 80 C50 63.43 63.43 50 80 50 Z"
        className="fill-[#6C5CE7] opacity-95"
      />
      {/* Bottom Left Leaf */}
      <path
        d="M50 80 C33.43 80 20 66.57 20 50 C36.57 50 50 63.43 50 80 Z"
        className="fill-[#8E80FB] opacity-85"
      />
      {/* Central Aperture Soft Glow */}
      <circle cx="50" cy="50" r="7" fill="white" className="opacity-90" />
    </g>
  </svg>
);

// --- Custom Badge Component with Sparkle Icon ---
const SectionBadge: React.FC<{ text: string }> = ({ text }) => (
  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F3F0FF] border border-[#DDD6FE] text-[#6C5CE7] text-xs font-semibold tracking-wide shadow-xs">
    <div className="w-3.5 h-3.5 rounded-sm bg-[#6C5CE7] flex items-center justify-center text-white">
      <Sparkles className="w-2.5 h-2.5" />
    </div>
    <span>{text}</span>
  </div>
);

// --- Floating Pill Indicator Badge (as in the hero and mockups) ---
const FloatingNicepayPill: React.FC<{ className?: string; text?: string; pointingLeft?: boolean }> = ({
  className = '',
  text = 'Nicepay',
  pointingLeft = false,
}) => (
  <div
    className={`inline-flex items-center gap-1.5 px-3 py-1 bg-[#6C5CE7] text-white text-xs font-medium rounded-full shadow-md ${className}`}
  >
    <span>{text}</span>
    {pointingLeft ? (
      <span className="w-1.5 h-1.5 bg-white/70 rounded-full animate-ping"></span>
    ) : null}
  </div>
);

// --- Logoipsum Partner Logos ---
const PartnerLogos = () => (
  <div className="w-full py-10">
    <p className="text-center text-sm font-semibold text-slate-900 mb-8 tracking-tight">
      Trusted over 2k+ company
    </p>
    <div className="max-w-6xl mx-auto px-4 flex flex-wrap items-center justify-center md:justify-between gap-8 md:gap-12 opacity-85 hover:opacity-100 transition-opacity">
      {/* Logo 1 */}
      <div className="flex items-center gap-2.5 grayscale hover:grayscale-0 transition-all cursor-pointer">
        <svg className="w-7 h-7 text-slate-900" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="4 2" />
          <circle cx="12" cy="12" r="4" fill="currentColor" />
        </svg>
        <span className="font-extrabold tracking-tight text-lg text-slate-900 font-sans">logoipsum</span>
      </div>

      {/* Logo 2 */}
      <div className="flex items-center gap-2.5 grayscale hover:grayscale-0 transition-all cursor-pointer">
        <svg className="w-7 h-7 text-slate-900" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="font-extrabold tracking-tight text-lg text-slate-900 font-sans">Logoipsum</span>
      </div>

      {/* Logo 3 */}
      <div className="flex items-center gap-2.5 grayscale hover:grayscale-0 transition-all cursor-pointer">
        <svg className="w-7 h-7 text-slate-900" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4.5 12a7.5 7.5 0 0 0 15 0 7.5 7.5 0 0 0-15 0z" fill="currentColor"/>
          <path d="M12 4.5v15M4.5 12h15" stroke="white" strokeWidth="2"/>
        </svg>
        <span className="font-extrabold tracking-tight text-lg text-slate-900 font-sans">Logoipsum</span>
      </div>

      {/* Logo 4 */}
      <div className="flex items-center gap-2.5 grayscale hover:grayscale-0 transition-all cursor-pointer">
        <svg className="w-7 h-7 text-slate-900" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        </svg>
        <span className="font-extrabold tracking-tight text-lg text-slate-900 font-sans">Logoipsum</span>
      </div>

      {/* Logo 5 */}
      <div className="flex items-center gap-2.5 grayscale hover:grayscale-0 transition-all cursor-pointer">
        <svg className="w-7 h-7 text-slate-900" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="currentColor"/>
        </svg>
        <span className="font-extrabold tracking-tight text-lg text-slate-900 font-sans">Logoipsum</span>
      </div>
    </div>
  </div>
);

export default function App() {
  // --- Interactive State ---
  const [activeHistoryTab, setActiveHistoryTab] = useState<'Daily' | 'Weekly' | 'Yearly'>('Daily');
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [cartCount, setCartCount] = useState(0);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);
  const [trialModalOpen, setTrialModalOpen] = useState(false);

  // Cart dummy items
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Nicepay Starter Kit', price: 49, quantity: 1 },
  ]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubscribed(true);
      setTimeout(() => {
        setNewsletterSubscribed(false);
        setNewsletterEmail('');
      }, 4000);
    }
  };

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
    setCartDrawerOpen(true);
  };

  // Blog articles data
  const blogPosts = [
    {
      id: 1,
      tag: 'Financial',
      tag2: '',
      title: 'How real-time analytics can revolutionize your financial strategy',
      description: 'Perfect for small businesses or startups, our Starter Plan gives you the essential tools to manage your finances with ease.',
      isHighlighted: false,
      readTime: '4 min read',
      fullContent: 'Real-time financial analytics allows modern teams to track burn rates, cash liquidity, and receivables instantly without waiting for end-of-month reconciliations. Nicepay automatically aggregates multi-currency feeds and alerts finance leads to irregular transaction spikes before they impact runway.'
    },
    {
      id: 2,
      tag: 'Financial',
      tag2: 'Tips',
      title: 'Simplify and empower your financial management with Nicepay',
      description: 'In today\'s fast-paced business world, keeping up with financial management can be overwhelming. Learn how automated workflows reduce manual entry by 85%.',
      isHighlighted: false,
      readTime: '6 min read',
      fullContent: 'Financial orchestration requires seamless connections between credit lines, merchant accounts, and accounting ledgers. With Nicepay smart routing, every invoice sent is immediately tied to automated bank reconciliation and instant tax ledger categorization.'
    },
    {
      id: 3,
      tag: 'Financial',
      tag2: 'Tips',
      title: 'The importance of streamlining business payments',
      description: 'In this blog, discuss how businesses can improve efficiency by using automated payment systems.',
      isHighlighted: true,
      readTime: '5 min read',
      fullContent: 'Delayed payouts and high transaction fees drain operational margins. Discover how next-day settlement and automated payout scheduling increase client satisfaction and solidify vendor relationships.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#6C5CE7]/20 selection:text-[#6C5CE7] overflow-x-hidden">
      <SmoothScroll />
      <ScrollProgress color="#6C5CE7" />
      <BackToTop className="bg-[#6C5CE7] text-white" />

      {/* -------------------- Top Floating Navigation Bar -------------------- */}
      <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-5xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-sm rounded-full px-5 py-2.5 flex items-center justify-between transition-all"
        >
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 flex items-center justify-center rounded-xl bg-purple-50 group-hover:scale-105 transition-transform">
              <NicepayIcon className="w-7 h-7" />
            </div>
            <span className="font-bold text-lg text-slate-950 tracking-tight">Nicepay</span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#features" className="hover:text-slate-950 transition-colors">Features</a>
            <a href="#pricing" className="hover:text-slate-950 transition-colors">Pricing</a>
            <a href="#workflow" className="hover:text-slate-950 transition-colors">About Us</a>
            <a href="#blog" className="hover:text-slate-950 transition-colors">Blog</a>
            <button
              onClick={() => setCartDrawerOpen(true)}
              className="flex items-center gap-1.5 hover:text-slate-950 transition-colors cursor-pointer"
            >
              <span>Cart ({cartCount})</span>
            </button>
          </div>

          {/* Sign In CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => {
                setAuthMode('signin');
                setAuthModalOpen(true);
              }}
              className="px-5 py-2 rounded-full bg-[#6C5CE7] hover:bg-[#5A47E5] text-white text-sm font-semibold transition-all shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              Sign In
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setCartDrawerOpen(true)}
              className="p-2 text-slate-700 hover:text-slate-950"
            >
              <ShoppingBag className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-950"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </motion.nav>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-16 inset-x-4 bg-white border border-slate-200 rounded-2xl shadow-xl p-5 md:hidden flex flex-col gap-4 z-50"
            >
              <a
                href="#features"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-700 py-1"
              >
                Features
              </a>
              <a
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-700 py-1"
              >
                Pricing
              </a>
              <a
                href="#workflow"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-700 py-1"
              >
                About Us
              </a>
              <a
                href="#blog"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-700 py-1"
              >
                Blog
              </a>
              <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setAuthMode('signin');
                    setAuthModalOpen(true);
                  }}
                  className="w-full py-2.5 rounded-xl bg-[#6C5CE7] text-white font-semibold text-center"
                >
                  Sign In
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* -------------------- Hero Section -------------------- */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-4 overflow-hidden">
        {/* Hero Top Content */}
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionBadge text="Best Financial Management" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-950 leading-[1.15]"
          >
            Enhance your financial control
            <div className="mt-2 sm:mt-3 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              <div className="relative inline-flex items-center">
                <FloatingNicepayPill className="text-xs sm:text-sm px-3.5 py-1 -rotate-3 hover:rotate-0 transition-transform" />
                <span className="absolute -bottom-2 right-1 text-[#6C5CE7] text-xs font-mono">▲</span>
              </div>
              <span className="font-accent font-normal text-slate-700">with</span>
              <span className="relative inline-block px-5 py-1 rounded-2xl bg-[#EDE9FE] text-[#6C5CE7] font-bold border border-[#DDD6FE]">
                Nicepay
              </span>
              <div className="relative inline-flex items-center">
                <FloatingNicepayPill className="text-xs sm:text-sm px-3.5 py-1 rotate-3 hover:rotate-0 transition-transform" />
              </div>
            </div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-2xl text-slate-600 text-sm sm:text-base leading-relaxed"
          >
            Streamline your business's financial management with our intuitive, scalable SaaS platform. Designed for U.S. enterprises, our solutions simplify complex processes.
          </motion.p>
        </div>

        {/* Hero Visual Display with Gradient Canvas & Floating App Mockups */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 max-w-5xl mx-auto"
        >
          {/* Lavender / Violet Mesh Canvas Container */}
          <div className="relative rounded-[36px] p-6 sm:p-10 md:p-14 overflow-hidden border border-purple-100/70 shadow-xl bg-gradient-to-br from-[#EFEAFC] via-[#E4D9FD] to-[#D9C4FC]">
            {/* Subtle glow decorative orbs */}
            <div className="absolute -top-24 -left-24 w-80 h-80 bg-white/40 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#C4B5FD]/50 rounded-full blur-3xl pointer-events-none" />

            {/* Central Stage: iPhone Mockup with Floating Overlays */}
            <div className="relative flex items-center justify-center min-h-[380px] sm:min-h-[440px] md:min-h-[480px]">
              
              {/* Left Floating Card: "History" with North Faxe Transactions */}
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="animate-float-slow absolute -left-2 sm:left-4 md:left-8 top-10 sm:top-16 z-20 w-64 sm:w-72 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-slate-100"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center text-[#6C5CE7]">
                    <Sparkles className="w-3 h-3" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">History</span>
                </div>

                {/* Tabs */}
                <div className="grid grid-cols-3 gap-1 bg-slate-100 p-1 rounded-lg text-[11px] font-medium text-slate-600 mb-3">
                  {(['Daily', 'Weekly', 'Yearly'] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveHistoryTab(tab)}
                      className={`py-1 rounded-md text-center transition-all cursor-pointer ${
                        activeHistoryTab === tab
                          ? 'bg-white text-slate-900 font-bold shadow-xs'
                          : 'hover:text-slate-900'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Transaction list */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-blue-500 flex items-center justify-center text-white font-bold text-[10px]">
                        N
                      </div>
                      <div>
                        <div className="font-semibold text-slate-800">North Faxe</div>
                        <div className="text-[10px] text-slate-400">August 30, 2024</div>
                      </div>
                    </div>
                    <span className="font-bold text-emerald-500">+$200</span>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-[10px]">
                        N
                      </div>
                      <div>
                        <div className="font-semibold text-slate-800">North Faxe</div>
                        <div className="text-[10px] text-slate-400">August 27, 2024</div>
                      </div>
                    </div>
                    <span className="font-bold text-rose-500">-$400</span>
                  </div>
                </div>
              </motion.div>

              {/* Center Phone Mockup (iPhone Body) */}
              <div className="relative z-10 w-[240px] sm:w-[270px] md:w-[290px] aspect-[9/18.5] bg-slate-950 rounded-[44px] p-3 shadow-2xl border-4 border-slate-900">
                {/* Screen glass */}
                <div className="relative w-full h-full bg-white rounded-[36px] overflow-hidden flex flex-col justify-between p-4">
                  {/* Dynamic Island / Status Bar */}
                  <div className="flex items-center justify-between pt-1 px-1">
                    <span className="text-[11px] font-bold text-slate-900">9:41</span>
                    <div className="w-16 h-4 bg-black rounded-full" />
                    <div className="flex items-center gap-1 text-[10px] text-slate-800">
                      <span>5G</span>
                      <div className="w-4 h-2 border border-slate-800 rounded-sm p-0.5">
                        <div className="w-full h-full bg-slate-800 rounded-xs" />
                      </div>
                    </div>
                  </div>

                  {/* App Center Artwork: Large Nicepay Icon Glow */}
                  <div className="flex-1 flex flex-col items-center justify-center">
                    <div className="relative group cursor-pointer">
                      <div className="absolute inset-0 bg-[#6C5CE7]/30 rounded-3xl blur-xl animate-pulse-subtle" />
                      <div className="relative w-28 h-28 rounded-3xl bg-gradient-to-b from-[#7A69F9] to-[#604FE3] p-4 flex items-center justify-center shadow-lg border border-white/30 hover:scale-105 transition-transform">
                        <NicepayIcon className="w-20 h-20 text-white" />
                      </div>
                    </div>
                    {/* Floating pill badge on phone */}
                    <div className="mt-4">
                      <FloatingNicepayPill className="text-[11px] px-3 py-1 shadow-lg" />
                    </div>
                  </div>

                  {/* Bottom Home Indicator Bar */}
                  <div className="w-24 h-1 bg-slate-300 rounded-full mx-auto mb-1" />
                </div>
              </div>

              {/* Right Floating Card: "Income" with $2,999 and 80% Bar */}
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="animate-float-reverse absolute -right-2 sm:right-4 md:right-8 bottom-12 sm:bottom-20 z-20 w-56 sm:w-64 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-slate-100"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center text-[#6C5CE7]">
                    <TrendingUp className="w-3 h-3" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">Income</span>
                </div>

                <div className="flex items-baseline justify-between mb-1.5">
                  <span className="text-[11px] text-slate-400">Income</span>
                  <span className="text-base font-bold text-slate-900">$2,999</span>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden mb-1">
                  <div className="h-full bg-[#6C5CE7] rounded-full w-[80%] transition-all duration-1000" />
                </div>
                <span className="text-[10px] font-semibold text-[#6C5CE7]">80%</span>
              </motion.div>

            </div>
          </div>
        </motion.div>

        {/* Social Proof Logos */}
        <PartnerLogos />
      </section>

      {/* -------------------- Section: How our platform makes your workflow easier (Bento Grid) -------------------- */}
      <section id="workflow" className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionBadge text="Our workflow" />
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-950">
              How our platform makes your workflow{' '}
              <span className="font-accent text-[#6C5CE7]">easier</span>
            </h2>
          </div>

          {/* 2x2 Bento Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            
            {/* Card 1: Sign up and customize */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-[#F8F9FD] rounded-3xl p-6 sm:p-8 border border-slate-200/70 flex flex-col justify-between shadow-xs hover:shadow-md transition-all"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-[#6C5CE7] flex items-center justify-center text-white mb-5 shadow-sm">
                  <User className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mb-2">
                  Sign up and customize
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Create your account in minutes and tailor the platform to meet your company's unique financial needs.
                </p>
              </div>

              {/* Graphic container */}
              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm mt-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-[#6C5CE7]">
                      <Users className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-bold text-slate-800">Total Users</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-black text-slate-950 tracking-tight">20K+</span>
                    <p className="text-[11px] text-slate-400">Users</p>
                  </div>
                  {/* Overlapping User Avatars */}
                  <div className="flex -space-x-2">
                    <img className="w-7 h-7 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Avatar" />
                    <img className="w-7 h-7 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="Avatar" />
                    <img className="w-7 h-7 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" alt="Avatar" />
                    <img className="w-7 h-7 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80" alt="Avatar" />
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-500 text-[11px]">Monthly Users</span>
                    <span className="font-bold text-slate-900 text-[11px]">1K+</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="h-full bg-[#6C5CE7] rounded-full w-[60%]" />
                  </div>
                  <span className="text-[10px] font-semibold text-[#6C5CE7] mt-0.5 inline-block">60%</span>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Link Your Accounts */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-[#F8F9FD] rounded-3xl p-6 sm:p-8 border border-slate-200/70 flex flex-col justify-between shadow-xs hover:shadow-md transition-all"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-[#6C5CE7] flex items-center justify-center text-white mb-5 shadow-sm">
                  <CreditCard className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mb-2">
                  Link Your Accounts
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Easily link your bank accounts, credit cards, loans, and investment accounts.
                </p>
              </div>

              {/* Graphic container: Connected Network Graphic */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm mt-4 relative flex items-center justify-center min-h-[190px] overflow-hidden">
                {/* SVG connection lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none text-purple-200" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3">
                  <line x1="50%" y1="50%" x2="20%" y2="25%" />
                  <line x1="50%" y1="50%" x2="80%" y2="25%" />
                  <line x1="50%" y1="50%" x2="20%" y2="75%" />
                  <line x1="50%" y1="50%" x2="80%" y2="75%" />
                </svg>

                {/* Central Hub */}
                <div className="relative z-10 w-14 h-14 rounded-2xl bg-[#6C5CE7] p-2.5 flex items-center justify-center shadow-lg shadow-purple-300/50">
                  <NicepayIcon className="w-full h-full text-white" />
                </div>

                {/* Orbit Nodes */}
                <div className="absolute top-4 left-8 w-8 h-8 rounded-full bg-purple-50 border border-purple-200 flex items-center justify-center text-[#6C5CE7] shadow-xs">
                  <Wallet className="w-4 h-4" />
                </div>
                <div className="absolute top-4 right-8 w-8 h-8 rounded-full bg-purple-50 border border-purple-200 flex items-center justify-center text-[#6C5CE7] shadow-xs">
                  <CreditCard className="w-4 h-4" />
                </div>
                <div className="absolute bottom-4 left-8 w-8 h-8 rounded-full bg-purple-50 border border-purple-200 flex items-center justify-center text-[#6C5CE7] shadow-xs">
                  <RefreshCw className="w-4 h-4" />
                </div>
                <div className="absolute bottom-4 right-8 w-8 h-8 rounded-full bg-purple-50 border border-purple-200 flex items-center justify-center text-[#6C5CE7] shadow-xs">
                  <TrendingUp className="w-4 h-4" />
                </div>
              </div>
            </motion.div>

            {/* Card 3: Start Managing Efficiently */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-[#F8F9FD] rounded-3xl p-6 sm:p-8 border border-slate-200/70 flex flex-col justify-between shadow-xs hover:shadow-md transition-all"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-[#6C5CE7] flex items-center justify-center text-white mb-5 shadow-sm">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mb-2">
                  Start Managing Efficiently
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Seamlessly connect your existing financial tools and import your data for a smooth transition.
                </p>
              </div>

              {/* Graphic container: Financial Metric Board */}
              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm mt-4">
                {/* Sub Tab selection */}
                <div className="grid grid-cols-3 gap-1 bg-slate-100 p-1 rounded-lg text-[11px] font-medium text-slate-600 mb-4 max-w-[200px] mx-auto">
                  <div className="bg-white py-1 rounded text-center font-bold text-slate-900 shadow-xs">Daily</div>
                  <div className="py-1 text-center text-slate-500">Weekly</div>
                  <div className="py-1 text-center text-slate-500">Yearly</div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-slate-50 p-3 rounded-xl">
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mb-1">
                      <div className="w-3.5 h-3.5 rounded-full bg-purple-100 text-[#6C5CE7] flex items-center justify-center">
                        <TrendingUp className="w-2.5 h-2.5" />
                      </div>
                      Income
                    </div>
                    <div className="text-lg font-bold text-slate-900">$40,000</div>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-xl">
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mb-1">
                      <div className="w-3.5 h-3.5 rounded-full bg-purple-100 text-[#6C5CE7] flex items-center justify-center">
                        <Wallet className="w-2.5 h-2.5" />
                      </div>
                      Expense
                    </div>
                    <div className="text-lg font-bold text-slate-900">$1,369</div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 font-semibold mb-2">
                  <span>History</span>
                  <span className="text-[#6C5CE7] text-[11px] cursor-pointer hover:underline">View All</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded bg-blue-500 text-white font-bold text-[9px] flex items-center justify-center">N</div>
                    <span className="font-medium text-slate-800">North Faxe</span>
                  </div>
                  <span className="font-bold text-emerald-500">+$200</span>
                </div>
              </div>
            </motion.div>

            {/* Card 4: Integrate Your Data */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-[#F8F9FD] rounded-3xl p-6 sm:p-8 border border-slate-200/70 flex flex-col justify-between shadow-xs hover:shadow-md transition-all"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-[#6C5CE7] flex items-center justify-center text-white mb-5 shadow-sm">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mb-2">
                  Integrate Your Data
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Seamlessly connect your existing financial tools and import your data for a smooth transition.
                </p>
              </div>

              {/* Graphic container: Weekly Overview card */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm mt-4 flex flex-col justify-center min-h-[190px]">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-[#6C5CE7]">
                    <FileText className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">Weekly Overview</span>
                </div>

                <div className="text-[11px] text-slate-400 mb-1">Amount</div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-slate-950 tracking-tight">$159.00</span>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold border border-emerald-200">
                    +20%
                  </span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* -------------------- Section: Boost your finances with Nicepay (Split Layout) -------------------- */}
      <section id="features" className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Features Content & 2x2 Feature Points */}
          <div className="lg:col-span-6">
            <SectionBadge text="Key Features" />
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-950 leading-tight">
              Boost your finances with{' '}
              <span className="font-accent text-[#6C5CE7]">Nicepay</span>
            </h2>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Feature 1 */}
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#6C5CE7] flex items-center justify-center text-white mb-3.5 shadow-sm">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-1.5">
                  Flexible Data Transfer
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Easily import and export financial data to and from our platform.
                </p>
              </div>

              {/* Feature 2 */}
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#6C5CE7] flex items-center justify-center text-white mb-3.5 shadow-sm">
                  <FileText className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-1.5">
                  Personalized Reports
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Create and customize reports tailored to your specific needs.
                </p>
              </div>

              {/* Feature 3 */}
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#6C5CE7] flex items-center justify-center text-white mb-3.5 shadow-sm">
                  <Headphones className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-1.5">
                  Dedicated Support
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Our expert support team is available 24/7 to assist.
                </p>
              </div>

              {/* Feature 4 */}
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#6C5CE7] flex items-center justify-center text-white mb-3.5 shadow-sm">
                  <PenTool className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-1.5">
                  Custom Reporting Tools
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Create and customize reports tailored to your specific needs.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Full Smartphone App Preview */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[340px] bg-slate-950 rounded-[48px] p-3.5 shadow-2xl border-4 border-slate-900">
              {/* Screen Content */}
              <div className="bg-white rounded-[38px] overflow-hidden p-5 flex flex-col gap-4">
                {/* Dynamic Island Status */}
                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs font-bold text-slate-900">9:41</span>
                  <div className="w-20 h-4 bg-black rounded-full" />
                  <div className="flex items-center gap-1 text-[10px] text-slate-800">
                    <span>5G</span>
                    <div className="w-4 h-2 border border-slate-800 rounded-sm p-0.5">
                      <div className="w-full h-full bg-slate-800 rounded-xs" />
                    </div>
                  </div>
                </div>

                {/* Daily/Weekly/Yearly Tab */}
                <div className="grid grid-cols-3 gap-1 bg-slate-100 p-1 rounded-xl text-xs font-medium text-slate-600">
                  <div className="bg-white py-1.5 rounded-lg text-center font-bold text-slate-900 shadow-xs">Daily</div>
                  <div className="py-1.5 text-center text-slate-500">Weekly</div>
                  <div className="py-1.5 text-center text-slate-500">Yearly</div>
                </div>

                {/* Metric Cards */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mb-1">
                      <div className="w-4 h-4 rounded-full bg-purple-100 text-[#6C5CE7] flex items-center justify-center">
                        <TrendingUp className="w-2.5 h-2.5" />
                      </div>
                      Income
                    </div>
                    <div className="text-xl font-bold text-slate-900">$40,000</div>
                  </div>

                  <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mb-1">
                      <div className="w-4 h-4 rounded-full bg-purple-100 text-[#6C5CE7] flex items-center justify-center">
                        <Wallet className="w-2.5 h-2.5" />
                      </div>
                      Expense
                    </div>
                    <div className="text-xl font-bold text-slate-900">$1,369</div>
                  </div>
                </div>

                {/* History List */}
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold mb-3">
                    <span className="text-slate-900">History</span>
                    <span className="text-[#6C5CE7] text-[11px] cursor-pointer hover:underline">View All</span>
                  </div>

                  <div className="space-y-3">
                    {/* Item 1 */}
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-xl bg-blue-600 text-white font-bold text-xs flex items-center justify-center">N</div>
                        <div>
                          <div className="font-semibold text-slate-900">North Faxe</div>
                          <div className="text-[10px] text-slate-400">August 30, 2024</div>
                        </div>
                      </div>
                      <span className="font-bold text-emerald-500">+$200</span>
                    </div>

                    {/* Item 2 */}
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-xl bg-blue-600 text-white font-bold text-xs flex items-center justify-center">N</div>
                        <div>
                          <div className="font-semibold text-slate-900">North Faxe</div>
                          <div className="text-[10px] text-slate-400">August 27, 2024</div>
                        </div>
                      </div>
                      <span className="font-bold text-rose-500">-$400</span>
                    </div>

                    {/* Item 3 */}
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-xl bg-blue-600 text-white font-bold text-xs flex items-center justify-center">N</div>
                        <div>
                          <div className="font-semibold text-slate-900">North Faxe</div>
                          <div className="text-[10px] text-slate-400">August 30, 2024</div>
                        </div>
                      </div>
                      <span className="font-bold text-emerald-500">+$200</span>
                    </div>

                    {/* Item 4 */}
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-xl bg-blue-600 text-white font-bold text-xs flex items-center justify-center">N</div>
                        <div>
                          <div className="font-semibold text-slate-900">North Faxe</div>
                          <div className="text-[10px] text-slate-400">August 27, 2024</div>
                        </div>
                      </div>
                      <span className="font-bold text-rose-500">-$400</span>
                    </div>
                  </div>
                </div>

                <div className="w-24 h-1 bg-slate-300 rounded-full mx-auto mt-2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- Section: Ready to transform your financial management? (Concentric Orbit Ecosystem) -------------------- */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto bg-[#F8F9FD] rounded-[40px] p-6 sm:p-10 md:p-16 border border-slate-200/80 shadow-xs relative overflow-hidden">
          
          {/* Top Title & CTA */}
          <div className="text-center max-w-3xl mx-auto mb-10 relative z-10">
            <SectionBadge text="Our workflow" />
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-950">
              Ready to transform your financial{' '}
              <span className="font-accent text-[#6C5CE7]">management?</span>
            </h2>
            <div className="mt-6">
              <button
                onClick={() => setTrialModalOpen(true)}
                className="px-6 py-2.5 rounded-full bg-[#6C5CE7] hover:bg-[#5A47E5] text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all cursor-pointer hover:scale-105"
              >
                Free Trial
              </button>
            </div>
          </div>

          {/* Concentric Orbit Rings Visual */}
          <div className="relative min-h-[460px] sm:min-h-[520px] flex items-center justify-center overflow-hidden">
            
            {/* Background Orbit Circles */}
            <div className="absolute w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] rounded-full border border-purple-200/60 pointer-events-none" />
            <div className="absolute w-[440px] h-[440px] sm:w-[580px] sm:h-[580px] rounded-full border border-purple-200/40 pointer-events-none" />
            <div className="absolute w-[580px] h-[580px] sm:w-[760px] sm:h-[760px] rounded-full border border-purple-100/50 pointer-events-none" />

            {/* Central Nicepay Orbit Hub */}
            <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-[#6C5CE7] p-4 flex items-center justify-center shadow-2xl shadow-purple-500/30">
              <NicepayIcon className="w-full h-full text-white" />
            </div>

            {/* Orbit Node Top Left: Total Users */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="absolute top-2 sm:top-6 left-2 sm:left-12 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-xl border border-slate-100"
            >
              <div className="flex items-center gap-1.5 mb-1.5">
                <Users className="w-3.5 h-3.5 text-[#6C5CE7]" />
                <span className="text-[11px] font-bold text-slate-800">Total Users</span>
              </div>
              <div className="flex items-center gap-3">
                <div>
                  <span className="text-base font-bold text-slate-900">20K+</span>
                  <p className="text-[9px] text-slate-400">Users</p>
                </div>
                <div className="flex -space-x-1.5">
                  <img className="w-5 h-5 rounded-full border border-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&auto=format&fit=crop&q=80" alt="avatar" />
                  <img className="w-5 h-5 rounded-full border border-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&auto=format&fit=crop&q=80" alt="avatar" />
                  <img className="w-5 h-5 rounded-full border border-white" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&auto=format&fit=crop&q=80" alt="avatar" />
                </div>
              </div>
            </motion.div>

            {/* Orbit Node Top Right: Income $2,999 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="absolute top-4 sm:top-8 right-2 sm:right-12 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-xl border border-slate-100 w-48 sm:w-56"
            >
              <div className="flex items-center gap-1.5 mb-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-[#6C5CE7]" />
                <span className="text-[11px] font-bold text-slate-800">Income</span>
              </div>
              <div className="flex justify-between items-baseline mb-1">
                <span className="text-[10px] text-slate-400">Income</span>
                <span className="text-sm font-bold text-slate-900">$2,999</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="h-full bg-[#6C5CE7] rounded-full w-[80%]" />
              </div>
              <span className="text-[9px] font-semibold text-[#6C5CE7]">80%</span>
            </motion.div>

            {/* Orbit Node Bottom Left: History Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="absolute bottom-2 sm:bottom-6 left-2 sm:left-8 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-xl border border-slate-100 w-52 sm:w-60"
            >
              <div className="flex items-center gap-1.5 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#6C5CE7]" />
                <span className="text-[11px] font-bold text-slate-800">History</span>
              </div>
              <div className="grid grid-cols-3 gap-1 bg-slate-100 p-0.5 rounded text-[9px] font-medium text-slate-600 mb-2">
                <div className="bg-white py-0.5 text-center font-bold">Daily</div>
                <div className="py-0.5 text-center text-slate-500">Weekly</div>
                <div className="py-0.5 text-center text-slate-500">Yearly</div>
              </div>
              <div className="space-y-1.5 text-[11px]">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-slate-800">North Faxe</span>
                  <span className="font-bold text-emerald-500">+$200</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-slate-800">North Faxe</span>
                  <span className="font-bold text-rose-500">-$400</span>
                </div>
              </div>
            </motion.div>

            {/* Orbit Node Bottom Right: Success Import Data */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="absolute bottom-6 sm:bottom-12 right-2 sm:right-10 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-xl border border-slate-100"
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-[#6C5CE7]">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Success Import Data</div>
                  <div className="text-[10px] text-slate-400">Import data from North Faxe</div>
                </div>
              </div>
            </motion.div>

            {/* Orbit Pills and Icons around center */}
            <div className="absolute left-[20%] top-[55%]">
              <FloatingNicepayPill className="text-[11px] px-2.5 py-0.5" />
            </div>
            <div className="absolute right-[20%] top-[58%]">
              <FloatingNicepayPill className="text-[11px] px-2.5 py-0.5" />
            </div>

            {/* Circular Orbit Markers */}
            <div className="absolute top-[30%] left-[33%] w-7 h-7 rounded-full bg-purple-100 border border-purple-300 flex items-center justify-center text-[#6C5CE7]">
              <Wallet className="w-3.5 h-3.5" />
            </div>
            <div className="absolute top-[34%] right-[32%] w-7 h-7 rounded-full bg-purple-100 border border-purple-300 flex items-center justify-center text-[#6C5CE7]">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <div className="absolute bottom-[24%] left-[46%] w-7 h-7 rounded-full bg-purple-100 border border-purple-300 flex items-center justify-center text-[#6C5CE7]">
              <Send className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- Section: Simple and Transparent Pricing -------------------- */}
      <section id="pricing" className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Pricing Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <SectionBadge text="Pricing" />
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-950">
              Simple and transparent <span className="font-accent text-[#6C5CE7]">pricing</span>
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              Choose a plan that fits your business needs and budget. No hidden fees, no surprises—just straightforward pricing for powerful financial management.
            </p>

            {/* Monthly / Yearly Switcher */}
            <div className="mt-8 inline-flex items-center bg-slate-100 p-1.5 rounded-full border border-slate-200">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  billingPeriod === 'monthly'
                    ? 'bg-[#6C5CE7] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod('yearly')}
                className={`px-5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  billingPeriod === 'yearly'
                    ? 'bg-[#6C5CE7] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                Yearly <span className="ml-1 text-[10px] text-emerald-500 font-bold bg-emerald-50 px-1.5 py-0.5 rounded-full">Save 20%</span>
              </button>
            </div>
          </div>

          {/* 3 Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mt-12">
            
            {/* Plan 1: Basic Plan */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="text-base font-bold text-slate-900 mb-4">Basic plan</div>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-extrabold text-slate-950">
                    {billingPeriod === 'monthly' ? '$99.00' : '$79.00'}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">/ month</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  Perfect for small businesses or startups, our Starter Plan gives you the essential tools to manage your finances with ease
                </p>

                <button
                  onClick={() => {
                    setAuthMode('signup');
                    setAuthModalOpen(true);
                  }}
                  className="w-full py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-900 text-sm font-semibold transition-all mb-8 shadow-xs cursor-pointer"
                >
                  Get Started
                </button>

                {/* Features */}
                <div className="space-y-3.5 text-xs text-slate-700">
                  {[
                    'Unlimited Invoices',
                    'Next-Day Payments',
                    'Secure Payment Gateway',
                    'Basic Analytics and Reporting',
                    'Email Support',
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-purple-50 flex items-center justify-center text-[#6C5CE7]">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Plan 2: Pro Plan (Featured) */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl p-8 border-2 border-[#6C5CE7]/30 shadow-lg relative flex flex-col justify-between ring-1 ring-[#6C5CE7]/20"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-base font-bold text-slate-900">Pro plan</div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#EDE9FE] text-[#6C5CE7] text-[10px] font-bold">
                    Popular
                  </span>
                </div>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-extrabold text-slate-950">
                    {billingPeriod === 'monthly' ? '$159.00' : '$129.00'}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">/ month</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  Designed for growing businesses, the Basic Plan expands on our Starter package with additional features and integrations.
                </p>

                <button
                  onClick={() => {
                    setAuthMode('signup');
                    setAuthModalOpen(true);
                  }}
                  className="w-full py-2.5 rounded-xl bg-[#6C5CE7] hover:bg-[#5A47E5] text-white text-sm font-semibold transition-all mb-8 shadow-md hover:shadow-lg cursor-pointer"
                >
                  Get Started
                </button>

                {/* Features */}
                <div className="space-y-3.5 text-xs text-slate-700">
                  {[
                    'Unlimited Invoices',
                    'Next-Day Payments',
                    'Secure Payment Gateway',
                    'Basic Analytics and Reporting',
                    'Email Support',
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[#6C5CE7] flex items-center justify-center text-white">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="font-medium text-slate-900">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Plan 3: Enterprise Plan */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="text-base font-bold text-slate-900 mb-4">Enterprise plan</div>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-extrabold text-slate-950">
                    {billingPeriod === 'monthly' ? '$399.00' : '$319.00'}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">/ month</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  Tailored for large enterprises, this plan offers advanced features, personalized support, and the scalability.
                </p>

                <button
                  onClick={() => {
                    setAuthMode('signup');
                    setAuthModalOpen(true);
                  }}
                  className="w-full py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-900 text-sm font-semibold transition-all mb-8 shadow-xs cursor-pointer"
                >
                  Get Started
                </button>

                {/* Features */}
                <div className="space-y-3.5 text-xs text-slate-700">
                  {[
                    'Unlimited Invoices',
                    'Next-Day Payments',
                    'Secure Payment Gateway',
                    'Basic Analytics and Reporting',
                    'Email Support',
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-purple-50 flex items-center justify-center text-[#6C5CE7]">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* -------------------- Section: What our clients are saying (Testimonials) -------------------- */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & 2k+ Trust Metric */}
          <div className="lg:col-span-5">
            <SectionBadge text="Testimonials" />
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-950">
              What our clients are <span className="font-accent text-[#6C5CE7]">saying</span>
            </h2>
            <p className="mt-6 text-slate-600 text-sm leading-relaxed max-w-md">
              Our financial management platform is transforming the way people manage their money. Here's what some of our users have to say about their experience
            </p>

            <div className="mt-16">
              <div className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">2k+</div>
              <p className="text-xs font-semibold text-slate-500 mt-1">Trusted by users</p>
            </div>
          </div>

          {/* Right Column: Testimonial Cards Stack */}
          <div className="lg:col-span-7 space-y-6">
            {/* Card 1 */}
            <div>
              <div className="text-xs font-semibold text-slate-400 mb-2">August 29, 2024</div>
              <div className="bg-[#F8F9FD] rounded-3xl p-6 sm:p-8 border border-slate-200/70 shadow-xs">
                <div className="flex items-center gap-3.5 mb-4">
                  <img
                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-xs"
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80"
                    alt="John David"
                  />
                  <div>
                    <h4 className="text-base font-bold text-slate-900">John David</h4>
                    {/* 5 Stars */}
                    <div className="flex gap-0.5 text-amber-400 mt-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  "As an active investor, I've struggled to keep track of my diverse portfolio. This platform changed everything. The investment tracking and performance analytics are incredibly detailed, giving me the insights I need to make smarter decisions. I've seen real growth since using this tool."
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div>
              <div className="text-xs font-semibold text-slate-400 mb-2">August 29, 2024</div>
              <div className="bg-[#F8F9FD] rounded-3xl p-6 sm:p-8 border border-slate-200/70 shadow-xs">
                <div className="flex items-center gap-3.5 mb-4">
                  <img
                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-xs"
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=120&auto=format&fit=crop&q=80"
                    alt="John Clayton"
                  />
                  <div>
                    <h4 className="text-base font-bold text-slate-900">John Clayton</h4>
                    <div className="flex gap-0.5 text-amber-400 mt-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  "Nicepay has automated 90% of our daily bookkeeping and reconciliation. Sending professional multi-currency invoices and receiving automated settlements has given our finance team peace of mind."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- Section: Maximizing the value of business data (Blog) -------------------- */}
      <section id="blog" className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionBadge text="Blog" />
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-950">
              Maximizing the value of business <span className="font-accent text-[#6C5CE7]">data</span>
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              Our provide valuable insights, and establish your brand as a thought leader in the financial space.
            </p>
          </div>

          {/* 3 Blog Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <motion.div
                key={post.id}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between hover:shadow-lg transition-all"
              >
                <div>
                  {/* Visual Graphic Header */}
                  <div className="relative w-full h-44 rounded-2xl bg-gradient-to-br from-[#EFEAFC] to-[#E3D7FB] mb-5 overflow-hidden flex items-center justify-center p-4 border border-purple-100">
                    {post.id === 1 && (
                      <div className="relative w-28 h-20 bg-white/70 backdrop-blur-md rounded-xl p-2.5 shadow-md flex flex-col justify-between border border-white/60 -rotate-3">
                        <div className="w-6 h-6 rounded-lg bg-[#6C5CE7] flex items-center justify-center text-white">
                          <NicepayIcon className="w-4 h-4" />
                        </div>
                        <div className="w-12 h-1.5 bg-[#6C5CE7]/40 rounded-full" />
                      </div>
                    )}

                    {post.id === 2 && (
                      <div className="relative w-20 h-20 rounded-2xl bg-[#6C5CE7] flex items-center justify-center shadow-lg p-3">
                        <NicepayIcon className="w-full h-full text-white" />
                      </div>
                    )}

                    {post.id === 3 && (
                      <div className="space-y-2 w-full max-w-[200px]">
                        <div className="bg-white/90 rounded-lg p-2 shadow-xs flex items-center justify-between text-[10px]">
                          <span className="font-bold text-slate-700">Income</span>
                          <span className="font-bold text-[#6C5CE7]">$2,999</span>
                        </div>
                        <div className="bg-white/90 rounded-lg p-2 shadow-xs flex items-center justify-between text-[10px]">
                          <span className="font-bold text-slate-700">20k+</span>
                          <span className="text-slate-400">Users</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Tags */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-[#6C5CE7]">{post.tag}</span>
                    {post.tag2 && (
                      <span className="text-xs font-semibold text-[#6C5CE7]">· {post.tag2}</span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-slate-950 mb-2.5 leading-snug line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-500 leading-relaxed mb-6 line-clamp-3">
                    {post.description}
                  </p>
                </div>

                {/* Read More Button */}
                <button
                  onClick={() => setSelectedArticle(post.id)}
                  className={`w-full py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    post.isHighlighted
                      ? 'bg-[#6C5CE7] hover:bg-[#5A47E5] text-white shadow-md'
                      : 'border border-slate-200 bg-white hover:bg-slate-50 text-slate-900 shadow-xs'
                  }`}
                >
                  Read More
                </button>
              </motion.div>
            ))}
          </div>

          {/* Bottom Center Button */}
          <div className="mt-12 text-center">
            <button
              onClick={() => {
                const blogSection = document.getElementById('blog');
                blogSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-2.5 rounded-full bg-[#6C5CE7] hover:bg-[#5A47E5] text-white text-xs font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              Learn more
            </button>
          </div>
        </div>
      </section>

      {/* -------------------- Footer Section -------------------- */}
      <footer className="pt-16 pb-12 bg-white border-t border-slate-200/80 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main 4-Column Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12">
            
            {/* Col 1: Brand Info */}
            <div className="md:col-span-4">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-xl bg-purple-50 flex items-center justify-center">
                  <NicepayIcon className="w-7 h-7" />
                </div>
                <span className="font-bold text-xl text-slate-950 tracking-tight">Nicepay</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
                Streamline your business's financial management with our intuitive, scalable SaaS platform. Designed for U.S. enterprises, our solutions simplify complex processes.
              </p>
            </div>

            {/* Col 2: Useful Link */}
            <div className="md:col-span-2">
              <h4 className="text-sm font-bold text-slate-900 mb-4">Useful Link</h4>
              <ul className="space-y-2.5 text-xs text-slate-500">
                <li><a href="#" className="hover:text-[#6C5CE7] transition-colors">Home</a></li>
                <li><a href="#features" className="hover:text-[#6C5CE7] transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-[#6C5CE7] transition-colors">Pricing</a></li>
                <li><a href="#workflow" className="hover:text-[#6C5CE7] transition-colors">About</a></li>
              </ul>
            </div>

            {/* Col 3: Follow Us */}
            <div className="md:col-span-2">
              <h4 className="text-sm font-bold text-slate-900 mb-4">Follow Us</h4>
              <ul className="space-y-2.5 text-xs text-slate-500">
                <li><a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#6C5CE7] transition-colors">Facebook</a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#6C5CE7] transition-colors">Instagram</a></li>
                <li><a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-[#6C5CE7] transition-colors">X</a></li>
              </ul>
            </div>

            {/* Col 4: Newsletter Subscription */}
            <div className="md:col-span-4">
              <h4 className="text-sm font-bold text-slate-900 mb-4">Subscribe our newsletter</h4>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="flex items-center gap-2">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Your email address"
                    className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]/30 focus:border-[#6C5CE7]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-[#6C5CE7] hover:bg-[#5A47E5] text-white text-xs font-semibold shadow-sm transition-all cursor-pointer"
                  >
                    Subscribe
                  </button>
                </div>
                {newsletterSubscribed && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs font-semibold text-emerald-600 flex items-center gap-1.5"
                  >
                    <Check className="w-3.5 h-3.5" />
                    Thank you! You're subscribed to Nicepay updates.
                  </motion.div>
                )}
              </form>
            </div>

          </div>

          {/* Bottom Copyright & Webflow Template Credit */}
          <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
            <div>© {new Date().getFullYear()} Nicepay Inc. All rights reserved.</div>
            <div className="flex items-center gap-4">
              <span className="hover:text-slate-600 cursor-pointer">Privacy Policy</span>
              <span>·</span>
              <span className="hover:text-slate-600 cursor-pointer">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>

      {/* -------------------- Interactive Sign In / Sign Up Modal -------------------- */}
      <AnimatePresence>
        {authModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setAuthModalOpen(false)}
              className="absolute inset-0 bg-slate-950/40 backdrop-blur-xs"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl border border-slate-100 z-10"
            >
              <button
                onClick={() => setAuthModalOpen(false)}
                className="absolute top-5 right-5 text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-xl bg-purple-50 flex items-center justify-center">
                  <NicepayIcon className="w-6 h-6" />
                </div>
                <span className="font-bold text-lg text-slate-950">Nicepay</span>
              </div>

              <h3 className="text-2xl font-bold text-slate-950 mb-1">
                {authMode === 'signin' ? 'Welcome back' : 'Create your account'}
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                {authMode === 'signin'
                  ? 'Enter your credentials to access your financial dashboard'
                  : 'Get started with a 14-day free trial, no credit card required'}
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(`Successfully logged in as demo user!`);
                  setAuthModalOpen(false);
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Work Email</label>
                  <input
                    type="email"
                    required
                    defaultValue="sarah.jenkins@enterprise.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]/30 focus:border-[#6C5CE7]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Password</label>
                  <input
                    type="password"
                    required
                    defaultValue="••••••••••••"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]/30 focus:border-[#6C5CE7]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#6C5CE7] hover:bg-[#5A47E5] text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                >
                  {authMode === 'signin' ? 'Sign In to Dashboard' : 'Create Account'}
                </button>
              </form>

              <div className="mt-5 text-center text-xs text-slate-500">
                {authMode === 'signin' ? (
                  <>
                    Don't have an account?{' '}
                    <button
                      type="button"
                      onClick={() => setAuthMode('signup')}
                      className="text-[#6C5CE7] font-bold hover:underline"
                    >
                      Sign Up
                    </button>
                  </>
                ) : (
                  <>
                    Already have an account?{' '}
                    <button
                      type="button"
                      onClick={() => setAuthMode('signin')}
                      className="text-[#6C5CE7] font-bold hover:underline"
                    >
                      Sign In
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* -------------------- Interactive Free Trial Modal -------------------- */}
      <AnimatePresence>
        {trialModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setTrialModalOpen(false)}
              className="absolute inset-0 bg-slate-950/40 backdrop-blur-xs"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-lg bg-white rounded-3xl p-8 shadow-2xl border border-slate-100 z-10"
            >
              <button
                onClick={() => setTrialModalOpen(false)}
                className="absolute top-5 right-5 text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>

              <SectionBadge text="14-Day Free Trial" />
              <h3 className="text-2xl font-bold text-slate-950 mt-3 mb-2">
                Start your 14-day free trial
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Experience full financial automation, bank synchronization, and AI reporting with zero commitments.
              </p>

              <div className="space-y-3 mb-6 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <Check className="w-4 h-4 text-[#6C5CE7]" />
                  <span>Instant multi-account bank feed linking</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <Check className="w-4 h-4 text-[#6C5CE7]" />
                  <span>Unlimited smart invoicing & next-day payouts</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <Check className="w-4 h-4 text-[#6C5CE7]" />
                  <span>Full access to custom analytics and ledger tools</span>
                </div>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Thank you! Your Nicepay Sandbox environment is ready.');
                  setTrialModalOpen(false);
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Company Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Acme Financial Corp"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]/30"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Work Email</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@acmecorp.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#6C5CE7]/30"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#6C5CE7] hover:bg-[#5A47E5] text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                >
                  Activate Free Trial
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* -------------------- Interactive Cart Drawer -------------------- */}
      <AnimatePresence>
        {cartDrawerOpen && (
          <div className="fixed inset-0 z-50 flex justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setCartDrawerOpen(false)}
              className="absolute inset-0 bg-slate-950/40 backdrop-blur-xs"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-md bg-white h-full shadow-2xl z-10 flex flex-col justify-between p-6"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5 text-[#6C5CE7]" />
                    <h3 className="font-bold text-lg text-slate-950">Your Cart ({cartCount})</h3>
                  </div>
                  <button onClick={() => setCartDrawerOpen(false)} className="p-1 text-slate-400 hover:text-slate-700">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="py-6">
                  {cartCount === 0 ? (
                    <div className="text-center py-12">
                      <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-[#6C5CE7] mx-auto mb-3">
                        <ShoppingBag className="w-6 h-6" />
                      </div>
                      <p className="text-sm font-semibold text-slate-800">Your cart is empty</p>
                      <p className="text-xs text-slate-400 mt-1">Explore our plans or add a starter addon.</p>
                      <button
                        onClick={handleAddToCart}
                        className="mt-4 px-4 py-2 rounded-xl bg-purple-50 text-[#6C5CE7] text-xs font-bold hover:bg-purple-100"
                      >
                        + Add Starter Integration Pack ($49)
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                          <div>
                            <div className="text-xs font-bold text-slate-900">{item.name}</div>
                            <div className="text-xs text-[#6C5CE7] font-semibold">${item.price}.00</div>
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => setCartCount(Math.max(0, cartCount - 1))}
                              className="w-6 h-6 rounded bg-white border border-slate-200 flex items-center justify-center text-xs text-slate-600 hover:bg-slate-100"
                            >
                              -
                            </button>
                            <span className="text-xs font-bold">{cartCount}</span>
                            <button
                              onClick={() => setCartCount(cartCount + 1)}
                              className="w-6 h-6 rounded bg-white border border-slate-200 flex items-center justify-center text-xs text-slate-600 hover:bg-slate-100"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {cartCount > 0 && (
                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>Subtotal</span>
                    <span className="font-bold text-slate-900">${cartCount * 49}.00</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-slate-950">
                    <span>Total</span>
                    <span>${cartCount * 49}.00</span>
                  </div>
                  <button
                    onClick={() => {
                      alert('Checkout initialized! Redirecting to secure gateway...');
                      setCartDrawerOpen(false);
                    }}
                    className="w-full py-3 rounded-xl bg-[#6C5CE7] hover:bg-[#5A47E5] text-white font-bold text-xs shadow-md"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* -------------------- Interactive Blog Reader Modal -------------------- */}
      <AnimatePresence>
        {selectedArticle !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="absolute inset-0 bg-slate-950/40 backdrop-blur-xs"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl p-8 shadow-2xl border border-slate-100 z-10 max-h-[85vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>

              {(() => {
                const post = blogPosts.find((p) => p.id === selectedArticle);
                if (!post) return null;
                return (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-bold text-[#6C5CE7]">{post.tag}</span>
                      <span className="text-xs text-slate-400">·</span>
                      <span className="text-xs text-slate-400">{post.readTime}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-950 mb-4">{post.title}</h2>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6 font-medium bg-purple-50/60 p-4 rounded-2xl border border-purple-100">
                      {post.description}
                    </p>
                    <div className="prose text-xs sm:text-sm text-slate-600 leading-relaxed space-y-4">
                      <p>{post.fullContent}</p>
                      <p>
                        Leading financial operators use Nicepay to unify cross-border settlement, credit line reconciliation, and instant customer payouts with enterprise-grade encryption.
                      </p>
                    </div>
                    <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <NicepayIcon className="w-6 h-6" />
                        <span className="text-xs font-bold text-slate-800">Nicepay Insights</span>
                      </div>
                      <button
                        onClick={() => setSelectedArticle(null)}
                        className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold"
                      >
                        Close Article
                      </button>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
