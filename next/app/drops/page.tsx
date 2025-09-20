import React from "react";
import { Metadata } from 'next';
import DropsHero from './components/DropsHero';
import DropGrid from './components/DropGrid';
import CTASection from './components/CTASection';

export const metadata: Metadata = {
  title: 'Limited Drops - chillNOW Exclusive Launches',
  description: 'Discover exclusive limited-time drops and launches. Premium cannabis products, merch, and accessories available for a limited time only.',
  keywords: 'limited drops, exclusive launches, cannabis drops, limited edition, chillNOW drops, exclusive products',
  openGraph: {
    title: 'Limited Drops - chillNOW Exclusive Launches',
    description: 'Discover exclusive limited-time drops and launches. Premium cannabis products, merch, and accessories available for a limited time only.',
    url: 'https://chillnow.com/drops',
    siteName: 'ChillNOW',
    images: [
      {
        url: 'https://chillnow.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ChillNOW Limited Drops - Exclusive Launches',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@chillnow',
    creator: '@chillnow',
    title: 'Limited Drops - chillNOW Exclusive Launches',
    description: 'Discover exclusive limited-time drops and launches. Premium cannabis products, merch, and accessories available for a limited time only.',
    images: ['https://chillnow.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://chillnow.com/drops',
  },
};

export default function DropsPage() {
  return (
    <div className="min-h-screen bg-[#0b0f14] text-white">
      {/* Hero Section */}
      <section id="hero" aria-labelledby="hero-heading">
        <DropsHero />
      </section>
      
      {/* Drops Grid */}
      <section id="drops" aria-labelledby="drops-heading">
        <DropGrid />
      </section>
      
      {/* CTA Section */}
      <section id="cta" aria-labelledby="cta-heading">
        <CTASection />
      </section>
    </div>
  );
}
