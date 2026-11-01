'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Compass, 
  TrendingUp, 
  BadgePercent, 
  Globe, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Send 
} from 'lucide-react';
import { SERVICES } from '@/data/servicesData';
import { useBooking } from '@/context/BookingContext';

export default function ServicesPage() {
  const { openBooking } = useBooking();

  const getIcon = (name: string) => {
    switch (name) {
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#B8860B]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-[#B8860B]" />;
      case 'BadgePercent':
        return <BadgePercent className="w-5 h-5 text-[#B8860B]" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-[#B8860B]" />;
      default:
        return <Compass className="w-5 h-5 text-[#B8860B]" />;
    }
  };

  const steps = [
    {
      step: '01',
      title: 'Consultation & Profile',
      desc: 'We assess your capital horizon, liquidity needs, and yield targets to structure custom allocations.',
    },
    {
      step: '02',
      title: 'Title & RDA/CDA Audit',
      desc: 'Our legal counsel and civil engineers physically inspect masterplans, approved NOCs, and site milestones.',
    },
    {
      step: '03',
      title: 'Payment Structuring',
      desc: 'We secure exclusive whitelist rates, transparent installments, and remote wire assistance for overseas buyers.',
    },
    {
      step: '04',
      title: 'Possession & Yield',
      desc: 'From key handover to tourist holiday leasing or corporate tenancy, we manage your asset for dividends.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAF9] pt-24 sm:pt-28 pb-16 text-slate-900">
      
      {/* Header (Screen-Fit & Compact) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-[#B8860B] font-bold bg-amber-50 border border-amber-200/80 px-4 py-1.5 rounded-full shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#B8860B]" />
            <span>Advisory & Developer Solutions</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Institutional <span className="text-[#B8860B]">Real Estate Services</span>
          </h1>

          <p className="text-slate-600 text-xs sm:text-sm font-normal max-w-2xl mx-auto leading-relaxed">
            Delivering data-backed investment roadmaps, mega project marketing mandates, and dedicated overseas advisory desks backed by 6+ years of verified execution.
          </p>
        </motion.div>
      </div>

      {/* Services Cards (Screen Fit & Designed Like About First Card) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 mb-16">
        {SERVICES.map((srv, index) => {
          const isEven = index % 2 === 1;
          return (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className={`bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 lg:p-9 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col ${
                isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } items-center gap-8 lg:gap-10 group`}
            >
              {/* Text Column (50% Width on Desktop) */}
              <div className="w-full lg:w-1/2 space-y-4">
                {/* Pillar Badge & Icon */}
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-[#B8860B] shadow-sm shrink-0">
                    {getIcon(srv.iconName)}
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#B8860B] block">
                      Core Discipline #{srv.number}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 group-hover:text-[#B8860B] transition-colors leading-tight">
                      {srv.title}
                    </h2>
                  </div>
                </div>

                {/* Subtitle */}
                <p className="text-xs sm:text-sm font-semibold text-[#B8860B]">
                  {srv.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {srv.description}
                </p>

                {/* Features Checkmarks */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 border-t border-gray-100">
                  {srv.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-medium">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <div className="pt-2">
                  <motion.button
                    onClick={() => openBooking(srv.title)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="btn-gold-shimmer px-6 py-3 rounded-xl bg-[#B8860B] hover:bg-[#996515] text-white text-xs font-bold transition-all shadow-md flex items-center space-x-2 cursor-pointer"
                  >
                    <span>Request Specialized Briefing</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.button>
                </div>
              </div>

              {/* Image Column (50% Width on Desktop, Like About First Card) */}
              <div className="w-full lg:w-1/2 relative h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden border border-gray-200 shadow-md bg-gray-100">
                <Image
                  src={srv.image}
                  alt={srv.title}
                  fill
                  className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Bottom Frosted Inset Badge */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 p-3.5 rounded-xl border border-gray-200 backdrop-blur-md text-xs text-slate-800 flex items-center justify-between shadow-sm">
                  <span className="font-semibold text-slate-900">Galaxy Corporate Advisory</span>
                  <span className="text-[11px] text-[#B8860B] font-extrabold bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
                    Pillar {srv.number} Mandate
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* 4-Step Acquisition Protocol (Screen Fit Compact Layout) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="text-center max-w-xl mx-auto mb-6 sm:mb-8 space-y-1.5">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Our 4-Stage <span className="text-[#B8860B]">Acquisition Protocol</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            How we protect and compound your real estate capital from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((st, idx) => (
            <motion.div
              key={st.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className="bg-white border border-gray-200 rounded-2xl p-5 space-y-2 group hover:border-[#B8860B] hover:shadow-md transition-all shadow-sm"
            >
              <div className="text-2xl font-extrabold text-[#B8860B]">
                {st.step}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900">
                {st.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {st.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom CTA Box */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-amber-300 rounded-3xl p-6 sm:p-8 shadow-md space-y-4"
        >
          <h3 className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Looking for Institutional Real Estate Advisory?
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
            Speak directly with our senior investment analysts or visit our corporate office at G-11 Markaz Islamabad.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <button
              onClick={() => openBooking('Corporate Real Estate Advisory')}
              className="btn-gold-shimmer px-6 py-3 rounded-xl bg-[#B8860B] hover:bg-[#996515] text-white font-bold uppercase tracking-wider text-xs active:scale-95 transition-all shadow-md cursor-pointer"
            >
              Schedule Advisory Call
            </button>
            <a
              href="https://api.whatsapp.com/send?phone=+923095550790"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center space-x-2 transition-all shadow-md"
            >
              <Send className="w-3.5 h-3.5" />
              <span>WhatsApp Us (+92 309 5550790)</span>
            </a>
          </div>
        </motion.div>
      </div>

    </div>
  );
}
