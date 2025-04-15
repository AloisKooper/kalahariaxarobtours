import React, { useEffect, useState } from "react";

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
  const [selectedTab, setSelectedTab] = useState<"cruise" | "historical" | "township">("cruise");

  return (
    <>

      <PageHero
        title="Exceptional Tour Experiences"
        subtitle="Discover Swakopmund's rich history and culture through our thoughtfully crafted tours, led by knowledgeable local guides who bring Namibia's complex past to life"
        backgroundImage="/Home Images/Tours Swakop.jpg"
        isMobile={isMobile}
      />

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
