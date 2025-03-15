
import React from "react";

interface GalleryCardProps {
  title: string;
  price: string;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ title, price }) => {
  return (
    <div className="bg-kalahari-gravel/20 flex w-full max-w-[304px] flex-col overflow-hidden items-stretch p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow max-md:px-5">
      <div className="text-xl text-kalahari-darkbrown font-bold tracking-[-0.6px]">
        {title}
      </div>
      <div className="flex w-full items-stretch gap-3 mt-[272px] max-md:mt-10">
        <div className="text-xl text-kalahari-darkbrown font-bold tracking-[-0.6px] my-auto">
          {price}
        </div>
        <button className="self-stretch rounded bg-white hover:bg-kalahari-sand transition-colors text-kalahari-brown font-semibold py-2 px-4 text-sm">
          Full Screen
        </button>
      </div>
    </div>
  );
};

export default GalleryCard;
