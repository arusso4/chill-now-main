"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown, Sparkles } from "lucide-react";

const DesktopNav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";

  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      // If on homepage, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on another page, navigate to homepage with section
      router.push(`/#${sectionId}`);
      // Add a small delay to ensure the page loads before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    if (isHomePage) {
      // If already on homepage, scroll to top
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // If on another page, let the Link handle navigation to homepage
  };

  return (
    <>
      <nav className="hidden lg:flex fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto w-full px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              href="/" 
              onClick={handleLogoClick}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center" aria-hidden="true">
                <span className="text-white font-black text-sm">C</span>
              </div>
              <span className="font-black text-lg bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">chillNOW</span>
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('value')}
                className="text-foreground hover:text-green-500 transition-colors font-bold"
              >
                Why Choose Us
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-foreground hover:text-green-500 transition-colors font-bold"
              >
                How It Works
              </button>
              <Link 
                href="/marketplace#quiz-section"
                className="text-foreground hover:text-green-500 transition-colors font-bold"
              >
                Shop
              </Link>
              <Link 
                href="/limited-drops"
                className="text-foreground hover:text-green-500 transition-colors font-bold"
              >
                Limited Drops
              </Link>
              
              {/* More Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  onBlur={() => setTimeout(() => setIsDropdownOpen(false), 150)}
                  className="flex items-center space-x-1 text-foreground hover:text-green-500 transition-colors font-bold"
                >
                  <span>More</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-background/95 backdrop-blur-md border border-border rounded-lg shadow-lg py-2">
                    <button
                      onClick={() => {
                        scrollToSection('bundles');
                        setIsDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-foreground hover:text-green-500 hover:bg-accent/50 transition-colors font-semibold"
                    >
                      Bundle & Chill
                    </button>
                    <button
                      onClick={() => {
                        scrollToSection('snacks');
                        setIsDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-foreground hover:text-green-500 hover:bg-accent/50 transition-colors font-semibold"
                    >
                      Snacks
                    </button>
                    <button
                      onClick={() => {
                        router.push('/testimonials');
                        setIsDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-foreground hover:text-green-500 hover:bg-accent/50 transition-colors font-semibold"
                    >
                      Testimonials
                    </button>
                    <button
                      onClick={() => {
                        router.push('/blog');
                        setIsDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-foreground hover:text-green-500 hover:bg-accent/50 transition-colors font-semibold"
                    >
                      Blog
                    </button>
                    <button
                      onClick={() => {
                        router.push('/about');
                        setIsDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-foreground hover:text-green-500 hover:bg-accent/50 transition-colors font-semibold"
                    >
                      About Us
                    </button>
                    <button
                      onClick={() => {
                        router.push('/add-your-brand');
                        setIsDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-foreground hover:text-green-500 hover:bg-accent/50 transition-colors font-semibold"
                    >
                      Add Your Brand
                    </button>
                    <button
                      onClick={() => {
                        router.push('/driver');
                        setIsDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-foreground hover:text-green-500 hover:bg-accent/50 transition-colors font-semibold"
                    >
                      Sign Up to Drive
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* CTA Button */}
            <Button 
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 font-bold border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => router.push('/coming-soon')}
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Join Waitlist
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default DesktopNav; 