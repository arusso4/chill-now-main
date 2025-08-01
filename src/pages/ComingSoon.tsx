import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Zap,
  Clock,
  Flame,
  Sparkles,
  ArrowRight,
  Eye,
  Skull,
  Coffee
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";

const ComingSoon = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    try {
      // For now, simulate the database insert since we need to set up the table
      console.log('Adding to coming soon list:', { email });

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // TODO: Uncomment this when the table is created
      // const { error } = await supabase
      //   .from('coming_soon_signups')
      //   .insert([{ email }]);

      // if (error) {
      //   console.error('Error adding to list:', error);
      //   alert('There was an error. Please try again.');
      //   return;
      // }

      setIsSubmitted(true);
      setEmail("");

    } catch (error) {
      console.error('Error adding to list:', error);
      alert('There was an error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Coming Soon | ChillNOW</title>
        <meta 
          name="description" 
          content="You're early. The chaos hasn't been released yet. Join the cult to be first in line." 
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="min-h-screen bg-background overflow-hidden pt-16">
        {/* Hero Section */}
        <section 
          className="relative min-h-screen flex items-center justify-center overflow-hidden pt-8"
          style={{
            background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)'
          }}
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-red-400 to-orange-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-orange-400 to-red-500 rounded-full opacity-30 animate-bounce"></div>
            <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-25 animate-spin"></div>
            <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-15 animate-pulse delay-1000"></div>
            <div className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-20 animate-bounce delay-500"></div>
          </div>

          {/* Glitch Effect Overlay */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/5 to-transparent animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/3 to-transparent animate-pulse delay-1000"></div>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-bold mb-8 border-0">
              <Flame className="w-4 h-4" aria-hidden="true" />
              <span>🔥 UNDER CONSTRUCTION</span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-red-400 via-orange-500 to-yellow-600 bg-clip-text text-transparent">
                You're Early.
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent">
                The Chaos Hasn't
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent">
                Been Released Yet.
              </span>
            </h1>
            
            {/* Subtext */}
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              The page you're trying to reach is still fermenting in the lab. Good things come to those who chill.
            </p>
            
                         {/* Animated "Coming Soon" Text */}
             <div className="mb-12">
               <div className="inline-block">
                 <span className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent glitch-text">
                   COMING SOON
                 </span>
                 <div className="h-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 mt-2 flicker-text"></div>
               </div>
             </div>
            
            {/* Email Signup Form */}
            {!isSubmitted ? (
              <div className="max-w-md mx-auto">
                <h2 className="text-2xl sm:text-3xl font-black mb-6">
                  <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                    Join the Cult
                  </span>
                  <br />
                  <span className="text-xl text-muted-foreground">
                    to be first in line
                  </span>
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-background/50 border-2 border-orange-500/30 text-lg py-4 px-6 focus:border-orange-500 focus:ring-orange-500/20"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <Eye className="w-5 h-5 text-muted-foreground" />
                    </div>
                  </div>
                  
                  <Button 
                    type="submit"
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-lg py-4 font-bold border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Joining...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5 mr-2" />
                        Join the Cult
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            ) : (
              <div className="max-w-md mx-auto">
                <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-xl p-8">
                  <div className="text-6xl mb-4">🎉</div>
                  <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                    Welcome to the Cult
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    You're now on the list. We'll let you know when the chaos is ready to be unleashed.
                  </p>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="text-lg px-8 py-4 font-bold border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300"
                    onClick={() => setIsSubmitted(false)}
                  >
                    <Zap className="w-5 h-5 mr-2" />
                    Add Another Email
                  </Button>
                </div>
              </div>
            )}
            
            {/* Fun Stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-black text-foreground mb-2">666</div>
                <div className="text-sm text-muted-foreground font-semibold">Cult Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-foreground mb-2">13</div>
                <div className="text-sm text-muted-foreground font-semibold">Days Until Chaos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-foreground mb-2">420</div>
                <div className="text-sm text-muted-foreground font-semibold">Blaze It</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-foreground mb-2">∞</div>
                <div className="text-sm text-muted-foreground font-semibold">Chill Vibes</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ComingSoon; 