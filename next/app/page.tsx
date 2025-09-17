import React from "react";
import { Metadata } from 'next';
import HeroSection from "@/components/HeroSection";
import ValueProposition from "@/components/ValueProposition";
import HowItWorks from "@/components/HowItWorks";
import TestimonialSection from "@/components/TestimonialSection";
import CTASection from "@/components/CTASection";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: 'ChillNOW - Premium Cannabis Delivery in 60 Minutes | Legal Markets',
  description: 'Premium cannabis products delivered to your door in 60 minutes or less. Lab-tested, COA-verified products for wellness without regret. Join the waitlist for early access.',
  keywords: 'cannabis delivery, premium cannabis, wellness, legal cannabis, fast delivery, 60 minute delivery, THC drinks, CBD products, cannabis gummies',
  openGraph: {
    title: 'ChillNOW - Premium Cannabis Delivery in 60 Minutes',
    description: 'Premium cannabis products delivered to your door in 60 minutes or less. Lab-tested, COA-verified products for wellness without regret.',
    url: 'https://chillnow.com/',
    siteName: 'ChillNOW',
    images: [
      {
        url: 'https://chillnow.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ChillNOW premium cannabis delivery service',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@chillnow',
    creator: '@chillnow',
    title: 'ChillNOW - Premium Cannabis Delivery in 60 Minutes',
    description: 'Premium cannabis products delivered to your door in 60 minutes or less. Lab-tested, COA-verified products for wellness without regret.',
    images: ['https://chillnow.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://chillnow.com/',
  },
};

export default function HomePage() {
  return (
    <>
      {/* Structured Data for SEO */}
      <StructuredData />
      
      {/* Hero Section */}
      <section id="hero" aria-labelledby="hero-heading">
        <HeroSection />
      </section>
      
      {/* Value Proposition */}
      <section id="value" aria-labelledby="value-heading">
        <ValueProposition />
      </section>
      
      {/* How It Works */}
      <section id="how-it-works" aria-labelledby="how-it-works-heading">
        <HowItWorks />
      </section>
      
      {/* Testimonials */}
      <section id="testimonials" aria-labelledby="testimonials-heading">
        <TestimonialSection />
      </section>
      
      {/* CTA Section */}
      <section id="cta" aria-labelledby="cta-heading">
        <CTASection />
      </section>
    </>
  );
}
