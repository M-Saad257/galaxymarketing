'use client';

import React from 'react';
import { 
  Building2, 
  FileCheck2, 
  Users, 
  ShieldCheck 
} from 'lucide-react';

export default function StatsBar() {
  const stats = [
    {
      icon: <Building2 className="w-5 h-5 text-[#F5B82E]" />,
      value: '5+',
      label: 'Years of experience',
    },
    {
      icon: <FileCheck2 className="w-5 h-5 text-[#F5B82E]" />,
      value: '3215',
      label: 'Deals Done',
    },
    {
      icon: <Users className="w-5 h-5 text-[#F5B82E]" />,
      value: '100%',
      label: 'Client Satisfaction',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#F5B82E]" />,
      value: 'Trusted',
      label: 'in Islamabad',
    },
  ];

  return (
    <section className="bg-[#07080B] py-12 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x divide-white/10">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center space-y-2 px-4">
              <div className="mb-1">
                {stat.icon}
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
