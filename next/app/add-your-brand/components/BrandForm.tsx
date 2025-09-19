"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { BrandApplicationSchema, type BrandApplication } from "@/lib/validators/brand";

export default function BrandForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch
  } = useForm<BrandApplication>({
    resolver: zodResolver(BrandApplicationSchema),
    defaultValues: {
      productCategories: [],
      agreeToTerms: false
    }
  });

  const watchedProductCategories = watch("productCategories") || [];

  const productCategoryOptions = [
    "Cannabis Flower",
    "Cannabis Edibles", 
    "Cannabis Concentrates",
    "Cannabis Topicals",
    "CBD Products",
    "Wellness Supplements",
    "Premium Snacks",
    "Lifestyle Accessories",
    "Other"
  ];

  const handleCategoryChange = (category: string, checked: boolean) => {
    const currentCategories = watchedProductCategories;
    if (checked) {
      setValue("productCategories", [...currentCategories, category]);
    } else {
      setValue("productCategories", currentCategories.filter(c => c !== category));
    }
  };

  const onSubmit = async (data: BrandApplication) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/brand-apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Brand application submitted successfully! We'll be in touch within 48 hours.");
        reset();
      } else {
        throw new Error("Failed to submit application");
      }
    } catch (error) {
      console.error("Application error:", error);
      toast.error("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="apply" className="relative py-20 bg-background">
      {/* decorative background ok, but behind */}
      <div className="pointer-events-none absolute inset-0 -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Apply Now</h2>
            <p className="text-xl text-muted-foreground">
              Ready to join the ChillNOW family? Fill out the form below and we'll get back to you within 48 hours.
            </p>
          </div>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-card p-8 rounded-2xl border border-border shadow-sm">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="brandName" className="text-sm font-medium text-foreground">Brand Name *</Label>
                <Input
                  id="brandName"
                  {...register("brandName")}
                  placeholder="Your brand name"
                />
                {errors.brandName && (
                  <p className="text-sm text-red-600">{errors.brandName.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="website" className="text-sm font-medium text-foreground">Website *</Label>
                <Input
                  id="website"
                  {...register("website")}
                  type="url"
                  placeholder="https://yourbrand.com"
                />
                {errors.website && (
                  <p className="text-sm text-red-600">{errors.website.message}</p>
                )}
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="contactName" className="text-sm font-medium text-foreground">Contact Name *</Label>
                <Input
                  id="contactName"
                  {...register("contactName")}
                  placeholder="Your full name"
                />
                {errors.contactName && (
                  <p className="text-sm text-red-600">{errors.contactName.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-foreground">Email *</Label>
                <Input
                  id="email"
                  {...register("email")}
                  type="email"
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium text-foreground">Phone Number</Label>
              <Input
                id="phone"
                {...register("phone")}
                type="tel"
                placeholder="(555) 123-4567"
              />
              {errors.phone && (
                <p className="text-sm text-red-600">{errors.phone.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="markets" className="text-sm font-medium text-foreground">Target Markets *</Label>
              <Textarea
                id="markets"
                {...register("markets")}
                rows={3}
                placeholder="Which markets would you like to launch in? (e.g., Denver, Phoenix, Las Vegas, Kansas City)"
                className="resize-none"
              />
              {errors.markets && (
                <p className="text-sm text-red-600">{errors.markets.message}</p>
              )}
            </div>

            <div className="space-y-3">
              <Label className="text-base font-semibold text-foreground">Product Categories *</Label>
              <div className="grid grid-cols-2 gap-3">
                {productCategoryOptions.map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox
                      id={category}
                      checked={watchedProductCategories.includes(category)}
                      onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                    />
                    <Label htmlFor={category} className="text-sm font-normal text-foreground">
                      {category}
                    </Label>
                  </div>
                ))}
              </div>
              {errors.productCategories && (
                <p className="text-sm text-red-600">{errors.productCategories.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes" className="text-sm font-medium text-foreground">Additional Information</Label>
              <Textarea
                id="notes"
                {...register("notes")}
                rows={4}
                placeholder="Tell us more about your brand, products, or any specific requirements..."
                className="resize-none"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="agreeToTerms"
                {...register("agreeToTerms")}
              />
              <Label htmlFor="agreeToTerms" className="text-sm text-foreground">
                I agree to the <a href="/terms" className="text-emerald-600 hover:underline">Terms of Service</a> and <a href="/privacy" className="text-emerald-600 hover:underline">Privacy Policy</a> *
              </Label>
            </div>
            {errors.agreeToTerms && (
              <p className="text-sm text-red-600">{errors.agreeToTerms.message}</p>
            )}
            
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-emerald-500 to-fuchsia-500 hover:from-emerald-600 hover:to-fuchsia-600 text-lg py-4 font-bold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Submit Your Brand"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
