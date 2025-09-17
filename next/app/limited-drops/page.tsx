import React from "react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Limited Drops - ChillNOW Exclusive Products',
  description: 'Discover exclusive limited edition cannabis products available only through ChillNOW. Premium drops with limited availability.',
  keywords: 'limited drops, exclusive cannabis products, limited edition cannabis, premium cannabis drops',
};

export default function LimitedDropsPage() {
  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Limited Drops</h1>
        <p className="text-lg text-muted-foreground">
          Discover exclusive limited edition products available only through ChillNOW.
        </p>
        {/* TODO: Migrate full Limited Drops page content */}
      </div>
    </div>
  );
}
