"use client";
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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
    closeMenu();
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    if (isHomePage) {
      // If already on homepage, scroll to top
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // If on another page, let the Link handle navigation to homepage
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeMenu();
      buttonRef.current?.focus();
    }
  };

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current && 
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current && 
        !buttonRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Focus management
  useEffect(() => {
    if (isMenuOpen && menuRef.current) {
      const firstLink = menuRef.current.querySelector('a');
      firstLink?.focus();
    }
  }, [isMenuOpen]);

  return (
    <>
      {/* Mobile Navigation */}
      <nav 
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border lg:hidden"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity" onClick={handleLogoClick}>
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center" aria-hidden="true">
              <span className="text-white font-black text-sm">C</span>
            </div>
            <span className="font-black text-lg bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">chillNOW</span>
          </Link>

          {/* Hamburger Menu Button */}
          <Button
            ref={buttonRef}
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            onKeyDown={handleKeyDown}
            className="h-10 w-10"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-haspopup="true"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div 
            ref={menuRef}
            id="mobile-menu"
            className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
            role="menu"
            aria-label="Navigation menu"
            onKeyDown={handleKeyDown}
          >
            <div className="px-4 py-6 space-y-4">
              <nav role="navigation" aria-label="Page navigation">
                <ul className="space-y-3">
                  <li>
                    <button
                      onClick={() => scrollToSection('hero')}
                      className="block w-full text-left text-foreground hover:text-green-500 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded px-2 py-1 font-bold"
                      role="menuitem"
                    >
                      Home
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection('value')}
                      className="block w-full text-left text-foreground hover:text-green-500 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded px-2 py-1 font-bold"
                      role="menuitem"
                    >
                      Why Choose Us
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection('how-it-works')}
                      className="block w-full text-left text-foreground hover:text-green-500 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded px-2 py-1 font-bold"
                      role="menuitem"
                    >
                      How It Works
                    </button>
                  </li>
                  <li>
                    <Link
                      to="/marketplace#quiz-section"
                      className="block w-full text-left text-foreground hover:text-green-500 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded px-2 py-1 font-bold"
                      onClick={closeMenu}
                      role="menuitem"
                    >
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/limited-drops"
                      className="block w-full text-left text-foreground hover:text-green-500 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded px-2 py-1 font-bold"
                      onClick={closeMenu}
                      role="menuitem"
                    >
                      Limited Drops
                    </Link>
                  </li>
                </ul>
                
                {/* More Section */}
                <div className="mt-6 pt-4 border-t border-border">
                  <h3 className="text-sm font-black text-muted-foreground mb-3 px-2">More</h3>
                  <ul className="space-y-3">
                    <li>
                      <button
                        onClick={() => scrollToSection('bundles')}
                        className="block w-full text-left text-foreground hover:text-green-500 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded px-2 py-1 font-semibold"
                        role="menuitem"
                      >
                        Bundle & Chill
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => scrollToSection('snacks')}
                        className="block w-full text-left text-foreground hover:text-green-500 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded px-2 py-1 font-semibold"
                        role="menuitem"
                      >
                        Snacks
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          router.push('/testimonials');
                          closeMenu();
                        }}
                        className="block w-full text-left text-foreground hover:text-green-500 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded px-2 py-1 font-semibold"
                        role="menuitem"
                      >
                        Testimonials
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          router.push('/blog');
                          closeMenu();
                        }}
                        className="block w-full text-left text-foreground hover:text-green-500 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded px-2 py-1 font-semibold"
                        role="menuitem"
                      >
                        Blog
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          router.push('/about');
                          closeMenu();
                        }}
                        className="block w-full text-left text-foreground hover:text-green-500 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded px-2 py-1 font-semibold"
                        role="menuitem"
                      >
                        About Us
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          router.push('/add-your-brand');
                          closeMenu();
                        }}
                        className="block w-full text-left text-foreground hover:text-green-500 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded px-2 py-1 font-semibold"
                        role="menuitem"
                      >
                        Add Your Brand
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          router.push('/driver');
                          closeMenu();
                        }}
                        className="block w-full text-left text-foreground hover:text-green-500 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded px-2 py-1 font-semibold"
                        role="menuitem"
                      >
                        Sign Up to Drive
                      </button>
                    </li>
                  </ul>
                </div>
              </nav>
              
              <div className="pt-4 border-t border-border">
                <Button
                  onClick={() => {
                    router.push('/coming-soon');
                    closeMenu();
                  }}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 font-bold border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  aria-label="Join the waitlist"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Join Waitlist
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default MobileNav; 