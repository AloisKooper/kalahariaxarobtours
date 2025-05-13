import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import BlogPostTemplate from "@/components/blog/BlogPostTemplate";

// Data for this specific post
const postData = {
  id: "planning-historical-tour", 
  title: "Planning Your Historical Tour of Swakopmund", 
  excerpt: "Essential tips for making the most of your historical tour experience with insights on when to visit and what sites offer the most profound historical significance.",
  author: "Uwe Goulden",
  date: "January 30, 2024",
  readTime: "5 min read",
  category: "Travel Tips",
  image: "/Home Images/Swakop Landmarks.jpg",
  imageAlt: "Swakopmund landmarks and palm trees",
  content: `
    <p>Planning a historical tour of Swakopmund requires a bit of foresight to truly appreciate the depth of history embedded in its streets and buildings. This guide provides essential tips to help you make the most of your journey into the past.</p>

    <h2>Best Time to Visit</h2>
    <p>Swakopmund enjoys a mild desert climate year-round, but the months from <strong>September to March</strong> generally offer warmer temperatures and clearer skies, ideal for walking tours. However, the cooler months (April to August) can provide a different, perhaps more atmospheric, experience, especially when exploring sites related to the colonial era.</p>

    <figure>
      <img src="/Home Images/Swakop Landmarks.jpg" alt="Swakopmund Landmarks Blend" />
      <figcaption>Swakopmund offers a unique blend of architectural styles.</figcaption>
    </figure>

    <h2>Key Sites and Their Significance</h2>
    <ul>
      <li><strong>Woermannhaus & Damara Tower:</strong> Early colonial administrative buildings offering panoramic views and insights into the town's establishment.</li>
      <li><strong>Hohenzollern Building:</strong> An example of ornate German architecture, representing the ambitions of the colonial period.</li>
      <li><strong>Swakopmund Museum:</strong> Provides comprehensive exhibits on the natural history, mining, and cultural ethnology of the region, including colonial history.</li>
      <li><strong>National Marine Aquarium:</strong> While not strictly historical, it showcases the coastal environment that shaped Swakopmund's development.</li>
      <li><strong>Old Prison (Alte Gefängnis):</strong> A stark reminder of the judicial system during the German colonial era.</li>
    </ul>

    <h2>Tour Considerations</h2>
    <p>Consider booking a guided tour for deeper insights. Local guides often share personal stories and historical nuances not found in guidebooks. Wear comfortable shoes, as exploring the historical heart of Swakopmund is best done on foot. Allow ample time for reflection, especially at sites related to more sensitive historical periods.</p>

    <blockquote>"Understanding Swakopmund's history is key to appreciating its present character."</blockquote>

    <p>By planning ahead and knowing which sites resonate most with your interests, your historical tour of Swakopmund can be a profoundly enriching experience.</p>
  `
};

const PlanningHistoricalTour: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Helmet>
        <title>{postData.title} | Kalahari Axarob Tours Blog</title>
        <meta name="description" content={postData.excerpt} />
        <meta property="og:title" content={postData.title} />
        <meta property="og:description" content={postData.excerpt} />
        <meta property="og:image" content={postData.image} />
        <meta property="og:url" content={`https://kalahariaxarobtours.com/blog/${postData.id}`} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      
      <Navbar />
      
      <PageHero
        // Use a more relevant Hero title/subtitle if desired
        title="Plan Your Tour"
        subtitle="Tips for Exploring Swakopmund's History"
        backgroundImage={postData.image}
        isMobile={isMobile}
      />
      
      <div className="w-full bg-white relative z-10">
        <BlogPostTemplate
          title={postData.title}
          authorName={postData.author}
          // Assuming a default author title, adjust if needed
          authorTitle="Contributor"
          date={postData.date}
          readTime={postData.readTime}
          imageUrl={postData.image}
          imageAlt={postData.imageAlt} 
          // Pass content as children, using dangerouslySetInnerHTML for HTML
        >
          <div dangerouslySetInnerHTML={{ __html: postData.content }} />
        </BlogPostTemplate>
        <Footer />
      </div>
    </>
  );
};

export default PlanningHistoricalTour; 