import React from "react";
import { Link } from "react-router-dom";

const AboutGuide: React.FC = () => {
  return (
    <section className="bg-[rgba(243,243,243,1)] w-full px-[69px] py-[93px] max-md:max-w-full max-md:px-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[45%] max-md:w-full max-md:ml-0">
          <div className="flex w-full flex-col items-stretch text-base text-[#1A202C] font-medium max-md:max-w-full max-md:mt-10">
            <p className="text-sm leading-none">
              Trusted by many... add google stars and link to review page.
            </p>
            <h2 className="text-[64px] font-normal leading-[78px] uppercase mr-12 mt-[11px] max-md:max-w-full max-md:text-[40px] max-md:leading-[54px] max-md:mr-2.5">
              About the tour guide
            </h2>
            <p className="leading-[26px] tracking-[-0.32px] opacity-45 mt-[15px] max-md:max-w-full">
              A well constructed summary of Mr.Rooi and stating he is a licensed
              Tour Guide and how long he has been in The Tour Field.
            </p>
            <Link
              to="/about"
              className="w-[107px] rounded bg-white min-h-11 gap-2 font-semibold text-center tracking-[-0.32px] mt-[68px] px-5 max-md:mt-10 flex items-center justify-center"
            >
              About Me →
            </Link>
          </div>
        </div>
        <div className="w-[55%] ml-5 max-md:w-full max-md:ml-0">
          <div className="bg-white flex w-[640px] shrink-0 max-w-full h-[360px] mx-auto rounded-[10px] max-md:mt-10 overflow-hidden relative">
            <video
              className="w-full h-full object-cover"
              poster="https://images.unsplash.com/photo-1504432842672-1a79f78e4084?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
              controls
            >
              <source
                src="https://example.com/tour-guide-video.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-black bg-opacity-20 rounded-full p-4 transform transition-transform hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGuide;
