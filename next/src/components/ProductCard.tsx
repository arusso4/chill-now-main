"use client";

import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/sanity.image";

export interface Product {
  _id: string;
  title?: string | null;
  slug?: string | null; // already flattened slug.current upstream
  brand?: { title?: string | null } | null;
  categories?: { title?: string | null }[] | null;
  image?: any | null; // Sanity image object
  price?: number | null;
}

interface ProductCardProps {
  product: Product;
  hrefBase?: string; // default "/product"
}

const fmtUSD = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(n);

function ProductMedia({ image, alt }: { image?: any | null; alt: string }) {
  if (image) {
    const imgUrl = urlFor(image).width(800).height(800).fit("crop").url();
    if (imgUrl) {
      return (
        <div className="mb-3 aspect-square w-full overflow-hidden rounded-xl bg-black/5">
          <Image
            src={imgUrl}
            alt={alt}
            width={800}
            height={800}
            className="h-full w-full object-cover"
          />
        </div>
      );
    }
  }
  return <div className="mb-3 aspect-square w-full rounded-xl bg-black/5" />;
}

export default function ProductCard({ product, hrefBase = "/product" }: ProductCardProps) {
  const title = product?.title?.trim() || "Untitled";
  const brand = product?.brand?.title?.trim() || "—";
  const category =
    product?.categories?.find((c) => (c?.title || "").trim().length > 0)?.title?.trim() ||
    "Uncategorized";
  const hasSlug = typeof product?.slug === "string" && product.slug.length > 0;

  const content = (
    <article
      className="group rounded-2xl border p-4 transition-shadow hover:shadow-sm"
      aria-label={title}
    >
      <ProductMedia image={product?.image} alt={title} />
      <h3 className="text-base font-medium line-clamp-2">{title}</h3>
      <p className="mt-1 text-sm opacity-70">
        {brand} · {category}
      </p>
      {typeof product?.price === "number" && (
        <p className="mt-2 text-sm font-semibold">{fmtUSD(product.price)}</p>
      )}
    </article>
  );

  if (hasSlug) {
    const href = `${hrefBase}/${encodeURIComponent(product.slug!)}`;
    return (
      <Link href={href} className="block focus:outline-none focus:ring-2 focus:ring-black/10">
        {content}
      </Link>
    );
  }

  // No slug — non-link card (still accessible)
  return content;
}
