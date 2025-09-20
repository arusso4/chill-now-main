/**
 * Utility functions for handling Next.js 15 search params
 */

/**
 * Normalizes a search param value that could be string, string[], or undefined
 * Returns the first value if it's an array, or the value itself if it's a string
 */
export function str(value: string | string[] | undefined, defaultValue = ""): string {
  return Array.isArray(value) ? value[0] ?? defaultValue : value ?? defaultValue;
}

/**
 * Normalizes a search param value to a number
 */
export function num(value: string | string[] | undefined, defaultValue = 0): number {
  const stringValue = str(value, defaultValue.toString());
  const parsed = Number(stringValue);
  return isNaN(parsed) ? defaultValue : parsed;
}

/**
 * Normalizes a search param value to a boolean
 */
export function bool(value: string | string[] | undefined, defaultValue = false): boolean {
  const stringValue = str(value, defaultValue.toString());
  return stringValue === "true" || stringValue === "1";
}

/**
 * Type for Next.js 15 search params
 */
export type SearchParams = Promise<{
  [key: string]: string | string[] | undefined;
}>;

/**
 * Type for Next.js 15 params
 */
export type Params = Promise<{
  [key: string]: string | string[] | undefined;
}>;

/**
 * Normalizes search params for consistent usage
 */
export async function normalizeSearchParams(searchParams?: SearchParams) {
  const resolved = await searchParams;
  return resolved ?? {};
}

/**
 * Normalizes params for consistent usage
 */
export async function normalizeParams(params?: Params) {
  const resolved = await params;
  return resolved ?? {};
}
