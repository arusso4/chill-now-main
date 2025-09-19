"use client";
import React, { useState, useEffect } from "react";
import { Clock } from "lucide-react";

const ComingSoonTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Check for reduced motion preference
    const prefersReducedMotion = typeof window !== 'undefined' && 
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // Show static countdown for reduced motion
      setTimeLeft({ days: 45, hours: 12, minutes: 30, seconds: 0 });
      return;
    }

    // Set launch date to Q1 2025 (March 1, 2025)
    const launchDate = new Date('2025-03-01T00:00:00Z').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = launchDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!isClient) {
    // SSR fallback
    return (
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-fuchsia-500/10 border border-emerald-500/20 text-emerald-500 font-semibold text-sm mb-8">
            <Clock className="w-4 h-4" />
            <span>Launching Soon</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-fuchsia-400 drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
              Countdown to Launch
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We're putting the finishing touches on something amazing.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-fuchsia-500/10 border border-emerald-500/20 text-emerald-500 font-semibold text-sm mb-8">
          <Clock className="w-4 h-4" />
          <span>Launch Countdown</span>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-fuchsia-400 drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
            Countdown to Launch
          </span>
        </h2>
        <p className="text-muted-foreground text-lg mb-8 sm:mb-12">
          The future of cannabis delivery is launching in:
        </p>

        {/* Countdown Timer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds }
          ].map((item, index) => (
            <div key={index} className="rounded-2xl border border-border bg-card p-4 sm:p-6 shadow-sm">
              <div className="text-2xl sm:text-3xl md:text-4xl font-black mb-2">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-fuchsia-400 drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
                  {item.value.toString().padStart(2, '0')}
                </span>
              </div>
              <div className="text-sm text-muted-foreground font-medium uppercase tracking-wide">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <div className="mt-8 sm:mt-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-fuchsia-500/10 border border-emerald-500/20 text-emerald-500 font-semibold text-sm">
            <Clock className="w-4 h-4" />
            <span>Be the first to experience the revolution</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonTimer;
