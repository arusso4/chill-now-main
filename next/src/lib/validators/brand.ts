import { z } from "zod";

export const BrandApplicationSchema = z.object({
  brandName: z.string().min(2, "Brand name must be at least 2 characters").max(100),
  website: z.string().url("Please enter a valid website URL"),
  contactName: z.string().min(2, "Contact name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number").optional(),
  markets: z.string().min(10, "Please provide markets information"),
  productCategories: z.array(z.string()).min(1, "Please select at least one product category"),
  notes: z.string().optional(),
  agreeToTerms: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and conditions"
  }),
  companySize: z.string().optional(),
  currentRevenue: z.string().optional(),
  targetLaunchDate: z.string().optional(),
  socialMedia: z.string().optional(),
  wholesaleLicense: z.boolean().optional(),
  distributionChannels: z.string().optional()
});

export type BrandApplication = z.infer<typeof BrandApplicationSchema>;
