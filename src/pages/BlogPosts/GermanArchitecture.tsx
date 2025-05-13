import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import BlogPostTemplate from "@/components/blog/BlogPostTemplate";

const SwakopmundArchitecture: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const pageTitle = "Swakopmund's Architectural Gems: A Walk Through Time";
  const imageUrl = "/Home Images/Woermann House.jpg";

  return (
    <>
      <Helmet>
        <title>{pageTitle} | Kalahari Axarob Tours Blog</title>
        <meta 
          name="description" 
          content="Discover the charming blend of German colonial and modern architecture that gives Swakopmund its unique character. Explore iconic buildings and hidden details."
        />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content="Discover the charming blend of German colonial and modern architecture that gives Swakopmund its unique character." />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content="https://kalahariaxarobtours.com/blog/german-architecture" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      
      <Navbar />
      
      <PageHero
        title="Architectural Gems"
        subtitle="A Walk Through Swakopmund's Time"
        backgroundImage={imageUrl}
        isMobile={isMobile}
      />
      
      <div className="w-full bg-white relative z-10">
        <BlogPostTemplate
          title={pageTitle}
          authorName="Kalahari Axarob Tours"
          authorTitle="Your Local Experts"
          date="July 10, 2024"
          readTime="5 min"
          imageUrl={imageUrl}
          imageAlt="Woermann House in Swakopmund"
        >
          <p>
            Swakopmund, nestled dramatically between the rolling dunes of the Namib Desert and the cold embrace of the Atlantic Ocean, offers more than just stunning natural beauty. Its streets whisper tales of a bygone era, primarily through its remarkable collection of German colonial architecture, standing in fascinating contrast to the surrounding African landscape. Join us on a walk through time as we explore some of Swakopmund's most captivating architectural gems.
          </p>
          
          <h2>The Legacy of Colonial Design</h2>
          <p>
            Founded in 1892 as the main harbour for German South West Africa, Swakopmund quickly developed a distinct architectural identity. Influenced by styles popular in Germany at the time, buildings often feature ornate gables, bay windows (Erker), half-timbering (Fachwerk), and decorative facades. These were adapted, sometimes imperfectly, to the harsh coastal desert environment, creating a unique and somewhat surreal atmosphere.
          </p>

          <h3>Iconic Landmarks You Must See</h3>
          <ul>
            <li><strong>Woermannhaus (1905):</strong> Perhaps the most iconic building, originally the headquarters of the Damara and Namaqua Trading Company. Its prominent tower (Damara Tower) offers fantastic views over the town and sea. Today it houses the public library and an art gallery.</li>
            <li><strong>Hohenzollern Building (1906):</strong> A former hotel known for its elaborate baroque style and a distinctive statue of Atlas supporting a globe on its roof gable.</li>
            <li><strong>Alte Kaserne (Old Barracks, 1906):</strong> A massive, fortress-like structure originally housing soldiers, reflecting the military aspect of the colonial presence.</li>
            <li><strong>Swakopmund Lighthouse (1903):</strong> The striking red-and-white striped lighthouse remains an important navigational aid and a beloved town landmark.</li>
            <li><strong>Old Railway Station (Bahnhof, 1901):</strong> A beautiful example of colonial station architecture, now part of a luxury hotel complex.</li>
          </ul>

          <h2>Beyond the Colonial Era</h2>
          <p>
            While the German colonial influence is undeniable, Swakopmund's architecture isn't frozen in time. You'll also find charming Cape Dutch influences, pragmatic modern structures, and homes designed to maximize ocean views and shelter from the wind. This blend creates a layered and visually interesting townscape.
          </p>

          <figure className="my-6">
             <img src="/Home Images/Swakop Landmarks.jpg" alt="Collage of Swakopmund Architecture" className="rounded-lg shadow-md mx-auto"/>
             <figcaption className="text-center text-sm text-kalahari-charcoal/80 mt-2">Swakopmund offers a diverse range of architectural styles.</figcaption>
          </figure>

          <p>
            Exploring Swakopmund's architecture is like reading chapters of its history. Whether you're an architecture buff or simply enjoy soaking up the atmosphere of unique places, a walk through Swakopmund's streets is a rewarding experience. Consider joining our <a href="/tours">Swakopmund City Discovery Tour</a> for expert insights into these historical buildings and more.
          </p>
        </BlogPostTemplate>
        <Footer />
      </div>
    </>
  );
};

export default SwakopmundArchitecture; 