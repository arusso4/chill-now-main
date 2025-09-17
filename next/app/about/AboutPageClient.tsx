"use client";
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Clock, 
  Crown, 
  Users, 
  Car, 
  Store, 
  ShoppingBag,
  ArrowRight,
  Sparkles,
  Flame,
  Star,
  Heart,
  Shield,
  Globe,
  MessageCircle
} from "lucide-react";
import Link from "next/link";

export default function AboutPageClient() {
  const teamMembers = [
    {
      name: "Alex 'The Disruptor' Chen",
      title: "Founder & CEO",
      image: "/images/crew1.jpg",
      bio: "Former tech exec who got tired of waiting 2 hours for delivery. Now building the future of cannabis commerce.",
      funFact: "Can code while high (allegedly)"
    },
    {
      name: "Maya 'Speed Demon' Rodriguez",
      title: "Head of Operations",
      image: "/images/crew2.jpg",
      bio: "Logistics wizard who makes 60-minute delivery look easy. Also a certified yoga instructor.",
      funFact: "Has never been late to anything"
    },
    {
      name: "Jake 'The Chill Master' Thompson",
      title: "Head of Product",
      image: "/images/crew3.jpg",
      bio: "Product designer by day, cannabis connoisseur by night. Believes good design should make you feel something.",
      funFact: "Can identify strains by smell alone"
    },
    {
      name: "Sarah 'The Rebel' Kim",
      title: "Head of Marketing",
      image: "/images/crew4.jpg",
      bio: "Marketing maverick who thinks traditional cannabis marketing is boring. Here to shake things up.",
      funFact: "Once delivered to a celebrity (won't say who)"
    }
  ];

  const howItWorks = [
    {
      step: "1",
      icon: Store,
      title: "Browse Products",
      description: "From licensed retailers with the best selection in town",
      image: "/images/step1.png"
    },
    {
      step: "2", 
      icon: Zap,
      title: "Lightning Delivery",
      description: "Get it delivered in 60 minutes or less",
      image: "/images/step2.png"
    },
    {
      step: "3",
      icon: Crown,
      title: "Chill Like Royalty",
      description: "Premium products, exceptional service, no regrets",
      image: "/images/step3.png"
    }
  ];

  const getInvolvedOptions = [
    {
      title: "Become a Driver",
      description: "Join our rebel delivery force",
      icon: Car,
      link: "/drive#application-form",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Add Your Brand",
      description: "Get your products in front of our community",
      icon: Store,
      link: "/add-your-brand",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Shop the Marketplace",
      description: "Discover premium cannabis products",
      icon: ShoppingBag,
      link: "/marketplace",
      color: "from-green-500 to-blue-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
    
    {/* Hero Section */}
    <section 
      className="relative pt-24 pb-16 px-4 sm:px-6 min-h-screen flex items-center justify-center overflow-hidden"
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

      <div className="relative z-10 max-w-6xl mx-auto text-center fade-in-section">
        <Badge className="mb-6 bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 px-4 py-2 text-sm font-bold">
          <Flame className="w-4 h-4 mr-2" />
          REVOLUTIONARY DELIVERY
        </Badge>
        
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 leading-tight">
          <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            We're Not Just Another
          </span>
          <br />
          <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent">
            Delivery Service.
          </span>
          <br />
          <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent">
            We're a Movement.
          </span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          ChillNOW is redefining cannabis delivery with speed, swagger, and a hint of rebellion.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-lg px-8 py-4 font-bold border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={() => document.getElementById('get-involved')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Join the Movement
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-4 font-bold border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300"
          >
            Watch Our Story
          </Button>
        </div>
      </div>
    </section>

    {/* Our Mission Section */}
    <section className="py-20 px-4 sm:px-6 bg-card/50">
      <div className="max-w-6xl mx-auto fade-in-section">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 px-4 py-2 text-sm font-bold">
              <Heart className="w-4 h-4 mr-2" />
              OUR MISSION
            </Badge>
            
            <h2 className="text-4xl sm:text-5xl font-black leading-tight">
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                We believe cannabis delivery
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                should be fast, safe, and
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                actually fun.
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              That's why we built ChillNOW — to crush boring delivery models and elevate your vibe. 
              We're not here to play it safe. We're here to revolutionize how you experience cannabis delivery.
            </p>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-500" />
                <span className="font-semibold">100% Legal</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-blue-500" />
                <span className="font-semibold">60-Min Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="font-semibold">Premium Quality</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-green-400/20 via-blue-500/20 to-purple-600/20 rounded-2xl p-8 border border-green-500/30">
              <div className="aspect-square bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center">
                <span className="text-6xl font-black text-white">🎯</span>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-orange-400 to-red-500 rounded-full opacity-80 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>

    {/* How ChillNOW Works Section */}
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto fade-in-section">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 px-4 py-2 text-sm font-bold">
            <Zap className="w-4 h-4 mr-2" />
            HOW IT WORKS
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Simple. Fast.
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Revolutionary.
            </span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {howItWorks.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-card p-8 rounded-2xl border border-border hover:border-green-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20 transform hover:-translate-y-2">
                <div className="bg-gradient-to-r from-green-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-black text-2xl">
                  {step.step}
                </div>
                <step.icon className="w-12 h-12 mx-auto mb-4 text-green-500" />
                <h3 className="text-2xl font-bold mb-3 text-center">{step.title}</h3>
                <p className="text-muted-foreground text-center leading-relaxed">{step.description}</p>
              </div>
              {index < howItWorks.length - 1 && (
                <ArrowRight className="hidden md:block absolute top-1/2 -right-4 w-8 h-8 text-green-500 transform -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-lg px-8 py-4 font-bold border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            asChild
          >
            <Link href="/marketplace">
              Browse Marketplace
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>

    {/* Meet the Crew Section */}
    <section className="py-20 px-4 sm:px-6 bg-card/50">
      <div className="max-w-6xl mx-auto fade-in-section">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 px-4 py-2 text-sm font-bold">
            <Users className="w-4 h-4 mr-2" />
            MEET THE CREW
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              The Rebels Behind
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              the Revolution
            </span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="bg-card p-6 rounded-2xl border border-border hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2">
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">{member.name}</h3>
                <p className="text-sm text-muted-foreground mb-3 text-center">{member.title}</p>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{member.bio}</p>
                <div className="text-xs text-green-500 font-semibold text-center">
                  Fun fact: {member.funFact}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Get Involved Section */}
    <section id="get-involved" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto fade-in-section">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 px-4 py-2 text-sm font-bold">
            <Sparkles className="w-4 h-4 mr-2" />
            GET INVOLVED
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Ready to Join
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              the Movement?
            </span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {getInvolvedOptions.map((option, index) => (
            <div key={index} className="group">
              <Link href={option.link}>
                <div className={`bg-gradient-to-br ${option.color} p-8 rounded-2xl text-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer`}>
                  <option.icon className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{option.title}</h3>
                  <p className="text-white/80 mb-4 leading-relaxed">{option.description}</p>
                  <div className="flex items-center text-sm font-semibold">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Our Philosophy Section */}
    <section className="py-20 px-4 sm:px-6 bg-card/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 via-blue-500/5 to-purple-600/5"></div>
      <div className="relative z-10 max-w-4xl mx-auto text-center fade-in-section">
        <Badge className="mb-6 bg-gradient-to-r from-green-500 to-blue-500 text-white border-0 px-4 py-2 text-sm font-bold">
          <Globe className="w-4 h-4 mr-2" />
          OUR PHILOSOPHY
        </Badge>
        
        <blockquote className="text-3xl sm:text-4xl font-black mb-8 leading-tight">
          <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            "We believe in freedom, flavor, and 60-minute delivery — or less."
          </span>
        </blockquote>
        
        <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-8"></div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="font-bold border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300"
            asChild
          >
            <Link href="/blog">
              <MessageCircle className="w-5 h-5 mr-2" />
              Read Our Blog
            </Link>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="font-bold border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            <Shield className="w-5 h-5 mr-2" />
            View FAQ
          </Button>
        </div>
      </div>
    </section>
  </div>
  );
}
