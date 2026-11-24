

import React from 'react';
import { Wifi } from 'lucide-react';

interface CreditCardProps {
  type: 'orange' | 'silver' | 'black' | 'vertical-orange' | 'vertical-black';
  holderName?: string;
  expiry?: string;
  cvv?: string;
  cardNumber?: string;
  className?: string;
  scale?: number;
}

export const FinGuardLogo = ({ className = "h-6", light = false }: { className?: string; light?: boolean }) => {
  return (
    <div className={`flex items-center gap-2 font-bold tracking-tight select-none ${className}`}>
      <div className="relative w-6 h-6 flex items-center justify-center">
        {/* Stylized dual geometric shield / curved arcs */}
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
          <path
            d="M4 6C4 4.89543 4.89543 4 6 4H10C15.5228 4 20 8.47715 20 14C20 17.3137 17.3137 20 14 20H6C4.89543 20 4 19.1046 4 18V6Z"
            fill={light ? "#FFFFFF" : "#FF4500"}
          />
          <path
            d="M7 8C7 7.44772 7.44772 7 8 7H11C14.3137 7 17 9.68629 17 13C17 15.2091 15.2091 17 13 17H8C7.44772 17 7 16.5523 7 16V8Z"
            fill={light ? "#FF4500" : "#0A0A0A"}
          />
          <circle cx="11.5" cy="11.5" r="2" fill={light ? "#FFFFFF" : "#FF4500"} />
        </svg>
      </div>
      <span className={`text-xl font-extrabold tracking-tight ${light ? 'text-white' : 'text-white'}`}>
        finguard
      </span>
    </div>
  );
};

export const CreditCard: React.FC<CreditCardProps> = ({
  type,
  holderName = 'Ralph Edwards',
  expiry = '07/25',
  cvv = '124',
  cardNumber = '0323 9270 1002 0986',
  className = '',
}) => {
  if (type === 'orange') {
    return (
      <div
        className={`relative w-[280px] sm:w-[320px] md:w-[340px] aspect-[1.58/1] rounded-2xl p-5 md:p-6 text-white shadow-2xl overflow-hidden transition-all duration-300 select-none bg-gradient-to-br from-[#FF5500] via-[#FF4500] to-[#E63900] border border-orange-400/30 ${className}`}
        style={{
          boxShadow: '0 25px 50px -12px rgba(255, 69, 0, 0.45), 0 0 30px rgba(255, 100, 0, 0.25)',
        }}
      >
        {/* Subtle holographic sheen overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/15 to-transparent pointer-events-none" />
        
        {/* Subtle mesh background texture */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />

        <div className="relative z-10 flex flex-col justify-between h-full">
          {/* Top Row: Brand & Chip */}
          <div className="flex items-start justify-between">
            <span className="text-2xl font-black tracking-tight text-white drop-shadow-sm">
              finguard
            </span>
            <div className="flex items-center gap-3">
              {/* Contactless waves */}
              <Wifi className="w-5 h-5 text-white/90 rotate-90" />
              {/* Realistic gold EMV chip */}
              <div className="w-9 h-7 rounded-md bg-gradient-to-br from-amber-200 via-amber-400 to-yellow-600 p-[1.5px] shadow-sm border border-amber-300/60">
                <div className="w-full h-full rounded-[3px] border border-amber-800/30 grid grid-cols-3 grid-rows-2 gap-[1px] opacity-80">
                  <div className="border-r border-b border-amber-800/30"></div>
                  <div className="border-b border-amber-800/30"></div>
                  <div className="border-l border-b border-amber-800/30"></div>
                  <div className="border-r border-amber-800/30"></div>
                  <div></div>
                  <div className="border-l border-amber-800/30"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Middle card details */}
          <div className="mt-auto pt-4 flex items-end justify-between">
            <div className="space-y-1">
              <p className="text-[10px] uppercase font-bold tracking-widest text-white/70">Card Holder</p>
              <p className="text-sm font-bold tracking-wide text-white">{holderName}</p>
            </div>
            <div className="text-right">
              <p className="text-[9px] uppercase font-bold tracking-widest text-white/70">Expires</p>
              <p className="text-xs font-bold text-white tracking-wider">{expiry}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'silver') {
    return (
      <div
        className={`relative w-[280px] sm:w-[320px] md:w-[340px] aspect-[1.58/1] rounded-2xl p-5 md:p-6 text-slate-900 shadow-2xl overflow-hidden transition-all duration-300 select-none bg-gradient-to-br from-[#EDEDED] via-[#DFDFDF] to-[#C8C8C8] border border-white/60 ${className}`}
        style={{
          boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.4), 0 0 15px rgba(255, 255, 255, 0.1)',
        }}
      >
        {/* Glare effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-white/10 to-transparent pointer-events-none" />
        
        {/* Subtle microprint lines */}
        <div className="absolute left-2 top-0 bottom-0 flex flex-col justify-center text-[7px] font-mono text-neutral-400 tracking-wider rotate-90 origin-left select-none">
          IDEMIA | 9 853467327
        </div>

        <div className="relative z-10 flex flex-col justify-between h-full pl-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-1.5">
              <span className="text-lg font-black tracking-tight text-neutral-800">VISA</span>
              <span className="text-[9px] font-mono text-neutral-500 font-semibold mt-1">CVV {cvv}</span>
            </div>
            {/* Chip */}
            <div className="w-8 h-6 rounded bg-gradient-to-br from-neutral-300 via-neutral-400 to-neutral-500 p-[1px] shadow-inner border border-neutral-300">
              <div className="w-full h-full rounded-[2px] border border-neutral-700/20"></div>
            </div>
          </div>

          {/* Number & Holder */}
          <div className="mt-auto">
            <div className="text-[13px] font-mono font-medium tracking-[0.2em] text-neutral-700 mb-2">
              •••• •••• •••• 1002
            </div>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-sm font-black tracking-tight text-neutral-900 leading-tight">
                  Ralph Edwards
                </p>
                <p className="text-[10px] text-neutral-500 font-medium">finguard.com</p>
              </div>
              <span className="text-[10px] font-mono font-bold text-neutral-600">{expiry}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'black') {
    return (
      <div
        className={`relative w-[280px] sm:w-[320px] md:w-[340px] aspect-[1.58/1] rounded-2xl p-5 md:p-6 text-white shadow-2xl overflow-hidden transition-all duration-300 select-none bg-gradient-to-br from-[#1C1C1E] via-[#121214] to-[#0A0A0B] border border-neutral-800 ${className}`}
        style={{
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), inset 0 1px 1px rgba(255, 255, 255, 0.15)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 flex flex-col justify-between h-full">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-lg font-black tracking-tight text-white">VISA</span>
              <div className="text-[9px] font-mono text-neutral-400 mt-0.5">
                <span>CVV </span>
                <span className="text-neutral-200">135</span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-mono font-semibold text-neutral-400">07/25</span>
            </div>
          </div>

          {/* Matrix vertical numbers code block matching screenshot */}
          <div className="grid grid-cols-2 gap-x-2 text-[10px] font-mono text-neutral-400 leading-tight my-auto">
            <div>0323</div>
            <div>1002</div>
            <div>9270</div>
            <div>0986</div>
          </div>

          <div className="mt-auto flex items-end justify-between">
            <div>
              <p className="text-sm font-black tracking-tight text-white leading-tight">
                Jaylen Brown
              </p>
              <p className="text-[10px] text-neutral-400 font-medium">finguard.com</p>
            </div>
            <div className="w-7 h-5 rounded bg-gradient-to-br from-amber-400 to-amber-600 opacity-90"></div>
          </div>
        </div>
      </div>
    );
  }

  // Vertical Orange Card (For Benefits section)
  if (type === 'vertical-orange') {
    return (
      <div
        className={`relative w-[180px] sm:w-[210px] md:w-[230px] aspect-[1/1.6] rounded-2xl p-5 text-white shadow-2xl overflow-hidden transition-all duration-300 select-none bg-gradient-to-b from-[#FF5000] via-[#FF4500] to-[#E63900] border border-orange-400/40 flex flex-col justify-between ${className}`}
        style={{
          boxShadow: '0 25px 45px -10px rgba(255, 69, 0, 0.5)',
        }}
      >
        <div className="flex justify-between items-center">
          <Wifi className="w-5 h-5 text-white/90" />
          <div className="w-8 h-6 rounded bg-gradient-to-br from-amber-200 to-amber-400 shadow-sm border border-amber-300/50"></div>
        </div>

        {/* Large vertical embossed rotated finguard typography */}
        <div className="my-auto py-6 flex items-center justify-center">
          <span className="text-3xl sm:text-4xl font-black tracking-tight text-white -rotate-90 origin-center whitespace-nowrap drop-shadow-md">
            finguard
          </span>
        </div>

        <div className="text-center pt-2">
          <p className="text-[9px] font-bold uppercase tracking-widest text-white/80">finguard.com</p>
        </div>
      </div>
    );
  }

  // Vertical Black/Orange Visa Card (For Benefits section)
  if (type === 'vertical-black') {
    return (
      <div
        className={`relative w-[180px] sm:w-[210px] md:w-[230px] aspect-[1/1.6] rounded-2xl p-5 text-white shadow-2xl overflow-hidden transition-all duration-300 select-none bg-gradient-to-b from-[#18181B] via-[#0E0E10] to-[#FF4500] border border-neutral-700/60 flex flex-col justify-between ${className}`}
        style={{
          boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.6)',
        }}
      >
        <div>
          <div className="flex justify-between items-start">
            <span className="text-base font-black tracking-tight text-white">VISA</span>
            <div className="text-right text-[8px] font-mono text-neutral-300">
              <div>0323</div>
              <div>9270</div>
              <div>1002</div>
              <div>0986</div>
            </div>
          </div>
          <div className="mt-2 text-[8px] font-mono text-neutral-400">
            CVV <span className="text-white font-semibold">124</span>
          </div>
        </div>

        <div className="mt-auto space-y-1">
          <p className="text-sm font-black tracking-tight text-white leading-tight">
            Ralph Edwards
          </p>
          <p className="text-[9px] text-white/80 font-medium">finguard.com</p>
        </div>
      </div>
    );
  }

  return null;
};
