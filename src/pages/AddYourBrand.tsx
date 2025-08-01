import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Star, 
  Globe, 
  Users, 
  TrendingUp, 
  Shield, 
  Package, 
  Zap,
  ChevronDown,
  ChevronUp
} from "lucide-react";


const AddYourBrand = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Brand application submitted:", formData);
    // You can add toast notification or redirect logic here
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
      <Helmet>
        <title>Partner with ChillNOW - Add Your Cannabis Brand to Our Platform</title>
        <meta 
          name="description" 
          content="Partner with ChillNOW to reach more customers. Add your cannabis brand to our premium delivery platform. Fast onboarding, competitive rates, and dedicated support." 
        />
        <meta name="keywords" content="cannabis brand partnership, cannabis vendor, cannabis platform, cannabis distribution, brand partnership, cannabis business" />
        <link rel="canonical" href="https://chillnow.com/add-your-brand" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://chillnow.com/add-your-brand" />
        <meta property="og:title" content="Partner with ChillNOW - Add Your Cannabis Brand to Our Platform" />
        <meta property="og:description" content="Partner with ChillNOW to reach more customers. Add your cannabis brand to our premium delivery platform. Fast onboarding, competitive rates, and dedicated support." />
        <meta property="og:image" content="https://chillnow.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="ChillNOW" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@chillnow" />
        <meta name="twitter:creator" content="@chillnow" />
        <meta name="twitter:url" content="https://chillnow.com/add-your-brand" />
        <meta name="twitter:title" content="Partner with ChillNOW - Add Your Cannabis Brand to Our Platform" />
        <meta name="twitter:description" content="Partner with ChillNOW to reach more customers. Add your cannabis brand to our premium delivery platform. Fast onboarding, competitive rates, and dedicated support." />
        <meta name="twitter:image" content="https://chillnow.com/og-image.jpg" />
        <meta name="twitter:image:alt" content="ChillNOW brand partnership opportunities" />
      </Helmet>
      
      <div className="min-h-screen bg-background flex flex-col">
      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Be Where the Chill Happens
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join the most innovative cannabis and wellness delivery platform. 
            Get your brand in front of customers who demand quality and convenience.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:bg-gradient-primary/90 text-lg px-8 py-4"
            onClick={() => document.getElementById('brand-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Submit Your Brand
          </Button>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Partner with chillNOW?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're building the future of cannabis and wellness delivery. 
              Join brands that are already seeing incredible growth with our platform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-card rounded-xl border border-border">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Rapid Growth</h3>
              <p className="text-muted-foreground">Access to a growing customer base with high purchase intent</p>
            </div>
            <div className="text-center p-6 bg-card rounded-xl border border-border">
              <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Compliance First</h3>
              <p className="text-muted-foreground">We handle all regulatory requirements and paperwork</p>
            </div>
            <div className="text-center p-6 bg-card rounded-xl border border-border">
              <Zap className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Fast Integration</h3>
              <p className="text-muted-foreground">Get live on our platform in as little as 2-3 weeks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Testimonial Section */}
      <section className="py-16 px-4 sm:px-6 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Trusted by Leading Brands</h2>
          </div>
          
          <div className="bg-background rounded-2xl p-8 border border-border">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <blockquote className="text-xl font-medium mb-4 leading-relaxed">
                  "chillNOW has transformed how we reach our customers. The platform's focus on quality and compliance gives us confidence, while their rapid delivery model drives incredible customer satisfaction. Our sales have increased 300% since joining."
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="font-semibold">Sarah Chen</div>
                    <div className="text-sm text-muted-foreground">Founder, Elevated Wellness Co.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Showcase Section */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Brands</h2>
            <p className="text-lg text-muted-foreground">
              Join these premium brands already delivering with chillNOW
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Elevated Wellness", category: "Cannabis" },
              { name: "Chill Snacks", category: "Premium Snacks" },
              { name: "Zen Botanicals", category: "Wellness" },
              { name: "Urban Chill", category: "Lifestyle" }
            ].map((brand, index) => (
              <div key={index} className="text-center p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                  <Package className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{brand.name}</h3>
                <Badge variant="secondary" className="text-sm">
                  {brand.category}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="brand-form" className="py-16 px-4 sm:px-6 bg-card/50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Apply Now</h2>
            <p className="text-lg text-muted-foreground">
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
                  className="bg-background border-border"
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
                  className="bg-background border-border"
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
                  className="bg-background border-border"
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
                  className="bg-background border-border"
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
                className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
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
                className="bg-background border-border resize-none"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-gradient-primary hover:bg-gradient-primary/90 text-lg py-4"
            >
              Submit Your Brand
            </Button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about partnering with chillNOW
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-card rounded-xl border border-border overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-accent/50 transition-colors"
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 bg-gradient-hero text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join the brands that are already seeing incredible growth with chillNOW. 
            Let's build something amazing together.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:bg-gradient-primary/90 text-lg px-8 py-4"
            onClick={() => document.getElementById('brand-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Apply Now
          </Button>
        </div>
      </section>
      </main>
    </div>
    </>
  );
};

export default AddYourBrand; 