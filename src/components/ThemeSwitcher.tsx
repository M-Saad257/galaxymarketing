'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Check, Sparkles } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export default function ThemeSwitcher() {
  const { currentTheme, setThemeById, allThemes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getThemeDotColor = (id: string) => {
    switch (id) {
      case 'sapphire':
        return 'bg-blue-600 ring-blue-300';
      case 'gold-classic':
        return 'bg-amber-600 ring-amber-300';
      case 'emerald':
        return 'bg-emerald-600 ring-emerald-300';
      default:
        return 'bg-blue-600 ring-blue-300';
    }
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/90 hover:bg-white border border-gray-200/90 shadow-sm text-xs font-semibold text-slate-800 transition-all cursor-pointer backdrop-blur-md"
        aria-label="Switch Theme Palette"
        title="Switch Color Theme"
      >
        <Palette className="w-3.5 h-3.5 text-primary" />
        <span className="hidden sm:inline-block truncate max-w-[110px]">
          {currentTheme.name.split(' ')[0]} {currentTheme.name.split(' ')[1]}
        </span>
        <span
          className={`w-2.5 h-2.5 rounded-full ring-2 ${getThemeDotColor(currentTheme.id)} shrink-0`}
        />
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-72 sm:w-80 rounded-2xl bg-white border border-gray-200 shadow-2xl p-2.5 z-50 text-slate-900"
          >
            <div className="px-3 py-2 border-b border-gray-100 flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                Color Themes
              </span>
              <span className="text-[10px] font-bold text-primary bg-primary-light px-2 py-0.5 rounded-full">
                Active: {currentTheme.name.split(' ')[0]}
              </span>
            </div>

            <div className="space-y-1.5 pt-2">
              {allThemes.map((theme) => {
                const isSelected = currentTheme.id === theme.id;
                return (
                  <button
                    key={theme.id}
                    onClick={() => {
                      setThemeById(theme.id);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left p-2.5 rounded-xl transition-all flex items-start justify-between cursor-pointer ${
                      isSelected
                        ? 'bg-primary-light/60 border border-primary-border shadow-sm'
                        : 'hover:bg-gray-50 border border-transparent'
                    }`}
                  >
                    <div className="flex items-start space-x-2.5">
                      <span
                        className={`w-3.5 h-3.5 rounded-full mt-0.5 ring-2 shrink-0 ${getThemeDotColor(
                          theme.id
                        )}`}
                      />
                      <div>
                        <div className="flex items-center space-x-1.5">
                          <span className="text-xs font-bold text-slate-900">
                            {theme.name}
                          </span>
                          <span className="text-[9px] font-semibold text-slate-500 bg-gray-100 px-1.5 py-0.5 rounded">
                            {theme.badge}
                          </span>
                        </div>
                        <p className="text-[10px] text-slate-500 leading-tight mt-0.5 font-normal">
                          {theme.description}
                        </p>
                      </div>
                    </div>

                    {isSelected && (
                      <Check className="w-4 h-4 text-primary shrink-0 ml-2 mt-0.5" />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

