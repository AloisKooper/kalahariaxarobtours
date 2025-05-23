import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight, Info } from "lucide-react";
import TourMap from "@/components/maps/TourMap";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    travelers: "",
    hasChildren: "",
    preferredDates: "",
    tourType: ""
  });
  const [loading, setLoading] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedTourType, setSelectedTourType] = useState<"half-day" | "full-day">("full-day");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('https://formspree.io/f/mjkyaogv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Tour Inquiry from ${formData.name}`,
        }),
      });

      if (response.ok) {
        toast({
          title: "Message Sent Successfully",
          description: "Thank you for your inquiry. We'll get back to you shortly.",
          variant: "default",
        });
        setFormData({ 
          name: "", 
          email: "", 
          subject: "", 
          message: "",
          travelers: "",
          hasChildren: "",
          preferredDates: "",
          tourType: ""
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }

  };

  // Tour locations with coordinates
  const tourLocations = [
    {
      id: "port",
      name: "Walvis Bay Harbor (Start/End)",
      coords: { lat: -22.9575, lng: 14.5054 },
      description: "Our meeting point where the tour begins and ends",
      tourTypes: ["full-day"]
    },
    {
      id: "lagoon",
      name: "Walvis Bay Lagoon",
      coords: { lat: -22.9876, lng: 14.4892 },
      description: "Spot flamingos at this beautiful lagoon",
      tourTypes: ["full-day"]
    },
    {
      id: "dune7",
      name: "Dune 7",
      coords: { lat: -23.1098, lng: 14.5906 },
      description: "One of the highest dunes in the Namib Desert",
      tourTypes: ["full-day"]
    },
    {
      id: "swakopmund",
      name: "Swakopmund (Light Meal)",
      coords: { lat: -22.6783, lng: 14.5259 },
      description: "Little piece of Germany under African skies, where we'll have a light meal",
      tourTypes: ["full-day"]
    },
    {
      id: "lighthouse",
      name: "Swakopmund Lighthouse",
      coords: { lat: -22.6807, lng: 14.5243 },
      description: "The striking red-and-white lighthouse, a key navigational aid and town symbol.",
      tourTypes: ["half-day", "full-day"]
    },
    {
      id: "livingmuseum",
      name: "Living Museum (Local Culture)",
      coords: { lat: -22.6750, lng: 14.5290 },
      description: "Experience local traditions and crafts at a living museum or cultural center.",
      tourTypes: ["half-day"]
    },
    {
      id: "localmarkets",
      name: "Craft Markets",
      coords: { lat: -22.6780, lng: 14.5280 },
      description: "Explore vibrant local markets for handmade crafts and souvenirs.",
      tourTypes: ["half-day"]
    },
    {
      id: "jetty",
      name: "Swakopmund Jetty",
      coords: { lat: -22.6825, lng: 14.5176 },
      description: "Iconic pier offering ocean views and a historical landmark.",
      tourTypes: ["half-day", "full-day"]
    },
    {
      id: "woermann",
      name: "Woermann House",
      coords: { lat: -22.6776, lng: 14.5262 },
      description: "Historic building showcasing colonial architecture and city views from its tower.",
      tourTypes: ["half-day", "full-day"]
    },
    {
      id: "warmemorial",
      name: "German War Memorial",
      coords: { lat: -22.6778, lng: 14.5275 },
      description: "Historical German War Memorial site, reflecting a part of the town's past.",
      tourTypes: ["full-day"]
    },
    {
      id: "bahnhof",
      name: "Old Bahnhof (Station)",
      coords: { lat: -22.6751, lng: 14.5319 },
      description: "The beautifully preserved old railway station, a testament to Swakopmund's transport history.",
      tourTypes: ["half-day", "full-day"]
    },

  ];

  const filteredLocations = tourLocations.filter(
    loc => loc.tourTypes.includes(selectedTourType)
  );

  const handleLocationClick = (locationId: string) => {
    setSelectedLocation(selectedLocation === locationId ? null : locationId);
  };
  
  const handleTourTypeChange = (type: "half-day" | "full-day") => {
    setSelectedTourType(type);
    setSelectedLocation(null);
  };

  return (
    <section id="contact" className="bg-gradient-to-b from-gray-50 to-kalahari-sand/40 w-full py-24 px-4 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h3 className="text-gravel text-sm uppercase tracking-widest mb-2">Contact Us</h3>
          <h2 className="text-kalahari-darkbrown text-4xl md:text-5xl font-normal mb-4 text-center">
            Schedule Your City Discovery Tour
          </h2>
          <div className="w-20 h-1 bg-kalahari-brown rounded-full mb-6"></div>
          <p className="text-kalahari-charcoal/80 text-center max-w-2xl">
            For inquiries about our city tour experience or to book a reservation, 
            please fill out the form below or contact us directly. We offer custom 
            tours for cruise ship passengers arriving at Walvis Bay Harbor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          <Card className="lg:col-span-3 bg-white border-gravel-medium shadow-md overflow-hidden">
            <CardContent className="p-0">
              <div className="p-8">
                <h3 className="text-kalahari-brown text-2xl mb-6">Get In Touch</h3>
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-kalahari-charcoal">Full Name</label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        type="text"
                        placeholder="Enter your full name"
                        required
                        className="border-gravel-medium focus-visible:ring-kalahari-brown"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-kalahari-charcoal">Email Address</label>
                      <Input
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="Enter your email address"
                        required
                        className="border-gravel-medium focus-visible:ring-kalahari-brown"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="travelers" className="text-sm font-medium text-kalahari-charcoal">Number of Travelers</label>
                      <Input
                        id="travelers"
                        name="travelers"
                        value={formData.travelers}
                        onChange={handleChange}
                        type="number"
                        min="1"
                        placeholder="How many people in your group?"
                        className="border-gravel-medium focus-visible:ring-kalahari-brown"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="hasChildren" className="text-sm font-medium text-kalahari-charcoal">Children in Group?</label>
                      <select
                        id="hasChildren"
                        name="hasChildren"
                        value={formData.hasChildren}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gravel-medium bg-transparent px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kalahari-brown"
                      >
                        <option value="">Select an option</option>
                        <option value="yes">Yes, with children</option>
                        <option value="no">No children</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="preferredDates" className="text-sm font-medium text-kalahari-charcoal">Preferred Travel Dates</label>
                    <Input
                      id="preferredDates"
                      name="preferredDates"
                      value={formData.preferredDates}
                      onChange={handleChange}
                      type="date"
                      placeholder="When would you like to travel?"
                      className="border-gravel-medium focus-visible:ring-kalahari-brown"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="tourType" className="text-sm font-medium text-kalahari-charcoal">Preferred Tour</label>
                    <select
                      id="tourType"
                      name="tourType"
                      value={formData.tourType}
                      onChange={handleChange}
                      className="w-full rounded-md border border-gravel-medium bg-transparent px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kalahari-brown"
                    >
                      <option value="">Select a tour</option>
                      <option value="half-day">City Discovery Tour - 5 hours</option>
                      <option value="full-day">Cruise Liner Shore Excursion (Full Day) - 8 hours</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-kalahari-charcoal">Subject</label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      type="text"
                      placeholder="What is your inquiry about?"
                      required
                      className="border-gravel-medium focus-visible:ring-kalahari-brown"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-kalahari-charcoal">Your Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please provide details about your inquiry or booking request"
                      required
                      className="min-h-[120px] border-gravel-medium focus-visible:ring-kalahari-brown"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={loading}
                    className="group bg-kalahari-darkbrown hover:bg-kalahari-brown transition-colors inline-flex items-center gap-2 text-white font-medium px-6 py-3 rounded-full w-full justify-center"
                  >
                    <span>{loading ? "Sending..." : "Send Message"}</span>
                    <ArrowRight 
                      size={18} 
                      className="transform group-hover:translate-x-1 transition-transform"
                    />
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>

          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-sand-custom p-8 rounded-lg border border-kalahari-brown/20 w-full max-w-xs mx-auto sm:max-w-none sm:mx-0">
              <h3 className="text-kalahari-brown text-2xl mb-6">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-kalahari-brown/10 p-3 rounded-full flex-shrink-0">
                    <Phone className="text-kalahari-brown h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-kalahari-darkbrown">Phone</h4>
                    <p className="text-kalahari-charcoal mt-1 break-words">+264 81 145 6397</p>
                    <p className="text-kalahari-charcoal/70 text-sm">Available Mon-Fri, 9am-6pm</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-kalahari-brown/10 p-3 rounded-full flex-shrink-0">
                    <Mail className="text-kalahari-brown h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-kalahari-darkbrown">Email</h4>
                    <p className="text-kalahari-charcoal mt-1 break-all text-sm">
                      <span className="inline-block">Kalahariaxarobtours@gmail.com</span>
                    </p>
                    <p className="text-kalahari-charcoal/70 text-sm">We respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-kalahari-brown/10 p-3 rounded-full flex-shrink-0">
                    <MapPin className="text-kalahari-brown h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-kalahari-darkbrown">Location</h4>
                    <p className="text-kalahari-charcoal mt-1 break-words">Swakopmund, Namibia</p>
                    <p className="text-kalahari-charcoal mt-1 break-words">Meeting Point: Walvis Bay Harbor</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-kalahari-darkbrown text-white p-8 rounded-lg w-full max-w-xs mx-auto sm:max-w-none sm:mx-0">
              <div className="flex items-center gap-3 mb-5">
                <Clock className="h-5 w-5" />
                <h3 className="text-2xl">Tour Hours</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span>Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span>Saturday</span>
                  <span className="font-medium">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span>Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
                <div className="pt-4 mt-4">
                  <p className="text-white/80 text-sm flex items-start gap-2">
                    <CheckCircle size={16} className="mt-0.5 flex-shrink-0" />
                    <span>
                      Tour scheduling depends on cruise ship arrivals. 
                      Please contact us in advance to confirm availability.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tour Route Map Section */}
        <div className="mt-16 max-w-full">
          <h3 className="text-gravel text-sm uppercase tracking-widest mb-2 text-center">Tour Itinerary</h3>
          <h2 className="text-kalahari-darkbrown text-4xl md:text-5xl font-normal mb-4 text-center">
            Our Tour Route
          </h2>
          <div className="w-20 h-1 bg-kalahari-brown rounded-full mb-6 mx-auto"></div>
          <p className="text-kalahari-charcoal text-center max-w-2xl mx-auto mb-4">
            Explore the fascinating locations you'll visit on our city tour, from Walvis Bay Harbor to Swakopmund and back.
          </p>
          
          {/* Tour Type Selector */}
          <div className="flex justify-center gap-4 mb-6">
            <button 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedTourType === "half-day" 
                  ? 'bg-kalahari-brown text-white' 
                  : 'bg-sand-custom text-kalahari-brown hover:bg-kalahari-sand'
              }`}
              onClick={() => handleTourTypeChange("half-day")}
            >
              City Discovery Tour (5 hours)
            </button>
            <button 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedTourType === "full-day" 
                  ? 'bg-kalahari-brown text-white' 
                  : 'bg-sand-custom text-kalahari-brown hover:bg-kalahari-sand'
              }`}
              onClick={() => handleTourTypeChange("full-day")}
            >
              Shore Excursion (8 hours)
            </button>

          </div>
          
          <div className="overflow-hidden relative rounded-lg shadow-md">
            {/* Map Section */}
            <div className="h-[400px] bg-white">
              <TourMap 
                locations={filteredLocations}
                selectedLocation={selectedLocation}
                onLocationSelect={handleLocationClick}
              />
            </div>
            
            {/* Tour Locations Panel - Desktop and Tablet Only */}
            <div className="absolute top-0 right-0 hidden md:block w-72 bg-white/90 backdrop-blur-sm h-full overflow-y-auto border-l border-kalahari-sand/40 shadow-lg p-4">
              <h4 className="text-kalahari-brown text-lg font-medium mb-4">
                {selectedTourType === "half-day" ? "Half Day Tour Stops" : "Full Day Tour Stops"}
              </h4>
              <div className="space-y-2">
                {filteredLocations.map((location, index) => (
                  <div 
                    key={location.id}
                    className={`p-2 rounded-md cursor-pointer transition-colors ${
                      selectedLocation === location.id 
                        ? 'bg-kalahari-brown text-white' 
                        : 'bg-sand-custom hover:bg-kalahari-sand/30'
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
                        {location.description}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Map Key/Legend */}
            <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-md p-3">
              <div className="flex items-center gap-3">
                <Info size={16} className="text-kalahari-brown" />
                <span className="text-xs font-medium text-kalahari-charcoal">
                  Click on a location to learn more
                </span>
              </div>
            </div>
          </div>
          
          {/* Mobile Tour Stops - Simple Horizontal Scroll */}
          <div className="md:hidden mt-4 mb-6 max-w-full">
            <h4 className="text-kalahari-brown text-lg font-medium mb-3 text-center">
              {selectedTourType === "half-day" ? "Half Day Tour Stops" : "Full Day Tour Stops"}
            </h4>
            
            {/* Clean horizontal scrollable container */}
            <div className="overflow-x-auto pb-2">
              <div className="flex gap-2 min-w-max">
                {filteredLocations.map((location, index) => (
                  <div 
                    key={location.id}
                    className={`p-2 rounded-md cursor-pointer transition-colors shrink-0 ${
                      selectedLocation === location.id 
                        ? 'bg-kalahari-brown text-white' 
                        : 'bg-sand-custom hover:bg-kalahari-sand/30'
                    }`}
                    style={{ minWidth: '140px' }}
                    onClick={() => handleLocationClick(location.id)}
                  >
                    <div className="flex items-center gap-1">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        selectedLocation === location.id 
                          ? 'bg-white text-kalahari-brown' 
                          : 'bg-kalahari-brown/10 text-kalahari-brown'
                      }`}>
                        {index + 1}
                      </div>
                      <span className="font-medium text-sm whitespace-nowrap">{location.name.split('(')[0]}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Mobile Selected Location Description */}
            {selectedLocation && (
              <div className="bg-white p-3 rounded-md shadow-sm mt-4">
                <h5 className="font-medium text-kalahari-brown">
                  {tourLocations.find(loc => loc.id === selectedLocation)?.name}
                </h5>
                <p className="text-sm text-kalahari-charcoal mt-1">
                  {tourLocations.find(loc => loc.id === selectedLocation)?.description}
                </p>
              </div>
            )}
          </div>
          
          {/* Tour Route Path */}
          <div className="mt-6 bg-white/80 rounded-lg p-4 shadow-sm">
            <h4 className="text-kalahari-brown text-lg font-medium mb-2">Tour Route</h4>
            <div className="text-xs sm:text-sm text-kalahari-charcoal border-t border-gray-200 pt-4 space-y-1">
              {selectedTourType === "full-day" && (
                <>
                  <p className=""><strong>Shore Excursion Route:</strong></p>
                  <p className="text-kalahari-charcoal text-sm sm:text-base">
                    Port - Lagoon - Dune 7 - Swakopmund (light meal) - Concentration camp mass graves - Old Military barracks - Old Hospital - Jetty - Woermann House - German War Memorial - Free time - Old Bahnhof - Back to the port
                  </p>
                </>
              )}
              {selectedTourType === "half-day" && (
                <>
                  <p className=""><strong>City Tour Route:</strong></p>
                  <p className="text-kalahari-charcoal text-sm sm:text-base">
                    Swakopmund Jetty - Woermann House - Old Bahnhof (Station) - Swakopmund Lighthouse - Living Museum (Local Culture) - Craft Markets
                  </p>
                </>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
