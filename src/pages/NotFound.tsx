import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const NotFound: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Kalahari Axarob Tours</title>
        <meta name="description" content="The page you are looking for could not be found. Explore our historical, cultural, and shore excursion tours in Namibia instead." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      
      <Navbar />
      
      <main className="bg-black text-white min-h-[70vh] flex items-center">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-kalahari-sand">404</h1>
          <h2 className="text-2xl md:text-3xl mb-8">Page Not Found</h2>
          
          <p className="max-w-2xl mx-auto mb-8 text-gray-300">
            Sorry, the page you are looking for does not exist or has been moved. 
            Please check the URL or navigate back to our homepage to discover our 
            historical tours in Namibia.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="px-6 py-3 bg-kalahari-sand text-black font-semibold rounded hover:bg-kalahari-sand/80 transition-colors"
            >
              Return to Homepage
            </Link>
            
            <Link 
              to="/tours" 
              className="px-6 py-3 border border-kalahari-sand text-kalahari-sand font-semibold rounded hover:bg-kalahari-sand/10 transition-colors"
            >
              Explore Our Tours
            </Link>
          </div>
          
          <div className="mt-12">
            <h3 className="text-xl mb-4 font-medium">Looking for something specific?</h3>
            <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
              <Link to="/blog/herero-nama-genocide" className="text-kalahari-sand hover:underline">
                Herero & Nama Genocide
              </Link>
              <Link to="/blog/german-architecture" className="text-kalahari-sand hover:underline">
                German Colonial Architecture
              </Link>
              <Link to="/blog/township-tour" className="text-kalahari-sand hover:underline">
                Township Tours
              </Link>
              <Link to="/blog/shore-excursion" className="text-kalahari-sand hover:underline">
                Shore Excursions
              </Link>
              <Link to="/contact" className="text-kalahari-sand hover:underline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default NotFound;
