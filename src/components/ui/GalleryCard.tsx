import React from "react";

interface GalleryCardProps {
  title: string;
  price: string;
  imageSrc?: string | null;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ 
  title, 
  price, 
  imageSrc = null
}) => {
  return (
    <div className="bg-kalahari-gravel/20 flex w-full max-w-[304px] flex-col overflow-hidden items-stretch rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-48 overflow-hidden">
        {imageSrc ? (
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-kalahari-sand/40 flex items-center justify-center">
            <div className="text-kalahari-brown/30 flex flex-col items-center justify-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="48" 
                height="48" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              <span className="mt-2 text-sm font-medium">Image placeholder</span>
            </div>
          </div>
        )}
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
