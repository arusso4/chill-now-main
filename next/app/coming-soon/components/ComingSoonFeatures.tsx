import React from "react";
import { Shield, Zap, Users, MapPin, Clock, Award } from "lucide-react";

const ComingSoonFeatures = () => {
  const features = [
    {
      icon: Shield,
      title: "100% Safe & Legal",
      description: "Background-checked drivers, secure transactions, and full compliance with all local regulations. Your safety is our top priority.",
      color: "emerald"
    },
    {
      icon: Zap,
      title: "Lightning Fast Delivery",
      description: "Average delivery time of 60 minutes or less. We've streamlined the entire process so you can focus on what matters.",
      color: "teal"
    },
    {
      icon: Users,
      title: "Premium Quality",
      description: "Only lab-tested, COA-verified cannabis products from licensed suppliers. Quality you can trust, every single time.",
      color: "fuchsia"
    },
    {
      icon: MapPin,
      title: "Wide Coverage",
      description: "Launching in 3 major cities with plans to expand rapidly. We're bringing premium cannabis delivery to your neighborhood.",
      color: "emerald"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer support and real-time order tracking. We're here whenever you need us.",
      color: "teal"
    },
    {
      icon: Award,
      title: "Early Access Perks",
      description: "Exclusive deals, priority delivery slots, and special member benefits for our waitlist community.",
      color: "fuchsia"
    }
  ];

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
    <section id="features" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4 sm:mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-fuchsia-400 drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
              What's Coming
            </span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto px-2">
            The most advanced cannabis delivery platform ever built. Here's what makes us different.
          </p>
        </header>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <article key={index} className="group rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              {/* Icon */}
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-full ${getBgColor(feature.color)} ${getIconColor(feature.color)} mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6" aria-hidden="true" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-emerald-500 transition-colors duration-300">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover effect gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/5 to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-fuchsia-500/10 border border-emerald-500/20 text-emerald-500 font-semibold text-sm">
            <Award className="w-4 h-4" />
            <span>Revolutionary features • Built for the future</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonFeatures;
