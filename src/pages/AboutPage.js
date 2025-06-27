import React from "react";
import { Link } from "react-router-dom";
import AnimatedSection from "../AnimatedSection";
import { Globe, Target, Heart, CheckCircle, Sprout, Cog, Briefcase, Leaf, Award } from "lucide-react";

const AboutPage = () => {
  const stats = [
    { number: "20+", label: "Years of industry experts", icon: Sprout },
    { number: "10+", label: "Industry Tie-ups", icon: Cog },
    { number: "50+", label: "Clients", icon: Briefcase },
    { number: "75+", label: "Exporting countries", icon: Globe },
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To deliver nature's best fruit to the world with premium quality and sustainable practices.",
      color: "green"
    },
    {
      icon: Heart,
      title: "Our Vision",
      description: "To become a global leader in fruit processing, recognized for quality, innovation, and sustainability.",
      color: "green"
    },
    {
      icon: CheckCircle,
      title: "Our Values",
      description: "Quality, sustainability, innovation, and customer satisfaction drive everything we do.",
      color: "green"
    }
  ];

  const team = [
    {
      name: "Management Team",
      role: "Leadership",
      image: "/images/About us/leadership.png",
      description: "Experienced leadership driving innovation and growth"
    },
    {
      name: "Quality Control",
      role: "Excellence",
      image: "/images/About us/quality1.png",
      description: "Rigorous quality standards ensuring premium products"
    },
    {
      name: "Export Team",
      role: "Global Reach",
      image: "/images/global-exports.jpg",
      description: "Connecting Indian fruits to global markets"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative text-white py-20" style={{
        backgroundImage: "url('/aboutus.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                About LUQI HARVEST
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
                Bringing the finest fruit products from India to the global market since our inception
              </p>
              <div className="flex justify-center">
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-8 py-3">
                  <span className="text-lg font-semibold">
                    Premium Fruit Exporters
                  </span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {stats.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* Company Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              LUQI HARVEST was founded with a passion for bringing the finest fruit products from India to the global market. Located in the heart of Bangalore, our journey began with a focus on producing and trading high-quality mango pulp, utilizing the rich agricultural resources of the region.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainable Growth</h3>
                  <p className="text-gray-600">Over time, we expanded our offerings to include other fruit pulps like Guava, Pineapple, Custard apple, Sapota (Chikku) and Jackfruit.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Commitment</h3>
                  <p className="text-gray-600">Our commitment to quality and sustainability has helped us grow into a trusted name in the fruit processing and trading industry.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Reach</h3>
                  <p className="text-gray-600">We now export to international markets while maintaining strong ties with local farmers and manufacturers.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="relative">
              <img
                src="/images/About us/export.png"
                alt="Our Story"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">20+</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Mission, Vision, Values through Team Section with unified background */}
      <div style={{ backgroundColor: '#FFFCEB' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
              Our Mission, Vision & Values
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className={`bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all transform hover:scale-105`}>
                  <div className={`w-16 h-16 bg-${value.color}-100 rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <value.icon className={`w-8 h-8 text-${value.color}-600`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* Background & Operations */}
      <div className="py-16" style={{ backgroundColor: '#FFFCEB' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Background & Operations
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
                LUQI HARVEST is a trusted trader specializing in sourcing and exporting premium fruit pulps, with a focus on mango varieties like Alphonso, Totapuri, and Kesar.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFCEB' }}>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Background</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We work closely with reliable manufacturers and farmers to ensure that only the finest fruits are selected, supporting sustainable and ethical practices. Through our extensive network, we provide high-quality, preservative-free mango pulp and other fruit pulps.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  All our products are available in Aseptic and OTS and frozen packaging, meeting national and international standards for quality and food safety, catering to a wide range of global markets.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="p-8 rounded-2xl" style={{ backgroundColor: '#FFFCEB' }}>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Operations</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  At LUQI HARVEST, the entire process from farm to finished product is carefully managed. We work closely with local farmers, promoting sustainable agricultural practices and ensuring fair trade.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The fruit is harvested at its peak ripeness, transported to our processing units, and transformed into premium pulp using technology that preserves its taste, color, and nutritional value.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div style={{ backgroundColor: '#FFFCEB', width: '100%' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
              Our Team
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-green-600 font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600">
                      {member.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* Extend background color below team section to reach green footer */}
      <div style={{ backgroundColor: '#FFFCEB', height: '80px', width: '100%' }}></div>

      {/* Call to Action */}
      <AnimatedSection>
        <div className="rounded-2xl mx-4 sm:mx-8 lg:mx-16 my-16 p-8 text-white text-center" style={{
          backgroundColor: '#4CAF50',
        }}>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Partner with Us?</h3>
          <p className="text-lg sm:text-xl mb-6">
            Join us in bringing the finest Indian fruits to global markets
          </p>
          <Link 
            to="/contact" 
            onClick={() => window.scrollTo(0, 0)}
            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 inline-block"
          >
            Get In Touch
          </Link>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default AboutPage; 