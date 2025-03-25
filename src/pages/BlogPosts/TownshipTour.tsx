import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import BlogPostTemplate from "@/components/blog/BlogPostTemplate";

const TownshipTour: React.FC = () => {
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
        <title>Experience Mondesa Township Tour | Authentic Cultural Exchange | Kalahari Axarob Tours</title>
        <meta 
          name="description" 
          content="Explore Mondesa township with our respectful, educational tour. Meet local Herero people, discover traditional medicine, and experience authentic Namibian culture in Swakopmund." 
        />
        <meta name="keywords" content="Mondesa township tour, Swakopmund cultural tour, Herero traditions, Namibian culture, ethical township tours, authentic cultural experience" />
        <meta property="og:title" content="Experience Mondesa Township Tour | Authentic Cultural Exchange" />
        <meta property="og:description" content="Discover authentic Namibian culture through our respectful township tour featuring Herero traditions, traditional medicine, and community life in Mondesa." />
        <meta property="og:image" content="/Home Images/Mondesa Township.jpg" />
        <meta property="og:url" content="https://kalahariaxarobtours.com/blog/township-tour" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Experience Mondesa Township Tour | Authentic Cultural Exchange" />
        <meta name="twitter:description" content="Discover authentic Namibian culture through our respectful township tour featuring Herero traditions, traditional medicine, and community life in Mondesa." />
        <meta name="twitter:image" content="/Home Images/Mondesa Township.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            'headline': 'The Township Experience: Understanding Mondesa\'s Living Heritage',
            'image': '/Home Images/Mondesa Township.jpg',
            'datePublished': '2024-01-22T11:00:00Z',
            'dateModified': '2024-03-25T14:30:00Z',
            'author': {
              '@type': 'Person',
              'name': 'Kafamuyeke Erick Mwiya',
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
            'description': 'Discover what to expect during a respectful and educational township tour in Mondesa and the DRC near Swakopmund, Namibia.',
            'mainEntityOfPage': {
              '@type': 'WebPage',
              '@id': 'https://kalahariaxarobtours.com/blog/township-tour'
            }
          })}
        </script>
      </Helmet>
      
      <Navbar />
      
      <PageHero
        title="The Township Experience"
        subtitle="Discover Mondesa's living heritage through a respectful cultural tour"
        backgroundImage="/Home Images/Mondesa Township.jpg"
        isMobile={isMobile}
      />
      
      {/* White background container for all content below hero INCLUDING footer */}
      <div className="w-full bg-white relative z-10">
        <BlogPostTemplate
          title="The Township Experience: Understanding Mondesa's Living Heritage"
          authorName="Kafamuyeke Erick Mwiya"
          authorTitle="Township Tour Specialist"
          date="January 22, 2024"
          readTime="5 min"
          imageUrl="/Home Images/Mondesa Township.jpg"
          imageAlt="Mondesa Township in Swakopmund, Namibia"
          sourceUrl="https://www.namibia-travel.net/information/townships-in-namibia"
          sourceName="Namibia Travel Information"
        >
          <p id="section-2">
            While Swakopmund's German colonial architecture draws many visitors, a complete understanding of Namibia's history requires venturing beyond these facades. Our Township Tour takes visitors to Mondesa, a vibrant community that tells an equally important part of Namibia's story.
          </p>
          
          <h2>Understanding Townships in Context</h2>
          <p>
            During apartheid, "townships" were established next to every Namibian town. All non-white residents were forced to live in these segregated areas, separated by race, language, and culture. Today, Mondesa is located northeast of Swakopmund, bordered by Tamariskia neighborhood and the industrial area, with the Democratic Resettlement Community (DRC) one kilometer away.
          </p>
          
          <h2>Our Approach to Township Tourism</h2>
          <p>
            Our approach focuses on education, cultural exchange, and economic benefit to the community. Our guides have strong ties to Mondesa, and portions of tour proceeds are reinvested in local projects. We work with community members who have chosen to share aspects of their lives and culture with visitors.
          </p>
          
          <h2 id="section-3">The Township Tour Experience</h2>
          
          <h3>Herero Cultural Traditions</h3>
          <p>
            A highlight is visiting a Herero lady who explains cultural norms and traditions. You'll learn about traditional dress, including the distinctive Victorian-style dresses and headdresses resembling cattle horns. You'll gain insights into family structures, language, and how traditions are being preserved in contemporary society.
          </p>
          
          <h3>Traditional Herbalism</h3>
          <p>
            Another fascinating aspect is meeting a local herbalist who explains traditional medicines and healing practices. You'll learn about various local plants, their medicinal properties, preparation methods, and roles in traditional healing. Many of these herbal traditions are being studied by modern pharmaceutical researchers.
          </p>
          
          <h3>Community Life and Development</h3>
          <p>
            As we move through Mondesa, you'll see daily township life. We pass local schools, churches, and markets. The architecture ranges from small government-built houses to self-built structures and modern developments. The tour provides context for understanding urban development and housing challenges in post-independence Namibia.
          </p>
          
          <h3>Culinary Traditions</h3>
          <p>
            Our township tour includes opportunities to taste local cuisine like oshifima (a staple porridge), oshiwambo chicken, or kapana (grilled meat with spices), depending on availability. These culinary experiences take place in local establishments, supporting the township economy.
          </p>
          
          <h2>Respectful Engagement: Visitor Guidelines</h2>
          
          <ul>
            <li><strong>Photography:</strong> Always ask before taking photos of individuals. Remember you're visiting people's homes, not tourist attractions.</li>
            <li><strong>Questions:</strong> We encourage thoughtful questions and genuine interactions, which can be the most rewarding part of the experience.</li>
            <li><strong>Supporting Local Economy:</strong> The tour includes opportunities to purchase crafts directly from artisans, providing direct economic benefit to community members.</li>
          </ul>
          
          <h2>Beyond Tourism: The Tour's Impact</h2>
          <p>
            Township tours foster cross-cultural understanding and create economic opportunities in historically marginalized communities. Many visitors tell us their Mondesa visit transformed their understanding of Namibia, providing the human connection that makes other aspects of Namibian history more meaningful.
          </p>
          
          <p>
            For a comprehensive experience, we recommend combining our historical tour with the township tour. Together, they create a nuanced picture of Namibia's complex past and vibrant present, demonstrating how history shapes contemporary realities while showcasing cultural resilience.
          </p>
        </BlogPostTemplate>
        <Footer />
      </div>
    </>
  );
};

export default TownshipTour; 