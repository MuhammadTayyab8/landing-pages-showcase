

import React from 'react';
import { motion } from 'motion/react';

interface StatItem {
  value: string;
  label: string;
}

const stats: StatItem[] = [
  { value: '2000+', label: 'Company' },
  { value: '10+', label: 'Years Exp.' },
  { value: '800+', label: 'Hours of Digital' },
  { value: '150M+', label: 'In Tracked Revenue' },
];

export default function StatsSection() {
  return (
    <section id="about" className="w-full py-12 md:py-16 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`flex flex-col items-center justify-center text-center px-4 ${
              index > 0 ? 'pt-6 sm:pt-0' : ''
            }`}
          >
            <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display mb-1">
              {stat.value}
            </span>
            <span className="text-xs sm:text-sm font-medium text-neutral-400">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
