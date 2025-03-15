
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-kalahari-lightbrown/90 flex w-full items-center gap-5 overflow-hidden font-medium flex-wrap justify-between px-6 py-3 border-kalahari-brown border-solid border-b-2 max-md:max-w-full">
      <div className="flex items-center gap-8 text-base text-kalahari-darkbrown tracking-[-0.48px] max-md:max-w-full">
        <div className="flex items-center">
          <img
            src="/lovable-uploads/773b47dd-fd0f-4abc-9958-2fde4f920189.png"
            alt="Kalahari Axarob Tours Logo"
            className="h-16 object-contain"
          />
        </div>
        <div className="hidden md:flex items-center gap-8 my-auto">
          <Link to="/" className="text-kalahari-darkbrown font-semibold hover:text-kalahari-brown transition-colors">
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
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-2">
          <div className="border-l h-6 border-kalahari-darkbrown/50"></div>
          <Link to="/tour-guide" className="text-kalahari-charcoal hover:text-kalahari-brown transition-colors">
            Tour Guide
          </Link>
        </div>
        <Button className="bg-kalahari-brown hover:bg-kalahari-darkbrown text-white font-medium rounded-full">
          BOOK TOUR
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
