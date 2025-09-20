import React from "react";
import Image from "next/image";

// Mock data - replace with Sanity data
const featuredProducts = [
  {
    id: "1",
    title: "Limited Edition ChillNOW Hoodie",
    brand: "chillNOW",
    price: 89,
    image: "/placeholder.svg",
    category: "Merch",
    featured: true,
    isLimited: true,
    gradient: "from-fuchsia-500 to-purple-600"
  },
  {
    id: "2", 
    title: "Premium THC Gummies",
    brand: "Zen Garden",
    price: 45,
    image: "/placeholder.svg",
    category: "Edibles",
    featured: true,
    isLimited: false,
    gradient: "from-emerald-500 to-teal-600"
  },
  {
    id: "3",
    title: "CBD Wellness Tincture",
    brand: "Pure Relief",
    price: 65,
    image: "/placeholder.svg", 
    category: "Wellness",
    featured: true,
    isLimited: false,
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    id: "4",
    title: "Exclusive Drop Tee",
    brand: "chillNOW",
    price: 35,
    image: "/placeholder.svg",
    category: "Merch", 
    featured: true,
    isLimited: true,
    gradient: "from-pink-500 to-rose-600"
  },
  {
    id: "5",
    title: "THC Infused Drinks",
    brand: "Cann Social",
    price: 25,
    image: "/placeholder.svg",
    category: "Drinks",
    featured: true,
    isLimited: false,
    gradient: "from-orange-500 to-red-600"
  }
];

export default function FeaturedStrip() {
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
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-80 h-96 rounded-2xl border border-white/10 bg-[#0d1117] shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer"
              >
                {/* Product Image or Gradient Background */}
                <div className="relative h-48 rounded-t-2xl overflow-hidden">
                  {product.image && product.image !== "/placeholder.svg" ? (
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${product.gradient} flex items-center justify-center`}>
                      <div className="text-white/80 text-4xl font-bold">
                        {product.brand.charAt(0)}
                      </div>
                    </div>
                  )}
                  
                  {/* Limited Drop Badge */}
                  {product.isLimited && (
                    <div className="absolute top-3 left-3">
                      <span className="bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        Limited Drop
                      </span>
                    </div>
                  )}
                  
                  {/* Hot Merch Badge */}
                  {product.category === "Merch" && (
                    <div className="absolute top-3 right-3">
                      <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        Hot Merch
                      </span>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6 flex flex-col justify-between h-48">
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2">
                      {product.title}
                    </h3>
                    <p className="text-zinc-400 text-sm mb-3">
                      by {product.brand}
                    </p>
                    <div className="text-zinc-300 text-sm mb-4">
                      {product.category}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-fuchsia-500 bg-clip-text text-transparent">
                      ${product.price}
                    </span>
                    <button className="bg-gradient-to-r from-emerald-500 to-fuchsia-500 hover:from-emerald-600 hover:to-fuchsia-600 text-white rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-300 hover:shadow-lg">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-4 w-8 bg-gradient-to-r from-[#0b0f14] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-4 w-8 bg-gradient-to-l from-[#0b0f14] to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
