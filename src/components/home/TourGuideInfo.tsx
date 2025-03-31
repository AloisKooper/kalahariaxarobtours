import React from "react";
import { Heart, Soup, Users, Star, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const TourGuideInfo: React.FC = () => {
  return (
    <section className="w-full py-24 bg-lightbrown-custom">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-kalahari-brown text-4xl md:text-5xl font-normal tracking-wide uppercase mb-4">
              Our Commitment
            </h2>
            <div className="w-20 h-1 bg-kalahari-brown rounded-full mx-auto"></div>
            <p className="text-kalahari-charcoal/80 mt-6 max-w-2xl mx-auto">
              Discover how we're making a difference in our community while delivering exceptional tour experiences.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Motto Card */}
            <motion.div 
              className="relative h-[300px] rounded-2xl overflow-hidden group w-full max-w-xs mx-auto sm:max-w-none sm:mx-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-full h-full">
                <img 
                  src="/Home Images/testimonial.jpeg" 
                  alt="Support for Local Soup Kitchens" 
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-kalahari-brown p-3 rounded-lg">
                    <Soup className="w-6 h-6 text-yellow-400" />
                  </div>
                  <h2 className="text-2xl font-semibold text-white">
                    Support for Local Soup Kitchens
                  </h2>
                </div>
                <p className="text-white/90 leading-relaxed">
                  A portion of every tour fee goes directly to supporting two local soup kitchens in Swakopmund, helping to feed those in need.
                </p>
              </div>
            </motion.div>

            {/* Social Responsibility Card */}
            <motion.div 
              className="relative h-[300px] rounded-2xl overflow-hidden group w-full max-w-xs mx-auto sm:max-w-none sm:mx-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-full h-full">
                <img 
                  src="/Home Images/Community Projects.jpg" 
                  alt="Educational Initiatives" 
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-kalahari-brown p-3 rounded-lg">
                    <Users className="w-6 h-6 text-yellow-400" />
                  </div>
                  <h2 className="text-2xl font-semibold text-white">
                    Educational Initiatives
                  </h2>
                </div>
                <p className="text-white/90 leading-relaxed">
                  We work with local schools to provide free historical tours for students, ensuring that the younger generation understands their heritage.
                </p>
              </div>
            </motion.div>
            
            {/* Community Contribution Card */}
            <motion.div 
              className="relative h-[300px] rounded-2xl overflow-hidden group w-full max-w-xs mx-auto sm:max-w-none sm:mx-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-full h-full">
                <img 
                  src="/Home Images/Craft Market.jpg" 
                  alt="Supporting Local Artisans" 
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-kalahari-brown p-3 rounded-lg">
                    <Heart className="w-6 h-6 text-yellow-400" />
                  </div>
                  <h2 className="text-2xl font-semibold text-white">
                    Supporting Local Artisans
                  </h2>
                </div>
                <p className="text-white/90 leading-relaxed">
                  Our tours visit local craft markets and work with artisans, providing them with a platform to showcase and sell their traditional crafts to visitors.
                </p>
              </div>
            </motion.div>
          </div>
          
          {/* About page link in bottom right */}
          <div className="mt-8 flex justify-end">
            <a 
              href="/about" 
              className="flex items-center gap-2 text-kalahari-brown hover:text-kalahari-brown/80 transition-colors"
            >
              <span className="font-medium">Learn more about us</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourGuideInfo;