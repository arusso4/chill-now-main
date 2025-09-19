"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Zap, Shield, Heart } from "lucide-react";
import { useRouter } from "next/navigation";

const ComingSoonCTA = () => {
  const router = useRouter();

  const benefits = [
    {
      icon: Shield,
      title: "100% Safe & Legal",
      subtitle: "Background-checked drivers"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      subtitle: "60min average delivery"
    },
    {
      icon: Users,
      title: "Premium Quality",
      subtitle: "Lab-tested products only"
    },
    {
      icon: Heart,
      title: "Community First",
      subtitle: "Join 500+ early adopters"
    }
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-pink-500 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-500 via-pink-600 to-fuchsia-500"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/30 text-white font-bold mb-6 sm:mb-8 text-sm sm:text-base">
          <Zap className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />
          <span>Don't Miss Out</span>
        </div>

        {/* Main headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 leading-tight text-white text-center">
          Ready to Experience the{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-fuchsia-400 drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
            Cannabis Revolution?
          </span>
        </h2>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl md:text-2xl text-pink-100 mb-8 sm:mb-12 max-w-3xl mx-auto px-2 text-center">
          Join thousands of cannabis enthusiasts who are already on the waitlist for the most advanced delivery platform ever built.
        </p>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-3 text-left p-4 sm:p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white flex-shrink-0">
                <benefit.icon className="w-4 h-4" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <div className="font-bold text-sm sm:text-base text-white">{benefit.title}</div>
                <div className="text-xs sm:text-sm text-pink-100">{benefit.subtitle}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button
            size="lg"
            className="bg-gradient-to-r from-emerald-500 to-fuchsia-500 hover:from-emerald-600 hover:to-fuchsia-600 text-white text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-6 w-full sm:w-auto font-bold border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={() => {
              const element = document.getElementById('waitlist-form');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            aria-label="Join the waitlist for early access"
          >
            <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Join the Waitlist
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-6 w-full sm:w-auto font-bold border-2 border-white text-white hover:bg-white/10 transition-all duration-300"
            onClick={() => router.push('/about')}
            aria-label="Learn more about ChillNOW"
          >
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Learn More
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-center">
          <div className="flex items-center gap-2 text-white/80 text-sm">
            <Shield className="w-4 h-4" />
            <span>100% Secure & Legal</span>
          </div>
          <div className="flex items-center gap-2 text-white/80 text-sm">
            <Zap className="w-4 h-4" />
            <span>Lightning Fast Delivery</span>
          </div>
          <div className="flex items-center gap-2 text-white/80 text-sm">
            <Users className="w-4 h-4" />
            <span>Trusted by 500+ People</span>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent -z-10"></div>
      </div>
    </section>
  );
};

export default ComingSoonCTA;
