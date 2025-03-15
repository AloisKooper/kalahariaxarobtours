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
    <section className="w-full flex flex-col items-center py-16">
      <h2 className="text-[#486284] text-center text-[53px] font-medium tracking-[2.12px] uppercase z-10 max-md:text-[40px]">
        Tour Types
      </h2>
      <p className="text-[#1A202C] text-center text-lg font-normal leading-[27px] mt-[9px] max-md:max-w-full">
        At Kalahari Axarob Tours we offer 1 main tour which is split into 2
        sub-tours which Booker's can choose from
      </p>

      <div className="w-full max-w-[1300px] mt-[55px] max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <div className="flex w-full flex-col items-stretch max-md:max-w-full max-md:mt-10">
              <div className="bg-[rgba(170,181,195,1)] flex shrink-0 h-[528px] max-md:max-w-full" />
              <div className="flex items-stretch gap-[15px] mt-3">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/6dfc57450f79c4f4281488617403a6acc6fbc99a3e318bf49fa1892f52b7df54?placeholderIfAbsent=true"
                  alt="Slider controls"
                  className="aspect-[3] object-contain w-[45px] fill-[#1A202C] shrink-0"
                />
                {[0, 1, 2].map((index) => (
                  <div
                    key={index}
                    className={`${
                      currentSlide === index
                        ? "bg-[#1A202C]"
                        : "bg-[rgba(221,224,228,1)]"
                    } flex w-[15px] shrink-0 h-[15px] rounded-[50%] cursor-pointer`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex w-full flex-col self-stretch items-stretch text-[#1A202C] my-auto max-md:max-w-full max-md:mt-10">
              <div className="flex flex-col items-stretch pl-[76px] max-md:max-w-full max-md:pl-5">
                <h3 className="text-[22px] font-semibold tracking-[-0.44px] max-md:max-w-full">
                  {slides[0].title}
                </h3>
                <p className="text-base font-normal leading-7 tracking-[-0.32px] mr-9 mt-[17px] max-md:mr-2.5">
                  {slides[0].description}
                </p>
              </div>

              <div className="flex items-stretch gap-[25px] flex-wrap mt-[46px] max-md:mt-10">
                <div className="bg-[rgba(196,196,196,1)] flex w-[52px] shrink-0 h-[52px] rounded-[10px]" />
                <div className="flex flex-col items-stretch grow shrink-0 basis-0 w-fit">
                  <h3 className="text-[22px] font-semibold tracking-[-0.44px]">
                    {slides[1].title}
                  </h3>
                  <p className="text-base font-normal leading-7 tracking-[-0.32px] mt-[18px]">
                    {slides[1].description}
                  </p>
                </div>
              </div>

              <h3 className="text-[22px] font-semibold tracking-[-0.44px] self-center mt-[46px] max-md:mt-10">
                {slides[2].title}
              </h3>
              <p className="text-base font-normal leading-7 tracking-[-0.32px] self-center ml-5 mt-[18px]">
                {slides[2].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourTypes;
