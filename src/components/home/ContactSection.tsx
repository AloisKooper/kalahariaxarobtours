
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection: React.FC = () => {
  return (
    <section className="bg-kalahari-gravel/5 w-full py-20 px-6 max-md:py-16">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-8">
          <h3 className="text-kalahari-gravel text-xl mb-2 uppercase tracking-wide">
            Contact Us
          </h3>
          <h2 className="font-serif text-kalahari-darkbrown text-4xl md:text-5xl mb-4 text-center">
            Schedule Your Historical Tour
          </h2>
          <div className="w-20 h-1 bg-kalahari-brown rounded-full mb-6"></div>
          <p className="text-kalahari-charcoal/80 text-center max-w-2xl">
            For inquiries about our historic tour experience or to book a reservation, 
            please fill out the form below or contact us directly. We offer custom 
            tours for cruise ship passengers arriving at Walvis Bay Harbor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="bg-white border-kalahari-gravel/20 shadow-md overflow-hidden">
            <CardContent className="p-0">
              <div className="p-8">
                <h3 className="font-serif text-kalahari-brown text-2xl mb-6">Get In Touch</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        type="text"
                        placeholder="Full Name"
                        className="border-kalahari-gravel/20 focus:border-kalahari-brown"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Email Address"
                        className="border-kalahari-gravel/20 focus:border-kalahari-brown"
                      />
                    </div>
                  </div>
                  <div>
                    <Input
                      type="text"
                      placeholder="Subject"
                      className="border-kalahari-gravel/20 focus:border-kalahari-brown"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      className="min-h-[120px] border-kalahari-gravel/20 focus:border-kalahari-brown"
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="group bg-kalahari-darkbrown hover:bg-kalahari-brown transition-colors inline-flex items-center gap-2 text-white font-medium px-6 py-3 rounded-full w-full justify-center"
                  >
                    <span>Send Message</span>
                    <svg 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="transform group-hover:translate-x-1 transition-transform"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </form>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col">
            <div className="bg-kalahari-sand/30 p-8 rounded-lg border border-kalahari-brown/20 mb-6">
              <h3 className="font-serif text-kalahari-brown text-2xl mb-4">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-kalahari-brown/10 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-kalahari-brown">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-kalahari-darkbrown">Phone</h4>
                    <p className="text-kalahari-charcoal">+264 123 456 789</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-kalahari-brown/10 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-kalahari-brown">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-kalahari-darkbrown">Email</h4>
                    <p className="text-kalahari-charcoal">info@kalahariaxarobtours.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-kalahari-brown/10 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-kalahari-brown">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-kalahari-darkbrown">Location</h4>
                    <p className="text-kalahari-charcoal">Swakopmund, Namibia</p>
                    <p className="text-kalahari-charcoal">Meeting Point: Walvis Bay Harbor</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-kalahari-darkbrown text-white p-8 rounded-lg">
              <h3 className="font-serif text-2xl mb-4">Tour Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
                <div className="pt-4 mt-4 border-t border-white/20">
                  <p className="text-white/80">
                    Note: Tour scheduling depends on cruise ship arrivals. 
                    Please contact us in advance to confirm availability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
