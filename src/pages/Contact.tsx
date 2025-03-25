import React, { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import ContactSection from "@/components/home/ContactSection";

const ContactPage: React.FC = () => {
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
      <Navbar />
      <PageHero
        title="Contact Us"
        subtitle="Get in touch to book a tour, ask questions, or share feedback about your experience"
        backgroundImage="/Home Images/contact swak.jpg"
        isMobile={isMobile}
      />
      
      {/* White background container for all content below hero INCLUDING footer */}
      <div className="w-full bg-white relative z-10">
        <div className="py-12 md:py-16 px-4 md:px-6">
          <ContactSection />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ContactPage; 