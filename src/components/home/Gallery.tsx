import React, { useState } from "react";
import GalleryCard from "../ui/GalleryCard";

const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Concentration Camp Mass Graves");

  const tabs = [
    "Concentration Camp Mass Graves",
    "DRC Township",
    "COSDEF Arts & Crafts",
    "Mondesa Township",
  ];

  const galleryImages = {
    "Concentration Camp Mass Graves": [
      {
        title: "Memorial Site",
        price: "Included",
        imageSrc: "/Home Images/Memorial Site.jpg"
      },
      {
        title: "Historical Monument",
        price: "Included",
        imageSrc: "/Home Images/Historical Monument.jpg"
      },
      {
        title: "Mass Graves",
        price: "Included",
        imageSrc: "/Home Images/Mass Graves.jpg"
      },
      {
        title: "Old Military Barracks",
        price: "Included",
        imageSrc: "/Home Images/Old Military Barracks.jpg"
      },
    ],
    "DRC Township": [
      {
        title: "Township Tour",
        price: "Included",
        imageSrc: "/Home Images/Township Tour.jpg"
      },
      {
        title: "Local Living",
        price: "Included",
        imageSrc: "/Home Images/Local Living.jpg"
      },
      {
        title: "Cultural Exchange",
        price: "Included",
        imageSrc: "/Home Images/Cultural Exchange.jpg"
      },
      {
        title: "Community Projects",
        price: "Included",
        imageSrc: "/Home Images/Community Projects.jpg"
      },
    ],
    "COSDEF Arts & Crafts": [
      {
        title: "Local Artwork",
        price: "Optional",
        imageSrc: "/Home Images/Local Artwork.jpg"
      },
      {
        title: "Craft Market",
        price: "Optional",
        imageSrc: "/Home Images/Craft Market.jpg"
      },
      {
        title: "Art Workshops",
        price: "Optional",
        imageSrc: "/Home Images/Art Workshops.jpg"
      },
      {
        title: "Souvenir Shop",
        price: "Optional",
        imageSrc: "/Home Images/Souvenir Shop.jpg"
      },
    ],
    "Mondesa Township": [
      {
        title: "Township Visit",
        price: "Included",
        imageSrc: "/Home Images/Township Visit.png"
      },
      {
        title: "Cultural Tour",
        price: "Included",
        imageSrc: "/Home Images/Cultural Tour.png"
      },
      {
        title: "Local Homes",
        price: "Included",
        imageSrc: "/Home Images/Local Homes.jpg"
      },
      {
        title: "Community Center",
        price: "Included",
        imageSrc: "/Home Images/Community Center.jpg"
      },
    ],
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-kalahari-sand/30 w-full py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-kalahari-brown text-center text-3xl sm:text-4xl md:text-5xl font-normal tracking-wide uppercase">
          kalahari axarob's gallery
        </h2>
        <p className="text-kalahari-charcoal text-center text-base sm:text-lg font-normal leading-7 mt-4 max-w-3xl mx-auto">
          Explore the diverse scenery of the historical events that took place in
          Swakopmund from around 1904-1908
        </p>

        {/* Tabs - Improved for mobile with 2x2 grid layout */}
        <div className="mt-10">
          <div className="grid grid-cols-2 sm:flex sm:justify-center gap-4 sm:gap-6 pb-2 max-w-md mx-auto sm:max-w-none">
            {tabs.map((tab) => (
              <div
                key={tab}
                className={`${
                  activeTab === tab
                    ? "flex flex-col items-center text-center font-semibold text-kalahari-brown"
                    : "flex flex-col items-center text-center opacity-70 transition-opacity hover:opacity-100 cursor-pointer"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                <div className="whitespace-normal sm:whitespace-nowrap px-1 text-sm sm:text-base">{tab}</div>
                {activeTab === tab && (
                  <div className="bg-kalahari-brown h-1 mt-2 w-full max-w-[80px] rounded-full" />
                )}
              </div>
            ))}
          </div>
          <div className="border-b border-gravel-custom w-full max-w-[1264px] mx-auto mt-1" />
        </div>

        {/* Gallery Cards - Responsive Grid */}
        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
            {galleryImages[activeTab as keyof typeof galleryImages].map((item, index) => (
              <div key={index} className="flex justify-center">
                <GalleryCard
                  title={item.title}
                  price={item.price}
                  imageSrc={item.imageSrc}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Show More Button */}
        <div className="flex justify-center mt-10">
          <button className="bg-white hover:bg-sand-hover text-kalahari-brown font-semibold py-3 px-8 rounded-lg transition-colors border border-kalahari-brown/20">
            Show more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
