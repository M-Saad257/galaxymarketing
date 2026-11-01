'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Gem, 
  HeartHandshake, 
  Clock, 
  Award, 
  ShieldCheck
} from 'lucide-react';

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: Gem,
      title: 'Transparency',
    },
    {
      icon: HeartHandshake,
      title: 'Trustworthy',
    },
    {
      icon: Clock,
      title: 'Availability',
    },
    {
      icon: Award,
      title: 'Expert Advice',
    },
    {
      icon: ShieldCheck,
      title: 'Reliability',
    },
  ];

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-white border-b border-gray-200 relative overflow-hidden flex items-center">
      {/* Subtle warm ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-amber-400/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 lg:gap-16">
          
          {/* Left Title */}
          <motion.div 
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-2 shrink-0 lg:max-w-xs"
          >
            <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              WHY CHOOSE GALAXY MARKETING
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-theme-heading tracking-tight leading-[1.15]">
              A Smarter Way<br />
              to <span className="text-primary">Invest</span>
            </h2>
          </motion.div>

          {/* Right: 5 Animated Pillars */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 flex-1">
            {pillars.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 35, scale: 0.92 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, delay: idx * 0.09, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center text-center space-y-3 group cursor-pointer"
                >
                  <motion.div 
                    whileHover={{ y: -8, scale: 1.08 }}
                    whileTap={{ scale: 0.94 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 18 }}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-theme-surface border border-gray-200 flex items-center justify-center text-primary group-hover:bg-primary-light group-hover:border-primary shadow-sm transition-colors duration-300"
                  >
                    <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:scale-110" />
                  </motion.div>
                  <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-primary transition-colors">
                    {item.title}
                  </span>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
