import React, { useState } from "react";

interface GalleryCardProps {
  title: string;
  price: string;
  imageSrc?: string | null;
  description?: string;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ 
  title, 
  price, 
  imageSrc = null,
  description = ""
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showImage, setShowImage] = useState(false);

  // Handle body overflow when lightbox is open
  if (showImage) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }

  return (
    <>
      <div 
        className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 w-full max-w-xs"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative aspect-[4/3] overflow-hidden group">
          {imageSrc ? (
            <img 
              src={imageSrc} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
              onError={(e) => {
                // Fallback to placeholder if image fails to load
                (e.target as HTMLImageElement).src = "/Home Images/HeroImage.jpg";
              }}
            />
          ) : (
            <div className="w-full h-full bg-sand-light flex items-center justify-center">
              <div className="text-brown-custom opacity-30 flex flex-col items-center justify-center">
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
          
          {/* Overlay on hover - Responsive for all breakpoints */}
          <div 
            className={`absolute inset-0 bg-brown-overlay flex items-center justify-center transition-opacity duration-300
                      opacity-0 sm:opacity-0 ${isHovered ? 'opacity-100 sm:opacity-100' : ''}
                      md:touch-none`}
          >
            <button 
              className="bg-white text-brown-custom font-semibold py-2 px-4 rounded-lg hover:bg-sand-hover transition-colors
                      text-xs sm:text-sm md:text-base"
              onClick={() => imageSrc && setShowImage(true)}
            >
              View Image
            </button>
          </div>

          {/* Price tag - Responsive size */}
          <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-brown-custom text-white text-xs font-bold px-2 py-1 rounded-full">
            {price}
          </div>
        </div>

        <div className="p-3 sm:p-4">
          <h3 className="text-base sm:text-lg text-darkbrown-custom font-bold tracking-tight mb-1 sm:mb-2">
            {title}
          </h3>
          {description && (
            <p className="text-charcoal-custom text-xs sm:text-sm line-clamp-2 mb-2 sm:mb-3">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Optimized Image Lightbox with consistent sizing */}
      {showImage && imageSrc && (
        <div 
          className="fixed inset-0 z-[1000] bg-black/80 flex items-center justify-center p-2 sm:p-4" 
          onClick={() => setShowImage(false)}
        >
          <div className="bg-white rounded-lg overflow-hidden shadow-xl w-full sm:w-[85%] md:w-[80%]" 
               style={{ 
                 maxWidth: '800px', 
                 minWidth: 'auto', 
                 maxHeight: '90vh'
               }}>
            <div className="relative bg-sand-light h-[250px] sm:h-[350px] md:h-[450px]">
              <img 
                src={imageSrc} 
                alt={title}
                className="w-full h-full object-cover" 
                onClick={(e) => e.stopPropagation()}
              />
              <button 
                className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-brown-custom text-white rounded-full p-1 sm:p-1.5 shadow-md"
                onClick={() => setShowImage(false)}
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <div className="p-2 sm:p-3 text-center border-t border-gray-100">
              <h3 className="text-sm sm:text-base text-darkbrown-custom font-bold">{title}</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryCard;
