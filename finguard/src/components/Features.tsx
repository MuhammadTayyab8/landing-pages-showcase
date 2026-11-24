

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowUpRight, Check, Clock, XCircle, Shield, TrendingUp, Sparkles } from 'lucide-react';

export const Features: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(3); // Default to 03 as shown in screenshot

  const featureItems = [
    {
      id: 1,
      num: '01',
      title: 'Secure and Easy Transactions',
      subtitle: 'End-to-end multi-layer encrypted settlement infrastructure.',
      mockupData: {
        title: 'Security & Verification',
        stats: [
          { label: '99.9% Shielded', color: 'bg-emerald-500' },
          { label: '0.1% Blocked', color: 'bg-rose-500' },
          { label: '2FA Active', color: 'bg-neutral-800' },
        ],
        barSplit: { success: 85, pending: 10, cancel: 5 },
        invoices: [
          { name: 'Hardware Token Verified', date: 'Just now', status: 'SUCCESS', amount: '$1,420.00', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80' },
          { name: 'Biometric Auth Login', date: '10 mins ago', status: 'SUCCESS', amount: '$320.50', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80' },
          { name: 'Suspicious IP Blocked', date: '1 hour ago', status: 'BLOCKED', amount: '$0.00', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80' },
        ],
      },
    },
    {
      id: 2,
      num: '02',
      title: 'Real-Time Financial Monitoring',
      subtitle: 'Instant push telemetry for every swipe, tap, and transfer.',
      mockupData: {
        title: 'Live Cashflow Stream',
        stats: [
          { label: '78% Inflow', color: 'bg-emerald-500' },
          { label: '18% Recurring', color: 'bg-amber-500' },
          { label: '4% Fees', color: 'bg-neutral-800' },
        ],
        barSplit: { success: 78, pending: 18, cancel: 4 },
        invoices: [
          { name: 'Stripe Merchant Payout', date: '5 mins ago', status: 'SUCCESS', amount: '+$8,950.00', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop&q=80' },
          { name: 'AWS Cloud Hosting', date: 'Today at 2:15 PM', status: 'SUCCESS', amount: '-$240.00', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80' },
          { name: 'Wire Settlement Batch', date: 'Processing', status: 'PENDING', amount: '+$12,400.00', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80' },
        ],
      },
    },
    {
      id: 3,
      num: '03',
      title: 'Fast & EASY TRANSACTIONS',
      subtitle: 'Sub-second wire transfers, smart batching, and automated invoice clearance.',
      mockupData: {
        title: 'Latest Invoice',
        stats: [
          { label: '67% Success', color: 'bg-[#FF4500]' },
          { label: '14% Pending', color: 'bg-amber-500' },
          { label: '19% Cancel', color: 'bg-neutral-800' },
        ],
        barSplit: { success: 67, pending: 14, cancel: 19 },
        invoices: [
          { name: 'Kelly Williams', date: '4 July 2024', status: 'SUCCESS', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80' },
          { name: 'John Terry', date: '3 July 2024', status: 'SUCCESS', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80' },
          { name: 'Caitlin Clark', date: '2 July 2024', status: 'PENDING', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80' },
        ],
      },
    },
    {
      id: 4,
      num: '04',
      title: 'Comprehensive Financial Planning',
      subtitle: 'Automated tax reserves, retirement projection, and growth compounding.',
      mockupData: {
        title: 'Savings & Growth Target',
        stats: [
          { label: '82% Achieved', color: 'bg-emerald-500' },
          { label: '12% Scheduled', color: 'bg-amber-500' },
          { label: '6% Buffer', color: 'bg-neutral-800' },
        ],
        barSplit: { success: 82, pending: 12, cancel: 6 },
        invoices: [
          { name: 'Emergency Fund Vault', date: 'Auto-funded', status: 'SUCCESS', amount: '+$500.00', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80' },
          { name: 'High-Yield APY Pool (5.2%)', date: 'Daily interest', status: 'SUCCESS', amount: '+$84.12', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80' },
          { name: 'Q3 Tax Vault Lock', date: '15 July 2024', status: 'PENDING', amount: '$3,200.00', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80' },
        ],
      },
    },
  ];

  const currentMockup = featureItems.find((f) => f.id === activeTab)?.mockupData || featureItems[2].mockupData;

  return (
    <section id="features" className="py-20 md:py-28 bg-[#F4F4F6] text-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 block mb-2">
              FEATURES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-neutral-900 leading-[1.05]">
              ALL-IN-ONE PLATFORM<br />FOR SAVINGS
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              Simplify your financial life by securely connecting your accounts automatically categorizing transactions.
            </p>
          </div>
        </div>

        {/* 2-Column Layout: Left Accordion List, Right Live Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Numbered Interactive Features List */}
          <div className="lg:col-span-6 space-y-3">
            {featureItems.map((item) => {
              const isActive = activeTab === item.id;

              return (
                <div
                  key={item.id}
                  id={`feature-item-${item.id}`}
                  onClick={() => setActiveTab(item.id)}
                  className={`p-4 sm:p-5 rounded-2xl transition-all duration-200 cursor-pointer select-none flex items-center justify-between gap-4 ${
                    isActive
                      ? 'bg-[#0D0D0D] text-white shadow-xl shadow-black/10'
                      : 'bg-white text-neutral-800 border border-neutral-200/70 hover:border-neutral-300 hover:bg-neutral-50'
                  }`}
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span
                      className={`text-sm sm:text-base font-extrabold tracking-wider ${
                        isActive ? 'text-white' : 'text-neutral-400'
                      }`}
                    >
                      {item.num}
                    </span>
                    <span
                      className={`text-sm sm:text-base md:text-lg ${
                        isActive
                          ? 'font-black uppercase tracking-tight text-white'
                          : 'font-bold text-neutral-800'
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>

                  {/* Right Button / Arrow */}
                  <div className="shrink-0">
                    {isActive ? (
                      <div className="w-10 h-10 rounded-full bg-[#FF4500] text-white flex items-center justify-center shadow-md shadow-orange-600/30">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    ) : (
                      <div className="w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500 hover:text-neutral-900 transition-colors">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: "Latest Invoice" Floating Card Mockup */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.96, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -10 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-neutral-200/80"
              >
                {/* 3 Mac-style window dots */}
                <div className="flex items-center gap-1.5 mb-5">
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
                </div>

                {/* Card Title */}
                <h4 className="text-base font-black tracking-tight text-neutral-900 mb-4">
                  {currentMockup.title}
                </h4>

                {/* Percentage Stats Header */}
                <div className="flex items-center justify-between text-xs font-bold text-neutral-700 mb-3 flex-wrap gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#FF4500]" />
                    <span>67% <span className="font-normal text-neutral-500">Success</span></span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span>14% <span className="font-normal text-neutral-500">Pending</span></span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-neutral-800" />
                    <span>19% <span className="font-normal text-neutral-500">Cancel</span></span>
                  </div>
                </div>

                {/* Multi-Segment Progress Bar matching screenshot */}
                <div className="w-full h-2 rounded-full bg-neutral-100 overflow-hidden flex mb-6">
                  <div style={{ width: '67%' }} className="h-full bg-[#FF4500]" />
                  <div style={{ width: '14%' }} className="h-full bg-amber-500" />
                  <div style={{ width: '19%' }} className="h-full bg-neutral-800" />
                </div>

                {/* Transaction Rows List */}
                <div className="space-y-3.5">
                  {currentMockup.invoices.map((inv, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-2.5 rounded-xl hover:bg-neutral-50 transition-colors"
                    >
                      {/* Left: Avatar + Details */}
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full overflow-hidden bg-neutral-200 shrink-0 border border-neutral-200">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={inv.avatar}
                            alt={inv.name}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm font-bold text-neutral-900 leading-tight">
                            {inv.name}
                          </p>
                          <p className="text-[11px] text-neutral-400 font-medium">{inv.date}</p>
                        </div>
                      </div>

                      {/* Right: Status Pill Badge matching screenshot */}
                      <div>
                        {inv.status === 'SUCCESS' ? (
                          <span className="inline-block px-3 py-1 bg-[#FF4500] text-white text-[10px] font-black tracking-wider uppercase rounded-md shadow-sm">
                            SUCCESS
                          </span>
                        ) : inv.status === 'BLOCKED' ? (
                          <span className="inline-block px-3 py-1 bg-rose-600 text-white text-[10px] font-black tracking-wider uppercase rounded-md shadow-sm">
                            BLOCKED
                          </span>
                        ) : (
                          <span className="inline-block px-3 py-1 bg-[#0D0D0D] text-white text-[10px] font-black tracking-wider uppercase rounded-md shadow-sm">
                            PENDING
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};
