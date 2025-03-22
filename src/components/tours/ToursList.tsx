import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, Calendar, ChevronRight, ThumbsUp, Check } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const ToursList: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("historical");

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
    historical: [
      {
        id: 1,
        title: "Passenger Liner Shore Excursion",
        image: "/Home Images/Cruise Liner Shore Excursion.jpg",
        price: "$120",
        duration: "8 hours",
        maxParticipants: 20,
        locations: ["Walvis Bay Harbor", "Swakopmund"],
        description: "An eye-opening guided tour filled with historical and cultural information, uniquely designed for cruise ship passengers. Led by Mr. Rooi, a descendant of the native Namaqua tribe, exploring Swakopmund 'The little piece of Germany under the African skies'.",
        dates: getNextMonthsFormatted(),
        featured: true,
        routeDetails: "Port - Lagoon - Dune 7 - Swakopmund (lunch) - Historical sites - Free time - Back to port",
        includedItems: ["Guide", "Transportation", "Lunch", "Beverages"],
        meetingPoint: "Walvis Bay Harbor",
        pickupIncluded: false,
      },
      {
        id: 2,
        title: "Half Day Local Tour",
        image: "/Home Images/Half Day Tour.jpg",
        price: "$75",
        duration: "4 hours",
        maxParticipants: 6,
        locations: ["Swakopmund", "Historical Sites"],
        description: "An eye-opening guided tour exploring significant historical sites in Swakopmund related to the 1904/1908 Nama and Ovaherero Genocide. Led by Mr. Rooi, a descendant of the native Namaqua tribe.",
        dates: getNextMonthsFormatted(currentMonth + 1),
        featured: false,
        routeDetails: "Concentration camp mass graves - Military barracks - Historic buildings - Monuments",
        includedItems: ["Guide", "Transportation", "Light meal", "Beverages"],
        meetingPoint: "Your accommodation in Swakopmund",
        pickupIncluded: true,
      },
      {
        id: 6,
        title: "Historical Genocide Sites",
        subtitle: "Part of our Half Day Tour",
        image: "/Home Images/Nama and Ovaherero Genocide.jpg",
        price: "$75",
        duration: "4 hours",
        maxParticipants: 6,
        locations: ["Swakopmund", "Concentration Camp Graves"],
        description: "Focus specifically on the sites related to the 1904-1908 Nama and Ovaherero Genocide, regarded as the first genocide of the 20th century. Learn about this important historical period and its impact on Namibia today.",
        dates: getNextMonthsFormatted(currentMonth + 1),
        featured: false,
        routeDetails: "Concentration camp mass graves - Military barracks - Old Hospital - Commemorative sites",
        includedItems: ["Guide", "Transportation", "Light meal", "Beverages"],
        meetingPoint: "Your accommodation in Swakopmund",
        pickupIncluded: true,
      },
    ],
    cultural: [
      {
        id: 3,
        title: "Cultural & Historical Tour Experience",
        subtitle: "Part of our Half Day Tour",
        image: "/Home Images/Cultural Tour.png",
        price: "$75",
        duration: "4 hours",
        maxParticipants: 6,
        locations: ["Swakopmund", "Cultural & Historical Sites"],
        description: "Explore the rich cultural heritage of Swakopmund with our local guide. This tour combines historical sites with cultural insights, focusing on the history of the Nama and Ovaherero peoples.",
        dates: getNextMonthsFormatted(),
        featured: true,
        includedItems: ["Guide", "Transportation", "Light meal", "Beverages"],
        meetingPoint: "Your accommodation in Swakopmund",
        pickupIncluded: true,
      },
      {
        id: 7,
        title: "German Colonial Architecture",
        subtitle: "Part of our Shore Excursion",
        image: "/Home Images/German Architecture.jpg",
        price: "$120",
        duration: "8 hours",
        maxParticipants: 20,
        locations: ["Swakopmund", "Colonial District"],
        description: "Discover Swakopmund's unique German colonial architecture on this cultural exploration. See well-preserved buildings from the early 1900s while learning about the colonial influence on Namibian history and culture.",
        dates: getNextMonthsFormatted(),
        featured: false,
        includedItems: ["Guide", "Transportation", "Lunch", "Beverages"],
        meetingPoint: "Walvis Bay Harbor",
        pickupIncluded: false,
      },
    ],
    nature: [
      {
        id: 5,
        title: "Walvis Bay Lagoon & Dune 7",
        subtitle: "Included in Shore Excursion",
        image: "/Home Images/Flamingo.jpg",
        price: "$120",
        duration: "8 hours",
        maxParticipants: 20,
        locations: ["Walvis Bay Lagoon", "Dune 7", "Swakopmund"],
        description: "Witness thousands of flamingos at Walvis Bay Lagoon and climb famous Dune 7. This natural experience is included as part of our full-day Shore Excursion tour.",
        dates: getNextMonthsFormatted(),
        featured: true,
        includedItems: ["Guide", "Transportation", "Lunch", "Beverages"],
        meetingPoint: "Walvis Bay Harbor",
        pickupIncluded: false,
      },
    ],
  };

  return (
    <div className="space-y-8">
      <Tabs defaultValue="historical" onValueChange={setSelectedTab}>
        <TabsList className="bg-sand-custom border border-brown-light w-full justify-start mb-6">
          <TabsTrigger value="historical" className="font-serif text-base">Historical</TabsTrigger>
          <TabsTrigger value="cultural" className="font-serif text-base">Cultural</TabsTrigger>
          <TabsTrigger value="nature" className="font-serif text-base">Nature</TabsTrigger>
        </TabsList>
        
        {Object.entries(tours).map(([category, tourList]) => (
          <TabsContent key={category} value={category} className="space-y-6">
            {tourList.map((tour) => (
              <Card key={tour.id} className={`overflow-hidden transition-all ${tour.featured ? 'border-brown-custom shadow-md' : 'border-gravel-medium'}`}>
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
                        {tour.subtitle && (
                          <p className="text-sm text-kalahari-charcoal/70 mt-1">{tour.subtitle}</p>
                        )}
                      </div>
                      {tour.featured && (
                        <Badge className="bg-kalahari-brown text-white text-[10px] sm:text-xs px-1.5 py-0.5 sm:px-2 sm:py-1 whitespace-nowrap">Popular Choice</Badge>
                      )}
                    </div>
                    <p className="text-charcoal-custom mb-4 text-sm sm:text-base">{tour.description}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-4">
                      <div className="flex items-center text-sm text-charcoal-custom">
                        <Clock size={16} className="mr-2 text-brown-custom" />
                        <span>{tour.duration}</span>
                      </div>
                      <div className="flex items-center text-sm text-charcoal-custom">
                        <Users size={16} className="mr-2 text-brown-custom" />
                        <span>Max {tour.maxParticipants} people</span>
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
                        <Button className="bg-darkbrown-custom hover:bg-brown-custom text-white text-sm sm:text-base">
                          Book Now
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
