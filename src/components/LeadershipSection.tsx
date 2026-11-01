'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { TEAM_MEMBERS } from '@/data/teamData';

export default function LeadershipSection() {
  return (
    <section id="leadership-section" className="w-full py-16 sm:py-20 lg:py-24 bg-white border-b border-gray-200 relative overflow-hidden flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-1.5"
          >
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#B8860B]">
              OUR TEAM
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              The Experts Behind Your <span className="text-[#B8860B]">Success</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="self-start sm:self-end"
          >
            <motion.div
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <Link
                href="/about"
                className="px-5 py-2.5 rounded-full border border-gray-300 bg-white text-slate-700 hover:text-[#B8860B] hover:border-[#B8860B] text-xs font-semibold flex items-center space-x-2 transition-all shadow-sm group"
              >
                <span>View All Team</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#B8860B] transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* 6 Team Member Cards in a Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-5">
          {TEAM_MEMBERS.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 35, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -7 }}
              className="group bg-[#F8F9FA] rounded-2xl overflow-hidden border border-gray-200/80 hover:border-[#B8860B] hover:shadow-xl transition-all duration-300 shadow-sm flex flex-col justify-between cursor-pointer"
            >
              {/* Photo */}
              <div className="relative h-44 sm:h-56 w-full overflow-hidden bg-gray-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Text Info */}
              <div className="p-3.5 text-left bg-white border-t border-gray-100">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#B8860B] transition-colors truncate">
                  {member.name}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5 truncate font-medium">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
