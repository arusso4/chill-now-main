"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Car, DollarSign, Clock, MapPin } from "lucide-react";
import Link from "next/link";

export default function DriverHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-20%,rgba(120,119,198,0.3),rgba(0,0,0,0))] -z-10 pointer-events-none" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse -z-10 pointer-events-none"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-30 animate-bounce -z-10 pointer-events-none"></div>
      
      <div className="relative z-10 container mx-auto px-6 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-bold mb-8">
            <Car className="w-4 h-4" />
            <span>Join Our Driver Network</span>
          </div>
          
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
              Drive for
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
              ChillNOW
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Be part of the cannabis delivery revolution. Earn competitive pay, set your own schedule, and deliver premium products to customers who value quality.
          </p>
          
          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center justify-center gap-3 text-white">
              <DollarSign className="w-6 h-6 text-green-400" />
              <span className="font-semibold">$25-35/hour</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-white">
              <Clock className="w-6 h-6 text-blue-400" />
              <span className="font-semibold">Flexible Hours</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-white">
              <MapPin className="w-6 h-6 text-purple-400" />
              <span className="font-semibold">Your Area</span>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#apply">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-lg px-8 py-4 font-bold border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Apply to Drive
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 font-bold border-2 border-white text-white hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
