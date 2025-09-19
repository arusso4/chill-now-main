"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, CheckCircle, Phone, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { EmailSignupDialog } from "@/components/EmailSignupDialog";

const SafetyCTA = () => {
  const router = useRouter();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  return (
    <section className="relative py-16 bg-pink-500 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/20 border border-white/30 text-white font-bold mb-6 sm:mb-8 text-sm sm:text-base">
          <Shield className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />
          <span>Safety First, Always</span>
        </div>
        
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 leading-tight text-white">
          Ready to Experience{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-fuchsia-400 drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
            Safe Delivery?
          </span>
        </h2>
        
        {/* Subheadline */}
        <p className="text-lg sm:text-xl md:text-2xl text-pink-100 mb-8 sm:mb-12 max-w-2xl mx-auto px-2">
          Join thousands of customers who trust ChillNOW for safe, secure, and responsible cannabis delivery.
        </p>
        
        {/* Safety Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="flex items-center gap-3 text-left p-4 sm:p-4 rounded-xl bg-white rounded-2xl shadow-lg">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400 flex-shrink-0">
              <Shield className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="font-bold text-sm sm:text-base text-foreground">Background Checked</div>
              <div className="text-xs sm:text-sm text-muted-foreground">100% verified drivers</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 text-left p-4 sm:p-4 rounded-xl bg-white rounded-2xl shadow-lg">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-fuchsia-500/15 text-fuchsia-400 flex-shrink-0">
              <CheckCircle className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="font-bold text-sm sm:text-base text-foreground">Age Verified</div>
              <div className="text-xs sm:text-sm text-muted-foreground">21+ ID required</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 text-left p-4 sm:p-4 rounded-xl bg-white rounded-2xl shadow-lg">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-teal-500/15 text-teal-400 flex-shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="font-bold text-sm sm:text-base text-foreground">24/7 Support</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Safety hotline</div>
            </div>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-emerald-500 to-fuchsia-500 hover:from-emerald-600 hover:to-fuchsia-600 text-white text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-6 w-full sm:w-auto font-bold border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={() => setIsDialogOpen(true)}
            aria-label="Join the waitlist for safe cannabis delivery"
          >
            <Shield className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Join the Waitlist
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-6 w-full sm:w-auto font-bold border-2 border-white text-white hover:bg-accent/50 transition-all duration-300"
            onClick={() => router.push('/faq')}
            aria-label="Learn more about our safety measures"
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Learn More
          </Button>
        </div>
        
        {/* Trust Indicators */}
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-pink-100">
          <div className="flex -space-x-2" aria-label="Safety certifications">
            {[
              { id: 1, name: "Licensed" },
              { id: 2, name: "Insured" },
              { id: 3, name: "Verified" },
              { id: 4, name: "Secure" }
            ].map(item => (
              <div 
                key={item.id} 
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-emerald-500 to-fuchsia-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold" 
                aria-label={`${item.name} certification`}
                role="img"
              >
                {item.name.charAt(0)}
              </div>
            ))}
          </div>
          <span>certified safe delivery</span>
        </div>
        
        {/* Trust Badge */}
        <p className="text-xs text-pink-100 mt-4 sm:mt-6 px-2">
          100% secure • Licensed operators • Insured delivery • Operating in legal markets only
        </p>
      </div>
      
      {/* Email Signup Dialog */}
      <EmailSignupDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </section>
  );
};

export default SafetyCTA;
