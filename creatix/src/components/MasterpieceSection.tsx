

import React from 'react';
import Image from '@/lib/Image';
import { motion } from 'motion/react';
import { CreatixSpark, LightbulbIdeaDoodle, SoundWaveBar } from './Icons';

export default function MasterpieceSection() {
  return (
    <section id="masterpieces" className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header Row: Title on Left with Sparkle, Description on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12 md:mb-16">
        
        {/* Left: Sparkle + Title */}
        <div className="lg:col-span-6 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="absolute -top-6 -left-3 text-[#b8ff2c]"
          >
            <CreatixSpark className="w-7 h-7 text-[#b8ff2c]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15] font-display"
          >
            Turning Ideas Into
            <br />
            Masterpieces
          </motion.h2>
        </div>

        {/* Right: Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-6 lg:pl-8 flex items-center"
        >
          <p className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed">
            We may be a compact team, but our creativity knows no bounds. By staying agile and
            working hand-in-hand with our clients, we transform ideas into cutting-edge designs
            that make a lasting impression.
          </p>
        </motion.div>
      </div>

      {/* Two Media Showcase Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        
        {/* Card 1 (Left): Agency Workspace with Lime Green Agency Badge & Soundwave */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="group relative rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 aspect-[4/3] sm:aspect-[16/11]"
        >
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
            alt="Creative Team Collaborating"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

          {/* Bottom Left Lime Badge */}
          <div className="absolute bottom-6 left-6 z-10">
            <div className="inline-flex items-center gap-4 bg-[#b8ff2c] text-black px-4 py-2.5 rounded-2xl shadow-xl font-bold text-xs uppercase tracking-wider">
              <span>A Creative Design Agency</span>
              <div className="border-l border-black/30 pl-3">
                <SoundWaveBar />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 2 (Right): Creative Designer with Glowing Lightbulb Idea Doodle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="group relative rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 aspect-[4/3] sm:aspect-[16/11]"
        >
          <Image
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop"
            alt="Designer with Idea"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover grayscale contrast-115 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

          {/* Lightbulb Doodle Floating Over Head */}
          <motion.div
            animate={{
              y: [0, -6, 0],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-8 left-12 sm:left-20 z-10"
          >
            <div className="relative">
              <LightbulbIdeaDoodle className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]" />
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
