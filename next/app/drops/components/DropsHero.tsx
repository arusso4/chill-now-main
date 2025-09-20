import React from "react";
import { Button } from "@/components/ui/button";

export default function DropsHero() {
  const scrollToDrops = () => {
    document.getElementById('drops')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToNewsletter = () => {
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-violet-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-fuchsia-500/10 via-transparent to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6">
          <span className="inline-block bg-gradient-to-r from-fuchsia-500/20 to-pink-500/20 border border-fuchsia-500/30 text-fuchsia-300 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            ⚡ Limited Time Only
          </span>
        </div>
        
        <h1 
          id="hero-heading"
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-fuchsia-500 via-pink-500 to-violet-600 bg-clip-text text-transparent leading-tight"
        >
          Limited Drops
        </h1>
        
        <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Exclusive launches, limited editions, and time-boxed releases. 
          Don't miss out on our most coveted products.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={scrollToDrops}
            className="bg-gradient-to-r from-emerald-500 to-fuchsia-500 hover:from-emerald-600 hover:to-fuchsia-600 text-white rounded-xl px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-fuchsia-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            View All Drops
          </Button>
          
          <Button
            onClick={scrollToNewsletter}
            variant="outline"
            className="border-2 border-white/20 text-white hover:bg-white/10 rounded-xl px-8 py-4 text-lg font-semibold transition-all duration-300 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-fuchsia-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Get Drop Alerts
          </Button>
        </div>
        
        {/* Drop Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">3</div>
            <div className="text-zinc-400">Active Drops</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">24h</div>
            <div className="text-zinc-400">Average Duration</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">500+</div>
            <div className="text-zinc-400">Items Sold</div>
          </div>
        </div>
      </div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-fuchsia-500/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-500" />
    </div>
  );
}
