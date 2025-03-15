
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-kalahari-gravel/30 w-full overflow-hidden px-8 py-12 max-md:max-w-full max-md:px-5">
      <div className="flex w-full max-w-[1244px] mx-auto items-stretch gap-[40px_100px] flex-wrap max-md:max-w-full">
        <div className="text-base text-kalahari-darkbrown font-medium tracking-[-0.32px] mt-[7px]">
          <img
            src="/lovable-uploads/773b47dd-fd0f-4abc-9958-2fde4f920189.png"
            alt="Kalahari Axarob Tours Logo"
            className="h-16 object-contain mb-4"
          />
          <div className="mt-[7px]">Our vision ......</div>
        </div>
        <div className="grow shrink basis-auto max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-[39%] max-md:w-full max-md:ml-0">
              <div className="flex flex-col items-stretch text-kalahari-darkbrown max-md:mt-10">
                <h3 className="text-xl font-semibold tracking-[-0.4px]">
                  Quick Links
                </h3>
                <div className="text-base font-medium leading-6 tracking-[-0.32px] mt-[29px] space-y-4">
                  <Link to="/testimonials" className="block hover:text-kalahari-brown transition-colors">Testimonials</Link>
                  <Link to="/tours" className="block hover:text-kalahari-brown transition-colors">Tours</Link>
                  <Link to="/about" className="block hover:text-kalahari-brown transition-colors">About Us</Link>
                  <Link to="/tour-guide" className="block hover:text-kalahari-brown transition-colors">Tour Guide</Link>
                </div>
              </div>
            </div>
            <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col items-stretch text-kalahari-darkbrown max-md:mt-10">
                <h3 className="text-xl font-semibold tracking-[-0.4px]">
                  Pages
                </h3>
                <div className="text-base font-medium leading-6 tracking-[-0.32px] mt-[27px] space-y-4">
                  <Link to="/" className="block hover:text-kalahari-brown transition-colors">Home</Link>
                  <Link to="/tours" className="block hover:text-kalahari-brown transition-colors">Tours</Link>
                  <Link to="/about" className="block hover:text-kalahari-brown transition-colors">About Us</Link>
                  <Link to="/gallery" className="block hover:text-kalahari-brown transition-colors">Gallery</Link>
                  <Link to="/testimonials" className="block hover:text-kalahari-brown transition-colors">Testimonials</Link>
                </div>
              </div>
            </div>
            <div className="w-[28%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col items-stretch text-kalahari-darkbrown whitespace-nowrap max-md:mt-10">
                <h3 className="text-xl font-semibold tracking-[-0.4px]">
                  Socials
                </h3>
                <div className="text-base font-medium leading-6 tracking-[-0.32px] mt-[27px] space-y-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-kalahari-brown transition-colors"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://whatsapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-kalahari-brown transition-colors"
                  >
                    Whatsapp
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-kalahari-brown transition-colors"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border shrink-0 h-px mt-8 border-kalahari-darkbrown/20 border-solid max-md:max-w-full" />
      <div className="flex w-full items-stretch gap-5 text-base text-kalahari-darkbrown font-semibold tracking-[-0.32px] flex-wrap justify-between mt-6 max-md:max-w-full">
        <div>©2025 Kalahari Axarob Tours. All rights reserved</div>
        <div className="flex items-stretch gap-[40px_58px] text-right">
          <Link to="/privacy" className="basis-auto hover:text-kalahari-brown transition-colors">
            Privacy & Policy
          </Link>
          <Link to="/terms" className="basis-auto hover:text-kalahari-brown transition-colors">
            Terms & Condition
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
