"use client";

import React from "react";
import { Product } from "@/lib/getProducts";
import ProductCard from "./ProductCard";


type ProductGridProps = {
  products: Product[];
  category: string;
  brand: string;
  q: string;
  page: number;
};

export default function ProductGrid({ products, category, brand, q, page }: ProductGridProps) {
  const activeCategory = category || "all";
  
  // Filter products based on category and search
  let filteredProducts = products;
  
  if (activeCategory && activeCategory !== "all") {
    filteredProducts = filteredProducts.filter(product => 
      product.categories.some(cat => 
        cat.slug.toLowerCase() === activeCategory.toLowerCase()
      )
    );
  }
  
  if (brand) {
    filteredProducts = filteredProducts.filter(product => 
      product.brand?.slug.toLowerCase() === brand.toLowerCase()
    );
  }
  
  if (q) {
    const searchTerm = q.toLowerCase();
    filteredProducts = filteredProducts.filter(product => 
      product.title.toLowerCase().includes(searchTerm) ||
      product.brand?.title.toLowerCase().includes(searchTerm) ||
      product.categories.some(cat => 
        cat.title.toLowerCase().includes(searchTerm)
      )
    );
  }

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
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : products.length === 0 ? (
          // Empty marketplace state - no products at all
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <div className="text-8xl mb-6">🌿</div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Welcome to the Marketplace
              </h3>
              <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                We're curating the best cannabis products and exclusive merch. 
                Check back soon for our first drops!
              </p>
              <div className="space-y-4">
                <a 
                  href="/studio"
                  className="inline-block bg-gradient-to-r from-emerald-500 to-fuchsia-500 hover:from-emerald-600 hover:to-fuchsia-600 text-white rounded-xl px-8 py-4 font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                >
                  Add Your First Product
                </a>
                <div className="text-sm text-zinc-500">
                  <p>Want to be notified when we launch?</p>
                  <a 
                    href="#newsletter" 
                    className="text-emerald-400 hover:text-emerald-300 underline"
                  >
                    Join our waitlist
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // No products match current filters
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
