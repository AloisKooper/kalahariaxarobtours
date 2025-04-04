import React, { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
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
      <Navbar />
      <PageHero
        title="Our Heritage, Your Journey"
        subtitle="Founded in 2013 and fully operational since 2015, Kalahari Axarob Tours connects visitors with Namibia's authentic history through immersive experiences and expert local knowledge"
        backgroundImage="/Home Images/Cultural Exchange.jpg"
        isMobile={isMobile}
      />

      {/* White background container for all content below hero INCLUDING footer */}
      <div className="relative bg-white z-10">
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
              <div className="mt-6 bg-kalahari-brown/10 py-4 px-8 rounded-lg inline-block mx-auto">
                <h4 className="text-xl sm:text-2xl text-kalahari-brown font-semibold italic">
                  "We Serve with Pride"
                </h4>
              </div>
            </div>
            
            <div className="flex flex-col items-center mb-10">
              <div className="w-full max-w-[300px] h-[300px] mb-8 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/Home Images/axarob tours.png" 
                  alt="Kalahari Axarob Tours Headquarters" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            
            <div className="space-y-4 text-kalahari-charcoal text-sm sm:text-base leading-relaxed">
              <p className="text-base text-kalahari-charcoal leading-relaxed mb-6">
                Founded in 2013 and fully operational since 2015, Kalahari Axarob Tours started with a simple vision: to share the rich cultural and historical narrative of Namibia with visitors from around the world while preserving our heritage for future generations.
              </p>
              <p className="text-base text-kalahari-charcoal leading-relaxed mb-6">
                Our roots in Swakopmund have allowed us to grow from a small family operation to a trusted name in specialized tours that address the significant historical events in our country's past, particularly the German-Herero/Nama war of 1904-1908.
              </p>
              <p className="text-base text-kalahari-charcoal leading-relaxed mb-6">
                The name "Axarob" refers to a small boy in the local language, while "Kalahari" references the desert where the Ovaherero people fled during the war, where many died of starvation, dehydration, and exhaustion. Our company name reflects our dedication to preserving and sharing these important historical narratives with historical accuracy and cultural sensitivity.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 my-6 sm:my-8">
                <div className="bg-sand-custom/30 p-4 md:p-5 rounded-lg w-full max-w-xs mx-auto sm:max-w-none sm:mx-0">
                  <h4 className="text-kalahari-darkbrown font-medium text-base md:text-lg mb-2">Our Roots</h4>
                  <p className="text-kalahari-charcoal text-xs sm:text-sm">
                    Based in Swakopmund, our company has its roots in the community. We began as a small family operation with one tour guide and have since grown while maintaining our focus on authentic, educational experiences.
                  </p>
                </div>
                <div className="bg-kalahari-brown/20 p-4 md:p-5 rounded-lg border-l-4 border-kalahari-brown w-full max-w-xs mx-auto sm:max-w-none sm:mx-0">
                  <h4 className="text-kalahari-darkbrown font-medium text-base md:text-lg mb-2">Our Motto</h4>
                  <p className="text-kalahari-charcoal text-xs sm:text-sm">
                    <span className="font-semibold italic">"We serve with pride"</span> - This motto encapsulates our commitment to excellence and our deep connection to the history we share. It represents our dedication to preserving Namibia's heritage while delivering authentic, educational tour experiences with dignity and respect.
                  </p>
                </div>
              </div>
              <p>
                Today, we offer specialized tours focusing on the significant historical events that shaped Namibia, including the 1904-1908 Nama and Ovaherero Genocide, with a commitment to historical accuracy and cultural sensitivity.
              </p>
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
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-md border border-kalahari-brown/10 w-full max-w-xs mx-auto sm:max-w-none sm:mx-0">
                <div className="bg-kalahari-brown/10 p-3 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-3 md:mb-4">
                  <Compass className="w-5 h-5 md:w-6 md:h-6 text-kalahari-brown" />
                </div>
                <h4 className="text-lg md:text-xl text-kalahari-darkbrown font-semibold mb-2 md:mb-3">Our Mission</h4>
                <p className="text-kalahari-charcoal text-xs sm:text-sm leading-relaxed">
                  To provide historically accurate and culturally respectful tours that educate visitors about Namibia's complex past, with particular focus on the 1904-1908 Nama and Ovaherero Genocide, while promoting understanding and reconciliation.
                </p>
              </div>

              <div className="bg-white p-4 md:p-6 rounded-lg shadow-md border border-kalahari-brown/10 w-full max-w-xs mx-auto sm:max-w-none sm:mx-0">
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

              <div className="bg-white p-4 md:p-6 rounded-lg shadow-md border border-kalahari-brown/10 w-full max-w-xs mx-auto sm:max-w-none sm:mx-0">
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
                Mr. Michael
              </h3>
              <div className="w-16 md:w-20 h-1 bg-kalahari-brown rounded-full mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[3/4] max-h-[500px]">
                  <img 
                    src="/Home Images/Mr.Rooi Propic.jpeg" 
                    alt="Mr. Michael" 
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
                    As the founder and principal tour guide of Kalahari Axarob Tours, Mr. Michael brings passion, knowledge, and authenticity to every tour experience. A descendant of the native Namaqua tribe, his personal connection to the history he shares adds a unique and valuable dimension to our tours.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 sm:my-6">
                    <div className="bg-sand-custom/30 p-4 rounded-lg">
                      <h4 className="text-kalahari-darkbrown font-medium mb-2 text-base md:text-lg">Expert Knowledge</h4>
                      <p className="text-kalahari-charcoal text-xs sm:text-sm">
                        With over 15 years of experience in tourism, Mr. Michael has developed an engaging storytelling approach that brings history to life.
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
    </>
  );
};

export default About; 