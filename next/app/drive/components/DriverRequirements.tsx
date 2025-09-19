"use client";
import React from "react";
import { Check, Calendar, CreditCard, Smartphone, Car, Shield, FileText } from "lucide-react";

export default function DriverRequirements() {
  const requirements = [
    {
      icon: Calendar,
      title: "Age Requirement",
      description: "Must be 21 years or older",
      details: "Legal age requirement for cannabis delivery in all markets"
    },
    {
      icon: CreditCard,
      title: "Valid Driver's License",
      description: "Clean driving record required",
      details: "No major violations in the past 3 years"
    },
    {
      icon: Shield,
      title: "Background Check",
      description: "Pass comprehensive background screening",
      details: "Criminal background check and drug screening required"
    },
    {
      icon: Car,
      title: "Reliable Vehicle",
      description: "Car, SUV, truck, or motorcycle",
      details: "Vehicle must be insured and in good working condition"
    },
    {
      icon: Smartphone,
      title: "Smartphone",
      description: "iPhone or Android with data plan",
      details: "Required for our driver app and GPS navigation"
    },
    {
      icon: FileText,
      title: "Insurance Coverage",
      description: "Valid auto insurance policy",
      details: "Minimum liability coverage as required by state law"
    }
  ];

  return (
    <section className="relative py-20 bg-background">
      {/* decorative background ok, but behind */}
      <div className="pointer-events-none absolute inset-0 -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Driver Requirements
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            To ensure the safety and quality of our service, all drivers must meet these requirements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {requirements.map((requirement, index) => {
            const IconComponent = requirement.icon;
            return (
              <div key={index} className="bg-card rounded-2xl p-6 border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-2">{requirement.title}</h3>
                    <p className="text-muted-foreground font-medium mb-2">{requirement.description}</p>
                    <p className="text-sm text-muted-foreground">{requirement.details}</p>
                  </div>
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-emerald-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-emerald-700 mb-6">
              If you meet all the requirements above, you're ready to apply! 
              The application process takes about 10 minutes and includes a quick background check.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#apply" 
                className="bg-gradient-to-r from-emerald-500 to-fuchsia-500 hover:from-emerald-600 hover:to-fuchsia-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Apply Now
              </a>
              <a 
                href="#faq" 
                className="border border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
