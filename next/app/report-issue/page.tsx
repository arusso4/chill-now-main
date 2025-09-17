import React from "react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Report an Issue - ChillNOW Support',
  description: 'Report an issue with your ChillNOW delivery or service. We\'re here to help and improve your experience.',
  keywords: 'report issue, ChillNOW support, delivery problem, service issue, customer support',
};

export default function ReportIssuePage() {
  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Report an Issue</h1>
        <p className="text-lg text-muted-foreground">
          We're here to help. Report any issues with your delivery or service.
        </p>
        {/* TODO: Migrate full Report Issue page content */}
      </div>
    </div>
  );
}
