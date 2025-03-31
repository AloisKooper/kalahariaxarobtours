import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Add Google Icon component
const GoogleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const HeroSection: React.FC = () => {
  // Define carousel images with new photos
  const carouselImages = [
    {
      main: "/Home Images/Swakop Landmarks.jpg",
      small: "/Home Images/Bahnhof.jpg",
      mainAlt: "Colorful German colonial buildings in Swakopmund",
      smallAlt: "Historic Bahnhof building in Swakopmund"
    },
    {
      main: "/Home Images/Genocide.jpg",
      small: "/Home Images/Hospital.jpg",
      mainAlt: "Genocide memorial site",
      smallAlt: "Historic hospital building in Swakopmund"
    },
    {
      main: "/Home Images/dune-7.gif",
      small: "/Home Images/barracks.jpg",
      mainAlt: "Dune 7 near Walvis Bay",
      smallAlt: "Historic military barracks in Swakopmund"
    },
    {
      main: "/Home Images/Flamingo.jpg",
      small: "/Home Images/soldier.png",
      mainAlt: "Flamingos at Walvis Bay Lagoon",
      smallAlt: "Historical soldier memorial"
    }
  ];

  // State to track current slide 
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const totalSlides = carouselImages.length;
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Preload all carousel images
  useEffect(() => {
    // Preload main hero image immediately
    const preloadMainImage = new Image();
    preloadMainImage.src = carouselImages[0].main;

    // Preload rest of the carousel images
    carouselImages.forEach((image, index) => {
      if (index === 0) return; // Skip first image as it's already loading
      
      const preloadMainImg = new Image();
      preloadMainImg.src = image.main;
      
      const preloadSmallImg = new Image();
      preloadSmallImg.src = image.small;
    });
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        if (!isPaused && !isAnimating) {
          changeSlide((currentSlide + 1) % totalSlides);
        }
      }, 5000); // Change slide every 5 seconds
    };

    startAutoPlay();

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [totalSlides, isPaused, currentSlide, isAnimating]);

  // Handle slide change with Framer Motion animation
  const changeSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    
    setIsAnimating(true);
    setCurrentSlide(index);
    
    // Reset animation state after transition completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  // Handle navigation
  const goToSlide = (index: number) => {
    changeSlide(index);
    
    // Briefly pause auto-slide after manual navigation
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 3000);
  };

  const goToPrevSlide = () => {
    const prevIndex = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
    changeSlide(prevIndex);
    
    // Briefly pause auto-slide after manual navigation
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 3000);
  };

  const goToNextSlide = () => {
    const nextIndex = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;
    changeSlide(nextIndex);
    
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };
  
  const profileCardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.7, 
        ease: "easeOut",
        delay: 0.6
      }
    }
  };

  return (
    <section className="min-h-[calc(100vh-var(--nav-height,80px))] w-full flex items-center py-8 sm:py-10 md:py-16 px-3 sm:px-4 md:px-6 hero-section overflow-hidden relative">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center">
          {/* Left Column - Text Content with animations */}
          <motion.div 
            className="flex flex-col"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 
              className="text-xs sm:text-sm leading-none text-white"
              variants={itemVariants}
            >
              The Ultimate Historical Tour Experience
            </motion.h2>
            
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight uppercase mt-3 sm:mt-4 text-[#C4956A]"
              variants={itemVariants}
            >
              kalahari axarob tours
            </motion.h1>
            
            <motion.p 
              className="text-sm sm:text-base leading-6 sm:leading-7 tracking-[-0.32px] text-white mt-4 sm:mt-6"
              variants={itemVariants}
            >
              Discover Swakopmund's rich history and culture on our signature shore excursion, 
              available in flexible timeframes throughout the day. Perfect for cruise passengers 
              wanting to explore "The little piece of Germany under the African skies"
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap items-center gap-3 sm:gap-4 mt-6 sm:mt-8"
              variants={itemVariants}
            >
              <motion.div 
                variants={buttonVariants}
                whileHover="hover"
              >
                <Link
                  to="/gallery"
                  className="rounded bg-white text-darkbrown-custom border border-brown-light hover:bg-sand-hover transition-colors py-2 sm:py-2.5 px-4 sm:px-5 text-sm sm:text-base font-semibold"
                >
                  Gallery
                </Link>
              </motion.div>
              
              <motion.div 
                variants={buttonVariants}
                whileHover="hover"
              >
                <Link
                  to="/tours"
                  className="text-white hover:text-sun-custom transition-colors text-sm sm:text-base font-semibold"
                >
                  Book Tour
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Profile Card with animation */}
            <motion.div 
              className="mt-8 sm:mt-10 bg-white/70 p-3 sm:p-4 rounded-lg border border-brown-light"
              variants={profileCardVariants}
            >
              <div className="flex items-center gap-3 sm:gap-4">
                {/* Profile Image */}
                <div className="relative shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-brown-custom">
                    <img 
                      src="/Home Images/tour guide.jpg" 
                      alt="Mr. Rooi - Founder" 
                      className="w-full h-full object-cover"
                      loading="eager"
                      fetchPriority="high"
                      onError={(e) => {
                        // Fallback if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = "https://ui-avatars.com/api/?name=Mr+Rooi&background=A67C52&color=fff";
                      }}
                    />
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  {/* Google Star Rating */}
                  <div className="flex items-center gap-0.5 sm:gap-1 mb-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-3 h-3 sm:w-4 sm:h-4 relative">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={i < 4 ? "#FBBC05" : "none"} stroke="#FBBC05" strokeWidth="1.5" className="w-full h-full">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </div>
                      ))}
                    </div>
                    <span className="text-xs text-charcoal-custom ml-1">4.0</span>
                  </div>
                  
                  {/* Founder Label with Google Icon */}
                  <div className="flex items-center gap-1 text-xs sm:text-sm font-medium text-darkbrown-custom truncate">
                    <GoogleIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>Mr. Rooi - Founder & Tour Guide</span>
                  </div>
                  
                  {/* Short Message */}
                  <p className="text-xs text-charcoal-custom mt-1 line-clamp-3 sm:line-clamp-none">
                    "I'm passionate about sharing the rich history of our region. Join me for an authentic 
                    historical tour experience that brings Namibia's past to life."
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right column with carousel - Fixed overflow issue and improved for mobile */}
          <motion.div 
            className="flex flex-col mt-4 md:mt-0" 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Added extra padding to prevent clipping */}
            <div className="relative w-full h-[320px] sm:h-[400px] md:h-[470px] lg:h-[520px] mx-auto" role="region" aria-label="Tour Images">
              {/* Carousel Images with Framer Motion transitions */}
              <AnimatePresence initial={false} mode="wait">
              {carouselImages.map((slide, index) => (
                  index === currentSlide && (
                    <motion.div
                      key={index}
                      className="absolute top-0 left-0 w-full h-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      aria-hidden={index !== currentSlide}
                    >
                      {/* Main image container with border radius and white border */}
                      <div className="relative w-full h-full rounded-[20px] sm:rounded-[30px] md:rounded-[45px] lg:rounded-[60px] overflow-hidden shadow-md border-3 sm:border-4 border-white">
                        <img 
                          src={slide.main} 
                          alt={slide.mainAlt} 
                          className="w-full h-full object-cover"
                          loading={index === 0 ? "eager" : "lazy"}
                          fetchPriority={index === 0 ? "high" : "auto"}
                          decoding={index === 0 ? "sync" : "async"}
                        />
                        {/* Radial overlay for main image */}
                        <div 
                          className="absolute inset-0 rounded-[17px] sm:rounded-[26px] md:rounded-[41px] lg:rounded-[56px] z-20"
                          style={{
                            background: 'radial-gradient(circle at center, transparent 15%, rgba(0,0,0,0.75) 100%)',
                            pointerEvents: 'none',
                            mixBlendMode: 'multiply'
                          }}
                        ></div>
                      </div>
                  
                      {/* Smaller image with matching border radius - Adjusted for mobile */}
                      <div className="absolute bottom-2 sm:bottom-4 md:bottom-6 lg:bottom-8 left-2 sm:left-4 md:left-6 lg:left-8 w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px] rounded-[15px] sm:rounded-[20px] md:rounded-[30px] lg:rounded-[40px] overflow-hidden border-3 sm:border-4 border-white shadow-md z-30">
                        <img 
                          src={slide.small} 
                          alt={slide.smallAlt} 
                          className="w-full h-full object-cover"
                          loading={index === 0 ? "eager" : "lazy"}
                        />
                        {/* Radial overlay for smaller image */}
                        <div 
                          className="absolute inset-0 rounded-[12px] sm:rounded-[16px] md:rounded-[26px] lg:rounded-[36px] z-20"
                          style={{
                            background: 'radial-gradient(circle at center, transparent 25%, rgba(0,0,0,0.7) 100%)',
                            pointerEvents: 'none',
                            mixBlendMode: 'multiply'
                          }}
                        ></div>
                      </div>
                    </motion.div>
                  )
              ))}
              </AnimatePresence>
            </div>
            
            {/* Improved Carousel Navigation - Mobile optimized */}
            <div className="flex justify-center items-center mt-4 sm:mt-6 md:mt-8 mb-2">
              <div className="flex items-center space-x-4 sm:space-x-6">
                {/* Previous Button */}
                <button 
                  onClick={goToPrevSlide}
                  className="text-brown-custom hover:text-darkbrown-custom transition-colors p-1 sm:p-0"
                  aria-label="Previous slide"
                  disabled={isAnimating}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-6 sm:h-6">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
              
                {/* Improved dot indicators */}
                <div className="flex space-x-2 sm:space-x-3">
                  {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`rounded-full focus:outline-none transition-all duration-300 ${
                        currentSlide === index 
                          ? 'bg-brown-custom w-4 sm:w-5 h-2 sm:h-3' 
                          : 'bg-sand-custom hover:bg-brown-hover w-2 sm:w-3 h-2 sm:h-3'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                      aria-current={currentSlide === index ? "true" : "false"}
                      disabled={isAnimating}
                    />
                  ))}
                </div>
              
                {/* Next Button */}
                <button 
                  onClick={goToNextSlide}
                  className="text-brown-custom hover:text-darkbrown-custom transition-colors p-1 sm:p-0"
                  aria-label="Next slide"
                  disabled={isAnimating}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-6 sm:h-6">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
