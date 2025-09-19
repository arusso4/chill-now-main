"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Gift, Clock, Star, Zap, Shield, Truck } from "lucide-react";
import { EmailSignupDialog } from "@/components/EmailSignupDialog";

const CTASection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  // Define benefits data for easy editing
  const benefits = [
    {
      icon: Gift,
      title: "50% off first order",
      subtitle: "Limited time launch offer",
      gradient: "from-green-500 to-blue-600"
    },
    {
      icon: Truck,
      title: "Free delivery for 6 months",
      subtitle: "Fast, reliable, contactless",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Shield,
      title: "Premium quality guarantee",
      subtitle: "Lab-tested, COA verified",
      gradient: "from-orange-500 to-red-600"
    }
  ];
  
  return (
    <section className="relative py-16 bg-pink-500 px-4 sm:px-6"
    >
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Urgency Badge */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/20 border border-white/30 text-white font-bold mb-6 sm:mb-8 text-sm sm:text-base">
          <Clock className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />
          <span>Limited Spots Available for Free Delivery</span>
        </div>
        
        {/* Headline */}
        <h2 id="cta-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 leading-tight text-white">
          Ready to Ditch the Hangover for a{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-fuchsia-400 drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
            High That Hits?
          </span>
        </h2>
        
        {/* Subheadline */}
        <p className="text-lg sm:text-xl md:text-2xl text-pink-100 mb-8 sm:mb-12 max-w-2xl mx-auto px-2">
          Join the early wave of legends who've already ditched the hangover for something better.
        </p>
        
        {/* Perks List */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12" role="list" aria-label="Early access benefits">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            
            return (
              <li key={index} className="flex items-center gap-3 text-left p-4 sm:p-4 rounded-xl bg-white rounded-2xl shadow-lg">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400 flex-shrink-0">
                  <IconComponent className="w-4 h-4" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-sm sm:text-base text-foreground">{benefit.title}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{benefit.subtitle}</div>
                </div>
              </li>
            );
          })}
        </ul>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-emerald-500 to-fuchsia-500 hover:from-emerald-600 hover:to-fuchsia-600 text-white text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-6 w-full sm:w-auto font-bold border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={() => setIsDialogOpen(true)}
            aria-label="Claim your early access with special benefits"
          >
            Claim Your Early Access
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-6 w-full sm:w-auto font-bold border-2 border-white text-white hover:bg-accent/50 transition-all duration-300"
            onClick={() => setIsDialogOpen(true)}
            aria-label="Join the waitlist for free"
          >
            Join Waitlist (Free)
          </Button>
        </div>
        
        {/* Social Proof */}
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-pink-100">
          <div className="flex -space-x-2" aria-label="User avatars">
            {[
              { id: 1, name: "User 1" },
              { id: 2, name: "User 2" },
              { id: 3, name: "User 3" },
              { id: 4, name: "User 4" }
            ].map(user => (
              <div 
                key={user.id} 
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-emerald-500 to-fuchsia-500 border-2 border-white" 
                aria-label={`${user.name} avatar`}
                role="img"
              />
            ))}
          </div>
          <span>have you already joined</span>
        </div>
        
        {/* Trust Badge */}
        <p className="text-xs text-pink-100 mt-4 sm:mt-6 px-2">
          100% secure • No spam • Unsubscribe anytime • Operating in legal markets only
        </p>
      </div>
      
      {/* Email Signup Dialog */}
      <EmailSignupDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </section>
  );
};

export default CTASection;