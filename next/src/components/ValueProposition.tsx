import React from "react";
import { Clock, Star, Heart, Zap } from "lucide-react";

const ValueProposition = () => {
  const benefits = [
    {
    icon: Clock,
    title: "Lightning Fast",
         subtitle: "60-minute delivery",
    description: "No more waiting around. Order premium cannabis and have it at your door faster than your last pizza delivery.",
    gradient: "from-green-500 to-blue-600"
    },
    {
    icon: Star,
    title: "Tested. Trusted. Tracked.",
    subtitle: "Lab-tested. COA-verified. No shortcuts.",
    description: "Every product we carry is lab-tested, COA-backed, and comes with full ingredient transparency. If we wouldn't use it ourselves, it doesn't make the cut.",
    gradient: "from-purple-500 to-pink-600"
    },
    {
    icon: Heart,
    title: "Wellness Without the Woo-Woo",
    subtitle: "Clean ingredients. Better highs. Zero hangover.",
    description: "We're here for the ones who care what goes in their body. No sketchy blends, no sugar bombs, and no regrets. Just plant-powered products that actually help you unwind.",
    gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-12 sm:mb-16">
          <h2 id="value-heading" className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4 sm:mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-fuchsia-400 drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
              Unwind Without Regret
            </span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto px-2">
            Because wellness shouldn't suck. Or take two hours.
          </p>
        </header>
        
        {/* Benefits List */}
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8" role="list">
          {benefits.map((benefit, index) => (
            <li key={index} className="relative group">
              {/* Card */}
              <article className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm">
                {/* Icon */}
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400 mb-4 sm:mb-6">
                  <benefit.icon className="w-6 h-6" aria-hidden="true" />
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-emerald-500 font-bold mb-3 sm:mb-4 text-sm sm:text-base">{benefit.subtitle}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
              </article>
              
            </li>
          ))}
        </ul>
        
        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 font-bold text-sm sm:text-base">
            <Zap className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
            <span>Join 500+ people on the waitlist</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;