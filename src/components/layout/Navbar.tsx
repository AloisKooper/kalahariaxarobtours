import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-kalahari-lightbrown/90 flex w-full items-center overflow-hidden font-medium flex-wrap justify-between px-4 sm:px-6 py-3 border-kalahari-brown border-solid border-b-2">
      <div className="flex items-center md:w-1/4 text-base text-kalahari-darkbrown tracking-[-0.48px]">
        <Link to="/" className="flex items-center">
          <img
            src="/Home Images/axarob tours.png"
            alt="Kalahari Axarob Tours Logo"
            className="h-12 sm:h-14 md:h-16 object-contain"
          />
        </Link>
      </div>
      
      {/* Desktop and Tablet Navigation - Centered */}
      <div className="hidden md:flex md:w-2/4 items-center justify-center">
        <div className="flex items-center gap-4 lg:gap-8 my-auto">
          <Link to="/" className="text-kalahari-darkbrown hover:text-kalahari-brown transition-colors">
            Home
          </Link>
          <Link to="/tours" className="text-kalahari-charcoal hover:text-kalahari-brown transition-colors">
            Tours
          </Link>
          <Link to="/about" className="text-kalahari-charcoal hover:text-kalahari-brown transition-colors">
            About Us
          </Link>
          <Link to="/gallery" className="text-kalahari-charcoal hover:text-kalahari-brown transition-colors">
            Gallery
          </Link>
          <Link to="/testimonials" className="text-kalahari-charcoal hover:text-kalahari-brown transition-colors">
            Testimonial
          </Link>
        </div>
      </div>
      
      {/* Desktop and Tablet Actions */}
      <div className="flex items-center md:w-1/4 justify-end gap-4">
        <div className="hidden md:flex items-center gap-2">
          <div className="border-l h-6 border-kalahari-darkbrown/50"></div>
          <Link to="/tour-guide" className="text-kalahari-charcoal hover:text-kalahari-brown transition-colors">
            Tour Guide
          </Link>
        </div>
        <Button className="bg-kalahari-brown hover:bg-kalahari-darkbrown text-white font-medium rounded-full text-sm py-1 px-4 md:py-2 md:px-6">
          BOOK TOUR
        </Button>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-kalahari-darkbrown"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden w-full mt-3 border-t border-kalahari-brown/20 pt-3">
          <div className="flex flex-col space-y-3">
            <Link 
              to="/" 
              className="text-kalahari-darkbrown hover:text-kalahari-brown transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/tours" 
              className="text-kalahari-charcoal hover:text-kalahari-brown transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tours
            </Link>
            <Link 
              to="/about" 
              className="text-kalahari-charcoal hover:text-kalahari-brown transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/gallery" 
              className="text-kalahari-charcoal hover:text-kalahari-brown transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              to="/testimonials" 
              className="text-kalahari-charcoal hover:text-kalahari-brown transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonial
            </Link>
            <Link 
              to="/tour-guide" 
              className="text-kalahari-charcoal hover:text-kalahari-brown transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tour Guide
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
