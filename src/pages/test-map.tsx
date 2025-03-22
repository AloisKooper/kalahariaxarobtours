import React, { useState } from "react";
import TourMap from "@/components/maps/TourMap";

// Test component to verify the TourMap functionality
const TestMapPage: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  
  // Tour locations with coordinates - copied from ContactSection
  const tourLocations = [
    {
      id: "port",
      name: "Walvis Bay Harbor (Start/End)",
      coords: { lat: -22.9575, lng: 14.5054 },
      description: "Our meeting point where the tour begins and ends"
    },
    {
      id: "lagoon",
      name: "Walvis Bay Lagoon",
      coords: { lat: -22.9876, lng: 14.4892 },
      description: "Spot flamingos at this beautiful lagoon"
    },
    {
      id: "dune7",
      name: "Dune 7",
      coords: { lat: -23.1098, lng: 14.5906 },
      description: "One of the highest dunes in the Namib Desert"
    },
    {
      id: "swakopmund",
      name: "Swakopmund (Lunch)",
      coords: { lat: -22.6783, lng: 14.5259 },
      description: "Little piece of Germany under African skies, where we'll have lunch"
    },
    {
      id: "graves",
      name: "Concentration Camp Mass Graves",
      coords: { lat: -22.6741, lng: 14.5311 },
      description: "Historical site related to the 1904-1908 genocide"
    },
    {
      id: "barracks",
      name: "Old Military Barracks",
      coords: { lat: -22.6789, lng: 14.5324 },
      description: "Historical German colonial military structure"
    },
    {
      id: "hospital",
      name: "Old Hospital",
      coords: { lat: -22.6771, lng: 14.5287 },
      description: "Historical medical facility from colonial era"
    },
    {
      id: "jetty",
      name: "Jetty",
      coords: { lat: -22.6825, lng: 14.5176 },
      description: "Historic wooden pier extending into the Atlantic Ocean"
    },
    {
      id: "woermann",
      name: "Woermann House",
      coords: { lat: -22.6776, lng: 14.5262 },
      description: "Iconic colonial-era building with distinctive architecture"
    },
    {
      id: "memorial",
      name: "German War Memorial",
      coords: { lat: -22.6763, lng: 14.5292 },
      description: "Monument commemorating historical events"
    },
    {
      id: "bahnhof",
      name: "Old Bahnhof (Train Station)",
      coords: { lat: -22.6751, lng: 14.5319 },
      description: "Historic German railway station"
    }
  ];

  const handleLocationClick = (locationId: string) => {
    setSelectedLocation(selectedLocation === locationId ? null : locationId);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-kalahari-brown mb-4">
        Tour Map Test Page
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="col-span-1 md:col-span-2">
          <div className="h-[600px] rounded-lg overflow-hidden shadow-md">
            <TourMap 
              locations={tourLocations}
              selectedLocation={selectedLocation}
              onLocationSelect={handleLocationClick}
            />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold text-kalahari-brown mb-4">Tour Locations</h2>
          <div className="space-y-2">
            {tourLocations.map((location, index) => (
              <div 
                key={location.id}
                className={`p-3 rounded-md cursor-pointer transition-colors ${
                  selectedLocation === location.id 
                    ? 'bg-kalahari-brown text-white' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
                onClick={() => handleLocationClick(location.id)}
              >
                <div className="flex items-center gap-2">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                    selectedLocation === location.id 
                      ? 'bg-white text-kalahari-brown' 
                      : 'bg-kalahari-brown/10 text-kalahari-brown'
                  }`}>
                    {index + 1}
                  </div>
                  <span className="font-medium">{location.name}</span>
                </div>
                
                {selectedLocation === location.id && (
                  <div className="mt-2 pl-8 text-sm">
                    <p className="mb-1">{location.description}</p>
                    <p className="text-xs opacity-70">
                      Coordinates: {location.coords.lat.toFixed(4)}, {location.coords.lng.toFixed(4)}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="bg-sand-custom p-4 rounded-lg">
        <h2 className="text-xl font-semibold text-kalahari-brown mb-2">Test Instructions</h2>
        <p className="mb-2">
          This page tests the TourMap component with the following features:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Click on a location in the list to select it</li>
          <li>The map will focus on the selected location</li>
          <li>Click on a map marker to select that location</li>
          <li>A route line connects all locations in order</li>
          <li>Responsive design for different screen sizes</li>
        </ul>
      </div>
    </div>
  );
};

export default TestMapPage; 