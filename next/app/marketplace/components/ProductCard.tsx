import React from "react";
import Image from "next/image";
import { Product } from "@/lib/getProducts";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const hasImage = product.image && product.image.asset;
  const imageUrl = hasImage ? product.image.asset.url : null;

  return (
    <div className="group rounded-2xl border border-white/10 bg-[#0d1117] shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 hover:ring-2 hover:ring-purple-500/20">
      {/* Product Image */}
      <div className="relative h-48 rounded-t-2xl overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-fuchsia-500/20 to-purple-600/20 flex items-center justify-center">
            <div className="text-white/60 text-4xl font-bold">
              {product.brand?.title?.charAt(0) || product.title.charAt(0)}
            </div>
          </div>
        )}
        
        {/* Category Badge */}
        {product.categories.length > 0 && (
          <div className="absolute top-3 left-3">
            <span className="bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
              {product.categories[0].title}
            </span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2 group-hover:text-fuchsia-300 transition-colors">
            {product.title}
          </h3>
          <p className="text-zinc-400 text-sm mb-2">
            by {product.brand?.title || "Unknown Brand"}
          </p>
          <div className="flex flex-wrap gap-1 mb-3">
            {product.categories.slice(0, 2).map((category) => (
              <span
                key={category._id}
                className="text-xs bg-white/5 border border-white/10 text-zinc-300 px-2 py-1 rounded-full"
              >
                {category.title}
              </span>
            ))}
          </div>
        </div>
        
        {/* Price and View Details */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-fuchsia-500 bg-clip-text text-transparent">
              {product.price ? `$${product.price}` : "Price TBD"}
            </span>
            {product.categories.length > 2 && (
              <span className="text-xs text-zinc-400">
                +{product.categories.length - 2} more categories
              </span>
            )}
          </div>
          
          <button className="bg-gradient-to-r from-emerald-500 to-fuchsia-500 hover:from-emerald-600 hover:to-fuchsia-600 text-white rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-300 hover:shadow-lg">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              View Details
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
