import Link from 'next/link';
import { ArrowLeft, Home, Building2 } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-theme-bg text-theme-heading flex flex-col items-center justify-center px-4 py-20 text-center">
      <div className="w-16 h-16 rounded-2xl bg-primary-light border border-primary-border flex items-center justify-center text-primary mb-6 shadow-md">
        <Building2 className="w-8 h-8" />
      </div>

      <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-2">
        404 • Page Not Found
      </div>

      <h1 className="text-3xl sm:text-5xl font-extrabold text-theme-heading tracking-tight mb-4">
        Destination Not Found
      </h1>

      <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto mb-8 font-normal leading-relaxed">
        The real estate property or portfolio page you are seeking may have been moved or updated.
      </p>

      <Link
        href="/"
        className="px-6 py-3 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-xs uppercase tracking-wider inline-flex items-center space-x-2 transition-all shadow-md cursor-pointer"
      >
        <Home className="w-4 h-4" />
        <span>Return to Homepage</span>
      </Link>
    </div>
  );
}
