import React from "react";

const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ChillNOW",
                         "description": "Premium cannabis products delivered to your door in 60 minutes or less. Lab-tested, COA-verified products for wellness without regret.",
    "url": "https://chillnow.com",
    "logo": "https://chillnow.com/logo.png",
    "sameAs": [
      "https://twitter.com/chillnow",
      "https://instagram.com/chillnow"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "English",
      "areaServed": "US"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 39.7392,
        "longitude": -104.9903
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Cannabis Delivery Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Premium Cannabis Delivery",
                         "description": "60-minute delivery of premium cannabis products"
          },
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/PreOrder"
        }
      ]
    },
    "potentialAction": {
      "@type": "JoinAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://chillnow.com/waitlist",
        "inLanguage": "en-US",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      },
      "result": {
        "@type": "Organization",
        "name": "ChillNOW Waitlist"
      }
    }
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is ChillNOW?",
        "acceptedAnswer": {
          "@type": "Answer",
                     "text": "ChillNOW is a premium cannabis delivery service that brings lab-tested, COA-verified cannabis products to your door in 60 minutes or less."
        }
      },
      {
        "@type": "Question",
        "name": "Where do you deliver?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We deliver to legal cannabis markets across the United States. Check our website for current service areas."
        }
      },
      {
        "@type": "Question",
        "name": "Is this legal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we only operate in legal cannabis markets and comply with all local and state regulations."
        }
      },
      {
        "@type": "Question",
        "name": "How fast is delivery?",
        "acceptedAnswer": {
          "@type": "Answer",
                     "text": "We guarantee delivery in 60 minutes or less for all orders within our service areas."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need an account to order?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you'll need to create an account and verify your age and identity before placing your first order."
        }
      },
      {
        "@type": "Question",
        "name": "What about ID verification?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We require valid government-issued ID verification for all customers to ensure compliance with age restrictions."
        }
      }
    ]
  };

  // Product Schema
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "ChillNOW Premium Cannabis Products",
    "description": "Premium cannabis products including drinks, gummies, tinctures, and wellness products",
    "itemListElement": [
      {
        "@type": "Product",
        "name": "ChillNOW Sparkling Cannabis Water",
        "description": "5mg THC, 0mg CBD - Perfect for social vibes",
        "category": "Cannabis Beverages",
        "brand": {
          "@type": "Brand",
          "name": "ChillNOW"
        }
      },
      {
        "@type": "Product",
        "name": "Deep Sleep Gummies",
        "description": "10mg THC, 5mg CBD - Knock out like a champ",
        "category": "Cannabis Edibles",
        "brand": {
          "@type": "Brand",
          "name": "ChillNOW"
        }
      },
      {
        "@type": "Product",
        "name": "Focus Fuel Tincture",
        "description": "5mg THC, 10mg CBD - Clear mind, sharp focus",
        "category": "Cannabis Tinctures",
        "brand": {
          "@type": "Brand",
          "name": "ChillNOW"
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </>
  );
};

export default StructuredData; 