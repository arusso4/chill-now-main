import { createClient } from "next-sanity";

export function getServerClient() {
  const projectId = process.env.SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.SANITY_DATASET || process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
  const apiVersion = process.env.SANITY_API_VERSION || "2024-08-01";
  const token = process.env.SANITY_READ_TOKEN;

  if (!projectId) {
    console.warn("Sanity project ID not found in environment variables");
    return null;
  }

  const config = {
    projectId,
    dataset,
    apiVersion,
    useCdn: false, // Always use fresh data for server-side rendering
    perspective: "published" as const,
    ...(token && { token }), // Only add token if available
  };

  return createClient(config);
}

// Export the client for use in other files
export const serverClient = getServerClient();
