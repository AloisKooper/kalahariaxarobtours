import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section className="bg-[rgba(241,241,241,1)] w-full flex flex-col items-center justify-center px-20 py-[116px] max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <div className="flex w-[835px] max-w-full flex-col items-stretch -mb-5 max-md:mb-2.5">
        <div className="ml-[15px] max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-[78%] max-md:w-full max-md:ml-0">
              <div className="flex flex-col font-medium max-md:max-w-full max-md:mt-10">
                <h3 className="text-[rgba(184,184,184,1)] text-[26px]">
                  Contact Us
                </h3>
                <h2 className="text-[rgba(51,51,51,1)] text-[50px] mt-[17px] max-md:text-[40px]">
                  Schedule A Call
                </h2>
                <p className="text-[rgba(80,80,80,1)] text-base font-normal self-stretch mt-[27px] max-md:max-w-full">
                  A brief summary of contact details and company locations if
                  available, A better call to action button with subtle
                  animations!
                </p>
              </div>
            </div>
            <div className="w-[22%] ml-5 max-md:w-full max-md:ml-0">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/2720850cc9f7a124f8518573ba35ebb1d132f7b7a64845c7dae27dd01ef20f2a?placeholderIfAbsent=true"
                alt="Contact icon"
                className="aspect-[0.56] object-contain w-[139px] shrink-0 max-w-full grow mt-[11px] max-md:mt-10"
              />
            </div>
          </div>
        </div>

        <button className="bg-[rgba(209,219,255,1)] flex items-center gap-[13px] text-base text-white font-medium mt-[26px] px-[37px] py-[15px] rounded-[26px] max-md:px-5">
          <span className="grow">Contact Now</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/1185bdb70bca07590cf4fa31925a360b7576561b859c13ffe22294323af3fcc0?placeholderIfAbsent=true"
            alt="Arrow right"
            className="aspect-[0.87] object-contain w-5 shrink-0"
          />
        </button>
      </div>
    </section>
  );
};

export default ContactSection;
