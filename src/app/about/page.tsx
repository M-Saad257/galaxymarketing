'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Award, 
  ShieldCheck, 
  Target, 
  Eye, 
  Users, 
  Sparkles, 
  ArrowRight, 
  Send 
} from 'lucide-react';
import { TEAM_MEMBERS } from '@/data/teamData';
import { useBooking } from '@/context/BookingContext';

export default function AboutPage() {
  const { openBooking } = useBooking();

  const milestones = [
    {
      year: '2018',
      title: 'Company Inception in Islamabad',
      desc: 'Galaxy Marketing was incorporated to bring total legal transparency and verified RDA/CDA due diligence to twin cities property investments.',
    },
    {
      year: '2020',
      title: 'Alpine Tourism & Murree Expansion',
      desc: 'Launched dedicated advisory for Murree, Patriata, and Bhurban vacation chalets, tapping high recurring tourism rental yields.',
    },
    {
      year: '2022',
      title: 'Commercial Mandates & 2,000+ Deals',
      desc: 'Selected as premier marketing partners for landmark commercial developments including Daraaj Tower Islamabad, surpassing PKR 25 Billion in volume.',
    },
    {
      year: '2024+',
      title: '3,215+ Closed Deals & Global Reach',
      desc: 'Spearheaded Holiday Hill Park Murree, serving thousands of local and overseas Pakistani families across UK, USA, and Gulf.',
    },
  ];

  return (
    <div className="min-h-screen bg-theme-bg pt-24 sm:pt-28 pb-16 text-theme-heading">
      
      {/* Header (Screen-Fit & Compact) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-primary font-bold bg-primary-light border border-primary-border px-4 py-1.5 rounded-full shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Company Heritage & Leadership</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-theme-heading tracking-tight leading-tight">
            Pioneering <span className="text-primary">Real Estate Integrity</span>
          </h1>

          <p className="text-slate-600 text-xs sm:text-sm font-normal max-w-2xl mx-auto leading-relaxed">
            With over 6 years of industry leadership, 3,215+ closed transactions, and PKR 45B+ in managed portfolio value, Galaxy Marketing Pvt. Ltd. redefines modern property acquisition in Pakistan.
          </p>
        </motion.div>
      </div>

      {/* Founder & Vision Story (Screen Fit Card) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow flex flex-col lg:flex-row items-center gap-8 lg:gap-10"
        >
          <div className="w-full lg:w-1/2 space-y-4">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-primary">
              Founder’s Vision
            </span>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-theme-heading leading-snug">
              "We Don’t Just Market Properties; We Protect Legacies."
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
              Galaxy Marketing was born from a fundamental frustration in Pakistan’s real estate landscape: the lack of clear documentation, misleading promises, and rampant speculation. We set out to create an institutional haven for investors.
            </p>

            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
              Every project in our portfolio—from the serene pine ridges of Holiday Hill Park Murree to the high-yield commercial floors of Daraaj Tower Islamabad—is vetted with uncompromising scrutiny.
            </p>

            <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs sm:text-sm">
              <div>
                <div className="text-theme-heading font-bold">Atif Khan</div>
                <div className="text-[11px] text-primary font-semibold">Founder & Chief Executive Officer</div>
              </div>

              <div className="text-right">
                <div className="text-theme-heading font-bold">Jalil Khan</div>
                <div className="text-[11px] text-primary font-semibold">Co-Founder & Director of Operations</div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden border border-gray-200 shadow-md bg-gray-100">
            <Image
              src="/images/hero-daraaj.jpg"
              alt="Galaxy Marketing Executive Suite"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-3 left-3 right-3 bg-white/95 p-3 rounded-xl border border-gray-200 backdrop-blur-md text-xs text-slate-800 flex items-center justify-between shadow-sm">
              <span className="font-semibold text-theme-heading">Islamabad HQ • G-11 Markaz</span>
              <span className="text-primary font-bold">Office # 8, Al Anayat Mall</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Milestones (Screen Fit Compact Cards) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="text-center max-w-xl mx-auto mb-6 sm:mb-8 space-y-1.5">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-theme-heading tracking-tight">
            Our Journey of <span className="text-primary">Growth & Trust</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Audited milestones shaping our six-year corporate legacy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {milestones.map((m, idx) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className="bg-white border border-gray-200 rounded-2xl p-5 space-y-2 group hover:border-primary hover:shadow-md transition-all shadow-sm"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-primary">
                {m.year}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-theme-heading">
                {m.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {m.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Leadership Grid (Screen Fit Proportions) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="text-center max-w-xl mx-auto mb-6 sm:mb-8 space-y-1.5">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-theme-heading tracking-tight">
            Executive <span className="text-primary">Leadership Team</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Meet the property directors guiding your wealth journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM_MEMBERS.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden p-4 sm:p-5 space-y-3 shadow-sm hover:shadow-lg transition-all group"
            >
              <div className="relative h-48 sm:h-52 w-full rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top group-hover:scale-108 transition-transform duration-700 ease-out"
                />
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-theme-heading group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-primary text-[11px] font-bold uppercase tracking-wider mt-0.5">
                  {member.role}
                </p>
              </div>

              <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
                {member.bio}
              </p>

              <div className="pt-2.5 border-t border-gray-100 text-[11px] space-y-1">
                <span className="text-slate-500 font-medium block">Specialization:</span>
                <span className="text-theme-heading font-semibold block leading-snug">
                  {member.specialization}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Box (Screen Fit & Compact) */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-primary-border rounded-3xl p-6 sm:p-8 shadow-md space-y-4"
        >
          <h3 className="text-xl sm:text-3xl font-extrabold text-theme-heading tracking-tight">
            Ready to Build Your <span className="text-primary">High-Yield Portfolio?</span>
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
            Book a private meeting with our executive directors at our G-11 Markaz headquarters or connect with our overseas advisory desk.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <button
              onClick={() => openBooking()}
              className="px-6 py-3 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold uppercase tracking-wider text-xs active:scale-95 transition-all shadow-md cursor-pointer"
            >
              Book In-Person Consultation
            </button>
            <a
              href="https://api.whatsapp.com/send?phone=+923095550790"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center space-x-2 transition-all shadow-md"
            >
              <Send className="w-3.5 h-3.5" />
              <span>WhatsApp Direct (+92 309 5550790)</span>
            </a>
          </div>
        </motion.div>
      </div>

    </div>
  );
}
