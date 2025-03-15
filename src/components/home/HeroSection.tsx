
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-kalahari-lightbrown/50 to-kalahari-sand/30 self-stretch flex w-full flex-col items-stretch pt-16 pb-24 max-md:max-w-full max-md:pb-16">
      <div className="self-center w-full max-w-[1343px] px-6 max-md:max-w-full">
        <div className="gap-8 flex max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <div className="flex w-full flex-col items-stretch text-base text-kalahari-charcoal font-medium max-md:max-w-full max-md:mt-10">
              <h2 className="text-sm leading-none text-kalahari-darkbrown">
                The Ultimate Historical Tour Experience
              </h2>
              <h1 className="text-5xl md:text-6xl font-normal leading-tight uppercase mt-4 text-kalahari-brown max-md:max-w-full max-md:text-4xl max-md:leading-tight">
                kalahari axarob tours
              </h1>
              <p className="leading-7 tracking-[-0.32px] text-kalahari-charcoal/80 mt-6 max-md:max-w-full max-md:mr-2.5">
                Discover the untold stories of Swakopmund's history. Walk
                through the remnants of the Ovaherero/Namaqua genocide, visit
                historical sites, and experience Namibia's deep cultural
                heritage with Kalahari Axarob Tours.
              </p>
              <div className="flex items-center gap-4 mt-10 max-md:mt-8">
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
            </div>
          </div>
          <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="bg-kalahari-accent/40 flex grow flex-col items-center w-full pt-16 pb-16 px-8 rounded-[32px] shadow-lg max-md:max-w-full max-md:mt-10 max-md:px-5">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/9c0641a956d62af8f9e0b9afa72796330017598c0c309345e86a55a251f7fecf?placeholderIfAbsent=true"
                alt="Tour Guide"
                className="aspect-[1] object-contain w-[268px] max-w-full rounded-[32px] shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
