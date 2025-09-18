"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DriverApplicationSchema, type DriverApplication } from "@/lib/validators/driver";
import { toast } from "sonner";
import { Loader2, CheckCircle } from "lucide-react";

export default function DriverApplyForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset
  } = useForm<DriverApplication>({
    resolver: zodResolver(DriverApplicationSchema)
  });

  const availability = watch("availability") || [];

  const onSubmit = async (data: DriverApplication) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/driver-apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast.success("Application submitted successfully!");
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

  const handleAvailabilityChange = (day: string, checked: boolean) => {
    const current = availability;
    if (checked) {
      setValue("availability", [...current, day]);
    } else {
      setValue("availability", current.filter(d => d !== day));
    }
  };

  if (isSubmitted) {
    return (
      <section id="apply" className="py-20 bg-green-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-green-900 mb-4">
              Application Submitted!
            </h2>
            <p className="text-green-700 text-lg mb-6">
              Thank you for applying to drive with ChillNOW. We'll review your application and get back to you within 24-48 hours.
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)}
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-50"
            >
              Submit Another Application
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="apply" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Apply to Drive
            </h2>
            <p className="text-xl text-gray-600">
              Fill out the form below to start your journey as a ChillNOW driver.
            </p>
          </div>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Personal Information */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-6">Personal Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    {...register("name")}
                    placeholder="Enter your full name"
                    className="mt-1"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="Enter your email"
                    className="mt-1"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    {...register("phone")}
                    placeholder="(555) 123-4567"
                    className="mt-1"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="city">City *</Label>
                  <Input
                    id="city"
                    {...register("city")}
                    placeholder="Enter your city"
                    className="mt-1"
                  />
                  {errors.city && (
                    <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
                  )}
                </div>
              </div>
            </div>
            
            {/* Vehicle Information */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-6">Vehicle Information</h3>
              
              <div>
                <Label htmlFor="vehicleType">Vehicle Type *</Label>
                <Select onValueChange={(value) => setValue("vehicleType", value as any)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select your vehicle type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Car">Car</SelectItem>
                    <SelectItem value="SUV">SUV</SelectItem>
                    <SelectItem value="Truck">Truck</SelectItem>
                    <SelectItem value="Scooter">Scooter</SelectItem>
                    <SelectItem value="Bike">Bike</SelectItem>
                  </SelectContent>
                </Select>
                {errors.vehicleType && (
                  <p className="text-red-500 text-sm mt-1">{errors.vehicleType.message}</p>
                )}
              </div>
            </div>
            
            {/* Availability */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-6">Availability *</h3>
              <p className="text-gray-600 mb-4">Select the days you're available to drive:</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                  <div key={day} className="flex items-center space-x-2">
                    <Checkbox
                      id={day}
                      checked={availability.includes(day)}
                      onCheckedChange={(checked) => handleAvailabilityChange(day, checked as boolean)}
                    />
                    <Label htmlFor={day} className="text-sm">{day}</Label>
                  </div>
                ))}
              </div>
              {errors.availability && (
                <p className="text-red-500 text-sm mt-2">{errors.availability.message}</p>
              )}
            </div>
            
            {/* Additional Information */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-6">Additional Information</h3>
              
              <div>
                <Label htmlFor="notes">Tell us about yourself (optional)</Label>
                <Textarea
                  id="notes"
                  {...register("notes")}
                  placeholder="Share any relevant experience, why you want to drive with ChillNOW, or any questions you have..."
                  className="mt-1 min-h-[120px]"
                />
              </div>
            </div>
            
            {/* Terms and Conditions */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="agreeToTerms"
                  {...register("agreeToTerms")}
                  className="mt-1"
                />
                <div className="flex-1">
                  <Label htmlFor="agreeToTerms" className="text-sm">
                    I agree to the{" "}
                    <a href="/terms" className="text-blue-600 hover:underline">
                      Terms and Conditions
                    </a>{" "}
                    and{" "}
                    <a href="/privacy" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </a>
                    . I understand that this is an application and not a guarantee of employment. *
                  </Label>
                  {errors.agreeToTerms && (
                    <p className="text-red-500 text-sm mt-1">{errors.agreeToTerms.message}</p>
                  )}
                </div>
              </div>
            </div>
            
            {/* Submit Button */}
            <div className="text-center">
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Submitting Application...
                  </>
                ) : (
                  "Submit Application"
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
