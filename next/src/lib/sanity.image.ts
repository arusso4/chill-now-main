// src/lib/sanity.image.ts
import imageUrlBuilder from "@sanity/image-url";

/**
 * Use NEXT_PUBLIC_* because this helper is often called from client components.
 * Do NOT put tokens here.
 */
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "";

// Create the builder only if config is present (prevents build-time crashes)
const builder = projectId && dataset ? imageUrlBuilder({ projectId, dataset }) : null;

/**
 * urlFor(source) -> chainable builder or a safe no-op with .url() => ""
 *
 * Usage:
 *   const src = urlFor(image).width(800).height(800).fit("crop").url()
 */
export function urlFor(source: any) {
  if (!builder || !source) {
    // Return a minimal stub with .url() to keep callers from crashing
    return {
      width: () => ({ height: () => ({ fit: () => ({ url: () => "" }) }) }),
      height: () => ({ fit: () => ({ url: () => "" }) }),
      fit: () => ({ url: () => "" }),
      url: () => "",
    } as any;
  }
  try {
    return builder.image(source);
  } catch {
    // Fallback stub if builder throws on malformed source
    return {
      width: () => ({ height: () => ({ fit: () => ({ url: () => "" }) }) }),
      height: () => ({ fit: () => ({ url: () => "" }) }),
      fit: () => ({ url: () => "" }),
      url: () => "",
    } as any;
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
