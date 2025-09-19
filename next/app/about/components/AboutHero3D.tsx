"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Zap } from "lucide-react";
import { useRouter } from "next/navigation";

// Dynamic import for 3D components with SSR disabled
const Canvas = dynamic(() => import("@react-three/fiber").then(m => m.Canvas), { ssr: false });

// 3D Scene Component
const Scene = () => {
  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} />
      
      {/* Floating objects with different materials */}
      <Float speed={1.5} rotationIntensity={0.6} floatIntensity={0.6}>
        <mesh>
          <icosahedronGeometry args={[1.2, 0]} />
          <meshStandardMaterial 
            color="#34d399" 
            metalness={0.2} 
            roughness={0.3}
            emissive="#34d399"
            emissiveIntensity={0.1}
          />
        </mesh>
      </Float>
      
      <Float speed={1} rotationIntensity={0.4} floatIntensity={0.4}>
        <mesh position={[2, -0.5, -1]}>
          <icosahedronGeometry args={[0.8, 0]} />
          <meshStandardMaterial 
            color="#22d3ee" 
            metalness={0.2} 
            roughness={0.3}
            emissive="#22d3ee"
            emissiveIntensity={0.1}
          />
        </mesh>
      </Float>
      
      <Float speed={1.2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh position={[-2, 0.3, 0]}>
          <icosahedronGeometry args={[0.9, 0]} />
          <meshStandardMaterial 
            color="#e879f9" 
            metalness={0.2} 
            roughness={0.3}
            emissive="#e879f9"
            emissiveIntensity={0.1}
          />
        </mesh>
      </Float>
      
      {/* Additional smaller floating elements */}
      <Float speed={0.8} rotationIntensity={0.3} floatIntensity={0.3}>
        <mesh position={[1, 1.5, -2]}>
          <octahedronGeometry args={[0.4, 0]} />
          <meshStandardMaterial 
            color="#10b981" 
            metalness={0.1} 
            roughness={0.4}
            transparent
            opacity={0.7}
          />
        </mesh>
      </Float>
      
      <Float speed={1.3} rotationIntensity={0.4} floatIntensity={0.4}>
        <mesh position={[-1.5, -1, 1]}>
          <tetrahedronGeometry args={[0.5, 0]} />
          <meshStandardMaterial 
            color="#f59e0b" 
            metalness={0.1} 
            roughness={0.4}
            transparent
            opacity={0.8}
          />
        </mesh>
      </Float>
    </>
  );
};

// Float component for animations
const Float = ({ children, speed = 1, rotationIntensity = 1, floatIntensity = 1, ...props }: any) => {
  const [time, setTime] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => prev + 0.01);
    }, 16);
    return () => clearInterval(interval);
  }, []);
  
  const y = Math.sin(time * speed) * floatIntensity;
  const rotationY = time * speed * rotationIntensity;
  
  return (
    <group {...props} position={[props.position?.[0] || 0, (props.position?.[1] || 0) + y, props.position?.[2] || 0]} rotation={[0, rotationY, 0]}>
      {children}
    </group>
  );
};

export default function AboutHero3D() {
  const router = useRouter();
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setReducedMotion(mediaQuery.matches);
      
      const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  return (
    <section className="relative h-[70vh] min-h-[560px] overflow-hidden">
      {/* 3D Canvas Background */}
      {isClient && !reducedMotion && (
        <Canvas 
          dpr={[1, 1.5]} 
          gl={{ antialias: true, alpha: true }} 
          camera={{ fov: 60, position: [0, 0, 7] }}
          className="absolute inset-0"
        >
          <Scene />
        </Canvas>
      )}
      
      {/* Fallback gradient for reduced motion or SSR */}
      {(reducedMotion || !isClient) && (
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-teal-900/20 to-fuchsia-900/20" />
      )}

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-emerald-400/20 to-fuchsia-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-teal-400/20 to-emerald-500/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-r from-fuchsia-400/20 to-pink-500/20 rounded-full animate-spin"></div>
      </div>
      
      {/* Gradient overlay for depth */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(52,211,153,0.15),rgba(0,0,0,0))]" />

      {/* Content overlay */}
      <div className="absolute inset-0 grid place-items-center px-6 text-center">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-fuchsia-500/20 border border-emerald-500/30 text-emerald-500 font-bold mb-8 text-sm">
            <Zap className="w-4 h-4" aria-hidden="true" />
            <span>Revolutionizing Cannabis Delivery</span>
          </div>
          
          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-fuchsia-400 drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
              Be Where the
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-fuchsia-400 drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
              Chill Happens
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            We're building the future of cannabis delivery—one safe, fast, and reliable delivery at a time. 
            Join us in creating a world where premium cannabis is just a tap away.
          </p>
          
          {/* Stats preview */}
          <div className="flex items-center justify-center gap-2 text-emerald-500 font-bold mb-10 text-lg">
            <Users className="w-5 h-5" aria-hidden="true" />
            <span>500+ early adopters • 60min average delivery • 100% background-checked drivers</span>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-emerald-500 to-fuchsia-500 hover:from-emerald-600 hover:to-fuchsia-600 text-white text-lg px-8 py-4 font-bold border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => router.push('/add-your-brand')}
              aria-label="Partner with ChillNOW"
            >
              <Users className="w-5 h-5 mr-2" />
              Partner With Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 font-bold border-2 border-emerald-500 text-emerald-500 hover:bg-accent/50 transition-all duration-300"
              onClick={() => router.push('/drive')}
              aria-label="Apply to drive for ChillNOW"
            >
              <Zap className="w-5 h-5 mr-2" />
              Apply to Drive
            </Button>
          </div>
          
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-fuchsia-500/10 border border-emerald-500/20 text-emerald-500 font-semibold text-sm">
            <span>Operating in legal markets only</span>
          </div>
        </div>
      </div>
    </section>
  );
}
