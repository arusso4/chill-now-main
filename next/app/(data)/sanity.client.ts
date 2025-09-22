import { createClient } from "next-sanity";

export function getSanityClient() {
  const pid = process.env.SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const ds  = process.env.SANITY_DATASET || process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
  const v   = process.env.SANITY_API_VERSION || "2023-10-01";
  if (!pid) return null; // not connected yet
  return createClient({ projectId: pid, dataset: ds, apiVersion: v, useCdn: true, perspective: "published" });
}
