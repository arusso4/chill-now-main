"use client";
import React, { useEffect, useRef, useState } from "react";
import { Calendar, Rocket, Users, MapPin, Award, Target } from "lucide-react";

const AboutTimeline = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);

  const timelineItems = [
    {
      year: "2024",
      quarter: "Q1",
      title: "The Vision",
      description: "Founded with a simple mission: make premium cannabis delivery as easy as ordering food.",
      icon: Target,
      color: "emerald"
    },
    {
      year: "2024",
      quarter: "Q2",
      title: "Building the Foundation",
      description: "Assembled our core team and developed the technology platform that powers our operations.",
      icon: Rocket,
      color: "teal"
    },
    {
      year: "2024",
      quarter: "Q3",
      title: "Driver Network Launch",
      description: "Recruited and onboarded our first 100 background-checked delivery partners.",
      icon: Users,
      color: "fuchsia"
    },
    {
      year: "2024",
      quarter: "Q4",
      title: "Market Expansion",
      description: "Launched in our first three cities with plans for rapid expansion across legal markets.",
      icon: MapPin,
      color: "emerald"
    },
    {
      year: "2025",
      quarter: "Q1",
      title: "Community Growth",
      description: "Reached 500+ early adopters and established partnerships with premium cannabis brands.",
      icon: Award,
      color: "teal"
    },
    {
      year: "2025",
      quarter: "Q2",
      title: "The Future",
      description: "Expanding to 10+ cities and launching innovative features that will redefine cannabis delivery.",
      icon: Calendar,
      color: "fuchsia"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const items = timelineRef.current?.querySelectorAll('[data-index]');
    items?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const getIconColor = (color: string) => {
    switch (color) {
      case "emerald":
        return "text-emerald-400";
      case "teal":
        return "text-teal-400";
      case "fuchsia":
        return "text-fuchsia-400";
      default:
        return "text-emerald-400";
    }
  };

  const getBgColor = (color: string) => {
    switch (color) {
      case "emerald":
        return "bg-emerald-500/15";
      case "teal":
        return "bg-teal-500/15";
      case "fuchsia":
        return "bg-fuchsia-500/15";
      default:
        return "bg-emerald-500/15";
    }
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4 sm:mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-fuchsia-400 drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
              Our Journey
            </span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto px-2">
            From a bold vision to a growing reality—here's how we're building the future of cannabis delivery.
          </p>
        </header>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-teal-500 to-fuchsia-500"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <div
                key={index}
                data-index={index}
                className={`relative flex items-start gap-6 transition-all duration-700 ${
                  visibleItems.includes(index) 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-8'
                }`}
              >
                {/* Timeline dot */}
                <div className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-full ${getBgColor(item.color)} ${getIconColor(item.color)} border-4 border-background shadow-lg`}>
                  <item.icon className="w-6 h-6" aria-hidden="true" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                    {/* Year and quarter */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm font-bold text-emerald-500">{item.year}</span>
                      <span className="text-sm text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{item.quarter}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-fuchsia-500/10 border border-emerald-500/20 text-emerald-500 font-semibold text-sm">
            <Rocket className="w-4 h-4" />
            <span>The journey continues • Be part of our story</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTimeline;
