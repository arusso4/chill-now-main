import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  ShoppingBag, 
  Coffee, 
  Candy, 
  Shirt, 
  Zap, 
  Package, 
  Star, 
  ArrowRight,
  Filter,
  Search,
  Mail,
  ChevronLeft,
  ChevronRight,
  Leaf,
  Sparkles
} from "lucide-react";

import ChillFinderQuiz from "@/components/ChillFinderQuiz";

const Marketplace = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Handle anchor link scrolling
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Remove the # from the hash
      const elementId = hash.substring(1);
      const element = document.getElementById(elementId);
      if (element) {
        // Add a small delay to ensure the page is fully loaded
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'center'
          });
          
          // Add pulse animation if scrolling to quiz section
          if (elementId === 'quiz-section') {
            element.classList.add('pulse-on-load');
            setTimeout(() => {
              element.classList.remove('pulse-on-load');
            }, 1000);
          }
        }, 100);
      }
    }
  }, []);

  // Category data
  const categories = [
    { id: "all", name: "All Products", icon: ShoppingBag },
    { id: "beverages", name: "Beverages", icon: Coffee },
    { id: "gummies", name: "Gummies", icon: Candy },
    { id: "apparel", name: "Apparel", icon: Shirt },
    { id: "accessories", name: "Accessories", icon: Zap },
    { id: "bundles", name: "Bundles", icon: Package },
  ];

  // Featured brands data
  const featuredBrands = [
    {
      id: "chill-co",
      name: "Chill Co.",
      logo: "🌿",
      tagline: "Premium wellness essentials",
      description: "Crafting the finest cannabis and wellness products for your daily chill."
    },
    {
      id: "zen-herbs",
      name: "Zen Herbs",
      logo: "🧘",
      tagline: "Natural relaxation solutions",
      description: "Ancient wisdom meets modern wellness for ultimate tranquility."
    },
    {
      id: "vibe-supply",
      name: "Vibe Supply",
      logo: "✨",
      tagline: "Elevate your lifestyle",
      description: "Curated accessories and apparel for the modern cannabis enthusiast."
    },
    {
      id: "calm-brews",
      name: "Calm Brews",
      logo: "☕",
      tagline: "Relaxing beverages",
      description: "Delicious drinks that help you unwind and find your center."
    },
    {
      id: "happy-bites",
      name: "Happy Bites",
      logo: "🍬",
      tagline: "Joyful edibles",
      description: "Tasty treats that bring happiness and wellness in every bite."
    },
    {
      id: "chill-pack",
      name: "Chill Pack",
      logo: "📦",
      tagline: "Complete chill kits",
      description: "Everything you need for the perfect chill session in one box."
    }
  ];

  // Product data
  const products = [
    {
      id: 1,
      name: "Chill Mint Tea",
      price: 24.99,
      category: "beverages",
      brand: "chill-co",
      image: "🍵",
      tag: "THC-Free",
      description: "Soothing mint tea blend for relaxation"
    },
    {
      id: 2,
      name: "Zen Gummies",
      price: 32.99,
      category: "gummies",
      brand: "zen-herbs",
      image: "🍬",
      tag: "Delta-9",
      description: "Calming gummies with natural herbs"
    },
    {
      id: 3,
      name: "Chill Hoodie",
      price: 49.99,
      category: "apparel",
      brand: "vibe-supply",
      image: "👕",
      tag: "Chill Pick",
      description: "Comfortable hoodie for ultimate relaxation"
    },
    {
      id: 4,
      name: "Vibe Grinder",
      price: 19.99,
      category: "accessories",
      brand: "vibe-supply",
      image: "⚙️",
      tag: "Essential",
      description: "Premium quality herb grinder"
    },
    {
      id: 5,
      name: "Calm Coffee Blend",
      price: 28.99,
      category: "beverages",
      brand: "calm-brews",
      image: "☕",
      tag: "THC-Free",
      description: "Relaxing coffee with adaptogens"
    },
    {
      id: 6,
      name: "Happy Gummy Bears",
      price: 29.99,
      category: "gummies",
      brand: "happy-bites",
      image: "🐻",
      tag: "Delta-9",
      description: "Fruity gummies for mood enhancement"
    },
    {
      id: 7,
      name: "Chill Starter Kit",
      price: 89.99,
      category: "bundles",
      brand: "chill-pack",
      image: "📦",
      tag: "Best Value",
      description: "Complete kit for beginners"
    },
    {
      id: 8,
      name: "Zen T-Shirt",
      price: 34.99,
      category: "apparel",
      brand: "vibe-supply",
      image: "👕",
      tag: "Chill Pick",
      description: "Comfortable zen-themed t-shirt"
    }
  ];

  // Filter products based on category and search
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const scrollToBrand = (brandId: string) => {
    const element = document.getElementById(`brand-${brandId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>ChillNOW Marketplace - Premium Cannabis Products & Delivery</title>
        <meta 
          name="description" 
          content="Browse premium cannabis products including THC drinks, CBD gummies, wellness tinctures, and more. Fast delivery with lab-tested, COA-verified quality." 
        />
        <meta name="keywords" content="cannabis marketplace, THC drinks, CBD products, cannabis gummies, wellness tinctures, premium cannabis, lab-tested products" />
        <link rel="canonical" href="https://chillnow.com/marketplace" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://chillnow.com/marketplace" />
        <meta property="og:title" content="ChillNOW Marketplace - Premium Cannabis Products & Delivery" />
        <meta property="og:description" content="Browse premium cannabis products including THC drinks, CBD gummies, wellness tinctures, and more. Fast delivery with lab-tested, COA-verified quality." />
        <meta property="og:image" content="https://chillnow.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="ChillNOW" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@chillnow" />
        <meta name="twitter:creator" content="@chillnow" />
        <meta name="twitter:url" content="https://chillnow.com/marketplace" />
        <meta name="twitter:title" content="ChillNOW Marketplace - Premium Cannabis Products & Delivery" />
        <meta name="twitter:description" content="Browse premium cannabis products including THC drinks, CBD gummies, wellness tinctures, and more. Fast delivery with lab-tested, COA-verified quality." />
        <meta name="twitter:image" content="https://chillnow.com/og-image.jpg" />
        <meta name="twitter:image:alt" content="ChillNOW cannabis marketplace products" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-6 animate-fade-up">
            <Leaf className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Curated Selection</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-up">
            Welcome to the{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Chill Marketplace
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-up">
            Explore cannabis, wellness, and chill essentials from trusted partners.
          </p>
          
          {/* Embedded Quiz CTA Block */}
          <div id="quiz-section" className="max-w-2xl mx-auto mb-8 animate-fade-up">
            <div className="bg-card/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-border/50 quiz-cta-card">
              <div className="text-4xl mb-4">🎯</div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                Find Your Perfect Chill
              </h2>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                Take the Chill Finder quiz to get personalized picks tailored to your preferences and lifestyle. Takes less than 1 minute.
              </p>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-lg px-8 py-4 font-bold border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 quiz-cta-pulse"
                onClick={() => {
                  const quizSection = document.getElementById('quiz');
                  if (quizSection) {
                    quizSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Take the Quiz
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <p className="text-sm text-muted-foreground mt-4 font-semibold">
                🔥 Already helped 3,000+ users chill smarter.
              </p>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative animate-fade-up">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-card/50 border-border"
            />
          </div>
        </div>
      </section>



      {/* Category Filters */}
      <section className="py-8 px-4 sm:px-6 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">Filter by:</span>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex items-center gap-2"
                >
                  <Icon className="w-4 h-4" />
                  {category.name}
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Chill Finder Quiz Section */}
      <section id="quiz" className="py-16 px-4 sm:px-6 bg-card/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-hero rounded-2xl p-8 border border-border quiz-section">
            <div className="text-6xl mb-6">🎯</div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Take the Full Chill Finder Quiz
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get detailed personalized recommendations based on your preferences, lifestyle, and chill goals.
            </p>
            <ChillFinderQuiz />
          </div>
        </div>
      </section>

      {/* Featured Brands Carousel */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Brands</h2>
            <p className="text-lg text-muted-foreground">
              Discover trusted partners crafting premium chill essentials
            </p>
          </div>
          
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
              {featuredBrands.map((brand) => (
                <div
                  key={brand.id}
                  id={`brand-${brand.id}`}
                  className="flex-shrink-0 w-80 bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-all duration-300 cursor-pointer"
                  onClick={() => scrollToBrand(brand.id)}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl">{brand.logo}</div>
                    <div>
                      <h3 className="font-semibold text-lg">{brand.name}</h3>
                      <p className="text-sm text-muted-foreground">{brand.tagline}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{brand.description}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    View Products
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 px-4 sm:px-6 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">All Products</h2>
            <p className="text-lg text-muted-foreground">
              {filteredProducts.length} products found
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-center mb-4">
                  <div className="text-6xl mb-4">{product.image}</div>
                  {product.tag && (
                    <Badge variant="secondary" className="mb-2">
                      {product.tag}
                    </Badge>
                  )}
                </div>
                
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold">${product.price}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">4.8</span>
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Buy Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">No products found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </section>



      {/* Email Capture */}
      <section className="py-16 px-4 sm:px-6 bg-card/50">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="flex justify-center mb-4">
              <svg 
                className="w-16 h-16 text-green-500 hover:scale-110 transition-transform duration-300 hover:drop-shadow-lg"
                viewBox="0 0 64 64" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Envelope base */}
                <rect x="8" y="20" width="48" height="32" rx="4" fill="currentColor" opacity="0.1"/>
                <path d="M8 20L32 36L56 20" stroke="currentColor" strokeWidth="2" fill="none"/>
                
                {/* Cannabis leaf overlay */}
                <g transform="translate(20, 28)">
                  <path 
                    d="M12 0C12 0 8 4 4 8C0 12 0 16 0 20C0 24 4 28 8 32C12 36 16 36 20 32C24 28 28 24 28 20C28 16 24 12 20 8C16 4 12 0 12 0Z" 
                    fill="currentColor" 
                    opacity="0.8"
                  />
                  <path 
                    d="M12 0C12 0 16 4 20 8C24 12 28 16 28 20C28 24 24 28 20 32C16 36 12 36 8 32C4 28 0 24 0 20C0 16 4 12 8 8C12 4 12 0 12 0Z" 
                    fill="currentColor" 
                    opacity="0.6"
                  />
                  <circle cx="12" cy="20" r="2" fill="currentColor" opacity="0.9"/>
                </g>
                
                {/* Chill face elements */}
                <g transform="translate(24, 40)">
                  <circle cx="4" cy="4" r="1" fill="currentColor" opacity="0.7"/>
                  <circle cx="12" cy="4" r="1" fill="currentColor" opacity="0.7"/>
                  <path d="M4 8Q8 10 12 8" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.7"/>
                </g>
                
                {/* Sticker-style border */}
                <circle cx="32" cy="36" r="30" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3"/>
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Get exclusive drops & chill deals
            </h2>
            <p className="text-muted-foreground mb-6">
              Be the first to know about new products, special offers, and chill events.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button className="bg-gradient-primary hover:bg-gradient-primary/90">
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground mt-4">
              No spam, just chill vibes. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Marketplace; 