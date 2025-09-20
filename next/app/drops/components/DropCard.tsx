import React from "react";
import Image from "next/image";
import Link from "next/link";
import DropCountdown from "./DropCountdown";

export interface Drop {
  slug: string;
  title: string;
  startAt: string;
  endAt: string;
  mode: "first-come" | "raffle";
  heroImage: string;
  featured: boolean;
  description: string;
  products: Array<{
    product: {
      id: string;
      title: string;
      brand: string;
      images: string[];
      categories: string[];
    };
    variantSku: string;
    price: number;
    cap: number;
    sold: number;
  }>;
}

interface DropCardProps {
  drop: Drop;
}

export default function DropCard({ drop }: DropCardProps) {
  const now = new Date().getTime();
  const startTime = new Date(drop.startAt).getTime();
  const endTime = new Date(drop.endAt).getTime();
  
  let status: 'upcoming' | 'live' | 'ended' = 'upcoming';
  if (now >= startTime && now < endTime) {
    status = 'live';
  } else if (now >= endTime) {
    status = 'ended';
  }

  const totalProducts = drop.products.length;
  const totalSold = drop.products.reduce((sum, p) => sum + p.sold, 0);
  const totalCap = drop.products.reduce((sum, p) => sum + p.cap, 0);
  const soldPercentage = totalCap > 0 ? Math.round((totalSold / totalCap) * 100) : 0;

  return (
    <Link href={`/drops/${drop.slug}`} className="group block">
      <div className="rounded-2xl border border-white/10 bg-[#0d1117] shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 hover:ring-2 hover:ring-purple-500/20 overflow-hidden">
        {/* Hero Image */}
        <div className="relative h-48 overflow-hidden">
          {drop.heroImage && drop.heroImage !== "/placeholder.svg" ? (
            <Image
              src={drop.heroImage}
              alt={drop.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-fuchsia-500/20 to-purple-600/20 flex items-center justify-center">
              <div className="text-white/60 text-4xl font-bold">
                {drop.title.charAt(0)}
              </div>
            </div>
          )}
          
          {/* Status Badge */}
          <div className="absolute top-3 left-3">
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
              status === 'live' 
                ? 'bg-fuchsia-500 text-white' 
                : status === 'ended'
                ? 'bg-zinc-700 text-zinc-400 line-through'
                : 'bg-white/10 text-zinc-300'
            }`}>
              {status === 'live' ? '🔴 Live' : status === 'ended' ? 'Ended' : '⏰ Upcoming'}
            </span>
          </div>
          
          {/* Featured Badge */}
          {drop.featured && (
            <div className="absolute top-3 right-3">
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                Featured
              </span>
            </div>
          )}
          
          {/* Mode Badge */}
          <div className="absolute bottom-3 left-3">
            <span className="bg-black/50 backdrop-blur-sm text-white text-xs font-semibold px-2 py-1 rounded-full">
              {drop.mode === 'raffle' ? '🎲 Raffle' : '⚡ First Come'}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2 group-hover:text-fuchsia-300 transition-colors">
            {drop.title}
          </h3>
          
          <p className="text-zinc-400 text-sm mb-4 line-clamp-2">
            {drop.description}
          </p>
          
          {/* Product Count */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs bg-white/5 border border-white/10 text-zinc-300 px-2 py-1 rounded-full">
              {totalProducts} product{totalProducts !== 1 ? 's' : ''}
            </span>
            <span className="text-xs bg-white/5 border border-white/10 text-zinc-300 px-2 py-1 rounded-full">
              {soldPercentage}% sold
            </span>
          </div>
          
          {/* Countdown */}
          <div className="mb-4">
            <DropCountdown 
              startAt={drop.startAt} 
              endAt={drop.endAt}
              className="text-sm"
            />
          </div>
          
          {/* Progress Bar */}
          {status === 'live' && (
            <div className="mb-4">
              <div className="flex justify-between text-xs text-zinc-400 mb-1">
                <span>Sold: {totalSold}</span>
                <span>Total: {totalCap}</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-fuchsia-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${Math.min(soldPercentage, 100)}%` }}
                />
              </div>
            </div>
          )}
          
          {/* CTA */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-zinc-400">
              {status === 'live' ? 'Shop Now' : status === 'ended' ? 'View Details' : 'Get Notified'}
            </span>
            <svg 
              className="w-5 h-5 text-zinc-400 group-hover:text-fuchsia-400 transition-colors" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
