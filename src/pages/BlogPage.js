import React from "react";
import { Link } from "react-router-dom";
import AnimatedSection from "../AnimatedSection";
import { Check, TrendingUp, Globe, Calendar, ArrowRight, Star } from "lucide-react";

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Future Growth of Fruit Pulp Business Towards 2030",
      excerpt: "Mango pulp is set to drive major growth in the fruit pulp business by 2030, thanks to rising global demand for natural, organic, and convenient food products. Its versatility makes it a favorite for beverages, desserts, and more. Discover the key trends and opportunities ahead.",
      image: "/images/Blog/blog-5.png",
      category: "Industry Trends",
      date: "June 18, 2024",
      readTime: "8 min read",
      featured: true,
      content: undefined
    },
    {
      id: 2,
      title: "Global Export Trends in Mango Pulp Industry",
      excerpt: "The mango pulp export business is expanding rapidly due to rising international demand from key markets worldwide.",
      image: "/images/Blog/blog-1.png",
      category: "Export Markets",
      date: "June 15, 2024",
      readTime: "6 min read",
      featured: false
    },
    {
      id: 3,
      title: "Innovations in Food Industry Using Mango Pulp",
      excerpt: "With technological advancements, the food industry is innovating mango pulp applications for new product development.",
      image: "/images/Blog/blog-3.png",
      category: "Innovation",
      date: "June 12, 2024",
      readTime: "7 min read",
      featured: false
    },
    {
      id: 4,
      title: "Sustainable Packaging Solutions for Fruit Products",
      excerpt: "Brands are shifting to biodegradable and recyclable packaging for mango pulp to meet environmental standards.",
      image: "/images/packaging1.jpg",
      category: "Sustainability",
      date: "June 10, 2024",
      readTime: "5 min read",
      featured: false
    },
    {
      id: 5,
      title: "Quality Standards in Fruit Processing",
      excerpt: "Maintaining high quality standards in fruit processing is crucial for international market success.",
      image: "/images/Blog/blog6.jpg",
      category: "Quality",
      date: "June 8, 2024",
      readTime: "6 min read",
      featured: false
    },
    {
      id: 6,
      title: "Direct-to-Consumer Growth in Fruit Industry",
      excerpt: "Companies are selling mango pulp directly to consumers via online marketplaces with subscription models.",
      image: "/images/Blog/blog-4.png",
      category: "E-commerce",
      date: "June 5, 2024",
      readTime: "4 min read",
      featured: false
    }
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="text-white py-20 relative" style={{
        backgroundImage: "url('/Blog-banner.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50" style={{zIndex:1}}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{position: 'relative', zIndex: 2}}>
          <AnimatedSection>
            <div className="text-center">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Industry Insights & Trends
              </h1>
              <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
                Stay updated with the latest trends in fruit processing and export industry
              </p>
              <div className="flex justify-center">
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-8 py-3">
                  <span className="text-lg font-semibold">
                    Latest Industry Updates
                  </span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Featured Blog Post */}
      {featuredPost && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <AnimatedSection>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                </div>
                <div className="p-8 lg:p-12">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {featuredPost.date}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {featuredPost.readTime}
                    </div>
                  </div>
                  
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <TrendingUp className="w-6 h-6 text-green-600 mr-2" />
                        Export Market Trends (2025-2030)
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                          Growing Demand for Organic Mango Pulp
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                          Aseptic & Frozen Pulp Gaining Popularity
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                          Rising Imports in Emerging Markets
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                          Government Support & Trade Agreements
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <Globe className="w-6 h-6 text-green-600 mr-2" />
                        Key Importing Countries
                      </h3>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 mr-2" />
                          <span>USA</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 mr-2" />
                          <span>UAE</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 mr-2" />
                          <span>Canada</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 mr-2" />
                          <span>Germany</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 mr-2" />
                          <span>UK</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 mr-2" />
                          <span>Australia</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Link 
                    to={`/blog/future-growth-2030`} 
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all flex items-center"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    Read Full Article <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      )}

      {/* Regular Blog Posts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatedSection>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            Latest Articles
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, index) => (
            <AnimatedSection key={post.id} delay={index * 100}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className={`w-full h-48 ${post.id === 4 ? 'object-contain' : 'object-cover'}`}
                  />
                  <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    to={post.id === 6 ? "/blog/direct-to-consumer" : post.id === 5 ? "/blog/quality-standards" : post.id === 4 ? "/blog/sustainable-packaging" : post.id === 3 ? "/blog/innovations-mango-pulp" : post.id === 2 ? "/blog/global-export-trends" : `/blog/${post.id}`} 
                    className="text-green-600 hover:text-green-700 font-semibold flex items-center"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    Read More <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <AnimatedSection>
        <div className="bg-green-500 rounded-2xl mx-4 sm:mx-8 lg:mx-16 my-16 p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Stay Ahead of the Curve</h3>
          <p className="text-xl mb-6">
            Subscribe to our newsletter for the latest industry updates and insights.
          </p>
          <Link
            to="/contact"
            onClick={() => window.scrollTo(0, 0)}
            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 inline-block"
          >
            Subscribe Now
          </Link>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default BlogPage; 