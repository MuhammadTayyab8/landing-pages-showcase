

import React from 'react';
import { CreatixSpark } from './Icons';

export default function MarqueeBanner() {
  const items = [
    'Innovate',
    'Inspire',
    'Create',
    'Innovate',
    'Inspire',
    'Create',
    'Innovate',
    'Inspire',
    'Create',
    'Innovate',
    'Inspire',
    'Create',
  ];

  return (
    <section className="w-full py-12 md:py-16 overflow-hidden bg-black/40 border-y border-white/10 select-none">
      <div className="flex w-full overflow-hidden">
        <div className="animate-marquee flex items-center whitespace-nowrap">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-6 sm:gap-10 mx-4 sm:mx-6">
              <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase font-display hover:text-[#b8ff2c] transition-colors duration-300">
                {item}
              </span>
              <span className="text-[#b8ff2c] inline-block animate-pulse-subtle">
                <CreatixSpark className="w-6 h-6 sm:w-8 sm:h-8 text-[#b8ff2c]" />
              </span>
            </div>
          ))}
        </div>
        
        {/* Duplicate for seamless infinite loop */}
        <div className="animate-marquee flex items-center whitespace-nowrap" aria-hidden="true">
          {items.map((item, index) => (
            <div key={`dup-${index}`} className="flex items-center gap-6 sm:gap-10 mx-4 sm:mx-6">
              <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase font-display hover:text-[#b8ff2c] transition-colors duration-300">
                {item}
              </span>
              <span className="text-[#b8ff2c] inline-block animate-pulse-subtle">
                <CreatixSpark className="w-6 h-6 sm:w-8 sm:h-8 text-[#b8ff2c]" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
