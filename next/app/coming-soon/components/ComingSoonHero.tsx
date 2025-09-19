"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users, Zap } from "lucide-react";
import { useRouter } from "next/navigation";

const ComingSoonHero = () => {
  const router = useRouter();
  
  return (
    <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-emerald-400 to-fuchsia-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-r from-fuchsia-400 to-pink-500 rounded-full opacity-25 animate-spin"></div>
      </div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-fuchsia-500 text-white text-sm font-bold mb-8 border-0">
          <Clock className="w-4 h-4" aria-hidden="true" />
          <span>Coming Soon</span>
        </div>
        
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-fuchsia-400 drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
            The Future of
          </span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-fuchsia-400 drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
            Cannabis Delivery
          </span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-fuchsia-400 drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
            Is Almost Here
          </span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Join thousands of cannabis enthusiasts who are already on the waitlist for the most advanced, 
          safe, and reliable cannabis delivery platform ever built.
        </p>
        
        {/* Stats preview */}
        <div className="flex items-center justify-center gap-2 text-emerald-500 font-bold mb-10 text-lg">
          <Users className="w-5 h-5" aria-hidden="true" />
          <span>500+ people already waiting • Launching in 3 cities • 60min average delivery</span>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-emerald-500 to-fuchsia-500 hover:from-emerald-600 hover:to-fuchsia-600 text-white text-lg px-8 py-4 font-bold border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={() => {
              const element = document.getElementById('waitlist-form');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            aria-label="Join the waitlist for early access"
          >
            <Users className="w-5 h-5 mr-2" />
            Join the Waitlist
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-4 font-bold border-2 border-emerald-500 text-emerald-500 hover:bg-accent/50 transition-all duration-300"
            onClick={() => {
              const element = document.getElementById('features');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            aria-label="Learn what's coming"
          >
            <Zap className="w-5 h-5 mr-2" />
            What's Coming
          </Button>
        </div>
        
        {/* Trust badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-fuchsia-500/20 border border-emerald-500/30 text-emerald-500 font-semibold text-sm">
          <Clock className="w-4 h-4" />
          <span>Launching Q1 2025 • Legal markets only</span>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonHero;
