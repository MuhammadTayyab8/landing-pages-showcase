

import React from 'react';
import { CreatixSpark } from './Icons';

export default function TickerRibbon() {
  const disciplines = [
    'UX Design',
    'App Design',
    'Dashboard',
    'Wireframe',
    'User Research',
    'Branding',
    '3D Modeling',
    'Motion Graphics',
    'Design Systems',
    'Creative Strategy',
  ];

  return (
    <div className="relative w-full py-5 bg-white text-neutral-950 overflow-hidden select-none border-y-2 border-neutral-900 z-10 shadow-lg">
      <div className="flex w-full overflow-hidden">
        
        {/* Track 1 */}
        <div className="animate-marquee-fast flex items-center whitespace-nowrap">
          {disciplines.map((item, idx) => (
            <div key={idx} className="flex items-center gap-6 mx-5">
              <span className="text-base sm:text-lg md:text-xl font-extrabold tracking-tight font-display">
                {item}
              </span>
              <span className="text-neutral-900 inline-block">
                <CreatixSpark className="w-4 h-4 text-neutral-950" />
              </span>
            </div>
          ))}
        </div>

        {/* Track 2 for seamless loop */}
        <div className="animate-marquee-fast flex items-center whitespace-nowrap" aria-hidden="true">
          {disciplines.map((item, idx) => (
            <div key={`dup-${idx}`} className="flex items-center gap-6 mx-5">
              <span className="text-base sm:text-lg md:text-xl font-extrabold tracking-tight font-display">
                {item}
              </span>
              <span className="text-neutral-900 inline-block">
                <CreatixSpark className="w-4 h-4 text-neutral-950" />
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
