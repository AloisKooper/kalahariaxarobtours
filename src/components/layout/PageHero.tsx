import React from "react";
import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  isMobile?: boolean;
}

const PageHero: React.FC<PageHeroProps> = ({ 
  title, 
  subtitle, 
  backgroundImage,
  isMobile = false 
}) => {
  return (
    <>
      {/* Fixed background that extends behind both navbar and hero */}
      <div className="fixed top-0 left-0 w-full h-[100vh] overflow-hidden -z-10">
        <img 
          src={backgroundImage}
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
              {title}
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
              {subtitle}
            </motion.p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageHero; 