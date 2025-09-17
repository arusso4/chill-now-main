import matter from 'gray-matter';

export interface Testimonial {
  id: string;
  name: string;
  image?: string;
  video?: string;
  quote: string;
  tagline?: string;
  slug: string;
}

// Using static data for now - similar to blog approach
const staticTestimonials: Testimonial[] = [
  {
    id: 'sarah-j',
    slug: 'sarah-j',
    name: 'Sarah J.',
    image: '/images/sarah.jpg',
    video: 'https://www.youtube.com/embed/exampleID',
    tagline: 'Busy Parent',
    quote: 'ChillNOW changed my evenings. Zero stress, always on time.'
  },
  {
    id: 'mike-chen',
    slug: 'mike-chen',
    name: 'Mike Chen',
    image: '/images/mike.jpg',
    tagline: 'Tech Executive',
    quote: 'After 12-hour days, I need something that actually works. ChillNOW delivers every single time.'
  },
  {
    id: 'alex-rivera',
    slug: 'alex-rivera',
    name: 'Alex Rivera',
    image: '/images/alex.jpg',
    video: 'https://www.youtube.com/embed/anotherExampleID',
    tagline: 'Wellness Enthusiast',
    quote: 'The quality is insane. I\'ve tried everything, but nothing compares to what ChillNOW brings to my door.'
  },
  {
    id: 'emma-williams',
    slug: 'emma-williams',
    name: 'Emma Williams',
    image: '/images/emma.jpg',
    tagline: 'Creative Director',
    quote: '60-minute delivery? More like 45 minutes. These guys are rewriting the rules of convenience.'
  },
  {
    id: 'david-kim',
    slug: 'david-kim',
    name: 'David Kim',
    image: '/images/david.jpg',
    video: 'https://www.youtube.com/embed/thirdExampleID',
    tagline: 'Fitness Coach',
    quote: 'Premium products, professional service, and they actually care about your experience. Game changer.'
  }
];

export function getAllTestimonials(): Testimonial[] {
  return staticTestimonials;
}

export function getTestimonialBySlug(slug: string): Testimonial | null {
  const testimonials = getAllTestimonials();
  return testimonials.find(testimonial => testimonial.slug === slug) || null;
}

export function getFeaturedTestimonials(): Testimonial[] {
  const testimonials = getAllTestimonials();
  // Return first 3 as featured
  return testimonials.slice(0, 3);
}

export function getNonFeaturedTestimonials(): Testimonial[] {
  const testimonials = getAllTestimonials();
  // Return rest as non-featured
  return testimonials.slice(3);
}

export function getAllTaglines(): string[] {
  const testimonials = getAllTestimonials();
  const taglines = testimonials
    .map(testimonial => testimonial.tagline)
    .filter(Boolean) as string[];
  return [...new Set(taglines)];
}

export function getTestimonialsByTagline(tagline: string): Testimonial[] {
  const testimonials = getAllTestimonials();
  return testimonials.filter(testimonial => testimonial.tagline === tagline);
} 