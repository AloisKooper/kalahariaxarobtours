
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight } from "lucide-react";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      setFormData({ name: "", email: "", subject: "", message: "" });
      setLoading(false);
    }, 1500);
  };

  return (
    <section id="contact" className="bg-gradient-to-b from-white to-kalahari-sand/30 w-full py-24 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h3 className="text-kalahari-gravel text-sm uppercase tracking-widest mb-2">Contact Us</h3>
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

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          <Card className="lg:col-span-3 bg-white border-kalahari-gravel/20 shadow-md overflow-hidden">
            <CardContent className="p-0">
              <div className="p-8">
                <h3 className="font-serif text-kalahari-brown text-2xl mb-6">Get In Touch</h3>
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
              <h3 className="font-serif text-kalahari-brown text-2xl mb-6">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-kalahari-brown/10 p-3 rounded-full flex-shrink-0">
                    <Phone className="text-kalahari-brown h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-kalahari-darkbrown">Phone</h4>
                    <p className="text-kalahari-charcoal mt-1">+264 123 456 789</p>
                    <p className="text-kalahari-charcoal/70 text-sm">Available Mon-Fri, 9am-6pm</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-kalahari-brown/10 p-3 rounded-full flex-shrink-0">
                    <Mail className="text-kalahari-brown h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-kalahari-darkbrown">Email</h4>
                    <p className="text-kalahari-charcoal mt-1">info@kalahariaxarobtours.com</p>
                    <p className="text-kalahari-charcoal/70 text-sm">We respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-kalahari-brown/10 p-3 rounded-full flex-shrink-0">
                    <MapPin className="text-kalahari-brown h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-kalahari-darkbrown">Location</h4>
                    <p className="text-kalahari-charcoal mt-1">Swakopmund, Namibia</p>
                    <p className="text-kalahari-charcoal mt-1">Meeting Point: Walvis Bay Harbor</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-kalahari-darkbrown text-white p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-5">
                <Clock className="h-5 w-5" />
                <h3 className="font-serif text-2xl">Tour Hours</h3>
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
        
        <div className="mt-16 relative h-[400px] rounded-lg overflow-hidden shadow-md">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29903.459200966!2d14.50542765!3d-22.95751675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1c7658ef0b44d78f%3A0xde9e043bc9595cec!2sWalvis%20Bay%2C%20Namibia!5e0!3m2!1sen!2sus!4v1652452289252!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Map of Walvis Bay Harbor"
          ></iframe>
          <div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-serif text-kalahari-brown">Meeting Point</h4>
            <p className="text-kalahari-charcoal text-sm">Walvis Bay Harbor, Namibia</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
