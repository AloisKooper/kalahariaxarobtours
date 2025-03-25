import React, { useEffect, useState, useRef } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Star, Calendar, Quote, X, ChevronLeft, ChevronRight, Filter, ThumbsUp } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type ReviewPlatform = 'google' | 'trustpilot' | 'email';
type ReviewRating = '1.0' | '2.0' | '3.0' | '4.0' | '4.5' | '4.7' | '4.8' | '4.9' | '5.0';
type SortOption = 'latest' | 'highest' | 'lowest';

interface Review {
  id: string;
  name: string;
  date: string;
  location: string;
  rating: ReviewRating;
  testimonial: string;
  platform: ReviewPlatform;
  isFeatured?: boolean;
  tourType?: string;
}

const TestimonialPage: React.FC = () => {
  // State for responsive design and filtering
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [activePlatform, setActivePlatform] = useState<ReviewPlatform | 'all'>('all');
  const [selectedRating, setSelectedRating] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<SortOption>('latest');
  const [currentPage, setCurrentPage] = useState(1);
  const [reviewsPerPage, setReviewsPerPage] = useState(6);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const reviewsContainerRef = useRef<HTMLDivElement>(null);
  
  // Effect to handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);
      setIsTablet(width >= 640 && width < 1024);
      
      // Adjust reviews per page based on screen size - showing fewer reviews
      if (width < 640) {
        setReviewsPerPage(2);
      } else if (width < 1024) {
        setReviewsPerPage(3);
      } else {
        setReviewsPerPage(4);
      }
    };
    
    // Initial check
    handleResize();
    
    // Add resize listener
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Scroll to top of reviews container when changing page
  useEffect(() => {
    if (reviewsContainerRef.current && !isMobile) {
      reviewsContainerRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else if (isMobile && currentPage > 1) {
      window.scrollTo({
        top: reviewsContainerRef.current?.offsetTop ?? 0 - 100,
        behavior: 'smooth'
      });
    }
  }, [currentPage, isMobile]);

  // Review data
  const allReviews: Review[] = [
    // Google Reviews
    {
      id: 'g1',
      name: "Alois Kooper",
      date: "2023-10-15",
      location: "Warsaw, Poland",
      rating: "4.5",
      testimonial: "Wow... I am very happy with this tour guide. His knowledge about the genocide of 1904-1908 is impressive. Would highly recommend to anyone interested in learning about this important historical event.",
      platform: 'google',
      isFeatured: true,
      tourType: "Historical Tour"
    },
    {
      id: 'g2',
      name: "Maria Schmidt",
      date: "2023-11-02",
      location: "Berlin, Germany",
      rating: "5.0",
      testimonial: "Mr. Rooi provided an exceptional experience. His personal connection to the history made the tour deeply meaningful and educational. Will definitely book again when I return to Namibia.",
      platform: 'google',
      isFeatured: true,
      tourType: "Shore Excursion"
    },
    {
      id: 'g5',
      name: "Thomas Mueller",
      date: "2023-12-05",
      location: "Munich, Germany",
      rating: "4.9",
      testimonial: "This was the highlight of our Namibia trip. Mr. Rooi's tour gives you a deep understanding of the historical events and their significance. The personal stories made history come alive.",
      platform: 'google',
      isFeatured: true,
      tourType: "Shore Excursion"
    },
    
    // Trustpilot Reviews
    {
      id: 't1',
      name: "Sophie Johnson",
      date: "2023-10-20",
      location: "Cape Town, South Africa",
      rating: "5.0",
      testimonial: "The historical tour with Mr. Rooi was eye-opening and educational. His storytelling abilities and depth of knowledge made the experience unforgettable.",
      platform: 'trustpilot',
      isFeatured: true,
      tourType: "Historical Tour"
    },
    {
      id: 't4',
      name: "Olivier Dubois",
      date: "2023-12-01",
      location: "Paris, France",
      rating: "5.0",
      testimonial: "Mr. Rooi's personal connections to the history he shares makes this tour particularly moving. A must-do for anyone seeking to understand Namibia's complex past.",
      platform: 'trustpilot',
      isFeatured: true,
      tourType: "Historical Tour"
    },
    
    // Direct Email Testimonials
    {
      id: 'e1',
      name: "Christine Weber",
      date: "2023-10-10",
      location: "Hamburg, Germany",
      rating: "5.0",
      testimonial: "Thank you for the insightful tour of Swakopmund's colonial history. As a German, it was important for me to learn about this difficult chapter in our shared history. Your tour was educational, respectful and deeply moving.",
      platform: 'email',
      isFeatured: true,
      tourType: "Historical Tour"
    },
    {
      id: 'e5',
      name: "Sara Goldstein",
      date: "2023-09-05",
      location: "New York, USA",
      rating: "5.0",
      testimonial: "The township tour was the highlight of our Namibia trip. Getting to meet locals and learn about both historical and contemporary life in Mondesa was an unforgettable experience.",
      platform: 'email',
      isFeatured: true,
      tourType: "Township Tour"
    }
  ];

  // Filter and sort reviews
  const filteredReviews = allReviews.filter(review => {
    const matchesSearch = 
      review.testimonial.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (review.tourType && review.tourType.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesPlatform = activePlatform === 'all' || review.platform === activePlatform;
    
    const matchesRating = selectedRating.length === 0 || selectedRating.includes(review.rating);
    
    return matchesSearch && matchesPlatform && matchesRating;
  });
  
  // Sort reviews based on selected option
  const sortedReviews = [...filteredReviews].sort((a, b) => {
    if (sortOption === 'latest') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (sortOption === 'highest') {
      return parseFloat(b.rating) - parseFloat(a.rating);
    } else if (sortOption === 'lowest') {
      return parseFloat(a.rating) - parseFloat(b.rating);
    }
    return 0;
  });
  
  // Featured reviews for the highlighted section
  const featuredReviews = allReviews.filter(review => review.isFeatured);
  
  // Pagination
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = sortedReviews.slice(indexOfFirstReview, indexOfLastReview);
  const totalPages = Math.ceil(sortedReviews.length / reviewsPerPage);
  
  // Handle pagination
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  
  // Format date: "15 Oct 2023"
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };
  
  // Get profile image URL
  const getProfileImageUrl = (name: string, id: string) => {
    // Create a simple hash from the name and ID to get consistent but random image
    const hash = name.length + id.length + id.charCodeAt(0) + name.charCodeAt(0);
    // Get a number between 1 and 99
    const imageId = Math.abs(hash % 99) + 1;
    // Alternate between male and female based on the hash
    const gender = imageId % 2 === 0 ? 'men' : 'women';
    // Return a random user image
    return `https://randomuser.me/api/portraits/${gender}/${imageId}.jpg`;
  };
  
  // Get the star rating component - modified to be more realistic
  const renderStarRating = (rating: string, size: 'sm' | 'md' | 'lg' = 'md') => {
    const numericRating = parseFloat(rating);
    const fullStars = Math.floor(numericRating);
    const hasHalfStar = numericRating % 1 >= 0.5;
    const remainingStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    return (
      <div className="flex">
        {/* Full stars */}
        {[...Array(fullStars)].map((_, i) => (
          <Star 
            key={`full-${i}`} 
            className={`text-kalahari-sun ${size === 'sm' ? 'w-3 h-3' : size === 'md' ? 'w-4 h-4' : 'w-5 h-5'} ${i > 0 ? '-ml-0.5' : ''}`} 
            fill="currentColor"
          />
        ))}
        
        {/* Half star if needed */}
        {hasHalfStar && (
          <div className="relative" key="half">
            <Star 
              className={`text-kalahari-gravel/30 ${size === 'sm' ? 'w-3 h-3' : size === 'md' ? 'w-4 h-4' : 'w-5 h-5'} ${fullStars > 0 ? '-ml-0.5' : ''}`} 
              fill="currentColor"
            />
            <div className="absolute inset-0 overflow-hidden w-[50%]">
              <Star 
                className={`text-kalahari-sun ${size === 'sm' ? 'w-3 h-3' : size === 'md' ? 'w-4 h-4' : 'w-5 h-5'}`} 
                fill="currentColor"
              />
            </div>
          </div>
        )}
        
        {/* Empty stars */}
        {[...Array(remainingStars)].map((_, i) => (
          <Star 
            key={`empty-${i}`} 
            className={`text-kalahari-gravel/30 ${size === 'sm' ? 'w-3 h-3' : size === 'md' ? 'w-4 h-4' : 'w-5 h-5'} ${(fullStars > 0 || hasHalfStar) ? '-ml-0.5' : i > 0 ? '-ml-0.5' : ''}`} 
            fill="currentColor"
          />
        ))}
      </div>
    );
  };
  
  // Handle toggling the filter on mobile
  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };
  
  // Rating options for filter
  const ratingOptions = [
    { label: '5 Stars', value: '5.0' },
    { label: '4.9 Stars', value: '4.9' },
    { label: '4.8 Stars', value: '4.8' },
    { label: '4.7 Stars', value: '4.7' },
    { label: '4.5 Stars', value: '4.5' },
    { label: '4.0 Stars', value: '4.0' },
  ];
  
  // Handle rating filter changes
  const toggleRatingFilter = (ratingValue: string) => {
    setSelectedRating(prev => 
      prev.includes(ratingValue)
        ? prev.filter(r => r !== ratingValue)
        : [...prev, ratingValue]
    );
    setCurrentPage(1); // Reset to first page when filter changes
  };
  
  // Clear all filters
  const clearFilters = () => {
    setSearchTerm('');
    setActivePlatform('all');
    setSelectedRating([]);
    setSortOption('latest');
    setCurrentPage(1);
  };

  return (
    <>
      <Navbar />
      <PageHero
        title="What Our Guests Say"
        subtitle="Read authentic testimonials from visitors who have experienced our historical tours and discovered the rich heritage of Swakopmund with us"
        backgroundImage="/Home Images/testimonial.jpeg"
        isMobile={isMobile}
      />
      
      {/* White background container for all content below hero INCLUDING footer */}
      <div className="w-full bg-white relative z-10">
        <div className="py-12 md:py-16 px-4 md:px-6">
          <div className="container mx-auto max-w-7xl">
            {/* Page heading section */}
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-kalahari-brown font-medium text-base md:text-lg mb-3">Guest Experiences</h2>
              <h3 className="text-2xl sm:text-3xl md:text-4xl text-kalahari-darkbrown font-normal mb-4 md:mb-6">
                Hear From Our Valued Guests
              </h3>
              <div className="w-16 md:w-20 h-1 bg-kalahari-brown rounded-full mx-auto mb-4"></div>
              <p className="text-kalahari-charcoal/80 max-w-2xl mx-auto text-sm sm:text-base">
                Discover what visitors from around the world have to say about their experience with Kalahari Axarob Tours
              </p>
            </div>
            
            {/* Google Business Reviews Header */}
            <div className="mb-8 text-center">
              <div className="inline-flex items-center gap-2 bg-white py-2 px-4 rounded-lg shadow-sm border border-kalahari-brown/10">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="font-medium text-gray-800">Google Business Reviews</span>
                <a 
                  href="https://www.google.com/maps?cid=your-google-business-id" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="ml-2 text-sm text-blue-600 hover:text-blue-800 underline"
                >
                  Leave a Review
                </a>
              </div>
            </div>
            
            {/* Featured testimonials section */}
            <div className="mb-16 md:mb-20">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-xl md:text-2xl text-kalahari-darkbrown font-normal">
                  Featured Testimonials
                </h4>
                <div className="flex items-center gap-2">
                  <Quote className="h-5 w-5 text-kalahari-brown" />
                  <span className="text-sm text-kalahari-charcoal/70">Words from our guests</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredReviews.slice(0, 3).map((review) => (
                  <div 
                    key={review.id}
                    className="bg-gradient-to-br from-kalahari-sand/50 to-kalahari-sand/30 rounded-xl p-5 md:p-6 shadow-md border border-kalahari-brown/10 flex flex-col"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      {/* Profile image */}
                      <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-kalahari-brown/10">
                        <img 
                          src={getProfileImageUrl(review.name, review.id)} 
                          alt={review.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div>
                        <p className="font-medium text-kalahari-darkbrown">{review.name}</p>
                        <p className="text-xs text-kalahari-charcoal/70">{review.location}</p>
                      </div>
                      
                      {/* Platform icon */}
                      <div className="ml-auto">
                        {review.platform === 'google' ? (
                          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                          </svg>
                        ) : review.platform === 'trustpilot' ? (
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" fill="#00B67A"/>
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="white"/>
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-kalahari-brown" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                          </svg>
                        )}
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <div className="flex items-center gap-2 mb-1">
                        {renderStarRating(review.rating)}
                        <span className="text-kalahari-charcoal/70 text-sm">{review.rating}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={14} className="text-kalahari-brown" />
                        <span className="text-xs text-kalahari-charcoal/70">{formatDate(review.date)}</span>
                      </div>
                    </div>
                    
                    <div className="mb-3 flex-grow">
                      <p className="italic text-kalahari-darkbrown text-sm md:text-base leading-relaxed">
                        {review.testimonial.length > 140 
                          ? `${review.testimonial.substring(0, 140)}...` 
                          : review.testimonial}
                      </p>
                    </div>
                    
                    <div className="pt-3 border-t border-kalahari-brown/10">
                      {review.tourType && (
                        <Badge variant="secondary" className="bg-kalahari-lightbrown/30 text-kalahari-darkbrown text-xs">
                          {review.tourType}
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* All Testimonials section with filter controls */}
            <div>
              <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                <h4 className="text-xl md:text-2xl text-kalahari-darkbrown font-normal">
                  All Testimonials
                </h4>
                
                <div className="flex items-center gap-3">
                  {/* Mobile filter toggle */}
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="md:hidden border-kalahari-brown/20 text-kalahari-charcoal"
                    onClick={toggleFilter}
                  >
                    <Filter size={16} className="mr-2" />
                    Filters
                  </Button>
                  
                  {/* Sort dropdown */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-kalahari-brown/20 text-kalahari-charcoal"
                      >
                        <span className="hidden sm:inline mr-2">Sort by:</span>
                        {sortOption === 'latest' ? 'Latest' : sortOption === 'highest' ? 'Highest Rated' : 'Lowest Rated'}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuCheckboxItem
                        checked={sortOption === 'latest'}
                        onCheckedChange={() => setSortOption('latest')}
                      >
                        Latest
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem
                        checked={sortOption === 'highest'}
                        onCheckedChange={() => setSortOption('highest')}
                      >
                        Highest Rated
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem
                        checked={sortOption === 'lowest'}
                        onCheckedChange={() => setSortOption('lowest')}
                      >
                        Lowest Rated
                      </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              
              {/* Filters and reviews grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Filters sidebar - hidden on mobile unless toggled */}
                <div className={`
                  md:block 
                  ${isFilterVisible ? 'fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4' : 'hidden'}
                `}>
                  <div className={`
                    bg-white p-6 rounded-xl shadow-md border border-kalahari-brown/10 w-full max-w-xs
                    ${isFilterVisible ? 'relative max-h-[80vh] overflow-y-auto' : ''}
                  `}>
                    {/* Mobile close button */}
                    {isFilterVisible && (
                      <button 
                        className="absolute top-3 right-3 text-kalahari-charcoal/70 hover:text-kalahari-darkbrown"
                        onClick={toggleFilter}
                      >
                        <X size={20} />
                      </button>
                    )}
                    
                    <h5 className="text-lg font-medium text-kalahari-darkbrown mb-4">Filter Reviews</h5>
                    
                    {/* Search input */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-kalahari-charcoal mb-2">
                        Search
                      </label>
                      <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-kalahari-charcoal/60" />
                        <Input
                          placeholder="Search reviews..."
                          value={searchTerm}
                          onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setCurrentPage(1);
                          }}
                          className="pl-9 border-kalahari-brown/20 focus-visible:ring-kalahari-brown"
                        />
                      </div>
                    </div>
                    
                    {/* Platform filter */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-kalahari-charcoal mb-2">
                        Platform
                      </label>
                      <Tabs 
                        defaultValue="all" 
                        value={activePlatform} 
                        onValueChange={(v) => {
                          setActivePlatform(v as ReviewPlatform | 'all');
                          setCurrentPage(1);
                        }}
                        className="w-full"
                      >
                        <TabsList className="grid grid-cols-4 bg-kalahari-sand/50 p-1">
                          <TabsTrigger 
                            value="all"
                            className="text-xs data-[state=active]:bg-white"
                          >
                            All
                          </TabsTrigger>
                          <TabsTrigger 
                            value="google"
                            className="text-xs data-[state=active]:bg-white"
                          >
                            <svg className="w-4 h-4 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                            </svg>
                          </TabsTrigger>
                          <TabsTrigger 
                            value="trustpilot"
                            className="text-xs data-[state=active]:bg-white"
                          >
                            <svg className="w-4 h-4 mx-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect width="24" height="24" fill="#00B67A"/>
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="white"/>
                            </svg>
                          </TabsTrigger>
                          <TabsTrigger 
                            value="email"
                            className="text-xs data-[state=active]:bg-white"
                          >
                            <svg className="w-4 h-4 mx-auto text-kalahari-brown" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                            </svg>
                          </TabsTrigger>
                        </TabsList>
                      </Tabs>
                    </div>
                  </div>
                </div>
                
                {/* Reviews grid and pagination */}
                <div className="md:col-span-3" ref={reviewsContainerRef}>
                  {/* Results count */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-sm text-kalahari-charcoal">
                      Showing {filteredReviews.length === 0 ? 0 : indexOfFirstReview + 1}-
                      {Math.min(indexOfLastReview, filteredReviews.length)} of {filteredReviews.length} reviews
                    </div>
                    
                    {/* Active filters */}
                    <div className="flex gap-2 items-center flex-wrap justify-end">
                      {activePlatform !== 'all' && (
                        <Badge variant="outline" className="bg-kalahari-sand/30 text-xs px-2 py-1 h-6 flex items-center gap-1">
                          {activePlatform === 'google' ? (
                            <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                            </svg>
                          ) : activePlatform === 'trustpilot' ? (
                            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect width="24" height="24" fill="#00B67A"/>
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="white"/>
                            </svg>
                          ) : (
                            <svg className="w-3 h-3 text-kalahari-brown" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                            </svg>
                          )}
                          <button 
                            className="ml-1 text-kalahari-charcoal/70 hover:text-kalahari-darkbrown"
                            onClick={() => setActivePlatform('all')}
                          >
                            <X size={12} />
                          </button>
                        </Badge>
                      )}
                      
                      {selectedRating.map((rating) => (
                        <Badge key={rating} variant="outline" className="bg-kalahari-sand/30 text-xs">
                          {rating} Stars
                          <button 
                            className="ml-1 text-kalahari-charcoal/70 hover:text-kalahari-darkbrown"
                            onClick={() => toggleRatingFilter(rating)}
                          >
                            <X size={12} />
                          </button>
                        </Badge>
                      ))}
                      
                      {searchTerm && (
                        <Badge variant="outline" className="bg-kalahari-sand/30 text-xs">
                          "{searchTerm.length > 10 ? searchTerm.substring(0, 10) + '...' : searchTerm}"
                          <button 
                            className="ml-1 text-kalahari-charcoal/70 hover:text-kalahari-darkbrown"
                            onClick={() => setSearchTerm('')}
                          >
                            <X size={12} />
                          </button>
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  {/* Reviews grid */}
                  {currentReviews.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
                      {currentReviews.map((review) => (
                        <div 
                          key={review.id}
                          className="bg-white rounded-xl p-5 md:p-6 shadow-md border border-kalahari-brown/10 flex flex-col transition-shadow hover:shadow-lg"
                        >
                          <div className="flex items-start gap-3 mb-4">
                            {/* Profile image */}
                            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border border-kalahari-brown/10">
                              <img 
                                src={getProfileImageUrl(review.name, review.id)} 
                                alt={review.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            
                            <div>
                              <p className="font-medium text-kalahari-darkbrown">{review.name}</p>
                              <p className="text-xs text-kalahari-charcoal/70">{review.location}</p>
                              <div className="flex items-center gap-2 mt-1">
                                {renderStarRating(review.rating, 'sm')}
                                <span className="text-kalahari-charcoal/70 text-xs">{review.rating}</span>
                              </div>
                            </div>
                            
                            {/* Platform icon */}
                            <div className="ml-auto">
                              {review.platform === 'google' ? (
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                                </svg>
                              ) : review.platform === 'trustpilot' ? (
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <rect width="24" height="24" fill="#00B67A"/>
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="white"/>
                                </svg>
                              ) : (
                                <svg className="w-5 h-5 text-kalahari-brown" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                                </svg>
                              )}
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-2 mb-3">
                            <Calendar size={14} className="text-kalahari-brown" />
                            <span className="text-xs text-kalahari-charcoal/70">{formatDate(review.date)}</span>
                          </div>
                          
                          <div className="mb-4 flex-grow">
                            <p className="italic text-kalahari-charcoal text-sm md:text-base leading-relaxed">
                              {review.testimonial}
                            </p>
                          </div>
                          
                          <div className="pt-3 border-t border-kalahari-brown/10">
                            {review.tourType && (
                              <Badge variant="secondary" className="bg-kalahari-lightbrown/30 text-kalahari-darkbrown text-xs">
                                {review.tourType}
                              </Badge>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    // No results message
                    <div className="bg-kalahari-sand/30 rounded-xl p-8 text-center">
                      <ThumbsUp className="h-12 w-12 mx-auto mb-4 text-kalahari-brown/50" />
                      <h5 className="text-xl font-medium text-kalahari-darkbrown mb-2">No reviews found</h5>
                      <p className="text-kalahari-charcoal/70 mb-4">
                        No reviews match your current filter criteria.
                      </p>
                      <Button 
                        variant="outline" 
                        onClick={clearFilters}
                        className="border-kalahari-brown/20 hover:bg-kalahari-sand/50"
                      >
                        Clear Filters
                      </Button>
                    </div>
                  )}
                  
                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex justify-center mt-8">
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                          disabled={currentPage === 1}
                          className="border-kalahari-brown/20"
                        >
                          <ChevronLeft size={16} />
                          <span className="sr-only md:not-sr-only md:ml-2">Previous</span>
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
                          <span className="sr-only md:not-sr-only md:mr-2">Next</span>
                          <ChevronRight size={16} />
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Leave a review CTA */}
            <div className="mt-16 pt-12 border-t border-kalahari-sand">
              <div className="bg-gradient-to-br from-kalahari-lightbrown/30 to-kalahari-sand/50 rounded-xl p-8 md:p-10 text-center max-w-3xl mx-auto">
                <h4 className="text-2xl text-kalahari-darkbrown font-normal mb-4">
                  Enjoyed Your Tour With Us?
                </h4>
                <p className="text-kalahari-charcoal max-w-2xl mx-auto mb-6">
                  We value your feedback! If you've taken a tour with us, please consider sharing your experience 
                  on Google or Trustpilot. Your reviews help other travelers discover our authentic historical tours.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://www.google.com/maps?cid=your-google-business-id" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#4285F4] hover:bg-[#3367D6] text-white py-3 px-6 rounded-md flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#fff"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#fff"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#fff"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#fff"/>
                    </svg>
                    Review on Google
                  </a>
                  <a 
                    href="https://www.trustpilot.com/review/yourcompanyname" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#00B67A] hover:bg-[#00A060] text-white py-3 px-6 rounded-md flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="white"/>
                    </svg>
                    Review on Trustpilot
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default TestimonialPage; 