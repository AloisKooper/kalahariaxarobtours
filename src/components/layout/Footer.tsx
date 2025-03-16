import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() !== "") {
      // Simulate subscription
      setSubscribed(true);
      setEmail("");
      
      // Reset after 5 seconds
      setTimeout(() => {
        setSubscribed(false);
      }, 5000);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-kalahari-gravel/10 to-kalahari-gravel/30 w-full overflow-hidden pt-16 pb-8 px-8 border-t border-kalahari-sand/50 max-md:px-5">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto">
        {/* Top section with logo, about, and newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Logo and About */}
          <div className="md:col-span-4">
            <Link to="/" className="inline-block">
              <img
                src="/Home Images/axarob tours.png"
                alt="Kalahari Axarob Tours Logo"
                className="h-20 object-contain mb-6"
              />
            </Link>
            <p className="text-kalahari-charcoal/80 mb-6 max-w-md">
              Experience the rich history and culture of Namibia with our expert guides. 
              We specialize in educational tours focused on the historical events of 1904-1908.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="bg-kalahari-brown/10 p-2 rounded-full">
                  <Phone size={16} className="text-kalahari-brown" />
                </div>
                <span className="text-kalahari-charcoal">+264 123 456 789</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-kalahari-brown/10 p-2 rounded-full">
                  <Mail size={16} className="text-kalahari-brown" />
                </div>
                <span className="text-kalahari-charcoal">Kalahariaxarobtours@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-kalahari-brown/10 p-2 rounded-full">
                  <MapPin size={16} className="text-kalahari-brown" />
                </div>
                <span className="text-kalahari-charcoal">Swakopmund, Namibia</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links & Pages */}
          <div className="md:col-span-5">
            <div className="grid grid-cols-2 gap-8">
              {/* Quick Links */}
              <div>
                <h3 className="text-xl font-semibold text-kalahari-darkbrown mb-5 relative">
                  <span className="relative z-10">Quick Links</span>
                  <span className="absolute bottom-0 left-0 w-12 h-1 bg-kalahari-brown rounded-full"></span>
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link 
                      to="/testimonials" 
                      className="text-kalahari-charcoal hover:text-kalahari-brown transition-colors flex items-center gap-2"
                    >
                      <ArrowRight size={14} />
                      <span>Testimonials</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/tours" 
                      className="text-kalahari-charcoal hover:text-kalahari-brown transition-colors flex items-center gap-2"
                    >
                      <ArrowRight size={14} />
                      <span>Tours</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/about" 
                      className="text-kalahari-charcoal hover:text-kalahari-brown transition-colors flex items-center gap-2"
                    >
                      <ArrowRight size={14} />
                      <span>About Us</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/tour-guide" 
                      className="text-kalahari-charcoal hover:text-kalahari-brown transition-colors flex items-center gap-2"
                    >
                      <ArrowRight size={14} />
                      <span>Tour Guide</span>
                    </Link>
                  </li>
                </ul>
              </div>
              
              {/* Pages */}
              <div>
                <h3 className="text-xl font-semibold text-kalahari-darkbrown mb-5 relative">
                  <span className="relative z-10">Pages</span>
                  <span className="absolute bottom-0 left-0 w-12 h-1 bg-kalahari-brown rounded-full"></span>
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link 
                      to="/" 
                      className="text-kalahari-charcoal hover:text-kalahari-brown transition-colors flex items-center gap-2"
                    >
                      <ArrowRight size={14} />
                      <span>Home</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/tours" 
                      className="text-kalahari-charcoal hover:text-kalahari-brown transition-colors flex items-center gap-2"
                    >
                      <ArrowRight size={14} />
                      <span>Tours</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/about" 
                      className="text-kalahari-charcoal hover:text-kalahari-brown transition-colors flex items-center gap-2"
                    >
                      <ArrowRight size={14} />
                      <span>About Us</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/gallery" 
                      className="text-kalahari-charcoal hover:text-kalahari-brown transition-colors flex items-center gap-2"
                    >
                      <ArrowRight size={14} />
                      <span>Gallery</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/testimonials" 
                      className="text-kalahari-charcoal hover:text-kalahari-brown transition-colors flex items-center gap-2"
                    >
                      <ArrowRight size={14} />
                      <span>Testimonials</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Newsletter Signup */}
          <div className="md:col-span-3">
            <h3 className="text-xl font-semibold text-kalahari-darkbrown mb-5 relative">
              <span className="relative z-10">Newsletter</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-kalahari-brown rounded-full"></span>
            </h3>
            <p className="text-kalahari-charcoal/80 mb-4">
              Subscribe to receive updates on new tours, travel tips, and special offers.
            </p>
            
            {subscribed ? (
              <div className="bg-green-50 border border-green-200 p-3 rounded-lg">
                <p className="text-green-700 text-sm">
                  Thank you for subscribing! You'll receive our newsletter soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex items-center gap-2">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/90 border-kalahari-sand hover:border-kalahari-brown focus-visible:ring-kalahari-brown"
                    required
                  />
                  <Button 
                    type="submit" 
                    className="bg-kalahari-brown hover:bg-kalahari-darkbrown"
                  >
                    <ArrowRight size={18} />
                  </Button>
                </div>
                <p className="text-xs text-kalahari-charcoal/70">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            )}
            
            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-base font-medium text-kalahari-darkbrown mb-3">Follow Us</h4>
              <div className="flex items-center gap-3">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/90 text-kalahari-darkbrown hover:bg-kalahari-brown hover:text-white transition-colors flex items-center justify-center"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/90 text-kalahari-darkbrown hover:bg-kalahari-brown hover:text-white transition-colors flex items-center justify-center"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a 
                  href="https://wa.me/+26412345678" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/90 text-kalahari-darkbrown hover:bg-kalahari-brown hover:text-white transition-colors flex items-center justify-center"
                  aria-label="WhatsApp"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.6 6.8A8 8 0 0 0 12 4c-4.4 0-8 3.6-8 8 0 1.4.4 2.8 1 4l-1 4 4-1c1.2.7 2.6 1 4 1 4.4 0 8-3.6 8-8 0-2.1-.8-4.1-2.4-5.6"/>
                    <path d="M15 11c0 .6-.2 1-.4 1.4-1.4 1.4-2.6 2.6-5.6.8V13c0-.4.1-.6.3-.8.1-.2.4-.3.6-.4.6-.2.7-.2.9-.3"/>
                  </svg>
                </a>
                <a 
                  href="mailto:Kalahariaxarobtours@gmail.com" 
                  className="w-10 h-10 rounded-full bg-white/90 text-kalahari-darkbrown hover:bg-kalahari-brown hover:text-white transition-colors flex items-center justify-center"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom bar with copyright and legal links */}
      <div className="border-t border-kalahari-darkbrown/20 pt-6 mt-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-kalahari-charcoal/80">
            ©{currentYear} Kalahari Axarob Tours. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm">
            <Link to="/privacy" className="text-kalahari-charcoal hover:text-kalahari-brown transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-kalahari-charcoal hover:text-kalahari-brown transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/sitemap" className="text-kalahari-charcoal hover:text-kalahari-brown transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
        
        {/* Back to top button - fixed at bottom right */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 bg-kalahari-brown hover:bg-kalahari-darkbrown text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 z-50"
          aria-label="Back to top"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="m18 15-6-6-6 6"/>
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
