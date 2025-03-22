import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      {/* Background wrapper that goes behind the navbar */}
      <div className="fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-kalahari-lightbrown/50 to-kalahari-sand/30 -z-10" />
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 text-kalahari-brown">404</h1>
            <p className="text-xl text-kalahari-charcoal mb-4">Oops! Page not found</p>
            <a href="/" className="text-kalahari-brown hover:text-kalahari-darkbrown underline">
              Return to Home
            </a>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default NotFound;
