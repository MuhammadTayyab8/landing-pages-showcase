import React from 'react';

export function CreatixBurst({ className = "w-8 h-8 text-[#b8ff2c]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* 12 radial rays starburst as shown in logo and hero */}
      <circle cx="20" cy="20" r="3.5" fill="currentColor" />
      {[...Array(12)].map((_, i) => {
        const angle = (i * 360) / 12;
        return (
          <line
            key={i}
            x1="20"
            y1="20"
            x2="20"
            y2="3"
            stroke="currentColor"
            strokeWidth="2.8"
            strokeLinecap="round"
            transform={`rotate(${angle} 20 20)`}
          />
        );
      })}
    </svg>
  );
}

export function CreatixSpark({ className = "w-5 h-5 text-[#b8ff2c]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
    </svg>
  );
}

export function SquiggleDoodle({ className = "w-8 h-8 text-[#b8ff2c]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 50 30" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 25 Q 15 5, 25 18 T 45 8" />
      <path d="M40 5 L 47 8 L 42 14" />
    </svg>
  );
}

export function LightbulbIdeaDoodle({ className = "w-16 h-16 text-rose-500" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Lightbulb outline */}
      <path d="M22 28C22 22.477 26.477 18 32 18C37.523 18 42 22.477 42 28C42 32.5 39 36 37 38.5C36 39.8 35.5 41 35.5 43H28.5C28.5 41 28 39.8 27 38.5C25 36 22 32.5 22 28Z" stroke="#ef4444" fill="#fee2e2" fillOpacity="0.4" />
      {/* Filament */}
      <path d="M29 30Q32 25 35 30" stroke="#ef4444" strokeWidth="2" />
      {/* Base */}
      <path d="M29 46H35" stroke="#ef4444" strokeWidth="2" />
      <path d="M30 49H34" stroke="#ef4444" strokeWidth="2" />
      {/* Sparks */}
      <line x1="32" y1="9" x2="32" y2="13" stroke="#ef4444" strokeWidth="2.5" />
      <line x1="16" y1="16" x2="20" y2="19" stroke="#ef4444" strokeWidth="2.5" />
      <line x1="48" y1="16" x2="44" y2="19" stroke="#ef4444" strokeWidth="2.5" />
      <line x1="12" y1="28" x2="16" y2="28" stroke="#ef4444" strokeWidth="2.5" />
      <line x1="52" y1="28" x2="48" y2="28" stroke="#ef4444" strokeWidth="2.5" />
    </svg>
  );
}

export function HeroDoodleLoop({ className = "w-full h-full text-neutral-800" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={className}>
      <path
        d="M 60 220 C 30 140, 100 80, 180 90 C 270 100, 340 180, 310 270 C 280 350, 160 360, 120 300 C 80 240, 120 180, 170 190"
        stroke="#27272a"
        strokeDasharray="4 4"
      />
      <circle cx="60" cy="220" r="3" fill="#27272a" />
    </svg>
  );
}

export function SoundWaveBar() {
  return (
    <div className="flex items-end gap-1 h-5">
      <span className="w-1 bg-black rounded-full animate-[soundwave_1.2s_ease-in-out_infinite_0.1s]" style={{ height: '14px' }} />
      <span className="w-1 bg-black rounded-full animate-[soundwave_1.2s_ease-in-out_infinite_0.3s]" style={{ height: '20px' }} />
      <span className="w-1 bg-black rounded-full animate-[soundwave_1.2s_ease-in-out_infinite_0.2s]" style={{ height: '10px' }} />
      <span className="w-1 bg-black rounded-full animate-[soundwave_1.2s_ease-in-out_infinite_0.5s]" style={{ height: '18px' }} />
      <span className="w-1 bg-black rounded-full animate-[soundwave_1.2s_ease-in-out_infinite_0.4s]" style={{ height: '8px' }} />
      <span className="w-1 bg-black rounded-full animate-[soundwave_1.2s_ease-in-out_infinite_0.6s]" style={{ height: '16px' }} />
    </div>
  );
}
