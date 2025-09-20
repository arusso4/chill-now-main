export type FoxyMeta = Record<string, string | number | boolean | null | undefined>;

export interface FoxyItem {
  name: string;          // product title (can include variant/size)
  code: string;          // SKU
  price: number;         // unit price
  quantity?: number;     // default 1
  meta?: FoxyMeta;       // extra hidden inputs (brand, sanityId, slug, market, reservationId)
}

export interface ProductVariant {
  sku: string;
  price: number;
  size?: string;
  color?: string;
  inStock: boolean;
}

export interface Product {
  id: string;
  title: string;
  slug: string;
  brand: string;
  images: string[];
  categories: string[];
  variants: ProductVariant[];
  featured: boolean;
  description?: string;
}

export function getFoxyCartUrl(): string {
  const url = process.env.NEXT_PUBLIC_FOXY_CART_URL;
  if (!url) throw new Error("NEXT_PUBLIC_FOXY_CART_URL is not set");
  return url;
}

/** Build hidden input key/value pairs for a Foxy add-to-cart form. */
export function buildFoxyInputs(item: FoxyItem): Record<string, string> {
  const qty = Math.max(1, Number(item.quantity ?? 1));
  const inputs: Record<string, string> = {
    name: String(item.name),
    code: String(item.code),
    price: Number(item.price).toFixed(2),
    quantity: String(qty),
  };
  if (item.meta) {
    for (const [k, v] of Object.entries(item.meta)) {
      if (v === undefined || v === null) continue;
      inputs[`_${k}`] = String(v); // Foxy meta fields prefixed with underscore
    }
  }
  return inputs;
}

/**
 * Helper to get the primary variant for a product (first in-stock variant)
 */
export function getPrimaryVariant(product: Product): ProductVariant | null {
  return product.variants.find(variant => variant.inStock) || product.variants[0] || null;
}

/**
 * Helper to format price for display
 */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(price);
}

/**
 * Helper to get product image URL with fallback
 */
export function getProductImageUrl(product: Product, index: number = 0): string {
  if (product.images && product.images[index]) {
    return product.images[index];
  }
  return "/placeholder.svg";
}

/**
 * Creates a Foxy.io add-to-cart payload for drops/reserves
 * @deprecated Use buildFoxyInputs instead
 */
export function foxyAddToCartPayload({
  name,
  code,
  price,
  quantity = 1,
  meta = {}
}: {
  name: string;
  code: string;
  price: number;
  quantity?: number;
  meta?: Record<string, string>;
}): Record<string, string> {
  const item: FoxyItem = {
    name,
    code,
    price,
    quantity,
    meta
  };
  return buildFoxyInputs(item);
}
