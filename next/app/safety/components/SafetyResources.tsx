import React from "react";
import { FileText, Download, ExternalLink, Shield, Users, Phone } from "lucide-react";

const SafetyResources = () => {
  const resources = [
    {
      icon: FileText,
      title: "Safety Policy",
      description: "Complete overview of our safety protocols and procedures",
      type: "PDF",
      size: "2.3 MB",
      color: "emerald"
    },
    {
      icon: Shield,
      title: "Driver Background Check Process",
      description: "Detailed explanation of our driver verification and screening process",
      type: "PDF",
      size: "1.8 MB",
      color: "fuchsia"
    },
    {
      icon: Users,
      title: "Customer Safety Guidelines",
      description: "Best practices for safe cannabis delivery and responsible consumption",
      type: "PDF",
      size: "1.5 MB",
      color: "teal"
    }
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: "Safety Hotline",
      description: "24/7 emergency safety support",
      contact: "1-800-SAFE-NOW",
      color: "emerald"
    },
    {
      icon: FileText,
      title: "Safety Reports",
      description: "Report safety concerns or incidents",
      contact: "safety@chillnow.com",
      color: "fuchsia"
    }
  ];

  const getIconColor = (color: string) => {
    switch (color) {
      case "emerald":
        return "text-emerald-400";
      case "fuchsia":
        return "text-fuchsia-400";
      case "teal":
        return "text-teal-400";
      default:
        return "text-emerald-400";
    }
  };

  const getBgColor = (color: string) => {
    switch (color) {
      case "emerald":
        return "bg-emerald-500/15";
      case "fuchsia":
        return "bg-fuchsia-500/15";
      case "teal":
        return "bg-teal-500/15";
      default:
        return "bg-emerald-500/15";
    }
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4 sm:mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-fuchsia-400 drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
              Safety Resources
            </span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto px-2">
            Download our safety policies, guidelines, and contact information for support.
          </p>
        </header>
        
        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {resources.map((resource, index) => (
            <div key={index} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              {/* Icon */}
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-full ${getBgColor(resource.color)} ${getIconColor(resource.color)} mb-4`}>
                <resource.icon className="w-6 h-6" aria-hidden="true" />
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2">{resource.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{resource.description}</p>
              
              {/* Download Button */}
              <button className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-fuchsia-500 hover:from-emerald-600 hover:to-fuchsia-600 text-white font-medium transition-all duration-300">
                <Download className="w-4 h-4" />
                Download {resource.type}
                <span className="text-xs opacity-75">({resource.size})</span>
              </button>
            </div>
          ))}
        </div>
        
        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {contactInfo.map((contact, index) => (
            <div key={index} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              {/* Icon */}
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-full ${getBgColor(contact.color)} ${getIconColor(contact.color)} mb-4`}>
                <contact.icon className="w-6 h-6" aria-hidden="true" />
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2">{contact.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{contact.description}</p>
              <p className="text-emerald-500 font-bold">{contact.contact}</p>
            </div>
          ))}
        </div>
        
        {/* Additional Links */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 font-bold text-sm sm:text-base">
            <ExternalLink className="w-4 h-4" />
            <span>View all safety policies and procedures</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyResources;
