import React from "react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Coming Soon - ChillNOW',
  description: 'Something exciting is coming to ChillNOW. Stay tuned for updates on new features and services.',
  keywords: 'coming soon, ChillNOW updates, new features, cannabis delivery updates',
};

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Coming Soon</h1>
        <p className="text-lg text-muted-foreground">
          Something exciting is coming to ChillNOW. Stay tuned!
        </p>
        {/* TODO: Migrate full Coming Soon page content */}
      </div>
    </div>
  );
}
