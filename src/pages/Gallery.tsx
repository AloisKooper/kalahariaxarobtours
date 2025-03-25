import React, { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Search, Filter, Expand, XCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const GalleryPage: React.FC = () => {
  // State to track viewport size
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentCategory, setCurrentCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<null | GalleryImage>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [galleryView, setGalleryView] = useState<"grid" | "masonry">("grid");
  
  // Effect to handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };
    
    // Initial check
    handleResize();
    
    // Add resize listener
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Define gallery categories and images
  const categories = [
    { id: "all", name: "All Images" },
    { id: "historical", name: "Historical Sites" },
    { id: "nature", name: "Nature & Scenery" },
    { id: "township", name: "Township & Cultural" }
  ];

  interface GalleryImage {
    id: string;
    title: string;
    description: string;
    category: string[];
    imageSrc: string;
    tags: string[];
  }

  const galleryImages: GalleryImage[] = [
    // Historical Sites
    {
      id: "genocide-memorial",
      title: "Concentration Camp Mass Graves",
      description: "Historical site commemorating the victims of the 1904-1908 Nama and Ovaherero Genocide",
      category: ["historical"],
      imageSrc: "/Home Images/Genocide.jpg",
      tags: ["historical", "memorial", "genocide"]
    },
    {
      id: "military-barracks",
      title: "Old Military Barracks (Alte Kaserne)",
      description: "Historical German colonial military structure in Swakopmund",
      category: ["historical"],
      imageSrc: "/Home Images/barracks.jpg",
      tags: ["historical", "colonial", "military"]
    },
    {
      id: "old-hospital",
      title: "Old Hospital",
      description: "Historical medical facility from the colonial era",
      category: ["historical"],
      imageSrc: "/Home Images/Hospital.jpg",
      tags: ["historical", "colonial", "medical"]
    },
    {
      id: "swakopmund-jetty",
      title: "Swakopmund Jetty",
      description: "Historic wooden pier extending into the Atlantic Ocean",
      category: ["historical", "nature"],
      imageSrc: "/Home Images/jetty hero.jpg",
      tags: ["historical", "landmark", "ocean"]
    },
    {
      id: "woermann-house",
      title: "Woermann House",
      description: "Iconic colonial-era building with distinctive architecture",
      category: ["historical"],
      imageSrc: "/Home Images/German Architecture.jpg",
      tags: ["historical", "colonial", "architecture"]
    },
    {
      id: "war-memorial",
      title: "German War Memorial",
      description: "Historical German War Memorial site",
      category: ["historical"],
      imageSrc: "/Home Images/Memorial Site.jpg",
      tags: ["historical", "memorial", "german"]
    },
    {
      id: "bahnhof",
      title: "Old Bahnhof (Train Station)",
      description: "Historic German railway station",
      category: ["historical"],
      imageSrc: "/Home Images/Bahnhof.jpg",
      tags: ["historical", "colonial", "railway"]
    },
    
    // Nature & Scenery
    {
      id: "walvis-bay-lagoon",
      title: "Walvis Bay Lagoon",
      description: "Beautiful lagoon where you can spot flamingos and other birdlife",
      category: ["nature"],
      imageSrc: "/Home Images/Flamingo.jpg",
      tags: ["nature", "wildlife", "flamingo"]
    },
    {
      id: "dune-7",
      title: "Dune 7",
      description: "One of the highest dunes in the Namib Desert",
      category: ["nature"],
      imageSrc: "/Home Images/dune-7.gif",
      tags: ["nature", "desert", "sand dune"]
    },
    {
      id: "swakopmund-landmarks",
      title: "Swakopmund City View",
      description: "Scenic views of the unique German architecture in Swakopmund",
      category: ["historical", "nature"],
      imageSrc: "/Home Images/Swakop Landmarks.jpg",
      tags: ["historical", "architecture", "cityscape"]
    },
    
    // Township & Cultural
    {
      id: "mondesa-township",
      title: "Mondesa Township",
      description: "Experience the vibrant local culture in Mondesa township",
      category: ["township"],
      imageSrc: "/Home Images/Mondesa Township.jpg",
      tags: ["cultural", "township", "community"]
    },
    {
      id: "township-tour",
      title: "Township Tour",
      description: "Guided tour through the township to learn about local life and culture",
      category: ["township"],
      imageSrc: "/Home Images/Township Tour.jpg",
      tags: ["cultural", "township", "tour"]
    },
    {
      id: "local-living",
      title: "Local Living",
      description: "Learn about how locals live in the township communities",
      category: ["township"],
      imageSrc: "/Home Images/Local Living.jpg",
      tags: ["cultural", "township", "daily life"]
    },
    {
      id: "cultural-exchange",
      title: "Cultural Exchange",
      description: "Meaningful interactions with local community members",
      category: ["township"],
      imageSrc: "/Home Images/Cultural Exchange.jpg",
      tags: ["cultural", "township", "interaction"]
    },
    {
      id: "craft-market",
      title: "Local Craft Market",
      description: "Explore the vibrant markets selling handmade crafts and souvenirs",
      category: ["township"],
      imageSrc: "/Home Images/Craft Market.jpg",
      tags: ["cultural", "market", "crafts"]
    },
    {
      id: "local-artwork",
      title: "Local Artwork",
      description: "Beautiful handcrafted art pieces by local artisans",
      category: ["township"],
      imageSrc: "/Home Images/Local Artwork.jpg",
      tags: ["cultural", "art", "crafts"]
    }
  ];

  // Filter gallery images based on search term and category
  const filteredImages = galleryImages.filter(image => {
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          image.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          image.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = currentCategory === "all" || image.category.includes(currentCategory);
    
    return matchesSearch && matchesCategory;
  });

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    setLightboxOpen(true);
  };

  return (
    <>
      <Navbar />
      <PageHero
        title="Our Tour Gallery"
        subtitle="Explore our collection of photographs showcasing the historical sites, cultural experiences, and memorable moments from our tours in Swakopmund"
        backgroundImage="/Home Images/gallery swakop.jpg"
        isMobile={isMobile}
      />
      
      {/* White background container for all content below hero INCLUDING footer */}
      <div className="w-full bg-white relative z-10">
        <div className="py-12 md:py-16 px-4 md:px-6">
          <div className="container mx-auto max-w-7xl">
            {/* Gallery Controls Section */}
            <div className="mb-10 space-y-6">
              {/* Search and Filter Bar */}
              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-kalahari-charcoal/60 h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Search gallery..."
                    className="pl-10 border-kalahari-brown/20 focus-visible:ring-kalahari-brown"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className={`border-kalahari-brown/20 ${galleryView === 'grid' ? 'bg-kalahari-brown/10' : ''}`}
                    onClick={() => setGalleryView('grid')}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="7" height="7"></rect>
                      <rect x="14" y="3" width="7" height="7"></rect>
                      <rect x="3" y="14" width="7" height="7"></rect>
                      <rect x="14" y="14" width="7" height="7"></rect>
                    </svg>
                    <span className="ml-2 hidden sm:inline">Grid</span>
                  </Button>
                  <Button
                    variant="outline"
                    className={`border-kalahari-brown/20 ${galleryView === 'masonry' ? 'bg-kalahari-brown/10' : ''}`}
                    onClick={() => setGalleryView('masonry')}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="7" height="9"></rect>
                      <rect x="14" y="3" width="7" height="5"></rect>
                      <rect x="3" y="14" width="7" height="7"></rect>
                      <rect x="14" y="10" width="7" height="11"></rect>
                    </svg>
                    <span className="ml-2 hidden sm:inline">Masonry</span>
                  </Button>
                </div>
              </div>

              {/* Category Tabs */}
              <Tabs defaultValue="all" value={currentCategory} onValueChange={setCurrentCategory}>
                <TabsList className="bg-sand-custom w-full justify-start mb-2 overflow-x-auto flex-nowrap whitespace-nowrap space-x-1 p-1 h-auto">
                  {categories.map((category) => (
                    <TabsTrigger 
                      key={category.id} 
                      value={category.id}
                      className="py-2 px-4 text-sm data-[state=active]:bg-kalahari-brown data-[state=active]:text-white"
                    >
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>

              {/* Results Counter */}
              <div className="text-sm text-kalahari-charcoal">
                Showing {filteredImages.length} of {galleryImages.length} images
                {searchTerm && (
                  <span className="ml-2 inline-flex items-center">
                    <span>for</span>
                    <Badge variant="outline" className="ml-2 bg-kalahari-sand/50">
                      "{searchTerm}"
                      <XCircle 
                        className="ml-1 h-3 w-3 cursor-pointer" 
                        onClick={() => setSearchTerm("")}
                      />
                    </Badge>
                  </span>
                )}
              </div>
            </div>

            {/* Gallery Grid */}
            {galleryView === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {filteredImages.map((image) => (
                  <div 
                    key={image.id}
                    className="group relative overflow-hidden rounded-lg shadow-md bg-white transition-all hover:shadow-lg cursor-pointer"
                    onClick={() => openLightbox(image)}
                  >
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={image.imageSrc} 
                        alt={image.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div className="w-full">
                        <h3 className="text-white text-lg font-semibold mb-1 line-clamp-1">{image.title}</h3>
                        <p className="text-white/90 text-sm line-clamp-2">{image.description}</p>
                      </div>
                      <Expand className="absolute top-4 right-4 text-white h-5 w-5" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // Masonry Layout
              <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6">
                {filteredImages.map((image) => (
                  <div 
                    key={image.id}
                    className="group relative overflow-hidden rounded-lg shadow-md bg-white transition-all hover:shadow-lg cursor-pointer break-inside-avoid"
                    onClick={() => openLightbox(image)}
                  >
                    <div className="overflow-hidden">
                      <img 
                        src={image.imageSrc} 
                        alt={image.title}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div className="w-full">
                        <h3 className="text-white text-lg font-semibold mb-1 line-clamp-1">{image.title}</h3>
                        <p className="text-white/90 text-sm line-clamp-2">{image.description}</p>
                      </div>
                      <Expand className="absolute top-4 right-4 text-white h-5 w-5" />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* No Results Message */}
            {filteredImages.length === 0 && (
              <div className="py-16 text-center">
                <p className="text-kalahari-charcoal/80 text-lg">No gallery images match your search.</p>
                <Button 
                  variant="outline" 
                  className="mt-4 border-kalahari-brown/20"
                  onClick={() => {
                    setSearchTerm("");
                    setCurrentCategory("all");
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Custom Lightbox (replacing Dialog component) */}
        {lightboxOpen && selectedImage && (
          <div 
            className="fixed inset-0 z-[1000] bg-black/80 flex items-center justify-center p-2 sm:p-4" 
            onClick={() => setLightboxOpen(false)}
          >
            <div className="bg-white rounded-lg overflow-hidden shadow-xl w-full sm:w-[85%] md:w-[80%]" 
                 style={{ 
                   maxWidth: '800px', 
                   minWidth: 'auto', 
                   maxHeight: '90vh'
                 }}
                 onClick={(e) => e.stopPropagation()}
            >
              <div className="relative bg-sand-light h-[250px] sm:h-[350px] md:h-[450px]">
                <img 
                  src={selectedImage.imageSrc} 
                  alt={selectedImage.title}
                  className="w-full h-full object-cover" 
                />
                <button 
                  className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-kalahari-brown text-white rounded-full p-1 sm:p-1.5 shadow-md"
                  onClick={() => setLightboxOpen(false)}
                >
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <div className="p-4 sm:p-6 border-t border-gray-100">
                <h3 className="text-lg sm:text-xl text-kalahari-brown font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-kalahari-charcoal text-sm mb-4">{selectedImage.description}</p>
                <div className="flex flex-wrap gap-2">
                  {selectedImage.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-kalahari-sand/50 text-kalahari-charcoal">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        <Footer />
      </div>
    </>
  );
};

export default GalleryPage; 