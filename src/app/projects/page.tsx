'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Building2, 
  MapPin, 
  TrendingUp, 
  ShieldCheck, 
  Search, 
  Filter, 
  Send,
  Eye,
  CheckCircle2,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { PROJECTS, Project } from '@/data/projectsData';
import { useBooking } from '@/context/BookingContext';

export default function ProjectsPage() {
  const { openBooking } = useBooking();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { key: 'all', label: 'All Portfolios' },
    { key: 'murree', label: 'Murree Scenic Living' },
    { key: 'commercial', label: 'Commercial & Retail' },
    { key: 'islamabad', label: 'Islamabad Luxury' },
    { key: 'societies', label: 'Masterplanned Societies' },
  ];

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-theme-bg pt-28 pb-20 text-theme-heading">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-primary font-bold bg-primary-light border border-primary-border px-4 py-1.5 rounded-full shadow-sm">
            <Building2 className="w-3.5 h-3.5" />
            <span>Official Galaxy Marketing Portfolio</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-theme-heading tracking-tight">
            Curated <span className="text-primary">Real Estate Assets</span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
            Explore premium alpine plots in Murree, iconic commercial towers in Islamabad, and verified master-planned societies engineered for maximum returns.
          </p>
        </div>

        {/* Search & Category Filter Toolbar */}
        <div className="mt-10 bg-white border border-gray-200 rounded-3xl p-4 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-primary absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by project, city, or area..."
              className="w-full bg-theme-surface border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-theme-heading placeholder-gray-400 focus:outline-none focus:border-primary focus:bg-white transition-colors"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat.key
                    ? 'bg-primary text-white font-bold shadow-sm'
                    : 'bg-theme-surface text-slate-600 hover:text-slate-900 border border-gray-200 hover:border-gray-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-200 shadow-sm">
            <Building2 className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-slate-500 text-sm">No properties match your current search criteria.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="mt-4 px-5 py-2.5 rounded-xl bg-primary text-white font-bold text-xs"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white border border-gray-200 hover:border-primary rounded-3xl overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1"
              >
                <div>
                  <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>

                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/95 text-primary border border-primary-border shadow-sm backdrop-blur-md">
                        {project.categoryLabel}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/90 text-white shadow-sm backdrop-blur-md flex items-center space-x-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse mr-1"></span>
                        <span>{project.status}</span>
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                      <span className="flex items-center space-x-1.5 drop-shadow font-medium">
                        <MapPin className="w-3.5 h-3.5 text-primary-border shrink-0" />
                        <span className="truncate">{project.location}</span>
                      </span>
                      <span className="text-primary-border font-bold drop-shadow flex items-center space-x-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{project.nocStatus}</span>
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-theme-heading group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                      {project.tagline}
                    </p>

                    <div className="bg-theme-surface border border-gray-200 rounded-2xl p-3.5 space-y-2 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500">Starting Price:</span>
                        <span className="font-bold text-primary text-sm">{project.priceStarting}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500">Payment Plan:</span>
                        <span className="text-slate-800 font-semibold">{project.installmentPlan}</span>
                      </div>
                      <div className="flex items-center justify-between pt-1 border-t border-gray-200">
                        <span className="text-slate-500 flex items-center space-x-1">
                          <TrendingUp className="w-3 h-3 text-primary" />
                          <span>Expected Yield:</span>
                        </span>
                        <span className="text-emerald-700 font-bold">{project.expectedRoi}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 grid grid-cols-2 gap-3">
                  <button
                    onClick={() => {
                      openBooking(project.title);
                    }}
                    className="py-2.5 px-3 rounded-xl bg-white border border-gray-300 text-slate-700 hover:text-slate-900 hover:bg-gray-50 text-xs font-semibold flex items-center justify-center space-x-1.5 transition-all shadow-sm"
                  >
                    <Eye className="w-3.5 h-3.5 text-primary" />
                    <span>Book Inspection</span>
                  </button>

                  <a
                    href={`https://api.whatsapp.com/send?phone=+923095550790&text=${encodeURIComponent(`Assalam o Alaikum, I am interested in ${project.title} (${project.priceStarting}). Please share the verified payment plan and brochure.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-xs flex items-center justify-center space-x-1.5 transition-all shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
