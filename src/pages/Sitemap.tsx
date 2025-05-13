import React, { useEffect, useState } from "react";

import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import { Link } from "react-router-dom";

const Sitemap: React.FC = () => {
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

  // Structure of the site for the sitemap
  const sitemapStructure = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", path: "/" },
        { name: "Tours", path: "/tours" },
        { name: "About Us", path: "/about" },
        { name: "Gallery", path: "/gallery" },
        { name: "Testimonial", path: "/testimonial" },
        { name: "Tour Guide", path: "/tour-guide" },
        { name: "Blog", path: "/blog" },
        { name: "Contact", path: "/contact" }
      ]
    },
    {
      title: "Legal Pages",
      links: [
        { name: "Privacy Policy", path: "/privacy" },
        { name: "Terms & Conditions", path: "/terms" }
      ]
    },
    {
      title: "Tour Information",
      links: [
        { name: "Swakopmund City Discovery Tour", path: "/tours#local" },
        { name: "Cruise Liner Shore Excursion", path: "/tours#cruise" },
        { name: "Guided Township Tour", path: "/tours#township" }
      ]
    },
    {
      title: "Home Page Sections",
      links: [
        { name: "About the Tour Guide", path: "/#about-guide" },
        { name: "Tour Itinerary", path: "/#tour-agenda" },
        { name: "Tour Types", path: "/#tour-types" },
        { name: "Gallery", path: "/#gallery" },
        { name: "Testimonials", path: "/#testimonials" },
        { name: "Blog Articles", path: "/#blog" },
        { name: "Contact Section", path: "/#contact" }
      ]
    }
  ];

  return (
    <>

      <PageHero
        title="Sitemap"
        subtitle="Find your way around our website with this comprehensive listing of all our pages and sections"
        backgroundImage="/Home Images/Sitemap.jpg"
        isMobile={isMobile}
      />
      
      {/* White background container for all content below hero INCLUDING footer */}
      <div className="w-full bg-white relative z-10">
        <div className="py-12 md:py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {sitemapStructure.map((section, index) => (
                <div key={index} className="space-y-6">
                  <h2 className="text-xl text-kalahari-brown mb-4 pb-2 border-b border-kalahari-sand">
                    {section.title}
                  </h2>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link 
                          to={link.path} 
                          className="text-kalahari-darkbrown hover:text-kalahari-brown transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="mt-16 pt-8 border-t border-kalahari-sand">
              <h2 className="text-xl text-kalahari-brown mb-6 text-center">
                Need Help Finding Something?
              </h2>
              <p className="text-kalahari-charcoal mb-6 text-center max-w-2xl mx-auto">
                If you can't find what you're looking for, please don't hesitate to contact us. Our team is here to assist you with any questions or inquiries you may have.
              </p>
              <div className="flex justify-center">
                <Link 
                  to="/contact" 
                  className="bg-kalahari-brown text-white py-2 px-6 rounded-full hover:bg-kalahari-darkbrown transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Sitemap; 