import React from "react";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/lib/getProducts";

interface MarketplaceProductCardProps {
  product: Product;
}

export default function MarketplaceProductCard({ product }: MarketplaceProductCardProps) {
  // Transform the Product interface to match the bulletproof ProductCard
  const transformedProduct = {
    _id: product._id,
    title: product.title,
    slug: product.slug,
    brand: product.brand,
    categories: product.categories,
    image: product.image,
    price: product.price,
  };

  return (
    <div className="group rounded-2xl border border-white/10 bg-[#0d1117] shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 hover:ring-2 hover:ring-purple-500/20">
      <ProductCard 
        product={transformedProduct} 
        hrefBase="/marketplace/product"
      />
    </div>
  );
}
