import React from "react";
import Image from "next/image";
import { Product } from "@/lib/getProducts";

type FeaturedStripProps = {
  products: Product[];
};

const gradients = [
  "from-fuchsia-500 to-purple-600",
  "from-emerald-500 to-teal-600", 
  "from-blue-500 to-indigo-600",
  "from-pink-500 to-rose-600",
  "from-orange-500 to-red-600",
  "from-violet-500 to-purple-600",
  "from-cyan-500 to-blue-600",
  "from-green-500 to-emerald-600"
];

export default function FeaturedStrip({ products }: FeaturedStripProps) {
  // If no products, don't render the section
  if (products.length === 0) {
    return null;
  }
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 
            id="featured-heading"
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-fuchsia-500 via-pink-500 to-violet-600 bg-clip-text text-transparent"
          >
            Featured Drops
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Discover our handpicked selection of premium products and exclusive merch
          </p>
        </div>

        {/* Horizontal scroll container */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {products.map((product, index) => {
              const gradient = gradients[index % gradients.length];
              const hasImage = product.image && product.image.asset;
              const firstCategory = product.categories[0]?.title || "Product";
              
              return (
                <div
                  key={product._id}
                  className="flex-shrink-0 w-80 h-96 rounded-2xl border border-white/10 bg-[#0d1117] shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer"
                >
                  {/* Product Image or Gradient Background */}
                  <div className="relative h-48 rounded-t-2xl overflow-hidden">
                    {hasImage ? (
                      <Image
                        src={product.image.asset.url}
                        alt={product.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                        <div className="text-white/80 text-4xl font-bold">
                          {product.brand?.title?.charAt(0) || product.title.charAt(0)}
                        </div>
                      </div>
                    )}
                    
                    {/* Featured Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        Featured
                      </span>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 right-3">
                      <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {firstCategory}
                      </span>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6 flex flex-col justify-between h-48">
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2">
                        {product.title}
                      </h3>
                      <p className="text-zinc-400 text-sm mb-3">
                        by {product.brand?.title || "Unknown Brand"}
                      </p>
                      <div className="text-zinc-300 text-sm mb-4">
                        {product.categories.map(cat => cat.title).join(", ")}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-fuchsia-500 bg-clip-text text-transparent">
                        {product.price ? `$${product.price}` : "Price TBD"}
                      </span>
                      <button className="bg-gradient-to-r from-emerald-500 to-fuchsia-500 hover:from-emerald-600 hover:to-fuchsia-600 text-white rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-300 hover:shadow-lg">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-4 w-8 bg-gradient-to-r from-[#0b0f14] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-4 w-8 bg-gradient-to-l from-[#0b0f14] to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
