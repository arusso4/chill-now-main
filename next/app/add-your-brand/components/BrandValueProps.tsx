"use client";
import { TrendingUp, ShieldCheck, Zap, Users, DollarSign, Clock } from "lucide-react";

export default function BrandValueProps() {
  const valueProps = [
    {
      icon: TrendingUp,
      title: "Rapid Growth",
      description: "Access to a growing customer base with high purchase intent and repeat customers"
    },
    {
      icon: ShieldCheck,
      title: "Compliance First",
      description: "We handle all regulatory requirements, licensing, and compliance paperwork"
    },
    {
      icon: Zap,
      title: "Fast Integration",
      description: "Get live on our platform in as little as 2-3 weeks with our streamlined onboarding"
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Personal account manager and 24/7 support to help your brand succeed"
    },
    {
      icon: DollarSign,
      title: "Competitive Rates",
      description: "Transparent pricing with no hidden fees. We only succeed when you succeed"
    },
    {
      icon: Clock,
      title: "Quick Payments",
      description: "Fast, reliable payments processed weekly with detailed reporting"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Partner with ChillNOW?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're building the future of cannabis and wellness delivery. 
            Join brands that are already seeing incredible growth with our platform.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:border-emerald-500/50 transition-colors">
              <prop.icon className="w-12 h-12 mx-auto mb-4 text-emerald-600" />
              <h3 className="text-xl font-semibold mb-2">{prop.title}</h3>
              <p className="text-gray-600">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
