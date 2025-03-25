import React, { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import Tours from "@/pages/Tours";
import NotFound from "@/pages/NotFound";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import Sitemap from "@/pages/Sitemap";
import About from "@/pages/About";
import GalleryPage from "@/pages/Gallery";
import TestimonialPage from "@/pages/Testimonial";
import TourGuidePage from "@/pages/TourGuide";
import Contact from "@/pages/Contact";
import BlogPage from "@/pages/Blog";
import ScrollToTop from "@/components/shared/ScrollToTop";

// Blog Posts
import HerreroNamaGenocide from "@/pages/BlogPosts/HerreroNamaGenocide";
import GermanArchitecture from "@/pages/BlogPosts/GermanArchitecture";
import ShoreExcursion from "@/pages/BlogPosts/ShoreExcursion";
import TownshipTour from "@/pages/BlogPosts/TownshipTour";
import TownshipTourUpdate from "@/pages/BlogPosts/TownshipTourUpdate";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <>
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/tours" element={<Tours />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/testimonial" element={<TestimonialPage />} />
              <Route path="/tour-guide" element={<TourGuidePage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<BlogPage />} />
              
              {/* Blog Post Routes */}
              <Route path="/blog/herero-nama-genocide" element={<HerreroNamaGenocide />} />
              <Route path="/blog/german-architecture" element={<GermanArchitecture />} />
              <Route path="/blog/shore-excursion" element={<ShoreExcursion />} />
              <Route path="/blog/township-tour" element={<TownshipTour />} />
              <Route path="/blog/township-tour-update" element={<TownshipTourUpdate />} />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
          <Toaster />
          <Sonner />
        </>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
