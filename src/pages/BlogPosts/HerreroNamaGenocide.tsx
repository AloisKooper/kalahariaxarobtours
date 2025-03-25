import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import BlogPostTemplate from "@/components/blog/BlogPostTemplate";

const HerreroNamaGenocide: React.FC = () => {
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
        <title>Namibia's First Genocide: The Herero and Nama Tragedy | Historical Tour Sites | Kalahari Axarob Tours</title>
        <meta name="description" content="Explore the complex history of the 1904-1908 Herero and Nama Genocide in Namibia through significant historical sites in Swakopmund and learn about its lasting impact." />
        <meta name="keywords" content="Herero Nama genocide, Namibian genocide, German colonial history, Swakopmund historical sites, Namibia historical tour, Alte Kaserne, Marine Memorial" />
        <meta property="og:title" content="Namibia's First Genocide: The Herero and Nama Tragedy | Historical Tour Sites" />
        <meta property="og:description" content="Visit key historical sites in Swakopmund that bear witness to the 1904-1908 Herero and Nama Genocide, recognized as the first genocide of the 20th century." />
        <meta property="og:image" content="/Home Images/Memorial Site.jpg" />
        <meta property="og:url" content="https://kalahariaxarobtours.com/blog/herero-nama-genocide" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Namibia's First Genocide: The Herero and Nama Tragedy | Historical Tour Sites" />
        <meta name="twitter:description" content="Visit key historical sites in Swakopmund that bear witness to the 1904-1908 Herero and Nama Genocide, recognized as the first genocide of the 20th century." />
        <meta name="twitter:image" content="/Home Images/Memorial Site.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            'headline': 'The Untold Story of Namibia\'s First Genocide',
            'image': '/Home Images/Memorial Site.jpg',
            'datePublished': '2024-03-15T08:00:00Z',
            'dateModified': '2024-03-25T14:30:00Z',
            'author': {
              '@type': 'Person',
              'name': 'Dr. Isabel V. Hull',
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
            'description': 'Explore the complex history of the 1904-1908 Herero and Nama Genocide in Namibia and its lasting impact on the country\'s cultural landscape.',
            'mainEntityOfPage': {
              '@type': 'WebPage',
              '@id': 'https://kalahariaxarobtours.com/blog/herero-nama-genocide'
            }
          })}
        </script>
      </Helmet>
      
      <Navbar />
      
      <PageHero
        title="The Untold Story of Namibia's First Genocide"
        subtitle="Exploring historical sites that commemorate the Herero and Nama Genocide"
        backgroundImage="/Home Images/Memorial Site.jpg"
        isMobile={isMobile}
      />
      
      {/* White background container for all content below hero INCLUDING footer */}
      <div className="w-full bg-white relative z-10">
        <BlogPostTemplate
          title="Walk through the remnants of the Herero and Nama genocide"
          authorName="Dr. Isabel V. Hull"
          authorTitle="Historian and Author"
          date="March 15, 2024"
          readTime="6 min"
          imageUrl="/Home Images/Memorial Site.jpg"
          imageAlt="Memorial site commemorating the Herero and Nama genocide in Namibia"
          sourceUrl="https://www.museeholocauste.ca/en/resources-training/herero-genocide-namibia/"
          sourceName="Montreal Holocaust Museum"
        >
          <p id="section-2">
            In the early 20th century, Namibia (then German South West Africa) was the site of the first genocide of the 20th century. Between 1904 and 1908, German colonial forces systematically killed an estimated 65,000 Herero (about 80% of their population) and 10,000 Nama people (50% of their population). This tragic chapter in history has shaped Namibia's path to independence and continues to impact the nation today.
          </p>
          
          <h2>The Historical Context</h2>
          <p>
            In the 19th century, several ethnic groups populated Namibia, including the San, Damara, Ovambo, Nama, and Herero. The Nama and Herero were the country's two main tribes, primarily engaged in livestock farming and deeply connected to their ancestral lands.
          </p>
          
          <p>
            German colonization began in 1884. Following the discovery of diamonds in 1894, German interest intensified, leading to increased settlement and systematic land confiscation from indigenous peoples.
          </p>
          
          <h2 id="section-3">The Uprising and Genocide</h2>
          <p>
            On January 12, 1904, facing the systematic loss of their lands and livelihoods, the Herero people rebelled under Chief Samuel Maharero. They attacked a German garrison at Okahandja. This resistance triggered one of history's most brutal responses.
          </p>
          
          <p>
            In June 1904, German General Lothar von Trotha was dispatched to suppress the rebellion. At the Battle of Waterberg on August 11, 1904, German forces surrounded the Herero, killing thousands and driving survivors into the deadly Omaheke Desert.
          </p>
          
          <blockquote>
            "The Herero are no longer German subjects... Any Herero sighted within the [Namibian] German borders with or without a weapon, with or without cattle, will be shot."
            <cite>— Extermination order signed by von Trotha, October 2, 1904</cite>
          </blockquote>
          
          <p>
            German forces poisoned desert waterholes and established a boundary line preventing the Herero from returning from the desert. Thousands died of thirst, starvation, and exhaustion. Survivors were imprisoned in concentration camps where many more perished from disease and abuse.
          </p>
          
          <p>
            The Nama people, who also rebelled against German rule in October 1904, faced similar tactics. The genocidal campaign continued until 1908.
          </p>
          
          <h2>Sites of Memory in Swakopmund</h2>
          <p>
            Today, several locations in and around Swakopmund stand as solemn reminders of this tragic history. Visitors gain a deeper understanding of the events that shaped Namibia's identity and struggle for independence.
          </p>
          
          <h3>Alte Kaserne (Old Military Barracks)</h3>
          <p>
            The Alte Kaserne served as a military hub during the colonial era. Designed by Otto Ertl and constructed in the early 1900s, it housed the German soldiers who participated in the campaigns against the Herero and Nama peoples. Today, this landmark stands as a physical reminder of the German military presence that executed the genocide.
          </p>
          
          <h3>The Marine Memorial</h3>
          <p>
            Located near the State House (formerly Kaiserliches Bezirksgericht), the Marine Memorial was commissioned in 1907 by the Marine Infantry in Kiel, Germany. The statue depicts a marine standing by his wounded colleague. It was presented to Swakopmund by the crew of the German gunboat Panther in July 1908, commemorating members of the First Marine Expedition Corps who died during what they termed the "Herero War."
          </p>
          
          <h3>Concentration Camp Sites</h3>
          <p>
            Perhaps the most sobering sites are the locations of former concentration camps where captured Herero and Nama people were imprisoned. Prisoners were subjected to forced labor, starvation, and medical experimentation. Dr. Eugene Fischer conducted medical experiments on children born from the sexual violence inflicted on Herero women by German soldiers.
          </p>
          
          <h2>Recognition and Reconciliation</h2>
          <p>
            After World War I, South-West Africa was placed under South African administration, which implemented an apartheid system. Namibia finally gained independence in 1990.
          </p>
          
          <p>
            The journey toward recognition has been long. In 2004, Germany acknowledged responsibility for the genocide. In May 2021, Germany issued an official apology and agreed to pay €1.1 billion over 30 years to fund projects in communities affected by the genocide.
          </p>
          
          <p>
            During our historical tours, we visit these sites of remembrance, providing context and perspective on this pivotal chapter in Namibian history. As descendants of those who experienced these events, we offer a unique and personal connection to this history.
          </p>
          
          <h2>The Importance of Remembering</h2>
          <p>
            The Herero and Nama genocide is often referred to as "the forgotten genocide" despite being the first genocide of the 20th century. Recognizing and learning about this history is crucial not only for honoring the victims but for understanding patterns of colonialism and violence that would later manifest in other contexts.
          </p>
          
          <p>
            At Kalahari Axarob Tours, we believe in the power of education through direct experience. Our tours offer visitors the opportunity to walk through these historical sites, gaining a deeper appreciation for Namibia's complex past and the resilience of its people.
          </p>
        </BlogPostTemplate>
        <Footer />
      </div>
    </>
  );
};

export default HerreroNamaGenocide; 