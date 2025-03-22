import React, { useState, useEffect, useRef } from "react";
import { Clock, MapPin, Car, Flag, Utensils, Users, Sun, Info, DollarSign, Calendar, AlertCircle } from "lucide-react";

const TourAgenda: React.FC = () => {
  const [selectedTour, setSelectedTour] = useState<'cruise' | 'local'>('cruise');
  const [showTooltip, setShowTooltip] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Show tooltip when scrolling to the section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setShowTooltip(true);
          // Hide after 6 seconds
          const timer = setTimeout(() => {
            setShowTooltip(false);
          }, 6000);
          
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section ref={sectionRef} className="w-full flex flex-col items-center py-10 sm:py-12 md:py-16 bg-gray-50 px-4 sm:px-5 md:px-6 relative">
      <div className="container mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-kalahari-brown text-3xl sm:text-4xl md:text-5xl font-normal tracking-wide uppercase">
            Tour Agenda
          </h2>
          <p className="text-kalahari-charcoal text-base sm:text-lg font-normal leading-relaxed max-w-xl mt-4 sm:mt-6 mx-auto px-2">
            Kalahari Axarob Tours offers two tour options to explore the rich history of Swakopmund.
          </p>
          
          {/* Tour Type Selector with Tooltip */}
          <div className="flex justify-center mt-6 border-b border-kalahari-brown/20 relative">
            {/* Mobile-friendly tooltip that appears on scroll */}
            {showTooltip && (
              <div className="fixed bottom-4 left-4 right-4 md:absolute md:-top-14 md:left-1/2 md:right-auto md:bottom-auto md:transform md:-translate-x-1/2 bg-kalahari-brown text-white px-4 py-3 md:px-3 md:py-1.5 rounded-lg shadow-lg z-50 text-center md:whitespace-nowrap">
                <p className="font-medium text-sm md:text-xs">Tap to switch between tour options</p>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-full h-3 w-3 bg-kalahari-brown rotate-45"></div>
              </div>
            )}
            
            <button
              onClick={() => setSelectedTour('cruise')}
              className={`px-3 sm:px-4 py-2 font-medium text-sm sm:text-base ${
                selectedTour === 'cruise' 
                  ? 'text-kalahari-brown border-b-2 border-kalahari-brown'
                  : 'text-kalahari-charcoal hover:text-kalahari-brown'
              }`}
            >
              Passenger Liner Shore Excursion
            </button>
            <button
              onClick={() => setSelectedTour('local')}
              className={`px-3 sm:px-4 py-2 font-medium text-sm sm:text-base ${
                selectedTour === 'local'
                  ? 'text-kalahari-brown border-b-2 border-kalahari-brown'
                  : 'text-kalahari-charcoal hover:text-kalahari-brown'
              }`}
            >
              Half Day Local Tour
            </button>
          </div>
        </div>

        {selectedTour === 'cruise' ? (
          <>
            {/* Cruise Tour Summary */}
            <div className="max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                <div className="bg-sand-custom rounded-lg p-4 sm:p-5 md:p-6 text-center">
                  <Clock className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-kalahari-brown mx-auto mb-2 sm:mb-3" />
                  <h3 className="text-base sm:text-lg text-kalahari-brown font-medium mb-1 sm:mb-2">Duration</h3>
                  <p className="text-kalahari-charcoal/90 text-sm sm:text-base">8 Hours</p>
                </div>
                <div className="bg-sand-custom rounded-lg p-4 sm:p-5 md:p-6 text-center">
                  <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-kalahari-brown mx-auto mb-2 sm:mb-3" />
                  <h3 className="text-base sm:text-lg text-kalahari-brown font-medium mb-1 sm:mb-2">Group Size</h3>
                  <p className="text-kalahari-charcoal/90 text-sm sm:text-base">Max 20 travelers</p>
                </div>
                <div className="bg-sand-custom rounded-lg p-4 sm:p-5 md:p-6 text-center sm:col-span-2 md:col-span-1">
                  <Calendar className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-kalahari-brown mx-auto mb-2 sm:mb-3" />
                  <h3 className="text-base sm:text-lg text-kalahari-brown font-medium mb-1 sm:mb-2">Availability</h3>
                  <p className="text-kalahari-charcoal/90 text-sm sm:text-base">Based on Cruise Arrivals</p>
                </div>
              </div>
            </div>

            {/* Horizontal Timeline - Mobile Friendly */}
            <div className="max-w-6xl mx-auto px-2 sm:px-4">
              {/* Timeline Line */}
              <div className="relative h-1 bg-kalahari-brown/20 mb-12 sm:mb-16 mt-6">
                <div className="absolute top-0 left-0 w-1/3 h-full bg-kalahari-brown"></div>
                <div className="absolute top-0 left-1/3 w-1/3 h-full bg-kalahari-brown"></div>
                <div className="absolute top-0 left-2/3 w-1/3 h-full bg-kalahari-brown"></div>
              </div>

              {/* Timeline Points - Mobile-friendly sizing */}
              <div className="flex justify-between relative -mt-6 sm:-mt-8">
                <div className="flex flex-col items-center">
                  <div className="bg-kalahari-brown rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center text-white mb-2 sm:mb-3 md:mb-4">
                    <MapPin className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                  </div>
                  <span className="text-xs sm:text-sm text-kalahari-brown font-medium uppercase">Pickup</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-kalahari-brown rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center text-white mb-2 sm:mb-3 md:mb-4">
                    <Flag className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                  </div>
                  <span className="text-xs sm:text-sm text-kalahari-brown font-medium uppercase">Tour</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-kalahari-brown rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center text-white mb-2 sm:mb-3 md:mb-4">
                    <Car className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                  </div>
                  <span className="text-xs sm:text-sm text-kalahari-brown font-medium uppercase">Drop-off</span>
                </div>
              </div>

              {/* Tour Details Cards - Improved mobile responsiveness */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 md:gap-8 mt-8 sm:mt-10 md:mt-12">
                {/* Pickup Card */}
                <div className="bg-white rounded-lg shadow-sm border border-kalahari-brown/10 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative h-40 sm:h-32 md:h-48">
                    <img 
                      src="/Home Images/Pickup.jpg" 
                      alt="Walvis Bay Harbor" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 sm:p-5 md:p-6">
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div className="bg-kalahari-brown p-1.5 sm:p-2 rounded-lg text-white">
                        <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl text-kalahari-brown font-medium">Pick Up</h3>
                        <p className="text-kalahari-brown/80 text-xs sm:text-sm">9:00-10:00</p>
                      </div>
                    </div>
                    <p className="text-kalahari-charcoal/90 text-xs sm:text-sm leading-relaxed">
                      Meet at Walvis Bay Harbor. Our guide will collect you as you disembark at the Walvis Bay Harbor.
                    </p>
                  </div>
                </div>

                {/* Tour Card */}
                <div className="bg-white rounded-lg shadow-sm border border-kalahari-brown/10 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative h-40 sm:h-32 md:h-48">
                    <img 
                      src="/Home Images/Swakop Landmarks.jpg" 
                      alt="Swakopmund Historical Sites" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 sm:p-5 md:p-6">
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div className="bg-kalahari-brown p-1.5 sm:p-2 rounded-lg text-white">
                        <Flag className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl text-kalahari-brown font-medium">Historical Tour</h3>
                        <p className="text-kalahari-brown/80 text-xs sm:text-sm">Full Day</p>
                      </div>
                    </div>
                    <p className="text-kalahari-charcoal/90 text-xs sm:text-sm leading-relaxed">
                      Port - Lagoon - Dune 7 - Swakopmund (lunch) - Concentration camp mass graves - Old Military barracks - Old Hospital - Jetty - Woermann House - German War Memorial - Free time - Old Bahn Hoff - Back to the port.
                    </p>
                  </div>
                </div>

                {/* Drop-off Card */}
                <div className="bg-white rounded-lg shadow-sm border border-kalahari-brown/10 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative h-40 sm:h-32 md:h-48">
                    <img 
                      src="/Home Images/DropOff.jpg" 
                      alt="Walvis Bay Harbor Drop-off" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 sm:p-5 md:p-6">
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div className="bg-kalahari-brown p-1.5 sm:p-2 rounded-lg text-white">
                        <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl text-kalahari-brown font-medium">Drop-off</h3>
                        <p className="text-kalahari-brown/80 text-xs sm:text-sm">17:45-18:00</p>
                      </div>
                    </div>
                    <p className="text-kalahari-charcoal/90 text-xs sm:text-sm leading-relaxed">
                      Our Tour Guide will safely transport and drop you off back at Walvis Bay Harbor. This activity ends back at the meeting point.
                    </p>
                  </div>
                </div>
              </div>

              {/* What to Expect Section - Improved for mobile */}
              <div className="mt-12 sm:mt-16 md:mt-20">
                <h3 className="text-xl sm:text-2xl text-kalahari-brown text-center mb-6 sm:mb-8">What to Expect</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  {/* Included Features */}
                  <div className="bg-white rounded-lg shadow-sm border border-kalahari-brown/10 p-4 sm:p-5 md:p-6">
                    <h4 className="text-lg sm:text-xl text-kalahari-brown mb-3 sm:mb-4 flex items-center gap-2">
                      <Info className="w-5 h-5 text-kalahari-brown" />
                      What's Included
                    </h4>
                    <ul className="space-y-2 sm:space-y-3">
                      <li className="flex items-center gap-2 text-kalahari-charcoal/90 text-sm sm:text-base">
                        <Users className="w-4 h-4 text-kalahari-brown" />
                        English speaking Local Guide (descendant of the native Namaqua tribe)
                      </li>
                      <li className="flex items-center gap-2 text-kalahari-charcoal/90 text-sm sm:text-base">
                        <Car className="w-4 h-4 text-kalahari-brown" />
                        Transportation
                      </li>
                      <li className="flex items-center gap-2 text-kalahari-charcoal/90 text-sm sm:text-base">
                        <Utensils className="w-4 h-4 text-kalahari-brown" />
                        Lunch
                      </li>
                      <li className="flex items-center gap-2 text-kalahari-charcoal/90 text-sm sm:text-base">
                        <Info className="w-4 h-4 text-kalahari-brown" />
                        Non-Alcoholic beverages
                      </li>
                    </ul>
                  </div>

                  {/* Additional Information */}
                  <div className="bg-white rounded-lg shadow-sm border border-kalahari-brown/10 p-4 sm:p-5 md:p-6">
                    <h4 className="text-lg sm:text-xl text-kalahari-brown mb-3 sm:mb-4 flex items-center gap-2">
                      <Info className="w-5 h-5 text-kalahari-brown" />
                      Additional Information
                    </h4>
                    <ul className="space-y-2 sm:space-y-3">
                      <li className="flex items-center gap-2 text-kalahari-charcoal/90 text-sm sm:text-base">
                        <Sun className="w-4 h-4 text-kalahari-brown" />
                        Sunscreen recommended
                      </li>
                      <li className="flex items-center gap-2 text-kalahari-charcoal/90 text-sm sm:text-base">
                        <Sun className="w-4 h-4 text-kalahari-brown" />
                        Shade hat recommended
                      </li>
                      <li className="flex items-center gap-2 text-kalahari-charcoal/90 text-sm sm:text-base">
                        <Users className="w-4 h-4 text-kalahari-brown" />
                        Not wheelchair accessible
                      </li>
                      <li className="flex items-center gap-2 text-kalahari-charcoal/90 text-sm sm:text-base">
                        <Info className="w-4 h-4 text-kalahari-brown" />
                        Vegetarian/vegan options available
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Cancellation Policy - Mobile friendly */}
              <div className="mt-12 sm:mt-16 md:mt-20 bg-sand-custom rounded-lg p-4 sm:p-5 md:p-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-kalahari-brown" />
                  <h3 className="text-lg sm:text-xl text-kalahari-brown font-medium">Cancellation Policy</h3>
                </div>
                <div className="space-y-2 sm:space-y-3 text-kalahari-charcoal/90 text-sm sm:text-base">
                  <p>• You can cancel up to 28 full days in advance of the experience for a full refund</p>
                  <p>• If you cancel less than 28 days before the experience's start time, the amount you pay will not be refunded</p>
                  <p>• Any changes made less than 28 full days before the experience's start will not be accepted</p>
                  <p>• This experience requires a minimum number of travelers. If it's cancelled because the minimum isn't met, you'll be offered a different date or a full refund</p>
                </div>
                <div className="mt-4 pt-3 border-t border-kalahari-brown/20 flex justify-end">
                  <div className="flex gap-4 text-xs text-kalahari-brown/80">
                    <a href="/privacy" className="hover:text-kalahari-brown hover:underline transition-colors">Privacy Policy</a>
                    <a href="/terms" className="hover:text-kalahari-brown hover:underline transition-colors">Terms & Conditions</a>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Local Tour Summary - Same responsive improvements */}
            <div className="max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                <div className="bg-sand-custom rounded-lg p-4 sm:p-5 md:p-6 text-center">
                  <Clock className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-kalahari-brown mx-auto mb-2 sm:mb-3" />
                  <h3 className="text-base sm:text-lg text-kalahari-brown font-medium mb-1 sm:mb-2">Duration</h3>
                  <p className="text-kalahari-charcoal/90 text-sm sm:text-base">4 Hours</p>
                </div>
                <div className="bg-sand-custom rounded-lg p-4 sm:p-5 md:p-6 text-center">
                  <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-kalahari-brown mx-auto mb-2 sm:mb-3" />
                  <h3 className="text-base sm:text-lg text-kalahari-brown font-medium mb-1 sm:mb-2">Group Size</h3>
                  <p className="text-kalahari-charcoal/90 text-sm sm:text-base">Max 6 people</p>
                </div>
                <div className="bg-sand-custom rounded-lg p-4 sm:p-5 md:p-6 text-center sm:col-span-2 md:col-span-1">
                  <MapPin className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-kalahari-brown mx-auto mb-2 sm:mb-3" />
                  <h3 className="text-base sm:text-lg text-kalahari-brown font-medium mb-1 sm:mb-2">Location</h3>
                  <p className="text-kalahari-charcoal/90 text-sm sm:text-base">Swakopmund</p>
                </div>
              </div>
            </div>

            {/* Horizontal Timeline - Mobile-friendly improvements */}
            <div className="max-w-6xl mx-auto px-2 sm:px-4">
              {/* Timeline Line */}
              <div className="relative h-1 bg-kalahari-brown/20 mb-12 sm:mb-16 mt-6">
                <div className="absolute top-0 left-0 w-1/3 h-full bg-kalahari-brown"></div>
                <div className="absolute top-0 left-1/3 w-1/3 h-full bg-kalahari-brown"></div>
                <div className="absolute top-0 left-2/3 w-1/3 h-full bg-kalahari-brown"></div>
              </div>

              {/* Timeline Points - Mobile-friendly sizing */}
              <div className="flex justify-between relative -mt-6 sm:-mt-8">
                <div className="flex flex-col items-center">
                  <div className="bg-kalahari-brown rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center text-white mb-2 sm:mb-3 md:mb-4">
                    <MapPin className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                  </div>
                  <span className="text-xs sm:text-sm text-kalahari-brown font-medium uppercase">Pickup</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-kalahari-brown rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center text-white mb-2 sm:mb-3 md:mb-4">
                    <Flag className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                  </div>
                  <span className="text-xs sm:text-sm text-kalahari-brown font-medium uppercase">Tour</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-kalahari-brown rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center text-white mb-2 sm:mb-3 md:mb-4">
                    <Car className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                  </div>
                  <span className="text-xs sm:text-sm text-kalahari-brown font-medium uppercase">Drop-off</span>
                </div>
              </div>

              {/* Tour Details Cards - Improved for mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 md:gap-8 mt-8 sm:mt-10 md:mt-12">
                {/* Pickup Card */}
                <div className="bg-white rounded-lg shadow-sm border border-kalahari-brown/10 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative h-40 sm:h-32 md:h-48">
                    <img 
                      src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Swakopmund Hotel Pickup" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 sm:p-5 md:p-6">
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div className="bg-kalahari-brown p-1.5 sm:p-2 rounded-lg text-white">
                        <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl text-kalahari-brown font-medium">Pick Up</h3>
                        <p className="text-kalahari-brown/80 text-xs sm:text-sm">Flexible Time</p>
                      </div>
                    </div>
                    <p className="text-kalahari-charcoal/90 text-xs sm:text-sm leading-relaxed">
                      Pickup and drop-off at any accommodation in Swakopmund.
                    </p>
                  </div>
                </div>

                {/* Tour Card */}
                <div className="bg-white rounded-lg shadow-sm border border-kalahari-brown/10 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative h-40 sm:h-32 md:h-48">
                    <img 
                      src="https://images.unsplash.com/photo-1484318571209-661cf29a69c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Namibian Historical Buildings" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 sm:p-5 md:p-6">
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div className="bg-kalahari-brown p-1.5 sm:p-2 rounded-lg text-white">
                        <Flag className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl text-kalahari-brown font-medium">Local Historical Tour</h3>
                        <p className="text-kalahari-brown/80 text-xs sm:text-sm">Half Day</p>
                      </div>
                    </div>
                    <p className="text-kalahari-charcoal/90 text-xs sm:text-sm leading-relaxed">
                      Concentration camp mass graves - Old Military barracks - Old Hospital - Jetty - Woerman hause - German War Memorial - Old Bahn Hoff
                    </p>
                  </div>
                </div>

                {/* Drop-off Card */}
                <div className="bg-white rounded-lg shadow-sm border border-kalahari-brown/10 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative h-40 sm:h-32 md:h-48">
                    <img 
                      src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Swakopmund scenery" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 sm:p-5 md:p-6">
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div className="bg-kalahari-brown p-1.5 sm:p-2 rounded-lg text-white">
                        <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl text-kalahari-brown font-medium">Drop-off</h3>
                        <p className="text-kalahari-brown/80 text-xs sm:text-sm">After tour concludes</p>
                      </div>
                    </div>
                    <p className="text-kalahari-charcoal/90 text-xs sm:text-sm leading-relaxed">
                      Return to your accommodation in Swakopmund after approximately 4 hours of exploring the city's historical sites.
                    </p>
                  </div>
                </div>
              </div>

              {/* What to Expect Section - mobile friendly */}
              <div className="mt-12 sm:mt-16 md:mt-20">
                <h3 className="text-xl sm:text-2xl text-kalahari-brown text-center mb-6 sm:mb-8">What to Expect</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  {/* Included Features */}
                  <div className="bg-white rounded-lg shadow-sm border border-kalahari-brown/10 p-4 sm:p-5 md:p-6">
                    <h4 className="text-lg sm:text-xl text-kalahari-brown mb-3 sm:mb-4 flex items-center gap-2">
                      <Info className="w-5 h-5 text-kalahari-brown" />
                      What's Included
                    </h4>
                    <ul className="space-y-2 sm:space-y-3">
                      <li className="flex items-center gap-2 text-kalahari-charcoal/90 text-sm sm:text-base">
                        <Users className="w-4 h-4 text-kalahari-brown" />
                        English speaking Local Guide (descendant of the native Namaqua tribe)
                      </li>
                      <li className="flex items-center gap-2 text-kalahari-charcoal/90 text-sm sm:text-base">
                        <Car className="w-4 h-4 text-kalahari-brown" />
                        Transportation
                      </li>
                      <li className="flex items-center gap-2 text-kalahari-charcoal/90 text-sm sm:text-base">
                        <Utensils className="w-4 h-4 text-kalahari-brown" />
                        Light finger meal
                      </li>
                      <li className="flex items-center gap-2 text-kalahari-charcoal/90 text-sm sm:text-base">
                        <Info className="w-4 h-4 text-kalahari-brown" />
                        Non-Alcoholic beverages
                      </li>
                    </ul>
                  </div>

                  {/* Additional Information */}
                  <div className="bg-white rounded-lg shadow-sm border border-kalahari-brown/10 p-4 sm:p-5 md:p-6">
                    <h4 className="text-lg sm:text-xl text-kalahari-brown mb-3 sm:mb-4 flex items-center gap-2">
                      <Info className="w-5 h-5 text-kalahari-brown" />
                      Additional Information
                    </h4>
                    <ul className="space-y-2 sm:space-y-3">
                      <li className="flex items-center gap-2 text-kalahari-charcoal/90 text-sm sm:text-base">
                        <Users className="w-4 h-4 text-kalahari-brown" />
                        Maximum 6 travelers
                      </li>
                      <li className="flex items-center gap-2 text-kalahari-charcoal/90 text-sm sm:text-base">
                        <Sun className="w-4 h-4 text-kalahari-brown" />
                        Sunscreen recommended
                      </li>
                      <li className="flex items-center gap-2 text-kalahari-charcoal/90 text-sm sm:text-base">
                        <Sun className="w-4 h-4 text-kalahari-brown" />
                        Shade hat recommended
                      </li>
                      <li className="flex items-center gap-2 text-kalahari-charcoal/90 text-sm sm:text-base">
                        <Info className="w-4 h-4 text-kalahari-brown" />
                        Vegetarian/vegan options available
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Cancellation Policy for Local Tour */}
              <div className="mt-12 sm:mt-16 md:mt-20 bg-sand-custom rounded-lg p-4 sm:p-5 md:p-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-kalahari-brown" />
                  <h3 className="text-lg sm:text-xl text-kalahari-brown font-medium">Cancellation Policy</h3>
                </div>
                <div className="space-y-2 sm:space-y-3 text-kalahari-charcoal/90 text-sm sm:text-base">
                  <p>• You can cancel up to 28 full days in advance of the experience for a full refund</p>
                  <p>• If you cancel less than 28 days before the experience's start time, the amount you pay will not be refunded</p>
                  <p>• Any changes made less than 28 full days before the experience's start will not be accepted</p>
                  <p>• This experience requires minimum travelers. If it's cancelled because the minimum isn't met, you'll be offered a different date or a full refund</p>
                </div>
                <div className="mt-4 pt-3 border-t border-kalahari-brown/20 flex justify-end">
                  <div className="flex gap-4 text-xs text-kalahari-brown/80">
                    <a href="/privacy" className="hover:text-kalahari-brown hover:underline transition-colors">Privacy Policy</a>
                    <a href="/terms" className="hover:text-kalahari-brown hover:underline transition-colors">Terms & Conditions</a>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default TourAgenda;

