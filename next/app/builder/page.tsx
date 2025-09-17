import React from "react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Builder - ChillNOW',
  description: 'ChillNOW Builder page for dynamic content management.',
  keywords: 'builder, dynamic content, ChillNOW builder',
};

export default function BuilderPage() {
  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Builder</h1>
        <p className="text-lg text-muted-foreground">
          Dynamic content management with Builder.io integration.
        </p>
        {/* TODO: Migrate full Builder page content */}
      </div>
    </div>
  );
}
