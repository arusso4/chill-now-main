import React from "react";
import { Shield, Zap, HeartHandshake, Leaf, Users, Award } from "lucide-react";

const AboutValues = () => {
  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Every delivery is backed by comprehensive safety measures, background-checked drivers, and secure protocols to ensure your peace of mind.",
      color: "emerald"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "We've streamlined the entire experience so you can focus on what matters: actually enjoying your downtime without the wait.",
      color: "teal"
    },
    {
      icon: HeartHandshake,
      title: "Community Driven",
      description: "We're building more than a service—we're creating a community of responsible cannabis enthusiasts who value quality and safety.",
      color: "fuchsia"
    },
    {
      icon: Leaf,
      title: "Premium Quality",
      description: "Only the finest, lab-tested cannabis products make it to our platform. Quality is non-negotiable in everything we do.",
      color: "emerald"
    },
    {
      icon: Users,
      title: "People Powered",
      description: "Our success comes from the amazing people who choose to work with us and trust us with their cannabis delivery needs.",
      color: "teal"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We're committed to delivering excellence in every interaction, from the first order to the thousandth delivery.",
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
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-500/3 via-transparent to-fuchsia-500/3"></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-fuchsia-400/10 to-pink-400/10 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4 sm:mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-fuchsia-400 drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
              Our Values
            </span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto px-2">
            The principles that guide everything we do—from our technology to our team culture.
          </p>
        </header>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {values.map((value, index) => (
            <article key={index} className="group rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              {/* Icon */}
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-full ${getBgColor(value.color)} ${getIconColor(value.color)} mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <value.icon className="w-6 h-6" aria-hidden="true" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-emerald-500 transition-colors duration-300">
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.description}
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
            <span>Values-driven • Excellence in every delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
