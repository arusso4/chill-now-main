import React from "react";
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import DropDetailHero from '../components/DropDetailHero';
import DropProductList from '../components/DropProductList';
import CTASection from '../components/CTASection';

// Mock data - replace with Sanity data
const mockDrops = [
  {
    slug: "chillnow-hoodie-drop",
    title: "ChillNOW Premium Hoodie Drop",
    startAt: "2024-02-15T18:00:00Z",
    endAt: "2024-02-17T18:00:00Z",
    mode: "first-come" as const,
    heroImage: "/placeholder.svg",
    featured: true,
    description: "Exclusive premium hoodie drop with limited edition design",
    products: [
      {
        product: {
          id: "1",
          title: "Premium ChillNOW Hoodie",
          brand: "chillNOW",
          images: ["/placeholder.svg"],
          categories: ["Merch", "Apparel"]
        },
        variantSku: "hoodie-m",
        price: 89,
        cap: 100,
        sold: 23
      },
      {
        product: {
          id: "2",
          title: "Limited Edition Tee",
          brand: "chillNOW",
          images: ["/placeholder.svg"],
          categories: ["Merch", "Apparel"]
        },
        variantSku: "tee-l",
        price: 35,
        cap: 200,
        sold: 45
      }
    ]
  },
  {
    slug: "zen-garden-exclusive",
    title: "Zen Garden Exclusive Drop",
    startAt: "2024-02-20T12:00:00Z",
    endAt: "2024-02-22T12:00:00Z",
    mode: "raffle" as const,
    heroImage: "/placeholder.svg",
    featured: false,
    description: "Exclusive Zen Garden product launch",
    products: [
      {
        product: {
          id: "3",
          title: "Zen Garden THC Gummies",
          brand: "Zen Garden",
          images: ["/placeholder.svg"],
          categories: ["Edibles", "THC"]
        },
        variantSku: "gummies-25mg",
        price: 55,
        cap: 50,
        sold: 12
      }
    ]
  }
];

interface DropDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: DropDetailPageProps): Promise<Metadata> {
  const drop = mockDrops.find(d => d.slug === params.slug);
  
  if (!drop) {
    return {
      title: 'Drop Not Found - chillNOW',
    };
  }

  return {
    title: `${drop.title} - chillNOW Limited Drop`,
    description: drop.description,
    keywords: 'limited drop, exclusive launch, cannabis products, chillNOW',
    openGraph: {
      title: `${drop.title} - chillNOW Limited Drop`,
      description: drop.description,
      url: `https://chillnow.com/drops/${drop.slug}`,
      siteName: 'ChillNOW',
      images: [
        {
          url: drop.heroImage,
          width: 1200,
          height: 630,
          alt: drop.title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@chillnow',
      creator: '@chillnow',
      title: `${drop.title} - chillNOW Limited Drop`,
      description: drop.description,
      images: [drop.heroImage],
    },
    alternates: {
      canonical: `https://chillnow.com/drops/${drop.slug}`,
    },
  };
}

export default function DropDetailPage({ params }: DropDetailPageProps) {
  const drop = mockDrops.find(d => d.slug === params.slug);
  
  if (!drop) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0b0f14] text-white">
      {/* Drop Detail Hero */}
      <section id="hero" aria-labelledby="hero-heading">
        <DropDetailHero drop={drop} />
      </section>
      
      {/* Drop Products */}
      <section id="products" aria-labelledby="products-heading">
        <DropProductList drop={drop} />
      </section>
      
      {/* CTA Section */}
      <section id="cta" aria-labelledby="cta-heading">
        <CTASection />
      </section>
    </div>
  );
}
