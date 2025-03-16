import React from "react";

const TourAgenda: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center py-16 bg-white px-6">
      <div className="container mx-auto">
        <h2 className="text-kalahari-brown text-center text-4xl md:text-5xl font-normal tracking-wide uppercase max-md:text-3xl max-md:mt-10">
          TOUR AGENDA
        </h2>
        <p className="text-kalahari-charcoal text-center text-lg font-normal leading-7 max-w-xl mt-6 mx-auto">
          Historical Tour Schedule, from the beginning to the end of the
          Historical Tour.
        </p>

        {/* Timeline with icons instead of numbers */}
        <div className="w-full max-w-4xl mx-auto mt-24 relative">
          {/* Timeline line - fixed to not extend beyond circles */}
          <div className="hidden md:block absolute top-[35px] left-[72px] right-[72px] h-[2px] bg-kalahari-brown/30"></div>
          
          {/* Timeline points */}
          <div className="flex justify-between relative">
            {/* Point 1 - Pickup with location pin icon */}
            <div className="flex flex-col items-center">
              <div className="bg-kalahari-brown rounded-full w-16 h-16 flex items-center justify-center text-white z-10">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <span className="text-sm mt-4 text-kalahari-brown font-medium uppercase">Pickup</span>
            </div>
            
            {/* Point 2 - Tour with landmark/building icon */}
            <div className="flex flex-col items-center">
              <div className="bg-kalahari-brown rounded-full w-16 h-16 flex items-center justify-center text-white z-10">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M14 6l-4.22 5.63 1.25 1.67L14 9.33 19 16h-8.46l-4.01-5.37L1 18h22L14 6zM5 16l1.52-2.03L8.04 16H5z"/>
                </svg>
              </div>
              <span className="text-sm mt-4 text-kalahari-brown font-medium uppercase">Tour</span>
            </div>
            
            {/* Point 3 - Drop-off with car icon */}
            <div className="flex flex-col items-center">
              <div className="bg-kalahari-brown rounded-full w-16 h-16 flex items-center justify-center text-white z-10">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                </svg>
              </div>
              <span className="text-sm mt-4 text-kalahari-brown font-medium uppercase">Drop-off</span>
            </div>
          </div>
        </div>

        {/* Cards with fixed layout */}
        <div className="w-full max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pickup Card */}
          <div className="bg-kalahari-gravel/10 p-6 rounded-lg h-full flex flex-col">
            <div className="flex mb-4">
              <div className="bg-kalahari-brown rounded-full w-12 h-12 flex items-center justify-center text-white mr-4 flex-shrink-0">
                <span className="text-lg">1</span>
              </div>
              <div>
                <h3 className="text-xl text-kalahari-brown">
                  Pick Up
                </h3>
                <p className="text-kalahari-brown/80 text-base">9:00-10:00</p>
              </div>
            </div>
            
            <p className="text-sm leading-6 text-kalahari-charcoal/90 flex-grow">
              Booker's will be picked up from Walvis Bay Harbor. Our guide will collect 
              you as you disembark on the Walvis Bay Harbor.
            </p>
            
            <div className="mt-4 pt-4 border-t border-kalahari-gravel/30">
              <span className="text-sm font-semibold text-kalahari-brown">Starting Point:</span>
              <span className="text-sm ml-2 text-kalahari-charcoal">Walvis Bay Harbor</span>
            </div>
          </div>
          
          {/* Tour Card */}
          <div className="bg-kalahari-gravel/10 p-6 rounded-lg h-full flex flex-col">
            <div className="flex mb-4">
              <div className="bg-kalahari-brown rounded-full w-12 h-12 flex items-center justify-center text-white mr-4 flex-shrink-0">
                <span className="text-lg">2</span>
              </div>
              <div>
                <h3 className="text-xl text-kalahari-brown">
                  Historical/Township Tour
                </h3>
                <p className="text-kalahari-brown/80 text-base">Full Day</p>
              </div>
            </div>
            
            <p className="text-sm leading-6 text-kalahari-charcoal/90 flex-grow">
              Port - Lagoon - Dune 7 - Swakopmund (lunch) - Concentration camp mass graves- 
              Old Military barracks - old Hospital - Jetty - Woerman hause - German War Memorial- 
              Free time - Old Bahn Hoff - Back to the port.
            </p>
            
            <div className="mt-4 pt-4 border-t border-kalahari-gravel/30">
              <span className="text-sm font-semibold text-kalahari-brown">Duration:</span>
              <span className="text-sm ml-2 text-kalahari-charcoal">About 8 hours</span>
            </div>
          </div>
          
          {/* Drop-off Card */}
          <div className="bg-kalahari-gravel/10 p-6 rounded-lg h-full flex flex-col">
            <div className="flex mb-4">
              <div className="bg-kalahari-brown rounded-full w-12 h-12 flex items-center justify-center text-white mr-4 flex-shrink-0">
                <span className="text-lg">3</span>
              </div>
              <div>
                <h3 className="text-xl text-kalahari-brown">
                  Drop-off
                </h3>
                <p className="text-kalahari-brown/80 text-base">17:45-18:00</p>
              </div>
            </div>
            
            <p className="text-sm leading-6 text-kalahari-charcoal/90 flex-grow">
              Our Tour Guide will safely Transport and Drop-you-off back at Walvis Bay Harbor. 
              This activity ends back at the meeting point.
            </p>
            
            <div className="mt-4 pt-4 border-t border-kalahari-gravel/30">
              <span className="text-sm font-semibold text-kalahari-brown">End Point:</span>
              <span className="text-sm ml-2 text-kalahari-charcoal">Walvis Bay Harbor</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourAgenda;
