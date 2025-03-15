import React, { useState } from "react";
import TestimonialCard from "../ui/TestimonialCard";

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Alois Kooper",
      location: "Warsaw, Poland",
      rating: "4.5",
      testimonial: '"Wow... I am very happy with this tour..... ...',
    },
    {
      name: "Alois Kooper",
      location: "Warsaw, Poland",
      rating: "4.5",
      testimonial: '"Wow... I am very happy with this tour..... ...',
    },
    {
      name: "Alois Kooper",
      location: "Warsaw, Poland",
      rating: "4.5",
      testimonial: '"Wow... I am very happy with this tour..... ...',
    },
  ];

  return (
    <section className="w-full flex flex-col items-center py-16">
      <h2 className="text-[rgba(72,98,132,1)] text-[35px] font-medium leading-[50px] text-center">
        Trusted by Hundreds of <br />
        Happy Customer
      </h2>
      <p className="text-[#1A202C] text-center text-lg font-normal mt-[47px] max-md:max-w-full max-md:mt-10">
        add a Google review authentic card with Trustpilot...
      </p>

      <div className="self-stretch flex w-full flex-col items-stretch mt-[73px] px-[70px] max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-[33%] max-md:w-full max-md:ml-0">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-full items-stretch gap-5 flex-wrap justify-between mt-[75px] max-md:max-w-full max-md:mt-10">
          <div className="flex items-stretch gap-[15px] my-auto">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/1d2861ec74d309847d5d24123c189da1a8ed023bb934fa864168509648263337?placeholderIfAbsent=true"
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
          <div className="flex items-stretch gap-[40px_50px]">
            <button>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/6ac06dbb249f1dd2dc4073c431591d10e8b2010567423b494bd5fbed6346e373?placeholderIfAbsent=true"
                alt="Previous"
                className="aspect-[1] object-contain w-[30px] shrink-0"
              />
            </button>
            <button>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/fbd8c0f44d237562e58648942aba16347151bf8078f66008381a1b0d6d584edb?placeholderIfAbsent=true"
                alt="Next"
                className="aspect-[1] object-contain w-[30px] shrink-0"
              />
            </button>
          </div>
        </div>

        <button className="bg-[rgba(51,51,51,1)] text-base text-white font-medium mt-[105px] px-[50px] py-5 rounded-[26px] max-md:mt-10 max-md:px-5">
          View More Videos
        </button>

        <div className="bg-[rgba(51,51,51,1)] self-center flex w-full max-w-[1014px] flex-col items-center justify-center mt-[105px] px-20 py-[244px] max-md:max-w-full max-md:mt-10 max-md:px-5 max-md:py-[100px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/d65dcfbabd9245a5ac68b0712fd94192/86e5487a63d21c163f36f9834bb05bf7b91e1e2828b4de1eee1bca34118f976a?placeholderIfAbsent=true"
            alt="Video play button"
            className="aspect-[1] object-contain w-[103px] mb-[-49px] max-w-full max-md:mb-2.5"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
