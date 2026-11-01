'use client';

import React, { useState } from 'react';
import { 
  Calculator, 
  TrendingUp, 
  Sparkles, 
  ShieldCheck, 
  Send
} from 'lucide-react';

interface RoiCalculatorProps {
  onOpenBooking?: () => void;
}

export default function RoiCalculator({ onOpenBooking }: RoiCalculatorProps) {
  // Amount in PKR Millions (default 10M)
  const [amountMillion, setAmountMillion] = useState<number>(10);
  const [tenureYears, setTenureYears] = useState<number>(3);
  const [assetClass, setAssetClass] = useState<'murree' | 'commercial' | 'societies'>('murree');

  // Rates based on real estate asset classes
  const assetRates = {
    murree: { capitalRate: 0.12, rentalRate: 0.10, label: 'Murree Scenic Vacation Chalets' },
    commercial: { capitalRate: 0.10, rentalRate: 0.08, label: 'Islamabad Commercial Towers' },
    societies: { capitalRate: 0.16, rentalRate: 0.04, label: 'Masterplanned Societal Plots' },
  };

  const currentRate = assetRates[assetClass];
  const principalPkr = amountMillion * 1000000;

  // Calculations
  const projectedAppreciation = principalPkr * Math.pow(1 + currentRate.capitalRate, tenureYears) - principalPkr;
  const projectedRental = principalPkr * currentRate.rentalRate * tenureYears;
  const totalProjectedValue = principalPkr + projectedAppreciation + projectedRental;
  const totalProfit = projectedAppreciation + projectedRental;
  const totalRoiPercentage = Math.round((totalProfit / principalPkr) * 100);

  const formatPkr = (val: number) => {
    if (val >= 10000000) {
      return `PKR ${(val / 10000000).toFixed(2)} Crore`;
    }
    return `PKR ${(val / 1000000).toFixed(2)} Million`;
  };

  return (
    <section id="roi-calculator" className="relative py-24 sm:py-32 bg-theme-bg border-b border-gray-200 overflow-hidden text-theme-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-primary font-extrabold bg-primary-light border border-primary-border px-4 py-1.5 rounded-full shadow-sm">
            <Calculator className="w-3.5 h-3.5 text-primary" />
            <span>Yield Simulator</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-serif text-theme-heading tracking-tight">
            Calculate Your <span className="text-primary">Wealth Growth</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed max-w-2xl mx-auto">
            Simulate capital appreciation and rental dividends across Murree chalets and Islamabad commercial towers.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Controls Column (7 Cols) */}
          <div className="lg:col-span-7 bg-white border border-gray-200 rounded-3xl p-6 sm:p-9 shadow-sm space-y-7">
            {/* Asset Class Selection */}
            <div>
              <label className="block text-xs uppercase font-extrabold tracking-wider text-theme-heading mb-3">
                Select Asset Class
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setAssetClass('murree')}
                  className={`p-3.5 rounded-2xl text-xs font-semibold text-left transition-all cursor-pointer ${
                    assetClass === 'murree'
                      ? 'bg-primary text-white font-extrabold shadow-md scale-102'
                      : 'bg-theme-surface text-slate-800 border border-gray-200 hover:border-primary'
                  }`}
                >
                  <div className="text-sm font-bold">Murree Chalets</div>
                  <div className="text-[11px] font-bold text-emerald-600 mt-1">~22% Annual Yield</div>
                </button>

                <button
                  type="button"
                  onClick={() => setAssetClass('commercial')}
                  className={`p-3.5 rounded-2xl text-xs font-semibold text-left transition-all cursor-pointer ${
                    assetClass === 'commercial'
                      ? 'bg-primary text-white font-extrabold shadow-md scale-102'
                      : 'bg-theme-surface text-slate-800 border border-gray-200 hover:border-primary'
                  }`}
                >
                  <div className="text-sm font-bold">Commercial Towers</div>
                  <div className="text-[11px] font-bold text-emerald-600 mt-1">~18% Annual Yield</div>
                </button>

                <button
                  type="button"
                  onClick={() => setAssetClass('societies')}
                  className={`p-3.5 rounded-2xl text-xs font-semibold text-left transition-all cursor-pointer ${
                    assetClass === 'societies'
                      ? 'bg-primary text-white font-extrabold shadow-md scale-102'
                      : 'bg-theme-surface text-slate-800 border border-gray-200 hover:border-primary'
                  }`}
                >
                  <div className="text-sm font-bold">Megacity Plots</div>
                  <div className="text-[11px] font-bold text-emerald-600 mt-1">~20% Capital Growth</div>
                </button>
              </div>
            </div>

            {/* Principal Investment Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs uppercase font-extrabold tracking-wider text-slate-700">
                  Initial Investment Capital
                </span>
                <span className="text-xl sm:text-2xl font-black font-serif text-primary">
                  PKR {amountMillion} Million
                </span>
              </div>
              <input
                type="range"
                min="2.5"
                max="50"
                step="0.5"
                value={amountMillion}
                onChange={(e) => setAmountMillion(parseFloat(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-xs text-slate-500 font-bold font-mono">
                <span>PKR 2.5M</span>
                <span>PKR 25M</span>
                <span>PKR 50M</span>
              </div>
            </div>

            {/* Holding Period Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs uppercase font-extrabold tracking-wider text-slate-700">
                  Investment Holding Tenure
                </span>
                <span className="text-xl sm:text-2xl font-black font-serif text-theme-heading">
                  {tenureYears} {tenureYears === 1 ? 'Year' : 'Years'}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="5"
                step="1"
                value={tenureYears}
                onChange={(e) => setTenureYears(parseInt(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-xs text-slate-500 font-bold font-mono">
                <span>1 Year</span>
                <span>3 Years</span>
                <span>5 Years</span>
              </div>
            </div>

            {/* Trust disclaimer */}
            <div className="flex items-center space-x-2.5 text-xs text-slate-600 bg-theme-surface p-3.5 rounded-xl border border-gray-200">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                Based on historical 6-year verified delivery benchmarks in Murree & Islamabad by Galaxy Marketing.
              </span>
            </div>
          </div>

          {/* Right Summary Column (5 Cols) */}
          <div className="lg:col-span-5 bg-white border border-gray-200 rounded-3xl p-6 sm:p-9 shadow-lg relative overflow-hidden">
            <div className="space-y-5 relative z-10">
              <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                <span className="text-xs uppercase font-extrabold tracking-wider text-slate-600">
                  Projected Portfolio Value
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  +{totalRoiPercentage}% Total Return
                </span>
              </div>

              {/* Big Projected Total */}
              <div>
                <div className="text-3xl sm:text-5xl font-black text-primary font-serif">
                  {formatPkr(totalProjectedValue)}
                </div>
                <div className="text-xs text-slate-500 mt-1 font-medium">
                  Estimated Value after {tenureYears} Years
                </div>
              </div>

              {/* Split Breakdown */}
              <div className="space-y-2.5 pt-1">
                <div className="bg-theme-surface p-3.5 rounded-xl border border-gray-200 flex items-center justify-between text-xs sm:text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
                    <span className="text-slate-700 font-semibold">Capital Appreciation:</span>
                  </div>
                  <span className="font-extrabold text-theme-heading">+{formatPkr(projectedAppreciation)}</span>
                </div>

                <div className="bg-theme-surface p-3.5 rounded-xl border border-gray-200 flex items-center justify-between text-xs sm:text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    <span className="text-slate-700 font-semibold">Rental Dividends:</span>
                  </div>
                  <span className="font-extrabold text-emerald-600">+{formatPkr(projectedRental)}</span>
                </div>

                <div className="bg-theme-surface p-3.5 rounded-xl border border-gray-200 flex items-center justify-between text-xs sm:text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-400"></span>
                    <span className="text-slate-700 font-semibold">Initial Capital:</span>
                  </div>
                  <span className="font-bold text-slate-700">{formatPkr(principalPkr)}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 space-y-3">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-4 rounded-xl bg-primary hover:bg-primary-hover text-white font-extrabold uppercase tracking-wider text-xs sm:text-sm hover:brightness-105 active:scale-[0.99] transition-all shadow-md flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Lock In This Investment Plan</span>
                </button>

                <a
                  href={`https://api.whatsapp.com/send?phone=+923095550790&text=${encodeURIComponent(`Assalam o Alaikum, I simulated an investment of PKR ${amountMillion} Million for ${tenureYears} years in ${currentRate.label} with Galaxy Marketing. Please share verified portfolio options.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-white border border-emerald-500 text-emerald-600 hover:bg-emerald-50 text-xs sm:text-sm font-bold flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Discuss With Advisor on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
