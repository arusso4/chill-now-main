import React from "react";
import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/HeroSection";
import ValueProposition from "@/components/ValueProposition";
import HowItWorks from "@/components/HowItWorks";
import TestimonialSection from "@/components/TestimonialSection";
import CTASection from "@/components/CTASection";
import StructuredData from "@/components/StructuredData";

const Index = () => {
  return (
    <>
      <Helmet>
                             <title>ChillNOW - Premium Cannabis Delivery in 60 Minutes | Legal Markets</title>
       <meta
         name="description"
         content="Premium cannabis products delivered to your door in 60 minutes or less. Lab-tested, COA-verified products for wellness without regret. Join the waitlist for early access."
       />
       <meta name="keywords" content="cannabis delivery, premium cannabis, wellness, legal cannabis, fast delivery, 60 minute delivery, THC drinks, CBD products, cannabis gummies" />
        <link rel="canonical" href="https://chillnow.com/" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://chillnow.com/" />
                                     <meta property="og:title" content="ChillNOW - Premium Cannabis Delivery in 60 Minutes" />
           <meta property="og:description" content="Premium cannabis products delivered to your door in 60 minutes or less. Lab-tested, COA-verified products for wellness without regret." />
        <meta property="og:image" content="https://chillnow.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="ChillNOW" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@chillnow" />
        <meta name="twitter:creator" content="@chillnow" />
        <meta name="twitter:url" content="https://chillnow.com/" />
                                     <meta name="twitter:title" content="ChillNOW - Premium Cannabis Delivery in 60 Minutes" />
           <meta name="twitter:description" content="Premium cannabis products delivered to your door in 60 minutes or less. Lab-tested, COA-verified products for wellness without regret." />
        <meta name="twitter:image" content="https://chillnow.com/og-image.jpg" />
        <meta name="twitter:image:alt" content="ChillNOW premium cannabis delivery service" />
      </Helmet>
      
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
};

export default Index;
