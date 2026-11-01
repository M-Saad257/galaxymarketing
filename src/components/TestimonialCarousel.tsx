'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    quote: 'Transparency and integrity are their strengths. Galaxy Marketing is my go-to real estate partner in Islamabad.',
    name: 'Kamran Hussain',
    role: 'Satisfied Customer • Islamabad Investor',
    image: '/images/client-kamran.jpg',
    rating: 5,
  },
  {
    id: 2,
    quote: 'Acquiring our holiday plot in Murree was completely hassle-free. Title deeds and possession timelines were met exactly as promised.',
    name: 'Bilal Ahmed',
    role: 'Overseas Pakistani Investor (London, UK)',
    image: '/images/client-bilal.jpg',
    rating: 5,
  },
  {
    id: 3,
    quote: 'Galaxy Marketing provides institutional-grade transparency. Their rental yield forecasts turned out 100% accurate upon project completion.',
    name: 'Sana Tariq',
    role: 'Corporate Executive • Islamabad',
    image: '/images/client-sana.jpg',
    rating: 5,
  },
  {
    id: 4,
    quote: 'Their deep knowledge of CDA bylaws and master-planned developments saved us millions in capital allocation.',
    name: 'Tariq Mehmood',
    role: 'Commercial Investor • Rawalpindi',
    image: '/images/client-tariq.jpg',
    rating: 5,
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  // Automatic animated sliding every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleDotClick = (idx: number) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  const t = TESTIMONIALS[currentIndex];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 320, damping: 32 },
        opacity: { duration: 0.35 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: 'spring', stiffness: 320, damping: 32 },
        opacity: { duration: 0.25 },
      },
    }),
  };

  return (
    <section 
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="w-full py-16 sm:py-20 lg:py-24 bg-theme-surface border-b border-gray-200 relative overflow-hidden flex items-center"
    >
      {/* Subtle warm glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Title & Nav Controls */}
          <motion.div 
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 space-y-6"
          >
            <div className="space-y-1.5">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                TESTIMONIALS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-theme-heading tracking-tight leading-[1.15]">
                What Our<br />
                <span className="text-primary">Clients Say</span>
              </h2>
            </div>

            {/* Left Nav Arrow Buttons */}
            <div className="flex items-center space-x-3 pt-2">
              <motion.button
                onClick={handlePrev}
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                aria-label="Previous Testimonial"
                className="w-11 h-11 rounded-full border border-gray-300 bg-white hover:bg-primary hover:text-white hover:border-primary text-slate-800 flex items-center justify-center transition-all cursor-pointer shadow-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={handleNext}
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                aria-label="Next Testimonial"
                className="w-11 h-11 rounded-full border border-gray-300 bg-white hover:bg-primary hover:text-white hover:border-primary text-slate-800 flex items-center justify-center transition-all cursor-pointer shadow-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>

          {/* Center & Right: Sliding Animated Testimonial Card */}
          <motion.div 
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8 relative min-h-[220px] flex items-center"
          >
            <div className="w-full bg-white p-8 sm:p-10 rounded-3xl border border-gray-200/80 shadow-md hover:shadow-xl transition-shadow duration-300">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8"
                >
                  {/* Client Avatar Portrait */}
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-primary shadow-md shrink-0 ring-4 ring-primary-border"
                  >
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-cover"
                    />
                  </motion.div>

                  {/* Quote Content */}
                  <div className="space-y-3.5 text-center sm:text-left flex-1">
                    
                    {/* Stars and Quote Mark */}
                    <div className="flex items-center justify-center sm:justify-between">
                      <div className="flex items-center space-x-1">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <span className="text-4xl font-serif text-primary leading-none select-none hidden sm:block">
                        “
                      </span>
                    </div>

                    <p className="text-slate-800 text-base sm:text-lg font-normal leading-relaxed">
                      "{t.quote}"
                    </p>

                    <div className="pt-2 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div>
                        <div className="text-base sm:text-lg font-bold text-theme-heading">
                          {t.name}
                        </div>
                        <div className="text-xs text-slate-500 font-medium">
                          {t.role}
                        </div>
                      </div>
                    </div>

                    {/* 4 Pagination Dots */}
                    <div className="flex items-center justify-center sm:justify-start space-x-2 pt-2">
                      {TESTIMONIALS.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleDotClick(idx)}
                          aria-label={`Go to slide ${idx + 1}`}
                          className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                            idx === currentIndex
                              ? 'w-6 bg-primary'
                              : 'w-2 bg-gray-300 hover:bg-gray-400'
                          }`}
                        />
                      ))}
                    </div>

                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
