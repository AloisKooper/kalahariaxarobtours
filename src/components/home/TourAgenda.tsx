
import React from "react";

const TourAgenda: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center py-16 bg-white px-6">
      <h2 className="text-kalahari-brown text-center text-4xl md:text-5xl font-medium tracking-wide uppercase max-md:text-3xl max-md:mt-10">
        TOUR AGENDA
      </h2>
      <p className="text-kalahari-charcoal text-center text-lg font-normal leading-7 max-w-xl mt-6 max-md:max-w-full">
        Historical Tour Schedule, from the beginning to the end of the
        Historical Tour.
      </p>

      <div className="flex w-full max-w-4xl items-center justify-center gap-8 flex-wrap mt-12 max-md:mt-8">
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

      <div className="w-full max-w-6xl mt-8 max-md:max-w-full">
        <div className="gap-8 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[33%] max-md:w-full max-md:ml-0">
            <div className="text-kalahari-charcoal bg-kalahari-gravel/10 p-6 rounded-lg h-full max-md:mt-6">
              <h3 className="text-xl font-semibold text-kalahari-brown tracking-[-0.48px]">
                Pick Up (Swakopmund)
              </h3>
              <p className="text-sm font-normal leading-6 tracking-[-0.28px] mt-4 text-kalahari-charcoal/90">
                Booker's will be picked up from any accommodations in Swakopmund
                only!
              </p>
            </div>
          </div>
          <div className="w-[33%] max-md:w-full max-md:ml-0">
            <div className="grow text-kalahari-charcoal bg-kalahari-gravel/10 p-6 rounded-lg h-full max-md:mt-6">
              <h3 className="text-xl font-semibold text-kalahari-brown tracking-[-0.48px]">
                Historical/Township Tour
              </h3>
              <p className="text-sm font-normal leading-6 tracking-[-0.28px] mt-4 text-kalahari-charcoal/90">
                Visit to Genocide Memorial & Military Statue, Walking Tour
                through DRC Township. Visit to Mondesa Township – Historical
                Overview. Drinks & Snacks, Q&A with Local Hosts
              </p>
            </div>
          </div>
          <div className="w-[33%] max-md:w-full max-md:ml-0">
            <div className="text-kalahari-charcoal bg-kalahari-gravel/10 p-6 rounded-lg h-full max-md:mt-6">
              <h3 className="text-xl font-semibold text-kalahari-brown tracking-[-0.48px]">
                Drop-off back
              </h3>
              <p className="text-sm font-normal leading-6 tracking-[-0.28px] mt-4 text-kalahari-charcoal/90">
                Our Tour Guide will safely Transport and Drop-you-off back at
                accommodations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourAgenda;
