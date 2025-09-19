import { z } from 'zod';

export const waitlistSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  name: z.string().optional(),
  source: z.string().default('coming-soon'),
  consent: z.boolean().refine(val => val === true, 'You must agree to receive updates')
});

export type WaitlistFormData = z.infer<typeof waitlistSchema>;
