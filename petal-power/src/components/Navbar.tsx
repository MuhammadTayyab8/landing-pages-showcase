

import React from 'react';
import { Search, ShoppingBag, User, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenSearch: () => void;
  onOpenCart: () => void;
  onOpenAuth: () => void;
  onOpenContact: () => void;
  cartCount: number;
}

export default function Navbar({
  activeTab,
  setActiveTab,
  onOpenSearch,
  onOpenCart,
  onOpenAuth,
  onOpenContact,
  cartCount,
}: NavbarProps) {
  return (
    <header className="relative z-30 pt-6 px-4 sm:px-8 max-w-7xl mx-auto w-full">
      <div className="flex items-center justify-between gap-2 sm:gap-4">
        {/* Left: Botanical Floral Badge */}
        <motion.button
          id="brand-logo-btn"
          whileHover={{ scale: 1.05, rotate: 90 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveTab('Home')}
          aria-label="Petal Power Home"
          className="w-10 h-10 rounded-full border border-white/25 bg-white/10 backdrop-blur-md flex items-center justify-center text-white shadow-sm hover:border-white/40 transition-colors shrink-0"
        >
          <svg className="w-5 h-5 fill-current text-white/90" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" opacity="0.2"/>
            <circle cx="12" cy="12" r="3" />
            <path d="M12 3a9 9 0 0 0-9 9c0 1.6.42 3.1 1.15 4.41L12 12V3z" opacity="0.7"/>
            <path d="M12 3a9 9 0 0 1 9 9c0 1.6-.42 3.1-1.15 4.41L12 12V3z" opacity="0.7"/>
          </svg>
        </motion.button>

        {/* Center: Navigation Pill Container */}
        <nav 
          id="main-nav-bar"
          aria-label="Main Navigation"
          className="bg-black/35 backdrop-blur-md border border-white/15 rounded-full p-1 flex items-center shadow-lg"
        >
          {(['Home', 'Contact', 'Blog'] as const).map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                id={`nav-link-${tab.toLowerCase()}`}
                onClick={() => {
                  if (tab === 'Contact') {
                    onOpenContact();
                  } else {
                    setActiveTab(tab);
                  }
                }}
                className={`relative ${tab === 'Blog' ? 'hidden sm:block' : ''} px-3.5 sm:px-5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'text-[#12231e] font-semibold'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-white rounded-full shadow-sm"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Actions: Search, Shop, Log in */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Search Button */}
          <motion.button
            id="nav-search-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenSearch}
            aria-label="Search houseplants"
            className="w-8 h-8 sm:w-9 sm:h-9 bg-black/35 backdrop-blur-md border border-white/15 rounded-full flex items-center justify-center text-white/90 hover:text-white hover:bg-black/50 transition-colors shadow-sm"
          >
            <Search className="w-4 h-4" />
          </motion.button>

          {/* Shop Pill Button */}
          <motion.button
            id="nav-shop-btn"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={onOpenCart}
            className="relative bg-black/35 backdrop-blur-md border border-white/15 text-white/90 hover:text-white hover:bg-black/50 px-2.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors shadow-sm flex items-center gap-1.5"
            aria-label="Open cart"
          >
            <ShoppingBag className="w-3.5 h-3.5 sm:hidden" />
            <span className="hidden sm:inline">Shop</span>
            {cartCount > 0 && (
              <span className="w-5 h-5 bg-white text-[#12231e] rounded-full text-[10px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </motion.button>

          {/* Log in Pill Button */}
          <motion.button
            id="nav-login-btn"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={onOpenAuth}
            className="bg-black/35 backdrop-blur-md border border-white/15 text-white/90 hover:text-white hover:bg-black/50 px-2 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors shadow-sm whitespace-nowrap"
            aria-label="Log in"
          >
            <User className="w-4 h-4 sm:hidden" />
            <span className="hidden sm:inline">Log in</span>
          </motion.button>
        </div>
      </div>
    </header>
  );
}
