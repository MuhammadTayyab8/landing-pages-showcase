import React, { useEffect, useMemo, useState } from 'react';
import { animate, motion, useMotionValue, useReducedMotion } from 'motion/react';
import { TrendingUp, PiggyBank, Sparkles } from 'lucide-react';

const PLANS = [
  { id: 'flex', label: 'Flexible', rate: 4.2, note: 'Withdraw anytime' },
  { id: 'fixed', label: 'Fixed', rate: 6.5, note: 'Locked for the term' },
  { id: 'growth', label: 'Growth', rate: 8.1, note: 'Diversified portfolio' },
] as const;

const money = (n: number) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

/** Monthly compounding projection, returned per year. */
function project(monthly: number, years: number, ratePct: number) {
  const r = ratePct / 100 / 12;
  const rows: { year: number; contributed: number; total: number }[] = [];
  let total = 0;
  for (let m = 1; m <= years * 12; m++) {
    total = (total + monthly) * (1 + r);
    if (m % 12 === 0) rows.push({ year: m / 12, contributed: monthly * m, total });
  }
  return rows;
}

function AnimatedNumber({ value }: { value: number }) {
  const reduce = useReducedMotion();
  const mv = useMotionValue(value);
  const [text, setText] = useState(money(value));

  useEffect(() => {
    if (reduce) {
      setText(money(value));
      return;
    }
    const controls = animate(mv, value, { duration: 0.6, ease: 'easeOut', onUpdate: (v) => setText(money(v)) });
    return () => controls.stop();
  }, [value, mv, reduce]);

  return <span className="tabular-nums">{text}</span>;
}

function Slider({
  label, value, min, max, step, format, onChange,
}: {
  label: string; value: number; min: number; max: number; step: number;
  format: (v: number) => string; onChange: (v: number) => void;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <label className="block">
      <div className="mb-3 flex items-baseline justify-between">
        <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">{label}</span>
        <span className="text-lg font-semibold tabular-nums text-white">{format(value)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="fg-range w-full"
        style={{ '--fill': `${pct}%` } as React.CSSProperties}
      />
    </label>
  );
}

export const SavingsCalculator: React.FC<{ onOpenAuth: () => void }> = ({ onOpenAuth }) => {
  const [monthly, setMonthly] = useState(500);
  const [years, setYears] = useState(10);
  const [planId, setPlanId] = useState<(typeof PLANS)[number]['id']>('fixed');
  const plan = PLANS.find((p) => p.id === planId)!;

  const rows = useMemo(() => project(monthly, years, plan.rate), [monthly, years, plan.rate]);
  const final = rows[rows.length - 1];
  const interest = final.total - final.contributed;
  const peak = final.total;

  return (
    <section id="calculator" className="relative overflow-hidden bg-black py-20 text-white md:py-28">
      <div aria-hidden className="pointer-events-none absolute -right-40 top-10 h-[420px] w-[420px] rounded-full bg-[#FF4500]/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#FF4500]">Savings planner</span>
            <h2 className="text-3xl font-black uppercase leading-[1.05] tracking-tight sm:text-4xl md:text-5xl">
              See your money<br />grow with FinGuard
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-neutral-400 sm:text-base">
            Drag the sliders to project your savings. Interest compounds monthly — the earlier you start, the harder your money works.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Controls */}
          <div className="space-y-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:col-span-5">
            <Slider label="Monthly deposit" value={monthly} min={50} max={5000} step={50} format={money} onChange={setMonthly} />
            <Slider label="Time horizon" value={years} min={1} max={30} step={1} format={(v) => `${v} yr${v > 1 ? 's' : ''}`} onChange={setYears} />

            <div>
              <span className="mb-3 block text-xs font-bold uppercase tracking-wider text-neutral-400">Plan</span>
              <div className="grid grid-cols-3 gap-2" role="radiogroup" aria-label="Savings plan">
                {PLANS.map((p) => {
                  const active = p.id === planId;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      role="radio"
                      aria-checked={active}
                      onClick={() => setPlanId(p.id)}
                      className={`relative rounded-2xl border px-3 py-3 text-left transition-colors ${
                        active ? 'border-[#FF4500] text-white' : 'border-white/10 text-neutral-400 hover:border-white/30'
                      }`}
                    >
                      {active && (
                        <motion.span layoutId="plan-pill" className="absolute inset-0 rounded-2xl bg-[#FF4500]/15" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />
                      )}
                      <span className="relative block text-sm font-semibold">{p.label}</span>
                      <span className="relative block text-xs tabular-nums opacity-70">{p.rate}% APY</span>
                    </button>
                  );
                })}
              </div>
              <p className="mt-3 text-xs text-neutral-500">{plan.note}</p>
            </div>
          </div>

          {/* Result */}
          <div className="flex flex-col rounded-3xl bg-[#FF4500] p-6 sm:p-8 lg:col-span-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-white/70">Projected balance</span>
                <div className="mt-1 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
                  <AnimatedNumber value={final.total} />
                </div>
              </div>
              <TrendingUp className="h-8 w-8 shrink-0 text-white/80" />
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-black/15 p-4">
                <PiggyBank className="mb-2 h-4 w-4 text-white/70" />
                <span className="block text-xs text-white/70">You deposit</span>
                <span className="text-lg font-semibold"><AnimatedNumber value={final.contributed} /></span>
              </div>
              <div className="rounded-2xl bg-black p-4">
                <Sparkles className="mb-2 h-4 w-4 text-[#FF4500]" />
                <span className="block text-xs text-white/70">Interest earned</span>
                <span className="text-lg font-semibold"><AnimatedNumber value={interest} /></span>
              </div>
            </div>

            {/* Yearly bars */}
            <div className="mt-8 flex h-36 items-end gap-[3px]" aria-hidden>
              {rows.map((row) => (
                <div key={row.year} className="relative flex h-full flex-1 flex-col justify-end" title={`Year ${row.year}: ${money(row.total)}`}>
                  <motion.div
                    className="w-full rounded-t-[4px] bg-black"
                    initial={false}
                    animate={{ height: `${(row.total / peak) * 100}%` }}
                    transition={{ type: 'spring', stiffness: 220, damping: 28 }}
                  >
                    <div className="w-full rounded-t-[4px] bg-white/25" style={{ height: `${(1 - row.contributed / row.total) * 100}%` }} />
                  </motion.div>
                </div>
              ))}
            </div>
            <div className="mt-2 flex justify-between text-[11px] font-medium text-white/70">
              <span>Year 1</span>
              <span className="flex items-center gap-3">
                <span className="flex items-center gap-1"><i className="h-2 w-2 rounded-sm bg-black" /> Deposits</span>
                <span className="flex items-center gap-1"><i className="h-2 w-2 rounded-sm bg-white/40" /> Interest</span>
              </span>
              <span>Year {years}</span>
            </div>

            <button
              type="button"
              onClick={onOpenAuth}
              className="mt-8 self-start rounded-full bg-black px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-transform hover:-translate-y-0.5"
            >
              Start saving today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
