
import React, { useState } from "react";
import GalleryCard from "../ui/GalleryCard";

const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Genocide Memorial");

  const tabs = [
    "Genocide Memorial",
    "DRC Township",
    "COSDEF Arts & Crafts",
    "Mondesa Township",
  ];

  return (
    <section className="bg-gradient-to-b from-white to-kalahari-sand/20 self-stretch flex w-full flex-col overflow-hidden items-center py-20 max-md:max-w-full max-md:py-16">
      <h2 className="text-kalahari-brown text-center text-4xl md:text-5xl font-medium tracking-wide uppercase max-md:max-w-full max-md:text-3xl">
        kalahari axarob's gallery
      </h2>
      <p className="text-kalahari-charcoal text-center text-lg font-normal leading-7 mt-4 max-w-3xl mx-auto px-6 max-md:max-w-full">
        Explore the diverse scenery of the historical events that took place in
        Swakopmund from around 1904-1908
      </p>

      <div className="self-stretch flex w-full flex-col items-stretch mt-16 px-6 max-md:max-w-full max-md:mt-10">
        <div className="z-10 flex w-full max-w-[1264px] mx-auto gap-8 text-lg text-kalahari-charcoal font-medium text-center max-md:max-w-full overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <div
              key={tab}
              className={`${
                activeTab === tab
                  ? "self-stretch flex flex-col items-stretch font-semibold text-kalahari-brown"
                  : "opacity-70 transition-opacity hover:opacity-100 cursor-pointer"
              }`}
              onClick={() => setActiveTab(tab)}
              style={{ cursor: "pointer" }}
            >
              <div className="whitespace-nowrap px-2">{tab}</div>
              {activeTab === tab && (
                <div className="bg-kalahari-brown h-1 mt-3 rounded-full" />
              )}
            </div>
          ))}
        </div>

        <div className="border-b border-kalahari-gravel/40 w-full max-w-[1264px] mx-auto" />

        {/* First row of gallery cards */}
        <div className="mt-12 max-w-6xl mx-auto max-md:mt-8">
          <div className="gap-5 flex flex-wrap justify-center">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-64 sm:w-72 mb-6">
                <GalleryCard
                  title="To be Filled In"
                  price="To be Filled In"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Second row of gallery cards */}
        <div className="mt-6 max-w-6xl mx-auto">
          <div className="gap-5 flex flex-wrap justify-center">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-64 sm:w-72 mb-6">
                <GalleryCard
                  title="To be Filled In"
                  price="To be Filled In"
                />
              </div>
            ))}
          </div>
        </div>

        <button className="self-center mt-10 bg-white hover:bg-kalahari-sand/50 text-kalahari-brown font-semibold py-3 px-6 rounded-lg transition-colors border border-kalahari-brown/20">
          Show more
        </button>
      </div>
    </section>
  );
};

export default Gallery;
