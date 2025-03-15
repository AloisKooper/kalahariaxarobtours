import React from "react";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-[rgba(206,215,228,1)] self-stretch flex w-full flex-col items-stretch pb-[169px] max-md:max-w-full max-md:pb-[100px]">
      <div className="self-center mb-[-34px] w-full max-w-[1343px] ml-4 mt-9 max-md:max-w-full max-md:mb-2.5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <div className="flex w-full flex-col items-stretch text-base text-[#1A202C] font-medium mt-28 max-md:max-w-full max-md:mt-10">
              <h2 className="text-sm leading-none">
                The Ultimate Historical Tour Experience
              </h2>
              <h1 className="text-[64px] font-normal leading-[78px] uppercase mt-4 max-md:max-w-full max-md:text-[40px] max-md:leading-[54px]">
                kalahari axarob tours
              </h1>
              <p className="leading-[26px] tracking-[-0.32px] opacity-45 mr-[41px] max-md:max-w-full max-md:mr-2.5">
                Discover the untold stories of Swakopmund's history. Walk
                through the remnants of the Ovaherero/Namaqua genocide, visit
                historical sites, and experience Namibia's deep cultural
                heritage with Kalahari Axarob Tours.
              </p>
              <div className="flex w-[273px] max-w-full items-stretch gap-5 font-semibold text-center tracking-[-0.32px] justify-between mt-[55px] max-md:mt-10">
                <Link
                  to="/gallery"
                  className="self-stretch w-[107px] rounded bg-white min-h-11 gap-2 whitespace-nowrap px-5 flex items-center justify-center"
                >
                  Gallery
                </Link>
                <Link
                  to="/book"
                  className="my-auto flex items-center justify-center"
                >
                  Book Tour
                </Link>
              </div>
            </div>
          </div>
          <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="bg-[rgba(170,181,195,1)] flex grow flex-col items-center w-full pt-[87px] pb-[168px] px-20 rounded-[60px] max-md:max-w-full max-md:mt-10 max-md:pb-[100px] max-md:px-5">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/9c0641a956d62af8f9e0b9afa72796330017598c0c309345e86a55a251f7fecf?placeholderIfAbsent=true"
                alt="Tour Guide"
                className="aspect-[1] object-contain w-[268px] max-w-full rounded-[60px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
