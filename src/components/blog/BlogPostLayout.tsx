import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../Header';
import Footer from '../Footer';
import BlogPostHeading from './BlogPostHeading';
import BlogPostShareButtons from './BlogPostShareButtons';
import BlogAuthorInfo from './BlogAuthorInfo';
import RelatedArticles from './RelatedArticles';

interface BlogPostLayoutProps {
  title: string;
  metaDescription: string;
  keywords: string;
  ogImage: string;
  ogUrl: string;
  publishDate: string;
  author: {
    name: string;
    bio: string;
    image: string;
  };
  estimatedReadTime: string;
  category: string;
  children: React.ReactNode;
  relatedArticles?: Array<{
    id: string;
    title: string;
    image: string;
    category: string;
  }>;
}

const BlogPostLayout: React.FC<BlogPostLayoutProps> = ({
  title,
  metaDescription,
  keywords,
  ogImage,
  ogUrl,
  publishDate,
  author,
  estimatedReadTime,
  category,
  children,
  relatedArticles = []
}) => {
  return (
    <div>
      <Helmet>
        <title>{title} | Kalahari Axarob Tours</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <BlogPostHeading 
          title={title} 
          category={category}
          date={publishDate} 
          readTime={estimatedReadTime}
        />
        
        <div className="prose max-w-none my-8">
          {children}
        </div>
        
        <BlogPostShareButtons url={ogUrl} title={title} />
        
        <BlogAuthorInfo 
          name={author.name}
          bio={author.bio}
          image={author.image}
        />
        
        {relatedArticles.length > 0 && (
          <RelatedArticles articles={relatedArticles} />
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPostLayout; 