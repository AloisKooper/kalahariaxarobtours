import React, { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Building, Target, Compass, Users, Landmark, Heart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  // State to track viewport size
  const [isMobile, setIsMobile] = useState(false);
  
  // Effect to handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    handleResize();
    
    // Add resize listener
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <>
      {/* 
        NAVBAR-HERO TRANSITION SOLUTION:
        1. Create a fixed background that extends behind BOTH navbar and hero
        2. Place the background image at the very top (-z-10)
        3. Add a gradient overlay for better text contrast
        4. Render the navbar directly in the flow without a container
        5. Place all content below hero in a white background container
        
        This approach creates a seamless transition because the navbar and hero
        share the same background layer without any visual separation.
      */}
      <div className="fixed top-0 left-0 w-full h-[100vh] overflow-hidden -z-10">
        <img 
          src="/Home Images/Cultural Exchange.jpg" 
          alt="" 
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        {/* Semi-dark overlay to improve text visibility */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="absolute inset-0"
          style={{
            background: isMobile 
              ? 'radial-gradient(circle at center 60%, rgba(0,0,0,0) 5%, rgba(65,48,32,0.2) 15%, rgba(65,48,32,0.4) 30%, rgba(65,48,32,0.65) 55%, rgba(65,48,32,0.9) 100%)'
              : 'radial-gradient(circle at center, rgba(0,0,0,0) 10%, rgba(65,48,32,0.2) 25%, rgba(65,48,32,0.4) 40%, rgba(65,48,32,0.6) 60%, rgba(65,48,32,0.9) 100%)',
            mixBlendMode: 'multiply'
          }}
        ></div>
      </div>
      
      {/* Main content wrapper - overflow-hidden prevents any horizontal scrollbar issues */}
      <div className="flex flex-col overflow-hidden items-center">
        {/* Navbar directly in the flow - no separate container to create visual breaks */}
        <Navbar />
        
        {/* Hero Section - adjusted height for better mobile display */}
        <section className="min-h-[40vh] md:min-h-[50vh] w-full flex items-center py-8 px-3 sm:px-4 md:px-6 hero-section overflow-hidden relative">
          <div className="container mx-auto">
            <div className="flex flex-col items-center justify-center text-center px-4 sm:px-6">
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal mb-3 md:mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                Our Heritage, Your Journey
              </motion.h1>
              <motion.div 
                className="w-16 sm:w-20 h-1 bg-kalahari-sun rounded-full mb-4 md:mb-6"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 80 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
              <motion.p 
                className="text-white/90 max-w-2xl text-sm sm:text-base md:text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Since 2008, Kalahari Axarob Tours has connected visitors with Namibia's authentic history through immersive cultural experiences and expert local knowledge
              </motion.p>
            </div>
          </div>
        </section>

        {/* White background container for all content below hero - crucial for clean transition */}
        <div className="w-full bg-white">
          {/* Our Story Section - Improved with better balance */}
          <section className="py-12 md:py-16 px-4 md:px-6">
            <div className="container mx-auto max-w-7xl">
              <div className="text-center mb-8 md:mb-12">
                <div className="inline-flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                  <div className="bg-kalahari-brown p-2 rounded-lg">
                    <Building className="w-5 h-5 text-kalahari-sun" />
                  </div>
                  <h2 className="text-kalahari-brown font-medium text-base md:text-lg">Our Story</h2>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl text-kalahari-darkbrown font-normal mb-4 md:mb-6 max-w-3xl mx-auto">
                  Preserving Namibia's History & Heritage
                </h3>
                <div className="w-16 md:w-20 h-1 bg-kalahari-brown rounded-full mx-auto"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-10">
                <div className="md:col-span-2 order-2 md:order-1">
                  <div className="space-y-4 text-kalahari-charcoal text-sm sm:text-base leading-relaxed">
                    <p>
                      Founded in 2008, Kalahari Axarob Tours started with a simple vision: to share the rich cultural and historical narrative of Namibia with visitors from around the world while preserving our heritage for future generations.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 my-6 sm:my-8">
                      <div className="bg-sand-custom/30 p-4 md:p-5 rounded-lg">
                        <h4 className="text-kalahari-darkbrown font-medium text-base md:text-lg mb-2">Our Roots</h4>
                        <p className="text-kalahari-charcoal text-xs sm:text-sm">
                          Based in Swakopmund, our company has its roots in the community. We began as a small family operation with one tour guide and have since grown while maintaining our focus on authentic, educational experiences.
                        </p>
                      </div>
                      <div className="bg-sand-custom/30 p-4 md:p-5 rounded-lg">
                        <h4 className="text-kalahari-darkbrown font-medium text-base md:text-lg mb-2">Our Name</h4>
                        <p className="text-kalahari-charcoal text-xs sm:text-sm">
                          The name "Axarob" derives from ancient Khoekhoegowab language meaning "place of unity," reflecting our mission to bring people together through understanding and appreciation of our shared history.
                        </p>
                      </div>
                    </div>
                    <p>
                      Today, we offer specialized tours focusing on the significant historical events that shaped Namibia, including the 1904-1908 Nama and Ovaherero Genocide, with a commitment to historical accuracy and cultural sensitivity.
                    </p>
                  </div>
                </div>
                <div className="md:col-span-1 order-1 md:order-2 h-[250px] sm:h-[300px] md:h-auto mb-6 md:mb-0">
                  <div className="relative h-full rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="/Home Images/axarob tours.png" 
                      alt="Kalahari Axarob Tours Headquarters" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mission and Vision Section - More visual appeal */}
          <section className="py-12 md:py-16 px-4 md:px-6 bg-sand-custom relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-kalahari-brown/10 rounded-full -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-kalahari-brown/10 rounded-full translate-y-1/3 -translate-x-1/4"></div>
            
            <div className="container mx-auto max-w-7xl relative z-10">
              <div className="text-center mb-8 md:mb-12">
                <div className="inline-flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                  <div className="bg-kalahari-brown p-2 rounded-lg">
                    <Target className="w-5 h-5 text-kalahari-sun" />
                  </div>
                  <h2 className="text-kalahari-brown font-medium text-base md:text-lg">Our Mission</h2>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl text-kalahari-darkbrown font-normal mb-4 md:mb-6 max-w-3xl mx-auto">
                  Connecting People to Namibia's Past & Present
                </h3>
                <div className="w-16 md:w-20 h-1 bg-kalahari-brown rounded-full mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                <div className="bg-white p-4 md:p-6 rounded-lg shadow-md border border-kalahari-brown/10">
                  <div className="bg-kalahari-brown/10 p-3 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-3 md:mb-4">
                    <Compass className="w-5 h-5 md:w-6 md:h-6 text-kalahari-brown" />
                  </div>
                  <h4 className="text-lg md:text-xl text-kalahari-darkbrown font-semibold mb-2 md:mb-3">Our Mission</h4>
                  <p className="text-kalahari-charcoal text-xs sm:text-sm leading-relaxed">
                    To provide historically accurate and culturally respectful tours that educate visitors about Namibia's complex past, with particular focus on the 1904-1908 Nama and Ovaherero Genocide, while promoting understanding and reconciliation.
                  </p>
                </div>

                <div className="bg-white p-4 md:p-6 rounded-lg shadow-md border border-kalahari-brown/10">
                  <div className="bg-kalahari-brown/10 p-3 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-3 md:mb-4">
                    <Users className="w-5 h-5 md:w-6 md:h-6 text-kalahari-brown" />
                  </div>
                  <h4 className="text-lg md:text-xl text-kalahari-darkbrown font-semibold mb-2 md:mb-3">Our Values</h4>
                  <ul className="text-kalahari-charcoal text-xs sm:text-sm space-y-1 md:space-y-2">
                    <li className="flex items-start">
                      <span className="text-kalahari-brown mr-2">•</span>
                      <span>Historical accuracy and integrity</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-kalahari-brown mr-2">•</span>
                      <span>Cultural sensitivity and respect</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-kalahari-brown mr-2">•</span>
                      <span>Community engagement and support</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-kalahari-brown mr-2">•</span>
                      <span>Educational excellence</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-4 md:p-6 rounded-lg shadow-md border border-kalahari-brown/10">
                  <div className="bg-kalahari-brown/10 p-3 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-3 md:mb-4">
                    <Landmark className="w-5 h-5 md:w-6 md:h-6 text-kalahari-brown" />
                  </div>
                  <h4 className="text-lg md:text-xl text-kalahari-darkbrown font-semibold mb-2 md:mb-3">Our Vision</h4>
                  <p className="text-kalahari-charcoal text-xs sm:text-sm leading-relaxed">
                    To be the leading historical tour company in Namibia, recognized for authenticity and educational value. We aim to create a bridge between past and present, ensuring that important historical events are remembered and understood by generations to come.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Meet Our Lead Guide Section - Improved mobile layout */}
          <section className="py-12 md:py-16 px-4 md:px-6 bg-white relative overflow-hidden">
            <div className="container mx-auto max-w-7xl">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-kalahari-brown font-medium text-base md:text-lg mb-3 md:mb-4">Meet Our Lead Guide</h2>
                <h3 className="text-2xl sm:text-3xl md:text-4xl text-kalahari-darkbrown font-normal mb-4 md:mb-6">
                  Mr. Rooi
                </h3>
                <div className="w-16 md:w-20 h-1 bg-kalahari-brown rounded-full mx-auto"></div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center">
                <div className="lg:col-span-5 order-2 lg:order-1">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[3/4] max-h-[500px]">
                    <img 
                      src="/Home Images/tour guide.jpg" 
                      alt="Mr. Rooi" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <div className="flex items-center gap-1 text-[#FBBC05]">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-[#FBBC05]" viewBox="0 0 24 24">
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-white text-sm ml-1">5.0</span>
                      </div>
                      <h4 className="text-white font-medium">Experienced Local Guide</h4>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-7 order-1 lg:order-2 mb-6 lg:mb-0">
                  <div className="space-y-4 text-kalahari-charcoal">
                    <p className="text-sm sm:text-base leading-relaxed">
                      As the founder and principal tour guide of Kalahari Axarob Tours, Mr. Rooi brings passion, knowledge, and authenticity to every tour experience. A descendant of the native Namaqua tribe, his personal connection to the history he shares adds a unique and valuable dimension to our tours.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 sm:my-6">
                      <div className="bg-sand-custom/30 p-4 rounded-lg">
                        <h4 className="text-kalahari-darkbrown font-medium mb-2 text-base md:text-lg">Expert Knowledge</h4>
                        <p className="text-kalahari-charcoal text-xs sm:text-sm">
                          With over 15 years of experience in tourism, Mr. Rooi has developed an engaging storytelling approach that brings history to life.
                        </p>
                      </div>
                      <div className="bg-sand-custom/30 p-4 rounded-lg">
                        <h4 className="text-kalahari-darkbrown font-medium mb-2 text-base md:text-lg">Local Heritage</h4>
                        <p className="text-kalahari-charcoal text-xs sm:text-sm">
                          His extensive knowledge of the 1904-1908 Nama and Ovaherero Genocide makes him uniquely qualified to guide visitors through this important but often overlooked chapter of history.
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-4 sm:mt-6">
                      <Link 
                        to="/tour-guide" 
                        className="inline-flex items-center gap-2 bg-kalahari-brown hover:bg-kalahari-darkbrown text-white rounded-lg py-2 sm:py-2.5 px-4 sm:px-5 text-sm font-medium transition-colors"
                      >
                        Learn more about our expert guide
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* What Makes Us Unique - Improved for mobile */}
          <section className="py-12 md:py-16 px-4 md:px-6 bg-lightbrown-custom relative overflow-hidden">
            <div className="container mx-auto max-w-7xl">
              <div className="text-center mb-8 md:mb-12">
                <h3 className="text-2xl sm:text-3xl md:text-4xl text-kalahari-darkbrown font-normal mb-4 md:mb-6">
                  What Makes Us Unique
                </h3>
                <div className="w-16 md:w-20 h-1 bg-kalahari-brown rounded-full mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                <div className="bg-white/80 p-4 md:p-6 rounded-lg shadow-sm">
                  <div className="bg-kalahari-brown/10 p-3 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-3 md:mb-4">
                    <Users className="w-5 h-5 md:w-6 md:h-6 text-kalahari-brown" />
                  </div>
                  <h4 className="text-lg md:text-xl text-kalahari-darkbrown font-semibold mb-2 md:mb-3">Authentic Local Perspective</h4>
                  <p className="text-kalahari-charcoal text-xs sm:text-sm">
                    Our guides are descendants of the native tribes affected by the history they share, providing an authentic and personal connection to Namibia's past.
                  </p>
                </div>

                <div className="bg-white/80 p-4 md:p-6 rounded-lg shadow-sm">
                  <div className="bg-kalahari-brown/10 p-3 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-3 md:mb-4">
                    <Landmark className="w-5 h-5 md:w-6 md:h-6 text-kalahari-brown" />
                  </div>
                  <h4 className="text-lg md:text-xl text-kalahari-darkbrown font-semibold mb-2 md:mb-3">Historical Accuracy</h4>
                  <p className="text-kalahari-charcoal text-xs sm:text-sm">
                    We are committed to historical truth, presenting events as they occurred with attention to detail and context that many other tour companies overlook.
                  </p>
                </div>

                <div className="bg-white/80 p-4 md:p-6 rounded-lg shadow-sm">
                  <div className="bg-kalahari-brown/10 p-3 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-3 md:mb-4">
                    <Compass className="w-5 h-5 md:w-6 md:h-6 text-kalahari-brown" />
                  </div>
                  <h4 className="text-lg md:text-xl text-kalahari-darkbrown font-semibold mb-2 md:mb-3">Educational Focus</h4>
                  <p className="text-kalahari-charcoal text-xs sm:text-sm">
                    Our tours are designed to be educational experiences that go beyond sightseeing, providing deep insights into historical events and their impact.
                  </p>
                </div>

                <div className="bg-white/80 p-4 md:p-6 rounded-lg shadow-sm">
                  <div className="bg-kalahari-brown/10 p-3 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-3 md:mb-4">
                    <Heart className="w-5 h-5 md:w-6 md:h-6 text-kalahari-brown" />
                  </div>
                  <h4 className="text-lg md:text-xl text-kalahari-darkbrown font-semibold mb-2 md:mb-3">Community Impact</h4>
                  <p className="text-kalahari-charcoal text-xs sm:text-sm">
                    When you book with us, you're supporting local community initiatives, including soup kitchens and educational programs throughout Swakopmund.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Our Commitment Section - Mobile optimized */}
          <section className="py-12 md:py-16 px-4 md:px-6 bg-white">
            <div className="container mx-auto max-w-7xl">
              <div className="text-center mb-8 md:mb-12">
                <div className="inline-flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                  <div className="bg-kalahari-brown p-2 rounded-lg">
                    <Heart className="w-5 h-5 text-kalahari-sun" />
                  </div>
                  <h2 className="text-kalahari-brown font-medium text-base md:text-lg">Our Commitment</h2>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl text-kalahari-darkbrown font-normal mb-4 md:mb-6">
                  Making a Difference in Our Community
                </h3>
                <div className="w-16 md:w-20 h-1 bg-kalahari-brown rounded-full mx-auto mb-4 md:mb-6"></div>
                <p className="text-kalahari-charcoal/80 max-w-2xl mx-auto text-sm sm:text-base">
                  Discover how we're making a difference in Swakopmund while delivering exceptional tour experiences.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                <div className="relative h-[200px] sm:h-[250px] md:h-[300px] rounded-xl overflow-hidden group">
                  <img 
                    src="/Home Images/Community Projects.jpg" 
                    alt="Support for Local Soup Kitchens" 
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                    <h4 className="text-lg md:text-xl text-white font-semibold mb-1 md:mb-2">Support for Local Soup Kitchens</h4>
                    <p className="text-white/90 text-xs sm:text-sm">
                      A portion of every tour fee goes directly to supporting two local soup kitchens in Swakopmund, helping to feed those in need.
                    </p>
                  </div>
                </div>

                <div className="relative h-[200px] sm:h-[250px] md:h-[300px] rounded-xl overflow-hidden group">
                  <img 
                    src="/Home Images/Cultural Exchange.jpg" 
                    alt="Educational Initiatives" 
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                    <h4 className="text-lg md:text-xl text-white font-semibold mb-1 md:mb-2">Educational Initiatives</h4>
                    <p className="text-white/90 text-xs sm:text-sm">
                      We work with local schools to provide free historical tours for students, ensuring that the younger generation understands their heritage.
                    </p>
                  </div>
                </div>

                <div className="relative h-[200px] sm:h-[250px] md:h-[300px] rounded-xl overflow-hidden group">
                  <img 
                    src="/Home Images/Craft Market.jpg" 
                    alt="Supporting Local Artisans" 
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                    <h4 className="text-lg md:text-xl text-white font-semibold mb-1 md:mb-2">Supporting Local Artisans</h4>
                    <p className="text-white/90 text-xs sm:text-sm">
                      Our tours visit local craft markets and work with artisans, providing them with a platform to showcase and sell their traditional crafts to visitors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action - Mobile optimized */}
          <section className="py-12 md:py-16 px-4 md:px-6 bg-gradient-to-r from-kalahari-brown to-kalahari-darkbrown text-white">
            <div className="container mx-auto max-w-4xl text-center">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-normal mb-4 md:mb-6">
                Ready to Explore Namibia's Rich History?
              </h3>
              <p className="max-w-2xl mx-auto mb-6 md:mb-8 text-sm sm:text-base">
                Join us for an authentic, educational tour experience that connects you with the true history and culture of Namibia.
              </p>
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                <Link
                  to="/tours"
                  className="bg-white text-kalahari-darkbrown hover:bg-kalahari-sand transition-colors py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg text-sm font-semibold"
                >
                  Explore Our Tours
                </Link>
                <Link
                  to="#contact"
                  className="bg-transparent border border-white text-white hover:bg-white/10 transition-colors py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg text-sm font-semibold"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </section>
          
          <Footer />
        </div>
      </div>
    </>
  );
};

export default About; 