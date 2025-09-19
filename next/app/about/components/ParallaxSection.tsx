"use client";
import React, { useEffect, useRef, useState } from "react";

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: "up" | "down";
  offset?: number;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  className = "",
  speed = 0.5,
  direction = "up",
  offset = 0
}) => {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        const elementHeight = rect.height;
        const windowHeight = window.innerHeight;
        
        // Calculate if element is in viewport
        const isInView = rect.top < windowHeight && rect.bottom > 0;
        
        if (isInView) {
          const scrolled = window.scrollY - elementTop + windowHeight;
          const progress = Math.max(0, Math.min(1, scrolled / (windowHeight + elementHeight)));
          
          setScrollY(progress * speed * 100);
        }
      }
    };

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll(); // Initial call
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  const transform = direction === "up" 
    ? `translateY(${scrollY}px)` 
    : `translateY(-${scrollY}px)`;

  return (
    <div 
      ref={sectionRef}
      className={`relative ${className}`}
      style={{ 
        transform: transform,
        willChange: 'transform'
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxSection;
