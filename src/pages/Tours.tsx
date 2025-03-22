import React, { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ToursList from "@/components/tours/ToursList";
import TourBookingWidget from "@/components/tours/TourBookingWidget";
import TourFAQ from "@/components/tours/TourFAQ";
import { Helmet } from "react-helmet";
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
  
  return (
    <>
      <Helmet>
        <title>Available Tours | Kalahari Axarob Tours</title>
        <meta name="description" content="Explore our historical tours in Swakopmund, Namibia - choose between our Half Day Local Tour or Full Day Cruise Liner Shore Excursion." />
      </Helmet>
      
      {/* 
        NAVBAR-HERO TRANSITION SOLUTION:
        1. Create a fixed background that extends behind BOTH navbar and hero
        2. Place the background image at the very top (-z-10)
        3. Add a gradient overlay for better text contrast
        4. Render the navbar directly in the flow without a container
        5. Place all content below hero in a white background container
      */}
      <div className="fixed top-0 left-0 w-full h-[100vh] overflow-hidden -z-10">
        <img 
          src="/Home Images/Art Workshops.jpg" 
          alt="" 
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        {/* Semi-dark overlay to improve text visibility */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="absolute inset-0"
          style={{
            background: isMobile 
              ? 'radial-gradient(circle at center 60%, rgba(0,0,0,0) 5%, rgba(65,48,32,0.2) 15%, rgba(65,48,32,0.4) 30%, rgba(65,48,32,0.65) 55%, rgba(65,48,32,0.9) 100%)'
              : 'radial-gradient(circle at center, rgba(0,0,0,0) 10%, rgba(65,48,32,0.2) 25%, rgba(65,48,32,0.4) 40%, rgba(65,48,32,0.6) 60%, rgba(65,48,32,0.9) 100%)',
            mixBlendMode: 'multiply'
          }}
        ></div>
      </div>
      
      {/* Main content wrapper - overflow-hidden prevents any horizontal scrollbar issues */}
      <div className="flex flex-col overflow-hidden items-center">
        {/* Navbar directly in the flow - no separate container to create visual breaks */}
        <Navbar />
        
        {/* Hero Section - adjusted height for better mobile display */}
        <section className="min-h-[40vh] md:min-h-[50vh] w-full flex items-center py-8 px-3 sm:px-4 md:px-6 hero-section overflow-hidden relative">
          <div className="container mx-auto">
            <div className="flex flex-col items-center justify-center text-center px-4 sm:px-6">
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal mb-3 md:mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                Exceptional Tour Experiences
              </motion.h1>
              <motion.div 
                className="w-16 sm:w-20 h-1 bg-kalahari-sun rounded-full mb-4 md:mb-6"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 80 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
              <motion.p 
                className="text-white/90 max-w-2xl text-sm sm:text-base md:text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Discover Swakopmund's rich history and culture through our thoughtfully crafted tours, led by knowledgeable local guides who bring Namibia's complex past to life
              </motion.p>
            </div>
          </div>
        </section>

        {/* White background container for all content below hero */}
        <div className="w-full bg-white">
          <div className="py-12 md:py-16 container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
              <div className="lg:col-span-2">
                <ToursList />
              </div>
              <div>
                <TourBookingWidget />
              </div>
            </div>
          </div>
          <TourFAQ />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Tours;
