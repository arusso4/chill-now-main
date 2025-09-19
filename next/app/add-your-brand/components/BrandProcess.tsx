"use client";
import { FileText, Phone, CheckCircle, Rocket } from "lucide-react";

export default function BrandProcess() {
  const steps = [
    {
      number: "01",
      icon: FileText,
      title: "Submit Application",
      description: "Fill out our simple application form with your brand details, product information, and market preferences."
    },
    {
      number: "02", 
      icon: Phone,
      title: "Initial Review",
      description: "Our team reviews your application within 48 hours and schedules a discovery call to discuss your needs."
    },
    {
      number: "03",
      icon: CheckCircle,
      title: "Compliance & Onboarding",
      description: "We handle all compliance requirements, product verification, and technical integration setup."
    },
    {
      number: "04",
      icon: Rocket,
      title: "Launch & Scale",
      description: "Go live on our platform and start reaching customers. We provide ongoing support and optimization."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting your brand on ChillNOW is simple and straightforward. 
            Here's what you can expect from start to finish.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-fuchsia-500 rounded-xl flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-2xl font-black text-gray-400">{step.number}</span>
                      <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-fuchsia-500 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
