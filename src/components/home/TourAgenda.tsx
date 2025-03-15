
import React from "react";

const TourAgenda: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center py-16 bg-white px-6">
      <div className="container mx-auto">
        <h2 className="text-kalahari-brown text-center text-4xl md:text-5xl font-medium tracking-wide uppercase max-md:text-3xl max-md:mt-10">
          TOUR AGENDA
        </h2>
        <p className="text-kalahari-charcoal text-center text-lg font-normal leading-7 max-w-xl mt-6 mx-auto">
          Historical Tour Schedule, from the beginning to the end of the
          Historical Tour.
        </p>

        <div className="flex w-full max-w-4xl mx-auto items-center justify-center gap-8 flex-wrap mt-12 max-md:mt-8">
          <div className="flex items-center gap-4 flex-wrap grow shrink basis-auto justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/575390d25c3a3cc54949c3ee6d3025d1c20abb9065ea6ed10485619317ee65dc?placeholderIfAbsent=true"
              alt="Timeline start"
              className="aspect-[4.22] object-contain w-[200px] md:w-[300px] stroke-[1px] stroke-kalahari-darkbrown self-stretch my-auto"
            />
            <div className="bg-kalahari-brown rounded-full w-20 h-20 flex items-center justify-center text-white">
              <span className="text-2xl font-bold">1</span>
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/e2720b7c86606c9471370f43d57a786a9cbe2945ee5002cc45809bb1ceae5c03?placeholderIfAbsent=true"
              alt="Timeline end"
              className="aspect-[4.22] object-contain w-[200px] md:w-[300px] stroke-[1px] stroke-kalahari-darkbrown self-stretch my-auto"
            />
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/405899d9b5345bd91e9924a412be8e4c226e3543e2aee88232232c3e3226bba9?placeholderIfAbsent=true"
            alt="Timeline arrow"
            className="aspect-[0.96] object-contain w-10 shrink-0 my-auto"
          />
        </div>

        <div className="w-full max-w-6xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-kalahari-gravel/10 p-6 rounded-lg h-full flex flex-col">
            <h3 className="text-xl font-semibold text-kalahari-brown tracking-[-0.48px]">
              Pick Up (9:00-10:00)
            </h3>
            <p className="text-sm font-normal leading-6 tracking-[-0.28px] mt-4 text-kalahari-charcoal/90 flex-grow">
              Booker's will be picked up from Walvis Bay Harbor. Our guide will collect 
              you as you disembark on the Walvis Bay Harbor.
            </p>
            <div className="mt-4 pt-4 border-t border-kalahari-gravel/30">
              <span className="text-sm font-semibold text-kalahari-brown">Starting Point:</span>
              <span className="text-sm ml-2 text-kalahari-charcoal">Walvis Bay Harbor</span>
            </div>
          </div>
          
          <div className="bg-kalahari-gravel/10 p-6 rounded-lg h-full flex flex-col">
            <h3 className="text-xl font-semibold text-kalahari-brown tracking-[-0.48px]">
              Historical/Township Tour
            </h3>
            <p className="text-sm font-normal leading-6 tracking-[-0.28px] mt-4 text-kalahari-charcoal/90 flex-grow">
              Port - Lagoon - Dune 7 - Swakopmund (lunch) - Concentration camp mass graves- 
              Old Military barracks - old Hospital - Jetty - Woerman hause - German War Memorial- 
              Free time - Old Bahn Hoff - Back to the port.
            </p>
            <div className="mt-4 pt-4 border-t border-kalahari-gravel/30">
              <span className="text-sm font-semibold text-kalahari-brown">Duration:</span>
              <span className="text-sm ml-2 text-kalahari-charcoal">About 8 hours</span>
            </div>
          </div>
          
          <div className="bg-kalahari-gravel/10 p-6 rounded-lg h-full flex flex-col">
            <h3 className="text-xl font-semibold text-kalahari-brown tracking-[-0.48px]">
              Drop-off (17:45-18:00)
            </h3>
            <p className="text-sm font-normal leading-6 tracking-[-0.28px] mt-4 text-kalahari-charcoal/90 flex-grow">
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
