import React from "react";
import { Smartphone, UserCheck, Package, Home, Shield, Clock } from "lucide-react";

const SafetyProcess = () => {
  const steps = [
    {
      icon: Smartphone,
      number: "01",
      title: "Secure Ordering",
      description: "Place your order through our encrypted app with secure payment processing. All transactions are protected with bank-level security."
    },
    {
      icon: UserCheck,
      number: "02",
      title: "Driver Verification",
      description: "Your order is assigned to a background-checked driver. You'll receive their photo, name, and vehicle details for verification."
    },
    {
      icon: Package,
      number: "03",
      title: "Secure Packaging",
      description: "Products are packaged in tamper-evident, child-resistant containers and stored in secure, climate-controlled facilities."
    },
    {
      icon: Home,
      number: "04",
      title: "Safe Delivery",
      description: "Contactless delivery with real-time tracking. Age verification and secure handoff procedures ensure safe receipt."
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4 sm:mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-fuchsia-400 drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
              How We Keep Deliveries Safe
            </span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto px-2">
            From order placement to delivery, every step is designed with your safety and security in mind.
          </p>
        </header>
        
        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line - Hidden on mobile */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-emerald-500 to-fuchsia-500 z-0 translate-x-[-50%]" aria-hidden="true" />
              )}
              
              {/* Step Content */}
              <article className="relative z-10 text-center">
                {/* Icon Circle */}
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400 mx-auto mb-4 sm:mb-6">
                  <step.icon className="w-6 h-6" aria-hidden="true" />
                </div>
                
                {/* Step Number */}
                <div className="text-4xl sm:text-6xl font-black text-emerald-500/20 mb-3 sm:mb-4" aria-label={`Step ${index + 1}`}>
                  {step.number}
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-3 sm:mb-4">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </article>
            </div>
          ))}
        </div>
        
        {/* Safety Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-16 sm:mt-20 text-center">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="text-2xl sm:text-3xl font-black text-emerald-500 mb-1 sm:mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Background checked drivers</div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="text-2xl sm:text-3xl font-black text-fuchsia-500 mb-1 sm:mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Safety monitoring</div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="text-2xl sm:text-3xl font-black text-teal-500 mb-1 sm:mb-2">0</div>
            <div className="text-sm text-muted-foreground">Safety incidents</div>
          </div>
        </div>
        
        {/* Additional Safety Features */}
        <div className="mt-16 sm:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Real-Time Monitoring</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Every delivery is tracked in real-time with GPS monitoring and safety check-ins. Our operations center monitors all deliveries for your peace of mind.
              </p>
            </div>
            
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-fuchsia-500/15 text-fuchsia-400">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Emergency Response</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Dedicated emergency response team available 24/7. Immediate support for any safety concerns or delivery issues with rapid response protocols.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyProcess;
