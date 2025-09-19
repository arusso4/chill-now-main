import type { Metadata } from "next";
import BrandHero from "./components/BrandHero";
import BrandValueProps from "./components/BrandValueProps";
import BrandProcess from "./components/BrandProcess";
import BrandFAQ from "./components/BrandFAQ";
import BrandForm from "./components/BrandForm";

export const metadata: Metadata = {
  title: "Partner with ChillNOW - Add Your Cannabis Brand to Our Platform",
  description: "Partner with ChillNOW to reach more customers. Add your cannabis brand to our premium delivery platform. Fast onboarding, competitive rates, and dedicated support.",
  keywords: "cannabis brand partnership, cannabis vendor, cannabis platform, cannabis distribution, brand partnership, cannabis business",
  openGraph: {
    title: "Partner with ChillNOW - Add Your Cannabis Brand to Our Platform",
    description: "Partner with ChillNOW to reach more customers. Add your cannabis brand to our premium delivery platform. Fast onboarding, competitive rates, and dedicated support.",
    url: "https://chillnow.com/add-your-brand",
    siteName: "ChillNOW",
    images: [
      {
        url: "https://chillnow.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ChillNOW brand partnership opportunities",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@chillnow",
    creator: "@chillnow",
    title: "Partner with ChillNOW - Add Your Cannabis Brand to Our Platform",
    description: "Partner with ChillNOW to reach more customers. Add your cannabis brand to our premium delivery platform. Fast onboarding, competitive rates, and dedicated support.",
    images: ["https://chillnow.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://chillnow.com/add-your-brand",
  },
};

export default function AddYourBrandPage() {
  return (
    <main className="min-h-screen">
      <BrandHero />
      <BrandValueProps />
      <BrandProcess />
      <BrandFAQ />
      <BrandForm />
    </main>
  );
}
