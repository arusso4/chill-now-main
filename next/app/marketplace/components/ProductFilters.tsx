"use client";

import React, { useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

const categories = [
  { id: "all", label: "All", count: 24 },
  { id: "merch", label: "Merch", count: 8 },
  { id: "thc-drinks", label: "THC Drinks", count: 6 },
  { id: "edibles", label: "Edibles", count: 5 },
  { id: "accessories", label: "Accessories", count: 3 },
  { id: "wellness", label: "Wellness", count: 2 }
];

export default function ProductFilters() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [activeCategory, setActiveCategory] = useState(searchParams.get("category") || "all");

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    
    const params = new URLSearchParams(searchParams);
    if (categoryId === "all") {
      params.delete("category");
    } else {
      params.set("category", categoryId);
    }
    
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <section className="py-8 px-4 border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 
            id="filters-heading"
            className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-fuchsia-500 via-pink-500 to-violet-600 bg-clip-text text-transparent"
          >
            Shop by Category
          </h2>
          <p className="text-zinc-400">
            Filter products by category to find exactly what you're looking for
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`rounded-full px-6 py-3 font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-fuchsia-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                activeCategory === category.id
                  ? "bg-fuchsia-500/20 text-white border border-fuchsia-500/40 shadow-lg"
                  : "bg-white/5 border border-white/10 text-zinc-200 hover:bg-white/10 hover:border-white/20"
              }`}
            >
              {category.label}
              <span className="ml-2 text-xs opacity-70">
                ({category.count})
              </span>
            </button>
          ))}
        </div>

        {/* Active filter indicator */}
        {activeCategory !== "all" && (
          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-2 bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-full px-4 py-2">
              <span className="text-fuchsia-400 text-sm">
                Showing: {categories.find(c => c.id === activeCategory)?.label}
              </span>
              <button
                onClick={() => handleCategoryChange("all")}
                className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors"
                aria-label="Clear filter"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
