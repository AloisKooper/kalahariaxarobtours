
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
    <div className="bg-kalahari-gravel/10 flex w-full flex-col text-kalahari-charcoal rounded-lg shadow-sm p-6 h-full hover:shadow-md transition-shadow">
      <div className="flex w-full items-center gap-4 justify-between">
        <div className="flex gap-4 items-center">
          <div className="bg-kalahari-gravel/40 flex w-10 h-10 shrink-0 rounded-full items-center justify-center">
            <span className="text-kalahari-darkbrown text-sm font-semibold">{name.charAt(0)}</span>
          </div>
          <div className="flex flex-col">
            <div className="text-lg font-medium text-kalahari-darkbrown">{name}</div>
            <div className="text-sm text-kalahari-charcoal/80">{location}</div>
          </div>
        </div>
        <div className="flex items-center text-kalahari-brown font-medium">
          <svg className="w-4 h-4 fill-current mr-1" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
          {rating}
        </div>
      </div>
      <div className="text-base leading-7 mt-8 text-kalahari-charcoal/90">
        {testimonial}
      </div>
    </div>
  );
};

export default TestimonialCard;
