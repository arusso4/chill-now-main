"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ChevronDown, ChevronUp } from "lucide-react";
import { toast } from "sonner";

export default function AddYourBrandClient() {
  const [formData, setFormData] = useState({
    brandName: "",
    website: "",
    contactPerson: "",
    email: "",
    productCategory: "",
    launchMarkets: ""
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // TODO: Replace with actual API endpoint
      const response = await fetch("/api/brand-apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Brand application submitted successfully!");
        setFormData({
          brandName: "",
          website: "",
          contactPerson: "",
          email: "",
          productCategory: "",
          launchMarkets: ""
        });
      } else {
        throw new Error("Failed to submit application");
      }
    } catch (error) {
      console.error("Application error:", error);
      toast.error("Failed to submit application. Please try again.");
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How does the brand partnership process work?",
      answer: "Once you submit your application, our team reviews your brand within 48 hours. If approved, we'll schedule an onboarding call to discuss logistics, compliance requirements, and launch timeline. We handle all the technical integration and compliance paperwork."
    },
    {
      question: "What types of brands qualify for the chillNOW platform?",
      answer: "We welcome cannabis brands, wellness products, premium snacks, and lifestyle brands that align with our values. All brands must meet our quality standards and compliance requirements. We're particularly interested in brands that share our commitment to excellence and customer experience."
    },
    {
      question: "Are there any costs to list on chillNOW?",
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
    }
  ];

  return (
    <>
      {/* APPLICATION FORM SECTION */}
      <section id="brand-form" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Apply Now</h2>
              <p className="text-xl text-gray-600">
                Ready to join the chillNOW family? Fill out the form below.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="brandName">Brand Name *</Label>
                  <Input
                    id="brandName"
                    name="brandName"
                    type="text"
                    required
                    value={formData.brandName}
                    onChange={handleInputChange}
                    className="bg-white border-gray-300"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="website">Website *</Label>
                  <Input
                    id="website"
                    name="website"
                    type="url"
                    required
                    value={formData.website}
                    onChange={handleInputChange}
                    className="bg-white border-gray-300"
                  />
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="contactPerson">Contact Person *</Label>
                  <Input
                    id="contactPerson"
                    name="contactPerson"
                    type="text"
                    required
                    value={formData.contactPerson}
                    onChange={handleInputChange}
                    className="bg-white border-gray-300"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-white border-gray-300"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="productCategory">Product Category *</Label>
                <select
                  id="productCategory"
                  name="productCategory"
                  required
                  value={formData.productCategory}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                >
                  <option value="">Select category</option>
                  <option value="cannabis">Cannabis Products</option>
                  <option value="wellness">Wellness & Supplements</option>
                  <option value="snacks">Premium Snacks</option>
                  <option value="lifestyle">Lifestyle & Accessories</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="launchMarkets">Launch Markets *</Label>
                <Textarea
                  id="launchMarkets"
                  name="launchMarkets"
                  rows={3}
                  required
                  value={formData.launchMarkets}
                  onChange={handleInputChange}
                  placeholder="Which markets would you like to launch in? (e.g., Denver, Phoenix, Las Vegas, Kansas City)"
                  className="bg-white border-gray-300 resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-emerald-500 to-fuchsia-500 hover:from-emerald-600 hover:to-fuchsia-600 text-lg py-4 font-bold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Submit Your Brand
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about partnering with chillNOW
              </p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                  >
                    <span className="font-semibold text-lg text-gray-900">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-center">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the brands that are already seeing incredible growth with chillNOW. 
              Let's build something amazing together.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-emerald-500 to-fuchsia-500 hover:from-emerald-600 hover:to-fuchsia-600 text-lg px-8 py-4 font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  document.getElementById('brand-form')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Apply Now
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
