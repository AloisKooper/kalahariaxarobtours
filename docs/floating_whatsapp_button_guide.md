# Floating WhatsApp Button Integration Guide

## Prompt for Other Projects

If you want an AI assistant to recreate this exact button in another project, use the following prompt:

> "Create a floating WhatsApp button component in React (using Tailwind CSS, Framer Motion, and react-icons) that sits in the bottom right corner of the screen. 
> 
> **Requirements:**
> 1. The main button must be perfectly round, use the authentic WhatsApp green (`#25D366`), and scale responsively across breakpoints (50px mobile, 60px tablet, 70px desktop). Include a subtle ping animation behind it to draw attention.
> 2. It must include a smooth, spring-animated hover scaling effect.
> 3. Behind the main button, there must be a fully rounded slide-out container (matching the brand's primary color, e.g., `bg-amber-700`) with white text saying 'Book a tour' (or similar CTA).
> 4. The text container should slide out smoothly from behind the WhatsApp button when hovered. It should also periodically auto-open when the site first loads to draw the user's eye.
> 5. The button should track the window scroll position: hiding downwards when the user scrolls down past 100px, and smoothly reappearing when the user scrolls up."

---

## Required Dependencies

You will need the following packages installed in your React project:

```bash
npm install framer-motion react-icons
# or
pnpm add framer-motion react-icons
# or
yarn add framer-motion react-icons
```

You must also have **Tailwind CSS** configured in your project for the styling to work.

---

## Exact Component Code (`WhatsAppFloatingButton.tsx`)

Create a new file called `WhatsAppFloatingButton.tsx` and paste the following code exactly:

```tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppFloatingButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // If we scroll down past 100px, hide the button
      // If we scroll up, show the button
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Auto-open the text after a few seconds when the site loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHovered(true);
      
      // Close it back after 3 seconds
      const closeTimer = setTimeout(() => {
        setIsHovered(false);
      }, 3000);
      
      return () => clearTimeout(closeTimer);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} // Smooth easing
          className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex items-center"
        >
          <a
            href="https://wa.me/264813236891"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-end relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-label="Chat with us on WhatsApp"
          >
            {/* Slide-out container */}
            <motion.div
              initial={false}
              animate={{
                width: isHovered ? 'auto' : 0,
                opacity: isHovered ? 1 : 0,
                // Adjusting padding so it slides seamlessly from behind
                paddingRight: isHovered ? '3.5rem' : 0,
              }}
              transition={{
                duration: 0.4,
                ease: [0.2, 0.8, 0.2, 1], // Smooth, snappy spring-like easing
              }}
              // Change bg-amber-700 to match your new project's primary brand color
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-amber-700 text-white rounded-full py-2.5 md:py-3 shadow-lg overflow-hidden whitespace-nowrap z-0 border border-amber-600/50 flex items-center"
              style={{
                paddingLeft: isHovered ? '1.5rem' : '0rem',
                minWidth: isHovered ? 'max-content' : '0px',
              }}
            >
              <span className="font-semibold text-sm md:text-base mr-2 md:mr-4">Book a tour</span>
            </motion.div>

            {/* Main WhatsApp Button */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              // Responsive sizing: W/H 50px on mobile, 60px on tablet, 70px on desktop
              className="relative w-[50px] h-[50px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px] rounded-full flex items-center justify-center shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] z-10"
              style={{ backgroundColor: '#25D366' }} // Official WhatsApp Green
            >
              <FaWhatsapp className="text-white text-2xl md:text-3xl lg:text-4xl" />
              
              {/* Subtle ping animation to draw attention */}
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping" style={{ animationDuration: '3s' }}></span>
            </motion.div>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppFloatingButton;
```

---

## Integration (`App.tsx` or Root Layout)

To use the button, simply import it into your root layout file (like `App.tsx` or `RootLayout.tsx`) and place it inside your Router or Router wrapper so it remains present on every page:

```tsx
import WhatsAppFloatingButton from "./components/common/WhatsAppFloatingButton";

// Inside your main layout render:
<BrowserRouter>
  <WhatsAppFloatingButton />
  {/* The rest of your routes/components */}
</BrowserRouter>
```
