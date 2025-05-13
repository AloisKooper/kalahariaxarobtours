import React, { useState, useEffect, useRef } from "react";
import TestimonialCard from "../ui/TestimonialCard";

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState<'google' | 'trustpilot'>('google');
  const [isAnimating, setIsAnimating] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const googleReviews = [
    {
      name: "Alois Kooper",
      location: "Warsaw, Poland",
      rating: "4.5",
      testimonial: '"Wow... I am very happy with this tour guide. His knowledge about the genocide of 1904-1908 is impressive. Would highly recommend to anyone interested in learning about this important historical event."',
      type: 'google'
    },
    {
      name: "Maria Schmidt",
      location: "Berlin, Germany",
      rating: "5.0",
      testimonial: '"Mr. Michael provided an exceptional experience. His personal connection to the history made the tour deeply meaningful and educational. Will definitely book again when I return to Namibia."',
      type: 'google'
    },
    {
      name: "John Mbambo",
      location: "Windhoek, Namibia",
      rating: "4.8",
      testimonial: '"Even as a local Namibian, I learned so much on this tour. The way Mr. Michael presents the historical facts while connecting them to present-day context is remarkable. Very professional service."',
      type: 'google'
    },
    {
      name: "Elizabeth Taylor",
      location: "London, UK",
      rating: "4.7",
      testimonial: '"The tour was very informative and Mr. Michael is extremely knowledgeable. I appreciated how he explained the complex history in a way that was easy to understand but still respectful of the gravity of events."',
      type: 'google'
    },
    {
      name: "Thomas Mueller",
      location: "Munich, Germany",
      rating: "4.9",
      testimonial: '"This was the highlight of our Namibia trip. Mr. Michael\'s tour gives you a deep understanding of the historical events and their significance. The personal stories made history come alive."',
      type: 'google'
    },
    {
      name: "David Chen",
      location: "New York, USA",
      rating: 5,
      testimonial: '"The city tour with Mr. Michael was eye-opening and educational. His storytelling abilities and depth of knowledge made the experience unforgettable."',
      image: "/Home Images/Erick Avatar.jpg",
      tourType: "City Tour",
      platform: "google"
    }
  ];

  const trustpilotReviews = [
    {
      name: "Sophie Johnson",
      location: "Cape Town, South Africa",
      rating: "5.0",
      testimonial: '"The historical tour with Mr. Michael was eye-opening and educational. His storytelling abilities and depth of knowledge made the experience unforgettable."',
      type: 'trustpilot'
    },
    {
      name: "James Wilson",
      location: "Sydney, Australia",
      rating: "4.9",
      testimonial: '"As a history enthusiast, I found this tour exceptionally well-researched and presented. Mr. Michael brings the past to life with profound respect and dignity."',
      type: 'trustpilot'
    },
    {
      name: "Hannah Müller",
      location: "Frankfurt, Germany",
      rating: "4.8",
      testimonial: '"Visiting Namibia without taking this tour would be a mistake. The genocide sites were presented with sensitivity and expert knowledge. Truly a memorable experience."',
      type: 'trustpilot'
    },
    {
      name: "Olivier Dubois",
      location: "Paris, France",
      rating: "5.0",
      testimonial: '"Mr. Michael\'s personal connections to the history he shares makes this tour particularly moving. A must-do for anyone seeking to understand Namibia\'s complex past."',
      type: 'trustpilot'
    },
    {
      name: "Linda Nakashimba",
      location: "Windhoek, Namibia",
      rating: "4.7",
      testimonial: '"Even as a local, I learned so much from this tour. Mr. Michael presents our difficult history with honesty, sensitivity and profound knowledge. Highly recommended."',
      type: 'trustpilot'
    }
  ];

  const activeReviews = activeTab === 'google' ? googleReviews : trustpilotReviews;

  const handleNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentSlide(prev => {
      const maxSlide = Math.max(0, activeReviews.length - getVisibleCardCount());
      const nextSlide = prev >= maxSlide ? 0 : prev + 1;
      return nextSlide;
    });
    
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentSlide(prev => {
      const maxSlide = Math.max(0, activeReviews.length - getVisibleCardCount());
      const prevSlide = prev <= 0 ? maxSlide : prev - 1;
      return prevSlide;
    });
    
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-advance the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentSlide, activeTab]);

  // Reset current slide when changing tabs
  useEffect(() => {
    setCurrentSlide(0);
  }, [activeTab]);

  // Calculate visible cards based on screen width - strictly following the 3 breakpoints rule
  const getVisibleCardCount = () => {
    if (typeof window === 'undefined') return 1;
    // Mobile: 0px - 767px
    if (window.innerWidth < 768) return 1;
    // Tablet: 768px - 1023px
    if (window.innerWidth < 1024) return 2;
    // Desktop: 1024px and above
    return 3;
  };

  const [visibleCards, setVisibleCards] = useState(getVisibleCardCount());

  // Update visible cards on window resize
  useEffect(() => {
    const handleResize = () => {
      const newVisibleCards = getVisibleCardCount();
      setVisibleCards(newVisibleCards);

      // Ensure we don't exceed the maximum slide count when resizing
      const maxSlide = Math.max(0, activeReviews.length - newVisibleCards);
      if (currentSlide > maxSlide) {
        setCurrentSlide(maxSlide);
      }
    };

    // Initial calculation
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeReviews.length, currentSlide]);

  // Handle tab change
  const handleTabChange = (tab: 'google' | 'trustpilot') => {
    setActiveTab(tab);
  };

  // Calculate dots to show
  const maxSlide = Math.max(0, activeReviews.length - visibleCards);
  const dots = Array.from({ length: maxSlide + 1 });

  return (
    <div className="w-full">
      {/* Review Type Tabs - Enhanced for better visibility */}
      <div className="flex justify-center gap-4 md:gap-8 border-b border-gray-200 w-full max-w-lg mx-auto overflow-x-auto pb-1 mb-8 md:mb-10">
        <button 
          className={`pb-2 px-4 text-sm md:text-base font-medium transition-colors relative whitespace-nowrap ${
            activeTab === 'google' 
              ? 'text-blue-600 font-semibold' 
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => handleTabChange('google')}
        >
          <div className="flex items-center gap-2">
            <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Google Reviews
          </div>
          {activeTab === 'google' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></div>}
        </button>
        <button 
          className={`pb-2 px-4 text-sm md:text-base font-medium transition-colors relative whitespace-nowrap ${
            activeTab === 'trustpilot' 
              ? 'text-[#00B67A] font-semibold' 
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => handleTabChange('trustpilot')}
        >
          <div className="flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="#00B67A"/>
            </svg>
            Trustpilot Reviews
          </div>
          {activeTab === 'trustpilot' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00B67A]"></div>}
        </button>
      </div>

      <div className="w-full max-w-6xl mx-auto relative">
        {/* Carousel Navigation - Enhanced for better visibility */}
        <button 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2.5 md:p-3.5 hover:bg-gray-50 transition-colors -ml-3 md:-ml-6 focus:outline-none focus:ring-2 focus:ring-kalahari-brown focus:ring-opacity-50"
          onClick={handlePrev}
          aria-label="Previous slide"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="#7D5A3C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Cards Container - Fixed height issues */}
        <div 
          ref={carouselRef}
          className="overflow-hidden relative"
          style={{ minHeight: "320px" }} // Ensure minimum height to prevent collapse
        >
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(-${currentSlide * (100 / visibleCards)}%)`,
            }}
          >
            {activeReviews.map((review, index) => (
              <div 
                key={`${activeTab}-${index}`} 
                className="px-3 md:px-4 pb-4" // Added bottom padding to prevent clipping
                style={{ 
                  width: `${100 / visibleCards}%`,
                  minWidth: `${100 / visibleCards}%`,
                  flex: `0 0 ${100 / visibleCards}%`,
                  height: "100%", // Ensure full height
                }}
              >
                <div className="h-full"> {/* Added wrapper to maintain full height */}
                  <TestimonialCard 
                    name={review.name}
                    location={review.location}
                    rating={review.rating}
                    testimonial={review.testimonial}
                    type={review.type as 'google' | 'trustpilot'}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Navigation - Right */}
        <button 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2.5 md:p-3.5 hover:bg-gray-50 transition-colors -mr-3 md:-mr-6 focus:outline-none focus:ring-2 focus:ring-kalahari-brown focus:ring-opacity-50"
          onClick={handleNext}
          aria-label="Next slide"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="#7D5A3C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Dots Navigation - Enhanced */}
        <div className="flex justify-center items-center mt-8 space-x-2">
          {dots.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === index 
                  ? 'bg-kalahari-brown w-3 h-3 scale-110' 
                  : 'bg-gray-300 hover:bg-kalahari-brown/50 w-2 h-2'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
