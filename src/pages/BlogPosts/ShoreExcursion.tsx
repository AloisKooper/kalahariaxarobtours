import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import BlogPostTemplate from "@/components/blog/BlogPostTemplate";

const ShoreExcursion: React.FC = () => {
  // State to track viewport size
  const [isMobile, setIsMobile] = useState(false);
  
  // Effect to handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    handleResize();
    
    // Add resize listener
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Helmet>
        <title>Premium Shore Excursion: Walvis Bay to Swakopmund | Cruise Day Trip | Kalahari Axarob Tours</title>
        <meta 
          name="description" 
          content="Maximize your cruise stopover with our Walvis Bay to Swakopmund shore excursion. Visit flamingos, Dune 7, historical landmarks, and German colonial architecture in 8 hours." 
        />
        <meta name="keywords" content="shore excursion Namibia, Walvis Bay cruise tour, Swakopmund day trip, Namibia cruise stopover, historical tour Swakopmund, flamingos Walvis Bay, Dune 7" />
        <meta property="og:title" content="Premium Shore Excursion: Walvis Bay to Swakopmund | Cruise Day Trip" />
        <meta property="og:description" content="Make the most of your cruise stopover with our comprehensive shore excursion from Walvis Bay to Swakopmund featuring flamingos, Dune 7, and historical landmarks." />
        <meta property="og:image" content="/Home Images/Cruise Liner Shore Excursion.jpg" />
        <meta property="og:url" content="https://kalahariaxarobtours.com/blog/shore-excursion" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Premium Shore Excursion: Walvis Bay to Swakopmund | Cruise Day Trip" />
        <meta name="twitter:description" content="Make the most of your cruise stopover with our comprehensive shore excursion from Walvis Bay to Swakopmund featuring flamingos, Dune 7, and historical landmarks." />
        <meta name="twitter:image" content="/Home Images/Cruise Liner Shore Excursion.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            'headline': 'Walvis Bay to Swakopmund: The Perfect Shore Excursion',
            'image': '/Home Images/Cruise Liner Shore Excursion.jpg',
            'datePublished': '2024-03-03T09:00:00Z',
            'dateModified': '2024-03-25T14:30:00Z',
            'author': {
              '@type': 'Person',
              'name': 'Dennis Liebenberg',
              'url': 'https://kalahariaxarobtours.com/about'
            },
            'publisher': {
              '@type': 'Organization',
              'name': 'Kalahari Axarob Tours',
              'logo': {
                '@type': 'ImageObject',
                'url': 'https://kalahariaxarobtours.com/logo.png'
              }
            },
            'description': 'Discover how cruise liner passengers can maximize their day ashore with a comprehensive historical and natural tour from Walvis Bay to Swakopmund.',
            'mainEntityOfPage': {
              '@type': 'WebPage',
              '@id': 'https://kalahariaxarobtours.com/blog/shore-excursion'
            }
          })}
        </script>
      </Helmet>
      
      <Navbar />
      
      <PageHero
        title="The Perfect Shore Excursion"
        subtitle="From Walvis Bay to Swakopmund: Maximize your day ashore"
        backgroundImage="/Home Images/Cruise Liner Shore Excursion.jpg"
        isMobile={isMobile}
      />
      
      {/* White background container for all content below hero INCLUDING footer */}
      <div className="w-full bg-white relative z-10">
        <BlogPostTemplate
          title="Walvis Bay to Swakopmund: The Perfect Shore Excursion"
          authorName="Dennis Liebenberg"
          authorTitle="Tour Guide and Shore Excursion Specialist"
          date="March 3, 2024"
          readTime="4 min"
          imageUrl="/Home Images/Cruise Liner Shore Excursion.jpg"
          imageAlt="Shore excursion from Walvis Bay to Swakopmund featuring historical sites"
          sourceUrl="https://www.cruisecritic.com/port/newport/walvis-bay-namibia/shore-excursion"
          sourceName="Cruise Critic Shore Excursions"
        >
          <p id="section-2">
            For cruise passengers docking at Walvis Bay, the challenge is maximizing limited time while experiencing the best of Namibia. Our shore excursion provides a comprehensive experience, taking you from the harbor to the most significant natural and historical attractions in the area.
          </p>
          
          <p>
            Known as "the little piece of Germany under the African skies," Swakopmund offers a uniquely diverse shore excursion combining natural wonders with historical insights. As descendants of the native Namaqua tribe, we provide a personal connection to the region's history and culture.
          </p>
          
          <h2>Your Shore Excursion Itinerary</h2>
          
          <h3>Morning: Natural Wonders</h3>
          <p>
            Your excursion begins as you disembark at Walvis Bay Harbor, where our guides greet you. We first visit the Walvis Bay Lagoon, a RAMSAR wetland site, to spot thousands of flamingos feeding in the shallow waters. From there, we continue to Dune 7, one of Namibia's highest sand dunes at approximately 130 meters, offering panoramic desert views.
          </p>
          
          <h3>Midday: Swakopmund Exploration</h3>
          <p>
            Traveling north along the coast, we arrive in Swakopmund for lunch at a local restaurant featuring Namibian cuisine with German influences. Afterward, our historical tour begins, exploring well-preserved German colonial architecture and significant historical sites throughout the charming streets.
          </p>
          
          <h3 id="section-3">Afternoon: Historical Insights</h3>
          <p>
            The core of our tour focuses on sites related to the 1904-1908 Nama and Herero Genocide, regarded as the first genocide of the 20th century. Your visit includes:
          </p>
          
          <ul>
            <li><strong>Concentration Camp Mass Graves:</strong> A solemn reminder of colonial history</li>
            <li><strong>Alte Kaserne (Old Military Barracks):</strong> Once housing German colonial soldiers</li>
            <li><strong>Old Hospital:</strong> A colonial-era structure with historical significance</li>
            <li><strong>The Jetty:</strong> Built in 1902 as a landing site for supplies</li>
            <li><strong>Woermann House:</strong> A landmark with a distinctive tower</li>
            <li><strong>German War Memorial:</strong> Offering perspective on colonial presence</li>
          </ul>
          
          <p>
            We include free time in Swakopmund for browsing craft shops, enjoying a German-style bakery, or simply experiencing the unique atmosphere where desert meets ocean. Before returning to port, we stop at the Old Bahnhof (Railway Station), an architectural gem now serving as a hotel.
          </p>
          
          <p>
            Our return journey to Walvis Bay is carefully timed to ensure you arrive back at your cruise ship by 17:45-18:00, well before departure.
          </p>
          
          <h2>What Makes Our Shore Excursion Unique</h2>
          
          <ul>
            <li><strong>Local Perspective:</strong> Our guides bring personal connections to the history, offering insights into how colonial events shaped modern Namibian identity.</li>
            <li><strong>Comprehensive Experience:</strong> In just 8 hours, you'll experience both natural wonders and historical sites, from flamingos and sand dunes to colonial architecture and significant landmarks.</li>
            <li><strong>Small Group Size:</strong> With a maximum of 20 travelers, we provide a more personalized experience than larger tour groups, allowing better interaction with guides and more flexible exploration.</li>
          </ul>
          
          <h2>Practical Information</h2>
          
          <h3>What's Included</h3>
          <p>
            Transportation in comfortable, air-conditioned vehicles, English-speaking local guide, lunch, non-alcoholic beverages, and direct harbor pickup and return.
          </p>
          
          <h3>What to Bring</h3>
          <p>
            Sunscreen, shade hat, comfortable walking shoes, camera, and a light jacket or sweater (coastal winds can make temperatures feel cooler).
          </p>
          
          <h3>Booking Information</h3>
          <p>
            Book in advance through our website or through your cruise line if they've partnered with us. Early booking is recommended as our small-group format means spaces fill quickly, especially during peak cruise season.
          </p>
          
          <p>
            For passengers with specific interests, we can customize aspects of the tour to focus more deeply on either natural highlights or historical sites, depending on your preferences.
          </p>
        </BlogPostTemplate>
        <Footer />
      </div>
    </>
  );
};

export default ShoreExcursion; 