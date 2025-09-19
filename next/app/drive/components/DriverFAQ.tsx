"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function DriverFAQ() {
  const faqs = [
    {
      question: "How much can I earn as a ChillNOW driver?",
      answer: "Drivers typically earn $25-35 per hour including tips and bonuses. Your earnings depend on factors like location, time of day, and number of deliveries completed. We also offer weekly bonuses for top performers."
    },
    {
      question: "What are the requirements to become a driver?",
      answer: "You must be 21 or older, have a valid driver's license with a clean record, pass a background check, own a reliable vehicle with insurance, and have a smartphone with data plan. We'll verify all requirements during the application process."
    },
    {
      question: "How flexible is the schedule?",
      answer: "Very flexible! You can work whenever you want - mornings, evenings, weekends, or holidays. Set your own hours and take time off whenever you need it. There are no minimum hour requirements."
    },
    {
      question: "What types of vehicles are accepted?",
      answer: "We accept cars, SUVs, trucks, motorcycles, and scooters. Your vehicle must be insured, in good working condition, and meet local safety requirements. We'll verify your vehicle during the application process."
    },
    {
      question: "How does the delivery process work?",
      answer: "You'll receive delivery requests through our driver app. Accept the ones you want, navigate to the pickup location, verify the order, and deliver to the customer. The app handles navigation, order tracking, and payment processing."
    },
    {
      question: "Is there insurance coverage for drivers?",
      answer: "Yes, we provide commercial auto insurance coverage for all active drivers while making deliveries. You'll also need your own personal auto insurance for your vehicle. We'll help you understand the coverage details during onboarding."
    },
    {
      question: "How do I get paid?",
      answer: "You'll receive weekly payouts via direct deposit or instant cash out options. Track your earnings in real-time through the driver app. Tips are included in your earnings and paid out with your regular pay."
    },
    {
      question: "What support is available for drivers?",
      answer: "We provide 24/7 driver support through the app, phone, and email. You'll also have access to driver resources, training materials, and a community of experienced drivers to help you succeed."
    },
    {
      question: "How long does the application process take?",
      answer: "The application takes about 10 minutes to complete. Background checks typically take 24-48 hours. Once approved, you can start driving immediately after downloading the app and completing a brief orientation."
    },
    {
      question: "Can I drive in multiple cities?",
      answer: "Yes! Once approved, you can drive in any city where ChillNOW operates. Simply update your location in the app and start accepting deliveries in your new area. We're expanding to new markets regularly."
    }
  ];

  return (
    <section id="faq" className="relative py-20 bg-background">
      {/* decorative background ok, but behind */}
      <div className="pointer-events-none absolute inset-0 -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about driving with ChillNOW? We've got answers to the most common questions.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="rounded-2xl border border-border bg-card"
              >
                <AccordionTrigger className="w-full text-left px-5 py-4 text-foreground font-medium rounded-2xl flex items-center justify-between hover:bg-accent/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-5 pt-0 text-sm text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-card rounded-2xl p-8 max-w-2xl mx-auto border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our driver support team is here to help. Contact us anytime for assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:drivers@chillnow.com" 
                className="bg-gradient-to-r from-emerald-500 to-fuchsia-500 hover:from-emerald-600 hover:to-fuchsia-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Email Support
              </a>
              <a 
                href="tel:+1-555-CHILL-NOW" 
                className="border border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
