"use client";
import React from "react";
import { FileText, Clock, CheckCircle, Car, DollarSign } from "lucide-react";

export default function DriverSteps() {
  const steps = [
    {
      number: "01",
      icon: FileText,
      title: "Apply Online",
      description: "Fill out our simple application form with your basic information and vehicle details.",
      details: "Takes about 10 minutes to complete"
    },
    {
      number: "02",
      icon: Clock,
      title: "Background Check",
      description: "We'll run a quick background check and verify your driving record and insurance.",
      details: "Usually completed within 24-48 hours"
    },
    {
      number: "03",
      icon: CheckCircle,
      title: "Get Approved",
      description: "Once approved, you'll receive your driver credentials and access to our driver app.",
      details: "Welcome to the ChillNOW driver family!"
    },
    {
      number: "04",
      icon: Car,
      title: "Start Driving",
      description: "Download the app, set your availability, and start accepting delivery requests.",
      details: "Begin earning immediately"
    },
    {
      number: "05",
      icon: DollarSign,
      title: "Get Paid",
      description: "Earn money for every delivery with weekly payouts and instant cash out options.",
      details: "Track your earnings in real-time"
    }
  ];

  return (
    <section className="relative py-20 bg-background">
      {/* decorative background ok, but behind */}
      <div className="pointer-events-none absolute inset-0 -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Getting started as a ChillNOW driver is simple. Follow these 5 easy steps to begin earning.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`flex items-center gap-8 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? 'text-left' : 'text-right'}`}>
                    <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-fuchsia-500 flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <span className="text-sm font-bold text-muted-foreground">STEP {step.number}</span>
                          <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-lg mb-3">{step.description}</p>
                      <p className="text-sm text-muted-foreground font-medium">{step.details}</p>
                    </div>
                  </div>
                  
                  {/* Step Number Circle */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-emerald-500 to-fuchsia-500 flex items-center justify-center text-white font-black text-2xl shadow-lg">
                      {step.number}
                    </div>
                  </div>
                  
                  {/* Spacer for even steps */}
                  <div className="flex-1"></div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-card rounded-2xl p-8 shadow-lg max-w-2xl mx-auto border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of drivers who are already earning with ChillNOW. 
              Apply today and start driving tomorrow!
            </p>
            <a 
              href="#apply" 
              className="bg-gradient-to-r from-emerald-500 to-fuchsia-500 hover:from-emerald-600 hover:to-fuchsia-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Apply to Drive
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
