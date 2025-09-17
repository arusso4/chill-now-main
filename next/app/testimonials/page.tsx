import React from "react";
import { Metadata } from 'next';
import TestimonialsPageClient from './TestimonialsPageClient';

export const metadata: Metadata = {
  title: 'ChillNOW Customer Reviews & Testimonials - Real Stories',
  description: 'Read authentic customer reviews and testimonials about ChillNOW\'s premium cannabis delivery service. Real stories from satisfied customers about fast delivery and quality products.',
  keywords: 'ChillNOW reviews, customer testimonials, cannabis delivery reviews, customer feedback, cannabis service reviews',
  openGraph: {
    title: 'ChillNOW Customer Reviews & Testimonials - Real Stories',
    description: 'Read authentic customer reviews and testimonials about ChillNOW\'s premium cannabis delivery service. Real stories from satisfied customers about fast delivery and quality products.',
    url: 'https://chillnow.com/testimonials',
    siteName: 'ChillNOW',
    images: [
      {
        url: 'https://chillnow.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ChillNOW customer reviews and testimonials',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@chillnow',
    creator: '@chillnow',
    title: 'ChillNOW Customer Reviews & Testimonials - Real Stories',
    description: 'Read authentic customer reviews and testimonials about ChillNOW\'s premium cannabis delivery service. Real stories from satisfied customers about fast delivery and quality products.',
    images: ['https://chillnow.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://chillnow.com/testimonials',
  },
};

export default function TestimonialsPage() {
  return <TestimonialsPageClient />;
}
