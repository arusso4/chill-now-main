import React, { Suspense } from "react";
import { Metadata } from 'next';
import { SearchParams, normalizeSearchParams, str, num } from '@/lib/search-params';
import { getProducts, getFeaturedProducts } from '@/lib/getProducts';
import MarketplaceHero from './components/MarketplaceHero';
import FeaturedStrip from './components/FeaturedStrip';
import ProductFilters from './components/ProductFilters';
import ProductGrid from './components/ProductGrid';
import CTASection from './components/CTASection';
import NewsletterCTA from './components/NewsletterCTA';

export const metadata: Metadata = {
  title: 'ChillNOW Marketplace - Premium Cannabis Products & Merch',
  description: 'Discover premium cannabis products, exclusive merch, and limited drops in our curated marketplace. Lab-tested, COA-verified products delivered in 60 minutes or less.',
  keywords: 'cannabis marketplace, premium cannabis products, cannabis delivery, lab-tested cannabis, COA verified, cannabis merch, limited drops, exclusive products',
  openGraph: {
    title: 'ChillNOW Marketplace - Premium Cannabis Products & Merch',
    description: 'Discover premium cannabis products, exclusive merch, and limited drops in our curated marketplace. Lab-tested, COA-verified products delivered in 60 minutes or less.',
    url: 'https://chillnow.com/marketplace',
    siteName: 'ChillNOW',
    images: [
      {
        url: 'https://chillnow.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ChillNOW Marketplace - Premium Cannabis Products',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@chillnow',
    creator: '@chillnow',
    title: 'ChillNOW Marketplace - Premium Cannabis Products & Merch',
    description: 'Discover premium cannabis products, exclusive merch, and limited drops in our curated marketplace.',
    images: ['https://chillnow.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://chillnow.com/marketplace',
  },
};

type PageProps = {
  searchParams?: SearchParams;
};

// Enable ISR with 60 second revalidation
export const revalidate = 60;

export default async function MarketplacePage({ searchParams }: PageProps) {
  const sp = await normalizeSearchParams(searchParams);
  const category = str(sp.category);
  const brand = str(sp.brand);
  const q = str(sp.q);
  const page = num(sp.page, 1);

  // Fetch products safely - will return empty array if Sanity is unavailable
  const [products, featuredProducts] = await Promise.all([
    getProducts(),
    getFeaturedProducts()
  ]);

  return (
    <div className="min-h-screen bg-[#0b0f14] text-white">
      {/* Hero Section */}
      <section id="hero" aria-labelledby="hero-heading">
        <MarketplaceHero />
      </section>
      
      {/* Featured Products Strip */}
      <section id="featured" aria-labelledby="featured-heading">
        <FeaturedStrip products={featuredProducts} />
      </section>
      
      {/* Product Filters */}
      <section id="filters" aria-labelledby="filters-heading">
        <Suspense fallback={null}>
          <ProductFilters category={category} brand={brand} q={q} />
        </Suspense>
      </section>
      
      {/* Product Grid */}
      <section id="products" aria-labelledby="products-heading">
        <Suspense fallback={null}>
          <ProductGrid 
            products={products}
            category={category} 
            brand={brand} 
            q={q} 
            page={page} 
          />
        </Suspense>
      </section>
      
      {/* CTA Section */}
      <section id="cta" aria-labelledby="cta-heading">
        <CTASection />
      </section>
      
      {/* Newsletter CTA */}
      <section id="newsletter" aria-labelledby="newsletter-heading">
        <NewsletterCTA />
      </section>
    </div>
  );
}