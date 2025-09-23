import React, { Suspense } from "react";
import { Metadata } from 'next';
import { SearchParams, normalizeSearchParams, str, num } from '@/lib/search-params';
import { getProducts, getFeaturedProducts, Product } from '@/lib/getProducts';
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

  // Fetch products with comprehensive error handling
  let products: Product[] = [];
  let featuredProducts: Product[] = [];
  
  try {
    const [fetchedProducts, fetchedFeatured] = await Promise.all([
      getProducts(),
      getFeaturedProducts()
    ]);
    
    // Ensure we have arrays even if Sanity returns null/undefined
    products = Array.isArray(fetchedProducts) ? fetchedProducts : [];
    featuredProducts = Array.isArray(fetchedFeatured) ? fetchedFeatured : [];
    
  } catch (error) {
    console.error('Error fetching products:', error);
    // Graceful degradation - continue with empty arrays
    products = [];
    featuredProducts = [];
  }

  // Render empty state if no products
  if (products.length === 0) {
    return (
      <div className="min-h-screen bg-[#0b0f14] text-white">
        {/* Hero Section */}
        <section id="hero" aria-labelledby="hero-heading">
          <MarketplaceHero />
        </section>
        
        {/* Empty State */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-8xl mb-6">🌿</div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Marketplace
            </h2>
            <p className="text-zinc-400 text-xl mb-8 max-w-2xl mx-auto">
              No products available yet. Check back soon!
            </p>
            
            {/* Development CTA - only show in non-production */}
            {process.env.NODE_ENV !== "production" && (
              <div className="mt-8">
                <a 
                  href="/studio"
                  className="inline-block bg-gradient-to-r from-emerald-500 to-fuchsia-500 hover:from-emerald-600 hover:to-fuchsia-600 text-white rounded-xl px-8 py-4 font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                >
                  Add Your First Product
                </a>
                <p className="text-sm text-zinc-500 mt-4">
                  Development mode - this CTA won't show to real users
                </p>
              </div>
            )}
          </div>
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

  // Render full marketplace with products
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