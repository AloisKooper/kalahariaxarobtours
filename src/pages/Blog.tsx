import React, { useEffect, useState, useRef } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Calendar, 
  Clock,
  Share2,
  Bookmark,
  Search,
  User,
  Quote,
  ArrowUpRight,
  Filter,
  XCircle,
  BookOpen,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";

const BlogPage: React.FC = () => {
  // State to track viewport size
  const [isMobile, setIsMobile] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const filtersRef = useRef<HTMLDivElement>(null);
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);
  
  // Effect to handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setShowFilters(false);
      }
      
      // Adjust posts per page based on screen size
      if (window.innerWidth < 640) {
        setPostsPerPage(2);
      } else if (window.innerWidth < 1024) {
        setPostsPerPage(3);
      } else {
        setPostsPerPage(4);
      }
    };
    
    // Initial check
    handleResize();
    
    // Add resize listener
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle clicks outside the filters panel
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filtersRef.current && !filtersRef.current.contains(event.target as Node) && 
          !(event.target as Element).closest('[data-filter-toggle]')) {
        setShowFilters(false);
      }
    };

    if (showFilters) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showFilters]);

  // Blog categories
  const categories = ["All", "History", "Culture", "Nature", "Travel Tips"];

  // Featured article
  const featuredArticle = {
    id: "herero-nama-genocide",
    title: "The Untold Story of Namibia's First Genocide",
    excerpt: "Explore the complex history of the 1904-1908 Nama and Herero Genocide in Namibia and its lasting impact on the nation's cultural identity through the historical landmarks in Swakopmund.",
    image: "/Home Images/Marine memorial.jpg",
    author: "Dr. Isabel V. Hull",
    date: "March 15, 2024",
    readTime: "12 min read",
    category: "History"
  };

  // Editor's picks
  const editorsPicks = [
    {
      id: "german-architecture",
      title: "Essential Guide: Swakopmund's German Colonial Architecture",
      excerpt: "Discover the most significant historical buildings in Swakopmund with insider knowledge on their historical significance and colonial legacy.",
      image: "/Home Images/German Architecture.jpg",
      author: "Dr. Walter Peters",
      date: "February 8, 2024",
      readTime: "8 min read",
      category: "History"
    },
    {
      id: "township-tour",
      title: "Cultural Heritage of Namibia's Indigenous Communities",
      excerpt: "Learn about the traditions and resilience of Namibia's indigenous Nama and Herero communities, whose cultural heritage persists despite historical challenges.",
      image: "/Home Images/Cultural Exchange.jpg",
      author: "Kafamuyeke Erick Mwiya",
      date: "January 12, 2024",
      readTime: "7 min read",
      category: "Culture"
    }
  ];

  // Recent articles
  const recentArticles = [
    {
      id: "shore-excursion",
      title: "Walvis Bay to Swakopmund: The Perfect Shore Excursion",
      excerpt: "Discover how cruise liner passengers can maximize their day ashore with a comprehensive historical and natural tour from Walvis Bay to Swakopmund.",
      image: "/Home Images/Cruise Liner Shore Excursion.jpg",
      author: "Dennis Liebenberg",
      date: "March 3, 2024",
      readTime: "6 min read",
      category: "Travel Tips"
    },
    {
      id: "township-tour",
      title: "The Township Experience: Understanding Mondesa's Living Heritage",
      excerpt: "Discover what to expect during a respectful and educational township tour, offering insights into local communities, cultural traditions, and everyday life.",
      image: "/Home Images/Mondesa Township.jpg",
      author: "Kafamuyeke Erick Mwiya",
      date: "January 22, 2024",
      readTime: "6 min read",
      category: "Culture"
    },
    {
      id: "herero-nama-genocide",
      title: "Tracing the Footsteps: Sites of Historical Remembrance",
      excerpt: "Visit the memorials and historical locations that commemorate the Nama and Herero Genocide, regarded as the first genocide of the 20th century.",
      image: "/Home Images/Marine memorial.jpg",
      author: "Dr. David Olusoga",
      date: "February 20, 2024",
      readTime: "10 min read",
      category: "History"
    }
  ];

  // Latest articles (different layout)
  const latestArticles = [
    {
      id: "shore-excursion",
      title: "Planning Your Historical Tour of Swakopmund",
      excerpt: "Essential tips for making the most of your historical tour experience with insights on when to visit and what sites offer the most profound historical significance.",
      image: "/Home Images/Swakop Landmarks.jpg",
      author: "Uwe Goulden",
      date: "January 30, 2024",
      readTime: "5 min read",
      category: "Travel Tips"
    },
    {
      id: "township-tour",
      title: "The Township Experience: Understanding Mondesa's Living Heritage",
      excerpt: "Discover what to expect during a respectful and educational township tour in Mondesa.",
      image: "/Home Images/Mondesa Township.jpg",
      author: "Kafamuyeke Erick Mwiya",
      date: "January 22, 2024",
      readTime: "6 min read",
      category: "Culture"
    },
    {
      id: "german-architecture",
      title: "Alte Kaserne: The Old Military Barracks and Colonial Power",
      excerpt: "Explore the history of Swakopmund's impressive Old Military Barracks and its role during German colonial rule and the conflicts that shaped modern Namibia.",
      image: "/Home Images/Old Military Barracks.jpg",
      author: "Gottlieb Redecker",
      date: "January 15, 2024",
      readTime: "7 min read",
      category: "History"
    },
    {
      id: "herero-nama-genocide",
      title: "From Genocide to Independence: Namibia's Journey",
      excerpt: "Trace Namibia's path from the tragic events of the early 20th century through apartheid to its hard-won independence in 1990, through key historical sites.",
      image: "/Home Images/Marine memorial.jpg",
      author: "Dr. Benjamin Madley",
      date: "January 10, 2024",
      readTime: "8 min read",
      category: "History"
    }
  ];

  // Popular topics
  const popularTopics = [
    "German Colonial Architecture",
    "Herero & Nama Genocide",
    "Independence History",
    "Cultural Heritage",
    "Historical Tour Sites",
    "Cruise Shore Excursions",
    "Township Experiences",
    "Namibian History"
  ];

  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Combine all articles for filtering
  const allArticles = [
    featuredArticle,
    ...editorsPicks,
    ...recentArticles
  ];

  // Filter articles by search term and category
  const filteredPosts = allArticles.filter(article => {
    const matchesSearch = searchQuery === "" || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.author.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeFilter === "All" || article.category === activeFilter;
    
    return matchesSearch && matchesCategory;
  });
  
  // Sort posts by date (newest first)
  const sortedPosts = [...filteredPosts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  
  // Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(sortedPosts.length / postsPerPage);
  
  // Handle pagination
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Navbar />
      <PageHero
        title="Our Latest Articles"
        subtitle="Discover insights, stories, and historical details about Namibia's rich heritage and culture through our blog"
        backgroundImage="/Home Images/blog swakop.jpg"
        isMobile={isMobile}
      />
      
      {/* White background container for all content below hero INCLUDING footer */}
      <div className="w-full bg-white relative z-10">
        <div className="py-12 md:py-16 px-4 md:px-6">
          <div className="container mx-auto max-w-7xl">
            
            {/* Featured article - magazine style layout */}
            <div className="mb-16 relative">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 bg-white border border-kalahari-brown/10 rounded-xl overflow-hidden shadow-md">
                <div className="lg:col-span-7 h-full">
                  <div className="h-64 sm:h-80 lg:h-full relative overflow-hidden">
                    <img 
                      src={featuredArticle.image} 
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      loading="eager"
                      onError={(e) => {
                        // Fallback if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = "/Home Images/blog swakop.jpg";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4 md:p-6">
                      <Badge variant="outline" className="bg-white/90 mb-3 text-kalahari-brown border-kalahari-brown text-xs">
                        {featuredArticle.category}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <Link to={`/blog/${featuredArticle.id}`}>
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-kalahari-darkbrown mb-4 hover:text-kalahari-brown transition-colors">
                        {featuredArticle.title}
                      </h2>
                    </Link>
                    <p className="text-kalahari-charcoal/80 mb-6 text-base md:text-lg">
                      {featuredArticle.excerpt}
                    </p>
                  </div>
                  
                  <div className="border-t border-kalahari-brown/10 pt-4 mt-auto">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-kalahari-sand/70 flex items-center justify-center">
                          <User className="w-5 h-5 text-kalahari-brown" />
                        </div>
                        <div className="ml-3">
                          <p className="text-kalahari-darkbrown font-medium">{featuredArticle.author}</p>
                          <p className="text-xs text-kalahari-charcoal/70">{formatDate(featuredArticle.date)}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-kalahari-charcoal/70 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{featuredArticle.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex justify-end">
                      <Link 
                        to={`/blog/${featuredArticle.id}`}
                        className="text-kalahari-brown hover:text-kalahari-darkbrown flex items-center gap-1 text-sm font-medium transition-colors"
                      >
                        Read full article
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Search and filters section */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row gap-4 items-stretch">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-kalahari-charcoal/60" />
                  <Input
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-10 h-12 rounded-lg border-kalahari-brown/20 focus-visible:ring-kalahari-brown"
                  />
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-kalahari-charcoal/60 hover:text-kalahari-brown"
                    >
                      <XCircle size={16} />
                    </button>
                  )}
                </div>
                
                {/* Category filters - improved responsiveness */}
                <div className="hidden md:flex items-center space-x-3 flex-wrap">
                  {categories.map(category => (
                    <Button
                      key={category}
                      variant={activeFilter === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setActiveFilter(category)}
                      className={`${activeFilter === category 
                        ? "bg-kalahari-brown hover:bg-kalahari-darkbrown text-white border-none" 
                        : "border-kalahari-brown/20 hover:border-kalahari-brown/40 hover:bg-kalahari-sand/20 text-kalahari-darkbrown"
                      } mb-2 mr-1 md:mb-0 px-4 py-2 h-auto min-w-[80px]`}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
                
                {/* Mobile filter button */}
                <div className="md:hidden w-full">
                  <Button
                    variant="outline"
                    data-filter-toggle
                    className="w-full h-12 border-kalahari-brown/20 flex items-center justify-center gap-2 hover:bg-kalahari-sand/20"
                    onClick={() => setShowFilters(!showFilters)}
                  >
                    <Filter size={16} className="text-kalahari-brown" />
                    <span className="font-medium">
                      {activeFilter !== "All" ? `Category: ${activeFilter}` : "Filter by Category"}
                    </span>
                  </Button>
                  
                  {/* Mobile filters dropdown */}
                  {showFilters && (
                    <div 
                      ref={filtersRef}
                      className="absolute left-4 right-4 z-30 bg-white shadow-lg rounded-lg border border-kalahari-brown/10 p-4 mt-2"
                    >
                      <div className="grid grid-cols-2 gap-2">
                        {categories.map(category => (
                          <Button
                            key={category}
                            variant={activeFilter === category ? "default" : "outline"}
                            size="sm"
                            onClick={() => {
                              setActiveFilter(category);
                              setShowFilters(false);
                            }}
                            className={activeFilter === category 
                              ? "bg-kalahari-brown hover:bg-kalahari-darkbrown text-white" 
                              : "border-kalahari-brown/20 hover:bg-kalahari-sand/20"
                            }
                          >
                            {category}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Search results count */}
              <div className="mt-4 text-sm text-kalahari-charcoal/70">
                {searchQuery && (
                  <p>
                    {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} found for "{searchQuery}"
                  </p>
                )}
                {activeFilter !== "All" && (
                  <p className={`${searchQuery ? 'mt-1' : ''}`}>
                    Category: <span className="font-medium text-kalahari-brown">{activeFilter}</span>
                  </p>
                )}
              </div>
            </div>
            
            {/* Content split section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
              {/* Main content */}
              <div className="lg:col-span-8">
                {/* Recent Articles */}
                <div className="mb-12">
                  <h3 className="text-xl md:text-2xl text-kalahari-darkbrown font-medium mb-6 md:mb-8 relative pl-4 border-l-4 border-kalahari-brown">
                    Recent Articles
                  </h3>
                  
                  <div className="space-y-6 md:space-y-8">
                    {currentPosts.length > 0 ? (
                      currentPosts.map(article => (
                        <div 
                          key={article.id}
                          className="flex flex-col md:flex-row md:items-center gap-6 p-5 md:p-6 bg-white border border-kalahari-brown/10 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                        >
                          <div className="md:w-1/3">
                            <div className="h-48 md:h-36 lg:h-44 w-full rounded-lg overflow-hidden relative">
                              <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                loading="lazy"
                                onError={(e) => {
                                  // Fallback if image fails to load
                                  const target = e.target as HTMLImageElement;
                                  target.onerror = null;
                                  target.src = "/Home Images/blog swakop.jpg";
                                }}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-30"></div>
                            </div>
                          </div>
                          
                          <div className="md:w-2/3">
                            <div className="flex items-center gap-3 mb-2">
                              <Badge className="bg-kalahari-brown/10 hover:bg-kalahari-brown/20 text-kalahari-darkbrown border-none text-xs">
                                {article.category}
                              </Badge>
                              <span className="text-xs text-kalahari-charcoal/70">{formatDate(article.date)}</span>
                            </div>
                            
                            <Link to={`/blog/${article.id}`}>
                              <h4 className="text-xl font-medium text-kalahari-darkbrown mb-2 hover:text-kalahari-brown transition-colors">
                                {article.title}
                              </h4>
                            </Link>
                            
                            <p className="text-kalahari-charcoal/80 text-sm mb-4">
                              {article.excerpt}
                            </p>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-kalahari-sand/70 flex items-center justify-center">
                                  <User className="w-3 h-3 text-kalahari-brown" />
                                </div>
                                <span className="text-sm text-kalahari-darkbrown">{article.author}</span>
                              </div>
                              
                              <div className="flex items-center text-kalahari-charcoal/70 text-xs">
                                <Clock className="w-3.5 h-3.5 mr-1" />
                                <span>{article.readTime}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="bg-kalahari-sand/30 rounded-xl p-8 text-center my-6 w-full max-w-xs mx-auto sm:max-w-none sm:mx-0">
                        <BookOpen className="h-12 w-12 mx-auto mb-4 text-kalahari-brown/50" />
                        <h5 className="text-xl font-medium text-kalahari-darkbrown mb-2">No articles found</h5>
                        <p className="text-kalahari-charcoal/70 mb-4">
                          We couldn't find any articles matching your search criteria.
                        </p>
                        <Button 
                          variant="outline" 
                          onClick={() => {
                            setSearchQuery("");
                            setActiveFilter("All");
                          }}
                          className="border-kalahari-brown/20 hover:bg-kalahari-sand/50"
                        >
                          Clear Filters
                        </Button>
                      </div>
                    )}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex justify-center mt-10">
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                          disabled={currentPage === 1}
                          className="border-kalahari-brown/20"
                        >
                          <ChevronLeft size={16} />
                          <span className="sr-only sm:not-sr-only sm:ml-2">Previous</span>
                        </Button>
                        
                        <div className="flex items-center space-x-1">
                          {[...Array(totalPages)].map((_, i) => (
                            <Button
                              key={i}
                              variant={currentPage === i + 1 ? 'default' : 'outline'}
                              size="sm"
                              onClick={() => handlePageChange(i + 1)}
                              className={currentPage === i + 1 
                                ? 'bg-kalahari-brown hover:bg-kalahari-darkbrown' 
                                : 'border-kalahari-brown/20'
                              }
                            >
                              {i + 1}
                            </Button>
                          ))}
                        </div>
                        
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                          disabled={currentPage === totalPages}
                          className="border-kalahari-brown/20"
                        >
                          <span className="sr-only sm:not-sr-only sm:mr-2">Next</span>
                          <ChevronRight size={16} />
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Testimonial quote section */}
                <div className="mb-12 bg-kalahari-sand/30 rounded-xl p-8 md:p-10 w-full max-w-xs mx-auto sm:max-w-none sm:mx-0">
                  <div className="relative">
                    <div className="text-6xl text-kalahari-brown/20 font-serif leading-none">"</div>
                    <blockquote className="text-lg md:text-xl italic text-kalahari-darkbrown mb-6 leading-relaxed">
                      The historical tour gave us invaluable insights into Namibia's complex past. The guides' personal connection to the events made the experience deeply moving and educational. The tour completely changed our understanding of colonial history.
                    </blockquote>
                    <div className="flex flex-col mt-4">
                      <p className="font-medium text-kalahari-darkbrown">Maria Schmidt</p>
                      <p className="text-sm text-kalahari-charcoal/70">Berlin, Germany</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="lg:col-span-4">
                {/* Popular Topics */}
                <div className="bg-white border border-kalahari-brown/10 rounded-xl shadow-sm p-6 mb-8 w-full max-w-xs mx-auto sm:max-w-none sm:mx-0">
                  <h4 className="text-lg font-medium text-kalahari-darkbrown mb-4 flex items-center">
                    <BookOpen className="w-5 h-5 text-kalahari-brown mr-2" />
                    Popular Topics
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {popularTopics.map(topic => (
                      <Badge 
                        key={topic}
                        variant="outline"
                        className="bg-kalahari-sand/30 text-kalahari-darkbrown border-kalahari-brown/20 hover:bg-kalahari-sand/50 cursor-pointer px-3 py-1.5 text-xs"
                      >
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Subscribe form */}
                <div className="bg-gradient-to-br from-kalahari-sand/60 to-kalahari-brown/10 rounded-xl shadow-sm p-6 mb-8 w-full max-w-xs mx-auto sm:max-w-none sm:mx-0">
                  <h4 className="text-lg font-medium text-kalahari-darkbrown mb-2">
                    Newsletter
                  </h4>
                  <p className="text-sm text-kalahari-charcoal/80 mb-4">
                    Stay updated with our latest articles and tour insights
                  </p>
                  <div className="space-y-3">
                    <Input 
                      placeholder="Your email address" 
                      className="bg-white/80 border-kalahari-brown/20 focus-visible:ring-kalahari-brown"
                    />
                    <Button className="w-full bg-kalahari-brown hover:bg-kalahari-darkbrown text-white">
                      Subscribe
                    </Button>
                  </div>
                  <p className="text-xs text-kalahari-charcoal/60 mt-3">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>
                
                {/* Interactive call-to-action */}
                <div className="bg-kalahari-darkbrown text-white rounded-xl shadow-md overflow-hidden w-full max-w-xs mx-auto sm:max-w-none sm:mx-0">
                  <div className="h-40 relative">
                    <img 
                      src="/Home Images/Top 5 Historical.jpg" 
                      alt="Book a tour" 
                      className="w-full h-full object-cover opacity-60"
                      loading="lazy"
                      onError={(e) => {
                        // Fallback if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = "/Home Images/blog swakop.jpg";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-kalahari-darkbrown to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4">
                      <h4 className="text-xl font-medium mb-1">Experience History</h4>
                      <p className="text-white/80 text-sm">
                        Book a tour to see the sites mentioned in our articles
                      </p>
                    </div>
                  </div>
                  <div className="p-5">
                    <Link to="/contact">
                      <Button className="w-full bg-white text-kalahari-darkbrown hover:bg-kalahari-sand border-none flex items-center justify-center gap-2">
                        Book a Tour
                        <ArrowUpRight size={16} />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Call to action */}
            <div className="my-16 bg-gradient-to-br from-kalahari-brown/20 to-kalahari-sand/40 rounded-xl p-8 md:p-10 text-center shadow-sm w-full max-w-xs mx-auto sm:max-w-none sm:mx-0">
              <h3 className="text-2xl md:text-3xl text-kalahari-darkbrown font-medium mb-4">
                Ready to Experience History Firsthand?
              </h3>
              <p className="text-kalahari-charcoal/80 max-w-2xl mx-auto mb-8">
                Join our expert guides for an educational tour of the historical sites mentioned in our articles.
                Discover the stories behind Namibia's rich heritage through an authentic local perspective.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/tours">
                  <Button className="bg-kalahari-brown hover:bg-kalahari-darkbrown text-white min-w-[180px]">
                    Explore Tours
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-kalahari-brown text-kalahari-darkbrown hover:bg-kalahari-brown/10 min-w-[180px]">
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default BlogPage; 