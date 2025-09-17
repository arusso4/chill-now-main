import React from "react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ChillNOW FAQ - Frequently Asked Questions',
  description: 'Find answers to common questions about ChillNOW\'s premium cannabis delivery service. Learn about delivery times, product quality, safety, and more.',
  keywords: 'ChillNOW FAQ, cannabis delivery questions, delivery service FAQ, cannabis delivery help',
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
        <p className="text-lg text-muted-foreground">
          Find answers to common questions about our service.
        </p>
        {/* TODO: Migrate full FAQ page content */}
      </div>
    </div>
  );
}
