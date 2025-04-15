import React, { useEffect, useState, useRef } from "react";

import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Calendar, 
  MapPin, 
  Award,
  Quote,
  Book,
  Star,
  Heart,
  Camera,
  Users,
  MessageCircle,
  ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";

const TourGuidePage: React.FC = () => {
  // State to track viewport size
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
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

  // Handle tab switching
  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  // Experience years data
  const experienceData = [
    {
      year: 15,
      label: "Years Experience",
      icon: <Calendar className="w-6 h-6 text-kalahari-brown" />
    },
    {
      year: 2000,
      label: "Happy Tourists",
      icon: <Users className="w-6 h-6 text-kalahari-brown" />
    },
    {
      year: 5.0,
      label: "Rating",
      icon: <Star className="w-6 h-6 text-kalahari-brown" fill="currentColor" />
    }
  ];

  // Tour guide story sections
  const storyTabs = [
    {
      title: "Background",
      content: "Our team includes descendants of native Namibian tribes, bringing a personal connection to the historical tours we lead. Our guides' family histories intertwine with Namibia's complex past, giving us a unique perspective that enriches every tour experience.",
      image: "/Home Images/Cultural Exchange.jpg"
    },
    {
      title: "Expertise",
      content: "With over 15 years of collective experience in the tourism field, our team has developed extensive knowledge of Namibian history, particularly the Ovaherero/Namaqua genocide. Our expertise has been recognized by historical institutions and international tourism organizations.",
      image: "/Home Images/Memorial Site.jpg"
    },
    {
      title: "Tour Philosophy",
      content: "We believe in educational tourism that honors the past while creating meaningful connections. Our tours go beyond facts and dates to illuminate the human stories behind historical events, creating transformative experiences for visitors.",
      image: "/Home Images/Top 5 Historical.jpg"
    }
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "The team's deep knowledge and personal connection to Namibian history made our tour incredibly meaningful. Their storytelling abilities brought the past to life in a way textbooks never could.",
      author: "Maria Schmidt",
      location: "Berlin, Germany",
      date: "January 2024"
    },
    {
      quote: "As someone deeply interested in colonial history, I found this tour to be exceptionally well-researched and presented with profound respect and dignity. A truly educational experience.",
      author: "James Wilson",
      location: "Sydney, Australia",
      date: "November 2023"
    },
    {
      quote: "Even as a Namibian, I learned so much on this tour. The guides present our difficult history with honesty, sensitivity and profound knowledge. Highly recommended for locals and tourists alike.",
      author: "John Mbambo",
      location: "Windhoek, Namibia",
      date: "October 2023"
    }
  ];

  // Gallery images
  const galleryImages = [
    {
      src: "/Home Images/German Architecture.jpg",
      alt: "German Colonial Architecture"
    },
    {
      src: "/Home Images/Swakop Landmarks.jpg",
      alt: "Swakopmund Landmarks"
    },
    {
      src: "/Home Images/Flamingo.jpg",
      alt: "Flamingos at Walvis Bay"
    },
    {
      src: "/Home Images/blog swakop.jpg",
      alt: "Swakopmund Experience"
    }
  ];

  // Play/pause background video
  const toggleVideo = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsVideoPlaying(true);
      } else {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      }
    }
  };

  return (
    <>

      <PageHero
        title="Meet Our Tour Team"
        subtitle="Learn about our experienced local tour guides who bring authentic knowledge and passion to every historical tour experience"
        backgroundImage="/Home Images/Top 5 Historical.jpg"
        isMobile={isMobile}
      />
      
      {/* White background container for all content below hero INCLUDING footer */}
      <div className="w-full bg-white relative z-10">
        <div className="py-16 md:py-20 px-4 md:px-6">
          <div className="container mx-auto max-w-7xl">
            
            {/* Introduction section */}
            <div className="flex flex-col lg:flex-row gap-12 mb-24">
              {/* Left column: Profile */}
              <div className="lg:w-1/2">
                <div className="relative mb-8">
                  <h2 className="text-3xl md:text-4xl font-medium text-kalahari-darkbrown mt-10 mb-3">
                    Kalahari Axarob Tours
                  </h2>
                  <div className="flex flex-wrap items-center gap-3 mb-6 mt-4">
                    <Badge variant="outline" className="bg-kalahari-sand/30 text-kalahari-darkbrown border-kalahari-brown/30 flex items-center gap-1.5 py-1.5">
                      <MapPin className="w-3 h-3" />
                      Swakopmund, Namibia
                    </Badge>
                    <Badge variant="outline" className="bg-kalahari-sand/30 text-kalahari-darkbrown border-kalahari-brown/30 flex items-center gap-1.5 py-1.5">
                      <Award className="w-3 h-3" />
                      Licensed Tour Guides
                    </Badge>
                    <Badge variant="outline" className="bg-kalahari-sand/30 text-kalahari-darkbrown border-kalahari-brown/30 flex items-center gap-1.5 py-1.5">
                      <MessageCircle className="w-3 h-3" />
                      English Speaking
                    </Badge>
                  </div>
                </div>
                
                <div className="bg-kalahari-sand/30 rounded-xl p-6 md:p-8 relative mb-10 w-full max-w-xs mx-auto sm:max-w-none sm:mx-0">
                  <Quote className="absolute text-kalahari-brown/10 w-20 h-20 -top-4 -left-4" />
                  <p className="relative text-kalahari-charcoal z-10 text-lg italic">
                    "Our goal is to share not just the history of Namibia, but the stories of resilience, 
                    culture, and human connection that define our heritage. Every tour is a journey through 
                    time that honors the past while creating meaningful present-day experiences."
                  </p>
                  <div className="mt-6 text-right">
                    <p className="text-kalahari-darkbrown font-medium">— The KAT Team</p>
                  </div>
                </div>
                
                {/* Experience numbers */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                  {experienceData.map((item, index) => (
                    <div 
                      key={index}
                      className="bg-white rounded-lg border border-kalahari-brown/10 p-5 text-center shadow-sm hover:shadow-md transition-shadow w-full min-w-[100px] max-w-xs mx-auto sm:max-w-none sm:mx-0"
                    >
                      <div className="flex justify-center mb-3">
                        {item.icon}
                      </div>
                      <div className="text-2xl md:text-3xl font-bold text-kalahari-brown">
                        {item.year}+
                      </div>
                      <div className="text-xs text-kalahari-charcoal/70 mt-1">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Specialties */}
                <div className="mb-10">
                  <h3 className="text-xl font-medium text-kalahari-darkbrown mb-5 flex items-center gap-2">
                    <Book className="w-5 h-5 text-kalahari-brown" />
                    Areas of Expertise
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <Badge className="bg-kalahari-brown/10 hover:bg-kalahari-brown/20 text-kalahari-darkbrown border-none py-1.5 px-3">German Colonial History</Badge>
                    <Badge className="bg-kalahari-brown/10 hover:bg-kalahari-brown/20 text-kalahari-darkbrown border-none py-1.5 px-3">Herero-Nama Genocide</Badge>
                    <Badge className="bg-kalahari-brown/10 hover:bg-kalahari-brown/20 text-kalahari-darkbrown border-none py-1.5 px-3">Indigenous Culture</Badge>
                    <Badge className="bg-kalahari-brown/10 hover:bg-kalahari-brown/20 text-kalahari-darkbrown border-none py-1.5 px-3">Swakopmund Heritage</Badge>
                    <Badge className="bg-kalahari-brown/10 hover:bg-kalahari-brown/20 text-kalahari-darkbrown border-none py-1.5 px-3">Namib Desert Ecology</Badge>
                    <Badge className="bg-kalahari-brown/10 hover:bg-kalahari-brown/20 text-kalahari-darkbrown border-none py-1.5 px-3">Township Cultural Exchange</Badge>
                  </div>
                </div>
                
                {/* Call-to-action buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-10">
                  <Link to="/tours" className="flex-1">
                    <Button className="w-full bg-kalahari-brown hover:bg-kalahari-darkbrown text-white py-6">
                      View Tour Options
                    </Button>
                  </Link>
                  <Link to="/contact" className="flex-1">
                    <Button variant="outline" className="w-full border-kalahari-brown text-kalahari-darkbrown hover:bg-kalahari-brown/10 py-6">
                      Book a Private Tour
                    </Button>
                  </Link>
                </div>
              </div>
              
              {/* Right column: Story tabs */}
              <div className="lg:w-1/2">
                <div className="bg-white rounded-xl overflow-hidden shadow-md border border-kalahari-brown/10 w-full max-w-xs mx-auto sm:max-w-none sm:mx-0">
                  {/* Tab navigation */}
                  <div className="flex border-b border-kalahari-brown/10">
                    {storyTabs.map((tab, index) => (
                      <button
                        key={index}
                        className={`flex-1 py-4 px-4 text-center text-sm md:text-base transition-colors ${
                          activeTab === index 
                            ? 'bg-kalahari-sand/30 text-kalahari-darkbrown font-medium border-b-2 border-kalahari-brown' 
                            : 'text-kalahari-charcoal/70 hover:bg-kalahari-sand/10'
                        }`}
                        onClick={() => handleTabChange(index)}
                      >
                        {tab.title}
                      </button>
                    ))}
                  </div>
                  
                  {/* Story content */}
                  <div className="p-0">
                    {storyTabs.map((tab, index) => (
                      <div 
                        key={index}
                        className={`${activeTab === index ? 'block' : 'hidden'}`}
                      >
                        <div className="h-72 md:h-80 w-full">
                          <img 
                            src={tab.image} 
                            alt={tab.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-7">
                          <h3 className="text-xl font-medium text-kalahari-darkbrown mb-4">
                            {tab.title}
                          </h3>
                          <p className="text-kalahari-charcoal leading-relaxed">
                            {tab.content}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Video Section */}
                <div className="mt-10 rounded-xl overflow-hidden shadow-md border border-kalahari-brown/10 relative w-full max-w-xs mx-auto sm:max-w-none sm:mx-0">
                  <div className="h-64 md:h-80 w-full relative overflow-hidden">
                    <video
                      ref={videoRef}
                      className="w-full h-full object-cover"
                      loop
                      muted
                      poster="/Home Images/jetty hero.jpg"
                    >
                      <source 
                        src="https://res.cloudinary.com/dik2mqn3b/video/upload/q_auto:best,f_auto/scene_video_rozuws.mp4" 
                        type="video/mp4"
                      />
                    </video>
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <button
                        onClick={toggleVideo}
                        className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                      >
                        {isVideoPlaying ? (
                          <div className="w-4 h-8 bg-white"></div>
                        ) : (
                          <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-t-transparent border-b-transparent border-l-white ml-1"></div>
                        )}
                      </button>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2 text-white text-sm">
                        Discover the beauty of Swakopmund and the stories it holds
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonials section */}
            <div className="mb-24 py-16 px-6 sm:px-10 md:px-16 bg-kalahari-sand/20 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                <Quote className="w-full h-full text-kalahari-brown" />
              </div>
              
              <div className="text-center mb-14 relative z-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-kalahari-darkbrown font-normal mb-4">
                  What Guests Say About Our Tours
                </h2>
                <div className="w-16 md:w-20 h-1 bg-kalahari-brown rounded-full mx-auto mt-5"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-xl p-7 shadow-md border border-kalahari-brown/10 flex flex-col w-full max-w-xs mx-auto sm:max-w-none sm:mx-0"
                  >
                    <Quote className="text-kalahari-brown/20 w-10 h-10 mb-4" />
                    <p className="italic text-kalahari-charcoal mb-6 text-base leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="mt-auto pt-4 border-t border-kalahari-brown/10">
                      <p className="font-medium text-kalahari-darkbrown">{testimonial.author}</p>
                      <div className="flex justify-between items-center mt-2">
                        <p className="text-sm text-kalahari-charcoal/70">{testimonial.location}</p>
                        <p className="text-xs text-kalahari-charcoal/60">{testimonial.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 text-center relative z-10">
                <Link to="/testimonial">
                  <Button variant="outline" className="border-kalahari-brown text-kalahari-darkbrown hover:bg-kalahari-brown/10 py-6 px-8">
                    Read More Testimonials
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Tour highlights gallery */}
            <div className="mb-24">
              <div className="text-center mb-14">
                <h2 className="text-kalahari-brown font-medium text-base md:text-lg mb-3">Tour Highlights</h2>
                <h3 className="text-2xl sm:text-3xl md:text-4xl text-kalahari-darkbrown font-normal mb-4 md:mb-6">
                  Memorable Moments with Our Guides
                </h3>
                <div className="w-16 md:w-20 h-1 bg-kalahari-brown rounded-full mx-auto mb-6"></div>
                <p className="text-kalahari-charcoal/80 max-w-2xl mx-auto text-sm sm:text-base">
                  Glimpses of the educational and cultural experiences that await on our specialized tours
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {galleryImages.map((image, index) => (
                  <div 
                    key={index}
                    className={`relative group overflow-hidden rounded-xl ${
                      index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                    }`}
                  >
                    <div className={`${index === 0 ? 'h-80 md:h-full' : 'h-64'}`}>
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                      <div>
                        <p className="text-white font-medium text-lg">{image.alt}</p>
                        <div className="flex items-center gap-1.5 mt-2">
                          <Camera className="w-4 h-4 text-white/80" />
                          <span className="text-sm text-white/80">Tour Experience</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Tour Booking CTA */}
            <div className="bg-gradient-to-r from-kalahari-sand to-kalahari-brown/20 rounded-xl p-8 md:p-12 relative overflow-hidden mb-16 w-full max-w-xs mx-auto sm:max-w-none sm:mx-0">
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-60 h-60 opacity-10">
                <Heart className="w-full h-full text-kalahari-darkbrown" strokeWidth={0.5} />
              </div>
              
              <div className="md:max-w-3xl relative z-10">
                <h2 className="text-2xl md:text-3xl text-kalahari-darkbrown font-medium mb-5">
                  Experience History Through a Personal Lens
                </h2>
                <p className="text-kalahari-charcoal mb-8 max-w-3xl text-base leading-relaxed">
                  Join our guides for an authentic, educational journey through Namibia's complex history. 
                  Our tours offer much more than facts—they provide cultural connection, personal stories, 
                  and meaningful insights that transform how you understand this remarkable region.
                </p>
                <div className="space-y-4 md:space-y-0 md:flex md:gap-6 items-center">
                  <Link to="/tours">
                    <Button className="w-full md:w-auto bg-kalahari-brown hover:bg-kalahari-darkbrown text-white px-8 py-6">
                      Explore Tour Options
                      <ChevronRight size={16} className="ml-1" />
                    </Button>
                  </Link>
                  <p className="text-sm text-kalahari-charcoal/80 md:max-w-md mt-2 md:mt-0">
                    <span className="font-medium text-kalahari-darkbrown">Booking options include:</span> Half-day historical tours, 
                    full-day shore excursions for cruise passengers, and private customized experiences.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Cancellation policy */}
            <div className="bg-white rounded-xl shadow-sm border border-kalahari-brown/10 p-8 w-full max-w-xs mx-auto sm:max-w-none sm:mx-0">
              <h3 className="text-xl font-medium text-kalahari-darkbrown mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-kalahari-brown" />
                Tour Cancellation Policy
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-kalahari-sand/60 flex items-center justify-center">
                    <span className="font-medium text-kalahari-brown">1</span>
                  </div>
                  <div>
                    <p className="text-kalahari-charcoal/90 leading-relaxed">
                      <span className="font-medium text-kalahari-darkbrown">Full refund</span> available up to 28 days before the experience
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-kalahari-sand/60 flex items-center justify-center">
                    <span className="font-medium text-kalahari-brown">2</span>
                  </div>
                  <div>
                    <p className="text-kalahari-charcoal/90 leading-relaxed">
                      <span className="font-medium text-kalahari-darkbrown">No refunds</span> for cancellations less than 28 days before start time
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-kalahari-sand/60 flex items-center justify-center">
                    <span className="font-medium text-kalahari-brown">3</span>
                  </div>
                  <div>
                    <p className="text-kalahari-charcoal/90 leading-relaxed">
                      Shore excursions require a <span className="font-medium text-kalahari-darkbrown">minimum of 20 travelers</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default TourGuidePage; 