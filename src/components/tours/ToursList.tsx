
import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, Calendar, ChevronRight } from "lucide-react";

const ToursList: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("historical");

  const tours = {
    historical: [
      {
        id: 1,
        title: "Swakopmund Heritage Tour",
        image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80",
        price: "$120",
        duration: "8 hours",
        maxParticipants: 20,
        locations: ["Walvis Bay Harbor", "Swakopmund", "Genocide Memorial"],
        description: "Explore the historical sites commemorating the 1904-1908 Nama and Ovaherero Genocide, regarded as the first genocide of the 20th century.",
        dates: ["Jun 15, 2023", "Jul 10, 2023", "Aug 5, 2023"],
        featured: true,
      },
      {
        id: 2,
        title: "Colonial Architecture Tour",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
        price: "$95",
        duration: "6 hours",
        maxParticipants: 15,
        locations: ["Swakopmund Town", "Old Military Barracks", "Woermann House"],
        description: "Discover the unique German colonial architecture that makes Swakopmund 'The little piece of Germany under African skies'.",
        dates: ["Jun 20, 2023", "Jul 15, 2023", "Aug 10, 2023"],
        featured: false,
      },
    ],
    cultural: [
      {
        id: 3,
        title: "Mondesa Township Experience",
        image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80",
        price: "$85",
        duration: "5 hours",
        maxParticipants: 12,
        locations: ["Mondesa Township", "Local Community Center"],
        description: "Experience the vibrant culture of Mondesa Township, interact with locals, and learn about daily life in this community.",
        dates: ["Jun 18, 2023", "Jul 12, 2023", "Aug 8, 2023"],
        featured: true,
      },
      {
        id: 4,
        title: "DRC Township Tour",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
        price: "$75",
        duration: "4 hours",
        maxParticipants: 10,
        locations: ["Democratic Resettlement Community"],
        description: "Discover the Democratic Resettlement Community (DRC) Township, an informal settlement where you'll gain insight into the challenges and resilience of the community members.",
        dates: ["Jun 22, 2023", "Jul 17, 2023", "Aug 12, 2023"],
        featured: false,
      },
    ],
    nature: [
      {
        id: 5,
        title: "Walvis Bay Lagoon & Dune 7",
        image: "https://images.unsplash.com/photo-1504432842672-1a79f78e4084?auto=format&fit=crop&w=800&q=80",
        price: "$110",
        duration: "7 hours",
        maxParticipants: 18,
        locations: ["Walvis Bay Lagoon", "Dune 7", "Sandwich Harbor"],
        description: "Witness the flamingos at Walvis Bay Lagoon and climb the famous Dune 7, the highest dune in Namibia.",
        dates: ["Jun 25, 2023", "Jul 20, 2023", "Aug 15, 2023"],
        featured: true,
      },
    ],
  };

  return (
    <div className="space-y-8">
      <Tabs defaultValue="historical" onValueChange={setSelectedTab}>
        <TabsList className="bg-kalahari-sand/30 border border-kalahari-brown/20 w-full justify-start mb-6">
          <TabsTrigger value="historical" className="font-serif text-base">Historical</TabsTrigger>
          <TabsTrigger value="cultural" className="font-serif text-base">Cultural</TabsTrigger>
          <TabsTrigger value="nature" className="font-serif text-base">Nature</TabsTrigger>
        </TabsList>
        
        {Object.entries(tours).map(([category, tourList]) => (
          <TabsContent key={category} value={category} className="space-y-6">
            {tourList.map((tour) => (
              <Card key={tour.id} className={`overflow-hidden transition-all ${tour.featured ? 'border-kalahari-brown/30 shadow-md' : 'border-kalahari-gravel/20'}`}>
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="h-64 md:h-auto overflow-hidden">
                    <img 
                      src={tour.image} 
                      alt={tour.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                  <div className="md:col-span-2 p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-serif text-2xl text-kalahari-brown">{tour.title}</h3>
                      {tour.featured && (
                        <Badge className="bg-kalahari-accent text-kalahari-charcoal">Featured</Badge>
                      )}
                    </div>
                    <p className="text-kalahari-charcoal/80 mb-4">{tour.description}</p>
                    
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="flex items-center text-sm text-kalahari-charcoal/80">
                        <Clock size={16} className="mr-2 text-kalahari-brown" />
                        <span>{tour.duration}</span>
                      </div>
                      <div className="flex items-center text-sm text-kalahari-charcoal/80">
                        <Users size={16} className="mr-2 text-kalahari-brown" />
                        <span>Max {tour.maxParticipants} people</span>
                      </div>
                      <div className="flex items-center text-sm text-kalahari-charcoal/80 col-span-2">
                        <MapPin size={16} className="mr-2 text-kalahari-brown flex-shrink-0" />
                        <span className="truncate">{tour.locations.join(", ")}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {tour.dates.map((date, index) => (
                        <div key={index} className="flex items-center text-xs bg-kalahari-lightbrown/20 text-kalahari-darkbrown px-2 py-1 rounded">
                          <Calendar size={12} className="mr-1" />
                          {date}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center mt-4">
                      <div className="text-2xl font-serif text-kalahari-brown">{tour.price}<span className="text-sm text-kalahari-charcoal/60 ml-1">per person</span></div>
                      <Button className="bg-kalahari-darkbrown hover:bg-kalahari-brown text-white flex items-center gap-1">
                        Book Now <ChevronRight size={16} />
                      </Button>
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
