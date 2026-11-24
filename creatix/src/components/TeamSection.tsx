

import React, { useState } from 'react';
import Image from '@/lib/Image';
import { motion } from 'motion/react';
import { ArrowUpRight, Linkedin, Check } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'John Smith',
    role: 'CEO and Founder',
    bio: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy with an obsessive eye for conversion architecture.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
    linkedin: '#',
  },
  {
    name: 'Jane Doe',
    role: 'Director of Operations',
    bio: '7+ years of experience in project management and team leadership. Strong organizational and cross-disciplinary communication skills.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop',
    linkedin: '#',
  },
  {
    name: 'Michael Brown',
    role: 'Senior SEO Specialist',
    bio: '5+ years of experience in SEO and content discipline. Proficient in technical audit, high-velocity keyword research, and on-page optimization.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    linkedin: '#',
  },
  {
    name: 'Emily Johnson',
    role: 'PPC Manager',
    bio: '4+ years of experience in paid search advertising. Skilled in multi-platform campaign management, bidding strategies, and performance analysis.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
    linkedin: '#',
  },
  {
    name: 'Brian Williams',
    role: 'Social Media Specialist',
    bio: '4+ years of experience in social media marketing. Proficient in creating viral visual content, analyzing engagement metrics, and building community.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
    linkedin: '#',
  },
  {
    name: 'Sarah Kim',
    role: 'Content Creator',
    bio: '3+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized storytelling and brand copywriting for various industries.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
    linkedin: '#',
  },
];

interface TeamSectionProps {
  onJoinTeam?: () => void;
}

export default function TeamSection({ onJoinTeam }: TeamSectionProps) {
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const handleCopyProfile = (name: string) => {
    setCopiedLink(name);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  return (
    <section id="team" className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header Row: Title & Join Team Pill Button */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 flex-wrap"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
            Meet
          </h2>
          <span className="bg-[#b8ff2c] text-black font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight px-5 py-1 rounded-full font-display inline-block shadow-md">
            the Team
          </span>
        </motion.div>

        <motion.button
          onClick={onJoinTeam}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-xs sm:text-sm font-semibold text-white hover:border-[#b8ff2c] hover:bg-[#b8ff2c] hover:text-black transition-all active:scale-95 group"
        >
          <span>Join Our Team</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </motion.button>
      </div>

      {/* 6 Member Cards in a 3-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {teamMembers.map((member, idx) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="group relative rounded-3xl p-6 sm:p-7 bg-[#eceef1] text-neutral-900 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          >
            {/* Top Row: Avatar with green highlight ring, Name & Role, LinkedIn icon */}
            <div>
              <div className="flex items-start justify-between gap-3 mb-5">
                <div className="flex items-center gap-3.5">
                  <div className="relative w-14 h-14 rounded-2xl overflow-hidden bg-[#b8ff2c] p-0.5 shadow-md">
                    <div className="relative w-full h-full rounded-[14px] overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="60px"
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-neutral-900 font-display">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-neutral-600">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* LinkedIn Badge Button */}
                <button
                  onClick={() => handleCopyProfile(member.name)}
                  title={`Connect with ${member.name}`}
                  className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center hover:bg-[#b8ff2c] hover:text-black transition-colors shadow"
                >
                  {copiedLink === member.name ? (
                    <Check className="w-3.5 h-3.5 text-[#b8ff2c] hover:text-black" />
                  ) : (
                    <Linkedin className="w-3.5 h-3.5 fill-current" />
                  )}
                </button>
              </div>

              {/* Bio Paragraph */}
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                {member.bio}
              </p>
            </div>

            {/* Bottom Subtle Indicator */}
            <div className="mt-5 pt-3 border-t border-neutral-300/60 flex items-center justify-between text-[11px] font-semibold text-neutral-500">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#84cc16]" />
                Active on Creatix Projects
              </span>
              <span className="text-neutral-400">Available</span>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
