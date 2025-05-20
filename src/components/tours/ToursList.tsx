import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, Calendar, ChevronRight, ThumbsUp, Check } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface ToursListProps {
  selectedTab: "cruise" | "historical";
  setSelectedTab: React.Dispatch<React.SetStateAction<"cruise" | "historical">>;
}

const ToursList: React.FC<ToursListProps> = ({ selectedTab, setSelectedTab }) => {

  // Get the current year and calculate future months dynamically
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  
  // Create tour dates for next 3 months
  const getNextMonthsFormatted = (startMonth = currentMonth) => {
    const dates = [];
    for (let i = 0; i < 3; i++) {
      const date = new Date(currentYear, startMonth + i, 15);
      const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      dates.push(formattedDate);
    }
    return dates;
  };

  const tours = {
    cruise: [
      {
        id: 1,
        title: "Cruise Liner Shore Excursion",
        image: "/Home Images/Cruise Liner Shore Excursion.jpg",
        price: "$165",
        duration: "8 hours",
        minParticipants: 20,
        maxParticipants: 40,
        locations: ["Walvis Bay Harbor", "Swakopmund"],
        description: "A thought-provoking guided tour uniquely designed for cruise ship passengers. Led by Mr. Michael, a descendant of the native Namaqua tribe, exploring Swakopmund 'The little piece of Germany under the African skies'.",
        dates: getNextMonthsFormatted(),
        featured: true,
        routeDetails: "Port - Lagoon - Dune 7 - Swakopmund (full meal) - Historical sites - Free time - Back to port",
        includedItems: ["Guide", "Transportation", "Full meal", "Beverages"],
        meetingPoint: "Walvis Bay Harbor",
        pickupIncluded: false,
      }
    ],
    historical: [
      {
        id: 2,
        title: "Swakopmund City Discovery Tour",
        image: "/Home Images/Swakop Landmarks.jpg",
        price: "$55",
        duration: "5 hours",
        minParticipants: 4,
        maxParticipants: 6,
        locations: ["Swakopmund", "Historical Sites"],
        description: "Explore the rich history and charming architecture of Swakopmund, from its colonial past to its vibrant present. Discover iconic landmarks and hidden gems with our knowledgeable local guides",
        dates: getNextMonthsFormatted(currentMonth + 1),
        featured: false,
        routeDetails: "Historic Jetty - Lighthouse - Woermannhaus - Hohenzollern Building - Old Train Station (Bahnhof) - Swakopmund Museum (exterior) - Local Markets (optional stop)",
        includedItems: ["Guide", "Transportation", "Snacks and drinks"],
        meetingPoint: "Your accommodation in Swakopmund",
        pickupIncluded: true,
      }
    ],

  };

  return (
    <div className="space-y-8">
      <Tabs value={selectedTab} onValueChange={(val) => setSelectedTab(val as "cruise" | "historical")}>
        <TabsList className="bg-sand-custom border border-brown-light w-full justify-start mb-6">
          <TabsTrigger value="cruise" className="font-serif text-base">Cruise Liner</TabsTrigger>
<TabsTrigger value="historical" className="font-serif text-base">City Tour</TabsTrigger>
        </TabsList>
        
        {Object.entries(tours).map(([category, tourList]) => (
          <TabsContent key={category} value={category} className="space-y-6">
            {tourList.map((tour) => (
              <Card key={tour.id} className={`overflow-hidden transition-all ${tour.featured ? 'border-brown-custom shadow-md' : 'border-gravel-medium'} w-full max-w-xs mx-auto sm:max-w-none sm:mx-0`}>
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img 
                      src={tour.image} 
                      alt={tour.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    />
                    {tour.featured && (
                      <div className="absolute top-4 left-0 bg-kalahari-sun text-white py-1 px-3 font-medium flex items-center gap-1 shadow-md">
                        <ThumbsUp size={16} />
                        <span>Recommended</span>
                      </div>
                    )}
                  </div>
                  <div className="md:col-span-2 p-4 sm:p-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-serif text-xl sm:text-2xl text-brown-custom">{tour.title}</h3>
                        {'subtitle' in tour && (
                          <p className="text-sm text-kalahari-charcoal/70 mt-1">{(tour as any).subtitle}</p>
                        )}
                      </div>
                      {tour.featured && (
                        <Badge className="bg-kalahari-brown text-white text-[10px] sm:text-xs px-1.5 py-0.5 sm:px-2 sm:py-1 whitespace-nowrap">Popular Choice</Badge>
                      )}
                    </div>
                    <p className="text-charcoal-custom mb-4 text-sm sm:text-base">{tour.description}</p>

{tour.title === "Swakopmund City Discovery Tour" && (
  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md mb-4">
    <h4 className="text-brown-custom font-semibold mb-1">Includes Township Experience</h4>
    <p className="text-sm text-kalahari-charcoal">
      This City Tour includes a drive through the vibrant township areas of Mondesa, offering you a glimpse into local life, culture, and history as part of the broader Swakopmund experience.
    </p>
  </div>
) }
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-4">
                      <div className="flex items-center text-sm text-charcoal-custom">
                        <Clock size={16} className="mr-2 text-brown-custom" />
                        <span>{tour.duration}</span>
                      </div>
                      <div className="flex items-center text-sm text-charcoal-custom">
                        <Users size={16} className="mr-2 text-brown-custom" />
                        <span>{tour.minParticipants}-{tour.maxParticipants} people</span>
                      </div>
                      <div className="flex items-center text-sm text-charcoal-custom col-span-1 sm:col-span-2">
                        <MapPin size={16} className="mr-2 text-brown-custom flex-shrink-0" />
                        <span className="truncate">{tour.locations.join(", ")}</span>
                      </div>
                    </div>
                    
                    <div className="bg-sand-light/30 p-2 sm:p-3 rounded-md mb-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <h4 className="text-xs sm:text-sm font-medium text-brown-custom mb-1 sm:mb-2">What's Included:</h4>
                          <div className="flex flex-wrap gap-2">
                            {tour.includedItems?.map((item, idx) => (
                              <div key={idx} className="flex items-center text-xs text-charcoal-custom">
                                <Check size={12} className="mr-1 text-green-600" />
                                {item}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-xs sm:text-sm font-medium text-brown-custom mb-1 sm:mb-2">Meeting Point:</h4>
                          <p className="text-xs text-charcoal-custom">
                            {tour.meetingPoint}
                            {tour.pickupIncluded && " (Pickup included)"}
                          </p>
                          {tour.routeDetails && (
                            <>
                              <h4 className="text-xs sm:text-sm font-medium text-brown-custom mt-2 mb-1">Route:</h4>
                              <p className="text-xs text-charcoal-custom">{tour.routeDetails}</p>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <Separator className="my-3 sm:my-4" />
                    
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-4">
                      <div>
                        <p className="text-xs sm:text-sm text-charcoal-custom mb-1">Next available:</p>
                        <div className="flex flex-wrap gap-2">
                          {tour.dates.slice(0, 2).map((date, index) => (
                            <div key={index} className="flex items-center text-xs bg-lightbrown-custom text-darkbrown-custom px-2 py-1 rounded">
                              <Calendar size={12} className="mr-1" />
                              {date}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 mt-3 sm:mt-0">
                        <div className="text-xl sm:text-2xl font-serif text-brown-custom">{tour.price}</div>
                        <Button asChild className="bg-darkbrown-custom hover:bg-brown-custom text-white text-sm sm:text-base">
  <Link to="/contact">Book Now</Link>
</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default ToursList;
