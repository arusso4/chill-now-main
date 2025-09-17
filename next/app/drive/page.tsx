import React from "react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Drive for ChillNOW - Join Our Delivery Team',
  description: 'Become a ChillNOW driver and join our premium cannabis delivery team. Flexible hours, competitive pay, and be part of the cannabis delivery revolution.',
  keywords: 'drive for ChillNOW, cannabis delivery driver, delivery jobs, flexible work, cannabis industry jobs',
};

export default function DrivePage() {
  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Drive for ChillNOW</h1>
        <p className="text-lg text-muted-foreground">
          Join our delivery team and be part of the cannabis delivery revolution.
        </p>
        {/* TODO: Migrate full Drive page content */}
      </div>
    </div>
  );
}
