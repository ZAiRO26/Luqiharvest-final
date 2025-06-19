import React from "react";
import AnimatedSection from "../AnimatedSection";
import { Check, TrendingUp, Globe, Calendar, ArrowRight, Star } from "lucide-react";

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Future Growth of Fruit Pulp Business Towards 2030",
      excerpt: "The mango pulp industry is set to experience significant expansion by 2030, driven by increasing global demand for natural and organic food products.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      category: "Industry Trends",
      date: "June 18, 2024",
      readTime: "8 min read",
      featured: true,
      content: "The mango pulp industry is set to experience significant expansion by 2030, driven by increasing global demand for natural and organic food products. As consumer preferences shift toward healthier and more convenient food options, mango pulp is becoming a key ingredient in beverages, desserts, and processed foods. This blog explores the benefits of mango pulp, export trends, and innovations shaping the food industry."
    },
    {
      id: 2,
      title: "Global Export Trends in Mango Pulp Industry",
      excerpt: "The mango pulp export business is expanding rapidly due to rising international demand from key markets worldwide.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Export Markets",
      date: "June 15, 2024",
      readTime: "6 min read",
      featured: false
    },
    {
      id: 3,
      title: "Innovations in Food Industry Using Mango Pulp",
      excerpt: "With technological advancements, the food industry is innovating mango pulp applications for new product development.",
      image: "https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Innovation",
      date: "June 12, 2024",
      readTime: "7 min read",
      featured: false
    },
    {
      id: 4,
      title: "Sustainable Packaging Solutions for Fruit Products",
      excerpt: "Brands are shifting to biodegradable and recyclable packaging for mango pulp to meet environmental standards.",
      image: "https://images.unsplash.com/photo-1536511132770-e5058c4e8c59?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Sustainability",
      date: "June 10, 2024",
      readTime: "5 min read",
      featured: false
    },
    {
      id: 5,
      title: "Quality Standards in Fruit Processing",
      excerpt: "Maintaining high quality standards in fruit processing is crucial for international market success.",
      image: "https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Quality",
      date: "June 8, 2024",
      readTime: "6 min read",
      featured: false
    },
    {
      id: 6,
      title: "Direct-to-Consumer Growth in Fruit Industry",
      excerpt: "Companies are selling mango pulp directly to consumers via online marketplaces with subscription models.",
      image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
      <div className="bg-gradient-to-r from-green-500 to-yellow-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                    {featuredPost.content}
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

                  <button 
                    onClick={() => window.location.href = '/contact'}
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all flex items-center"
                  >
                    Read Full Article <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
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
                    className="w-full h-48 object-cover"
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
                  
                  <button 
                    onClick={() => window.location.href = '/contact'}
                    className="text-green-600 hover:text-green-700 font-semibold flex items-center"
                  >
                    Read More <ArrowRight className="ml-1 w-4 h-4" />
                  </button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <AnimatedSection>
        <div className="bg-gradient-to-r from-green-500 to-yellow-500 rounded-2xl mx-4 sm:mx-8 lg:mx-16 p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Stay Updated with Industry Trends</h3>
          <p className="text-xl mb-6">
            Subscribe to our newsletter for the latest insights in fruit processing and export industry
          </p>
          <button 
            onClick={() => window.location.href = '/contact'}
            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
          >
            Subscribe Now
          </button>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default BlogPage; 