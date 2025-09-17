import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Leaf, Flame, Sparkles, Play, Zap } from "lucide-react";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const HeroSection = () => {
  const navigateWithScrollToTop = useScrollToTop();
  
  const scrollToWhyChooseUs = () => {
    const element = document.getElementById('value');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-orange-400 to-red-500 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-25 animate-spin"></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-15 animate-pulse delay-1000"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold mb-8 border-0">
          <Flame className="w-4 h-4" aria-hidden="true" />
          <span>🔥 Early Access Only</span>
        </div>
        
        {/* Headline */}
        <h1 
          id="hero-heading"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight" 
        >
          <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Get It First.
          </span>
          <br />
          <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent">
            Before the World
          </span>
          <br />
          <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent">
            Wakes Up.
          </span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Early access to cannabis, snacks, and more — delivered fast. Join the list and be first when the app drops.
        </p>
        
        {/* Speed Promise */}
        <div className="flex items-center justify-center gap-2 text-green-500 font-bold mb-10 text-lg">
          <Zap className="w-5 h-5" aria-hidden="true" />
          <span>Lightning-fast delivery when we launch</span>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-lg px-8 py-4 font-bold border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={() => navigateWithScrollToTop('/coming-soon')}
            aria-label="Join the waitlist for early access"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Join the Waitlist
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-4 font-bold border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300"
            onClick={scrollToWhyChooseUs}
            aria-label="Learn what makes us different"
          >
            <Play className="w-5 h-5 mr-2" />
            What Makes Us Different?
          </Button>
        </div>
        
        {/* Early Access Perk */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 text-green-500 font-semibold text-sm">
          <Leaf className="w-4 h-4" />
          <span>First 1000 members get VIP perks!</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;