'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppFloatingButton from './WhatsAppFloatingButton';
import GalaxyChatBot from './GalaxyChatBot';
import VipBookingModal from './VipBookingModal';
import { BookingProvider, useBooking } from '@/context/BookingContext';

function InnerLayout({ children }: { children: React.ReactNode }) {
  const { isBookingOpen, closeBooking, selectedProject, openBooking } = useBooking();
  const pathname = usePathname();

  // Ensure every route transition starts smoothly at the top and allows free scrolling
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[var(--theme-bg)] text-[var(--theme-heading)] selection:bg-[var(--primary)] selection:text-white transition-colors duration-300">
      <Navbar />

      <main className="flex-1">
        {children}
      </main>

      <Footer />

      {/* Persistent Animated Floating WhatsApp Button (Right Bottom) */}
      <WhatsAppFloatingButton />

      {/* Persistent AI Real Estate Concierge Bot (Left Bottom) */}
      <GalaxyChatBot />

      {/* VIP Booking Modal */}
      <VipBookingModal
        isOpen={isBookingOpen}
        onClose={closeBooking}
        defaultProject={selectedProject}
      />
    </div>
  );
}

export default function ClientLayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BookingProvider>
      <InnerLayout>{children}</InnerLayout>
    </BookingProvider>
  );
}
