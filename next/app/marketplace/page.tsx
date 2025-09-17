import React from "react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ChillNOW Marketplace - Premium Cannabis Products',
  description: 'Discover premium cannabis products in our curated marketplace. Lab-tested, COA-verified products delivered in 60 minutes or less.',
  keywords: 'cannabis marketplace, premium cannabis products, cannabis delivery, lab-tested cannabis, COA verified',
};

export default function MarketplacePage() {
  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Marketplace</h1>
        <p className="text-lg text-muted-foreground">
          Discover premium cannabis products in our curated marketplace.
        </p>
        {/* TODO: Migrate full Marketplace page content */}
      </div>
    </div>
  );
}
