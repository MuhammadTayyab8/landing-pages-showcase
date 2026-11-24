

import React from 'react';
import { motion } from 'motion/react';

interface FooterProps {
  onOpenAuth: (mode?: 'signup' | 'login') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAuth }) => {
  return (
    <footer className="bg-[#FF4500] text-white relative overflow-hidden pt-12 md:pt-16 pb-8">
      {/* Top 3D Volumetric "finguard" Typography Banner spanning the entire width */}
      <div className="w-full overflow-hidden select-none pointer-events-none mb-10 md:mb-16 px-2 sm:px-4">
        <div className="relative w-full flex justify-center items-center">
          {/* Custom Crafted 3D Extruded Perspective SVG of "finguard" matching screenshot */}
          <svg
            viewBox="0 0 1200 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto max-h-[160px] sm:max-h-[220px] md:max-h-[280px] drop-shadow-2xl"
          >
            <defs>
              {/* Depth and lighting gradients for 3D clay extrusion */}
              <linearGradient id="extrusionFront" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FF7033" />
                <stop offset="60%" stopColor="#FF5000" />
                <stop offset="100%" stopColor="#E03800" />
              </linearGradient>

              <linearGradient id="extrusionDepth" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#C42E00" />
                <stop offset="50%" stopColor="#A82500" />
                <stop offset="100%" stopColor="#781800" />
              </linearGradient>

              <linearGradient id="highlightGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFA17A" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#FF5500" stopOpacity="0.2" />
              </linearGradient>

              <filter id="softShadow" x="-10%" y="-10%" width="130%" height="140%">
                <feDropShadow dx="0" dy="16" stdDeviation="12" floodColor="#591200" floodOpacity="0.6" />
              </filter>
            </defs>

            {/* Background 3D Extrusion Shadow Layers (Offset depth steps) */}
            <g filter="url(#softShadow)" opacity="0.95">
              {[22, 18, 14, 10, 6, 2].map((offset, i) => (
                <text
                  key={i}
                  x="50%"
                  y={170 + offset}
                  textAnchor="middle"
                  fill="url(#extrusionDepth)"
                  className="font-black tracking-tighter uppercase"
                  style={{
                    fontFamily: 'var(--font-sans), sans-serif',
                    fontSize: '175px',
                    fontWeight: 900,
                    letterSpacing: '-0.04em',
                  }}
                >
                  finguard
                </text>
              ))}

              {/* Front Bevel Layer */}
              <text
                x="50%"
                y="170"
                textAnchor="middle"
                fill="url(#extrusionFront)"
                stroke="#FFAA80"
                strokeWidth="1.5"
                className="font-black tracking-tighter uppercase"
                style={{
                  fontFamily: 'var(--font-sans), sans-serif',
                  fontSize: '175px',
                  fontWeight: 900,
                  letterSpacing: '-0.04em',
                }}
              >
                finguard
              </text>
            </g>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Social Icons Row matching screenshot (Facebook, X, Instagram, LinkedIn) */}
        <div className="flex items-center gap-5 mb-10">
          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white/80 transition-transform hover:scale-110"
            aria-label="Facebook"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white/80 transition-transform hover:scale-110"
            aria-label="Instagram"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>

          {/* X / Twitter */}
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white/80 transition-transform hover:scale-110"
            aria-label="X"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white/80 transition-transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>

        {/* Main Grid: Left CTA & Right 4 Link Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/20">
          
          {/* Left CTA block */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white leading-tight max-w-sm">
              READY TO TAKE CONTROL OF YOUR FINANCIAL FUTURE
            </h3>

            <div>
              <button
                id="footer-get-started-btn"
                onClick={() => onOpenAuth('signup')}
                className="bg-white hover:bg-neutral-100 text-[#FF4500] font-black text-xs uppercase tracking-wider py-3.5 px-8 rounded-full shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95 cursor-pointer"
              >
                GET STARTED
              </button>
            </div>
          </div>

          {/* Right 4 Columns matching screenshot exactly */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
            
            {/* Column 1: Features */}
            <div>
              <h4 className="text-xs font-bold text-white mb-4 tracking-wide">Features</h4>
              <ul className="space-y-2.5 text-xs text-white/85">
                <li><a href="#features" className="hover:text-white transition-colors">Analytics</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Collaboration</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Data Management</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>

            {/* Column 2: Company */}
            <div>
              <h4 className="text-xs font-bold text-white mb-4 tracking-wide">Company</h4>
              <ul className="space-y-2.5 text-xs text-white/85">
                <li><a href="#products" className="hover:text-white transition-colors">About us</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>

            {/* Column 3: Resource */}
            <div>
              <h4 className="text-xs font-bold text-white mb-4 tracking-wide">Resource</h4>
              <ul className="space-y-2.5 text-xs text-white/85">
                <li><a href="#partners" className="hover:text-white transition-colors">Customers</a></li>
                <li><a href="#partners" className="hover:text-white transition-colors">Strategic</a></li>
                <li><a href="#partners" className="hover:text-white transition-colors">E books & Guides</a></li>
                <li><a href="#partners" className="hover:text-white transition-colors">Webinar</a></li>
              </ul>
            </div>

            {/* Column 4: Support */}
            <div>
              <h4 className="text-xs font-bold text-white mb-4 tracking-wide">Support</h4>
              <ul className="space-y-2.5 text-xs text-white/85">
                <li><a href="#products" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-white/80 gap-4">
          <div>
            <span>© 2024 finguard</span>
          </div>

          <div className="text-center">
            <span>All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
