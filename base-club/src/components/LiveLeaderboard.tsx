import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';
import { BadgeCheck, Radio, Zap } from 'lucide-react';
import { Creator } from '../types';
import { PunkAvatar, ApeAvatar, CatAvatar } from './Avatars';

const AVATARS = { punk: PunkAvatar, ape: ApeAvatar, cat: CatAvatar, alien: PunkAvatar };

/** Starting totals so the board looks "mid-stream" on first load. */
const SEED: Record<string, number> = { pearl: 48210.4, baseclub: 21877.15, nova: 15302.9 };

/** Ticks every streamed total up in real time (≈10 fps is plenty for numbers). */
function useStreams(creators: Creator[], multiplier: number, running: boolean) {
  const [totals, setTotals] = useState(() =>
    Object.fromEntries(creators.map((c) => [c.id, SEED[c.id] ?? 1000])) as Record<string, number>,
  );
  const last = useRef(performance.now());

  useEffect(() => {
    if (!running) return;
    last.current = performance.now();
    const id = window.setInterval(() => {
      const now = performance.now();
      const dt = (now - last.current) / 1000;
      last.current = now;
      // Each creator streams to many subscribers, so scale the per-second rate up.
      setTotals((prev) => {
        const next = { ...prev };
        for (const c of creators) next[c.id] += c.ratePerSecond * 120 * multiplier * dt;
        return next;
      });
    }, 100);
    return () => window.clearInterval(id);
  }, [creators, multiplier, running]);

  return totals;
}

export const LiveLeaderboard: React.FC<{
  creators: Creator[];
  activeCreatorId: string;
  multiplier: number;
  onSubscribe: (creator: Creator) => void;
}> = ({ creators, activeCreatorId, multiplier, onSubscribe }) => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { margin: '200px' });
  const reduce = useReducedMotion();
  const totals = useStreams(creators, multiplier, inView && !reduce);

  const ranked = [...creators].sort((a, b) => totals[b.id] - totals[a.id]);
  const sum = ranked.reduce((acc, c) => acc + totals[c.id], 0);

  return (
    <section ref={ref} id="leaderboard" className="relative z-30 -mt-px w-full bg-white px-4 pt-6 pb-16 text-gray-900 sm:px-6 md:px-12 md:pb-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#0047FF]/10 px-3 py-1 font-unbounded text-xs font-black uppercase tracking-widest text-[#0047FF]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0047FF] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#0047FF]" />
              </span>
              Live on Base
            </span>
            <h2 className="mt-3 font-display text-2xl font-black uppercase tracking-tight sm:text-3xl">Creator Leaderboard</h2>
            <p className="mt-1 text-sm text-gray-500">$CLUB streamed to subscribers — updating every 100ms.</p>
          </div>
          <div className="flex items-center gap-2 rounded-2xl border border-gray-100 bg-gray-50 px-4 py-2 text-xs text-gray-600">
            <Zap className="h-3.5 w-3.5 text-[#0047FF]" />
            Your boost: <span className="font-mono font-bold text-[#0047FF]">{multiplier.toFixed(2)}×</span>
          </div>
        </div>

        <ol className="space-y-3">
          {ranked.map((c, i) => {
            const Avatar = AVATARS[c.avatarType];
            const active = c.id === activeCreatorId;
            return (
              <motion.li
                key={c.id}
                layout
                transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                className={`relative overflow-hidden rounded-3xl border p-4 sm:p-5 ${
                  active ? 'border-[#0047FF] bg-[#0047FF] text-white shadow-xl shadow-blue-500/20' : 'border-gray-100 bg-gray-50'
                }`}
              >
                {/* Share of all $CLUB streamed */}
                <motion.div
                  aria-hidden
                  className={`absolute inset-y-0 left-0 ${active ? 'bg-white/10' : 'bg-[#CCFF00]/25'}`}
                  animate={{ width: `${(totals[c.id] / sum) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative grid grid-cols-[auto_1fr_auto] items-center gap-4 sm:grid-cols-[auto_auto_1fr_auto_auto]">
                  <span className={`w-6 font-unbounded text-lg font-black ${active ? 'text-[#CCFF00]' : 'text-gray-300'}`}>{i + 1}</span>
                  <Avatar className="hidden h-12 w-12 sm:block" />
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 font-bold">
                      <span className="truncate">{c.handle}</span>
                      {c.verified && <BadgeCheck className={`h-4 w-4 shrink-0 ${active ? 'text-[#CCFF00]' : 'text-[#0047FF]'}`} />}
                    </div>
                    <div className={`text-xs ${active ? 'text-white/70' : 'text-gray-500'}`}>
                      {c.category} · {(c.followers / 1000).toFixed(1)}k subscribers
                    </div>
                  </div>
                  <div className="hidden text-right sm:block">
                    <div className={`text-[10px] font-bold uppercase tracking-wider ${active ? 'text-white/60' : 'text-gray-400'}`}>Streamed</div>
                    <div className={`font-mono text-lg font-bold tabular-nums ${active ? 'text-[#CCFF00]' : 'text-[#0047FF]'}`}>
                      {totals[c.id].toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => onSubscribe(c)}
                    className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold transition-transform hover:-translate-y-0.5 ${
                      active ? 'bg-[#CCFF00] text-black' : 'bg-[#0047FF] text-white'
                    }`}
                  >
                    {active ? <><Radio className="h-3.5 w-3.5" /> Streaming</> : 'Subscribe'}
                  </button>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};
