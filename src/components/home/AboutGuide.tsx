import React from "react";
import { Link } from "react-router-dom";

const AboutGuide: React.FC = () => {
  return (
    <section className="bg-kalahari-sand/20 w-full py-20 px-6 max-md:py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-kalahari-brown">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <span className="text-sm ml-1">Trusted by many</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-normal leading-tight uppercase text-kalahari-darkbrown mt-3">
              About the tour guide
            </h2>
            
            <p className="leading-7 tracking-[-0.32px] text-kalahari-charcoal/80 mt-5">
              Mr. Rooi is a licensed Tour Guide with over 15 years of experience 
              in the Tour Field. His extensive knowledge of Namibian history, 
              particularly the Ovaherero/Namaqua genocide, makes him a valuable 
              guide for those wanting to understand this important historical period.
            </p>
            
            <div className="mt-6 bg-white/70 p-4 rounded-lg border border-kalahari-brown/10">
              <h3 className="text-kalahari-brown font-semibold text-lg mb-2">Cancellation Policy</h3>
              <ul className="text-kalahari-charcoal/90 space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-kalahari-brown mr-2">•</span>
                  <span>Full refund available up to 28 days before the experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-kalahari-brown mr-2">•</span>
                  <span>No refunds for cancellations less than 28 days before start time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-kalahari-brown mr-2">•</span>
                  <span>This experience requires a minimum of 20 travelers</span>
                </li>
              </ul>
            </div>
            
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 bg-white hover:bg-kalahari-sand/50 text-kalahari-brown border border-kalahari-brown/20 rounded-lg py-2.5 px-5 font-semibold transition-colors w-fit"
            >
              About Me
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden h-[400px] relative">
            <div className="w-full h-full bg-kalahari-lightbrown/20 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="bg-kalahari-brown/20 backdrop-blur-sm rounded-full p-4 mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-kalahari-brown"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-kalahari-brown mb-2">Tour Guide Introduction</h3>
                <p className="text-kalahari-charcoal/80 mb-4">
                  Watch a video introduction from Mr. Rooi about his tours and experience.
                </p>
                <button className="bg-kalahari-brown hover:bg-kalahari-darkbrown text-white font-medium py-2 px-4 rounded transition-colors">
                  Play Video
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGuide;
