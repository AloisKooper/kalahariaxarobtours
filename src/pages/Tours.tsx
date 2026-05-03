import React, { useEffect, useState } from "react";
import SEO from "@/components/seo/SEO";

import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import ToursList from "@/components/tours/ToursList";
import TourInformationPanel from "@/components/tours/TourInformationPanel";

import TourFAQ from "@/components/tours/TourFAQ";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Tours: React.FC = () => {
  // State to track viewport size
  const [isMobile, setIsMobile] = useState(false);
  
  // Effect to handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    handleResize();
    
    // Add resize listener
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // State to track which tab is selected
  const [selectedTab, setSelectedTab] = useState<"cruise" | "historical">("cruise");

  return (
    <>
      <SEO
        title="Tours in Swakopmund & Walvis Bay | City, Shore Excursion & Elderly Sightseeing Tour | Kalahari Axarob Tours"
        description="Book authentic tours in Swakopmund: City or Township Tour, Full Day Cruise Liner Shore Excursion (N$2900), and our new Half Day Swakopmund Tour for Elderly (N$1800). Led by expert local guides."
        ogImage="/og-image.png"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            "name": "Swakopmund City or Township Tour",
            "description": "Explore Swakopmund's landmarks and township culture with a knowledgeable local guide.",
            "image": "https://kalahariaxarobtours.com/Home Images/Swakop Landmarks.jpg",
            "offers": [
              {
                "@type": "Offer",
                "price": "800",
                "priceCurrency": "NAD",
                "availability": "https://schema.org/InStock",
                "validFrom": "2026-05-01",
                "priceValidUntil": "2027-05-31"
              },
              {
                "@type": "Offer",
                "name": "With own transportation",
                "price": "550",
                "priceCurrency": "NAD",
                "availability": "https://schema.org/InStock",
                "validFrom": "2026-05-01",
                "priceValidUntil": "2027-05-31"
              }
            ],
            "areaServed": "NA"
          },
          {
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            "name": "Cruise Liner Shore Excursion",
            "description": "Full-day shore excursion from Walvis Bay to Swakopmund including historical highlights and a full meal.",
            "image": "https://kalahariaxarobtours.com/Home Images/Elderly Tour 8.jpg",
            "offers": {
              "@type": "Offer",
              "price": "2900",
              "priceCurrency": "NAD",
              "availability": "https://schema.org/InStock",
              "validFrom": "2026-05-01",
              "priceValidUntil": "2027-05-31"
            },
            "areaServed": "NA"
          },
          {
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            "name": "Half Day Swakopmund Tour for Elderly (Sightseeing)",
            "description": "A relaxed half day sightseeing tour for elderly cruise passengers. Covers Walvis Bay Lagoon, a scenic drive past historical buildings, craft market visit, and lunch with a cultural performance.",
            "image": "https://kalahariaxarobtours.com/Home Images/Elderly Tour 3.jpg",
            "offers": [
              {
                "@type": "Offer",
                "price": "1800",
                "priceCurrency": "NAD",
                "availability": "https://schema.org/InStock",
                "validFrom": "2026-05-01",
                "priceValidUntil": "2027-05-31"
              },
              {
                "@type": "Offer",
                "name": "Add-on to existing tour",
                "price": "500",
                "priceCurrency": "NAD",
                "availability": "https://schema.org/InStock"
              }
            ],
            "areaServed": "NA"
          }
        ]}
      />
      <PageHero
        title="Exceptional Tour Experiences"
        subtitle="Discover Swakopmund's rich history and culture through our thoughtfully crafted tours, led by knowledgeable local guides who bring Namibia's complex past to life"
        backgroundImage="/Home Images/Tours Swakop.jpg"
        isMobile={isMobile}
      />

      {/* Pricing validity note */}
      <div className="relative bg-white z-10">
        <div className="container mx-auto px-4 sm:px-6 pt-4">
          <p className="text-xs sm:text-sm text-kalahari-charcoal/80 bg-sand-custom/60 border border-kalahari-brown/10 rounded px-3 py-2 inline-block">
            Prices valid from May 2026 till May 2027.
          </p>
        </div>
      </div>

      {/* White background container for all content below hero INCLUDING footer */}
      <div className="relative bg-white z-10">
        <div className="py-12 md:py-16 container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="lg:col-span-2">
              <ToursList selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            </div>
            <div>
              <TourInformationPanel selectedTour={selectedTab} />
            </div>
          </div>
        </div>
        <TourFAQ />
        <Footer />
      </div>
    </>
  );
};

export default Tours;
