import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  Flame, 
  Sparkles, 
  Bell, 
  Zap, 
  Leaf, 
  ArrowRight, 
  Calendar,
  Users,
  Star,
  ShoppingBag,
  Eye
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const LimitedDrops = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const { toast } = useToast();

  // Countdown timer for next drop (example: 3 days from now)
  useEffect(() => {
    const nextDrop = new Date();
    nextDrop.setDate(nextDrop.getDate() + 3);
    nextDrop.setHours(20, 0, 0, 0); // 8 PM

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = nextDrop.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleEmailSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('coming_soon_signups')
        .insert([
          { 
            email, 
            source: 'limited_drops',
            created_at: new Date().toISOString()
          }
        ]);

      if (error) throw error;

      toast({
        title: "You're on the list! 🔥",
        description: "We'll notify you when the next drop goes live.",
      });
      setEmail("");
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact support.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const upcomingDrops = [
    {
      id: 1,
      name: "Sunset OG Bundle",
      description: "Limited edition strain with exclusive accessories",
      price: "$89",
      originalPrice: "$120",
      image: "/placeholder.svg",
      dropDate: "2024-01-15",
      spots: 50,
      claimed: 23,
      status: "upcoming"
    },
    {
      id: 2,
      name: "Chill Vibes Collection",
      description: "Curated wellness products for ultimate relaxation",
      price: "$65",
      originalPrice: "$85",
      image: "/placeholder.svg",
      dropDate: "2024-01-18",
      spots: 75,
      claimed: 12,
      status: "upcoming"
    },
    {
      id: 3,
      name: "Night Cap Essentials",
      description: "Premium sleep and recovery products",
      price: "$45",
      originalPrice: "$60",
      image: "/placeholder.svg",
      dropDate: "2024-01-20",
      spots: 100,
      claimed: 8,
      status: "upcoming"
    }
  ];

  const pastDrops = [
    {
      id: 4,
      name: "Holiday Special",
      description: "Festive cannabis collection",
      price: "$95",
      originalPrice: "$125",
      image: "/placeholder.svg",
      dropDate: "2024-01-10",
      spots: 60,
      claimed: 60,
      status: "sold_out"
    },
    {
      id: 5,
      name: "New Year Reset",
      description: "Wellness starter kit",
      price: "$75",
      originalPrice: "$100",
      image: "/placeholder.svg",
      dropDate: "2024-01-05",
      spots: 80,
      claimed: 80,
      status: "sold_out"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Limited Drops - ChillNOW | Exclusive Cannabis Collections</title>
        <meta
          name="description"
          content="Get exclusive access to limited edition cannabis drops. Micro runs, maximum chill. Join the waitlist for early access to premium products."
        />
        <meta name="keywords" content="limited drops, exclusive cannabis, premium products, micro runs, cannabis collections" />
        <link rel="canonical" href="https://chillnow.com/limited-drops" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://chillnow.com/limited-drops" />
        <meta property="og:title" content="Limited Drops - ChillNOW | Exclusive Cannabis Collections" />
        <meta property="og:description" content="Get exclusive access to limited edition cannabis drops. Micro runs, maximum chill." />
        <meta property="og:image" content="https://chillnow.com/og-image.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Limited Drops - ChillNOW | Exclusive Cannabis Collections" />
        <meta name="twitter:description" content="Get exclusive access to limited edition cannabis drops. Micro runs, maximum chill." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)'
        }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-orange-400 to-red-500 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-25 animate-spin"></div>
          <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-15 animate-pulse delay-1000"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold mb-8 border-0">
            <Flame className="w-4 h-4" aria-hidden="true" />
            <span>🔥 Limited Edition</span>
          </div>
          
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent">
              Limited Drops
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Micro runs. Maximum chill.
          </p>
          
          {/* Countdown Timer */}
          <div className="flex justify-center items-center gap-4 mb-10">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-green-500">{timeLeft.days}</div>
              <div className="text-sm text-muted-foreground font-semibold">Days</div>
            </div>
            <div className="text-2xl text-muted-foreground">:</div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-green-500">{timeLeft.hours.toString().padStart(2, '0')}</div>
              <div className="text-sm text-muted-foreground font-semibold">Hours</div>
            </div>
            <div className="text-2xl text-muted-foreground">:</div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-green-500">{timeLeft.minutes.toString().padStart(2, '0')}</div>
              <div className="text-sm text-muted-foreground font-semibold">Minutes</div>
            </div>
            <div className="text-2xl text-muted-foreground">:</div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-green-500">{timeLeft.seconds.toString().padStart(2, '0')}</div>
              <div className="text-sm text-muted-foreground font-semibold">Seconds</div>
            </div>
          </div>
          
          {/* Email Signup */}
          <form onSubmit={handleEmailSignup} className="max-w-md mx-auto mb-8">
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-background/50 border-border text-foreground placeholder:text-muted-foreground"
                required
              />
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Bell className="w-4 h-4 mr-2" />
                    Notify Me
                  </>
                )}
              </Button>
            </div>
          </form>
          
          {/* Early Access Perk */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 text-green-500 font-semibold text-sm">
            <Leaf className="w-4 h-4" />
            <span>First 500 members get VIP access!</span>
          </div>
        </div>
      </section>

      {/* Upcoming Drops Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">
              <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent">
                Upcoming Drops
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Exclusive collections with limited availability. Get notified before they're gone.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingDrops.map((drop) => (
              <Card key={drop.id} className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-border bg-card/50">
                <CardHeader className="relative">
                  <div className="aspect-square bg-gradient-to-br from-orange-100 to-red-100 rounded-lg mb-4 flex items-center justify-center">
                    <ShoppingBag className="w-16 h-16 text-orange-500" />
                  </div>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
                      <Clock className="w-3 h-3 mr-1" />
                      Coming Soon
                    </Badge>
                    <div className="text-right">
                      <div className="text-2xl font-black text-green-500">{drop.price}</div>
                      <div className="text-sm text-muted-foreground line-through">{drop.originalPrice}</div>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-black mb-2">{drop.name}</CardTitle>
                  <p className="text-muted-foreground text-sm mb-4">{drop.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{drop.claimed}/{drop.spots} claimed</span>
                    </div>
                    <div className="flex items-center gap-1 text-green-500">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(drop.dropDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <Bell className="w-4 h-4 mr-2" />
                    Get Notified
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Drops Section */}
      <section className="py-20 bg-card/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">
              <span className="bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 bg-clip-text text-transparent">
                Past Drops
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These exclusive collections sold out fast. Don't miss the next one.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastDrops.map((drop) => (
              <Card key={drop.id} className="group opacity-60 hover:opacity-80 transition-all duration-300 border-border bg-card/30">
                <CardHeader className="relative">
                  <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 flex items-center justify-center">
                    <Eye className="w-16 h-16 text-gray-500" />
                  </div>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-gradient-to-r from-gray-500 to-gray-600 text-white border-0">
                      <Star className="w-3 h-3 mr-1" />
                      Sold Out
                    </Badge>
                    <div className="text-right">
                      <div className="text-2xl font-black text-gray-500">{drop.price}</div>
                      <div className="text-sm text-muted-foreground line-through">{drop.originalPrice}</div>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-black mb-2">{drop.name}</CardTitle>
                  <p className="text-muted-foreground text-sm mb-4">{drop.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{drop.claimed}/{drop.spots} claimed</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(drop.dropDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="outline" 
                    className="w-full border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white font-bold transition-all duration-300"
                    disabled
                  >
                    <Star className="w-4 h-4 mr-2" />
                    Sold Out
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500/10 to-red-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent">
              Don't Miss Out
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of members who get exclusive access to our limited drops before anyone else.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-lg px-8 py-4 font-bold border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Join the Waitlist
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 font-bold border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300"
            >
              <Zap className="w-5 h-5 mr-2" />
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default LimitedDrops; 