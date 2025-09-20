import React from "react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  const scrollToNewsletter = () => {
    document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/20 via-pink-500/20 to-purple-500/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-fuchsia-500/10 via-transparent to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-fuchsia-500/10 to-pink-500/10 backdrop-blur-sm border border-fuchsia-500/20 rounded-3xl p-12 shadow-2xl">
          <h2 
            id="cta-heading"
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-fuchsia-100 to-pink-100 bg-clip-text text-transparent"
          >
            Don't Miss the Next Drop
          </h2>
          
          <p className="text-xl text-zinc-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join the community to get notified about exclusive launches, 
            limited drops, and special offers. Be the first to know when 
            new products hit the marketplace.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToNewsletter}
              className="bg-gradient-to-r from-emerald-500 to-fuchsia-500 hover:from-emerald-600 hover:to-fuchsia-600 text-white rounded-xl px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-fuchsia-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Join Waitlist
            </Button>
            
            <Button
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 rounded-xl px-8 py-4 text-lg font-semibold transition-all duration-300 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-fuchsia-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Follow on Social
            </Button>
          </div>
          
          {/* Stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-zinc-300">Community Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24</div>
              <div className="text-zinc-300">Products Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">60min</div>
              <div className="text-zinc-300">Delivery Time</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-fuchsia-500/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-500" />
    </section>
  );
}
