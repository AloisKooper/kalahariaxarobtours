
import React from "react";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-kalahari-lightbrown/50 to-kalahari-sand/30 self-stretch w-full py-16 md:py-24 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col">
            <h2 className="text-sm leading-none text-kalahari-darkbrown">
              The Ultimate Historical Tour Experience
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight uppercase mt-4 text-kalahari-brown">
              kalahari axarob tours
            </h1>
            <p className="leading-7 tracking-[-0.32px] text-kalahari-charcoal/80 mt-6">
              An eye opening guided tour filled to the brink with historical and cultural information, 
              uniquely designed for passengers on Cruise ships, wanting a shore Excursion in and around 
              Swakopmund "The little piece of Germany under the African skies"
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Link
                to="/gallery"
                className="rounded bg-white text-kalahari-darkbrown border border-kalahari-brown/20 hover:bg-kalahari-sand/50 transition-colors py-2.5 px-5 font-semibold"
              >
                Gallery
              </Link>
              <Link
                to="/book"
                className="text-kalahari-brown hover:text-kalahari-darkbrown transition-colors font-semibold"
              >
                Book Tour
              </Link>
            </div>
            
            <div className="mt-10 bg-white/70 p-4 rounded-lg border border-kalahari-brown/10">
              <h3 className="text-kalahari-brown font-semibold text-lg mb-2">Additional Information</h3>
              <ul className="text-kalahari-charcoal/90 space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-kalahari-brown mr-2">•</span>
                  <span>Not wheelchair accessible</span>
                </li>
                <li className="flex items-start">
                  <span className="text-kalahari-brown mr-2">•</span>
                  <span>Vegetarian or vegan option available</span>
                </li>
                <li className="flex items-start">
                  <span className="text-kalahari-brown mr-2">•</span>
                  <span>Travelers should have a moderate fitness level</span>
                </li>
                <li className="flex items-start">
                  <span className="text-kalahari-brown mr-2">•</span>
                  <span>Bring sunscreen and a shade hat</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-kalahari-brown/20 rounded-lg shadow-md overflow-hidden h-64">
                <img
                  src="https://images.unsplash.com/photo-1504432842672-1a79f78e4084?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Tour Guide"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-kalahari-brown/20 rounded-lg shadow-md overflow-hidden h-64">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
                  alt="Tour Destination"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
