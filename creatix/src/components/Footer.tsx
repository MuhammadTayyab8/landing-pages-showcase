

import React, { useState } from 'react';
import { CreatixBurst } from './Icons';
import { Facebook, Twitter, Instagram, Linkedin, Dribbble, ArrowRight, Check } from 'lucide-react';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    setSubscribed(true);
  };

  return (
    <footer className="w-full bg-[#08090b] text-neutral-400 border-t border-white/10 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-14">
        
        {/* Top Branding & Mission Statement */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="text-[#b8ff2c]">
              <CreatixBurst className="w-8 h-8 text-[#b8ff2c]" />
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-white font-display">
              Creatix
            </span>
          </div>

          <p className="text-xs sm:text-sm text-neutral-400 max-w-xl leading-relaxed">
            Unlock your brand&apos;s full potential with curated digital strategies that elevate growth,
            enhance visibility, and nurture measurable results.
          </p>
        </div>

        {/* Footer Navigation Columns Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          
          {/* Column 1: Company */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><a href="#about" className="hover:text-[#b8ff2c] transition-colors">About Us</a></li>
              <li><a href="#team" className="hover:text-[#b8ff2c] transition-colors">Our Team</a></li>
              <li><a href="#services" className="hover:text-[#b8ff2c] transition-colors">Careers <span className="text-[10px] bg-[#b8ff2c] text-black px-1.5 py-0.5 rounded-full font-bold ml-1">HIRING</span></a></li>
              <li><a href="#contact" className="hover:text-[#b8ff2c] transition-colors">Contact Us</a></li>
              <li><a href="#masterpieces" className="hover:text-[#b8ff2c] transition-colors">Press & Media</a></li>
            </ul>
          </div>

          {/* Column 2: Support */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Support
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><a href="#contact" className="hover:text-[#b8ff2c] transition-colors">Getting Started</a></li>
              <li><a href="#contact" className="hover:text-[#b8ff2c] transition-colors">Help Center</a></li>
              <li><a href="#contact" className="hover:text-[#b8ff2c] transition-colors">Server Status</a></li>
              <li><a href="#contact" className="hover:text-[#b8ff2c] transition-colors">Report a Bug</a></li>
              <li><a href="#contact" className="hover:text-[#b8ff2c] transition-colors">Live Chat</a></li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Products
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><a href="#services" className="hover:text-[#b8ff2c] transition-colors">UI/UX Kits</a></li>
              <li><a href="#services" className="hover:text-[#b8ff2c] transition-colors">Design Systems</a></li>
              <li><a href="#services" className="hover:text-[#b8ff2c] transition-colors">3D Asset Library</a></li>
              <li><a href="#services" className="hover:text-[#b8ff2c] transition-colors">Enterprise Solution</a></li>
            </ul>
          </div>

          {/* Column 4: Downloads */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Downloads
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><a href="#contact" className="hover:text-[#b8ff2c] transition-colors">iOS App</a></li>
              <li><a href="#contact" className="hover:text-[#b8ff2c] transition-colors">Android App</a></li>
              <li><a href="#contact" className="hover:text-[#b8ff2c] transition-colors">Desktop (Mac/Win)</a></li>
              <li><a href="#contact" className="hover:text-[#b8ff2c] transition-colors">Web App</a></li>
            </ul>
          </div>

          {/* Column 5: Newsletter */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-1 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Subscribe to Newsletter
            </h4>
            <p className="text-xs text-neutral-400">
              Subscribe today to receive the latest updates, bespoke case studies, and industry design trends.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-2xl bg-[#b8ff2c]/15 border border-[#b8ff2c]/40 text-[#b8ff2c] text-xs font-semibold flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>Subscribed successfully!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-white/15 text-white placeholder:text-neutral-500 text-xs focus:outline-none focus:border-[#b8ff2c]"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-xl bg-[#b8ff2c] text-black text-xs font-bold hover:bg-[#cbf74d] transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10 text-xs text-neutral-500">
          <p>© 2026 Creatix Agency. All rights reserved.</p>

          <div className="flex items-center gap-4 text-neutral-400">
            <a href="#" aria-label="Facebook" className="hover:text-[#b8ff2c] transition-colors"><Facebook className="w-4 h-4" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-[#b8ff2c] transition-colors"><Twitter className="w-4 h-4" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-[#b8ff2c] transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[#b8ff2c] transition-colors"><Linkedin className="w-4 h-4" /></a>
            <a href="#" aria-label="Dribbble" className="hover:text-[#b8ff2c] transition-colors"><Dribbble className="w-4 h-4" /></a>
          </div>
        </div>

      </div>
    </footer>
  );
}
