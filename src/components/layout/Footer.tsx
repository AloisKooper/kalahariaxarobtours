import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[rgba(211,220,231,1)] w-full overflow-hidden px-[60px] py-[75px] max-md:max-w-full max-md:px-5">
      <div className="flex w-full max-w-[1244px] items-stretch gap-[40px_100px] flex-wrap max-md:max-w-full">
        <div className="text-base text-[#1A202C] font-medium tracking-[-0.32px] mt-[7px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/7dbe8a3f038395c98b201f9acf1b94afdede37228cc9af603d9a93e9e328241f?placeholderIfAbsent=true"
            alt="Kalahari Axarob Tours Logo"
            className="aspect-[2.52] object-contain w-[146px] max-w-full"
          />
          <div className="mt-[7px]">Our vision ......</div>
        </div>
        <div className="grow shrink basis-auto max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-[39%] max-md:w-full max-md:ml-0">
              <div className="flex flex-col items-stretch text-[#1A202C] max-md:mt-10">
                <h3 className="text-xl font-semibold tracking-[-0.4px]">
                  Quick Links
                </h3>
                <div className="text-base font-medium leading-6 tracking-[-0.32px] mt-[29px]">
                  <Link to="/testimonials">Testimonials</Link>
                  <br />
                  <br />
                  <Link to="/tours">Tours</Link>
                  <br />
                  <br />
                  <Link to="/about">About Us</Link>
                  <br />
                  <br />
                  <Link to="/tour-guide">Tour Guide</Link>
                </div>
              </div>
            </div>
            <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col items-stretch text-[#1A202C] max-md:mt-10">
                <h3 className="text-xl font-semibold tracking-[-0.4px]">
                  Pages
                </h3>
                <div className="text-base font-medium leading-6 tracking-[-0.32px] mt-[27px]">
                  <Link to="/">Home</Link>
                  <br />
                  <br />
                  <Link to="/tours">Tours</Link>
                  <br />
                  <br />
                  <Link to="/about">About Us</Link>
                  <br />
                  <br />
                  <Link to="/gallery">Gallery</Link>
                  <br />
                  <br />
                  <Link to="/testimonials">Testimonials</Link>
                </div>
              </div>
            </div>
            <div className="w-[28%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col items-stretch text-[#1A202C] whitespace-nowrap max-md:mt-10">
                <h3 className="text-xl font-semibold tracking-[-0.4px]">
                  Socials
                </h3>
                <div className="text-base font-medium leading-6 tracking-[-0.32px] mt-[27px]">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                  <br />
                  <br />
                  <a
                    href="https://whatsapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Whatsapp
                  </a>
                  <br />
                  <br />
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border shrink-0 h-px mt-[21px] border-[rgba(72,98,132,0.16)] border-solid max-md:max-w-full" />
      <div className="flex w-full items-stretch gap-5 text-base text-[#1A202C] font-semibold tracking-[-0.32px] flex-wrap justify-between mt-[35px] max-md:max-w-full">
        <div>©2025 Kalahari Axarob Tours. All rights reserved</div>
        <div className="flex items-stretch gap-[40px_58px] text-right">
          <Link to="/privacy" className="basis-auto">
            Privacy & Policy
          </Link>
          <Link to="/terms" className="basis-auto">
            Terms & Condition
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
