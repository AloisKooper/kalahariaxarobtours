import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import BlogPostTemplate from "@/components/blog/BlogPostTemplate";

const SwakopmundExperiences: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const pageTitle = "Beyond History: Top Experiences in Swakopmund";
  const imageUrl = "/Home Images/jetty hero.jpg";

  return (
    <>
      <Helmet>
        <title>{pageTitle} | Kalahari Axarob Tours Blog</title>
        <meta 
          name="description" 
          content="From relaxing on the beach and exploring the jetty to adventure activities and charming cafes, discover the best experiences Swakopmund has to offer."
        />
        {/* Add other relevant meta tags (keywords, og, twitter) similar to ShoreExcursion.tsx */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content="Discover the best activities and experiences Swakopmund has to offer beyond its historical sites." />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content="https://kalahariaxarobtours.com/blog/herero-nama-genocide" />{/* Update URL - or use a new one? */}
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        {/* Add more meta tags */}
      </Helmet>
      
      <Navbar />
      
      <PageHero
        title="Top Experiences"
        subtitle="Beyond History in Swakopmund"
        backgroundImage={imageUrl}
        isMobile={isMobile}
      />
      
      <div className="w-full bg-white relative z-10">
        <BlogPostTemplate
          title={pageTitle}
          authorName="Kalahari Axarob Tours"
          authorTitle="Your Local Experts"
          date="July 15, 2024"
          readTime="6 min"
          imageUrl={imageUrl}
          imageAlt="Swakopmund Jetty extending into the ocean"
          // Optional source link if applicable
          // sourceUrl="URL_HERE"
          // sourceName="Source Name Here"
        >
          {/* Actual Blog Content Starts Here */}
          <p>
            Swakopmund is renowned for its fascinating history and unique architecture, but this coastal Namibian town offers so much more! Whether you're an adrenaline junkie, a nature lover, or simply looking to relax and soak up the atmosphere, Swakopmund has an abundance of experiences waiting for you. Let's explore some of the top things to do beyond the historical tours.
          </p>
          
          <h2>Coastal Charms and Relaxation</h2>
          <p>
            The Atlantic Ocean is central to Swakopmund's identity. Take a leisurely walk along the historic <a href="#" target="_blank" rel="noopener noreferrer">Swakopmund Jetty</a>, originally built in 1905. It's the perfect spot for fishing, enjoying the sunset, or simply watching the waves crash. The nearby beaches, like Palm Beach, offer a place to relax, although the Benguela Current keeps the water refreshingly cold year-round!
          </p>

          <figure className="my-6">
             <img src="/Home Images/Swakopmund Beach.jpg" alt="People relaxing on Swakopmund Beach" className="rounded-lg shadow-md mx-auto"/>
             <figcaption className="text-center text-sm text-kalahari-charcoal/80 mt-2">Enjoying the coastal atmosphere at Swakopmund.</figcaption>
          </figure>

          <h2>Desert Adventures</h2>
          <p>
            Just outside town lie the towering dunes of the Namib Desert, offering a playground for adventure seekers. Popular activities include:
          </p>
          <ul>
            <li><strong>Sandboarding:</strong> Experience the thrill of sliding down the dunes on a traditional Swakopmund lie-down board or a snowboard-style stand-up board.</li>
            <li><strong>Quad Biking:</strong> Explore the dune belt on guided quad bike tours, ranging from scenic rides to more adventurous trails.</li>
            <li><strong>Living Desert Tours:</strong> Discover the surprising small creatures that survive in this arid environment on specialized guided tours.</li>
            <li><strong>Scenic Flights:</strong> Get a bird's-eye view of the dramatic landscape where the dunes meet the ocean.</li>
          </ul>

          <h2>Town Delights and Culture</h2>
          <p>
            Wander through Swakopmund's charming streets, browsing the various craft shops, art galleries, and boutiques. Don't miss the bustling <a href="#" target="_blank" rel="noopener noreferrer">Craft Market</a> near the lighthouse for unique Namibian souvenirs. Indulge in coffee and cake (Kaffee und Kuchen) at one of the many German-style cafes, or enjoy fresh seafood at a local restaurant. Visiting the Swakopmund Museum provides further insight into the area's history and natural environment.
          </p>
          
          <figure className="my-6">
             <img src="/Home Images/Craft Market.jpg" alt="Local craft market stall" className="rounded-lg shadow-md mx-auto"/>
             <figcaption className="text-center text-sm text-kalahari-charcoal/80 mt-2">Exploring local crafts in Swakopmund.</figcaption>
          </figure>

          <p>
            Swakopmund truly offers a diverse range of experiences. From the tranquility of the coast to the adrenaline of the dunes and the charm of the town itself, there's something for everyone to enjoy beyond its historical facade.
          </p>
          {/* End Blog Content */}
        </BlogPostTemplate>
        <Footer />
      </div>
    </>
  );
};

export default SwakopmundExperiences; 