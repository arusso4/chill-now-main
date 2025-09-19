"use client";
import React, { useState, useEffect } from "react";
import { DIGITS, CELL_ROWS, CELL_COLS } from "./dotFonts";

// Target: January 1, 2026 00:00:00 UTC
const TARGET = Date.UTC(2026, 0, 1, 0, 0, 0);

interface DotMatrixDigitProps {
  char: string;
  className?: string;
}

const DotMatrixDigit: React.FC<DotMatrixDigitProps> = ({ char, className = "" }) => {
  const matrix = DIGITS[char];
  
  if (!matrix) return null;

  const isColon = char === ':';
  const cols = isColon ? 2 : CELL_COLS;

  return (
    <div className={`inline-block ${className}`}>
      <div 
        className="grid gap-1 md:gap-1.5"
        style={{
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${CELL_ROWS}, minmax(0, 1fr))`
        }}
      >
        {matrix.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`h-2.5 w-2.5 md:h-3 md:w-3 rounded-full transition-all duration-200 ${
                cell
                  ? 'bg-gradient-to-br from-emerald-400 via-teal-300 to-fuchsia-400 shadow-[0_0_10px_rgba(52,211,153,0.6)]'
                  : 'bg-white/10'
              }`}
              style={{
                boxShadow: cell 
                  ? '0 0 10px rgba(52, 211, 153, 0.6), 0 0 20px rgba(34, 211, 238, 0.3), 0 0 30px rgba(232, 121, 249, 0.2)'
                  : undefined
              }}
            />
          ))
        )}
      </div>
    </div>
  );
};

const Countdown: React.FC = () => {
  const [now, setNow] = useState<number>(0);
  const [canRender, setCanRender] = useState<boolean>(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    // Client-side only
    setCanRender(true);
    
    // Check for reduced motion preference
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);
      
      const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
      mediaQuery.addEventListener('change', handleChange);
      
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  useEffect(() => {
    if (!canRender) return;

    const updateTime = () => {
      setNow(Date.now());
    };

    updateTime(); // Initial update
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, [canRender]);

  if (!canRender) {
    // SSR fallback
    return (
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-fuchsia-500/10 border border-emerald-500/20 text-emerald-500 font-semibold text-sm mb-8">
          <span>Loading countdown...</span>
        </div>
      </div>
    );
  }

  const remaining = Math.max(0, TARGET - now);
  
  const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

  const timeString = `${days.toString().padStart(2, '0')}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  const screenReaderText = `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds remaining until January 1, 2026`;

  return (
    <div className="text-center" aria-live="polite" aria-label={screenReaderText}>
      {/* Screen reader text */}
      <div className="sr-only">{screenReaderText}</div>
      
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-fuchsia-500/10 border border-emerald-500/20 text-emerald-500 font-semibold text-sm mb-8">
        <span>Countdown to Launch</span>
      </div>

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 sm:mb-6">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-fuchsia-400 drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
          Launch Countdown
        </span>
      </h2>
      <p className="text-muted-foreground text-lg mb-8 sm:mb-12">
        The future of cannabis delivery launches in:
      </p>

      {/* Dot Matrix Display */}
      <div className="flex items-center justify-center gap-2 md:gap-4 mb-8">
        {/* Days */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1 md:gap-2">
            <DotMatrixDigit char={timeString[0]} className="mx-1 md:mx-2" />
            <DotMatrixDigit char={timeString[1]} className="mx-1 md:mx-2" />
          </div>
          <div className="mt-4 text-xs md:text-sm text-muted-foreground font-medium uppercase tracking-wide">
            Days
          </div>
        </div>

        {/* Colon */}
        <div className="flex items-center justify-center h-full">
          <DotMatrixDigit char=":" className="mx-1 md:mx-2" />
        </div>

        {/* Hours */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1 md:gap-2">
            <DotMatrixDigit char={timeString[3]} className="mx-1 md:mx-2" />
            <DotMatrixDigit char={timeString[4]} className="mx-1 md:mx-2" />
          </div>
          <div className="mt-4 text-xs md:text-sm text-muted-foreground font-medium uppercase tracking-wide">
            Hours
          </div>
        </div>

        {/* Colon */}
        <div className="flex items-center justify-center h-full">
          <DotMatrixDigit char=":" className="mx-1 md:mx-2" />
        </div>

        {/* Minutes */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1 md:gap-2">
            <DotMatrixDigit char={timeString[6]} className="mx-1 md:mx-2" />
            <DotMatrixDigit char={timeString[7]} className="mx-1 md:mx-2" />
          </div>
          <div className="mt-4 text-xs md:text-sm text-muted-foreground font-medium uppercase tracking-wide">
            Minutes
          </div>
        </div>

        {/* Colon */}
        <div className="flex items-center justify-center h-full">
          <DotMatrixDigit char=":" className="mx-1 md:mx-2" />
        </div>

        {/* Seconds */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1 md:gap-2">
            <DotMatrixDigit char={timeString[9]} className="mx-1 md:mx-2" />
            <DotMatrixDigit char={timeString[10]} className="mx-1 md:mx-2" />
          </div>
          <div className="mt-4 text-xs md:text-sm text-muted-foreground font-medium uppercase tracking-wide">
            Seconds
          </div>
        </div>
      </div>

      {/* Bottom message */}
      <div className="mt-8 sm:mt-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-fuchsia-500/10 border border-emerald-500/20 text-emerald-500 font-semibold text-sm">
          <span>Be the first to experience the revolution</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
