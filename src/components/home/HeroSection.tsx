import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

const HeroSection: React.FC = () => {
  // Define carousel images 
  const carouselImages = [
    {
      main: "/Home Images/Swakop Landmarks.jpg",
      small: "/Home Images/tour guide.jpg",
      mainAlt: "Colorful German colonial buildings in Swakopmund",
      smallAlt: "Friendly Namibian tour guide"
    },
    {
      main: "/Home Images/Swakop Beach.jpg", // Make sure to check if this image exists
      small: "/Home Images/flamingos.jpg", // Make sure to check if this image exists
      mainAlt: "Swakopmund beach and coastline",
      smallAlt: "Flamingos at Walvis Bay Lagoon"
    },
    {
      main: "/Home Images/German Memorial.jpg", // Make sure to check if this image exists
      small: "/Home Images/dune7.jpg", // Make sure to check if this image exists
      mainAlt: "Historical German memorial in Swakopmund",
      smallAlt: "Dune 7 near Walvis Bay"
    }
  ];

  // State to track current slide 
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = carouselImages.length;
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide functionality
  useEffect(() => {
    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        if (!isPaused) {
          setCurrentSlide(prev => (prev === totalSlides - 1 ? 0 : prev + 1));
        }
      }, 5000); // Change slide every 5 seconds
    };

    startAutoPlay();

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [totalSlides, isPaused]);

  // Handle navigation
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    // Briefly pause auto-slide after manual navigation
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 3000);
  };

  const goToPrevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? totalSlides - 1 : prev - 1));
    // Briefly pause auto-slide after manual navigation
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 3000);
  };

  const goToNextSlide = () => {
    setCurrentSlide(prev => (prev === totalSlides - 1 ? 0 : prev + 1));
    // Briefly pause auto-slide after manual navigation
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 3000);
  };

  // Pause auto-slide on hover
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <section className="bg-gradient-to-b from-kalahari-lightbrown/50 to-kalahari-sand/30 min-h-screen w-full flex items-center py-12 md:py-16 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="flex flex-col">
            <h2 className="text-sm leading-none text-kalahari-charcoal">
              The Ultimate Historical Tour Experience
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight uppercase mt-4 text-kalahari-brown">
              kalahari axarob tours
            </h1>
            <p className="leading-7 tracking-[-0.32px] text-kalahari-charcoal/80 mt-6">
              Discover Swakopmund's rich history and culture on our signature shore excursion, 
              available in flexible timeframes throughout the day. Perfect for cruise passengers 
              wanting to explore "The little piece of Germany under the African skies"
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Link
                to="/"
                className="rounded bg-white text-kalahari-darkbrown border border-kalahari-brown/20 hover:bg-kalahari-sand/50 transition-colors py-2.5 px-5 font-semibold"
              >
                Gallery
              </Link>
              <Link
                to="/"
                className="text-kalahari-brown hover:text-kalahari-darkbrown transition-colors font-semibold"
              >
                Book Tour
              </Link>
            </div>
            
            <div className="mt-10 bg-white/70 p-4 rounded-lg border border-kalahari-brown/10">
              <div className="flex items-center gap-4">
                {/* Profile Image */}
                <div className="relative shrink-0">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-kalahari-brown">
                    <img 
                      src="/Home Images/tour guide.jpg" 
                      alt="Mr. Rooi - Founder" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = "https://ui-avatars.com/api/?name=Mr+Rooi&background=A67C52&color=fff";
                      }}
                    />
                  </div>
                </div>
                
                <div className="flex-1">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-kalahari-brown text-kalahari-brown" />
                    ))}
                    <Star className="w-4 h-4 text-kalahari-brown" />
                    <span className="text-xs text-kalahari-charcoal ml-1">4.0</span>
                  </div>
                  
                  {/* Founder Label */}
                  <div className="text-sm font-medium text-kalahari-darkbrown">Mr. Rooi - Founder & Tour Guide</div>
                  
                  {/* Short Message */}
                  <p className="text-xs text-kalahari-charcoal/90 mt-1">
                    "I'm passionate about sharing the rich history of our region. Join me for an authentic 
                    historical tour experience that brings Namibia's past to life."
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column with image carousel - responsive implementation */}
          <div 
            className="flex flex-col" 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative w-full h-[400px] md:h-[450px] lg:h-[500px] mx-auto">
              {/* Carousel Images */}
              {carouselImages.map((slide, index) => (
                <div 
                  key={index}
                  className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                    currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  {/* Main image container with border radius and white border */}
                  <div className="relative w-full h-full rounded-[30px] md:rounded-[45px] lg:rounded-[60px] overflow-hidden shadow-md border-4 border-white">
                    <img 
                      src={slide.main} 
                      alt={slide.mainAlt} 
                      className="w-full h-full object-cover"
                    />
                    {/* Radial overlay for main image - darker version */}
                    <div 
                      className="absolute inset-0 rounded-[26px] md:rounded-[41px] lg:rounded-[56px] z-20"
                      style={{
                        background: 'radial-gradient(circle at center, transparent 15%, rgba(0,0,0,0.75) 100%)',
                        pointerEvents: 'none',
                        mixBlendMode: 'multiply'
                      }}
                    ></div>
                  </div>
                  
                  {/* Smaller image with matching border radius */}
                  <div className="absolute bottom-4 md:bottom-6 lg:bottom-8 left-4 md:left-6 lg:left-8 w-[120px] h-[120px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px] rounded-[20px] md:rounded-[30px] lg:rounded-[40px] overflow-hidden border-4 border-white shadow-md z-30">
                    <img 
                      src={slide.small} 
                      alt={slide.smallAlt} 
                      className="w-full h-full object-cover"
                    />
                    {/* Radial overlay for smaller image - darker version */}
                    <div 
                      className="absolute inset-0 rounded-[16px] md:rounded-[26px] lg:rounded-[36px] z-20"
                      style={{
                        background: 'radial-gradient(circle at center, transparent 25%, rgba(0,0,0,0.7) 100%)',
                        pointerEvents: 'none',
                        mixBlendMode: 'multiply'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Carousel Navigation - more responsive and fluid */}
            <div className="flex justify-center items-center mt-6 space-x-4">
              {/* Previous Button */}
              <button 
                onClick={goToPrevSlide}
                className="text-kalahari-brown hover:text-kalahari-darkbrown transition-all duration-300 transform hover:scale-110"
                aria-label="Previous slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              
              {/* Dots - now with smooth transitions */}
              <div className="flex space-x-3">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentSlide === index 
                        ? 'bg-kalahari-brown scale-125' 
                        : 'bg-kalahari-sand hover:bg-kalahari-brown/50 hover:scale-110'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* Next Button */}
              <button 
                onClick={goToNextSlide}
                className="text-kalahari-brown hover:text-kalahari-darkbrown transition-all duration-300 transform hover:scale-110"
                aria-label="Next slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
