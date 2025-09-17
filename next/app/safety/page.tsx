import React from "react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ChillNOW Safety - Safe Cannabis Delivery',
  description: 'Learn about ChillNOW\'s commitment to safety in cannabis delivery. Background-checked drivers, secure transactions, and responsible delivery practices.',
  keywords: 'cannabis delivery safety, safe cannabis delivery, background checked drivers, secure cannabis delivery',
};

export default function SafetyPage() {
  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Safety</h1>
        <p className="text-lg text-muted-foreground">
          Learn about our commitment to safety in cannabis delivery.
        </p>
        {/* TODO: Migrate full Safety page content */}
      </div>
    </div>
  );
}
