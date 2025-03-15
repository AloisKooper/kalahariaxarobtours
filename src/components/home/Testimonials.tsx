
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
    <section className="w-full flex flex-col items-center py-20 bg-white px-6">
      <h2 className="text-kalahari-brown text-3xl md:text-4xl font-medium leading-tight text-center">
        Trusted by Hundreds of <br />
        Happy Customer
      </h2>
      <p className="text-kalahari-charcoal text-center text-lg font-normal mt-8 max-w-2xl max-md:max-w-full max-md:mt-6">
        add a Google review authentic card with Trustpilot...
      </p>

      <div className="w-full max-w-6xl mt-16 max-md:max-w-full max-md:mt-10">
        <div className="gap-6 flex flex-wrap justify-center">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>

        <div className="flex w-full items-center justify-between mt-12 max-md:mt-8">
          <div className="flex items-center gap-3">
            <button className="opacity-60 hover:opacity-100 transition-opacity">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="#7D5A3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className={`${
                  currentSlide === index
                    ? "bg-kalahari-brown"
                    : "bg-kalahari-gravel/40 hover:bg-kalahari-brown/40 transition-colors"
                } flex w-3 h-3 rounded-full cursor-pointer`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
            <button className="opacity-60 hover:opacity-100 transition-opacity">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6L15 12L9 18" stroke="#7D5A3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-kalahari-gravel/20 hover:bg-kalahari-gravel/40 transition-colors rounded-full p-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="#7D5A3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="bg-kalahari-gravel/20 hover:bg-kalahari-gravel/40 transition-colors rounded-full p-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6L15 12L9 18" stroke="#7D5A3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <button className="bg-kalahari-brown hover:bg-kalahari-darkbrown text-white font-medium transition-colors rounded-full py-3 px-8 mx-auto mt-16 block max-md:mt-10">
          View More Videos
        </button>

        <div className="bg-kalahari-darkbrown/90 self-center flex w-full max-w-4xl flex-col items-center justify-center mt-16 rounded-2xl overflow-hidden shadow-lg py-32 max-md:mt-10 max-md:py-24 relative">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <button className="bg-white/10 backdrop-blur-sm rounded-full p-8 relative z-10 hover:bg-white/20 transition-colors">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5v14l11-7z" fill="white"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
