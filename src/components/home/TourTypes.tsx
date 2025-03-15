
import React, { useState } from "react";

const TourTypes: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Visit to Genocide Memorial & Military Statue",
      description:
        "Explore the historical sites commemorating the 1904-1908 Nama and Ovaherero Genocide, regarded as the first genocide of the 20th century. Visit the memorial site, military barracks, and mass graves.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Visit to Mondesa Township",
      description:
        "Experience the vibrant culture of Mondesa Township, interact with locals, and learn about daily life in this community. The tour includes cultural exchanges and visits to community projects.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Tour through DRC Township",
      description:
        "Discover the Democratic Resettlement Community (DRC) Township, an informal settlement where you'll gain insight into the challenges and resilience of the community members.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80"
    },
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="w-full flex flex-col items-center py-20 bg-kalahari-lightbrown/10 px-6">
      <div className="container mx-auto">
        <h2 className="text-kalahari-brown text-center text-4xl md:text-5xl font-medium tracking-wide uppercase z-10 max-md:text-3xl">
          Tour Types
        </h2>
        <p className="text-kalahari-charcoal text-center text-lg font-normal leading-7 mt-4 max-w-3xl mx-auto">
          At Kalahari Axarob Tours we offer shore excursions in and around Swakopmund, 
          "The little piece of Germany under the African skies"
        </p>

        <div className="w-full max-w-6xl mx-auto mt-16 max-md:mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col">
              <div className="bg-kalahari-accent/30 h-[400px] rounded-lg shadow-md overflow-hidden">
                <img 
                  src={slides[currentSlide].image} 
                  alt={slides[currentSlide].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center gap-3 mt-4 justify-center">
                <button 
                  className="opacity-60 hover:opacity-100 transition-opacity"
                  onClick={handlePrev}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="#7D5A3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {slides.map((_, index) => (
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
                <button 
                  className="opacity-60 hover:opacity-100 transition-opacity"
                  onClick={handleNext}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 6L15 12L9 18" stroke="#7D5A3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="bg-white p-8 rounded-lg shadow-sm h-full">
                <h3 className="text-xl font-semibold text-kalahari-brown tracking-wide">
                  {slides[currentSlide].title}
                </h3>
                <p className="text-base font-normal leading-7 mt-4 text-kalahari-charcoal">
                  {slides[currentSlide].description}
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-5 p-4 bg-white rounded-lg shadow-sm border border-kalahari-gravel/30">
                    <div className="bg-kalahari-gravel/30 flex w-12 h-12 shrink-0 rounded-lg items-center justify-center">
                      <span className="text-kalahari-brown font-bold">1</span>
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-xl font-semibold text-kalahari-brown tracking-wide">
                        What To Expect
                      </h3>
                      <p className="text-base font-normal leading-7 mt-2 text-kalahari-charcoal">
                        Our guide will collect you as you disembark on the Walvis Bay Harbor, 
                        pick you up and drive to the first location to spot flamingos at the Lagoon(Walvis Bay) 
                        and heads to Dune7 for sightseeing.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 p-4 bg-white rounded-lg shadow-sm border border-kalahari-gravel/30">
                    <div className="bg-kalahari-gravel/30 flex w-12 h-12 shrink-0 rounded-lg items-center justify-center">
                      <span className="text-kalahari-brown font-bold">2</span>
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-xl font-semibold text-kalahari-brown tracking-wide">
                        What's Included
                      </h3>
                      <p className="text-base font-normal leading-7 mt-2 text-kalahari-charcoal">
                        English speaking Local Guide, Transportation, Lunch, Non-Alcoholic beverages.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourTypes;
