'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  X, 
  Calendar, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  MapPin, 
  Send,
  Building,
  User,
  Phone,
  Mail
} from 'lucide-react';

interface VipBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function VipBookingModal({ isOpen, onClose, defaultProject = 'Holiday Hill Park Murree' }: VipBookingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    project: defaultProject,
    budget: 'PKR 5M - 15M',
    consultationType: 'In-person (G-11 Markaz Head Office)',
    date: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refCode = `GM-VIP-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(refCode);
    setSubmitted(true);
  };

  const handleWhatsAppConfirm = () => {
    const text = encodeURIComponent(
      `Assalam o Alaikum, I just scheduled a VIP consultation on your website with Reference ${bookingRef}.\nName: ${formData.name}\nProject: ${formData.project}\nBudget: ${formData.budget}\nPreferred Mode: ${formData.consultationType}`
    );
    window.open(`https://api.whatsapp.com/send?phone=+923095550790&text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-2xl bg-white border border-gray-200 rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8">
        
        {/* Subtle Decorative Ambient Gold Gradients */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/5 rounded-full blur-3xl pointer-events-none"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-800 bg-gray-100 hover:bg-gray-200 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="relative h-9 w-36 sm:h-10 sm:w-40 mb-3">
              <Image
                src="/images/logo.png"
                alt="Galaxy Marketing"
                fill
                sizes="160px"
                className="object-contain object-left"
              />
            </div>

            <div className="flex items-center space-x-2 text-[#B8860B] text-xs font-bold uppercase tracking-widest mb-1.5">
              <Sparkles className="w-4 h-4" />
              <span>Private Wealth & Real Estate Desk</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
              Schedule Your <span className="text-[#B8860B]">VIP Consultation</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mb-6 leading-relaxed">
              Connect directly with Mr. Atif Khan, Adil Khan, or our General Manager at our G-11 Markaz Islamabad Headquarters, or schedule a secure video session for overseas investors.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#B8860B] absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Asad Farooq"
                      className="w-full bg-[#F8F9FA] border border-gray-300 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder-gray-400 focus:outline-none focus:border-[#B8860B] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">WhatsApp / Phone *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#B8860B] absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+92 300 1234567"
                      className="w-full bg-[#F8F9FA] border border-gray-300 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder-gray-400 focus:outline-none focus:border-[#B8860B] focus:bg-white transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#B8860B] absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="asad@example.com"
                      className="w-full bg-[#F8F9FA] border border-gray-300 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder-gray-400 focus:outline-none focus:border-[#B8860B] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Interested Project</label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-[#B8860B] absolute left-3.5 top-3.5" />
                    <select
                      value={formData.project}
                      onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                      className="w-full bg-[#F8F9FA] border border-gray-300 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#B8860B] focus:bg-white transition-colors"
                    >
                      <option value="Holiday Hill Park Murree">Holiday Hill Park Murree</option>
                      <option value="Kingdom Valley Islamabad">Kingdom Valley Islamabad</option>
                      <option value="Blue World City">Blue World City</option>
                      <option value="Daraaj Tower Islamabad">Daraaj Tower Corporate</option>
                      <option value="Pavilion 17 Eighteen">Pavilion 17 Eighteen</option>
                      <option value="General High-Yield Advisory">General High-Yield Portfolio Advisory</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Target Budget</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-[#F8F9FA] border border-gray-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#B8860B] focus:bg-white transition-colors"
                  >
                    <option value="PKR 3M - 5M">PKR 3M – 5M</option>
                    <option value="PKR 5M - 15M">PKR 5M – 15M</option>
                    <option value="PKR 15M - 40M">PKR 15M – 40M</option>
                    <option value="PKR 40M+ High-Net-Worth">PKR 40M+ (HNW Portfolio)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Consultation Mode</label>
                  <select
                    value={formData.consultationType}
                    onChange={(e) => setFormData({ ...formData, consultationType: e.target.value })}
                    className="w-full bg-[#F8F9FA] border border-gray-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#B8860B] focus:bg-white transition-colors"
                  >
                    <option value="In-person (G-11 Markaz Head Office)">In-person (G-11 Markaz Head Office)</option>
                    <option value="Zoom / WhatsApp Video (Overseas Desk)">Zoom / WhatsApp Video (Overseas Desk)</option>
                    <option value="Telephone Call Briefing">Telephone Call Briefing</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-4 py-3.5 rounded-xl bg-[#B8860B] hover:bg-[#996515] text-white font-bold uppercase tracking-wider text-xs sm:text-sm active:scale-[0.99] transition-all shadow-md flex items-center justify-center space-x-2"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Confirm VIP Consultation Request</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-5">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 border-2 border-emerald-500 flex items-center justify-center shadow-md">
              <CheckCircle2 className="w-8 h-8 text-emerald-600" />
            </div>

            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-amber-50 text-[#B8860B] border border-amber-200 font-bold mb-3">
                Reference: {bookingRef}
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Consultation Reserved Successfully
              </h3>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                Thank you, <strong className="text-slate-900">{formData.name}</strong>. A Galaxy Marketing Relationship Manager has been assigned to your request for <strong className="text-[#B8860B]">{formData.project}</strong>.
              </p>
            </div>

            <div className="bg-[#F8F9FA] border border-gray-200 rounded-2xl p-4 text-xs text-left max-w-md mx-auto space-y-2">
              <div className="flex justify-between text-slate-600">
                <span>Location / Mode:</span>
                <span className="text-slate-900 font-semibold">{formData.consultationType}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Head Office:</span>
                <span className="text-slate-900 font-semibold">Office #8, Al Anayat Mall, G-11 Markaz</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Direct Hotline:</span>
                <span className="text-[#B8860B] font-bold">0309-5550790</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <button
                onClick={handleWhatsAppConfirm}
                className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center space-x-2 transition-all shadow-md"
              >
                <Send className="w-4 h-4" />
                <span>Confirm on WhatsApp Now</span>
              </button>

              <button
                onClick={onClose}
                className="px-6 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-slate-700 font-semibold text-xs sm:text-sm transition-all"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
