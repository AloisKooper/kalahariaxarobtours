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
    <section className="bg-[rgba(250,251,253,1)] self-stretch flex w-full flex-col overflow-hidden items-center pb-[204px] max-md:max-w-full max-md:pb-[100px]">
      <h2 className="text-[#486284] text-center text-[53px] font-medium tracking-[2.12px] uppercase max-md:max-w-full max-md:text-[40px]">
        kalahari axarob's gallery
      </h2>
      <p className="text-[#1A202C] text-center text-lg font-normal leading-[27px] mt-[7px] max-md:max-w-full">
        Explore the diverse scenery of the historical events that took place in
        Swakopmund from around 1904-1908
      </p>

      <div className="self-stretch flex mb-[-41px] w-full flex-col items-stretch mt-[72px] px-[72px] max-md:max-w-full max-md:mt-10 max-md:mb-2.5 max-md:px-5">
        <div className="z-10 flex w-full max-w-[1264px] gap-[40px_100px] text-[22px] text-[#1A202C] font-medium text-center tracking-[-0.44px] max-md:max-w-full">
          {tabs.map((tab) => (
            <div
              key={tab}
              className={`${
                activeTab === tab
                  ? "self-stretch flex flex-col items-stretch font-semibold"
                  : "opacity-60 grow shrink"
              }`}
              onClick={() => setActiveTab(tab)}
              style={{ cursor: "pointer" }}
            >
              <div className="self-center">{tab}</div>
              {activeTab === tab && (
                <div className="bg-[#1A202C] shrink-0 h-1 mt-[31px] border-[rgba(26,32,44,1)] border-solid border-4" />
              )}
            </div>
          ))}
        </div>

        <div className="border bg-[#90A3BF] shrink-0 h-px border-[rgba(144,163,191,1)] border-solid max-md:max-w-full" />

        {/* First row of gallery cards */}
        <div className="mt-12 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-3/12 max-md:w-full max-md:ml-0">
                <div className="grow max-md:mt-[31px]">
                  <GalleryCard
                    title="To be Filled In"
                    price="To be Filled In"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second row of gallery cards */}
        <div className="mt-8 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-3/12 max-md:w-full max-md:ml-0">
                <div className="grow max-md:mt-[31px]">
                  <GalleryCard
                    title="To be Filled In"
                    price="To be Filled In"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="self-center flex w-[156px] max-w-full items-center text-base text-[#486284] font-semibold text-center tracking-[-0.32px] mt-[65px] max-md:mt-10 rounded bg-white min-h-11 gap-2 px-5">
          Show more
        </button>
      </div>
    </section>
  );
};

export default Gallery;
