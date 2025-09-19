import React from "react";
import { Metadata } from 'next';
import ComingSoonHero from "./components/ComingSoonHero";
import ComingSoonTimer from "./components/ComingSoonTimer";
import ComingSoonFeatures from "./components/ComingSoonFeatures";
import ComingSoonNotify from "./components/ComingSoonNotify";
import ComingSoonFAQ from "./components/ComingSoonFAQ";
import ComingSoonCTA from "./components/ComingSoonCTA";

export const metadata: Metadata = {
  title: 'Coming Soon - ChillNOW Cannabis Delivery | Join the Waitlist',
  description: 'ChillNOW is launching soon! Join our waitlist to be the first to experience premium cannabis delivery. Get early access, exclusive deals, and be part of the revolution.',
  keywords: 'cannabis delivery coming soon, cannabis delivery waitlist, early access cannabis delivery, premium cannabis delivery, cannabis delivery launch',
  openGraph: {
    title: 'Coming Soon - ChillNOW Cannabis Delivery',
    description: 'ChillNOW is launching soon! Join our waitlist to be the first to experience premium cannabis delivery. Get early access, exclusive deals, and be part of the revolution.',
    url: 'https://chillnow.com/coming-soon',
    siteName: 'ChillNOW',
    images: [
      {
        url: 'https://chillnow.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ChillNOW Coming Soon - Cannabis Delivery Revolution',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@chillnow',
    creator: '@chillnow',
    title: 'Coming Soon - ChillNOW Cannabis Delivery',
    description: 'ChillNOW is launching soon! Join our waitlist to be the first to experience premium cannabis delivery. Get early access, exclusive deals, and be part of the revolution.',
    images: ['https://chillnow.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://chillnow.com/coming-soon',
  },
};

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen">
      <ComingSoonHero />
      <ComingSoonTimer />
      <ComingSoonFeatures />
      <ComingSoonNotify />
      <ComingSoonFAQ />
      <ComingSoonCTA />
    </main>
  );
}