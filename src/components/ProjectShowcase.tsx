'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  Award, 
  FileCheck2, 
  Users, 
  ShieldCheck 
} from 'lucide-react';
import { useBooking } from '@/context/BookingContext';

export default function ProjectShowcase() {
  const { openBooking } = useBooking();
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const PROJECTS = [
    {
      id: 'kingdom-valley',
      title: 'Kingdom Valley',
      location: 'Islamabad (Chakri Road)',
      image: '/images/kingdom-valley.jpg',
      tag: 'NOC Approved • High Yield',
      status: 'Booking Open',
    },
    {
      id: 'holiday-hill-park',
      title: 'Holiday Hill Park',
      location: 'Murree Expressway',
      image: '/images/hero-murree.jpg',
      tag: 'Alpine Sanctuary • 100% Scenic',
      status: 'Exclusive Mandate',
    },
    {
      id: 'blue-world-city',
      title: 'Blue World City',
      location: 'Rawalpindi / Islamabad',
      image: '/images/blue-world-city.jpg',
      tag: 'Tourist Destination • Commercial',
      status: 'Fast-Track Delivery',
    },
    {
      id: 'daraaj-tower',
      title: 'Daraaj Tower Corporate',
      location: 'Islamabad Expressway',
      image: '/images/hero-daraaj.jpg',
      tag: 'Corporate & Retail • 18% ROI',
      status: 'Pre-Leased Offices',
    },
    {
      id: 'eighteen-islamabad',
      title: 'Pavilion 17 Eighteen',
      location: 'Kashmir Highway, Islamabad',
      image: '/images/hero-eighteen.jpg',
      tag: 'Ultra Luxury Villas • Golf Course',
      status: 'VIP Handover Phase',
    },
  ];

  const maxIndex = PROJECTS.length - 3;

  const next = () => {
    setDirection(1);
    setStartIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setDirection(-1);
    setStartIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const visibleProjects = PROJECTS.slice(startIndex, startIndex + 3);

  const stats = [
    {
      icon: <Award className="w-5 h-5 text-primary" />,
      value: '5+',
      label: 'Years of Experience',
    },
    {
      icon: <FileCheck2 className="w-5 h-5 text-primary" />,
      value: '3,215',
      label: 'Deals Done',
    },
    {
      icon: <Users className="w-5 h-5 text-primary" />,
      value: '100%',
      label: 'Client Satisfaction',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-primary" />,
      value: 'Trusted',
      label: 'in Islamabad',
    },
  ];

  return (
    <section id="projects-section" className="w-full py-16 sm:py-20 lg:py-24 bg-white border-b border-gray-200 relative overflow-hidden">
      
      {/* 4 Key Metrics Bar (Matching Reference Mockup in Light Luxury) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-12 sm:mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="bg-theme-surface rounded-3xl border border-gray-200/80 p-6 sm:p-8 shadow-sm"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x-0 md:divide-x divide-gray-200">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5, ease: 'easeOut' }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="flex flex-col items-center justify-center space-y-1.5 px-3 transition-transform cursor-default"
              >
                <div className="p-2 rounded-xl bg-primary-light text-primary border border-primary-border mb-0.5 shadow-sm">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-4xl font-extrabold text-theme-heading tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Main Section Content & Projects Carousel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-1.5"
          >
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
              FEATURED PROJECTS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-theme-heading tracking-tight">
              Premium Projects for a <span className="text-primary">Better Tomorrow</span>
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center space-x-3"
          >
            <motion.div
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <Link
                href="/projects"
                className="hidden sm:flex px-4 py-2 rounded-full border border-gray-300 bg-white text-slate-700 hover:text-primary hover:border-primary text-xs font-semibold items-center space-x-1.5 transition-colors shadow-sm group"
              >
                <span>View All Projects</span>
                <ArrowRight className="w-3.5 h-3.5 text-primary transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center space-x-2">
              <motion.button
                onClick={prev}
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                className="w-10 h-10 rounded-full border border-gray-300 bg-white hover:bg-primary hover:text-white hover:border-primary text-slate-800 flex items-center justify-center transition-all cursor-pointer shadow-sm"
                aria-label="Previous Projects"
              >
                <ChevronLeft className="w-4 h-4" />
              </motion.button>
              <motion.button
                onClick={next}
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                className="w-10 h-10 rounded-full border border-gray-300 bg-white hover:bg-primary hover:text-white hover:border-primary text-slate-800 flex items-center justify-center transition-all cursor-pointer shadow-sm"
                aria-label="Next Projects"
              >
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* 3 Animated Project Cards */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={startIndex}
            initial={{ opacity: 0, x: direction > 0 ? 30 : -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -30 : 30 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {visibleProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
                onClick={() => openBooking(project.title)}
                className="group relative h-[300px] sm:h-[340px] rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl border border-gray-200 hover:border-primary transition-all duration-300 bg-white"
              >
                {/* Image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out brightness-[0.88]"
                />

                {/* Tag Pill */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-white/95 text-primary border border-primary-border shadow-sm backdrop-blur-md">
                    {project.tag}
                  </span>
                </div>

                {/* Bottom Gradient Overlay for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>

                {/* Bottom Info */}
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-primary-border transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <div className="flex items-center space-x-1.5 text-xs text-gray-200 mt-1 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-primary-border" />
                      <span>{project.location}</span>
                    </div>
                  </div>

                  <motion.div 
                    whileHover={{ scale: 1.15 }}
                    className="w-10 h-10 rounded-full bg-white/95 text-slate-900 group-hover:bg-primary group-hover:text-white transition-all flex items-center justify-center shrink-0 ml-3 shadow-lg"
                  >
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Slide Dots Indicator */}
        <div className="flex items-center justify-center space-x-2 pt-6">
          {Array.from({ length: PROJECTS.length - 2 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > startIndex ? 1 : -1);
                setStartIndex(idx);
              }}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === startIndex ? 'w-6 bg-primary' : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>

    </section>
  );
}
