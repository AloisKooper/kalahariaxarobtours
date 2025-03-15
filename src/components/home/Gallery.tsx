
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
        imageSrc: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "Historical Monument",
        price: "Included",
        imageSrc: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "Mass Graves",
        price: "Included",
        imageSrc: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "Old Military Barracks",
        price: "Included",
        imageSrc: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
      },
    ],
    "DRC Township": [
      {
        title: "Township Tour",
        price: "Included",
        imageSrc: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "Local Living",
        price: "Included",
        imageSrc: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "Cultural Exchange",
        price: "Included",
        imageSrc: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "Community Projects",
        price: "Included",
        imageSrc: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80"
      },
    ],
    "COSDEF Arts & Crafts": [
      {
        title: "Local Artwork",
        price: "Optional",
        imageSrc: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "Craft Market",
        price: "Optional",
        imageSrc: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "Art Workshops",
        price: "Optional",
        imageSrc: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "Souvenir Shop",
        price: "Optional",
        imageSrc: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=600&q=80"
      },
    ],
    "Mondesa Township": [
      {
        title: "Township Visit",
        price: "Included",
        imageSrc: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "Cultural Tour",
        price: "Included",
        imageSrc: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "Local Homes",
        price: "Included",
        imageSrc: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "Community Center",
        price: "Included",
        imageSrc: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&q=80"
      },
    ],
  };

  return (
    <section className="bg-gradient-to-b from-white to-kalahari-sand/20 self-stretch flex w-full flex-col overflow-hidden items-center py-20 max-md:max-w-full max-md:py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-kalahari-brown text-center text-4xl md:text-5xl font-medium tracking-wide uppercase max-md:max-w-full max-md:text-3xl">
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
                <div className="whitespace-nowrap px-2">{tab}</div>
                {activeTab === tab && (
                  <div className="bg-kalahari-brown h-1 mt-3 rounded-full" />
                )}
              </div>
            ))}
          </div>

          <div className="border-b border-kalahari-gravel/40 w-full max-w-[1264px] mx-auto" />

          {/* Gallery cards */}
          <div className="mt-12 max-md:mt-8">
            <div className="gap-6 flex flex-wrap justify-center">
              {galleryImages[activeTab as keyof typeof galleryImages].map((item, index) => (
                <div key={index} className="mb-6">
                  <GalleryCard
                    title={item.title}
                    price={item.price}
                    imageSrc={item.imageSrc}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <button className="bg-white hover:bg-kalahari-sand/50 text-kalahari-brown font-semibold py-3 px-6 rounded-lg transition-colors border border-kalahari-brown/20">
              Show more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
