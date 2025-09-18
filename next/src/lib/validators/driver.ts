import { z } from "zod";

export const DriverApplicationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number").regex(/^[\+]?[1-9][\d]{0,15}$/, "Please enter a valid phone number"),
  city: z.string().min(2, "City must be at least 2 characters").max(100),
  vehicleType: z.enum(["Car", "SUV", "Truck", "Scooter", "Bike"], {
    errorMap: () => ({ message: "Please select a vehicle type" })
  }),
  availability: z.array(z.string()).min(1, "Please select at least one day"),
  agreeToTerms: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and conditions"
  }),
  notes: z.string().optional(),
  referral: z.string().optional(),
  zipCode: z.string().optional(),
  licenseState: z.string().optional()
});

export type DriverApplication = z.infer<typeof DriverApplicationSchema>;
