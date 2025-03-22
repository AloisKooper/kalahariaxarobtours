import React, { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
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
    <>
      {/* Background wrapper that goes behind the navbar */}
      <div className="fixed top-0 left-0 w-full h-[100vh] overflow-hidden -z-10">
        <img 
          src="/Home Images/HeroImage.jpg" 
          alt="" 
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
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
        <Navbar />
        <HeroSection />
        {/* Add solid background for all content below hero */}
        <div className="w-full bg-white">
          <TourAgenda />
          <Gallery />
          <TourTypes />
          <TourGuideInfo />
          <AboutGuide />
          <Testimonials />
          <BlogArticles />
          <ContactSection />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Index;
