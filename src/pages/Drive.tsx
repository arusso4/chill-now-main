import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  MapPin, 
  Car, 
  Smartphone, 
  UserCheck, 
  Calendar, 
  DollarSign, 
  Users, 
  Heart, 
  Shield,
  Clock,
  Zap,
  Star,
  ChevronRight,
  Play
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Drive = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cityZip: "",
    shortAnswer: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Application submitted:", formData);
    // You can add toast notification or redirect logic here
    alert("Thank you for your application! We'll be in touch soon.");
  };

  // Handle anchor link scrolling
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const elementId = hash.substring(1);
      const element = document.getElementById(elementId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'center'
          });
          
          // Add pulse animation if scrolling to application form
          if (elementId === 'application-form') {
            element.classList.add('pulse-on-load');
            setTimeout(() => {
              element.classList.remove('pulse-on-load');
            }, 1000);
          }
        }, 100);
      }
    }
  }, []);

  const benefits = [
    {
      icon: Calendar,
      title: "Flexible Schedule",
      description: "Work when you want, take breaks when you need. Full-time, part-time, or just weekends."
    },
    {
      icon: DollarSign,
      title: "Good Pay",
      description: "Competitive base pay plus tips. Weekly payouts with instant tip access."
    },
    {
      icon: Heart,
      title: "Fun Vibes",
      description: "Join a team that values work-life balance and chill customer interactions."
    }
  ];

  const howItWorks = [
    {
      step: "1",
      icon: UserCheck,
      title: "Sign Up",
      description: "Complete a quick application with your basic info and driving history."
    },
    {
      step: "2",
      icon: Shield,
      title: "Get Approved",
      description: "We'll review your application and help you get your cannabis badge if needed."
    },
    {
      step: "3",
      icon: Car,
      title: "Start Delivering",
      description: "Download our app, accept deliveries, and start earning money on your schedule."
    }
  ];

  const driverTestimonials = [
    {
      name: "Marcus T.",
      role: "Full-time Driver",
      city: "Denver, CO",
      image: "/images/marcus.jpg",
      quote: "I've been driving for chillNOW for 8 months and it's the best gig I've ever had. The customers are amazing, the pay is great, and I love the flexibility.",
      rating: 5,
      earnings: "$2,400/month"
    },
    {
      name: "Jasmine L.",
      role: "Part-time Driver",
      city: "Denver, CO",
      image: "/images/jasmine.jpg",
      quote: "I drive on weekends and make enough to cover my rent. The app is super easy to use and the support team is always helpful.",
      rating: 5,
      earnings: "$800/month"
    },
    {
      name: "Carlos R.",
      role: "Student Driver",
      city: "Denver, CO",
      image: "/images/carlos.jpg",
      quote: "Perfect for my schedule as a student. I can work around my classes and still make good money. Plus, the customers are super chill!",
      rating: 5,
      earnings: "$1,200/month"
    }
  ];

  const faqs = [
    {
      question: "What are the requirements to become a driver?",
      answer: "You need to be 21+, have a valid driver's license with a clean record, a reliable vehicle, a smartphone, and a cannabis badge (we'll help you get one if needed)."
    },
    {
      question: "How much can I earn as a driver?",
      answer: "Drivers typically earn $18-25/hour including tips. Full-time drivers average $2,000-3,000/month, while part-time drivers can earn $500-1,500/month depending on hours worked."
    },
    {
      question: "What if I don't have a cannabis badge?",
      answer: "No worries! We'll help you get your cannabis badge if you qualify. The process usually takes 2-4 weeks and we cover the costs for approved drivers."
    },
    {
      question: "How flexible is the schedule?",
      answer: "Very flexible! You can work full-time, part-time, or just weekends. Set your own hours and take breaks whenever you need. No minimum hours required."
    },
    {
      question: "What areas do you deliver to?",
      answer: "Currently we're hiring in Denver, CO with plans to expand to Phoenix, Las Vegas, and Kansas City soon. Check our locations section for current openings."
    },
    {
      question: "How do I get paid?",
      answer: "We pay weekly via direct deposit. Tips are available instantly in the app, and base pay is processed every Monday for the previous week."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Become a ChillNOW Driver - Flexible Cannabis Delivery Jobs</title>
        <meta 
          name="description" 
          content="Join ChillNOW as a delivery driver. Flexible hours, competitive pay, and be part of the cannabis delivery revolution. Apply now for fast-track onboarding." 
        />
        <meta name="keywords" content="cannabis delivery driver, delivery jobs, flexible work, cannabis industry jobs, driver application, delivery service" />
        <link rel="canonical" href="https://chillnow.com/drive" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://chillnow.com/drive" />
        <meta property="og:title" content="Become a ChillNOW Driver - Flexible Cannabis Delivery Jobs" />
        <meta property="og:description" content="Join ChillNOW as a delivery driver. Flexible hours, competitive pay, and be part of the cannabis delivery revolution. Apply now for fast-track onboarding." />
        <meta property="og:image" content="https://chillnow.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="ChillNOW" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@chillnow" />
        <meta name="twitter:creator" content="@chillnow" />
        <meta name="twitter:url" content="https://chillnow.com/drive" />
        <meta name="twitter:title" content="Become a ChillNOW Driver - Flexible Cannabis Delivery Jobs" />
        <meta name="twitter:description" content="Join ChillNOW as a delivery driver. Flexible hours, competitive pay, and be part of the cannabis delivery revolution. Apply now for fast-track onboarding." />
        <meta name="twitter:image" content="https://chillnow.com/og-image.jpg" />
        <meta name="twitter:image:alt" content="ChillNOW driver application and job opportunities" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Drive Chill. Deliver Fast. Get Paid.
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Earn money on your schedule by delivering Chill products to customers in your city.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:bg-gradient-primary/90 text-lg px-8 py-4"
              onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Apply Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4"
              onClick={() => window.open('https://www.youtube.com/watch?v=example', '_blank')}
              aria-label="Watch driver testimonial video"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Video
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Drive with chillNOW</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join the most chill delivery team in the industry
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <benefit.icon className="w-16 h-16 mx-auto mb-6 text-primary" />
                <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 sm:px-6 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get started in just 3 simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                  {step.step}
                </div>
                <step.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                {index < howItWorks.length - 1 && (
                  <ChevronRight className="hidden md:block absolute top-8 -right-4 w-8 h-8 text-primary" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Driver Testimonials Section */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Our Drivers Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real stories from real drivers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {driverTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{testimonial.city}</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    {testimonial.earnings}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about driving with chillNOW
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Secondary CTA Section */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Start Driving?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of drivers who are already earning money with chillNOW. 
            Apply today and start delivering in as little as 1 week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:bg-gradient-primary/90 text-lg px-8 py-4"
              onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Apply Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="py-16 px-4 sm:px-6 bg-card/50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Apply Now</h2>
            <p className="text-lg text-muted-foreground">
              Ready to join the chillNOW team? Fill out the form below.
            </p>
          </div>
          
                     <div className="bg-card p-8 rounded-xl border border-border">
             <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                                 <div className="space-y-2">
                   <label htmlFor="name" className="text-sm font-medium">Full Name *</label>
                   <input
                     id="name"
                     name="name"
                     type="text"
                     required
                     value={formData.name}
                     onChange={handleInputChange}
                     className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                   />
                 </div>
                
                                 <div className="space-y-2">
                   <label htmlFor="email" className="text-sm font-medium">Email *</label>
                   <input
                     id="email"
                     name="email"
                     type="email"
                     required
                     value={formData.email}
                     onChange={handleInputChange}
                     className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                   />
                 </div>
              </div>
              
                             <div className="grid sm:grid-cols-2 gap-6">
                 <div className="space-y-2">
                   <label htmlFor="phone" className="text-sm font-medium">Phone Number *</label>
                   <input
                     id="phone"
                     name="phone"
                     type="tel"
                     required
                     value={formData.phone}
                     onChange={handleInputChange}
                     className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                   />
                 </div>
                 
                 <div className="space-y-2">
                   <label htmlFor="cityZip" className="text-sm font-medium">City/ZIP Code *</label>
                   <input
                     id="cityZip"
                     name="cityZip"
                     type="text"
                     required
                     value={formData.cityZip}
                     onChange={handleInputChange}
                     className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                   />
                 </div>
               </div>
              
                             <div className="space-y-2">
                 <label htmlFor="shortAnswer" className="text-sm font-medium">Why do you want to drive for chillNOW? *</label>
                 <textarea
                   id="shortAnswer"
                   name="shortAnswer"
                   rows={4}
                   required
                   value={formData.shortAnswer}
                   onChange={handleInputChange}
                   placeholder="Tell us why you'd be a great fit for our team..."
                   className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                 />
               </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-primary hover:bg-gradient-primary/90 text-lg py-4"
              >
                Submit Application
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Drive; 