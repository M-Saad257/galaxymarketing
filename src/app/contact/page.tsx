'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  ChevronDown, 
  Building, 
  MessageSquare,
  ArrowRight
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    MobileNumber: '',
    Subject: 'General Inquiry',
    Message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: 'How do I verify the legal NOC status of your listed projects?',
      a: 'All developments represented by Galaxy Marketing undergo rigorous title scrutiny. We provide certified copies of RDA/CDA or Tehsil Council approved planning permissions directly to prospective clients before any token deposit.',
    },
    {
      q: 'Can Overseas Pakistanis buy and manage properties remotely?',
      a: 'Absolutely. Over 40% of our investors reside in the UK, USA, UAE, and Canada. Our Overseas Pakistani Desk coordinates video site inspections, Roshan Digital Account transfers, and courier delivery of original allotment documents.',
    },
    {
      q: 'What is the standard payment plan structure for Holiday Hill Park Murree?',
      a: 'Plots and chalets in Holiday Hill Park typically start with a 15% to 20% down payment, followed by 36 flexible monthly installments and possession-linked balloon payments.',
    },
    {
      q: 'How are vacation rental yields generated and distributed?',
      a: 'For our Murree and Bhurban hospitality chalets, our on-site property management team operates keyless check-in and tourist bookings through Airbnb and private partnerships, disbursing quarterly dividends directly to owners.',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `Assalam o Alaikum, I am contacting Galaxy Marketing.\nName: ${formData.Name || 'Client'}\nEmail: ${formData.Email || 'N/A'}\nPhone: ${formData.MobileNumber || 'N/A'}\nSubject: ${formData.Subject}\nMessage: ${formData.Message || 'I would like to inquire about property opportunities.'}`
    );
    window.open(`https://api.whatsapp.com/send?phone=+923095550790&text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9] pt-24 sm:pt-28 pb-16 text-slate-900">
      
      {/* Header (Screen-Fit & Compact) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-2"
        >
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-[#B8860B] font-bold bg-amber-50 border border-amber-200/80 px-4 py-1.5 rounded-full shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#B8860B]" />
            <span>Connect with Galaxy Marketing</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Contact <span className="text-[#B8860B]">Headquarters</span>
          </h1>

          <p className="text-slate-600 text-xs sm:text-sm font-normal max-w-xl mx-auto leading-relaxed">
            Our corporate advisory suites in G-11 Markaz Islamabad are open for private consultations. Reach out via phone, direct message, or WhatsApp.
          </p>
        </motion.div>
      </div>

      {/* Main Screen-Fit Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-gray-200 rounded-3xl p-5 sm:p-7 lg:p-9 shadow-md"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Column: Office Details (Screen-Fit Proportion) */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#B8860B] block">
                  Corporate Suites
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Islamabad Head Office
                </h2>
                <p className="text-xs text-slate-500 mt-1 font-normal">
                  Walk-in consultations welcome. Private executive suites available.
                </p>
              </div>

              {/* Details List */}
              <div className="space-y-3.5 text-xs text-slate-700">
                <div className="flex items-start space-x-3 p-3 rounded-xl bg-[#F8F9FA] border border-gray-100">
                  <MapPin className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Address:</span>
                    <span>Office # 8, First Floor, Al Anayat Mall, G-11 Markaz, Islamabad, Pakistan</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 rounded-xl bg-[#F8F9FA] border border-gray-100">
                  <Clock className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Working Hours:</span>
                    <span>Monday – Friday: 08:00 – 18:00</span>
                    <span className="block text-[11px] text-emerald-700 font-semibold mt-0.5">Saturday: 09:00 – 15:00 (VIP Appointments)</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <a 
                    href="tel:03095550790" 
                    className="flex items-center space-x-2.5 p-3 rounded-xl bg-[#F8F9FA] border border-gray-100 hover:border-[#B8860B] transition-colors group"
                  >
                    <PhoneCall className="w-4 h-4 text-[#B8860B] shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <span className="font-bold text-[10px] text-slate-500 block">Senior Desk</span>
                      <span className="font-bold text-slate-900 text-xs">0309-5550790</span>
                    </div>
                  </a>

                  <a 
                    href="tel:0512756529" 
                    className="flex items-center space-x-2.5 p-3 rounded-xl bg-[#F8F9FA] border border-gray-100 hover:border-[#B8860B] transition-colors group"
                  >
                    <PhoneCall className="w-4 h-4 text-[#B8860B] shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <span className="font-bold text-[10px] text-slate-500 block">Landline</span>
                      <span className="font-bold text-slate-900 text-xs">051-2756529</span>
                    </div>
                  </a>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-[#F8F9FA] border border-gray-100">
                  <div className="flex items-center space-x-2.5">
                    <Mail className="w-4 h-4 text-[#B8860B] shrink-0" />
                    <span className="font-bold text-slate-900">info@galaxymarketing.pk</span>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Al+Anayat+Mall+G-11+Markaz+Islamabad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-[#B8860B] hover:underline"
                  >
                    Google Maps ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Screen-Fit Compact Inquiry Form */}
            <div className="lg:col-span-7 bg-[#F8F9FA] rounded-2xl p-5 sm:p-6 border border-gray-200/90">
              {!submitted ? (
                <div>
                  <div className="mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                      Send A Direct Message
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Fill in your details and an assigned senior property director will contact you promptly.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.Name}
                          onChange={(e) => setFormData({ ...formData, Name: e.target.value })}
                          placeholder="e.g. Asad Farooq"
                          className="w-full bg-white border border-gray-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-gray-400 focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B] transition-all shadow-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1">Email Address</label>
                        <input
                          type="email"
                          value={formData.Email}
                          onChange={(e) => setFormData({ ...formData, Email: e.target.value })}
                          placeholder="asad@example.com"
                          className="w-full bg-white border border-gray-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-gray-400 focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B] transition-all shadow-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1">Phone / WhatsApp *</label>
                        <input
                          type="tel"
                          required
                          value={formData.MobileNumber}
                          onChange={(e) => setFormData({ ...formData, MobileNumber: e.target.value })}
                          placeholder="0300 0000000"
                          className="w-full bg-white border border-gray-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-gray-400 focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B] transition-all shadow-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1">Inquiry Subject</label>
                        <select
                          value={formData.Subject}
                          onChange={(e) => setFormData({ ...formData, Subject: e.target.value })}
                          className="w-full bg-white border border-gray-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B] transition-all shadow-sm"
                        >
                          <option value="Holiday Hill Park Murree">Holiday Hill Park Murree</option>
                          <option value="Daraaj Tower Islamabad">Daraaj Tower Islamabad</option>
                          <option value="Kingdom Valley Islamabad">Kingdom Valley Islamabad</option>
                          <option value="Blue World City">Blue World City Rawalpindi</option>
                          <option value="Eighteen Islamabad">Eighteen Islamabad</option>
                          <option value="Overseas Pakistani Desk">Overseas Pakistani Investment Desk</option>
                          <option value="General Inquiry">General Real Estate Advisory</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">Your Message *</label>
                      <textarea
                        required
                        rows={3}
                        maxLength={500}
                        value={formData.Message}
                        onChange={(e) => setFormData({ ...formData, Message: e.target.value })}
                        placeholder="Please specify plot sizes, budget bracket, or any legal queries..."
                        className="w-full bg-white border border-gray-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-gray-400 focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B] transition-all shadow-sm resize-none"
                      />
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="btn-gold-shimmer py-3 px-5 rounded-xl bg-[#B8860B] hover:bg-[#996515] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all shadow-md cursor-pointer"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Submit Inquiry</span>
                      </motion.button>

                      <motion.button
                        type="button"
                        onClick={handleWhatsAppSend}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center space-x-2 transition-all shadow-md cursor-pointer"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Send via WhatsApp</span>
                      </motion.button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="text-center py-8 space-y-4">
                  <div className="w-12 h-12 mx-auto rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center shadow-sm">
                    <CheckCircle2 className="w-6 h-6 text-[#B8860B]" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                      Message Dispatched Successfully
                    </h3>
                    <p className="text-slate-600 text-xs max-w-sm mx-auto leading-relaxed">
                      Thank you, <strong className="text-[#B8860B]">{formData.Name}</strong>. Our corporate relationship team will review your inquiry regarding <strong className="text-slate-900">{formData.Subject}</strong> and contact you promptly.
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ Name: '', Email: '', MobileNumber: '', Subject: 'General Inquiry', Message: '' });
                    }}
                    className="px-5 py-2 rounded-xl bg-white border border-gray-300 text-slate-800 text-xs font-semibold hover:border-[#B8860B] hover:text-[#B8860B] transition-all shadow-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>

          </div>
        </motion.div>
      </div>

      {/* Frequently Asked Questions (Compact Accordion) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 space-y-1">
          <h2 className="text-2xl font-bold text-slate-900">
            Frequently Asked <span className="text-[#B8860B]">Questions</span>
          </h2>
          <p className="text-slate-500 text-xs">
            Everything you need to know about investing with Galaxy Marketing.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden transition-colors shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full px-5 py-3.5 text-left flex items-center justify-between text-slate-900 font-bold text-xs sm:text-sm hover:text-[#B8860B] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#B8860B] transition-transform duration-300 shrink-0 ml-3 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="faq-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-4 text-xs text-slate-600 font-normal leading-relaxed border-t border-gray-100 pt-2.5">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
