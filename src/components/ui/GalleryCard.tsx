
import React from "react";

interface GalleryCardProps {
  title: string;
  price: string;
  imageSrc?: string;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ 
  title, 
  price, 
  imageSrc = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" 
}) => {
  return (
    <div className="bg-kalahari-gravel/20 flex w-full max-w-[304px] flex-col overflow-hidden items-stretch rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="text-xl text-kalahari-darkbrown font-bold tracking-[-0.6px] mb-4">
          {title}
        </div>
        <div className="flex w-full items-center justify-between gap-3">
          <div className="text-xl text-kalahari-darkbrown font-bold tracking-[-0.6px]">
            {price}
          </div>
          <button className="rounded bg-white hover:bg-kalahari-sand transition-colors text-kalahari-brown font-semibold py-2 px-4 text-sm">
            Full Screen
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
