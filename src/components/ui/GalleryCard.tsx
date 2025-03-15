import React from "react";

interface GalleryCardProps {
  title: string;
  price: string;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ title, price }) => {
  return (
    <div className="bg-[rgba(222,229,237,1)] flex w-full max-w-[304px] flex-col overflow-hidden items-stretch p-6 rounded-[10px] max-md:px-5">
      <div className="text-xl text-[#1A202C] font-bold tracking-[-0.6px]">
        {title}
      </div>
      <div className="flex w-full items-stretch gap-3 mt-[272px] max-md:mt-10">
        <div className="text-xl text-[#1A202C] font-bold tracking-[-0.6px] my-auto">
          {price}
        </div>
        <button className="self-stretch w-[85px] rounded bg-white min-h-11 gap-2 text-base text-[#1A202C] font-semibold text-center tracking-[-0.32px] pl-4 pr-[15px]">
          Full Screen
        </button>
      </div>
    </div>
  );
};

export default GalleryCard;
