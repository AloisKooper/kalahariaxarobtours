import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { 
  Calendar, 
  BookOpen, 
  Ticket, 
  CalendarCheck, 
  Home, 
  Map, 
  Info, 
  Image, 
  Star, 
  User, 
  Phone, 
  Mail,
  ArrowRight
} from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

// Add the PlaneIcon component from the provided code
const PlaneIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M16 10h4a2 2 0 0 1 0 4h-4l-4 7h-3l2 -7h-4l-2 2h-3l2 -4l-2 -4h3l2 2h4l-2 -7h3z" />
    </svg>
  );
};

// Constants for scroll behavior
const SCROLL_THRESHOLD = 50;
const SCROLL_BUFFER = 10; // Pixels buffer to prevent micro-movements
const DIRECTION_LOCK_THRESHOLD = 5; // Minimum scrolls in same direction to confirm direction change

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const location = useLocation();
  
  // Use Framer Motion's scroll utilities
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);
  const isScrollingDown = useRef(false);
  const consecutiveScrolls = useRef(0);
  const lastDirection = useRef<'up' | 'down' | null>(null);
  const tabVisibilityTimer = useRef<NodeJS.Timeout | null>(null);

  // Add effect to detect initial page load
  useEffect(() => {
    // After component mounts, set isInitialLoad to false
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Effect to detect visibility change (tab/window focus)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        // When returning to the tab, reset isInitialLoad to true temporarily
        // This will make the navbar animation match the page refresh animation
        setIsInitialLoad(true);
        setVisible(true);
        
        // Clear any existing timer
        if (tabVisibilityTimer.current) {
          clearTimeout(tabVisibilityTimer.current);
        }
        
        // Set a timer to revert isInitialLoad after animation completes
        tabVisibilityTimer.current = setTimeout(() => {
          setIsInitialLoad(false);
          tabVisibilityTimer.current = null;
        }, 2000);
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // Also handle window focus events as a fallback
    window.addEventListener('focus', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', handleVisibilityChange);
      
      // Clear timer if component unmounts
      if (tabVisibilityTimer.current) {
        clearTimeout(tabVisibilityTimer.current);
      }
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Function to check if a link is active
  const isActive = (path: string): boolean => {
    // Check if current path matches the link path
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  // Use Framer Motion's useMotionValueEvent to track scroll
  useMotionValueEvent(scrollY, "change", (latest) => {
    // Always show navbar at top of page
    if (latest <= 5) {
      setVisible(true);
      lastScrollY.current = latest;
      consecutiveScrolls.current = 0;
      lastDirection.current = null;
      return;
    }
    
    // Calculate delta to avoid micro-movements
    const delta = Math.abs(latest - lastScrollY.current);
    
    // Only process if we've scrolled enough to matter
    if (delta > SCROLL_BUFFER) {
      const currentDirection = latest > lastScrollY.current ? 'down' : 'up';
      
      // Check if direction has changed
      if (lastDirection.current !== currentDirection) {
        lastDirection.current = currentDirection;
        consecutiveScrolls.current = 1;
      } else {
        consecutiveScrolls.current++;
      }
      
      // Only act if we have enough consecutive scrolls in the same direction
      if (consecutiveScrolls.current >= DIRECTION_LOCK_THRESHOLD) {
        // Strict rule: When definitely scrolling down, hide the navbar
        if (currentDirection === 'down' && visible && latest > SCROLL_THRESHOLD) {
          setVisible(false);
        }
        // Strict rule: When definitely scrolling up, show the navbar
        else if (currentDirection === 'up' && !visible) {
          setVisible(true);
        }
      }
      
      lastScrollY.current = latest;
    }
  });

  // Track navbar height and adjust content padding
  useEffect(() => {
    const updateNavbarHeight = () => {
      const navbar = document.querySelector('.navbar-container');
      if (navbar) {
        const height = navbar.clientHeight;
        document.documentElement.style.setProperty('--nav-height', `${height}px`);
        document.body.style.paddingTop = `${height}px`;
      }
    };
    
    // Initial call and resize listener
    updateNavbarHeight();
    window.addEventListener('resize', updateNavbarHeight, { passive: true });
    
    return () => window.removeEventListener('resize', updateNavbarHeight);
  }, []);

  // Animation variants for Framer Motion
  const navbarVariants = {
    visible: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 0.8
      }
    },
    hidden: {
      y: "-100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  // Background blur animation variants
  const blurLayerVariants = {
    visible: {
      opacity: 1,
      filter: "blur(8px)",
      transition: { duration: 0.15 }
    },
    hidden: {
      opacity: 0.95,
      filter: "blur(8px)",
      transition: { duration: 0.15 }
    }
  };

  return (
    <motion.div 
      className="navbar-container fixed top-0 left-0 w-full"
      style={{ 
        height: 'var(--nav-height, 80px)',
        zIndex: 9999
      }}
      initial={{ y: -80 }}
      animate={visible ? { y: 0 } : { y: "-100%" }}
      transition={{ 
        type: isInitialLoad ? "tween" : "spring",
        stiffness: isInitialLoad ? undefined : 300,
        damping: isInitialLoad ? undefined : 30,
        duration: isInitialLoad ? 2 : undefined,
        delay: isInitialLoad ? 0.6 : 0,
        ease: isInitialLoad ? [0.22, 1, 0.36, 1] : undefined
      }}
      layout
    >
      <motion.nav 
        className="absolute inset-0 w-full bg-kalahari-brown flex items-center overflow-visible font-medium flex-wrap justify-between px-4 sm:px-6 py-3 border-kalahari-lightbrown border-solid border-b-3"
        layoutId="navbar"
      >
        {/* Semi-transparent background layer */}
        <motion.div 
          className="absolute inset-0 bg-kalahari-brown" 
          style={{ zIndex: 1 }}
          variants={blurLayerVariants}
        />
        
        <div className="flex items-center md:w-1/4 text-base text-white tracking-[-0.48px] relative z-10">
          <Link to="/" className="flex items-center">
            <img
              src="/Home Images/axarob tours.png"
              alt="Kalahari Axarob Tours Logo"
              className="h-12 sm:h-14 md:h-14 lg:h-16 object-contain"
            />
          </Link>
        </div>
        
        {/* Desktop and Tablet Navigation - Centered */}
        <div className="hidden md:flex md:w-2/4 items-center justify-center relative z-10">
          <div className="flex items-center gap-3 md:gap-4 lg:gap-10 my-auto overflow-x-auto">
            <Link to="/" className={`transition-colors font-medium uppercase text-xs md:text-sm tracking-wide ${isActive('/') ? 'text-kalahari-sun' : 'text-white hover:text-kalahari-sun'}`}>
              Home
            </Link>
            <Link to="/tours" className={`transition-colors font-medium uppercase text-xs md:text-sm tracking-wide ${isActive('/tours') ? 'text-kalahari-sun' : 'text-white hover:text-kalahari-sun'}`}>
              Tours
            </Link>
            <Link to="/about" className={`transition-colors font-medium uppercase text-xs md:text-sm tracking-wide ${isActive('/about') ? 'text-kalahari-sun' : 'text-white hover:text-kalahari-sun'}`}>
              About Us
            </Link>
            <Link to="/gallery" className={`transition-colors font-medium uppercase text-xs md:text-sm tracking-wide ${isActive('/gallery') ? 'text-kalahari-sun' : 'text-white hover:text-kalahari-sun'}`}>
              Gallery
            </Link>
            <Link to="/testimonials" className={`transition-colors font-medium uppercase text-xs md:text-sm tracking-wide whitespace-nowrap ${isActive('/testimonials') ? 'text-kalahari-sun' : 'text-white hover:text-kalahari-sun'}`}>
              Testimonial
            </Link>
          </div>
        </div>
        
        {/* Desktop and Tablet Actions */}
        <div className="flex items-center md:w-1/4 justify-end gap-2 md:gap-3 lg:gap-4 relative z-10">
          <div className="hidden md:flex items-center gap-2">
            <div className="border-l h-6 border-white/50"></div>
            <Link to="/tour-guide" className={`transition-colors font-medium uppercase text-xs md:text-sm tracking-wide whitespace-nowrap ${isActive('/tour-guide') ? 'text-kalahari-sun' : 'text-white hover:text-kalahari-sun'}`}>
              Tour Guide
            </Link>
          </div>
          <HoverBorderGradient
            containerClassName="rounded-full group/book-btn relative overflow-hidden"
            as="button"
            className="dark:bg-white bg-white text-black dark:text-black flex items-center space-x-1 md:space-x-2 transition-colors duration-300"
          >
            <div className="relative flex items-center space-x-1 md:space-x-2 px-2">
              <div className="flex items-center space-x-1 md:space-x-2 group-hover/book-btn:translate-x-40 transition-transform duration-500 relative z-10">
                <CalendarCheck className="h-3 w-3 md:h-4 md:w-4" />
                <span className="text-xs md:text-sm whitespace-nowrap">BOOK TOUR</span>
              </div>
              <div className="absolute inset-0 -translate-x-40 group-hover/book-btn:translate-x-0 flex items-center justify-center transition-transform duration-500 z-10">
                ✈️
              </div>
            </div>
          </HoverBorderGradient>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Enhanced Mobile Menu with Framer Motion Animation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="fixed top-[var(--nav-height,80px)] left-0 right-0 md:hidden w-full border-t border-kalahari-lightbrown/20 bg-kalahari-brown/95 backdrop-blur-lg py-3 px-4 shadow-lg z-[10000] max-h-[calc(100vh-var(--nav-height,80px))] overflow-hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {/* Navigation Links with Icons - More compact */}
              <div className="grid grid-cols-2 gap-2 mb-3">
                <Link 
                  to="/" 
                  className={`flex items-center gap-2 p-2 rounded-lg transition-colors ${
                    isActive('/') 
                    ? 'bg-kalahari-sun/20 text-kalahari-sun' 
                    : 'text-white hover:bg-white/10'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className={`rounded-full p-1.5 ${isActive('/') ? 'bg-kalahari-sun text-kalahari-brown' : 'bg-white/10'}`}>
                    <Home className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-medium text-sm block">Home</span>
                  </div>
                </Link>

                <Link 
                  to="/tours" 
                  className={`flex items-center gap-2 p-2 rounded-lg transition-colors ${
                    isActive('/tours') 
                    ? 'bg-kalahari-sun/20 text-kalahari-sun' 
                    : 'text-white hover:bg-white/10'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className={`rounded-full p-1.5 ${isActive('/tours') ? 'bg-kalahari-sun text-kalahari-brown' : 'bg-white/10'}`}>
                    <Map className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-medium text-sm block">Tours</span>
                  </div>
                </Link>

                <Link 
                  to="/about" 
                  className={`flex items-center gap-2 p-2 rounded-lg transition-colors ${
                    isActive('/about') 
                    ? 'bg-kalahari-sun/20 text-kalahari-sun' 
                    : 'text-white hover:bg-white/10'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className={`rounded-full p-1.5 ${isActive('/about') ? 'bg-kalahari-sun text-kalahari-brown' : 'bg-white/10'}`}>
                    <Info className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-medium text-sm block">About Us</span>
                  </div>
                </Link>

                <Link 
                  to="/gallery" 
                  className={`flex items-center gap-2 p-2 rounded-lg transition-colors ${
                    isActive('/gallery') 
                    ? 'bg-kalahari-sun/20 text-kalahari-sun' 
                    : 'text-white hover:bg-white/10'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className={`rounded-full p-1.5 ${isActive('/gallery') ? 'bg-kalahari-sun text-kalahari-brown' : 'bg-white/10'}`}>
                    <Image className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-medium text-sm block">Gallery</span>
                  </div>
                </Link>

                <Link 
                  to="/testimonials" 
                  className={`flex items-center gap-2 p-2 rounded-lg transition-colors ${
                    isActive('/testimonials') 
                    ? 'bg-kalahari-sun/20 text-kalahari-sun' 
                    : 'text-white hover:bg-white/10'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className={`rounded-full p-1.5 ${isActive('/testimonials') ? 'bg-kalahari-sun text-kalahari-brown' : 'bg-white/10'}`}>
                    <Star className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-medium text-sm block">Testimonials</span>
                  </div>
                </Link>

                <Link 
                  to="/tour-guide" 
                  className={`flex items-center gap-2 p-2 rounded-lg transition-colors ${
                    isActive('/tour-guide') 
                    ? 'bg-kalahari-sun/20 text-kalahari-sun' 
                    : 'text-white hover:bg-white/10'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className={`rounded-full p-1.5 ${isActive('/tour-guide') ? 'bg-kalahari-sun text-kalahari-brown' : 'bg-white/10'}`}>
                    <User className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-medium text-sm block">Tour Guide</span>
                  </div>
                </Link>
              </div>

              {/* Divider - Thinner */}
              <div className="border-t border-white/10 my-2"></div>

              {/* Contact Information - More compact */}
              <div className="mb-3 text-white">
                <h3 className="text-xs font-medium mb-1.5 text-kalahari-sun">Contact Us</h3>
                <div className="flex flex-wrap gap-3">
                  <a href="tel:+26461222942" className="flex items-center gap-1.5 text-xs hover:text-kalahari-sun transition-colors">
                    <Phone className="w-3 h-3" />
                    <span>+264 61 222 942</span>
                  </a>
                  <a href="mailto:info@kalaharitours.com" className="flex items-center gap-1.5 text-xs hover:text-kalahari-sun transition-colors">
                    <Mail className="w-3 h-3" />
                    <span>info@kalaharitours.com</span>
                  </a>
                </div>
              </div>

              {/* Action Buttons - Prominent */}
              <div className="grid grid-cols-2 gap-2 mt-2">
                <Link 
                  to="#contact" 
                  className="flex justify-center items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg py-2 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span className="text-sm font-medium">Contact</span>
                </Link>
                
                <Link 
                  to="/tours" 
                  className="flex justify-center items-center gap-1.5 bg-kalahari-sun text-kalahari-brown rounded-lg py-2 transition-colors hover:bg-kalahari-sun/90"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span className="text-sm font-medium">Book Tour</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </motion.div>
  );
};

export default Navbar;

