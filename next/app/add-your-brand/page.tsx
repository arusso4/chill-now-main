import React from "react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Add Your Brand to ChillNOW - Partner with Us',
  description: 'Partner with ChillNOW to get your cannabis products in front of our community. Join our premium marketplace and reach customers who value quality.',
  keywords: 'cannabis brand partnership, cannabis marketplace, cannabis product listing, cannabis brand collaboration',
};

export default function AddYourBrandPage() {
  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Add Your Brand</h1>
        <p className="text-lg text-muted-foreground">
          Partner with ChillNOW to get your products in front of our community.
        </p>
        {/* TODO: Migrate full Add Your Brand page content */}
      </div>
    </div>
  );
}
