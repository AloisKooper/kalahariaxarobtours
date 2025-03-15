
import React, { useState } from "react";

const TourTypes: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Visit to Genocide Memorial & Military Statue",
      description:
        "A brief overview of the Tour with a timestamp and a link to the Tour page for Full Details",
    },
    {
      title: "Visit to Mondesa Township",
      description:
        "A brief overview of the Tour with a timestamp and a link to the Tour page for Full Details",
    },
    {
      title: "Tour through DRC Township",
      description:
        "A brief overview of the Tour with a timestamp and a link to the Tour page for Full Details",
    },
  ];

  return (
    <section className="w-full flex flex-col items-center py-20 bg-kalahari-lightbrown/10 px-6">
      <h2 className="text-kalahari-brown text-center text-4xl md:text-5xl font-medium tracking-wide uppercase z-10 max-md:text-3xl">
        Tour Types
      </h2>
      <p className="text-kalahari-charcoal text-center text-lg font-normal leading-7 mt-4 max-w-3xl max-md:max-w-full">
        At Kalahari Axarob Tours we offer 1 main tour which is split into 2
        sub-tours which Booker's can choose from
      </p>

      <div className="w-full max-w-6xl mt-16 max-md:max-w-full max-md:mt-10">
        <div className="gap-8 flex max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <div className="flex w-full flex-col items-stretch max-md:max-w-full max-md:mt-10">
              <div className="bg-kalahari-accent/30 flex shrink-0 h-[400px] rounded-lg shadow-md overflow-hidden max-md:max-w-full" />
              <div className="flex items-center gap-3 mt-4 justify-center">
                <button className="opacity-60 hover:opacity-100 transition-opacity">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="#7D5A3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {[0, 1, 2].map((index) => (
                  <div
                    key={index}
                    className={`${
                      currentSlide === index
                        ? "bg-kalahari-brown"
                        : "bg-kalahari-gravel/40 hover:bg-kalahari-brown/40 transition-colors"
                    } flex w-3 h-3 rounded-full cursor-pointer`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
                <button className="opacity-60 hover:opacity-100 transition-opacity">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 6L15 12L9 18" stroke="#7D5A3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <div className="flex w-full flex-col self-stretch items-stretch text-kalahari-charcoal my-auto max-md:max-w-full max-md:mt-10">
              <div className="flex flex-col items-stretch max-md:max-w-full max-md:pl-0">
                <h3 className="text-xl font-semibold text-kalahari-brown tracking-wide max-md:max-w-full">
                  {slides[0].title}
                </h3>
                <p className="text-base font-normal leading-7 mt-4 max-md:mr-0">
                  {slides[0].description}
                </p>
              </div>

              <div className="flex items-start gap-5 mt-10 p-4 bg-white rounded-lg shadow-sm max-md:mt-8">
                <div className="bg-kalahari-gravel/30 flex w-12 h-12 shrink-0 rounded-lg items-center justify-center">
                  <span className="text-kalahari-brown font-bold">2</span>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold text-kalahari-brown tracking-wide">
                    {slides[1].title}
                  </h3>
                  <p className="text-base font-normal leading-7 mt-2">
                    {slides[1].description}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-lg shadow-sm mt-6">
                <h3 className="text-xl font-semibold text-kalahari-brown tracking-wide">
                  {slides[2].title}
                </h3>
                <p className="text-base font-normal leading-7 mt-2">
                  {slides[2].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourTypes;
