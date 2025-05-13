import React, { useState } from "react";
import GalleryCard from "../ui/GalleryCard";

const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Historical Sites");

  const tabs = [
    "Historical Sites",
    "Nature & Scenery"
  ];

  const galleryImages = {
    "Historical Sites": [
      {
        title: "Old Military Barracks (Alte Kaserne)",
        description: "Historical German colonial military structure in Swakopmund",
        imageSrc: "/Home Images/barracks.jpg",
        price: "Included in tour"
      },
      {
        title: "Old Hospital",
        description: "Historical medical facility from the colonial era",
        imageSrc: "/Home Images/Hospital.jpg",
        price: "Included in tour"
      },
      {
        title: "Swakopmund Jetty",
        description: "Historic wooden pier extending into the Atlantic Ocean",
        imageSrc: "/Home Images/jetty hero.jpg",
        price: "Included in tour"
      },
      {
        title: "Woermann House",
        description: "Iconic colonial-era building with distinctive architecture",
        imageSrc: "/Home Images/Woermann House.jpg",
        price: "Included in tour"
      },
      {
        title: "German War Memorial",
        description: "Commemorating soldiers from World War I.",
        imageSrc: "/Home Images/Axarob 4.webp",
        price: "Included in tour"
      },
      {
        title: "Old Bahnhof",
        description: "Historic German railway station",
        imageSrc: "/Home Images/Bahnhof.jpg",
        price: "Included in tour"
      },
      {
        title: "Mondesa Township Experience",
        description: "Tourists exploring the vibrant Mondesa Township.",
        imageSrc: "/Home Images/Axarob 7.webp",
        price: "Included in tour"
      }
    ],
    "Nature & Scenery": [
      {
        title: "Walvis Bay Lagoon",
        description: "Beautiful lagoon where you can spot flamingos and other birdlife",
        imageSrc: "/Home Images/Flamingo.jpg",
        price: "Full Day Tour only"
      },
      {
        title: "Dune 7",
        description: "One of the highest dunes in the Namib Desert",
        imageSrc: "/Home Images/dune-7.gif",
        price: "Full Day Tour only"
      },
      {
        title: "Swakopmund Beach",
        description: "Scenic beach views along the Atlantic coast",
        imageSrc: "/Home Images/Swakopmund Beach.jpg",
        price: "Included in tour"
      },
      {
        title: "Swakopmund Jetty Scenery",
        imageSrc: "/Home Images/Axarob 5.webp",
        price: "Included in tour"
      },
      {
        title: "Walvis Bay Salt Works",
        description: "Mr. Michaels at the Walvis Bay salt pans.",
        imageSrc: "/Home Images/Axarob 6.webp",
        price: "Full Day Tour only"
      }
    ],
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-kalahari-sand/30 w-full py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-kalahari-brown text-center text-3xl sm:text-4xl md:text-5xl font-normal tracking-wide uppercase">
          kalahari axarob's gallery
        </h2>
        <p className="text-kalahari-charcoal text-center text-base sm:text-lg font-normal leading-7 mt-4 max-w-3xl mx-auto">
          Explore the historical sites and natural beauty of Swakopmund
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
