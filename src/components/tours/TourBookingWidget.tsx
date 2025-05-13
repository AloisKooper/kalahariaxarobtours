import React, { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { toast } from "@/components/ui/use-toast";
import { Calendar as CalendarIcon, Users, Ship, CheckCircle, Clock } from "lucide-react";

const TourBookingWidget: React.FC = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [numPeople, setNumPeople] = useState("2");
  const [cruiseShip, setCruiseShip] = useState("");
  const [tourType, setTourType] = useState("cruise-liner");
  const [loading, setLoading] = useState(false);

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
          tourType,
          date: date ? format(date, 'PPP') : '',
          numPeople,
          cruiseShip,
          _subject: `New Tour Booking Request - ${tourType}`,
        }),
      });

      if (response.ok) {
        toast({
          title: "Booking Request Submitted",
          description: "We'll contact you shortly to confirm your booking.",
          variant: "default",
        });
        // Reset form
        setDate(undefined);
        setNumPeople("2");
        setCruiseShip("");
        setTourType("cruise-liner");
      } else {
        throw new Error('Failed to submit booking request');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit booking request. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sticky top-6">
      <Card className="bg-white border-kalahari-brown/10 shadow-md w-full max-w-xs mx-auto sm:max-w-none sm:mx-0">
        <CardHeader className="bg-kalahari-darkbrown text-white">
          <CardTitle className="font-serif text-xl text-center">Book Your Tour</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="tour-type">Select Tour Type</Label>
              <Select value={tourType} onValueChange={setTourType}>
                <SelectTrigger id="tour-type" className="w-full border-gravel-custom">
                  <SelectValue placeholder="Select a tour" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Select Tour</SelectItem>
                  <SelectItem value="local">Swakopmund City Discovery Tour (5 hours)</SelectItem>
                  <SelectItem value="cruise">Cruise Liner Shore Excursion (8 hours)</SelectItem>
                  <SelectItem value="township">Guided Township Tour (4 hours)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="date">Select Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal border-gravel-custom"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4 text-kalahari-brown" />
                    {date ? format(date, "PPP") : <span className="text-kalahari-charcoal/60">Select a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="people">Number of People</Label>
              <Select value={numPeople} onValueChange={setNumPeople}>
                <SelectTrigger className="w-full border-gravel-custom">
                  <SelectValue placeholder="Select number of people" />
                </SelectTrigger>
                <SelectContent>
                  {tourType === "half-day" 
                    ? Array.from({length: 6}, (_, i) => i + 1).map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} {num === 1 ? "person" : "people"}
                        </SelectItem>
                      ))
                    : Array.from({length: 10}, (_, i) => i + 1).map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} {num === 1 ? "person" : "people"}
                        </SelectItem>
                      ))
                  }
                  {tourType === "cruise-liner" && (
                    <SelectItem value="11+">11+ people (Group booking)</SelectItem>
                  )}
                </SelectContent>
              </Select>
            </div>
            
            {tourType === "cruise-liner" && (
              <div className="space-y-2">
                <Label htmlFor="cruise">Cruise Ship Name</Label>
                <div className="relative">
                  <Ship className="absolute left-3 top-3 h-4 w-4 text-kalahari-brown/60" />
                  <Input 
                    id="cruise"
                    value={cruiseShip}
                    onChange={(e) => setCruiseShip(e.target.value)}
                    className="pl-10 border-gravel-custom" 
                    placeholder="Enter your cruise ship name"
                  />
                </div>
              </div>
            )}
            
            <div className="space-y-2 pt-2">
              <Button 
                type="submit" 
                className="w-full bg-kalahari-darkbrown hover:bg-kalahari-brown text-white"
                disabled={loading}
              >
                {loading ? "Processing..." : "Request Booking"}
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-start bg-sand-custom px-6 py-4 border-t border-kalahari-brown/10">
          <h4 className="font-medium text-kalahari-darkbrown mb-2">Tour Information:</h4>
          <ul className="space-y-2 text-sm text-kalahari-charcoal">
            {tourType === "cruise-liner" ? (
              <>
                <li className="flex items-start">
                  <CheckCircle size={16} className="mr-2 text-kalahari-brown mt-0.5 flex-shrink-0" />
                  <span>English speaking local guide (descendant of the native Namaqua tribe)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="mr-2 text-kalahari-brown mt-0.5 flex-shrink-0" />
                  <span>Transportation in air-conditioned vehicle</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="mr-2 text-kalahari-brown mt-0.5 flex-shrink-0" />
                  <span>Full lunch and non-alcoholic beverages</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="mr-2 text-kalahari-brown mt-0.5 flex-shrink-0" />
                  <span>Pickup and drop-off at Walvis Bay Harbor</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="mr-2 text-kalahari-brown mt-0.5 flex-shrink-0" />
                  <span>Maximum 40 travelers</span>
                </li>
              </>
            ) : (
              <>
                <li className="flex items-start">
                  <CheckCircle size={16} className="mr-2 text-kalahari-brown mt-0.5 flex-shrink-0" />
                  <span>English speaking local guide (descendant of the native Namaqua tribe)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="mr-2 text-kalahari-brown mt-0.5 flex-shrink-0" />
                  <span>Transportation in air-conditioned vehicle</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="mr-2 text-kalahari-brown mt-0.5 flex-shrink-0" />
                  <span>Light finger meal and non-alcoholic beverages</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="mr-2 text-kalahari-brown mt-0.5 flex-shrink-0" />
                  <span>Pickup and drop-off at your Swakopmund accommodation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="mr-2 text-kalahari-brown mt-0.5 flex-shrink-0" />
                  <span>Minimum 4, Maximum 6 travelers</span>
                </li>
              </>
            )}
          </ul>
        </CardFooter>
      </Card>
    </div>
  );
};

export default TourBookingWidget;
