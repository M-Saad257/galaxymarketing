'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  Menu,
  X,
  ArrowRight
} from 'lucide-react';
import { useBooking } from '@/context/BookingContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openBooking } = useBooking();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Societies', href: '/societies' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md py-3 border-b border-gray-200/80 shadow-sm'
          : 'bg-transparent py-4 sm:py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Galaxy Marketing Logo */}
          <Link href="/" className="flex items-center shrink-0 group" aria-label="Galaxy Marketing Home">
            <div className="relative h-10 w-36 sm:h-11 sm:w-44">
              <Image
                src="/images/logo.png"
                alt="Galaxy Marketing"
                fill
                priority
                sizes="(max-width: 640px) 144px, 176px"
                className="object-contain object-left transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>
          </Link>

          {/* Center Nav Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-xs font-semibold tracking-wide">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-colors duration-200 relative group py-1 ${isActive
                      ? 'text-primary font-bold border-b-2 border-primary'
                      : 'text-slate-700 hover:text-primary'
                    }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${isActive ? 'w-full' : ''}`} />
                </Link>
              );
            })}
          </nav>

          {/* Right Area: Get a Quote */}
          <div className="hidden sm:flex items-center space-x-3">
            <motion.button
              onClick={() => openBooking()}
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              className="btn-gold-shimmer px-5 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-white font-bold text-xs tracking-wide transition-all duration-300 flex items-center space-x-2 shadow-sm cursor-pointer group"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-800 hover:bg-gray-100 border border-gray-200 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 border-b border-gray-200 px-6 py-5 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3.5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-semibold transition-colors ${pathname === link.href
                    ? 'text-primary'
                    : 'text-slate-700 hover:text-primary'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <motion.button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openBooking();
                }}
                whileTap={{ scale: 0.96 }}
                className="w-full py-2.5 rounded-xl bg-primary text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-sm"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>
      )}
    </motion.header>
  );
}
