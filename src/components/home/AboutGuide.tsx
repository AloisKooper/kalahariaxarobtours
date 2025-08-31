import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CalendarDays, Info, ArrowRight, MapPin, Compass, Star } from "lucide-react"; 

const AboutGuide: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  // Preload the video as soon as the component mounts
  useEffect(() => {
    const videoPreload = document.createElement('link');
    videoPreload.rel = 'preload';
    videoPreload.href = 'https://res.cloudinary.com/dnjnhkyip/video/upload/q_auto:best,f_auto/Untitled_video_-_Made_with_Clipchamp_j0y3hl.mp4';
    videoPreload.as = 'video';
    document.head.appendChild(videoPreload);
    
    // Set up intersection observer to detect when video is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (videoRef.current) {
              videoRef.current.play();
            }
          } else {
            setIsInView(false);
            if (videoRef.current) {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      document.head.removeChild(videoPreload);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-sand-custom w-full py-20 px-6 max-md:py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col">
            {/* Profile image and title */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-kalahari-brown">
                <img 
                  src="/Home Images/Mr.Rooi Propic.jpeg" 
                  alt="Mr. Michael - Founder" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "https://ui-avatars.com/api/?name=Mr+Rooi&background=A67C52&color=fff";
                  }}
                />
              </div>
              <div>
                <div className="flex items-center gap-1 text-[#FBBC05]">
                  <Star className="w-4 h-4 fill-[#FBBC05]" />
                  <Star className="w-4 h-4 fill-[#FBBC05]" />
                  <Star className="w-4 h-4 fill-[#FBBC05]" />
                  <Star className="w-4 h-4 fill-[#FBBC05]" />
                  <Star className="w-4 h-4 fill-[#FBBC05]" />
                </div>
                <h3 className="text-kalahari-darkbrown font-medium">Main Lead - Founder & Tour Guide</h3>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-normal leading-tight uppercase text-kalahari-darkbrown mt-3">
              About the tour guide
            </h2>
            
            <p className="leading-7 tracking-[-0.32px] text-kalahari-charcoal mt-5">
              Mr. Michael is a founder and owner with years of experience 
              in the Tour Field. His extensive knowledge of Namibian history, 
              particularly the Ovaherero/Namaqua genocide, makes him a valuable 
              guide for those wanting to understand this important historical period.
            </p>
            
            <div className="mt-6 bg-white/70 p-4 rounded-lg border border-kalahari-brown/10">
              <h3 className="text-kalahari-brown font-semibold text-lg mb-2 flex items-center">
                <CalendarDays className="w-5 h-5 mr-2 text-kalahari-brown" />
                Cancellation Policy
              </h3>
              <ul className="text-kalahari-charcoal/90 space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-kalahari-brown mr-2">•</span>
                  <span>Full refund available up to 28 days before the experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-kalahari-brown mr-2">•</span>
                  <span>No refunds for cancellations less than 28 days before start time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-kalahari-brown mr-2">•</span>
                  <span>This experience requires a minimum of 20 travelers</span>
                </li>
              </ul>
            </div>
            
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 bg-kalahari-brown hover:bg-kalahari-darkbrown text-white border border-kalahari-brown/20 rounded-lg py-2.5 px-5 font-semibold transition-colors w-fit shadow-sm"
            >
              About Me
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          {/* Swakopmund Scenery Video */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden h-[400px] relative">
            <div className="absolute inset-0 w-full h-full">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                autoPlay={isInView}
                muted
                loop
                playsInline
                preload="auto"
              >
                <source 
                  src="https://res.cloudinary.com/dnjnhkyip/video/upload/q_auto:best,f_auto/Untitled_video_-_Made_with_Clipchamp_j0y3hl.mp4" 
                  type="video/mp4"
                />
              </video>
              <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/20 to-black/60 flex items-end justify-center pb-6 px-2">
                <div className="flex items-center gap-1.5 bg-black/30 backdrop-blur-sm px-3 py-2 rounded-full border border-white/10 shadow-lg transform transition-transform hover:scale-105 mb-2 max-w-[95%] sm:max-w-[85%] mx-auto">
                  <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-kalahari-brown flex-shrink-0" strokeWidth={2.5} />
                  <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-medium text-shadow-sm drop-shadow-md">
                    Discover the beauty of the Namibian coast
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

export default AboutGuide;
