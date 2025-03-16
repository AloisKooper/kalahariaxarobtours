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

  const galleryImages = {
    "Genocide Memorial": [
      {
        title: "Memorial Site",
        price: "Included",
        imageSrc: null
      },
      {
        title: "Historical Monument",
        price: "Included",
        imageSrc: null
      },
      {
        title: "Mass Graves",
        price: "Included",
        imageSrc: null
      },
      {
        title: "Old Military Barracks",
        price: "Included",
        imageSrc: null
      },
    ],
    "DRC Township": [
      {
        title: "Township Tour",
        price: "Included",
        imageSrc: null
      },
      {
        title: "Local Living",
        price: "Included",
        imageSrc: null
      },
      {
        title: "Cultural Exchange",
        price: "Included",
        imageSrc: null
      },
      {
        title: "Community Projects",
        price: "Included",
        imageSrc: null
      },
    ],
    "COSDEF Arts & Crafts": [
      {
        title: "Local Artwork",
        price: "Optional",
        imageSrc: null
      },
      {
        title: "Craft Market",
        price: "Optional",
        imageSrc: null
      },
      {
        title: "Art Workshops",
        price: "Optional",
        imageSrc: null
      },
      {
        title: "Souvenir Shop",
        price: "Optional",
        imageSrc: null
      },
    ],
    "Mondesa Township": [
      {
        title: "Township Visit",
        price: "Included",
        imageSrc: null
      },
      {
        title: "Cultural Tour",
        price: "Included",
        imageSrc: null
      },
      {
        title: "Local Homes",
        price: "Included",
        imageSrc: null
      },
      {
        title: "Community Center",
        price: "Included",
        imageSrc: null
      },
    ],
  };

  return (
    <section className="bg-gradient-to-b from-white to-kalahari-sand/20 self-stretch flex w-full flex-col overflow-hidden items-center py-20 max-md:max-w-full max-md:py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-kalahari-brown text-center text-4xl md:text-5xl font-normal tracking-wide uppercase z-10 max-md:text-3xl">
          kalahari axarob's gallery
        </h2>
        <p className="text-kalahari-charcoal text-center text-lg font-normal leading-7 mt-4 max-w-3xl mx-auto">
          Explore the diverse scenery of the historical events that took place in
          Swakopmund from around 1904-1908
        </p>

        <div className="mt-12 max-md:mt-8">
          <div className="z-10 flex w-full justify-center gap-8 text-lg text-kalahari-charcoal font-medium text-center max-md:flex-wrap overflow-x-auto pb-2">
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
                <div className="whitespace-nowrap px-4">{tab}</div>
                {activeTab === tab && (
                  <div className="bg-kalahari-brown h-1 mt-3 rounded-full" />
                )}
              </div>
            ))}
          </div>

          <div className="border-b border-kalahari-gravel/40 w-full max-w-[1264px] mx-auto" />

          {/* Gallery cards */}
          <div className="mt-12 max-md:mt-8">
            <div className="gap-8 flex flex-wrap justify-center">
              {galleryImages[activeTab as keyof typeof galleryImages].map((item, index) => (
                <div key={index} className="mb-8">
                  <GalleryCard
                    title={item.title}
                    price={item.price}
                    imageSrc={null}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <button className="bg-white hover:bg-kalahari-sand/50 text-kalahari-brown font-semibold py-3 px-8 rounded-lg transition-colors border border-kalahari-brown/20">
              Show more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
