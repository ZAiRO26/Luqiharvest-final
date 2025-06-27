import React from "react";
import AnimatedSection from "../AnimatedSection";
import { Shield, Award, CheckCircle } from "lucide-react";

const QualityPage = () => (
  <>
    {/* Banner Image - move to very top */}
    <div className="w-full py-16 md:py-24 text-center mb-12 relative" style={{
      backgroundImage: "url('/Quality-banner.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <div className="absolute inset-0 bg-black bg-opacity-20" style={{zIndex:1}}></div>
      <AnimatedSection>
        <div className="relative z-10">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 drop-shadow-lg" style={{color: '#fff', fontWeight: 900, textShadow: '0 2px 8px rgba(0,0,0,0.25)'}}>
            Quality & Certification
          </h1>
          <p className="text-xl max-w-3xl mx-auto drop-shadow font-bold" style={{color: '#fff', fontWeight: 800, textShadow: '0 2px 8px rgba(0,0,0,0.18)'}}>
            Meeting international standards with comprehensive quality assurance and certifications
          </p>
        </div>
      </AnimatedSection>
    </div>
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Certifications */}
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Certifications</h2>
            <p className="text-xl text-gray-600">
              We maintain the highest standards of quality and food safety
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {['FSSAI', 'HALAL', 'FDA', 'KOSHER', 'ISI MARK'].map((cert, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{cert}</h3>
                <p className="text-gray-600 text-sm mb-3">Certified</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Memberships */}
        <AnimatedSection>
          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Memberships</h2>
            <p className="text-xl text-gray-600 text-center mb-8">
              We are proud members of leading industry organizations that promote quality and trade excellence
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "IndiaMart",
                  desc: "Leading B2B marketplace",
                  details: "Connecting with businesses across India and globally"
                },
                {
                  name: "APEDA",
                  desc: "Agricultural and Processed Food Products Export Development Authority",
                  details: "Government body promoting agricultural exports"
                },
                {
                  name: "FIEO",
                  desc: "Federation of Indian Export Organisations",
                  details: "Premier trade promotion organization"
                },
                {
                  name: "UDAYAM",
                  desc: "MSME Registration",
                  details: "Micro, Small and Medium Enterprises registration"
                }
              ].map((membership, index) => (
                <div key={index} className="p-4 bg-white rounded-lg shadow text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{membership.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{membership.desc}</p>
                  <p className="text-gray-500 text-xs">{membership.details}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Quality Assurance Process */}
        <AnimatedSection>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Quality Assurance Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Control</h3>
                <p className="text-gray-600">
                  Rigorous testing at every stage of production to ensure consistent quality and safety standards.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Food Safety</h3>
                <p className="text-gray-600">
                  Adherence to international food safety standards with regular audits and compliance checks.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Certification Maintenance</h3>
                <p className="text-gray-600">
                  Continuous monitoring and renewal of all certifications to maintain our high standards.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Quality Commitment */}
        <AnimatedSection>
          <div className="p-8 text-white mt-12" style={{ backgroundColor: '#7ED957', borderRadius: '2rem' }}>
            <h2 className="text-3xl font-bold mb-4 text-center">Our Quality Commitment</h2>
            <p className="text-lg text-center leading-relaxed">
              At LUQI HARVEST, quality is not just a standard—it's our promise to our customers. We are committed to delivering premium fruit products that meet the highest international standards while maintaining the authentic taste and nutritional value that our customers expect.
            </p>
            <div className="mt-6 text-center">
              <p className="text-green-100">
                <strong>Every product we export carries our commitment to excellence.</strong>
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </>
);

export default QualityPage; 