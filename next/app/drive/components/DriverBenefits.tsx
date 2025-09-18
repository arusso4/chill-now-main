"use client";
import React from "react";
import { 
  DollarSign, 
  Clock, 
  Shield, 
  Users, 
  MapPin, 
  Smartphone,
  Car,
  TrendingUp
} from "lucide-react";

export default function DriverBenefits() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Pay",
      description: "Earn $25-35 per hour with tips and bonuses. Get paid weekly with instant cash out options.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Work when you want. Set your own hours and take time off whenever you need it.",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "All deliveries are tracked and monitored. We provide insurance coverage for all drivers.",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: Users,
      title: "Supportive Community",
      description: "Join a network of professional drivers with 24/7 support and driver resources.",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: MapPin,
      title: "Local Deliveries",
      description: "Stay in your area with deliveries typically within 5-10 miles of your location.",
      color: "from-teal-500 to-green-600"
    },
    {
      icon: Smartphone,
      title: "Easy App",
      description: "Simple driver app with real-time navigation, order tracking, and earnings dashboard.",
      color: "from-pink-500 to-rose-600"
    },
    {
      icon: Car,
      title: "Vehicle Support",
      description: "Get help with vehicle maintenance, fuel discounts, and vehicle financing options.",
      color: "from-indigo-500 to-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Growth Opportunities",
      description: "Advance to lead driver, trainer, or operations roles as we expand to new markets.",
      color: "from-yellow-500 to-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Drive with ChillNOW?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of drivers who have found success with our platform. 
            We provide everything you need to thrive in the cannabis delivery space.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${benefit.color} flex items-center justify-center mb-4`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
