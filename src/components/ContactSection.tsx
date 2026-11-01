'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2,
  MessageSquare
} from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `Assalam o Alaikum Galaxy Marketing,\nName: ${formData.name || 'Interested Client'}\nPhone: ${formData.phone || 'N/A'}\nMessage: ${formData.message || 'I would like to discuss real estate investment opportunities.'}`
    );
    window.open(`https://api.whatsapp.com/send?phone=+923095550790&text=${text}`, '_blank');
  };

  return (
    <section id="contact-section" className="w-full py-12 sm:py-16 bg-[#F8F9FA] border-b border-gray-200 relative overflow-hidden flex items-center">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-amber-400/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Heading + Minimal Light Form */}
          <motion.div 
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="space-y-1.5">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#B8860B]">
                GET IN TOUCH
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Let’s Discuss<br />
                Your Next <span className="text-[#B8860B]">Investment</span>
              </h2>
              <p className="text-slate-600 text-sm font-normal max-w-md pt-1">
                We warmly welcome you to reach out to us at your convenience.
              </p>
            </div>

            {/* Minimal Simple Contact Form */}
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-3.5 max-w-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Full Name *"
                      className="w-full bg-white border border-gray-300 focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B] rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-gray-400 focus:outline-none shadow-sm transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Phone / WhatsApp *"
                      className="w-full bg-white border border-gray-300 focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B] rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-gray-400 focus:outline-none shadow-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Brief Message (e.g. interested in Murree plots or commercial towers)..."
                    className="w-full bg-white border border-gray-300 focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B] rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-gray-400 focus:outline-none shadow-sm transition-all resize-none"
                  />
                </div>

                {/* Minimal Action Buttons with spring hover & active animations */}
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    className="btn-gold-shimmer px-6 py-3.5 rounded-xl bg-[#B8860B] hover:bg-[#996515] text-white font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center space-x-2 transition-all shadow-md cursor-pointer group"
                  >
                    <span>Contact Us Now</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </motion.button>

                  <motion.button
                    type="button"
                    onClick={handleWhatsAppSend}
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    className="px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center space-x-2 transition-all shadow-md cursor-pointer group"
                  >
                    <MessageSquare className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                    <span>WhatsApp Direct</span>
                  </motion.button>
                </div>
              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="p-6 rounded-2xl bg-white border border-amber-300 shadow-md space-y-3 max-w-lg"
              >
                <div className="flex items-center space-x-3 text-emerald-600">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span className="font-bold text-slate-900 text-base">Inquiry Sent Successfully</span>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Thank you, <strong className="text-[#B8860B]">{formData.name}</strong>. Our senior investment advisor will reach out to you shortly at <strong className="text-slate-900">{formData.phone}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-[#B8860B] hover:underline font-bold"
                >
                  ← Send another message
                </button>
              </motion.div>
            )}
          </motion.div>

          {/* Right Column: Luxury Architectural Render + Office Card */}
          <motion.div 
            initial={{ opacity: 0, x: 35, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative h-[340px] sm:h-[400px] w-full rounded-3xl overflow-hidden border border-gray-200 shadow-xl bg-white group">
              <Image
                src="/images/hero-daraaj.jpg"
                alt="Galaxy Marketing Corporate Suites"
                fill
                className="object-cover brightness-[0.88] contrast-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

              {/* Inset Islamabad HQ Contact Badge (Light Luxury Frosted Card) */}
              <motion.div 
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -3 }}
                className="absolute bottom-5 left-5 right-5 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-gray-200 shadow-xl text-xs text-slate-800 space-y-2.5 transition-transform"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#B8860B]">
                    Headquarters Islamabad
                  </span>
                  <span className="text-[10px] text-emerald-700 font-bold flex items-center bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse"></span>
                    Open Mon – Sat
                  </span>
                </div>
                <div className="flex items-start space-x-2 text-[11px] text-slate-700">
                  <MapPin className="w-3.5 h-3.5 text-[#B8860B] shrink-0 mt-0.5" />
                  <span>Office # 8, 2nd Floor, Al-Anayat Mall, G-11 Markaz, Islamabad</span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-700 pt-1.5 border-t border-gray-100">
                  <div className="flex items-center space-x-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#B8860B]" />
                    <span className="font-semibold">0309-5550790</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#B8860B]" />
                    <span>info@galaxymarketing.pk</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
