'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  Search, 
  BookOpen, 
  PhoneCall, 
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { BLOG_POSTS } from '@/data/blogData';
import { useBooking } from '@/context/BookingContext';

export default function BlogPage() {
  const { openBooking } = useBooking();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Investment Advisory', 'Market Analysis', 'Murree Real Estate'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    if (selectedCategory !== 'All' && post.category !== selectedCategory) {
      return false;
    }
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      return (
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-theme-bg pt-24 sm:pt-28 pb-16 text-theme-heading">
      
      {/* Header (Screen Fit & Compact) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-primary font-bold bg-primary-light border border-primary-border px-4 py-1.5 rounded-full shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>Galaxy Market Insights & Guides</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-theme-heading tracking-tight leading-tight">
            Real Estate Insights, <span className="text-primary">Analysis & Guides</span>
          </h1>

          <p className="text-slate-600 text-xs sm:text-sm font-normal max-w-2xl mx-auto leading-relaxed">
            Data-driven property analysis, legal verification protocols, and strategic advisory to protect and compound your real estate capital in Pakistan.
          </p>
        </motion.div>

        {/* Filter & Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-3 sm:p-4 rounded-2xl border border-gray-200/90 shadow-sm"
        >
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-theme-surface text-slate-600 hover:bg-gray-100 hover:text-slate-900 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides, analysis, Murree..."
              className="w-full pl-9 pr-4 py-2 bg-theme-surface border border-gray-200 rounded-xl text-xs text-theme-heading placeholder-slate-400 focus:outline-none focus:border-primary focus:bg-white transition-colors"
            />
          </div>
        </motion.div>
      </div>

      {/* Blog Cards (Screen Fit & Designed Like About First Card) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {filteredPosts.length > 0 ? (
          <AnimatePresence>
            {filteredPosts.map((post, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.05 }}
                  className={`bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 lg:p-9 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col ${
                    isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'
                  } items-center gap-8 lg:gap-10 group`}
                >
                  {/* Text Column (50% Width on Desktop) */}
                  <div className="w-full lg:w-1/2 space-y-4">
                    {/* Top Badges */}
                    <div className="flex flex-wrap items-center gap-2">
                      <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-primary-light border border-primary-border text-primary text-xs font-bold">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{post.day} {post.month} 2026</span>
                      </div>

                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-theme-surface border border-gray-200 text-slate-700">
                        {post.category}
                      </span>

                      <span className="flex items-center space-x-1 text-xs text-slate-500 font-medium ml-auto">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>

                    {/* Title */}
                    <Link href={`/blog/${post.slug}`}>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-theme-heading group-hover:text-primary transition-colors leading-tight">
                        {post.title}
                      </h2>
                    </Link>

                    {post.subtitle && (
                      <p className="text-xs sm:text-sm font-semibold text-primary">
                        {post.subtitle}
                      </p>
                    )}

                    {/* Excerpt */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {post.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-medium bg-theme-surface text-slate-600 px-2.5 py-1 rounded-lg border border-gray-200"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="px-6 py-3 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs font-bold transition-all shadow-md flex items-center space-x-2"
                      >
                        <span>Read Complete Guide</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <button
                        onClick={() => openBooking(`Inquiry on ${post.title}`)}
                        className="px-5 py-3 rounded-xl bg-theme-surface hover:bg-gray-100 text-slate-800 text-xs font-bold border border-gray-200 transition-all cursor-pointer"
                      >
                        Book Advisory
                      </button>
                    </div>
                  </div>

                  {/* Image Column (50% Width on Desktop, Like About First Card) */}
                  <div className="w-full lg:w-1/2 relative h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden border border-gray-200 shadow-md bg-gray-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    {/* Inset Date Badge on Top Left */}
                    <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md rounded-xl px-3 py-1.5 text-center border border-gray-200 shadow-md">
                      <div className="text-lg font-extrabold text-primary leading-none">
                        {post.day}
                      </div>
                      <div className="text-[9px] font-bold text-slate-700 tracking-wider uppercase mt-0.5">
                        {post.month}
                      </div>
                    </div>

                    {/* Bottom Frosted Inset Badge */}
                    <div className="absolute bottom-3 left-3 right-3 bg-white/95 p-3.5 rounded-xl border border-gray-200 backdrop-blur-md text-xs text-slate-800 flex items-center justify-between shadow-sm">
                      <span className="font-semibold text-theme-heading">{post.author}</span>
                      <span className="text-[11px] text-primary font-extrabold bg-primary-light px-2.5 py-1 rounded-lg border border-primary-border">
                        Verified Research
                      </span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-gray-200 shadow-sm space-y-3">
            <AlertCircle className="w-10 h-10 text-amber-500 mx-auto" />
            <h3 className="text-lg font-bold text-theme-heading">No articles found</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              No guides match your search criteria. Try selecting another category or resetting filters.
            </p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="px-4 py-2 rounded-xl bg-primary text-white text-xs font-bold shadow-sm cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Advisory CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-white border border-primary-border rounded-3xl p-6 sm:p-8 shadow-md flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-1.5 text-center md:text-left">
            <div className="inline-flex items-center space-x-1.5 text-[11px] font-bold text-primary uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Direct Real Estate Desk</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-theme-heading">
              Want Verified Guidance Before You Invest in Murree or Islamabad?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
              Connect directly with our senior research analysts. Call us at <strong>0309-5550790</strong> or <strong>051-2756529</strong> to avoid costly mistakes.
            </p>
          </div>

          <motion.button
            onClick={() => openBooking('Murree & Islamabad Property Consultation')}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="px-6 py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm font-bold shadow-md shrink-0 flex items-center space-x-2 cursor-pointer"
          >
            <span>Consult an Expert</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>

      </div>
    </div>
  );
}
