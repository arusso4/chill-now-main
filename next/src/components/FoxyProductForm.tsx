"use client";
import React from "react";
import { buildFoxyInputs, getFoxyCartUrl, type Product, type ProductVariant } from "@/src/lib/foxy";

interface FoxyProductFormProps {
  product: Product;
  variant: ProductVariant;
  children: React.ReactNode;
  className?: string;
}

/**
 * Creates a Foxy.io add-to-cart form for a product variant
 */
export function FoxyProductForm({
  product,
  variant,
  children,
  className = ""
}: FoxyProductFormProps): React.ReactElement {
  const foxyCartUrl = getFoxyCartUrl();
  
  // Build the Foxy item from product/variant
  const item = {
    name: product.title,
    code: variant.sku,
    price: variant.price,
    quantity: 1,
    meta: {
      category: product.categories.join(","),
      market: "cannabis",
      brand: product.brand,
      product_id: product.id,
      variant_id: variant.sku,
      ...(variant.size && { size: variant.size }),
      ...(variant.color && { color: variant.color })
    }
  };

  const inputs = buildFoxyInputs(item);
  
  return (
    <form
      action={foxyCartUrl}
      method="post"
      acceptCharset="utf-8"
      data-fc-add-to-cart
      className={className}
    >
      {Object.entries(inputs).map(([name, value]) => (
        <input key={name} type="hidden" name={name} value={value} />
      ))}
      
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
}: FoxyProductFormProps & {
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

  return FoxyProductForm({
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
