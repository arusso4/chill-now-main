import React from "react";
import { Metadata } from 'next';
import DriverHero from "./components/DriverHero";
import DriverBenefits from "./components/DriverBenefits";
import DriverRequirements from "./components/DriverRequirements";
import DriverSteps from "./components/DriverSteps";
import DriverFAQ from "./components/DriverFAQ";
import DriverApplyForm from "./components/DriverApplyForm";

export const metadata: Metadata = {
  title: 'Drive for ChillNOW - Join Our Delivery Team | $25-35/hour',
  description: 'Become a ChillNOW driver and join our premium cannabis delivery team. Earn $25-35/hour with flexible hours, competitive pay, and be part of the cannabis delivery revolution.',
  keywords: 'drive for ChillNOW, cannabis delivery driver, delivery jobs, flexible work, cannabis industry jobs, driver application, delivery driver jobs',
  openGraph: {
    title: 'Drive for ChillNOW - Join Our Delivery Team',
    description: 'Become a ChillNOW driver and join our premium cannabis delivery team. Earn $25-35/hour with flexible hours.',
    url: 'https://chillnow.com/drive',
    siteName: 'ChillNOW',
    images: [
      {
        url: 'https://chillnow.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ChillNOW driver application',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@chillnow',
    creator: '@chillnow',
    title: 'Drive for ChillNOW - Join Our Delivery Team',
    description: 'Become a ChillNOW driver and join our premium cannabis delivery team. Earn $25-35/hour with flexible hours.',
    images: ['https://chillnow.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://chillnow.com/drive',
  },
};

export default function DrivePage() {
  return (
    <main className="min-h-screen">
      <DriverHero />
      <DriverBenefits />
      <DriverRequirements />
      <DriverSteps />
      <DriverFAQ />
      <DriverApplyForm />
    </main>
  );
}
