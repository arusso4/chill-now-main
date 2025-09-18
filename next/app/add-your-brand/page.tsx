import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  Star, 
  Package, 
  ChevronDown,
  ChevronUp
} from "lucide-react";
import Link from "next/link";
import AddYourBrandClient from "./AddYourBrandClient";

export const metadata: Metadata = {
  title: "Partner with ChillNOW - Add Your Cannabis Brand to Our Platform",
  description: "Partner with ChillNOW to reach more customers. Add your cannabis brand to our premium delivery platform. Fast onboarding, competitive rates, and dedicated support.",
  keywords: "cannabis brand partnership, cannabis vendor, cannabis platform, cannabis distribution, brand partnership, cannabis business",
  openGraph: {
    title: "Partner with ChillNOW - Add Your Cannabis Brand to Our Platform",
    description: "Partner with ChillNOW to reach more customers. Add your cannabis brand to our premium delivery platform. Fast onboarding, competitive rates, and dedicated support.",
    url: "https://chillnow.com/add-your-brand",
    siteName: "ChillNOW",
    images: [
      {
        url: "https://chillnow.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ChillNOW brand partnership opportunities",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@chillnow",
    creator: "@chillnow",
    title: "Partner with ChillNOW - Add Your Cannabis Brand to Our Platform",
    description: "Partner with ChillNOW to reach more customers. Add your cannabis brand to our premium delivery platform. Fast onboarding, competitive rates, and dedicated support.",
    images: ["https://chillnow.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://chillnow.com/add-your-brand",
  },
};

export default function AddYourBrandPage() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
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
              <Link href="#brand-form">
                <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-fuchsia-500 hover:from-emerald-600 hover:to-fuchsia-600 border-0 px-8 py-6 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Submit Your Brand
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Partner with chillNOW?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're building the future of cannabis and wellness delivery. 
              Join brands that are already seeing incredible growth with our platform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-200">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-emerald-600" />
              <h3 className="text-xl font-semibold mb-2">Rapid Growth</h3>
              <p className="text-gray-600">Access to a growing customer base with high purchase intent</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-200">
              <ShieldCheck className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Compliance First</h3>
              <p className="text-gray-600">We handle all regulatory requirements and paperwork</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-200">
              <Zap className="w-12 h-12 mx-auto mb-4 text-purple-600" />
              <h3 className="text-xl font-semibold mb-2">Fast Integration</h3>
              <p className="text-gray-600">Get live on our platform in as little as 2-3 weeks</p>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND TESTIMONIAL SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Leading Brands</h2>
          </div>
          
          <div className="bg-white rounded-2xl p-8 border border-gray-200 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500 to-fuchsia-500 flex items-center justify-center flex-shrink-0">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <blockquote className="text-xl font-medium mb-4 leading-relaxed text-gray-700">
                  "chillNOW has transformed how we reach our customers. The platform's focus on quality and compliance gives us confidence, while their rapid delivery model drives incredible customer satisfaction. Our sales have increased 300% since joining."
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="font-semibold text-gray-900">Sarah Chen</div>
                    <div className="text-sm text-gray-500">Founder, Elevated Wellness Co.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND SHOWCASE SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Brands</h2>
            <p className="text-xl text-gray-600">
              Join these premium brands already delivering with chillNOW
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Elevated Wellness", category: "Cannabis" },
              { name: "Chill Snacks", category: "Premium Snacks" },
              { name: "Zen Botanicals", category: "Wellness" },
              { name: "Urban Chill", category: "Lifestyle" }
            ].map((brand, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:border-emerald-500/50 transition-colors">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-emerald-500/20 to-fuchsia-500/20 rounded-xl flex items-center justify-center">
                  <Package className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{brand.name}</h3>
                <Badge variant="secondary" className="text-sm">
                  {brand.category}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT COMPONENT FOR INTERACTIVE ELEMENTS */}
      <AddYourBrandClient />
    </main>
  );
}
