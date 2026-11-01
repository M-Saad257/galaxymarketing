'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { useBooking } from '@/context/BookingContext';

export default function HeroSlider() {
  const { openBooking } = useBooking();

  return (
    <section className="relative w-full min-h-[640px] lg:h-screen flex items-center bg-[var(--theme-bg)] overflow-hidden pt-24 sm:pt-28 pb-16 border-b border-gray-200 transition-colors duration-300">
      
      {/* Background Image: Constant Luxury Cantilever Villa with Luminous Light Overlay */}
      <motion.div 
        initial={{ scale: 1.08, opacity: 0.85 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/mockup-hero.jpg"
          alt="Luxury Hillside Villa Islamabad"
          fill
          priority
          className="object-cover object-right lg:object-center brightness-[0.95] contrast-[1.05]"
        />
        {/* Soft Luminous Light Vignette: Matched to Active Theme Canvas */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--theme-bg)] via-[var(--theme-bg)]/85 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--theme-bg)] via-transparent to-white/40"></div>
      </motion.div>

      {/* Main Content Area */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">

            {/* Headline with animated slide-up */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-theme-heading tracking-tight leading-[1.08]"
            >
              Your Vision.<br />
              Our Expertise.<br />
              <span className="text-primary">Your Future.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-theme-body text-sm sm:text-base font-normal max-w-lg leading-relaxed"
            >
              Discover exceptional property opportunities and invest with confidence through Islamabad's trusted real estate marketing partner.
            </motion.p>

            {/* Action Buttons with magnetic/spring hover animations */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <motion.a
                href="#projects-section"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="btn-gold-shimmer px-7 py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-xs sm:text-sm flex items-center space-x-2 transition-all duration-200 shadow-md cursor-pointer group"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>

              <motion.button
                onClick={() => openBooking()}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="px-7 py-3.5 rounded-xl bg-white hover:bg-gray-50 hover:border-primary hover:text-primary text-theme-heading font-bold text-xs sm:text-sm border border-gray-300 transition-all duration-200 cursor-pointer shadow-sm"
              >
                Book a Consultation
              </motion.button>
            </motion.div>

            {/* Social Proof */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
              className="flex items-center space-x-3 pt-3"
            >
              <div className="flex -space-x-2.5 overflow-hidden">
                <motion.div 
                  whileHover={{ scale: 1.15, zIndex: 10 }}
                  className="relative inline-block h-9 w-9 rounded-full ring-2 ring-white overflow-hidden shadow-sm transition-transform cursor-pointer"
                >
                  <Image src="/images/client-kamran.jpg" alt="Client Kamran" fill className="object-cover" />
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.15, zIndex: 10 }}
                  className="relative inline-block h-9 w-9 rounded-full ring-2 ring-white overflow-hidden shadow-sm transition-transform cursor-pointer"
                >
                  <Image src="/images/client-bilal.jpg" alt="Client Bilal" fill className="object-cover" />
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.15, zIndex: 10 }}
                  className="relative inline-block h-9 w-9 rounded-full ring-2 ring-white overflow-hidden shadow-sm transition-transform cursor-pointer"
                >
                  <Image src="/images/client-sana.jpg" alt="Client Sana" fill className="object-cover" />
                </motion.div>
              </div>
              <span className="text-xs text-theme-heading font-semibold">
                Trusted by Hundreds of Satisfied Clients
              </span>
            </motion.div>

          </div>

          {/* Right Floating Elements Column */}
          <div className="hidden lg:flex lg:col-span-5 flex-col items-end justify-between h-[380px] relative pointer-events-none">
            
            {/* Location Pill with gentle float */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/95 border border-gray-200 backdrop-blur-md text-slate-800 text-xs shadow-xl pointer-events-auto"
              >
                <div className="w-6 h-6 rounded-full bg-primary-light flex items-center justify-center border border-primary-border">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                </div>
                <span className="font-bold text-xs text-theme-heading">Islamabad, Pakistan</span>
              </motion.div>
            </motion.div>

            {/* Inset Preview Thumbnail Card */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.05, y: -4 }}
              onClick={() => openBooking('Luxury Villa Islamabad')}
              className="w-44 h-36 rounded-2xl overflow-hidden border-2 border-white shadow-2xl relative bg-white pointer-events-auto group cursor-pointer"
            >
              <Image
                src="/images/mockup-hero.jpg"
                alt="Villa Preview"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>
              <div className="absolute bottom-2.5 left-3 right-3 text-[11px] font-bold text-white flex items-center justify-between">
                <span>Villas & Penthouses</span>
                <ArrowRight className="w-3.5 h-3.5 text-primary group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
