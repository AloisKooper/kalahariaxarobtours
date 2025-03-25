import React from 'react';
import { Helmet } from 'react-helmet';

interface BlogPostSEOProps {
  title: string;
  metaDescription: string;
  keywords: string;
  ogImage: string;
  ogUrl: string;
  siteTitle?: string;
  publishDate?: string;
  modifiedDate?: string;
  authorName?: string;
  authorUrl?: string;
  readingTime?: string;
  category?: string;
}

const BlogPostSEO: React.FC<BlogPostSEOProps> = ({
  title,
  metaDescription,
  keywords,
  ogImage,
  ogUrl,
  siteTitle = 'Kalahari Axarob Tours',
  publishDate,
  modifiedDate,
  authorName = 'Kalahari Axarob Tours',
  authorUrl = 'https://kalahariaxarobtours.com',
  readingTime = '5 min',
  category = 'History'
}) => {
  // Create structured data for article
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': title,
    'image': ogImage,
    'datePublished': publishDate || new Date().toISOString(),
    'dateModified': modifiedDate || publishDate || new Date().toISOString(),
    'author': {
      '@type': 'Person',
      'name': authorName,
      'url': authorUrl
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Kalahari Axarob Tours',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://kalahariaxarobtours.com/logo.png'
      }
    },
    'description': metaDescription,
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': ogUrl
    },
    'wordCount': Math.round(metaDescription.split(' ').length * 5), // Estimate based on description
    'timeRequired': `PT${readingTime.replace(/\D/g,'')}M`,
    'keywords': keywords,
    'articleSection': category
  };

  return (
    <Helmet>
      <title>{title} | {siteTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph meta tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="article:published_time" content={publishDate || new Date().toISOString()} />
      <meta property="article:modified_time" content={modifiedDate || publishDate || new Date().toISOString()} />
      <meta property="article:author" content={authorName} />
      <meta property="article:section" content={category} />
      
      {/* Twitter meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@KalahariTours" />
      <meta name="twitter:creator" content="@KalahariTours" />
      
      {/* JSON-LD structured data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default BlogPostSEO; 