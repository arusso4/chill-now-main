import React from "react";
import { Smartphone, Package, Home } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
    icon: Smartphone,
    number: "01",
    title: "Browse & Order",
    description: "Open the app, browse our curated selection, and order exactly what you need. No BS, no upselling."
    },
    {
    icon: Package,
    number: "02",
    title: "We Handle the Rest",
    description: "Our vetted delivery partners prepare your order with care and discretion. Track everything in real-time."
    },
    {
    icon: Home,
    number: "03",
                         title: "Delivered in 60 Minutes",
    description: "Relax. Your premium products arrive faster than you can say 'work-life balance'."
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-12 sm:mb-16">
          <h2 id="how-it-works-heading" className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6">
            Dead Simple.{" "}
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Fast AF</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            We've streamlined the entire experience so you can focus on what matters: actually enjoying your downtime.
          </p>
        </header>
        
        {/* Steps List */}
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12" role="list">
          {steps.map((step, index) => (
            <li key={index} className="relative">
              {/* Connection Line - Hidden on mobile */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-green-500 to-blue-500 z-0 translate-x-[-50%]" aria-hidden="true" />
              )}
              
              {/* Step Content */}
              <article className="relative z-10 text-center">
                {/* Icon Circle */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center shadow-lg">
                  <step.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" aria-hidden="true" />
                </div>
                
                {/* Step Number */}
                <div className="text-4xl sm:text-6xl font-black text-green-500/20 mb-3 sm:mb-4" aria-label={`Step ${index + 1}`}>
                  {step.number}
                </div>
                
                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{step.description}</p>
              </article>
            </li>
          ))}
        </ol>
        
        {/* Bottom Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-16 sm:mt-20 text-center" role="list" aria-label="Service statistics">
          <div className="p-4 sm:p-6 rounded-xl bg-card/50 border border-border" role="listitem">
                                                     <div className="text-2xl sm:text-3xl font-black text-green-500 mb-1 sm:mb-2">60min</div>
            <div className="text-muted-foreground text-sm sm:text-base">Average delivery</div>
          </div>
          <div className="p-4 sm:p-6 rounded-xl bg-card/50 border border-border" role="listitem">
            <div className="text-2xl sm:text-3xl font-black text-blue-500 mb-1 sm:mb-2">100%</div>
            <div className="text-muted-foreground text-sm sm:text-base">Legal compliance</div>
          </div>
          <div className="p-4 sm:p-6 rounded-xl bg-card/50 border border-border" role="listitem">
            <div className="text-2xl sm:text-3xl font-black text-purple-500 mb-1 sm:mb-2">24/7</div>
            <div className="text-muted-foreground text-sm sm:text-base">Customer support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;