import React from "react";

const TourAgenda: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center py-16">
      <h2 className="text-[#486284] text-center text-[53px] font-medium tracking-[2.12px] uppercase max-md:text-[40px] max-md:mt-10">
        TOUR AGENDA
      </h2>
      <p className="text-[#1A202C] text-center text-lg font-normal leading-[27px] w-[530px] mt-[27px] max-md:max-w-full">
        Historical Tour Schedule, from the beginning to the end of the
        Historical Tour.
      </p>

      <div className="flex w-[951px] max-w-full items-stretch gap-[40px_50px] flex-wrap ml-[50px] mt-[54px] max-md:mt-10">
        <div className="flex items-center gap-[18px] flex-wrap grow shrink basis-auto">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/575390d25c3a3cc54949c3ee6d3025d1c20abb9065ea6ed10485619317ee65dc?placeholderIfAbsent=true"
            alt="Timeline start"
            className="aspect-[4.22] object-contain w-[355px] stroke-[1px] stroke-[#1A202C] self-stretch my-auto"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/75b9040e95206e380eaacd6dddb5b9c3c0749c93ec97548a24c482d4462afe69?placeholderIfAbsent=true"
            alt="Timeline icon"
            className="aspect-[1] object-contain w-[106px] self-stretch shrink-0 max-w-full rounded-[0px_0px_0px_0px]"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/e2720b7c86606c9471370f43d57a786a9cbe2945ee5002cc45809bb1ceae5c03?placeholderIfAbsent=true"
            alt="Timeline end"
            className="aspect-[4.22] object-contain w-[355px] stroke-[1px] stroke-[#1A202C] self-stretch my-auto"
          />
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/405899d9b5345bd91e9924a412be8e4c226e3543e2aee88232232c3e3226bba9?placeholderIfAbsent=true"
          alt="Timeline arrow"
          className="aspect-[0.96] object-contain w-[47px] shrink-0 my-auto"
        />
      </div>

      <div className="w-full max-w-[1263px] mt-[30px] max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[33%] max-md:w-full max-md:ml-0">
            <div className="text-[#1A202C] max-md:mt-10">
              <h3 className="text-2xl font-semibold tracking-[-0.48px]">
                Pick Up (Swakopmund)
              </h3>
              <p className="text-center text-sm font-normal leading-[25px] tracking-[-0.28px] mt-[19px] max-md:mr-[7px]">
                Booker's will be picked up from any accommodations in Swakopmund
                only!
              </p>
            </div>
          </div>
          <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="grow text-[#1A202C] text-center max-md:mt-10">
              <h3 className="text-2xl font-semibold tracking-[-0.48px]">
                Historical/Township Tour
              </h3>
              <p className="text-sm font-normal leading-[25px] tracking-[-0.28px] mt-[18px] max-md:mr-[5px]">
                Visit to Genocide Memorial & Military Statue, Walking Tour
                through DRC Township. Visit to Mondesa Township – Historical
                Overview. Drinks & Snacks, Q&A with Local Hosts
              </p>
            </div>
          </div>
          <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch text-[#1A202C] text-center max-md:mt-10">
              <h3 className="text-2xl font-semibold tracking-[-0.48px] self-center">
                Drop-off back
              </h3>
              <p className="text-sm font-normal leading-[25px] tracking-[-0.28px] mt-[19px]">
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
