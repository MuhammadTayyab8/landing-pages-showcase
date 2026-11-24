

import React, { useState } from 'react';
import { ArrowUpRight, ArrowDownRight, Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_ITEMS } from '@/lib/plants-data';

export default function FaqAccordion() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'potting-services': true,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="faq-accordion-section" className="py-10 px-2 sm:px-4 max-w-4xl mx-auto w-full">
      <div className="space-y-3.5 sm:space-y-4">
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = !!openItems[item.id];
          return (
            <motion.div
              key={item.id}
              id={`faq-item-${item.id}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`rounded-2xl sm:rounded-[24px] border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? 'border-[#a8bcaf] bg-white shadow-md'
                  : 'border-[#d2ded5] bg-white/70 hover:bg-white hover:border-[#b6c9be]'
              }`}
            >
              {/* Accordion Header / Button */}
              <button
                type="button"
                onClick={() => toggleItem(item.id)}
                aria-expanded={isOpen}
                className="w-full p-5 sm:p-6 flex items-center justify-between text-left gap-4 focus:outline-none"
              >
                <span className="font-display font-bold text-lg sm:text-2xl text-[#11231d] tracking-tight">
                  {item.question}
                </span>

                {/* Circular Arrow Button */}
                <div
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center transition-all duration-300 shrink-0 ${
                    isOpen
                      ? 'bg-[#11231d] text-white border-[#11231d] rotate-45'
                      : 'bg-transparent text-[#11231d] border-[#c0cec5] hover:border-[#11231d]'
                  }`}
                >
                  <ArrowUpRight className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>
              </button>

              {/* Accordion Body */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                  >
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#4b6158] leading-relaxed border-t border-[#edf2ee]/80">
                      <p>{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
