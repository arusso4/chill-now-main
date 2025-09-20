"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { Product } from "@/src/lib/foxy";
import ProductCard from "./ProductCard";

// Mock data - replace with Sanity data
const mockProducts: Product[] = [
  {
    id: "1",
    title: "Premium ChillNOW Hoodie",
    slug: "premium-chillnow-hoodie",
    brand: "chillNOW",
    images: ["/placeholder.svg"],
    categories: ["Merch", "Apparel"],
    variants: [
      { sku: "hoodie-s", price: 89, size: "S", inStock: true },
      { sku: "hoodie-m", price: 89, size: "M", inStock: true },
      { sku: "hoodie-l", price: 89, size: "L", inStock: false },
      { sku: "hoodie-xl", price: 89, size: "XL", inStock: true }
    ],
    featured: true,
    description: "Premium quality hoodie with chillNOW branding"
  },
  {
    id: "2",
    title: "Zen Garden THC Gummies",
    slug: "zen-garden-thc-gummies",
    brand: "Zen Garden",
    images: ["/placeholder.svg"],
    categories: ["Edibles", "THC"],
    variants: [
      { sku: "gummies-10mg", price: 45, size: "10mg", inStock: true },
      { sku: "gummies-25mg", price: 55, size: "25mg", inStock: true }
    ],
    featured: false,
    description: "Premium THC gummies for relaxation"
  },
  {
    id: "3",
    title: "CBD Wellness Tincture",
    slug: "cbd-wellness-tincture",
    brand: "Pure Relief",
    images: ["/placeholder.svg"],
    categories: ["Wellness", "CBD"],
    variants: [
      { sku: "tincture-500mg", price: 65, size: "500mg", inStock: true },
      { sku: "tincture-1000mg", price: 95, size: "1000mg", inStock: true }
    ],
    featured: false,
    description: "High-quality CBD tincture for wellness"
  },
  {
    id: "4",
    title: "Exclusive Drop Tee",
    slug: "exclusive-drop-tee",
    brand: "chillNOW",
    images: ["/placeholder.svg"],
    categories: ["Merch", "Apparel"],
    variants: [
      { sku: "tee-s", price: 35, size: "S", inStock: true },
      { sku: "tee-m", price: 35, size: "M", inStock: true },
      { sku: "tee-l", price: 35, size: "L", inStock: true }
    ],
    featured: true,
    description: "Limited edition t-shirt design"
  },
  {
    id: "5",
    title: "THC Infused Drinks",
    slug: "thc-infused-drinks",
    brand: "Cann Social",
    images: ["/placeholder.svg"],
    categories: ["Drinks", "THC"],
    variants: [
      { sku: "drink-5mg", price: 25, size: "5mg", inStock: true },
      { sku: "drink-10mg", price: 30, size: "10mg", inStock: false }
    ],
    featured: false,
    description: "Refreshing THC-infused beverages"
  },
  {
    id: "6",
    title: "Premium Grinder Set",
    slug: "premium-grinder-set",
    brand: "Chill Tools",
    images: ["/placeholder.svg"],
    categories: ["Accessories", "Tools"],
    variants: [
      { sku: "grinder-set", price: 75, size: "Standard", inStock: true }
    ],
    featured: false,
    description: "High-quality 4-piece grinder set"
  },
  {
    id: "7",
    title: "CBD Sleep Gummies",
    slug: "cbd-sleep-gummies",
    brand: "Dream State",
    images: ["/placeholder.svg"],
    categories: ["Wellness", "CBD", "Sleep"],
    variants: [
      { sku: "sleep-gummies", price: 40, size: "30 count", inStock: true }
    ],
    featured: false,
    description: "CBD gummies formulated for better sleep"
  },
  {
    id: "8",
    title: "Limited Edition Beanie",
    slug: "limited-edition-beanie",
    brand: "chillNOW",
    images: ["/placeholder.svg"],
    categories: ["Merch", "Accessories"],
    variants: [
      { sku: "beanie-one-size", price: 28, size: "One Size", inStock: true }
    ],
    featured: true,
    description: "Cozy beanie with embroidered logo"
  }
];

export default function ProductGrid() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "all";
  
  // Filter products based on category
  const filteredProducts = category && category !== "all" 
    ? mockProducts.filter(product => 
        product.categories.some(cat => 
          cat.toLowerCase().replace(/\s+/g, '-') === category
        )
      )
    : mockProducts;

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 
            id="products-heading"
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-fuchsia-500 via-pink-500 to-violet-600 bg-clip-text text-transparent"
          >
            All Products
          </h2>
          <p className="text-zinc-400 text-lg">
            {filteredProducts.length} products found
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-white mb-2">
              No products found
            </h3>
            <p className="text-zinc-400 mb-6">
              Try adjusting your filters to see more products
            </p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-gradient-to-r from-emerald-500 to-fuchsia-500 hover:from-emerald-600 hover:to-fuchsia-600 text-white rounded-xl px-6 py-3 font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Load More Button */}
        {filteredProducts.length > 0 && (
          <div className="text-center mt-12">
            <button className="bg-white/5 border border-white/10 text-white hover:bg-white/10 rounded-xl px-8 py-3 font-semibold transition-all duration-300 hover:-translate-y-0.5">
              Load More Products
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
