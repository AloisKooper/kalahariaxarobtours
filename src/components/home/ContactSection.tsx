import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight, Info } from "lucide-react";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    travelers: "",
    hasChildren: "",
    preferredDates: ""
  });
  const [loading, setLoading] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
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
        preferredDates: "" 
      });
      setLoading(false);
    }, 1500);
  };

  // Tour locations with coordinates
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
    <section id="contact" className="bg-gradient-to-b from-white to-kalahari-sand/30 w-full py-24 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h3 className="text-kalahari-gravel text-sm uppercase tracking-widest mb-2">Contact Us</h3>
          <h2 className="text-kalahari-darkbrown text-4xl md:text-5xl font-normal mb-4 text-center">
            Schedule Your Historical Tour
          </h2>
          <div className="w-20 h-1 bg-kalahari-brown rounded-full mb-6"></div>
          <p className="text-kalahari-charcoal/80 text-center max-w-2xl">
            For inquiries about our historic tour experience or to book a reservation, 
            please fill out the form below or contact us directly. We offer custom 
            tours for cruise ship passengers arriving at Walvis Bay Harbor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          <Card className="lg:col-span-3 bg-white border-kalahari-gravel/20 shadow-md overflow-hidden">
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
                        className="border-kalahari-gravel/20 focus-visible:ring-kalahari-brown"
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
                        className="border-kalahari-gravel/20 focus-visible:ring-kalahari-brown"
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
                        className="border-kalahari-gravel/20 focus-visible:ring-kalahari-brown"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="hasChildren" className="text-sm font-medium text-kalahari-charcoal">Children in Group?</label>
                      <select
                        id="hasChildren"
                        name="hasChildren"
                        value={formData.hasChildren}
                        onChange={handleChange}
                        className="w-full rounded-md border border-kalahari-gravel/20 bg-transparent px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kalahari-brown"
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
                      className="border-kalahari-gravel/20 focus-visible:ring-kalahari-brown"
                    />
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
                      className="border-kalahari-gravel/20 focus-visible:ring-kalahari-brown"
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
                      className="min-h-[120px] border-kalahari-gravel/20 focus-visible:ring-kalahari-brown"
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
            <div className="bg-kalahari-sand/30 p-8 rounded-lg border border-kalahari-brown/20">
              <h3 className="text-kalahari-brown text-2xl mb-6">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-kalahari-brown/10 p-3 rounded-full flex-shrink-0">
                    <Phone className="text-kalahari-brown h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-kalahari-darkbrown">Phone</h4>
                    <p className="text-kalahari-charcoal mt-1">+264 123 456 789</p>
                    <p className="text-kalahari-charcoal/70 text-sm">Available Mon-Fri, 9am-6pm</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-kalahari-brown/10 p-3 rounded-full flex-shrink-0">
                    <Mail className="text-kalahari-brown h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-kalahari-darkbrown">Email</h4>
                    <p className="text-kalahari-charcoal mt-1">Kalahariaxarobtours@gmail.com</p>
                    <p className="text-kalahari-charcoal/70 text-sm">We respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-kalahari-brown/10 p-3 rounded-full flex-shrink-0">
                    <MapPin className="text-kalahari-brown h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-kalahari-darkbrown">Location</h4>
                    <p className="text-kalahari-charcoal mt-1">Swakopmund, Namibia</p>
                    <p className="text-kalahari-charcoal mt-1">Meeting Point: Walvis Bay Harbor</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-kalahari-darkbrown text-white p-8 rounded-lg">
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
        <div className="mt-16">
          <h3 className="text-kalahari-gravel text-sm uppercase tracking-widest mb-2 text-center">Tour Itinerary</h3>
          <h2 className="text-kalahari-darkbrown text-4xl md:text-5xl font-normal mb-4 text-center">
            Our Tour Route
          </h2>
          <div className="w-20 h-1 bg-kalahari-brown rounded-full mb-6 mx-auto"></div>
          <p className="text-kalahari-charcoal text-center max-w-2xl mx-auto mb-8">
            Explore the fascinating locations you'll visit on our historical tour, from Walvis Bay Harbor to Swakopmund and back.
          </p>
          
          <div className="relative rounded-lg overflow-hidden shadow-md">
            {/* Map Section */}
            <div className="h-[400px] bg-white">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212968.0112171975!2d14.386106529945831!3d-22.82752774230846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1c76a3c1254322d9%3A0x58fc7006ee1e550a!2sSwakopmund%2C%20Namibia!5e0!3m2!1sen!2sus!4v1652452289252!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Tour Route Map"
              ></iframe>
            </div>
            
            {/* Tour Locations Panel */}
            <div className="absolute top-0 right-0 w-full md:w-72 bg-white/90 backdrop-blur-sm h-full overflow-y-auto border-l border-kalahari-sand/40 shadow-lg p-4">
              <h4 className="text-kalahari-brown text-lg font-medium mb-4">Tour Stops</h4>
              <div className="space-y-2">
                {tourLocations.map((location, index) => (
                  <div 
                    key={location.id}
                    className={`p-2 rounded-md cursor-pointer transition-colors ${
                      selectedLocation === location.id 
                        ? 'bg-kalahari-brown text-white' 
                        : 'bg-white/80 hover:bg-kalahari-sand/30'
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
          
          {/* Tour Route Path */}
          <div className="mt-6 bg-white/80 rounded-lg p-4 shadow-sm">
            <h4 className="text-kalahari-brown text-lg font-medium mb-2">Tour Route</h4>
            <p className="text-kalahari-charcoal text-sm">
              Port - Lagoon - Dune 7 - Swakopmund (lunch) - Concentration camp mass graves - Old Military barracks - 
              Old Hospital - Jetty - Woermann House - German War Memorial - Free time - Old Bahnhof - Back to the port
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
