import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[rgba(255,255,255,0)] flex w-full items-stretch gap-5 overflow-hidden font-medium flex-wrap justify-between pr-[33px] border-[rgba(72,98,132,1)] border-solid border-2 max-md:max-w-full max-md:pr-5">
      <div className="flex items-center gap-[40px_56px] text-base text-[rgba(72,98,132,1)] tracking-[-0.48px] max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/25b2cb22e0503745dedfc5e45b14184635e3ec7981ceb90c5bcaa2bff58529ba?placeholderIfAbsent=true"
          alt="Kalahari Axarob Tours Logo"
          className="aspect-[2.53] object-contain w-full self-stretch"
        />
        <div className="self-stretch flex items-stretch gap-[40px_55px] flex-wrap my-auto max-md:max-w-full">
          <Link to="/" className="text-[#1A202C] font-semibold">
            Home
          </Link>
          <Link to="/tours" className="text-center">
            Tours
          </Link>
          <Link to="/about" className="text-center">
            About Us
          </Link>
          <Link to="/gallery" className="text-center">
            Gallery
          </Link>
          <Link to="/testimonials" className="text-center">
            Testimonial
          </Link>
        </div>
        <div className="self-stretch flex items-stretch gap-5 underline my-auto">
          <div className="border w-px shrink-0 h-6 border-[rgba(72,98,132,1)] border-solid" />
          <Link to="/tour-guide">Tour Guide</Link>
        </div>
      </div>
      <button className="bg-[rgba(170,181,195,1)] text-sm text-white tracking-[-0.42px] my-auto px-[31px] py-3.5 rounded-[50px] max-md:px-5">
        BOOK TOUR
      </button>
    </nav>
  );
};

export default Navbar;
