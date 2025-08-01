import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield,
  UserCheck,
  MapPin,
  Navigation,
  CreditCard,
  Lock,
  TestTube,
  AlertTriangle,
  CheckCircle,
  Zap,
  Leaf,
  Heart,
  Star,
  ArrowRight,
  Phone,
  Mail
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Safety = () => {
  const safetyFeatures = [
    {
      icon: UserCheck,
      title: "Background-Checked Drivers",
      description: "Every driver goes through rigorous vetting. We're talking FBI-level background checks, driving record reviews, and personality assessments. Because we don't just hire drivers — we hire people we'd trust with our own stash.",
      badge: "Vetted & Verified",
      color: "from-green-500 to-blue-500"
    },
    {
      icon: MapPin,
      title: "Verified Markets Only",
      description: "We only operate where it's 100% legal. No gray areas, no sketchy jurisdictions. Every market we serve has proper licensing and regulatory oversight. We're rebels, not criminals.",
      badge: "Legal Markets",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: Navigation,
      title: "Real-Time Tracking",
      description: "Watch your delivery like a hawk. Real-time GPS tracking, driver updates, and estimated arrival times. You'll know exactly where your goods are and when they'll arrive. No more wondering if your driver got lost.",
      badge: "Live Updates",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: CreditCard,
      title: "Secure Payments",
      description: "Your money is safer with us than in a Swiss bank. PCI-compliant processing, encrypted transactions, and discreet billing. Your bank statement won't scream 'CANNABIS DELIVERY' to your nosy roommate.",
      badge: "PCI Compliant",
      color: "from-pink-500 to-red-500"
    },
    {
      icon: Lock,
      title: "Your Privacy, Protected",
      description: "We take privacy seriously (for once). Your data is encrypted, your identity is protected, and we don't sell your info to sketchy third parties. What happens in your delivery, stays in your delivery.",
      badge: "Encrypted",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: TestTube,
      title: "Know What You're Getting",
      description: "Every product is lab-tested with certificates of analysis (COAs). No mystery ingredients, no questionable sources. We're talking third-party testing, batch tracking, and full transparency. Because you deserve to know exactly what you're putting in your body.",
      badge: "Lab Tested",
      color: "from-orange-500 to-yellow-500"
    }
  ];

  const safetyStats = [
    {
      number: "100%",
      label: "Background Checked",
      icon: UserCheck
    },
    {
      number: "24/7",
      label: "Support Available",
      icon: Phone
    },
    {
                             number: "60min",
      label: "Delivery Guarantee",
      icon: Zap
    },
    {
      number: "1000+",
      label: "Happy Customers",
      icon: Heart
    }
  ];

  return (
    <>
      <Helmet>
        <title>Safety & Security | ChillNOW</title>
        <meta 
          name="description" 
          content="Learn about ChillNOW's comprehensive safety measures, from background-checked drivers to lab-tested products. Your security is our priority." 
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
            <Badge className="mb-6 bg-gradient-to-r from-green-500 to-blue-500 text-white border-0 px-4 py-2 text-sm font-bold">
              <Shield className="w-4 h-4 mr-2" />
              SAFETY FIRST
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Safe. Chill.
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent">
                Delivered.
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Fast, discreet, and secure cannabis delivery. We take safety seriously so you don't have to worry about anything except what strain to try next.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-lg px-8 py-4 font-bold border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => document.getElementById('report-issue')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <AlertTriangle className="w-5 h-5 mr-2" />
                Report an Issue
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 font-bold border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300"
                onClick={() => document.getElementById('safety-features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Shield className="w-5 h-5 mr-2" />
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Safety Stats */}
        <section className="py-16 px-4 sm:px-6 bg-card/50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {safetyStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-black text-foreground mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground font-semibold">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Safety Features */}
        <section id="safety-features" className="py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">
                <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                  We Don't Mess Around
                </span>
                <br />
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  With Safety
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                When it comes to your security and peace of mind, we're as serious as a heart attack. 
                Here's how we keep you safe, secure, and satisfied.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {safetyFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-card rounded-xl border border-border p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className={`bg-gradient-to-r ${feature.color} w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-2xl font-bold text-foreground">{feature.title}</h3>
                          <Badge className={`bg-gradient-to-r ${feature.color} text-white border-0 text-xs font-bold`}>
                            {feature.badge}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-20 px-4 sm:px-6 bg-card/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-black mb-8">
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Trusted by Thousands
              </span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-6xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold mb-2">Licensed & Insured</h3>
                <p className="text-muted-foreground">Full coverage for your peace of mind</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">🔒</div>
                <h3 className="text-xl font-bold mb-2">Data Protected</h3>
                <p className="text-muted-foreground">Your information stays private</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-2">Fast Response</h3>
                <p className="text-muted-foreground">24/7 support when you need it</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Still Have Concerns?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                We get it. Cannabis delivery can feel sketchy. But we're here to prove that safe, 
                legal, and professional delivery is not only possible — it's the future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-lg px-8 py-4 font-bold border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  onClick={() => document.getElementById('report-issue')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Support
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-4 font-bold border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Report Issue CTA */}
        <section id="report-issue" className="py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-8">
              <div className="text-6xl mb-6">🚨</div>
              <h2 className="text-3xl sm:text-4xl font-black mb-6">
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Report an Issue
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Something not right? We want to know about it. Your feedback helps us keep everyone safe 
                and maintain the high standards you expect from ChillNOW.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/report-issue">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-lg px-8 py-4 font-bold border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    Report an Issue
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-4 font-bold border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Emergency Contact
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Safety; 