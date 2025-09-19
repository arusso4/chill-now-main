import React from "react";
import { Clock, Users, MapPin, Shield, TrendingUp, Award } from "lucide-react";

const AboutStats = () => {
  const stats = [
    {
      icon: Clock,
      number: "60min",
      label: "Average Delivery Time",
      description: "From order to your door",
      color: "emerald"
    },
    {
      icon: Users,
      number: "500+",
      label: "Early Adopters",
      description: "People on our waitlist",
      color: "teal"
    },
    {
      icon: Shield,
      number: "100%",
      label: "Background Checked",
      description: "All drivers verified",
      color: "fuchsia"
    },
    {
      icon: MapPin,
      number: "3",
      label: "Cities Launching",
      description: "More coming soon",
      color: "emerald"
    },
    {
      icon: TrendingUp,
      number: "99.2%",
      label: "On-Time Rate",
      description: "Reliable delivery promise",
      color: "teal"
    },
    {
      icon: Award,
      number: "24/7",
      label: "Support Available",
      description: "Always here to help",
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
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4 sm:mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-fuchsia-400 drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
              By the Numbers
            </span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto px-2">
            The metrics that matter—delivering excellence in every aspect of our service.
          </p>
        </header>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <article key={index} className="rounded-2xl border border-border bg-card p-6 shadow-sm text-center">
              {/* Icon */}
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-full ${getBgColor(stat.color)} ${getIconColor(stat.color)} mb-4 sm:mb-6`}>
                <stat.icon className="w-6 h-6" aria-hidden="true" />
              </div>
              
              {/* Number */}
              <div className="text-3xl sm:text-4xl font-black mb-2">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-fuchsia-400 drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
                  {stat.number}
                </span>
              </div>
              
              {/* Label */}
              <h3 className="text-lg font-semibold text-foreground mb-2">{stat.label}</h3>
              
              {/* Description */}
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </article>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-fuchsia-500/10 border border-emerald-500/20 text-emerald-500 font-semibold text-sm">
            <TrendingUp className="w-4 h-4" />
            <span>Growing fast • Join the movement</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
