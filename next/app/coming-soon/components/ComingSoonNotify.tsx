"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Users, Zap, ArrowRight } from "lucide-react";
import { toast } from "sonner";

// Validation schema
const waitlistSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().optional(),
  consent: z.boolean().refine(val => val === true, "You must agree to receive updates")
});

type WaitlistFormData = z.infer<typeof waitlistSchema>;

const ComingSoonNotify = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      email: "",
      name: "",
      consent: false
    }
  });

  const consentValue = watch("consent");

  const onSubmit = async (data: WaitlistFormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          source: 'coming-soon'
        }),
      });

      if (response.ok) {
        toast.success("Welcome to the waitlist!", {
          description: "You'll be the first to know when we launch. Check your email for confirmation.",
        });
        reset();
      } else {
        throw new Error('Failed to join waitlist');
      }
    } catch (error) {
      toast.error("Something went wrong", {
        description: "Please try again or contact support if the problem persists.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="waitlist-form" className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-pink-500 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-500 via-pink-600 to-fuchsia-500"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/30 text-white font-bold mb-6 sm:mb-8 text-sm sm:text-base">
          <Mail className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />
          <span>Join the Revolution</span>
        </div>

        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 leading-tight text-white">
            Be the First to{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-fuchsia-400 drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
              Experience the Future
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-pink-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
            Join our exclusive waitlist and get early access to the most advanced cannabis delivery platform ever built.
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-lg max-w-2xl mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-semibold text-foreground">
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="w-full"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* Name Field */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-semibold text-foreground">
                Name (Optional)
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                className="w-full"
                {...register("name")}
              />
            </div>

            {/* Consent Checkbox */}
            <div className="flex items-start space-x-3">
              <Checkbox
                id="consent"
                checked={consentValue}
                onCheckedChange={(checked) => setValue("consent", checked as boolean)}
                className="mt-1"
              />
              <div className="space-y-1">
                <Label htmlFor="consent" className="text-sm text-foreground leading-relaxed">
                  I agree to receive updates about ChillNOW's launch, exclusive offers, and cannabis delivery news. *
                </Label>
                {errors.consent && (
                  <p className="text-sm text-red-500">{errors.consent.message}</p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-emerald-500 to-fuchsia-500 hover:from-emerald-600 hover:to-fuchsia-600 text-white text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-6 font-bold border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 sm:w-5 sm:h-5 mr-2 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  Joining Waitlist...
                </>
              ) : (
                <>
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Join the Waitlist
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </>
              )}
            </Button>
          </form>

          {/* Benefits */}
          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border">
            <h3 className="text-sm font-semibold text-foreground mb-4 text-center">
              What you'll get as an early member:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400 mb-2">
                  <Zap className="w-4 h-4" />
                </div>
                <p className="text-xs text-muted-foreground">Early Access</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-teal-500/15 text-teal-400 mb-2">
                  <Mail className="w-4 h-4" />
                </div>
                <p className="text-xs text-muted-foreground">Exclusive Deals</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-fuchsia-500/15 text-fuchsia-400 mb-2">
                  <Users className="w-4 h-4" />
                </div>
                <p className="text-xs text-muted-foreground">Priority Support</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-center mt-8 sm:mt-12">
          <div className="flex items-center gap-2 text-white/80 text-sm">
            <Users className="w-4 h-4" />
            <span>500+ people already waiting</span>
          </div>
          <div className="flex items-center gap-2 text-white/80 text-sm">
            <Zap className="w-4 h-4" />
            <span>Launching Q1 2025</span>
          </div>
          <div className="flex items-center gap-2 text-white/80 text-sm">
            <Mail className="w-4 h-4" />
            <span>No spam • Unsubscribe anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonNotify;
