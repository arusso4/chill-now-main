"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BrandHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-20%,rgba(120,119,198,0.3),rgba(0,0,0,0))]" />
      <div className="container mx-auto px-6 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-purple-400 bg-clip-text text-transparent">
              Be Where the Chill Happens
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join the most innovative cannabis and wellness delivery platform. 
            Get your brand in front of customers who demand quality and convenience.
          </p>

          <div className="mt-8">
            <Link href="#apply">
              <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-fuchsia-500 hover:from-emerald-600 hover:to-fuchsia-600 border-0 px-8 py-6 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Submit Your Brand
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
