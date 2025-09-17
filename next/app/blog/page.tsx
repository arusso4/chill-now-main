import React from "react";
import { Metadata } from 'next';
import BlogPageClient from './BlogPageClient';

export const metadata: Metadata = {
  title: 'ChillNOW Blog - Cannabis Lifestyle, Wellness & Industry Insights',
  description: 'Discover cannabis lifestyle tips, wellness insights, and industry trends. Expert articles on premium cannabis products, delivery innovation, and the future of cannabis culture.',
  keywords: 'cannabis blog, cannabis lifestyle, wellness tips, cannabis industry, cannabis delivery, premium cannabis, cannabis culture',
  openGraph: {
    title: 'ChillNOW Blog - Cannabis Lifestyle, Wellness & Industry Insights',
    description: 'Discover cannabis lifestyle tips, wellness insights, and industry trends. Expert articles on premium cannabis products, delivery innovation, and the future of cannabis culture.',
    url: 'https://chillnow.com/blog',
    siteName: 'ChillNOW',
    images: [
      {
        url: 'https://chillnow.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ChillNOW cannabis blog and lifestyle content',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@chillnow',
    creator: '@chillnow',
    title: 'ChillNOW Blog - Cannabis Lifestyle, Wellness & Industry Insights',
    description: 'Discover cannabis lifestyle tips, wellness insights, and industry trends. Expert articles on premium cannabis products, delivery innovation, and the future of cannabis culture.',
    images: ['https://chillnow.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://chillnow.com/blog',
  },
};

export default function BlogPage() {
  return <BlogPageClient />;
}
