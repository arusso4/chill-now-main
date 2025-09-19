import React from "react";
import { Metadata } from 'next';
import AboutHero3D from "./components/AboutHero3D";
import AboutStats from "./components/AboutStats";
import AboutMission from "./components/AboutMission";
import AboutTimeline from "./components/AboutTimeline";
import AboutValues from "./components/AboutValues";
import AboutTeam from "./components/AboutTeam";
import AboutCTA from "./components/AboutCTA";

export const metadata: Metadata = {
  title: 'About ChillNOW - Cannabis Delivery Revolution | Our Story & Mission',
  description: 'Learn about ChillNOW\'s mission to revolutionize cannabis delivery. Discover our story, values, team, and commitment to safe, fast, and reliable cannabis delivery services.',
  keywords: 'about chillnow, cannabis delivery company, cannabis delivery mission, cannabis delivery team, cannabis delivery story',
  openGraph: {
    title: 'About ChillNOW - Cannabis Delivery Revolution',
    description: 'Learn about ChillNOW\'s mission to revolutionize cannabis delivery. Discover our story, values, team, and commitment to safe, fast, and reliable cannabis delivery services.',
    url: 'https://chillnow.com/about',
    siteName: 'ChillNOW',
    images: [
      {
        url: 'https://chillnow.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ChillNOW About - Cannabis Delivery Revolution',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@chillnow',
    creator: '@chillnow',
    title: 'About ChillNOW - Cannabis Delivery Revolution',
    description: 'Learn about ChillNOW\'s mission to revolutionize cannabis delivery. Discover our story, values, team, and commitment to safe, fast, and reliable cannabis delivery services.',
    images: ['https://chillnow.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://chillnow.com/about',
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero3D />
      <AboutStats />
      <AboutMission />
      <AboutTimeline />
      <AboutValues />
      <AboutTeam />
      <AboutCTA />
    </main>
  );
}