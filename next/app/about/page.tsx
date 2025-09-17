import React from "react";
import { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = {
  title: 'About ChillNOW - Premium Cannabis Delivery | Our Story & Mission',
  description: 'Learn about ChillNOW\'s mission to revolutionize cannabis delivery. Premium products, lightning-fast service, and a commitment to wellness without regret.',
  keywords: 'about ChillNOW, cannabis delivery company, premium cannabis, wellness mission, cannabis revolution, fast delivery service',
  openGraph: {
    title: 'About ChillNOW - Premium Cannabis Delivery | Our Story & Mission',
    description: 'Learn about ChillNOW\'s mission to revolutionize cannabis delivery. Premium products, lightning-fast service, and a commitment to wellness without regret.',
    url: 'https://chillnow.com/about',
    siteName: 'ChillNOW',
    images: [
      {
        url: 'https://chillnow.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'About ChillNOW cannabis delivery company',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@chillnow',
    creator: '@chillnow',
    title: 'About ChillNOW - Premium Cannabis Delivery | Our Story & Mission',
    description: 'Learn about ChillNOW\'s mission to revolutionize cannabis delivery. Premium products, lightning-fast service, and a commitment to wellness without regret.',
    images: ['https://chillnow.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://chillnow.com/about',
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
