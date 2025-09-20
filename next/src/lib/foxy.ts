import React from "react";

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

export interface FoxyAddToCartFormProps {
  product: Product;
  variant: ProductVariant;
  children: React.ReactNode;
  className?: string;
}

/**
 * Creates a Foxy.io add-to-cart form for a product variant
 */
export function foxyAddToCartForm({
  product,
  variant,
  children,
  className = ""
}: FoxyAddToCartFormProps): React.ReactElement {
  const foxyCartUrl = process.env.NEXT_PUBLIC_FOXY_CART_URL || "https://chillnow.foxycart.com/cart";
  
  return (
    <form
      action={foxyCartUrl}
      method="post"
      acceptCharset="utf-8"
      data-fc-add-to-cart
      className={className}
    >
      {/* Hidden inputs for Foxy.io */}
      <input type="hidden" name="name" value={product.title} />
      <input type="hidden" name="code" value={variant.sku} />
      <input type="hidden" name="price" value={variant.price.toString()} />
      <input type="hidden" name="category" value={product.categories.join(",")} />
      <input type="hidden" name="market" value="cannabis" />
      
      {/* Product details */}
      <input type="hidden" name="brand" value={product.brand} />
      <input type="hidden" name="product_id" value={product.id} />
      <input type="hidden" name="variant_id" value={variant.sku} />
      
      {/* Size and color if available */}
      {variant.size && <input type="hidden" name="size" value={variant.size} />}
      {variant.color && <input type="hidden" name="color" value={variant.color} />}
      
      {/* Submit button */}
      {children}
    </form>
  );
}

/**
 * Creates a styled add-to-cart button with Foxy integration
 */
export function FoxyAddToCartButton({
  product,
  variant,
  className = "",
  disabled = false,
  children
}: FoxyAddToCartFormProps & {
  disabled?: boolean;
  children?: React.ReactNode;
}): React.ReactElement {
  const buttonContent = children || (
    <span className="flex items-center gap-2">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
      </svg>
      Add to Cart
    </span>
  );

  return foxyAddToCartForm({
    product,
    variant,
    className,
    children: (
      <button
        type="submit"
        disabled={disabled || !variant.inStock}
        className={`
          bg-gradient-to-r from-emerald-500 to-fuchsia-500 
          hover:from-emerald-600 hover:to-fuchsia-600 
          disabled:from-gray-500 disabled:to-gray-600 
          disabled:cursor-not-allowed
          text-white rounded-lg px-4 py-2 text-sm font-semibold 
          transition-all duration-300 hover:shadow-lg 
          hover:-translate-y-0.5 focus-visible:ring-2 
          focus-visible:ring-fuchsia-500 focus-visible:ring-offset-2 
          focus-visible:ring-offset-black
          ${className}
        `}
      >
        {buttonContent}
      </button>
    )
  });
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
  const payload: Record<string, string> = {
    name,
    code,
    price: price.toString(),
    quantity: quantity.toString(),
    category: 'drop',
    market: 'cannabis'
  };

  // Add any additional meta fields
  Object.entries(meta).forEach(([key, value]) => {
    payload[key] = value;
  });

  return payload;
}

/**
 * Creates a Foxy.io form with hidden inputs from payload
 */
export function createFoxyForm(payload: Record<string, string>): React.ReactElement {
  const foxyCartUrl = process.env.NEXT_PUBLIC_FOXY_CART_URL || "https://chillnow.foxycart.com/cart";
  
  return (
    <form
      action={foxyCartUrl}
      method="post"
      acceptCharset="utf-8"
      data-fc-add-to-cart
      style={{ display: 'none' }}
    >
      {Object.entries(payload).map(([key, value]) => (
        <input key={key} type="hidden" name={key} value={value} />
      ))}
    </form>
  );
}
