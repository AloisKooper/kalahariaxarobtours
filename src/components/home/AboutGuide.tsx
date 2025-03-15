
import React from "react";
import { Link } from "react-router-dom";

const AboutGuide: React.FC = () => {
  return (
    <section className="bg-kalahari-sand/20 w-full px-6 py-20 max-md:max-w-full max-md:py-16">
      <div className="max-w-6xl mx-auto gap-8 flex flex-wrap">
        <div className="w-full md:w-5/12">
          <div className="flex w-full flex-col text-base text-kalahari-charcoal font-medium max-md:max-w-full max-md:mt-10">
            <p className="text-sm text-kalahari-brown">
              Trusted by many... add google stars and link to review page.
            </p>
            <h2 className="text-3xl md:text-5xl font-normal leading-tight uppercase text-kalahari-darkbrown mt-3 max-md:max-w-full max-md:text-2xl">
              About the tour guide
            </h2>
            <p className="leading-7 tracking-[-0.32px] text-kalahari-charcoal/80 mt-5 max-md:max-w-full">
              A well constructed summary of Mr.Rooi and stating he is a licensed
              Tour Guide and how long he has been in The Tour Field.
            </p>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-2 bg-white hover:bg-kalahari-sand/50 text-kalahari-brown border border-kalahari-brown/20 rounded-lg py-2.5 px-5 font-semibold transition-colors w-fit"
            >
              About Me
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-6/12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-xl mx-auto h-80 relative">
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
              <div className="bg-kalahari-brown/20 backdrop-blur-sm rounded-full p-4 hover:bg-kalahari-brown/30 transition-colors">
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
