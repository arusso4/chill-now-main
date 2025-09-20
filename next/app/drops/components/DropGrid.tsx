"use client";
import React from "react";
import DropCard, { Drop } from "./DropCard";

// Mock data - replace with Sanity data
const mockDrops: Drop[] = [
  {
    slug: "chillnow-hoodie-drop",
    title: "ChillNOW Premium Hoodie Drop",
    startAt: "2024-02-15T18:00:00Z",
    endAt: "2024-02-17T18:00:00Z",
    mode: "first-come",
    heroImage: "/placeholder.svg",
    featured: true,
    description: "Exclusive premium hoodie drop with limited edition design and premium materials",
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
    mode: "raffle",
    heroImage: "/placeholder.svg",
    featured: false,
    description: "Exclusive Zen Garden product launch with premium THC gummies",
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
  },
  {
    slug: "cann-social-drinks",
    title: "Cann Social Drinks Launch",
    startAt: "2024-02-25T15:00:00Z",
    endAt: "2024-02-27T15:00:00Z",
    mode: "first-come",
    heroImage: "/placeholder.svg",
    featured: true,
    description: "New line of THC-infused beverages with refreshing flavors",
    products: [
      {
        product: {
          id: "4",
          title: "THC Infused Drinks",
          brand: "Cann Social",
          images: ["/placeholder.svg"],
          categories: ["Drinks", "THC"]
        },
        variantSku: "drink-10mg",
        price: 30,
        cap: 150,
        sold: 67
      }
    ]
  },
  {
    slug: "dream-state-sleep",
    title: "Dream State Sleep Collection",
    startAt: "2024-03-01T10:00:00Z",
    endAt: "2024-03-03T10:00:00Z",
    mode: "raffle",
    heroImage: "/placeholder.svg",
    featured: false,
    description: "CBD sleep products for better rest and relaxation",
    products: [
      {
        product: {
          id: "5",
          title: "CBD Sleep Gummies",
          brand: "Dream State",
          images: ["/placeholder.svg"],
          categories: ["Wellness", "CBD", "Sleep"]
        },
        variantSku: "sleep-gummies",
        price: 40,
        cap: 75,
        sold: 8
      }
    ]
  }
];

export default function DropGrid() {
  // Sort drops: featured first, then by start date
  const sortedDrops = [...mockDrops].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return new Date(a.startAt).getTime() - new Date(b.startAt).getTime();
  });

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 
            id="drops-heading"
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-fuchsia-500 via-pink-500 to-violet-600 bg-clip-text text-transparent"
          >
            All Drops
          </h2>
          <p className="text-zinc-400 text-lg">
            {sortedDrops.length} exclusive drops available
          </p>
        </div>

        {/* Drops Grid */}
        {sortedDrops.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedDrops.map((drop) => (
              <DropCard key={drop.slug} drop={drop} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">⏰</div>
            <h3 className="text-2xl font-semibold text-white mb-2">
              No drops available
            </h3>
            <p className="text-zinc-400 mb-6">
              Check back soon for new exclusive launches
            </p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-gradient-to-r from-emerald-500 to-fuchsia-500 hover:from-emerald-600 hover:to-fuchsia-600 text-white rounded-xl px-6 py-3 font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              Refresh
            </button>
          </div>
        )}

        {/* Load More Button */}
        {sortedDrops.length > 0 && (
          <div className="text-center mt-12">
            <button className="bg-white/5 border border-white/10 text-white hover:bg-white/10 rounded-xl px-8 py-3 font-semibold transition-all duration-300 hover:-translate-y-0.5">
              Load More Drops
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
