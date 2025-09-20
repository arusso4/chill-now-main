import React from "react";
import Image from "next/image";
import { Drop } from "./DropCard";
import DropCountdown from "./DropCountdown";

interface DropDetailHeroProps {
  drop: Drop;
}

export default function DropDetailHero({ drop }: DropDetailHeroProps) {
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
    <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-violet-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-fuchsia-500/10 via-transparent to-transparent" />
      
      {/* Hero Image Background */}
      {drop.heroImage && drop.heroImage !== "/placeholder.svg" ? (
        <div className="absolute inset-0">
          <Image
            src={drop.heroImage}
            alt={drop.title}
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/20 to-purple-600/20" />
      )}
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Status Badge */}
        <div className="mb-6">
          <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
            status === 'live' 
              ? 'bg-fuchsia-500 text-white' 
              : status === 'ended'
              ? 'bg-zinc-700 text-zinc-400 line-through'
              : 'bg-white/10 text-zinc-300'
          }`}>
            {status === 'live' ? '🔴 Live Now' : status === 'ended' ? 'Drop Ended' : '⏰ Starting Soon'}
          </span>
        </div>
        
        <h1 
          id="hero-heading"
          className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-fuchsia-500 via-pink-500 to-violet-600 bg-clip-text text-transparent leading-tight"
        >
          {drop.title}
        </h1>
        
        <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          {drop.description}
        </p>
        
        {/* Drop Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-1">{totalProducts}</div>
            <div className="text-zinc-400 text-sm">Products</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-1">{drop.mode === 'raffle' ? '🎲' : '⚡'}</div>
            <div className="text-zinc-400 text-sm capitalize">{drop.mode.replace('-', ' ')}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-1">{soldPercentage}%</div>
            <div className="text-zinc-400 text-sm">Sold</div>
          </div>
        </div>
        
        {/* Countdown */}
        <div className="mb-8">
          <DropCountdown 
            startAt={drop.startAt} 
            endAt={drop.endAt}
            className="text-lg"
          />
        </div>
        
        {/* Progress Bar */}
        {status === 'live' && (
          <div className="max-w-md mx-auto mb-8">
            <div className="flex justify-between text-sm text-zinc-400 mb-2">
              <span>Sold: {totalSold}</span>
              <span>Total: {totalCap}</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-fuchsia-500 to-pink-500 h-3 rounded-full transition-all duration-300"
                style={{ width: `${Math.min(soldPercentage, 100)}%` }}
              />
            </div>
          </div>
        )}
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {status === 'live' ? (
            <button className="bg-gradient-to-r from-emerald-500 to-fuchsia-500 hover:from-emerald-600 hover:to-fuchsia-600 text-white rounded-xl px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-fuchsia-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black">
              Shop Now
            </button>
          ) : status === 'ended' ? (
            <button className="bg-white/5 border border-white/20 text-white hover:bg-white/10 rounded-xl px-8 py-4 text-lg font-semibold transition-all duration-300 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-fuchsia-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black">
              View Details
            </button>
          ) : (
            <button className="bg-gradient-to-r from-emerald-500 to-fuchsia-500 hover:from-emerald-600 hover:to-fuchsia-600 text-white rounded-xl px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-fuchsia-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black">
              Get Notified
            </button>
          )}
          
          <button className="border-2 border-white/20 text-white hover:bg-white/10 rounded-xl px-8 py-4 text-lg font-semibold transition-all duration-300 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-fuchsia-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black">
            Share Drop
          </button>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-fuchsia-500/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-500" />
    </div>
  );
}
