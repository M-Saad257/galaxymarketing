'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  MapPin, 
  ShieldCheck, 
  ArrowRight, 
  Search, 
  CheckCircle2, 
  Sparkles, 
  Tag, 
  PhoneCall,
  AlertCircle
} from 'lucide-react';
import { SOCIETIES_DATA, Society } from '@/data/societiesData';
import { useBooking } from '@/context/BookingContext';

export default function SocietiesPage() {
  const { openBooking } = useBooking();
  const [selectedCity, setSelectedCity] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterTabs = ['All', 'Islamabad', 'Rawalpindi', 'Murree', 'NOC Approved'];

  const filteredSocieties = useMemo(() => {
    return SOCIETIES_DATA.filter((soc) => {
      // Filter by tab
      if (selectedCity === 'NOC Approved' && !soc.nocApproved) return false;
      if (selectedCity !== 'All' && selectedCity !== 'NOC Approved' && soc.city !== selectedCity) return false;

      // Filter by search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = soc.name.toLowerCase().includes(query);
        const matchesLocation = soc.location.toLowerCase().includes(query);
        const matchesCategory = soc.category.toLowerCase().includes(query);
        return matchesName || matchesLocation || matchesCategory;
      }

      return true;
    });
  }, [selectedCity, searchQuery]);

  return (
    <div className="min-h-screen bg-[#FAFAF9] pt-24 sm:pt-28 pb-16 text-slate-900">
      
      {/* Page Header (Screen Fit & Compact) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-[#B8860B] font-bold bg-amber-50 border border-amber-200/80 px-4 py-1.5 rounded-full shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#B8860B]" />
            <span>Verified Masterplanned Communities</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Top Housing Societies in <span className="text-[#B8860B]">Islamabad & Rawalpindi</span>
          </h1>

          <p className="text-slate-600 text-xs sm:text-sm font-normal max-w-2xl mx-auto leading-relaxed">
            Explore authorized residential, commercial, and scenic alpine housing schemes. Get verified NOC status, flexible payment schedules, and zero-compromise advisory.
          </p>
        </motion.div>

        {/* Filter Controls & Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-3 sm:p-4 rounded-2xl border border-gray-200/90 shadow-sm"
        >
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedCity(tab)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCity === tab
                    ? 'bg-[#B8860B] text-white shadow-md shadow-amber-500/20'
                    : 'bg-[#F8F9FA] text-slate-600 hover:bg-gray-100 hover:text-slate-900 border border-gray-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by society or location..."
              className="w-full pl-9 pr-4 py-2 bg-[#F8F9FA] border border-gray-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#B8860B] focus:bg-white transition-colors"
            />
          </div>
        </motion.div>
      </div>

      {/* Societies Showcase Cards (Screen Fit & Designed Like About First Card) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {filteredSocieties.length > 0 ? (
          <AnimatePresence>
            {filteredSocieties.map((society, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <motion.div
                  key={society.id}
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
                    {/* Top Badges */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#B8860B] bg-amber-50 border border-amber-200/80 px-3 py-1 rounded-full">
                        {society.city} • {society.category}
                      </span>

                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold flex items-center space-x-1 ${
                        society.nocApproved 
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                          : 'bg-amber-50 text-amber-700 border border-amber-200'
                      }`}>
                        <ShieldCheck className="w-3.5 h-3.5 mr-1" />
                        <span>{society.nocApproved ? 'NOC Approved' : 'NOC In Process'}</span>
                      </span>
                    </div>

                    {/* Title & Location */}
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 group-hover:text-[#B8860B] transition-colors leading-tight">
                        {society.name}
                      </h2>
                      <div className="flex items-center space-x-1.5 text-xs text-slate-500 mt-1 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-[#B8860B] shrink-0" />
                        <span>{society.location}</span>
                      </div>
                    </div>

                    {/* Price & Installment Highlight Strip */}
                    <div className="grid grid-cols-2 gap-3 p-3.5 rounded-2xl bg-[#F8F9FA] border border-gray-100 text-xs">
                      <div>
                        <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider block">
                          Starting Price:
                        </span>
                        <span className="text-sm sm:text-base font-extrabold text-[#B8860B]">
                          {society.startingPrice}
                        </span>
                      </div>

                      <div>
                        <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider block">
                          Payment Schedule:
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-slate-800 truncate block">
                          {society.paymentPlan}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {society.description}
                    </p>

                    {/* Amenities Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {society.amenities.map((amenity, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-semibold bg-[#F8F9FA] text-slate-700 px-2.5 py-1 rounded-lg border border-gray-200"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <motion.button
                        onClick={() => openBooking(society.name)}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="btn-gold-shimmer px-6 py-3 rounded-xl bg-[#B8860B] hover:bg-[#996515] text-white text-xs font-bold transition-all shadow-md flex items-center space-x-2 cursor-pointer"
                      >
                        <span>Book Consultation</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </motion.button>

                      <a
                        href={`https://api.whatsapp.com/send?phone=+923095550790&text=${encodeURIComponent(
                          `Assalam o Alaikum Galaxy Marketing, I want details regarding ${society.name}.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-md flex items-center space-x-1.5"
                      >
                        <PhoneCall className="w-3.5 h-3.5" />
                        <span>WhatsApp Details</span>
                      </a>
                    </div>
                  </div>

                  {/* Image Column (50% Width on Desktop, Like About First Card) */}
                  <div className="w-full lg:w-1/2 relative h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden border border-gray-200 shadow-md bg-gray-100">
                    <Image
                      src={society.image}
                      alt={society.name}
                      fill
                      className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    {/* Bottom Frosted Inset Badge */}
                    <div className="absolute bottom-3 left-3 right-3 bg-white/95 p-3.5 rounded-xl border border-gray-200 backdrop-blur-md text-xs text-slate-800 flex items-center justify-between shadow-sm">
                      <div className="truncate pr-2">
                        <span className="text-[10px] text-slate-500 font-semibold uppercase block">Developer</span>
                        <span className="font-bold text-slate-900 truncate block">{society.developer}</span>
                      </div>
                      <span className="text-[11px] text-[#B8860B] font-extrabold bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200 shrink-0">
                        {society.tag}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-gray-200 shadow-sm space-y-3">
            <AlertCircle className="w-10 h-10 text-amber-500 mx-auto" />
            <h3 className="text-lg font-bold text-slate-900">No societies found</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              No societies match your current filter or search criteria. Try selecting another city or clearing your search.
            </p>
            <button
              onClick={() => { setSelectedCity('All'); setSearchQuery(''); }}
              className="px-4 py-2 rounded-xl bg-[#B8860B] text-white text-xs font-bold shadow-sm cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Free Legal Verification Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-white border border-amber-300 rounded-3xl p-6 sm:p-8 shadow-md flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-1.5 text-center md:text-left">
            <div className="inline-flex items-center space-x-1.5 text-[11px] font-bold text-[#B8860B] uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Complimentary Legal Verification</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Unsure About an RDA or CDA Approval Status?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
              Don’t risk your hard-earned capital. Our senior civil lawyers will audit layout plans, approved land registry, and legal NOC papers free of charge.
            </p>
          </div>

          <motion.button
            onClick={() => openBooking('NOC Legal Verification Audit')}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="btn-gold-shimmer px-6 py-3.5 rounded-xl bg-[#B8860B] hover:bg-[#996515] text-white text-xs sm:text-sm font-bold shadow-md shrink-0 flex items-center space-x-2 cursor-pointer"
          >
            <span>Request Legal Audit</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>

      </div>
    </div>
  );
}
