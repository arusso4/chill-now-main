"use client";
import React from "react";
import Link from "next/link";
import { 
  Heart, 
  Leaf, 
  Shield, 
  Users, 
  Globe, 
  Mail, 
  HelpCircle, 
  FileText, 
  Lock,
  Building2,
  Briefcase,
  Newspaper,
  Store,
  Plus,
  Car,
  Clock,
  MapPin,
  Phone,
  MessageCircle,
  Star,
  Zap,
  Sparkles,
  Flame
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Company",
      icon: Building2,
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/coming-soon" },
        { name: "Blog", href: "/blog" },
        { name: "Press", href: "/coming-soon" }
      ]
    },
    {
      title: "Support",
      icon: HelpCircle,
      links: [
        { name: "FAQ", href: "/faq" },
        { name: "Safety", href: "/safety" },
        { name: "Help Center", href: "/coming-soon" },
        { name: "Contact Us", href: "/coming-soon" },
        { name: "Terms of Service", href: "/coming-soon" },
        { name: "Privacy Policy", href: "/coming-soon" }
      ]
    },
    {
      title: "Get Started",
      icon: Plus,
      links: [
        { name: "Join Waitlist", href: "/coming-soon", icon: Clock },
        { name: "Limited Drops", href: "/limited-drops", icon: Flame },
        { name: "Become Driver", href: "/drive", icon: Car },
        { name: "Add Brand", href: "/add-your-brand", icon: Store },
        { name: "Marketplace", href: "/marketplace#quiz-section", icon: Building2 }
      ]
    },
    {
      title: "Connect",
      icon: MessageCircle,
      links: [
        { name: "Instagram", href: "https://instagram.com/chillnow" },
        { name: "Twitter", href: "https://twitter.com/chillnow" },
        { name: "LinkedIn", href: "https://linkedin.com/company/chillnow" },
        { name: "Email", href: "mailto:hello@chillnow.com", icon: Mail }
      ]
    }
  ];

  return (
    <footer className="bg-card/50 border-t border-border mt-auto" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section - Takes up 1 column */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-black bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                chillNOW
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Premium cannabis and wellness delivery. 
              Quality products, lightning-fast delivery, exceptional service.
            </p>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Shield className="w-4 h-4 text-green-500" />
                <span className="font-semibold">100% Secure</span>
              </div>
              <div className="flex items-center space-x-1">
                <Globe className="w-4 h-4 text-blue-500" />
                <span className="font-semibold">Legal Markets</span>
              </div>
            </div>
          </div>

          {/* Footer Sections - Each takes up 1 column */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <div className="flex items-center space-x-2">
                <section.icon className="w-5 h-5 text-green-500" />
                <h3 className="font-black text-foreground">{section.title}</h3>
              </div>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-green-500 transition-all duration-300 flex items-center space-x-2 group hover:translate-x-1 font-semibold w-full text-left"
                    >
                      {link.icon && (
                        <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-3" />
                      )}
                      <span className="group-hover:font-bold transition-all duration-300">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-sm text-muted-foreground text-center sm:text-left">
              <p>© {currentYear} chillNOW. All rights reserved.</p>
              <p className="mt-1 flex items-center justify-center sm:justify-start space-x-1">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>for chill vibes</span>
              </p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4 text-green-500" />
                <span className="font-semibold">Trusted by thousands</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="w-4 h-4 text-blue-500" />
                <span className="font-semibold">No spam • Unsubscribe anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 