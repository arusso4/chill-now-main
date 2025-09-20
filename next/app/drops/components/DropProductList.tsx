import React from "react";
import Image from "next/image";
import { Drop } from "./DropCard";
import ReserveButton from "./ReserveButton";
import { formatPrice } from "@/src/lib/foxy";

interface DropProductListProps {
  drop: Drop;
}

export default function DropProductList({ drop }: DropProductListProps) {
  const now = new Date().getTime();
  const startTime = new Date(drop.startAt).getTime();
  const endTime = new Date(drop.endAt).getTime();
  
  let status: 'upcoming' | 'live' | 'ended' = 'upcoming';
  if (now >= startTime && now < endTime) {
    status = 'live';
  } else if (now >= endTime) {
    status = 'ended';
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 
            id="products-heading"
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-fuchsia-500 via-pink-500 to-violet-600 bg-clip-text text-transparent"
          >
            Drop Products
          </h2>
          <p className="text-zinc-400 text-lg">
            {drop.products.length} exclusive product{drop.products.length !== 1 ? 's' : ''} in this drop
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {drop.products.map((dropProduct, index) => {
            const { product, variantSku, price, cap, sold } = dropProduct;
            const availableQuantity = cap - sold;
            const soldPercentage = cap > 0 ? Math.round((sold / cap) * 100) : 0;
            const isLowStock = availableQuantity <= 5 && availableQuantity > 0;
            const isSoldOut = availableQuantity === 0;

            return (
              <div
                key={`${product.id}-${variantSku}`}
                className="rounded-2xl border border-white/10 bg-[#0d1117] shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 hover:ring-2 hover:ring-purple-500/20 overflow-hidden"
              >
                {/* Product Image */}
                <div className="relative h-48 overflow-hidden">
                  {product.images && product.images[0] && product.images[0] !== "/placeholder.svg" ? (
                    <Image
                      src={product.images[0]}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-fuchsia-500/20 to-purple-600/20 flex items-center justify-center">
                      <div className="text-white/60 text-4xl font-bold">
                        {product.brand.charAt(0)}
                      </div>
                    </div>
                  )}
                  
                  {/* Stock Status Badge */}
                  <div className="absolute top-3 left-3">
                    {isSoldOut ? (
                      <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                        Sold Out
                      </span>
                    ) : isLowStock ? (
                      <span className="bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                        Low Stock
                      </span>
                    ) : (
                      <span className="bg-emerald-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                        In Stock
                      </span>
                    )}
                  </div>
                  
                  {/* Drop Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                      Drop #{index + 1}
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2">
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
                  
                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-fuchsia-500 bg-clip-text text-transparent">
                      {formatPrice(price)}
                    </span>
                  </div>
                  
                  {/* Stock Progress */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-zinc-400 mb-2">
                      <span>Sold: {sold}</span>
                      <span>Total: {cap}</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-fuchsia-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${Math.min(soldPercentage, 100)}%` }}
                      />
                    </div>
                    <div className="text-xs text-zinc-400 mt-1">
                      {soldPercentage}% sold
                    </div>
                  </div>
                  
                  {/* Reserve Button */}
                  <ReserveButton
                    productId={product.id}
                    variantSku={variantSku}
                    productTitle={product.title}
                    price={price}
                    maxQuantity={3}
                    availableQuantity={availableQuantity}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Drop Info */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-4">
              Drop Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-zinc-400">Mode:</span>
                <span className="text-white ml-2 capitalize">
                  {drop.mode.replace('-', ' ')}
                </span>
              </div>
              <div>
                <span className="text-zinc-400">Products:</span>
                <span className="text-white ml-2">{drop.products.length}</span>
              </div>
              <div>
                <span className="text-zinc-400">Total Cap:</span>
                <span className="text-white ml-2">
                  {drop.products.reduce((sum, p) => sum + p.cap, 0)}
                </span>
              </div>
              <div>
                <span className="text-zinc-400">Total Sold:</span>
                <span className="text-white ml-2">
                  {drop.products.reduce((sum, p) => sum + p.sold, 0)}
                </span>
              </div>
            </div>
            
            {status === 'live' && (
              <div className="mt-6 p-4 bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-lg">
                <p className="text-fuchsia-300 text-sm">
                  🔴 This drop is currently live! Products are selling fast.
                </p>
              </div>
            )}
            
            {status === 'upcoming' && (
              <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <p className="text-blue-300 text-sm">
                  ⏰ This drop hasn't started yet. Get ready!
                </p>
              </div>
            )}
            
            {status === 'ended' && (
              <div className="mt-6 p-4 bg-zinc-500/10 border border-zinc-500/20 rounded-lg">
                <p className="text-zinc-300 text-sm">
                  This drop has ended. Check out our other drops!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
