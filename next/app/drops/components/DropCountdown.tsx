"use client";

import React, { useState, useEffect } from "react";

interface DropCountdownProps {
  startAt: string;
  endAt: string;
  className?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function DropCountdown({ startAt, endAt, className = "" }: DropCountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [status, setStatus] = useState<'upcoming' | 'live' | 'ended'>('upcoming');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const startTime = new Date(startAt).getTime();
      const endTime = new Date(endAt).getTime();

      if (now < startTime) {
        // Drop hasn't started yet
        setStatus('upcoming');
        const difference = startTime - now;
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        };
      } else if (now >= startTime && now < endTime) {
        // Drop is live
        setStatus('live');
        const difference = endTime - now;
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        };
      } else {
        // Drop has ended
        setStatus('ended');
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Set initial time
    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, [startAt, endAt]);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  if (status === 'ended') {
    return (
      <div className={`text-center ${className}`}>
        <div className="text-2xl font-bold text-zinc-400 line-through">
          Drop Ended
        </div>
      </div>
    );
  }

  return (
    <div className={`text-center ${className}`} aria-live="polite">
      <div className="mb-2">
        <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
          status === 'live' 
            ? 'bg-fuchsia-500 text-white' 
            : 'bg-white/10 text-zinc-300'
        }`}>
          {status === 'live' ? '🔴 Live Now' : '⏰ Starting Soon'}
        </span>
      </div>
      
      <div className="grid grid-cols-4 gap-2 max-w-sm mx-auto">
        <div className="bg-white/5 border border-white/10 rounded-lg p-3">
          <div className="text-2xl font-bold text-white" style={{ textShadow: '0 0 10px #ec4899' }}>
            {formatNumber(timeLeft.days)}
          </div>
          <div className="text-xs text-zinc-400 uppercase tracking-wide">Days</div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-lg p-3">
          <div className="text-2xl font-bold text-white" style={{ textShadow: '0 0 10px #ec4899' }}>
            {formatNumber(timeLeft.hours)}
          </div>
          <div className="text-xs text-zinc-400 uppercase tracking-wide">Hours</div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-lg p-3">
          <div className="text-2xl font-bold text-white" style={{ textShadow: '0 0 10px #ec4899' }}>
            {formatNumber(timeLeft.minutes)}
          </div>
          <div className="text-xs text-zinc-400 uppercase tracking-wide">Mins</div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-lg p-3">
          <div className="text-2xl font-bold text-white" style={{ textShadow: '0 0 10px #ec4899' }}>
            {formatNumber(timeLeft.seconds)}
          </div>
          <div className="text-xs text-zinc-400 uppercase tracking-wide">Secs</div>
        </div>
      </div>
      
      <div className="mt-3 text-sm text-zinc-400">
        {status === 'live' ? 'Drop ends in' : 'Drop starts in'}
      </div>
    </div>
  );
}
