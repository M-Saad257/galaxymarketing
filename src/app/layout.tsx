import type { Metadata } from 'next';
import './globals.css';
import ClientLayoutProvider from '@/components/ClientLayoutProvider';

export const metadata: Metadata = {
  metadataBase: new URL('https://galaxymarketing.pk'),
  title: 'Galaxy Marketing Pvt. Ltd. | Find Your Nook | Premier Luxury Real Estate',
  description: 'Welcome to Galaxy Marketing Pvt Ltd – Your trusted partner for luxury real estate, scenic mountain retreats in Murree (Holiday Hill Park), Daraaj Tower commercial hubs, and verified high-yield investments in Islamabad.',
  keywords: [
    'Galaxy Marketing',
    'Real Estate Islamabad',
    'Murree Plots for sale',
    'Holiday Hill Park Murree',
    'Daraaj Tower Islamabad',
    'Luxury Real Estate Pakistan',
    'Overseas Pakistani Real Estate',
    'G-11 Markaz Islamabad Realtors',
    'Peak Peace',
    'Find Your Nook'
  ],
  authors: [{ name: 'Galaxy Marketing Pvt. Ltd.' }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '192x192' },
      { url: '/images/logo-icon.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
      { url: '/images/logo-icon.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Galaxy Marketing | Premier Luxury Real Estate Advisory',
    description: 'Secure and well-planned Peak Peace. Discover prime scenic plots in Murree and high-yield commercial landmarks in Islamabad.',
    url: 'https://galaxymarketing.pk',
    siteName: 'Galaxy Marketing Pvt. Ltd.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Galaxy Marketing Logo & Portfolio',
      },
    ],
    locale: 'en_PK',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Galaxy Marketing | Premier Luxury Real Estate Advisory',
    description: 'Secure and well-planned Peak Peace. Discover prime scenic plots in Murree and high-yield commercial landmarks in Islamabad.',
    images: ['/images/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#FAFAF9] text-[#0F172A] antialiased selection:bg-[#C59B27] selection:text-white">
        <ClientLayoutProvider>
          {children}
        </ClientLayoutProvider>
      </body>
    </html>
  );
}
