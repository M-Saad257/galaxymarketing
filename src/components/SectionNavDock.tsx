'use client';

import React, { useState, useEffect } from 'react';

const SECTIONS = [
  { id: 'hero', label: 'Home' },
  { id: 'projects-section', label: 'Featured Projects' },
  { id: 'services-section', label: 'Services' },
  { id: 'why-choose-us', label: 'Why Choose Us' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'leadership-section', label: 'Our Team' },
  { id: 'contact-section', label: 'Contact Us' },
  { id: 'footer-section', label: 'Footer & Links' },
];

export default function SectionNavDock() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate overall scroll progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }

      // Check current visible section
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Gold Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-transparent z-50 pointer-events-none">
        <div 
          className="h-full bg-gradient-to-r from-gold-600 via-gold-400 to-amber-300 shadow-[0_0_12px_rgba(212,175,55,0.8)] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Right Dock */}
      <div className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end space-y-4 pointer-events-auto">
        <div className="bg-white/90 backdrop-blur-xl border border-gray-200 p-2 rounded-full shadow-xl flex flex-col space-y-3">
          {SECTIONS.map((sec) => {
            const isActive = activeSection === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => scrollTo(sec.id)}
                className="group relative flex items-center justify-end p-1 focus:outline-none"
                aria-label={`Jump to ${sec.label}`}
              >
                {/* Floating Tooltip on Hover */}
                <span className="absolute right-7 px-2.5 py-1 rounded-md bg-white border border-gray-200 text-[10px] font-bold tracking-wider text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
                  {sec.label}
                </span>

                {/* Dot */}
                <div
                  className={`rounded-full transition-all duration-300 ${
                    isActive 
                      ? 'w-3 h-3 bg-gold-400 shadow-gold-sm ring-4 ring-gold-500/20' 
                      : 'w-2 h-2 bg-gray-600 group-hover:bg-gold-300/80'
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
