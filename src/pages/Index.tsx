import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import TourAgenda from "@/components/home/TourAgenda";
import Gallery from "@/components/home/Gallery";
import TourTypes from "@/components/home/TourTypes";
import AboutGuide from "@/components/home/AboutGuide";
import Testimonials from "@/components/home/Testimonials";
import BlogArticles from "@/components/home/BlogArticles";
import ContactSection from "@/components/home/ContactSection";

const Index: React.FC = () => {
  return (
    <div className="bg-white flex flex-col overflow-hidden items-center">
      <Navbar />
      <HeroSection />
      <TourAgenda />
      <Gallery />
      <TourTypes />
      <AboutGuide />
      <Testimonials />
      <BlogArticles />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
