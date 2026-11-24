

import React, { useState } from 'react';
import Image from '@/lib/Image';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServicesSectionProps {
  onOpenInquiry?: () => void;
  onOpenProcessModal?: () => void;
}

const serviceList = [
  {
    id: '01',
    title: 'UI/UX Design',
    description: 'Intuitive user experiences and beautiful digital interfaces crafted through research, wireframing, interactive prototyping, and human-centric design systems.',
    deliverables: ['Design Systems', 'Mobile App UI', 'Web Dashboards', 'Interactive Prototypes'],
  },
  {
    id: '02',
    title: 'Web Development',
    description: 'High-performance, modern, accessible web applications built with cutting-edge full-stack technologies, pixel-perfect responsiveness, and SEO optimization.',
    deliverables: ['Next.js / React Apps', 'Headless CMS', 'E-Commerce Platforms', 'API Integrations'],
  },
  {
    id: '03',
    title: '3D Designs',
    description: 'Photorealistic 3D product visualizations, immersive brand environments, CGI assets, and interactive WebGL experiences that captivate attention.',
    deliverables: ['Product Rendering', '3D Motion Assets', 'WebGL Experiences', 'Spatial Environments'],
  },
  {
    id: '04',
    title: 'Motion Graphics',
    description: 'Dynamic animation, brand reveal videos, micro-interactions, and visual storytelling that breathe life into digital brand identities.',
    deliverables: ['Logo Animations', 'Explainer Videos', 'UI Micro-interactions', 'Social Visuals'],
  },
];

export default function ServicesSection({ onOpenInquiry, onOpenProcessModal }: ServicesSectionProps) {
  const [activeService, setActiveService] = useState<string>('01');

  return (
    <section id="services" className="relative w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header & Subtitle */}
      <div className="mb-12 md:mb-16">
        <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#b8ff2c]">What we do</p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 flex-wrap mb-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
            Our
          </h2>
          <span className="bg-[#b8ff2c] text-black font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight px-5 py-1 rounded-full font-display inline-block shadow-md">
            Services
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm sm:text-base text-neutral-400 max-w-xl leading-relaxed"
        >
          We offer a range of creative and digital services designed to help your brand stand out.
        </motion.p>
      </div>

      {/* 3-Column Services Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        
        {/* Column 1: Interactive Service Rows (4 Pills) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-3 sm:gap-4">
          {serviceList.map((service, idx) => {
            const isActive = activeService === service.id;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="w-full"
              >
                <button
                  onClick={() => setActiveService(isActive ? '' : service.id)}
                  className={`w-full flex items-center justify-between px-6 py-4 rounded-full border transition-all duration-300 group text-left ${
                    isActive
                      ? 'bg-neutral-800/90 border-[#b8ff2c] text-white shadow-lg'
                      : 'bg-neutral-900/60 border-white/10 hover:border-white/30 text-neutral-200 hover:bg-neutral-800/50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-bold text-neutral-400 font-mono">
                      {service.id}
                    </span>
                    <span className="text-sm sm:text-base font-semibold tracking-wide">
                      {service.title}
                    </span>
                  </div>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
                    isActive ? 'bg-[#b8ff2c] text-black rotate-90' : 'bg-white/5 text-white group-hover:translate-x-1'
                  }`}>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>

                {/* Expanded Details Drawer */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-2 p-5 rounded-3xl bg-neutral-900/90 border border-white/10 text-xs sm:text-sm text-neutral-300 space-y-3">
                        <p className="leading-relaxed text-neutral-400">
                          {service.description}
                        </p>
                        <div className="flex flex-wrap gap-2 pt-1">
                          {service.deliverables.map((item) => (
                            <span
                              key={item}
                              className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full text-[11px] text-neutral-300 font-medium"
                            >
                              <CheckCircle2 className="w-3 h-3 text-[#b8ff2c]" />
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Column 2: Center Image Showcase with Rotating Circular Typography Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-4 relative rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 aspect-[4/5] sm:aspect-auto min-h-[380px] lg:min-h-full"
        >
          <Image
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop"
            alt="Designer working on digital interface"
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover contrast-110 hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

          {/* Rotating Circular Typography Badge */}
          <div className="absolute -top-6 -left-6 sm:top-4 sm:left-4 z-20 pointer-events-none">
            <div className="relative w-36 h-36 flex items-center justify-center animate-spin-slow">
              <svg viewBox="0 0 160 160" className="w-full h-full">
                <path
                  id="circlePath"
                  d="M 80, 80 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                  fill="none"
                />
                <text className="text-[10px] font-bold uppercase tracking-[0.2em] fill-[#b8ff2c]">
                  <textPath href="#circlePath" startOffset="0%">
                    ✦ Creatix Digital ✦ Noor Digital ✦ Creatix Digital ✦ Noor Digital
                  </textPath>
                </text>
              </svg>
              <div className="absolute w-6 h-6 rounded-full bg-[#b8ff2c] flex items-center justify-center text-black font-bold text-[10px]">
                ★
              </div>
            </div>
          </div>
        </motion.div>

        {/* Column 3: Two Quick Action Cards (Top Dark, Bottom Bright Lime) */}
        <div className="lg:col-span-3 flex flex-col justify-between gap-4">
          
          {/* Card A (Top Dark): "Ever wondered how design magic happens?" */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 sm:p-7 rounded-3xl bg-[#121418] border border-white/10 flex flex-col justify-between gap-6 flex-1 hover:border-white/20 transition-all shadow-xl group"
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                Process
              </span>
              <h3 className="text-base sm:text-lg font-medium text-neutral-200 mt-2 leading-snug">
                Ever wondered how design magic happens?
              </h3>
            </div>

            <div>
              <button
                onClick={onOpenProcessModal || onOpenInquiry}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white group-hover:text-[#b8ff2c] transition-colors"
              >
                <span>See how we work</span>
                <div className="w-7 h-7 rounded-full bg-white/10 group-hover:bg-[#b8ff2c] group-hover:text-black flex items-center justify-center transition-all">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </button>
            </div>
          </motion.div>

          {/* Card B (Bottom Bright Lime): "Looking for design experts who can bring your vision to life?" */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="p-6 sm:p-7 rounded-3xl bg-[#b8ff2c] text-black flex flex-col justify-between gap-6 flex-1 shadow-2xl hover:bg-[#c6ff47] transition-all group"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-black/70">
                Consultation
              </span>
              <h3 className="text-base sm:text-lg font-bold text-neutral-950 mt-2 leading-snug">
                Looking for design experts who can bring your vision to life?
              </h3>
            </div>

            <div>
              <button
                onClick={onOpenInquiry}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-black group-hover:translate-x-1 transition-transform"
              >
                <span>Meet our expert</span>
                <div className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-neutral-900 transition-colors shadow">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
