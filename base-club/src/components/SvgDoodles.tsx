import React from 'react';

// Neon Green Loop Arrow (Top Right of Hero)
export const NeonTopLoopArrow = ({ className = "w-28 h-28" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Glow filter */}
      <defs>
        <filter id="neon-glow-top" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#CCFF00" floodOpacity="0.8" />
        </filter>
      </defs>
      
      {/* Looping doodle path matching image */}
      <path
        d="M20 70 C 25 15, 95 10, 105 45 C 115 80, 90 95, 80 90 L 80 115"
        stroke="#CCFF00"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        filter="url(#neon-glow-top)"
      />
      {/* Arrowhead */}
      <path
        d="M62 95 L 82 118 L 105 98"
        stroke="#CCFF00"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        filter="url(#neon-glow-top)"
      />
    </svg>
  );
};

// Neon Green Bottom Up Arrow (Bottom Left of Hero)
export const NeonBottomUpArrow = ({ className = "w-28 h-28" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <filter id="neon-glow-bottom" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#CCFF00" floodOpacity="0.8" />
        </filter>
      </defs>
      
      {/* Hand drawn curve from bottom left pointing up right */}
      <path
        d="M45 110 C 15 95, 20 40, 50 35 C 75 30, 80 95, 95 90 L 105 85"
        stroke="#CCFF00"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        filter="url(#neon-glow-bottom)"
      />
      {/* Arrowhead pointing up-right */}
      <path
        d="M75 80 L 115 85 L 105 120"
        stroke="#CCFF00"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        filter="url(#neon-glow-bottom)"
      />
    </svg>
  );
};

// Black Hand-drawn Curved Connector Arrow (from Card 1 to Card 2)
export const BlackCurvedArrowLeft = ({ className = "w-16 h-16" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M20 70 C 15 40, 25 20, 55 25 C 65 26, 68 35, 60 45"
        stroke="#111827"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M48 40 L 60 47 L 68 35"
        stroke="#111827"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
};

// Black Hand-drawn Curved Connector Arrow (from Card 2 to Card 3)
export const BlackCurvedArrowRight = ({ className = "w-16 h-16" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M25 60 C 20 40, 35 25, 60 20 L 70 20"
        stroke="#111827"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M55 10 L 72 20 L 58 32"
        stroke="#111827"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
};

// "GET STARTED OF FREE" Rotating Circular Badge
export const GetStartedBadge = ({ onClick }: { onClick?: () => void }) => {
  return (
    <div
      onClick={onClick}
      className="relative w-28 h-28 md:w-36 md:h-36 rounded-full bg-[#CCFF00] text-black cursor-pointer shadow-xl hover:scale-105 transition-transform duration-300 flex items-center justify-center select-none group border-2 border-black/10"
      id="get-started-sticker"
    >
      {/* Rotating Circular Text */}
      <svg
        viewBox="0 0 160 160"
        className="absolute inset-0 w-full h-full animate-spin-slow group-hover:[animation-duration:6s]"
      >
        <path
          id="circlePath"
          d="M 80, 80 m -58, 0 a 58,58 0 1,1 116,0 a 58,58 0 1,1 -116,0"
          fill="none"
        />
        <text
          className="text-[12.5px] font-black tracking-[0.24em] fill-black uppercase"
          style={{ letterSpacing: '0.22em' }}
        >
          <textPath href="#circlePath" startOffset="0%">
            GET STARTED OF FREE • GET STARTED OF FREE •
          </textPath>
        </text>
      </svg>

      {/* Center Diagonal Arrow */}
      <div className="relative z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 md:w-10 md:h-10 text-black"
        >
          <path
            d="M12 28L28 12M28 12H15M28 12V25"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

// Base Club Speech Bubble Logo
export const BaseClubLogo = ({ onClick }: { onClick?: () => void }) => {
  return (
    <div
      onClick={onClick}
      className="flex items-center gap-1.5 cursor-pointer select-none group"
      id="base-club-logo"
    >
      {/* BASE Speech Bubble (White filled) */}
      <div className="relative bg-white text-[#0047FF] font-black text-xs md:text-sm px-3.5 py-1.5 rounded-full rounded-bl-none shadow-md font-unbounded tracking-wider flex items-center justify-center transition-transform group-hover:scale-105">
        <span>BASE</span>
        {/* Tail */}
        <div className="absolute -bottom-1 left-0 w-2.5 h-2.5 bg-white [clip-path:polygon(0_0,100%_0,0_100%)]" />
      </div>

      {/* CLUB Speech Bubble (Neon Lime Green outline / pill) */}
      <div className="relative border-2 border-[#CCFF00] bg-[#CCFF00]/10 text-[#CCFF00] font-black text-xs md:text-sm px-3 py-1 rounded-full shadow-sm font-unbounded tracking-wider flex items-center justify-center group-hover:bg-[#CCFF00] group-hover:text-black transition-all">
        <span>CLUB</span>
      </div>
    </div>
  );
};
