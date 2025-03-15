
import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section className="bg-kalahari-gravel/5 w-full flex flex-col items-center justify-center px-6 py-20 max-md:max-w-full max-md:py-16">
      <div className="w-full max-w-4xl">
        <div className="flex flex-wrap items-center gap-8">
          <div className="flex-1 min-w-[280px]">
            <div className="flex flex-col font-medium">
              <h3 className="text-kalahari-gravel text-xl">
                Contact Us
              </h3>
              <h2 className="text-kalahari-darkbrown text-3xl md:text-4xl mt-3">
                Schedule A Call
              </h2>
              <p className="text-kalahari-charcoal/80 text-base font-normal mt-5">
                A brief summary of contact details and company locations if
                available, A better call to action button with subtle
                animations!
              </p>
            </div>
          </div>
          <div className="w-32 flex justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/2720850cc9f7a124f8518573ba35ebb1d132f7b7a64845c7dae27dd01ef20f2a?placeholderIfAbsent=true"
              alt="Contact icon"
              className="w-24 object-contain"
            />
          </div>
        </div>

        <button className="mt-8 group bg-kalahari-brown hover:bg-kalahari-darkbrown transition-colors inline-flex items-center gap-2 text-white font-medium px-6 py-3 rounded-full">
          <span>Contact Now</span>
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="transform group-hover:translate-x-1 transition-transform"
          >
            <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default ContactSection;
