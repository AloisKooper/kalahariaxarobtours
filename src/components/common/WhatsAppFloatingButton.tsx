import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WHATSAPP_NUMBER = '264812583089';
const PREFILLED_MESSAGE = encodeURIComponent("Hello Kalahari Axarob Tours, we want to book a tour with you.");
const CTA_TEXT = 'Book a tour';

// Brand colours
const WHATSAPP_GREEN = '#25D366';
const BRAND_BROWN = '#7D5A3C';
const BRAND_BROWN_HOVER = '#A67C52';

const WhatsAppFloatingButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll-based visibility
  const handleScroll = useCallback(() => {
    const currentY = window.scrollY;
    setIsVisible(currentY <= 100 || currentY < lastScrollY);
    setLastScrollY(currentY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Auto-expand on load to draw attention
  useEffect(() => {
    const openTimer = setTimeout(() => {
      setIsExpanded(true);
      const closeTimer = setTimeout(() => setIsExpanded(false), 3000);
      return () => clearTimeout(closeTimer);
    }, 2500);
    return () => clearTimeout(openTimer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex items-center"
        >
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${PREFILLED_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-end relative"
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
            aria-label="Chat with us on WhatsApp"
          >
            {/* Slide-out label */}
            <motion.div
              initial={false}
              animate={{
                width: isExpanded ? 'auto' : 0,
                opacity: isExpanded ? 1 : 0,
                paddingRight: isExpanded ? '4.5rem' : 0,
              }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full py-2.5 md:py-3 shadow-lg overflow-hidden whitespace-nowrap z-0 flex items-center transition-colors duration-300"
              style={{
                backgroundColor: isExpanded ? BRAND_BROWN : BRAND_BROWN,
                paddingLeft: isExpanded ? '1.25rem' : '0rem',
                minWidth: isExpanded ? 'max-content' : '0px',
                border: '1px solid rgba(166,124,82,0.4)',
              }}
            >
              <span className="font-semibold text-white text-sm md:text-base mr-2 md:mr-4">
                {CTA_TEXT}
              </span>
            </motion.div>

            {/* Main WhatsApp button */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="relative w-[50px] h-[50px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px] rounded-full flex items-center justify-center z-10 transition-shadow duration-300"
              style={{
                backgroundColor: WHATSAPP_GREEN,
                boxShadow: '0 4px 14px 0 rgba(37,211,102,0.39)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = BRAND_BROWN_HOVER;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 14px 0 rgba(125,90,60,0.45)`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = WHATSAPP_GREEN;
                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 14px 0 rgba(37,211,102,0.39)';
              }}
            >
              <FaWhatsapp className="text-white text-2xl md:text-3xl lg:text-4xl" />

              {/* Ping animation */}
              <span
                className="absolute inline-flex h-full w-full rounded-full opacity-60 animate-ping"
                style={{ backgroundColor: WHATSAPP_GREEN, animationDuration: '3s' }}
              />
            </motion.div>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppFloatingButton;
