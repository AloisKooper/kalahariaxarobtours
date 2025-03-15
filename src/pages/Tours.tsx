
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ToursList from "@/components/tours/ToursList";
import TourBookingWidget from "@/components/tours/TourBookingWidget";
import TourFAQ from "@/components/tours/TourFAQ";
import { Helmet } from "react-helmet";

const Tours: React.FC = () => {
  return (
    <div className="bg-white flex flex-col overflow-hidden items-center">
      <Helmet>
        <title>Available Tours | Kalahari Axarob Tours</title>
        <meta name="description" content="Explore our available historical tours in and around Swakopmund, Namibia. Tours designed for cruise ship passengers." />
      </Helmet>
      <Navbar />
      <div className="w-full py-16 bg-kalahari-sand/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-kalahari-brown">Our Historical Tours</h1>
            <p className="text-lg text-kalahari-charcoal/80">
              Explore the rich history and culture of Swakopmund and surrounding areas with our expert-led tours designed specifically for cruise ship passengers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ToursList />
            </div>
            <div>
              <TourBookingWidget />
            </div>
          </div>
        </div>
      </div>
      <TourFAQ />
      <Footer />
    </div>
  );
};

export default Tours;
