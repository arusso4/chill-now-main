"use client";

import React, { useState } from "react";
import { createFoxyForm } from "@/lib/foxy";

interface ReserveButtonProps {
  productId: string;
  variantSku: string;
  productTitle: string;
  price: number;
  maxQuantity?: number;
  availableQuantity?: number;
  className?: string;
}

export default function ReserveButton({
  productId,
  variantSku,
  productTitle,
  price,
  maxQuantity = 5,
  availableQuantity = 10,
  className = ""
}: ReserveButtonProps) {
  const [isReserving, setIsReserving] = useState(false);
  const [isReserved, setIsReserved] = useState(false);
  const [error, setError] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleReserve = async () => {
    setIsReserving(true);
    setError("");

    try {
      const response = await fetch('/api/reserve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId,
          variantSku,
          qty: quantity
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to reserve product');
      }

      if (data.ok && data.payload) {
        // Create and submit Foxy form
        const foxyForm = createFoxyForm(data.payload);
        
        // Create a temporary form element and submit it
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = foxyForm.props.children.map((child: any) => 
          `<input type="hidden" name="${child.props.name}" value="${child.props.value}" />`
        ).join('');
        
        const form = document.createElement('form');
        form.action = process.env.NEXT_PUBLIC_FOXY_CART_URL || "https://chillnow.foxycart.com/cart";
        form.method = 'post';
        form.setAttribute('data-fc-add-to-cart', '');
        form.style.display = 'none';
        
        tempDiv.childNodes.forEach((input: any) => {
          form.appendChild(input.cloneNode(true));
        });
        
        document.body.appendChild(form);
        form.submit();
        document.body.removeChild(form);
        
        setIsReserved(true);
        
        // Show success message for screen readers
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = `${productTitle} added to cart successfully`;
        document.body.appendChild(announcement);
        
        setTimeout(() => {
          document.body.removeChild(announcement);
        }, 1000);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setIsReserving(false);
    }
  };

  if (isReserved) {
    return (
      <div className={`text-center ${className}`}>
        <div className="bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 px-4 py-2 rounded-lg text-sm font-semibold">
          ✅ Added to Cart
        </div>
      </div>
    );
  }

  return (
    <div className={`space-y-3 ${className}`}>
      {/* Quantity Selector */}
      <div className="flex items-center justify-center gap-2">
        <button
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          disabled={quantity <= 1}
          className="w-8 h-8 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          -
        </button>
        <span className="text-white font-semibold min-w-[2rem] text-center">
          {quantity}
        </span>
        <button
          onClick={() => setQuantity(Math.min(maxQuantity, availableQuantity, quantity + 1))}
          disabled={quantity >= Math.min(maxQuantity, availableQuantity)}
          className="w-8 h-8 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          +
        </button>
      </div>

      {/* Reserve Button */}
      <button
        onClick={handleReserve}
        disabled={isReserving || availableQuantity === 0}
        className={`w-full bg-gradient-to-r from-emerald-500 to-fuchsia-500 hover:from-emerald-600 hover:to-fuchsia-600 disabled:from-gray-500 disabled:to-gray-600 disabled:cursor-not-allowed text-white rounded-lg px-4 py-3 text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-fuchsia-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
          availableQuantity === 0 ? 'opacity-50' : ''
        }`}
      >
        {isReserving ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Reserving...
          </span>
        ) : availableQuantity === 0 ? (
          'Sold Out'
        ) : (
          <span className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
            </svg>
            Reserve Now
          </span>
        )}
      </button>

      {/* Error Message */}
      {error && (
        <div className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg p-2">
          {error}
        </div>
      )}

      {/* Stock Info */}
      <div className="text-xs text-zinc-400 text-center">
        {availableQuantity > 0 ? (
          <>
            {availableQuantity} available • Max {maxQuantity} per person
          </>
        ) : (
          'Sold out'
        )}
      </div>
    </div>
  );
}
