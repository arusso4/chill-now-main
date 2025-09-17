"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

// List of internal pages that should use scroll-to-top behavior
const INTERNAL_PAGES = [
  '/blog',
  '/about',
  '/faq',
  '/safety',
  '/drive',
  '/driver',
  '/add-your-brand',
  '/marketplace',
  '/testimonials',
  '/coming-soon'
];

export const useScrollToTop = () => {
  const pathname = usePathname();
  
  useEffect(() => {
    // Check if this is an internal page that should use scroll-to-top
    const isInternalPage = INTERNAL_PAGES.some(page => pathname.startsWith(page));
    
    if (isInternalPage) {
      // Disable smooth scrolling temporarily
      const originalScrollBehavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = 'auto';
      
      // Scroll to top immediately
      window.scrollTo(0, 0);
      
      // Restore smooth scrolling after a brief delay
      setTimeout(() => {
        document.documentElement.style.scrollBehavior = originalScrollBehavior;
      }, 100);
    }
  }, [pathname]);

  const navigateWithScrollToTop = (path: string) => {
    // For Next.js, we'll use window.location for navigation
    window.location.href = path;
  };

  return navigateWithScrollToTop;
}; 