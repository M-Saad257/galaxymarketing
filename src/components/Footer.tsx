'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ArrowUp, 
  Facebook, 
  Instagram, 
  Youtube, 
  Linkedin 
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer-section" className="bg-[#F8F9FA] text-slate-600 text-xs border-t border-gray-200 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-200">
          
          {/* Col 1: Logo & Mission */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center shrink-0 group" aria-label="Galaxy Marketing Home">
              <div className="relative h-10 w-36 sm:h-11 sm:w-44">
                <Image
                  src="/images/logo.png"
                  alt="Galaxy Marketing"
                  fill
                  sizes="(max-width: 640px) 144px, 176px"
                  className="object-contain object-left transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
            </Link>

            <p className="text-slate-600 text-xs leading-relaxed max-w-xs font-normal">
              Your trusted partner for real estate marketing and investment opportunities in Pakistan.
            </p>

            {/* Social Icons in Circles */}
            <div className="flex items-center space-x-3 pt-2">
              <motion.a
                href="https://facebook.com/galaxymarketing"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-slate-600 hover:text-[#B8860B] hover:border-[#B8860B] shadow-sm transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://instagram.com/galaxymarketing"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-slate-600 hover:text-[#B8860B] hover:border-[#B8860B] shadow-sm transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://youtube.com/@galaxymarketing"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-slate-600 hover:text-[#B8860B] hover:border-[#B8860B] shadow-sm transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/company/galaxymarketing"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-slate-600 hover:text-[#B8860B] hover:border-[#B8860B] shadow-sm transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </motion.a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-900 tracking-wide font-serif">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              <li><Link href="/" className="hover:text-[#B8860B] transition-colors inline-block hover:translate-x-1 duration-200">Home</Link></li>
              <li><Link href="/projects" className="hover:text-[#B8860B] transition-colors inline-block hover:translate-x-1 duration-200">Projects</Link></li>
              <li><Link href="/societies" className="hover:text-[#B8860B] transition-colors inline-block hover:translate-x-1 duration-200">Societies</Link></li>
              <li><Link href="/about" className="hover:text-[#B8860B] transition-colors inline-block hover:translate-x-1 duration-200">About Us</Link></li>
              <li><Link href="/services" className="hover:text-[#B8860B] transition-colors inline-block hover:translate-x-1 duration-200">Services</Link></li>
              <li><Link href="/blog" className="hover:text-[#B8860B] transition-colors inline-block hover:translate-x-1 duration-200">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-[#B8860B] transition-colors inline-block hover:translate-x-1 duration-200">Contact</Link></li>
            </ul>
          </div>

          {/* Col 3: Our Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-900 tracking-wide font-serif">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              <li><Link href="/services" className="hover:text-[#B8860B] transition-colors inline-block hover:translate-x-1 duration-200">Real Estate Consultancy</Link></li>
              <li><Link href="/services" className="hover:text-[#B8860B] transition-colors inline-block hover:translate-x-1 duration-200">Project Marketing</Link></li>
              <li><Link href="/services" className="hover:text-[#B8860B] transition-colors inline-block hover:translate-x-1 duration-200">Investment Opportunities</Link></li>
              <li><Link href="/services" className="hover:text-[#B8860B] transition-colors inline-block hover:translate-x-1 duration-200">Property Management</Link></li>
              <li><Link href="/services" className="hover:text-[#B8860B] transition-colors inline-block hover:translate-x-1 duration-200">Market Analysis</Link></li>
              <li><Link href="/services" className="hover:text-[#B8860B] transition-colors inline-block hover:translate-x-1 duration-200">Advisory Services</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-900 tracking-wide font-serif">
              Contact Info
            </h4>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5" />
                <span>Office 8, 2nd Floor, Al-Anayat Mall, G-11 Markaz, Islamabad, Pakistan, 44000</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#B8860B] shrink-0" />
                <a href="tel:03095550790" className="hover:text-[#B8860B] transition-colors">0309-555-0790</a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#B8860B] shrink-0" />
                <a href="tel:0518488384" className="hover:text-[#B8860B] transition-colors">051-8488384</a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#B8860B] shrink-0" />
                <a href="mailto:info@galaxymarketing.pk" className="hover:text-[#B8860B] transition-colors">info@galaxymarketing.pk</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-slate-500 text-[11px] gap-4">
          <p>© 2026 Galaxy Marketing. All Rights Reserved.</p>
          
          <div className="flex items-center space-x-6">
            <p>Designed & Developed by Vision Development Solutions</p>
            
            {/* Back to top circle button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 rounded-full bg-white border border-gray-200 hover:border-[#B8860B] hover:text-[#B8860B] flex items-center justify-center text-slate-500 shadow-sm transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

      </div>
    </footer>
  );
}
