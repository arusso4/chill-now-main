import React from "react";
import { Metadata } from 'next';
import SafetyHero from "./components/SafetyHero";
import SafetyPillars from "./components/SafetyPillars";
import SafetyProcess from "./components/SafetyProcess";
import SafetyFaq from "./components/SafetyFaq";
import SafetyResources from "./components/SafetyResources";
import SafetyCTA from "./components/SafetyCTA";

export const metadata: Metadata = {
  title: 'Safety First - ChillNOW Cannabis Delivery | Secure & Responsible',
  description: 'Learn about ChillNOW\'s comprehensive safety measures for cannabis delivery. Background-checked drivers, secure transactions, age verification, and responsible delivery practices.',
  keywords: 'cannabis delivery safety, safe cannabis delivery, background checked drivers, secure cannabis delivery, age verification, responsible delivery',
  openGraph: {
    title: 'Safety First - ChillNOW Cannabis Delivery',
    description: 'Learn about ChillNOW\'s comprehensive safety measures for cannabis delivery. Background-checked drivers, secure transactions, and responsible delivery practices.',
    url: 'https://chillnow.com/safety',
    siteName: 'ChillNOW',
    images: [
      {
        url: 'https://chillnow.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ChillNOW safety and security measures',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@chillnow',
    creator: '@chillnow',
    title: 'Safety First - ChillNOW Cannabis Delivery',
    description: 'Learn about ChillNOW\'s comprehensive safety measures for cannabis delivery. Background-checked drivers, secure transactions, and responsible delivery practices.',
    images: ['https://chillnow.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://chillnow.com/safety',
  },
};

export default function SafetyPage() {
  return (
    <main className="min-h-screen">
      <SafetyHero />
      <SafetyPillars />
      <SafetyProcess />
      <SafetyFaq />
      <SafetyResources />
      <SafetyCTA />
    </main>
  );
}
