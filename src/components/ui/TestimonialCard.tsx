import React from "react";

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: string;
  testimonial: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  location,
  rating,
  testimonial,
}) => {
  return (
    <div className="bg-[rgba(211,220,231,1)] flex w-full flex-col text-[rgba(72,98,132,1)] mx-auto pt-[30px] pb-[72px] px-[30px] rounded-[10px] max-md:mt-10 max-md:px-5">
      <div className="flex w-full items-stretch gap-5 justify-between ml-[11px] max-md:ml-2.5">
        <div className="flex gap-[21px] text-center">
          <div className="bg-[rgba(221,224,228,1)] flex w-10 shrink-0 h-10 rounded-[50%]" />
          <div className="flex flex-col items-stretch mt-[9px]">
            <div className="text-lg font-medium leading-loose">{name}</div>
            <div className="text-sm font-normal leading-loose mt-[7px]">
              {location}
            </div>
          </div>
        </div>
        <div className="text-base font-normal leading-loose my-auto">
          {rating}
        </div>
      </div>
      <div className="text-base font-normal leading-loose mt-[71px] max-md:mt-10">
        {testimonial}
      </div>
    </div>
  );
};

export default TestimonialCard;
