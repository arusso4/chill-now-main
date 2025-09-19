export function isBrowser(): boolean {
  return typeof window !== "undefined";
}

export function supportsWebGL(): boolean {
  if (!isBrowser()) return false;
  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    return !!gl;
  } catch {
    return false;
  }
}

export function prefersReducedMotion(): boolean {
  if (!isBrowser()) return false;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

export function enable3D(): boolean {
  if (!isBrowser()) return false;
  const env = (process.env.NEXT_PUBLIC_ENABLE_3D ?? "true").toLowerCase();
  return env !== "false";
}
