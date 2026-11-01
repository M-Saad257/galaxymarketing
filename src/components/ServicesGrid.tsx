'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight,
  Compass,
  Megaphone,
  Coins
} from 'lucide-react';
import { useBooking } from '@/context/BookingContext';

export default function ServicesGrid() {
  const { openBooking } = useBooking();

  const services = [
    {
      id: 'consultancy',
      title: 'Real Estate Consultancy',
      subtitle: 'Advisory & Portfolio Management',
      description: 'Institutional-grade investment advisory, legal verification, title vetting, and CDA/RDA compliance audits for high-net-worth investors.',
      image: '/images/service-consultancy.jpg',
      icon: <Compass className="w-5 h-5 text-[#B8860B]" />,
    },
    {
      id: 'marketing',
      title: 'Marketing for Real Estate Projects',
      subtitle: 'Exclusive Mandates & Sales',
      description: 'End-to-end multi-channel marketing campaigns, high-converting investor roadshows in UAE & UK, and sales acceleration for premier developers.',
      image: '/images/hero-eighteen.jpg',
      icon: <Megaphone className="w-5 h-5 text-[#B8860B]" />,
    },
    {
      id: 'investment',
      title: 'Investment Opportunities',
      subtitle: 'Capital Growth & Rental Yields',
      description: 'Curated high-appreciation alpine sanctuaries in Murree and pre-leased commercial towers in Islamabad with guaranteed cashflow distributions.',
      image: '/images/service-investment.jpg',
      icon: <Coins className="w-5 h-5 text-[#B8860B]" />,
    },
  ];

  return (
    <section id="services-section" className="w-full py-16 sm:py-20 lg:py-24 bg-[#F8F9FA] border-b border-gray-200 relative overflow-hidden flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-1.5"
          >
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#B8860B]">
              OUR SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              How We Can <span className="text-[#B8860B]">Help You</span>
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
                href="/services"
                className="px-5 py-2.5 rounded-full border border-gray-300 bg-white text-slate-700 hover:text-[#B8860B] hover:border-[#B8860B] text-xs font-semibold flex items-center space-x-2 transition-all shadow-sm group"
              >
                <span>View All Services</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#B8860B] transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* 3 Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((srv, idx) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, delay: idx * 0.14, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              onClick={() => openBooking(srv.title)}
              className="group relative h-[320px] sm:h-[360px] rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl border border-gray-200 hover:border-[#B8860B] transition-all duration-300 flex flex-col justify-end p-6 bg-white"
            >
              {/* Image */}
              <Image
                src={srv.image}
                alt={srv.title}
                fill
                className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out brightness-[0.78]"
              />

              {/* Gradient Overlay for text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

              {/* Top Icon Pill with spring scale on card hover */}
              <div className="absolute top-5 left-5">
                <motion.div 
                  whileHover={{ scale: 1.15, rotate: 6 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 15 }}
                  className="w-11 h-11 rounded-2xl bg-white/95 border border-amber-200/60 flex items-center justify-center backdrop-blur-md shadow-md text-[#B8860B]"
                >
                  {srv.icon}
                </motion.div>
              </div>

              {/* Content at Bottom */}
              <div className="relative z-10 space-y-2">
                <div className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
                  {srv.subtitle}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-200 transition-colors leading-snug">
                  {srv.title}
                </h3>
                <p className="text-xs text-gray-200 line-clamp-2 leading-relaxed font-normal">
                  {srv.description}
                </p>

                <div className="pt-3 flex items-center justify-between border-t border-white/15">
                  <span className="text-xs font-semibold text-gray-200 group-hover:text-white transition-colors">
                    Explore Advisory & Plans
                  </span>
                  <div className="w-9 h-9 rounded-full bg-white/95 text-slate-900 group-hover:bg-[#B8860B] group-hover:text-white transition-all flex items-center justify-center shadow-md">
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
