import React from "react";
import { Calendar, User, Share2, ArrowLeft, Clock, ExternalLink, ChevronRight, BookOpen, Info } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogPostTemplateProps {
  title: string;
  authorName: string;
  authorTitle: string;
  date: string;
  readTime: string;
  imageUrl: string;
  imageAlt: string;
  sourceUrl?: string;
  sourceName?: string;
  children: React.ReactNode;
}

const BlogPostTemplate: React.FC<BlogPostTemplateProps> = ({
  title,
  authorName,
  authorTitle,
  date,
  readTime,
  imageUrl,
  imageAlt,
  sourceUrl,
  sourceName,
  children,
}) => {
  // Function to handle social media sharing
  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = `Check out this article: ${title}`;
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      default:
        break;
    }
  };

  return (
    <div className="bg-white text-kalahari-charcoal min-h-screen">
      {/* Back to blog link */}
      <div className="container mx-auto pt-6 px-4">
        <Link to="/blog" className="inline-flex items-center text-kalahari-darkbrown hover:text-kalahari-brown transition-colors group">
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Blog</span>
        </Link>
      </div>

      {/* Header Section */}
      <header className="container mx-auto py-6 md:py-8 px-4">
        <div className="mb-3 text-kalahari-brown/80 flex items-center text-sm">
          <Calendar className="w-4 h-4 mr-2" />
          {date} 
          <span className="mx-2 text-kalahari-charcoal/30">•</span>
          <Clock className="w-4 h-4 mr-2" />
          {readTime} Read
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-kalahari-darkbrown leading-tight max-w-4xl">{title}</h1>
        
        <div className="flex items-center justify-between flex-wrap gap-4 pb-2">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-kalahari-sand rounded-full flex items-center justify-center mr-4">
              <User className="w-6 h-6 text-kalahari-brown" />
            </div>
            <div>
              <h3 className="font-medium text-kalahari-darkbrown">{authorName}</h3>
              <p className="text-sm text-kalahari-charcoal/70">{authorTitle}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <span className="text-sm text-kalahari-charcoal/70 mr-2">Share:</span>
            <button 
              onClick={() => handleShare('facebook')}
              className="w-8 h-8 rounded-full bg-kalahari-sand flex items-center justify-center hover:bg-kalahari-brown hover:text-white transition-colors"
              aria-label="Share on Facebook"
            >
              <span className="text-kalahari-darkbrown font-bold group-hover:text-white">f</span>
            </button>
            <button 
              onClick={() => handleShare('linkedin')}
              className="w-8 h-8 rounded-full bg-kalahari-sand flex items-center justify-center hover:bg-kalahari-brown hover:text-white transition-colors"
              aria-label="Share on LinkedIn"
            >
              <span className="text-kalahari-darkbrown font-bold">in</span>
            </button>
            <button 
              onClick={() => handleShare('twitter')}
              className="w-8 h-8 rounded-full bg-kalahari-sand flex items-center justify-center hover:bg-kalahari-brown hover:text-white transition-colors"
              aria-label="Share on Twitter"
            >
              <span className="text-kalahari-darkbrown font-bold">𝕏</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Featured Image */}
      <div className="w-full h-[400px] md:h-[600px] overflow-hidden bg-kalahari-sand/20">
        <img 
          src={imageUrl} 
          alt={imageAlt} 
          className="w-full h-full object-cover opacity-95"
        />
      </div>

      {/* Content Area with 2-column layout */}
      <main className="container mx-auto py-8 md:py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
          {/* Main Content Column - Left */}
          <div className="lg:w-2/3 order-2 lg:order-1">
            <div className="prose prose-lg prose-kalahari prose-headings:text-kalahari-darkbrown prose-headings:font-semibold prose-headings:mt-8 prose-headings:mb-4 prose-p:text-base prose-p:leading-relaxed prose-p:my-5 prose-a:text-kalahari-brown hover:prose-a:text-kalahari-darkbrown prose-a:font-medium prose-a:transition-colors prose-strong:text-kalahari-darkbrown prose-strong:font-semibold prose-blockquote:border-kalahari-brown prose-blockquote:bg-kalahari-sand/10 prose-blockquote:p-6 prose-blockquote:rounded-lg prose-blockquote:text-kalahari-charcoal/90 prose-blockquote:italic prose-blockquote:text-lg prose-img:rounded-lg">
              {/* Content Children */}
          {children}
            </div>
            
            {/* Source Attribution with improved visibility */}
            {sourceUrl && sourceName && (
              <div className="mt-12 pt-6 border-t border-kalahari-sand/50 flex items-start gap-3">
                <ExternalLink className="w-5 h-5 text-kalahari-brown flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-base text-kalahari-charcoal/90 not-italic m-0">
                    <span className="font-medium">Source:</span> This article references information from{" "}
                    <a 
                      href={sourceUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-kalahari-brown hover:text-kalahari-darkbrown font-medium inline-flex items-center"
                    >
                      {sourceName}
                      <ExternalLink className="w-3.5 h-3.5 ml-1 inline" />
                    </a>
                  </p>
                </div>
              </div>
            )}
          </div>
          
          {/* Sidebar Column - Right */}
          <div className="lg:w-1/3 order-1 lg:order-2 space-y-6 lg:sticky lg:top-6 lg:self-start">
            {/* Table of Contents - Auto generated from h2 and h3 elements */}
            <div className="p-5 bg-kalahari-sand/10 rounded-lg border border-kalahari-sand/30 shadow-sm">
              <div className="flex items-center mb-4">
                <BookOpen className="w-5 h-5 mr-2 text-kalahari-brown" />
                <h4 className="text-lg font-semibold text-kalahari-darkbrown">In this article</h4>
              </div>
              <div className="text-sm space-y-3">
                {/* These would be dynamically generated in a more complete implementation */}
                <div className="flex items-center text-kalahari-brown/80 hover:text-kalahari-brown">
                  <ChevronRight className="w-4 h-4 mr-2 text-kalahari-brown/60" />
                  <a href="#section-1" className="hover:underline transition-colors">Article Highlights</a>
                </div>
                <div className="flex items-center text-kalahari-brown/80 hover:text-kalahari-brown">
                  <ChevronRight className="w-4 h-4 mr-2 text-kalahari-brown/60" />
                  <a href="#section-2" className="hover:underline transition-colors">Key Information</a>
                </div>
                <div className="flex items-center text-kalahari-brown/80 hover:text-kalahari-brown">
                  <ChevronRight className="w-4 h-4 mr-2 text-kalahari-brown/60" />
                  <a href="#section-3" className="hover:underline transition-colors">What to Expect</a>
                </div>
              </div>
            </div>
            
            {/* Key Highlights Box */}
            <div id="section-1" className="p-5 bg-kalahari-brown/5 rounded-lg border-l-4 border-kalahari-brown shadow-sm">
              <div className="flex items-center mb-3">
                <Info className="w-5 h-5 mr-2 text-kalahari-brown" />
                <h3 className="text-lg font-semibold text-kalahari-darkbrown mt-0">Key Highlights</h3>
              </div>
              <ul className="list-none space-y-3 pl-0 my-0">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-kalahari-brown mr-3 mt-[0.5em]"></span>
                  <span className="text-sm">Guided tours with insightful historical context and local knowledge</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-kalahari-brown mr-3 mt-[0.5em]"></span>
                  <span className="text-sm">Explore significant cultural and historical landmarks</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-kalahari-brown mr-3 mt-[0.5em]"></span>
                  <span className="text-sm">Personalized, small-group experience with expert guides</span>
                </li>
              </ul>
            </div>
            
            {/* Additional contextual sidebar element */}
            <div className="p-5 bg-white rounded-lg border border-kalahari-sand/40 shadow-sm">
              <h4 className="text-lg font-semibold text-kalahari-darkbrown mb-3">Book This Tour</h4>
              <p className="text-sm text-kalahari-charcoal/80 mb-4">Experience this fascinating tour with our expert guides. Small groups ensure personalized attention.</p>
              <Link to="/tours" className="inline-flex items-center justify-center bg-kalahari-brown text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-kalahari-darkbrown transition-colors w-full">
                View Tour Options
              </Link>
            </div>
          </div>
        </div>
        
        {/* Related Articles - now with actual content */}
        <div className="max-w-7xl mx-auto mt-16 border-t border-kalahari-sand/30 pt-12">
          <h2 className="text-2xl font-bold text-kalahari-darkbrown mb-8 text-center">Continue Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-kalahari-sand/30 hover:shadow-md transition-shadow group">
              <div className="h-48 overflow-hidden">
                <img src="/Home Images/German Architecture.jpg" alt="German Architecture" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-kalahari-darkbrown mb-2 line-clamp-2 group-hover:text-kalahari-brown transition-colors">Swakopmund's German Colonial Architecture</h3>
                <p className="text-kalahari-charcoal/80 text-sm mb-3 line-clamp-3">Discover the most significant historical buildings in Swakopmund with insider knowledge on their colonial legacy.</p>
                <Link to="/blog/german-architecture" className="text-kalahari-brown font-medium text-sm inline-flex items-center hover:text-kalahari-darkbrown group-hover:gap-2 transition-all">
                  Read More <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-kalahari-sand/30 hover:shadow-md transition-shadow group">
              <div className="h-48 overflow-hidden">
                <img src="/Home Images/Mondesa Township.jpg" alt="Township Tour" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-kalahari-darkbrown mb-2 line-clamp-2 group-hover:text-kalahari-brown transition-colors">The Township Experience: Understanding Mondesa</h3>
                <p className="text-kalahari-charcoal/80 text-sm mb-3 line-clamp-3">Discover what to expect during a respectful township tour in Mondesa and the DRC near Swakopmund.</p>
                <Link to="/blog/township-tour" className="text-kalahari-brown font-medium text-sm inline-flex items-center hover:text-kalahari-darkbrown group-hover:gap-2 transition-all">
                  Read More <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-kalahari-sand/30 hover:shadow-md transition-shadow group">
              <div className="h-48 overflow-hidden">
                <img src="/Home Images/Memorial Site.jpg" alt="Herero and Nama Genocide" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-kalahari-darkbrown mb-2 line-clamp-2 group-hover:text-kalahari-brown transition-colors">The Untold Story of Namibia's First Genocide</h3>
                <p className="text-kalahari-charcoal/80 text-sm mb-3 line-clamp-3">Explore the complex history of the 1904-1908 Herero and Nama Genocide and its lasting impact on Namibia.</p>
                <Link to="/blog/herero-nama-genocide" className="text-kalahari-brown font-medium text-sm inline-flex items-center hover:text-kalahari-darkbrown group-hover:gap-2 transition-all">
                  Read More <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogPostTemplate; 