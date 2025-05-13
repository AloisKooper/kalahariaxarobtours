import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import TourAgenda from "@/components/home/TourAgenda";
import Gallery from "@/components/home/Gallery";
import TourTypes from "@/components/home/TourTypes";
import TourGuideInfo from "@/components/home/TourGuideInfo";
import AboutGuide from "@/components/home/AboutGuide";
import Testimonials from "@/components/home/Testimonials";
import BlogArticles from "@/components/home/BlogArticles";
import ContactSection from "@/components/home/ContactSection";

const Index: React.FC = () => {
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
    <div className="overflow-x-hidden">
      <Helmet>
        <title>Kalahari Axarob Tours - City Tours & Shore Excursions in Swakopmund</title>
        <link rel="icon" type="image/png" href="/Kalahari Axarob Tours Icon.png" />
        <meta name="description" content="Discover Swakopmund's unique culture and landmarks with our city tours and shore excursions. Experienced local guides." />
      </Helmet>
      {/* Fixed background that extends behind both navbar and hero */}
      <div className="fixed top-0 left-0 w-full h-[100vh] overflow-hidden -z-10">
        <img 
          src="/Home Images/DunesmeetOcean.png"
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
      
      <div className="flex flex-col overflow-hidden items-center">

        <HeroSection />
      </div>

      {/* Rest of content positioned over a white background */}
      <div className="relative bg-white z-10">
        <TourAgenda />
        <TourGuideInfo />
        <AboutGuide />
        <Gallery />
        <TourTypes />
        
        {/* Testimonials section with heading */}
        <section className="w-full flex flex-col items-center py-16 md:py-20 lg:py-24 bg-gray-50 px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 relative">
            <div className="flex justify-center mb-3">
              <div className="w-16 h-1 bg-kalahari-brown rounded-full"></div>
            </div>
            <h2 className="text-kalahari-darkbrown text-3xl md:text-4xl lg:text-5xl font-normal leading-tight text-center">
              Trusted by Hundreds of <br className="hidden sm:block" />
              <span className="text-kalahari-brown">Happy Customers</span>
            </h2>
            <p className="text-kalahari-charcoal text-center text-base md:text-lg font-normal mt-4 md:mt-6 max-w-2xl mx-auto">
              Read what previous tour participants have to say about their experience with Kalahari Axarob Tours
            </p>
          </div>
          
          <Testimonials />
          
          {/* View All Reviews Link - Enhanced */}
          <div className="mt-10 md:mt-12">
            <a 
              href="/testimonial" 
              className="inline-flex items-center gap-2 bg-white border border-kalahari-brown/20 text-kalahari-brown px-5 py-2.5 rounded-lg font-medium hover:bg-kalahari-brown hover:text-white transition-colors shadow-sm"
            >
              <span>View all reviews</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </section>
        
        <BlogArticles />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
