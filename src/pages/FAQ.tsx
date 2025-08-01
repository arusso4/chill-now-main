import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ChevronDown,
  ChevronUp,
  Zap,
  Leaf,
  Clock,
  Shield,
  MapPin,
  User,
  Coffee,
  Package
} from "lucide-react";
import { Helmet } from "react-helmet-async";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  icon: React.ComponentType<{ className?: string }>;
}

const FAQ = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const faqs: FAQItem[] = [
    {
      id: "what-is-chillnow",
      question: "What is ChillNOW?",
      answer: "We're not just another delivery service — we're a movement. Think of us as your rebellious best friend who happens to deliver premium cannabis, snacks, and good vibes faster than your ex can text back. We're here to disrupt the boring delivery game with speed, swagger, and a hint of chaos.",
      icon: Zap
    },
    {
      id: "where-deliver",
      question: "Where do you deliver?",
      answer: "Currently, we're taking over select cities where cannabis delivery is legal (because we're rebels, not criminals). We're expanding faster than your tolerance, so if we're not in your area yet, join the waitlist and we'll let you know when we're coming to your neighborhood.",
      icon: MapPin
    },
    {
      id: "is-legal",
      question: "Is this legal?",
      answer: "Absolutely. We're rule-breakers, not law-breakers. All our products come from licensed retailers and we follow every regulation in the book (even the boring ones). We just make compliance look cool.",
      icon: Shield
    },
    {
      id: "how-fast",
      question: "How fast is delivery?",
                             answer: "Faster than your coffee kicks in. We're talking 60 minutes or less, guaranteed. If we're late, we'll throw in something extra to make it worth your while. Because punctuality is punk rock.",
      icon: Clock
    },
    {
      id: "need-account",
      question: "Do I need an account to order?",
      answer: "Nope, but you'll want one. Guest checkout is available for the spontaneous types, but creating an account gets you VIP perks, faster checkout, and exclusive deals. Plus, we remember your preferences so you don't have to.",
      icon: User
    },
    {
      id: "id-verification",
      question: "What about ID verification?",
      answer: "We take this seriously (for once). You'll need to verify your age and identity before your first order. It's quick, secure, and we promise not to judge your driver's license photo. We've all been there.",
      icon: Shield
    },
    {
      id: "cannabis-drinks",
      question: "What's the deal with cannabis drinks?",
      answer: "Think of them as your regular drinks, but with a little extra personality. From sparkling waters to craft sodas, these beverages are perfect for when you want to feel fancy without the calories. They're like kombucha's cooler cousin.",
      icon: Coffee
    },
    {
      id: "snacks",
      question: "Can I get snacks too?",
      answer: "Absolutely! We're not just about cannabis — we're about the full experience. From gourmet chips to artisanal chocolates, we've got the munchies covered. Because the best sessions include both quality products and quality snacks.",
      icon: Package
    }
  ];

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions | ChillNOW</title>
        <meta 
          name="description" 
          content="Answers to the most common questions about ChillNOW's cannabis delivery, legality, timing, and more." 
        />
      </Helmet>
      
      <div className="min-h-screen bg-background overflow-hidden">
        
        {/* Hero Section */}
        <section 
          className="relative pt-24 pb-16 px-4 sm:px-6 min-h-[60vh] flex items-center justify-center overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)'
          }}
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-orange-400 to-red-500 rounded-full opacity-30 animate-bounce"></div>
            <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-25 animate-spin"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 px-4 py-2 text-sm font-bold">
              <Leaf className="w-4 h-4 mr-2" />
              FAQ
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                FAQs
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent">
                Because You'll Ask Anyway
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about our rebellious approach to cannabis delivery.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const Icon = faq.icon;
                const isOpen = openItems.includes(faq.id);
                
                return (
                  <div 
                    key={faq.id}
                    className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 faq-accordion"
                  >
                    <button
                      onClick={() => toggleItem(faq.id)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-accent/50 transition-colors duration-200"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${faq.id}`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-primary" />
                        <span className="text-lg font-semibold text-foreground">
                          {faq.question}
                        </span>
                      </div>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                      )}
                    </button>
                    
                    <div
                      id={`faq-answer-${faq.id}`}
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-6 pb-4 text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* CTA Section */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Still Have Questions?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  We're here to help. If you can't find what you're looking for, reach out to our support team.
                </p>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-lg px-8 py-4 font-bold border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FAQ; 