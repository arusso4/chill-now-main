import { createClient } from "next-sanity";

// Create a client for image URL generation
const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.SANITY_DATASET || process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.SANITY_API_VERSION || "2024-08-01",
  useCdn: true, // Use CDN for images
});

// Image URL builder with comprehensive error handling
export function urlFor(source: any) {
  if (!source) {
    return {
      width: () => urlFor(null),
      height: () => urlFor(null),
      fit: () => urlFor(null),
      url: () => null,
    };
  }

  try {
    return client.image(source);
  } catch (error) {
    console.warn("Error creating image URL:", error);
    return {
      width: () => urlFor(null),
      height: () => urlFor(null),
      fit: () => urlFor(null),
      url: () => null,
    };
  }
}

// Safe image URL generation with fallbacks
export function getImageUrl(
  source: any,
  width: number = 800,
  height: number = 800,
  fit: string = "crop"
): string | null {
  try {
    if (!source) return null;
    
    const imageUrl = urlFor(source)
      .width(width)
      .height(height)
      .fit(fit)
      .url();
    
    return imageUrl || null;
  } catch (error) {
    console.warn("Error generating image URL:", error);
    return null;
  }
}

// Generate responsive image URLs for different screen sizes
export function getResponsiveImageUrls(source: any) {
  if (!source) return null;
  
  try {
    return {
      small: getImageUrl(source, 400, 400),
      medium: getImageUrl(source, 800, 800),
      large: getImageUrl(source, 1200, 1200),
    };
  } catch (error) {
    console.warn("Error generating responsive image URLs:", error);
    return null;
  }
}
