import React from "react";
import { Target, Heart, Zap, Users } from "lucide-react";

const AboutMission = () => {
  const missionPoints = [
    {
      icon: Target,
      title: "Precision Delivery",
      description: "Every order is tracked, verified, and delivered with surgical precision."
    },
    {
      icon: Heart,
      title: "Community First",
      description: "We're building more than a service—we're creating a community of responsible cannabis enthusiasts."
    },
    {
      icon: Zap,
      title: "Innovation Driven",
      description: "Cutting-edge technology meets traditional values in every aspect of our platform."
    },
    {
      icon: Users,
      title: "People Powered",
      description: "Our success comes from the amazing people who choose to work with us and trust us."
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-500/5 via-transparent to-fuchsia-500/5"></div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-r from-fuchsia-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4 sm:mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-fuchsia-400 drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
              Our Mission
            </span>
          </h2>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto px-2 text-lg">
            We're on a mission to revolutionize how people access premium cannabis—making it safe, fast, and reliable for everyone.
          </p>
        </header>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Visual/3D element */}
          <div className="relative">
            {/* 3D-inspired visual element */}
            <div className="relative w-full h-80 rounded-2xl overflow-hidden">
              {/* Gradient background with floating elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-fuchsia-500/20"></div>
              
              {/* Floating geometric shapes */}
              <div className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute top-16 right-12 w-12 h-12 bg-gradient-to-r from-teal-400 to-fuchsia-400 rounded-full opacity-70 animate-bounce"></div>
              <div className="absolute bottom-12 left-16 w-20 h-20 bg-gradient-to-r from-fuchsia-400 to-pink-400 rounded-full opacity-50 animate-spin"></div>
              <div className="absolute bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-emerald-400 to-fuchsia-400 rounded-full opacity-60 animate-pulse"></div>
              
              {/* Central focus element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-gradient-to-r from-emerald-400 via-teal-300 to-fuchsia-400 rounded-full flex items-center justify-center shadow-2xl">
                  <Target className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-40"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-fuchsia-400 to-pink-400 rounded-full opacity-50"></div>
          </div>

          {/* Right column - Content */}
          <div className="space-y-8">
            {/* Mission statement */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Delivering the Future of Cannabis
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We believe that premium cannabis should be as accessible as ordering food delivery. 
                Our mission is to create a seamless, safe, and reliable platform that connects 
                cannabis enthusiasts with the products they love, delivered by people they can trust.
              </p>
            </div>

            {/* Mission points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {missionPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-card/50 border border-border/50">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400 flex-shrink-0">
                    <point.icon className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-foreground text-sm mb-1">{point.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to action */}
            <div className="pt-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-fuchsia-500/10 border border-emerald-500/20 text-emerald-500 font-semibold text-sm">
                <Heart className="w-4 h-4" />
                <span>Join our mission to revolutionize cannabis delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
