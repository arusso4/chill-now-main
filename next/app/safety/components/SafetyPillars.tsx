import React from "react";
import { Shield, UserCheck, CreditCard, Clock, MapPin, FileText } from "lucide-react";

const SafetyPillars = () => {
  const pillars = [
    {
      icon: UserCheck,
      title: "Background-Checked Drivers",
      description: "Every driver undergoes comprehensive background checks, including criminal history, driving record verification, and identity confirmation. We only work with trusted, professional delivery partners.",
      color: "emerald"
    },
    {
      icon: CreditCard,
      title: "Secure Transactions",
      description: "All payments are processed through encrypted, PCI-compliant systems. Your financial information is protected with bank-level security and never stored on our servers.",
      color: "fuchsia"
    },
    {
      icon: Clock,
      title: "Age Verification",
      description: "Strict age verification protocols ensure all customers are 21+ with valid government-issued ID. We use advanced verification technology to prevent underage access.",
      color: "teal"
    },
    {
      icon: MapPin,
      title: "Delivery Protocol",
      description: "Contactless delivery options, real-time tracking, and secure handoff procedures. Drivers follow strict protocols for safe, discreet, and professional delivery.",
      color: "emerald"
    },
    {
      icon: FileText,
      title: "Legal Compliance",
      description: "Full compliance with all local and state regulations. We operate only in legal markets and maintain all required licenses and permits for safe cannabis delivery.",
      color: "fuchsia"
    },
    {
      icon: Shield,
      title: "Product Safety",
      description: "All products are lab-tested, COA-verified, and stored in secure, climate-controlled facilities. We maintain strict quality control from supplier to your door.",
      color: "teal"
    }
  ];

  const getIconColor = (color: string) => {
    switch (color) {
      case "emerald":
        return "text-emerald-400";
      case "fuchsia":
        return "text-fuchsia-400";
      case "teal":
        return "text-teal-400";
      default:
        return "text-emerald-400";
    }
  };

  const getBgColor = (color: string) => {
    switch (color) {
      case "emerald":
        return "bg-emerald-500/15";
      case "fuchsia":
        return "bg-fuchsia-500/15";
      case "teal":
        return "bg-teal-500/15";
      default:
        return "bg-emerald-500/15";
    }
  };

  return (
    <section id="safety-pillars" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4 sm:mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-fuchsia-400 drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
              Our Safety Pillars
            </span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto px-2">
            Six core principles that ensure every delivery is safe, secure, and compliant with the highest standards.
          </p>
        </header>
        
        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, index) => (
            <article key={index} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              {/* Icon */}
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-full ${getBgColor(pillar.color)} ${getIconColor(pillar.color)} mb-4`}>
                <pillar.icon className="w-6 h-6" aria-hidden="true" />
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-3">{pillar.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
            </article>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 font-bold text-sm sm:text-base">
            <Shield className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
            <span>Trusted by thousands of customers</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyPillars;
