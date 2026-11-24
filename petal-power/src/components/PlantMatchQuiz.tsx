import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Dog, Droplets, RotateCcw, ShoppingBag, Sparkles, Sun } from 'lucide-react';
import Image from '@/lib/Image';
import { NEW_PLANTS, PlantItem } from '@/lib/plants-data';

type Light = 'low' | 'medium' | 'bright';
type Pets = 'yes' | 'no';
type Care = 'minimal' | 'some' | 'plenty';
type Answers = { light?: Light; pets?: Pets; care?: Care };

/** How well each plant fits each answer (0–1). */
const PROFILES: Record<string, { light: Record<Light, number>; care: Record<Care, number> }> = {
  'peperomia-watermelon': { light: { low: 0.4, medium: 1, bright: 0.8 }, care: { minimal: 1, some: 0.8, plenty: 0.6 } },
  'fiddle-leaf-fig': { light: { low: 0.1, medium: 0.5, bright: 1 }, care: { minimal: 0.3, some: 0.8, plenty: 1 } },
  'calathea-orbifolia': { light: { low: 1, medium: 0.8, bright: 0.3 }, care: { minimal: 0.2, some: 0.7, plenty: 1 } },
};

const QUESTIONS = [
  {
    key: 'light' as const,
    icon: Sun,
    title: 'How much light does your spot get?',
    options: [
      { value: 'low', label: 'Low', hint: 'North-facing or a dim corner' },
      { value: 'medium', label: 'Medium', hint: 'Bright room, no direct sun' },
      { value: 'bright', label: 'Bright', hint: 'Sunny window, lots of daylight' },
    ],
  },
  {
    key: 'pets' as const,
    icon: Dog,
    title: 'Any curious pets at home?',
    options: [
      { value: 'yes', label: 'Yes', hint: 'Must be non-toxic' },
      { value: 'no', label: 'No', hint: 'Anything goes' },
    ],
  },
  {
    key: 'care' as const,
    icon: Droplets,
    title: 'How much time do you have for plant care?',
    options: [
      { value: 'minimal', label: 'Barely any', hint: 'I forget to water' },
      { value: 'some', label: 'A little', hint: 'Weekly check-ins' },
      { value: 'plenty', label: 'Lots', hint: 'Plants are my hobby' },
    ],
  },
];

function rank(answers: Required<Answers>) {
  return NEW_PLANTS.map((plant) => {
    const profile = PROFILES[plant.id];
    let score = profile ? (profile.light[answers.light] * 0.45 + profile.care[answers.care] * 0.35) : 0.4;
    score += answers.pets === 'yes' ? (plant.petFriendly ? 0.2 : -0.4) : 0.2;
    return { plant, match: Math.max(0, Math.min(99, Math.round(score * 100))) };
  }).sort((a, b) => b.match - a.match);
}

export default function PlantMatchQuiz({
  onSelectPlant,
  onAddToCart,
}: {
  onSelectPlant: (plant: PlantItem) => void;
  onAddToCart: (plant: PlantItem) => void;
}) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const done = step >= QUESTIONS.length;

  const results = useMemo(
    () => (done ? rank(answers as Required<Answers>) : []),
    [done, answers],
  );

  const choose = (key: keyof Answers, value: string) => {
    setAnswers((a) => ({ ...a, [key]: value }));
    setTimeout(() => setStep((s) => s + 1), 220);
  };

  const restart = () => {
    setAnswers({});
    setStep(0);
  };

  const q = QUESTIONS[step];
  const best = results[0];

  return (
    <section id="plant-match" className="my-16 md:my-24">
      <div className="relative overflow-hidden rounded-[28px] bg-[#15342a] p-6 text-white sm:p-10 md:p-14">
        <div aria-hidden className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#4f8a6f]/30 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-[#c8e6b0]/10 blur-3xl" />

        <div className="relative grid gap-10 lg:grid-cols-12">
          {/* Intro */}
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">
              <Sparkles className="h-3.5 w-3.5 text-[#c8e6b0]" /> 30-second quiz
            </span>
            <h2 className="font-display mt-5 text-4xl font-semibold leading-[1.05] sm:text-5xl md:text-6xl">
              Find your <em className="text-[#c8e6b0]">plant match</em>
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70 sm:text-base">
              Not sure where to start? Tell us about your space and routine — we'll pick the green friend that will actually thrive with you.
            </p>

            {/* Progress */}
            <div className="mt-8 flex items-center gap-2" aria-label={`Step ${Math.min(step + 1, 3)} of 3`}>
              {QUESTIONS.map((_, i) => (
                <span key={i} className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/15">
                  <motion.span
                    className="block h-full bg-[#c8e6b0]"
                    initial={false}
                    animate={{ width: i < step ? '100%' : '0%' }}
                    transition={{ duration: 0.4 }}
                  />
                </span>
              ))}
            </div>
          </div>

          {/* Question / Result panel */}
          <div className="min-h-[340px] lg:col-span-7">
            <AnimatePresence mode="wait">
              {!done ? (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="mb-6 flex items-center gap-3 text-white/60">
                    <q.icon className="h-5 w-5" />
                    <span className="text-xs font-semibold uppercase tracking-widest">Question {step + 1} of 3</span>
                  </div>
                  <h3 className="font-display text-2xl font-semibold sm:text-3xl">{q.title}</h3>
                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {q.options.map((opt) => {
                      const picked = answers[q.key] === opt.value;
                      return (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => choose(q.key, opt.value)}
                          className={`group rounded-2xl border p-5 text-left transition-all duration-200 hover:-translate-y-1 ${
                            picked ? 'border-[#c8e6b0] bg-[#c8e6b0] text-[#15342a]' : 'border-white/15 bg-white/5 hover:border-white/40 hover:bg-white/10'
                          }`}
                        >
                          <span className="block text-lg font-semibold">{opt.label}</span>
                          <span className={`mt-1 block text-xs ${picked ? 'text-[#15342a]/70' : 'text-white/55'}`}>{opt.hint}</span>
                        </button>
                      );
                    })}
                  </div>
                  {step > 0 && (
                    <button type="button" onClick={() => setStep((s) => s - 1)} className="mt-6 inline-flex items-center gap-2 text-sm text-white/60 hover:text-white">
                      <ArrowLeft className="h-4 w-4" /> Back
                    </button>
                  )}
                </motion.div>
              ) : (
                best && (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="grid gap-6 sm:grid-cols-2"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-white/10">
                      <Image src={best.plant.image} alt={best.plant.name} fill className="object-cover" referrerPolicy="no-referrer" />
                      <span className="absolute left-4 top-4 rounded-full bg-[#c8e6b0] px-3 py-1 text-xs font-bold text-[#15342a]">
                        {best.match}% match
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold uppercase tracking-widest text-white/55">Your perfect match</span>
                      <h3 className="font-display mt-2 text-3xl font-semibold sm:text-4xl">{best.plant.name}</h3>
                      {best.plant.botanicalName && <p className="mt-1 text-sm italic text-white/55">{best.plant.botanicalName}</p>}
                      <ul className="mt-5 space-y-2 text-sm text-white/80">
                        <li className="flex gap-2"><Sun className="mt-0.5 h-4 w-4 shrink-0 text-[#c8e6b0]" />{best.plant.lightRequirement}</li>
                        <li className="flex gap-2"><Droplets className="mt-0.5 h-4 w-4 shrink-0 text-[#c8e6b0]" />{best.plant.waterSchedule}</li>
                        <li className="flex gap-2"><Dog className="mt-0.5 h-4 w-4 shrink-0 text-[#c8e6b0]" />{best.plant.petFriendly ? 'Safe for pets' : 'Keep away from pets'}</li>
                      </ul>

                      <div className="mt-6 flex flex-wrap gap-3">
                        <button type="button" onClick={() => onAddToCart(best.plant)} className="inline-flex items-center gap-2 rounded-full bg-[#c8e6b0] px-5 py-3 text-sm font-semibold text-[#15342a] transition-transform hover:-translate-y-0.5">
                          <ShoppingBag className="h-4 w-4" /> Add · {best.plant.formattedPrice}
                        </button>
                        <button type="button" onClick={() => onSelectPlant(best.plant)} className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-semibold hover:bg-white/10">
                          Details <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>

                      <div className="mt-auto pt-6">
                        <span className="text-xs text-white/50">Runners-up</span>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {results.slice(1).map((r) => (
                            <button key={r.plant.id} type="button" onClick={() => onSelectPlant(r.plant)} className="rounded-full bg-white/10 px-3 py-1.5 text-xs hover:bg-white/20">
                              {r.plant.name} · {r.match}%
                            </button>
                          ))}
                        </div>
                        <button type="button" onClick={restart} className="mt-4 inline-flex items-center gap-2 text-sm text-white/60 hover:text-white">
                          <RotateCcw className="h-4 w-4" /> Retake quiz
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
