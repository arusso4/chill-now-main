"use client";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function BrandFAQ() {
  const faqs = [
    {
      question: "What types of brands qualify for the ChillNOW platform?",
      answer: "We welcome cannabis brands, wellness products, premium snacks, and lifestyle brands that align with our values. All brands must meet our quality standards and compliance requirements. We're particularly interested in brands that share our commitment to excellence and customer experience."
    },
    {
      question: "How does the brand partnership process work?",
      answer: "Once you submit your application, our team reviews your brand within 48 hours. If approved, we'll schedule an onboarding call to discuss logistics, compliance requirements, and launch timeline. We handle all the technical integration and compliance paperwork."
    },
    {
      question: "Are there any costs to list on ChillNOW?",
      answer: "There are no upfront listing fees. We operate on a revenue-sharing model where we take a small percentage of each sale. This ensures we're invested in your success and only make money when you make money."
    },
    {
      question: "How do you handle compliance and regulations?",
      answer: "We have a dedicated compliance team that handles all regulatory requirements, licensing, and paperwork. We ensure all products meet local and state regulations, and we maintain all necessary permits and certifications on your behalf."
    },
    {
      question: "What markets do you currently serve?",
      answer: "We're currently live in Denver, with plans to expand to Phoenix, Las Vegas, and Kansas City. We're actively seeking brands that can scale with us as we grow into new markets."
    },
    {
      question: "How quickly can my brand go live on the platform?",
      answer: "Once approved, most brands can be live on the platform within 2-3 weeks. This includes compliance review, product onboarding, and technical integration. We'll work closely with you to ensure a smooth launch."
    },
    {
      question: "What kind of support do you provide to brands?",
      answer: "We provide dedicated account management, 24/7 customer support, marketing assistance, and detailed analytics. Our team works closely with you to optimize your listings and maximize sales performance."
    },
    {
      question: "Do you handle inventory management?",
      answer: "Yes, we provide comprehensive inventory management tools and can integrate with your existing systems. We also offer fulfillment services in select markets to help streamline your operations."
    }
  ];

  return (
    <section className="relative py-16 md:py-24 bg-background">
      {/* decorative background ok, but behind */}
      <div className="pointer-events-none absolute inset-0 -z-10" />

      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">Frequently Asked Questions</h2>
        <p className="mt-3 text-center text-muted-foreground">Everything you need to know about partnering with ChillNOW</p>

        <Accordion type="single" collapsible className="mt-8 space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="rounded-2xl border border-border bg-card">
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
    </section>
  );
}
