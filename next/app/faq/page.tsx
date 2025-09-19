import React from "react";
import { Metadata } from 'next';
import FaqHero from './components/FaqHero';
import FaqAccordion from './components/FaqAccordion';
import FaqContact from './components/FaqContact';

export const metadata: Metadata = {
  title: 'ChillNOW FAQ - Frequently Asked Questions',
  description: 'Find answers to common questions about ChillNOW\'s premium cannabis delivery service. Learn about delivery times, product quality, safety, and more.',
  keywords: 'ChillNOW FAQ, cannabis delivery questions, delivery service FAQ, cannabis delivery help',
  openGraph: {
    title: 'ChillNOW FAQ - Frequently Asked Questions',
    description: 'Find answers to common questions about ChillNOW\'s premium cannabis delivery service. Learn about delivery times, product quality, safety, and more.',
    url: 'https://chillnow.com/faq',
    siteName: 'ChillNOW',
    images: [
      {
        url: 'https://chillnow.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ChillNOW FAQ - Cannabis delivery questions and answers',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@chillnow',
    creator: '@chillnow',
    title: 'ChillNOW FAQ - Frequently Asked Questions',
    description: 'Find answers to common questions about ChillNOW\'s premium cannabis delivery service. Learn about delivery times, product quality, safety, and more.',
    images: ['https://chillnow.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://chillnow.com/faq',
  },
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background pt-16">
      <FaqHero />
      <FaqAccordion />
      <FaqContact />
    </div>
  );
}
