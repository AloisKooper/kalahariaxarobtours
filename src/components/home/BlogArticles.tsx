import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight, Calendar, User } from "lucide-react";

// Define a blog article structure
interface BlogArticle {
  id: string;
  title: string;
  summary: string;
  date: string;
  image: string;
  category: string;
  author: string;
  link?: string;
}

// Sample blog data
const blogArticles: BlogArticle[] = [
  {
    id: "german-architecture",
    title: "Swakopmund's Architectural Gems: A Walk Through Time",
    summary: "Discover the charming blend of German colonial and modern architecture that gives Swakopmund its unique character. Explore iconic buildings and hidden details.",
    date: "July 10, 2024",
    image: "/Home Images/Woermann House.jpg",
    category: "City Guide",
    author: "Kalahari Axarob Tours"
  },
  {
    id: "herero-nama-genocide",
    title: "Beyond History: Top Experiences in Swakopmund",
    summary: "From relaxing on the beach and exploring the jetty to adventure activities and charming cafes, discover the best experiences Swakopmund has to offer day-trippers and explorers.",
    date: "July 15, 2024",
    image: "/Home Images/jetty hero.jpg",
    category: "Activities",
    author: "Kalahari Axarob Tours"
  },
  {
    id: "shore-excursion",
    title: "Walvis Bay to Swakopmund: The Perfect Shore Excursion",
    summary: "Discover how cruise liner passengers can maximize their day ashore with a comprehensive city tour and cultural experience.",
    date: "March 3, 2024",
    image: "/Home Images/Cruise Liner Shore Excursion.jpg",
    category: "Travel Tips",
    author: "Dennis Liebenberg",
    link: "/blog/shore-excursion"
  },
  {
    id: "township-tour-update",
    title: "Exploring Mondesa Township: Cultural Immersion & Traditional Knowledge",
    summary: "Experience an authentic township tour with visits to a Herero cultural expert and traditional herbalist.",
    date: "March 25, 2024",
    image: "/Home Images/Mondesa Township.jpg",
    category: "Culture",
    author: "Kafamuyeke Erick Mwiya"
  }
];

const BlogArticles: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center py-20 bg-sand-custom px-6">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h3 className="text-gravel uppercase tracking-wider text-sm mb-2">Our Blog</h3>
          <h2 className="text-kalahari-darkbrown text-3xl md:text-4xl text-center">
            Insights & Stories from Swakopmund
          </h2>
          <div className="w-20 h-1 bg-kalahari-brown rounded-full mt-4"></div>
          <p className="text-kalahari-charcoal/80 text-center max-w-2xl mt-4">
            Explore articles about Swakopmund's unique attractions, culture, and the stories behind the sites you'll visit on our tours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogArticles.slice(0, 3).map((article) => (
            <div key={article.id} className="rounded-lg overflow-hidden shadow-md bg-white w-full max-w-xs mx-auto sm:max-w-none sm:mx-0">
              <div className="h-56 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-[#e57417]">{article.category}</span>
                  <span className="text-sm text-gray-500">{article.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.summary}</p>
                <div className="flex items-center mb-4 text-sm text-gray-500">
                  <User size={14} className="mr-1" />
                  <span>{article.author}</span>
                </div>
                <Link 
                  to={article.link || `/blog/${article.id}`} 
                  className="text-[#e57417] font-medium hover:underline inline-flex items-center"
                >
                  Read more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center justify-center bg-kalahari-darkbrown hover:bg-kalahari-brown text-white font-medium transition-colors rounded-full py-3 px-8 group"
          >
            <span>View All Articles</span>
            <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogArticles;
