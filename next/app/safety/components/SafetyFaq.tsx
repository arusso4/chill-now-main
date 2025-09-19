"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SafetyFaq = () => {
  const faqs = [
    {
      question: "How do you verify driver backgrounds?",
      answer: "All drivers undergo comprehensive background checks including criminal history, driving record verification, and identity confirmation. We use third-party verification services and maintain ongoing monitoring of all delivery partners."
    },
    {
      question: "What age verification measures do you use?",
      answer: "We require valid government-issued photo ID showing the customer is 21 or older. Our drivers are trained to verify age at delivery, and we use advanced verification technology in our app to prevent underage access."
    },
    {
      question: "How secure are my payment details?",
      answer: "All payments are processed through encrypted, PCI-compliant systems with bank-level security. Your financial information is never stored on our servers and is protected by industry-standard encryption protocols."
    },
    {
      question: "What happens if there's a delivery issue?",
      answer: "Our 24/7 customer support team is available for any delivery concerns. We have emergency response protocols and can quickly resolve issues or arrange for redelivery if needed. All incidents are tracked and investigated."
    },
    {
      question: "Are your products tested for safety?",
      answer: "Yes, all products are lab-tested and come with certificates of analysis (COA). We only work with licensed suppliers who meet strict quality and safety standards. Products are stored in secure, climate-controlled facilities."
    },
    {
      question: "How do you ensure contactless delivery?",
      answer: "We offer contactless delivery options where drivers can leave packages at your door after age verification. You can track the delivery in real-time and communicate with your driver through the app for a safe, convenient experience."
    },
    {
      question: "What if I have a safety concern?",
      answer: "You can report any safety concerns through our app, website, or by calling our dedicated safety hotline. All reports are taken seriously and investigated immediately by our safety team."
    },
    {
      question: "Do you operate in legal markets only?",
      answer: "Yes, we only operate in legal cannabis markets and maintain all required licenses and permits. We strictly comply with local and state regulations to ensure safe, legal delivery services."
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4 sm:mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-fuchsia-400 drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
              Safety FAQ
            </span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto px-2">
            Common questions about our safety measures and delivery protocols.
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
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 font-bold text-sm sm:text-base">
            <span>Still have questions? Contact our safety team</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyFaq;
