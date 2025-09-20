"use client";
import React, { useEffect, useRef } from "react";
import { buildFoxyInputs, getFoxyCartUrl, type FoxyItem } from "@/src/lib/foxy";

type Props = {
  item: FoxyItem;
  className?: string;
  autoSubmit?: boolean;       // if true, submit on mount (for reserve flow)
  buttonLabel?: string;       // default: "Add to cart"
};

export default function FoxyAddToCartForm({ item, className, autoSubmit, buttonLabel = "Add to cart" }: Props) {
  const ref = useRef<HTMLFormElement>(null);
  const cartUrl = getFoxyCartUrl();
  const inputs = buildFoxyInputs(item);

  useEffect(() => {
    if (autoSubmit && ref.current) {
      ref.current.submit();
    }
  }, [autoSubmit]);

  return (
    <form
      ref={ref}
      action={cartUrl}
      method="post"
      acceptCharset="utf-8"
      data-fc-add-to-cart
      className={className}
    >
      {Object.entries(inputs).map(([name, value]) => (
        <input key={name} type="hidden" name={name} value={value} />
      ))}

      {!autoSubmit && (
        <button
          type="submit"
          className="rounded-xl px-4 py-2 bg-gradient-to-r from-emerald-500 to-fuchsia-500 hover:from-emerald-600 hover:to-fuchsia-600 text-white font-semibold shadow-lg"
        >
          {buttonLabel}
        </button>
      )}
    </form>
  );
}
