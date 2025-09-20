import React from "react";
import Image from "next/image";
import { Product, ProductVariant, FoxyAddToCartButton, getPrimaryVariant, formatPrice, getProductImageUrl } from "@/lib/foxy";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const primaryVariant = getPrimaryVariant(product);
  
  if (!primaryVariant) {
    return null;
  }

  const imageUrl = getProductImageUrl(product);

  return (
    <div className="group rounded-2xl border border-white/10 bg-[#0d1117] shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 hover:ring-2 hover:ring-purple-500/20">
      {/* Product Image */}
      <div className="relative h-48 rounded-t-2xl overflow-hidden">
        {imageUrl && imageUrl !== "/placeholder.svg" ? (
          <Image
            src={imageUrl}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-fuchsia-500/20 to-purple-600/20 flex items-center justify-center">
            <div className="text-white/60 text-4xl font-bold">
              {product.brand.charAt(0)}
            </div>
          </div>
        )}
        
        {/* Featured Badge */}
        {product.featured && (
          <div className="absolute top-3 left-3">
            <span className="bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
              Featured
            </span>
          </div>
        )}
        
        {/* Out of Stock Overlay */}
        {!primaryVariant.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
              Out of Stock
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
            by {product.brand}
          </p>
          <div className="flex flex-wrap gap-1 mb-3">
            {product.categories.slice(0, 2).map((category) => (
              <span
                key={category}
                className="text-xs bg-white/5 border border-white/10 text-zinc-300 px-2 py-1 rounded-full"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
        
        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-fuchsia-500 bg-clip-text text-transparent">
              {formatPrice(primaryVariant.price)}
            </span>
            {product.variants.length > 1 && (
              <span className="text-xs text-zinc-400">
                {product.variants.length} variants
              </span>
            )}
          </div>
          
          <FoxyAddToCartButton
            product={product}
            variant={primaryVariant}
            disabled={!primaryVariant.inStock}
            className="text-sm"
          >
            {!primaryVariant.inStock ? (
              <span>Out of Stock</span>
            ) : (
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                </svg>
                Add to Cart
              </span>
            )}
          </FoxyAddToCartButton>
        </div>
      </div>
    </div>
  );
}
