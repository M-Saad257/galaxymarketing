'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  PhoneCall, 
  Globe, 
  Share2, 
  Sparkles,
  ShieldCheck,
  Send
} from 'lucide-react';
import { BLOG_POSTS } from '@/data/blogData';
import { useBooking } from '@/context/BookingContext';

export default function BlogPostDetailPage() {
  const { openBooking } = useBooking();
  const params = useParams();
  const slug = params?.slug as string;

  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const handleShare = () => {
    if (typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      alert('Article link copied to clipboard!');
    }
  };

  return (
    <article className="min-h-screen bg-theme-bg pt-24 sm:pt-28 pb-20 text-theme-heading">
      
      {/* Top Breadcrumb & Back Link */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <Link 
          href="/blog"
          className="inline-flex items-center space-x-2 text-xs font-bold text-slate-600 hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Guides</span>
        </Link>
      </div>

      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          {/* Date Tag */}
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-primary-light border border-primary-border text-primary text-xs font-bold">
            <Calendar className="w-3.5 h-3.5" />
            <span>{post.date}</span>
          </div>

          <span className="px-3 py-1 rounded-full text-xs font-bold bg-white border border-gray-200 text-slate-700">
            {post.category}
          </span>

          <span className="flex items-center space-x-1 text-xs text-slate-500 font-medium">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>{post.readTime}</span>
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-theme-heading tracking-tight leading-[1.15]">
          {post.title}
        </h1>

        {post.subtitle && (
          <p className="text-base sm:text-lg text-primary font-semibold">
            {post.subtitle}
          </p>
        )}

        {/* Author & Share Bar */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200/80 text-xs">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
              GM
            </div>
            <div>
              <span className="font-bold text-theme-heading block">{post.author}</span>
              <span className="text-slate-500">Corporate Advisory Bureau</span>
            </div>
          </div>

          <button
            onClick={handleShare}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-gray-200 hover:border-primary hover:text-primary text-slate-600 transition-colors cursor-pointer text-xs font-semibold"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share</span>
          </button>
        </div>
      </header>

      {/* Hero Featured Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="relative h-72 sm:h-96 w-full rounded-3xl overflow-hidden border border-gray-200 shadow-md bg-slate-100">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-medium flex items-center justify-between">
            <span>Murree Hills Real Estate Investment Portfolio</span>
            <span className="bg-primary px-2.5 py-0.5 rounded-full font-bold">Verified Research</span>
          </div>
        </div>
      </div>

      {/* Main Article Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Introduction */}
        <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-sm">
          <h2 className="text-xs uppercase font-bold tracking-widest text-primary mb-2">
            Introduction
          </h2>
          <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-normal">
            {post.content.introduction}
          </p>
        </div>

        {/* Content Sections */}
        {post.content.sections.map((section, idx) => (
          <div 
            key={idx}
            className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-5"
          >
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-theme-heading tracking-tight">
                {section.heading}
              </h2>
              {section.subheading && (
                <p className="text-sm font-semibold text-primary">
                  {section.subheading}
                </p>
              )}
            </div>

            {/* Paragraph text */}
            {section.body.map((p, pIdx) => (
              <p key={pIdx} className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                {p}
              </p>
            ))}

            {/* Risks Callout if present */}
            {section.risks && section.risks.length > 0 && (
              <div className="bg-rose-50/70 border border-rose-200 rounded-2xl p-4 sm:p-5 space-y-2.5">
                <div className="flex items-center space-x-2 text-rose-800 font-bold text-xs uppercase tracking-wider">
                  <AlertTriangle className="w-4 h-4 text-rose-600" />
                  <span>⚠️ Risks Include:</span>
                </div>
                <ul className="space-y-1.5 pl-6 list-disc text-xs sm:text-sm text-rose-900 font-medium">
                  {section.risks.map((risk, rIdx) => (
                    <li key={rIdx}>{risk}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Solutions / How to Avoid it */}
            {section.solutions && section.solutions.length > 0 && (
              <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-4 sm:p-5 space-y-2.5">
                <div className="flex items-center space-x-2 text-emerald-800 font-bold text-xs uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>How to Avoid It (Best Practices)</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-emerald-950 font-medium">
                  {section.solutions.map((sol, sIdx) => (
                    <li key={sIdx} className="flex items-start space-x-2">
                      <span className="text-emerald-600 font-bold">✔</span>
                      <span>{sol}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Pros & Cons Columns if present */}
            {section.pros && section.cons && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {/* Pros */}
                <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-5 space-y-3">
                  <h3 className="text-sm font-bold text-emerald-900 flex items-center space-x-1.5 uppercase tracking-wider">
                    <span>✔ Pros of Investing in Murree</span>
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-emerald-950">
                    {section.pros.map((pro, prIdx) => (
                      <li key={prIdx} className="flex items-start space-x-2">
                        <span className="text-emerald-600 font-bold">✔</span>
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cons */}
                <div className="bg-rose-50/70 border border-rose-200 rounded-2xl p-5 space-y-3">
                  <h3 className="text-sm font-bold text-rose-900 flex items-center space-x-1.5 uppercase tracking-wider">
                    <span>❌ Cons & Considerations</span>
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-rose-950">
                    {section.cons.map((con, cnIdx) => (
                      <li key={cnIdx} className="flex items-start space-x-2">
                        <span className="text-rose-600 font-bold">❌</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Pro Tips Box */}
        {post.content.proTips && (
          <div className="bg-primary-light border border-primary-border rounded-3xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center space-x-2 text-primary font-bold text-sm uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Pro Tips for Safe Investment</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-800">
              {post.content.proTips.map((tip, idx) => (
                <div key={idx} className="flex items-start space-x-2 bg-white/90 p-3 rounded-xl border border-primary-border">
                  <span className="text-primary font-bold">✔</span>
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Final Thoughts */}
        <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-3">
          <h2 className="text-xs uppercase font-bold tracking-widest text-primary">
            Final Thoughts
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            {post.content.finalThoughts}
          </p>
        </div>

        {/* Call to Action Box (Matching Reference) */}
        <div className="bg-gradient-to-br from-[#1C1917] to-[#0C0A09] text-white rounded-3xl p-8 sm:p-10 shadow-2xl space-y-6">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-amber-400 font-bold bg-white/10 px-3.5 py-1.5 rounded-full border border-amber-400/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>🚀 Direct Action Desk</span>
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {post.content.cta.headline}
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 max-w-xl">
              We help you choose verified, high-potential properties with complete legal guidance and on-ground site inspections.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <a
              href="tel:03095550790"
              className="flex items-center space-x-2.5 p-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              <div>
                <span className="text-[10px] text-gray-400 block">Senior Advisor:</span>
                <span className="font-bold text-white">0309-5550790</span>
              </div>
            </a>

            <a
              href="tel:0512756529"
              className="flex items-center space-x-2.5 p-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              <div>
                <span className="text-[10px] text-gray-400 block">Islamabad HQ:</span>
                <span className="font-bold text-white">051-2756529</span>
              </div>
            </a>

            <a
              href="https://galaxymarketing.pk"
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-2.5 p-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 transition-colors"
            >
              <Globe className="w-4 h-4 text-amber-400" />
              <div>
                <span className="text-[10px] text-gray-400 block">Official Portal:</span>
                <span className="font-bold text-white">www.galaxymarketing.pk</span>
              </div>
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => openBooking(`Consultation: ${post.title}`)}
              className="px-7 py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-xs sm:text-sm flex items-center space-x-2 transition-all shadow-md cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Send Us Message</span>
            </button>

            <a
              href={`https://api.whatsapp.com/send?phone=+923095550790&text=${encodeURIComponent(
                `Assalam o Alaikum, I read your article "${post.title}" and want advice on Murree properties.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-all shadow-md"
            >
              WhatsApp Direct
            </a>
          </div>

          <div className="pt-4 border-t border-white/10 text-[11px] text-gray-400">
            © 2026 Galaxy Marketing. Designed & Developed by: eVision Development Solutions
          </div>
        </div>

      </div>
    </article>
  );
}

