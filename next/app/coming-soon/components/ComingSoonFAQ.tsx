"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ComingSoonFAQ = () => {
  const faqs = [
    {
      question: "When will ChillNOW launch?",
      answer: "We're launching in Q1 2025, starting with 3 major cities. Join our waitlist to be the first to know the exact launch date and get early access to our platform."
    },
    {
      question: "Which cities will you launch in first?",
      answer: "We're starting with Los Angeles, San Francisco, and Seattle - three cities with established legal cannabis markets. We plan to expand rapidly to other legal markets throughout 2025."
    },
    {
      question: "How fast will delivery be?",
      answer: "Our average delivery time is 60 minutes or less. We've built an advanced logistics system with background-checked drivers and optimized routes to ensure fast, reliable delivery every time."
    },
    {
      question: "Is it safe and legal?",
      answer: "Absolutely. We only operate in legal cannabis markets and maintain full compliance with all local and state regulations. All drivers are background-checked, and we use secure, encrypted payment processing."
    },
    {
      question: "What products will be available?",
      answer: "We'll offer a curated selection of premium cannabis products including flower, edibles, concentrates, and topicals. All products are lab-tested and come with certificates of analysis (COA)."
    },
    {
      question: "How do I join the waitlist?",
      answer: "Simply enter your email address in the form above. You'll receive early access to our platform, exclusive launch deals, and priority customer support. No spam, and you can unsubscribe anytime."
    },
    {
      question: "Will there be any special perks for early members?",
      answer: "Yes! Early waitlist members get exclusive access to our platform before public launch, special pricing on first orders, priority delivery slots, and access to limited-edition products."
    },
    {
      question: "How do you ensure product quality?",
      answer: "We only work with licensed suppliers who meet our strict quality standards. All products are lab-tested for potency and contaminants, and we maintain proper storage and handling protocols throughout the delivery process."
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4 sm:mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-fuchsia-400 drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto px-2">
            Everything you need to know about ChillNOW's upcoming launch and what makes us different.
          </p>
        </header>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-4">
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

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-fuchsia-500/10 border border-emerald-500/20 text-emerald-500 font-semibold text-sm">
            <span>Still have questions? Join our waitlist to get personalized updates</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonFAQ;
