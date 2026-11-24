import React from 'react';

export const PunkAvatar = ({ className = "w-16 h-16" }: { className?: string }) => {
  return (
    <div className={`relative rounded-full overflow-hidden bg-[#1E293B] border-2 border-white/40 shadow-inner flex items-center justify-center ${className}`}>
      {/* 3D Anaglyph Pixel Punk */}
      <svg viewBox="0 0 100 100" className="w-full h-full" shapeRendering="crispEdges">
        {/* Background gradient */}
        <rect width="100" height="100" fill="#1e1e2f" />
        
        {/* Hair / Head */}
        <rect x="25" y="15" width="50" height="15" fill="#3D2314" />
        <rect x="20" y="25" width="60" height="15" fill="#3D2314" />
        <rect x="20" y="35" width="15" height="20" fill="#3D2314" />
        <rect x="65" y="35" width="15" height="20" fill="#3D2314" />

        {/* Face */}
        <rect x="30" y="30" width="40" height="40" fill="#E0A97E" />
        <rect x="35" y="70" width="30" height="15" fill="#E0A97E" />

        {/* 3D Glasses Frame */}
        <rect x="28" y="42" width="44" height="18" fill="#111827" />
        {/* Left lens (Cyan / Blue 3D) */}
        <rect x="32" y="45" width="16" height="12" fill="#00E5FF" />
        <rect x="34" y="47" width="5" height="4" fill="#FFFFFF" />
        {/* Right lens (Red 3D) */}
        <rect x="52" y="45" width="16" height="12" fill="#FF1744" />
        <rect x="54" y="47" width="5" height="4" fill="#FFFFFF" />

        {/* Nose */}
        <rect x="47" y="60" width="6" height="4" fill="#B2764E" />

        {/* Mouth & Cigarette */}
        <rect x="42" y="68" width="12" height="3" fill="#6B3919" />
        <rect x="54" y="67" width="18" height="4" fill="#F8FAFC" />
        <rect x="70" y="67" width="4" height="4" fill="#EF4444" />
        {/* Smoke pixel */}
        <rect x="74" y="62" width="3" height="3" fill="#CBD5E1" opacity="0.8" />
        <rect x="77" y="56" width="4" height="4" fill="#CBD5E1" opacity="0.6" />
        <rect x="82" y="50" width="5" height="5" fill="#CBD5E1" opacity="0.4" />

        {/* Hoodie / Collar */}
        <rect x="15" y="82" width="70" height="20" fill="#3B82F6" />
        <rect x="30" y="85" width="40" height="15" fill="#1D4ED8" />
      </svg>
    </div>
  );
};

export const ApeAvatar = ({ className = "w-16 h-16" }: { className?: string }) => {
  return (
    <div className={`relative rounded-full overflow-hidden bg-[#7C5A3E] border-2 border-white/40 shadow-inner flex items-center justify-center ${className}`}>
      {/* Bored Ape style avatar */}
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Background / Fur */}
        <circle cx="50" cy="50" r="48" fill="#8B6B4D" />
        
        {/* Ears */}
        <circle cx="14" cy="50" r="12" fill="#8B6B4D" stroke="#5E432E" strokeWidth="2" />
        <circle cx="14" cy="50" r="7" fill="#E6C2A0" />
        <circle cx="86" cy="50" r="12" fill="#8B6B4D" stroke="#5E432E" strokeWidth="2" />
        <circle cx="86" cy="50" r="7" fill="#E6C2A0" />

        {/* Head */}
        <ellipse cx="50" cy="48" rx="34" ry="36" fill="#8B6B4D" />

        {/* Headband / Bandana (Red & White stripe) */}
        <path d="M 16 34 Q 50 20 84 34 L 86 42 Q 50 28 14 42 Z" fill="#EF4444" />
        <path d="M 15 37 Q 50 23 85 37 L 85 39 Q 50 25 15 39 Z" fill="#FFFFFF" />

        {/* Muzzle / Mouth area */}
        <ellipse cx="50" cy="66" rx="26" ry="20" fill="#E6C2A0" />
        <ellipse cx="50" cy="58" rx="14" ry="7" fill="#C9A07E" opacity="0.5" />
        {/* Nostrils */}
        <circle cx="44" cy="58" r="2.5" fill="#4B3322" />
        <circle cx="56" cy="58" r="2.5" fill="#4B3322" />
        {/* Bored smirk mouth */}
        <path d="M 34 70 Q 50 78 66 70" stroke="#4B3322" strokeWidth="3" fill="none" strokeLinecap="round" />

        {/* Eyes (Bored half-closed look) */}
        <ellipse cx="36" cy="46" rx="8" ry="6" fill="#FFFFFF" />
        <circle cx="36" cy="46" r="4" fill="#261B12" />
        {/* Eyelid */}
        <path d="M 28 44 Q 36 49 44 44 Z" fill="#8B6B4D" />

        <ellipse cx="64" cy="46" rx="8" ry="6" fill="#FFFFFF" />
        <circle cx="64" cy="46" r="4" fill="#261B12" />
        {/* Eyelid */}
        <path d="M 56 44 Q 64 49 72 44 Z" fill="#8B6B4D" />
      </svg>
    </div>
  );
};

export const CatAvatar = ({ className = "w-16 h-16" }: { className?: string }) => {
  return (
    <div className={`relative rounded-full overflow-hidden bg-[#4338CA] border-2 border-white/40 shadow-inner flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="48" fill="#6366F1" />
        {/* Cat ears */}
        <polygon points="20,15 35,40 10,35" fill="#4F46E5" stroke="#312E81" strokeWidth="2" />
        <polygon points="18,22 30,37 14,34" fill="#F472B6" />
        <polygon points="80,15 65,40 90,35" fill="#4F46E5" stroke="#312E81" strokeWidth="2" />
        <polygon points="82,22 70,37 86,34" fill="#F472B6" />
        {/* Face */}
        <ellipse cx="50" cy="56" rx="32" ry="28" fill="#818CF8" />
        {/* Neon Green Visor Glasses */}
        <rect x="24" y="44" width="52" height="14" rx="4" fill="#CCFF00" />
        <rect x="28" y="47" width="44" height="4" rx="2" fill="#FFFFFF" opacity="0.8" />
        {/* Cute nose and mouth */}
        <polygon points="50,65 47,62 53,62" fill="#F472B6" />
        <path d="M 44 68 Q 47 72 50 68 Q 53 72 56 68" stroke="#312E81" strokeWidth="2" fill="none" />
      </svg>
    </div>
  );
};
