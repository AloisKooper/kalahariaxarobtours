import React, { useState, useEffect, useRef } from "react";
import { Clock, MapPin, Users, Calendar, ChevronRight, Flag, Building2, Heart, CheckCircle, Info } from "lucide-react";

const TourTypes: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const slides = [
    {
      title: "Cruise Liner Shore Excursion",
      description: "A full day (8 hours) tour designed for cruise ship passengers, taking you from Walvis Bay Harbor to explore the surrounding areas including the lagoon, Dune 7, and historical sites in Swakopmund.",
      image: "/Home Images/Cruise Liner Shore Excursion.jpg",
      duration: "8 hours",
      maxParticipants: 40,
      highlights: [
        {
          title: "Walvis Bay Lagoon",
          description: "Spot flamingos and other birdlife at the beautiful lagoon",
          image: "/Home Images/Flamingo.jpg"
        },
        {
          title: "Dune 7",
          description: "Visit the highest dune in Namibia for spectacular views",
          image: "/Home Images/dune-7.gif"
        },
        {
          title: "Historical Sites",
          description: "Visit significant historical sites including the Concentration camp mass graves, Old Military barracks (Alte Kaserne), and the German War Memorial",
          image: "/Home Images/Genocide.jpg"
        },
        {
          title: "Swakopmund City",
          description: "Discover the unique German colonial architecture and historical landmarks",
          image: "/Home Images/Swakop Landmarks.jpg"
        }
      ],
      locations: ["Walvis Bay Harbor", "Walvis Bay Lagoon", "Dune 7", "Swakopmund"],
      included: [
        "English speaking Local Guide (descendant of the native Namaqua tribe)",
        "Transportation",
        "Light meal",
        "Non-Alcoholic beverages",
        "Pickup and drop-off at Walvis Bay Harbor"
      ],
      additionalInfo: [
        "Minimum 20, Maximum 40 travelers",
        "Not wheelchair accessible",
        "Vegetarian/vegan options available",
        "Moderate fitness level required",
        "Sunscreen recommended",
        "Shade hat recommended"
      ]
    },
    {
      title: "Guided Historical Tour",
      description: "A thought-provoking guided tour exploring significant historical sites in Swakopmund related to the 1904/1908 Nama and Ovaherero Genocide. Led by Mr. Rooi, a descendant of the native Namaqua tribe.",
      image: "/Home Images/Half Day Tour.jpg",
      duration: "5 hours",
      maxParticipants: 6,
      highlights: [
        {
          title: "Concentration Camp Mass Graves",
          description: "Visit the site commemorating the victims of the 1904-1908 Nama and Ovaherero Genocide",
          image: "/Home Images/Genocide.jpg"
        },
        {
          title: "Old Military Barracks",
          description: "Explore the historical barracks (Alte Kaserne) that played a role during colonial times",
          image: "/Home Images/barracks.jpg"
        },
        {
          title: "Historical Buildings",
          description: "View the Old Hospital, Jetty, Woermann House, and other colonial structures",
          image: "/Home Images/Hospital.jpg"
        },
        {
          title: "German War Memorial",
          description: "Visit the German War Memorial and learn about its historical significance",
          image: "/Home Images/German Architecture.jpg"
        }
      ],
      locations: ["Swakopmund", "Historical Sites"],
      included: [
        "English speaking Local Guide (descendant of the native Namaqua tribe)",
        "Transportation",
        "Light meal",
        "Non-Alcoholic beverages",
        "Pickup and drop-off at your Swakopmund accommodation"
      ],
      additionalInfo: [
        "Minimum 4, Maximum 6 travelers",
        "Not wheelchair accessible",
        "Vegetarian/vegan options available",
        "Moderate fitness level required",
        "Sunscreen recommended",
        "Shade hat recommended"
      ]
    },
    {
      title: "Guided Township Tour",
      description: "Experience the vibrant culture of Mondesa township through a guided tour that includes visits to a Herero lady for cultural insights and a traditional herbalist for knowledge about traditional medicines.",
      image: "/Home Images/Township Tour.jpg",
      duration: "4 hours",
      maxParticipants: 6,
      highlights: [
        {
          title: "Mondesa Township",
          description: "Drive through the vibrant Mondesa township and experience local life",
          image: "/Home Images/Mondesa Township.jpg"
        },
        {
          title: "Herero Cultural Experience",
          description: "Visit a Herero lady who shares insights into their cultural norms and traditions",
          image: "/Home Images/Local Living.jpg"
        },
        {
          title: "Traditional Herbalist",
          description: "Learn about traditional medicines from a local herbalist",
          image: "/Home Images/Local Artwork.jpg"
        },
        {
          title: "Cultural Exchange",
          description: "Engage with local community members and learn about their daily life",
          image: "/Home Images/Cultural Exchange.jpg"
        }
      ],
      locations: ["Mondesa Township", "Swakopmund"],
      included: [
        "English speaking Local Guide (descendant of the native Namaqua tribe)",
        "Transportation",
        "Light meal",
        "Non-Alcoholic beverages",
        "Pickup and drop-off at your Swakopmund accommodation"
      ],
      additionalInfo: [
        "Minimum 4, Maximum 6 travelers",
        "Not wheelchair accessible",
        "Vegetarian/vegan options available",
        "Moderate fitness level required",
        "Sunscreen recommended",
        "Shade hat recommended"
      ]
    }
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleSlideClick = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      timer = setInterval(() => {
        handleNext();
      }, 3000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isAutoPlaying]);

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(null);
    setIsAutoPlaying(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    setTouchStart(null);
    setTouchEnd(null);
    setIsAutoPlaying(true);
  };

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-lightbrown-custom">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-kalahari-brown text-3xl sm:text-4xl md:text-5xl font-normal tracking-wide uppercase mb-3 md:mb-4">
            Our Tour
          </h2>
          <p className="text-kalahari-charcoal text-base sm:text-lg font-normal leading-7 max-w-3xl mx-auto">
            A comprehensive historical tour through Swakopmund, a seaside resort town that evokes a Bavarian style village. Experience the unique blend of German colonial architecture and African culture, designed for cruise ship passengers exploring this fascinating destination.
          </p>
        </div>

        {/* Main Tour Card */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Hero Section with Image */}
            <div 
              ref={carouselRef}
              className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] touch-pan-y"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <img 
                src={slides[currentSlide].image} 
                alt={slides[currentSlide].title}
                className="w-full h-full object-cover transition-opacity duration-500 select-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-12 sm:bottom-16 left-0 right-0 p-4 sm:p-6 md:p-8 text-white">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 sm:mb-3 md:mb-4">
                  {slides[currentSlide].title}
                </h3>
                <p className="text-base sm:text-lg opacity-90 max-w-2xl line-clamp-3 sm:line-clamp-none">
                  {slides[currentSlide].description}
                </p>
              </div>
              
              {/* Navigation Controls - Moved back to top right */}
              <div className="absolute top-4 right-4 flex items-center gap-4">
                <button 
                  className="bg-white/90 hover:bg-white p-2 rounded-full transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-kalahari-brown"
                  onClick={handlePrev}
                  aria-label="Previous slide"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="#7D5A3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button 
                  className="bg-white/90 hover:bg-white p-2 rounded-full transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-kalahari-brown"
                  onClick={handleNext}
                  aria-label="Next slide"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 6L15 12L9 18" stroke="#7D5A3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

              {/* Slide Indicators - Improved visibility */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2 z-10">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index 
                        ? "bg-white w-4" 
                        : "bg-white/50 hover:bg-white/80"
                    }`}
                    onClick={() => handleSlideClick(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Tour Details Grid - Improved layout for different screen sizes */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8">
              {/* Left Column - Tour Info */}
              <div className="lg:col-span-2 space-y-6 sm:space-y-8">
                {/* Quick Info - Improved for mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 bg-sand-custom/50 rounded-lg p-4">
                  <div className="flex items-center text-kalahari-charcoal">
                    <Clock size={18} className="mr-2 text-kalahari-brown flex-shrink-0" />
                    <span className="font-medium">{slides[currentSlide].duration}</span>
                  </div>
                  <div className="flex items-center text-kalahari-charcoal">
                    <Users size={18} className="mr-2 text-kalahari-brown flex-shrink-0" />
                    <span className="font-medium">Max {slides[currentSlide].maxParticipants} people</span>
                  </div>
                  <div className="col-span-1 sm:col-span-2 flex items-center text-kalahari-charcoal">
                    <MapPin size={18} className="mr-2 text-kalahari-brown flex-shrink-0" />
                    <span className="truncate font-medium">{slides[currentSlide].locations.join(", ")}</span>
                  </div>
                </div>

                {/* Tour Highlights - Improved grid for all screen sizes */}
                <div>
                  <h4 className="text-xl font-semibold text-kalahari-brown mb-3 sm:mb-4 border-b border-kalahari-brown/20 pb-2">Tour Highlights</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {slides[currentSlide].highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-sand-custom rounded-lg hover:shadow-md transition-shadow">
                        <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex-shrink-0 rounded-lg overflow-hidden border border-kalahari-brown/20">
                          {highlight.image ? (
                            <img 
                              src={highlight.image} 
                              alt={highlight.title}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-sand-light flex items-center justify-center">
                              <div className="text-kalahari-brown opacity-60 flex flex-col items-center justify-center">
                                <svg 
                                  xmlns="http://www.w3.org/2000/svg" 
                                  width="24" 
                                  height="24" 
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
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="text-base sm:text-lg font-medium text-kalahari-brown truncate">{highlight.title}</h5>
                          <p className="text-xs sm:text-sm text-kalahari-charcoal/80 mt-1 line-clamp-3">{highlight.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Booking Info */}
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-sand-custom rounded-lg p-4 sm:p-5 lg:p-6 shadow-sm">
                  <h4 className="text-lg sm:text-xl font-semibold text-kalahari-brown mb-3 sm:mb-4 border-b border-kalahari-brown/20 pb-2">What's Included</h4>
                  <ul className="space-y-2 sm:space-y-3">
                    {slides[currentSlide].included.map((item, index) => (
                      <li key={index} className="flex items-start text-kalahari-charcoal group">
                        <CheckCircle size={16} className="mr-2 text-kalahari-brown flex-shrink-0 mt-0.5 group-hover:text-kalahari-darkbrown transition-colors" />
                        <span className="text-sm sm:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-sand-custom rounded-lg p-4 sm:p-5 lg:p-6 shadow-sm">
                  <h4 className="text-lg sm:text-xl font-semibold text-kalahari-brown mb-3 sm:mb-4 border-b border-kalahari-brown/20 pb-2">Important Notes</h4>
                  <ul className="space-y-2 sm:space-y-3">
                    {slides[currentSlide].additionalInfo.map((item, index) => (
                      <li key={index} className="flex items-start text-kalahari-charcoal group">
                        <Info size={16} className="mr-2 text-kalahari-brown flex-shrink-0 mt-0.5 group-hover:text-kalahari-darkbrown transition-colors" />
                        <span className="text-sm sm:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-kalahari-brown hover:bg-kalahari-darkbrown text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg flex items-center justify-center gap-2 transition-colors text-base sm:text-lg font-medium shadow-sm hover:shadow-md">
                  Book Now <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourTypes;
