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
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-orange-400 to-red-500 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-25 animate-spin"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Urgency Badge */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent font-bold mb-6 sm:mb-8 text-sm sm:text-base">
          <Clock className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />
          <span>Limited Spots Available for Free Delivery</span>
        </div>
        
        {/* Headline */}
        <h2 id="cta-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 leading-tight">
          Ready to Ditch the Hangover for a{" "}
          <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            High That Hits?
          </span>
        </h2>
        
        {/* Subheadline */}
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto px-2">
          Join the early wave of legends who've already ditched the hangover for something better.
        </p>
        
        {/* Perks List */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12" role="list" aria-label="Early access benefits">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            
            return (
              <li key={index} className="flex items-center gap-3 text-left p-4 sm:p-4 rounded-xl bg-card/50 border border-border">
                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br ${benefit.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-white" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-sm sm:text-base">{benefit.title}</div>
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
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-6 w-full sm:w-auto font-bold border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={() => setIsDialogOpen(true)}
            aria-label="Claim your early access with special benefits"
          >
            Claim Your Early Access
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-6 w-full sm:w-auto font-bold border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300"
            onClick={() => setIsDialogOpen(true)}
            aria-label="Join the waitlist for free"
          >
            Join Waitlist (Free)
          </Button>
        </div>
        
        {/* Social Proof */}
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-muted-foreground">
          <div className="flex -space-x-2" aria-label="User avatars">
            {[
              { id: 1, name: "User 1" },
              { id: 2, name: "User 2" },
              { id: 3, name: "User 3" },
              { id: 4, name: "User 4" }
            ].map(user => (
              <div 
                key={user.id} 
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-green-500 to-blue-600 border-2 border-background" 
                aria-label={`${user.name} avatar`}
                role="img"
              />
            ))}
          </div>
          <span>have you already joined</span>
        </div>
        
        {/* Trust Badge */}
        <p className="text-xs text-muted-foreground mt-4 sm:mt-6 px-2">
          100% secure • No spam • Unsubscribe anytime • Operating in legal markets only
        </p>
      </div>
      
      {/* Email Signup Dialog */}
      <EmailSignupDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </section>
  );
};

export default CTASection;