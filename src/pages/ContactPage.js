import React, { useState, useEffect } from "react";
import AnimatedSection from "../AnimatedSection";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Helmet } from "react-helmet";
import emailjs from 'emailjs-com';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    quantity: "",
    purpose: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_1stu49r',
      'template_yjj40bo',
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        quantity: formData.quantity,
        purpose: formData.purpose,
        message: formData.message,
      },
      'JuCPJF8K1NygdcdoT'
    ).then(
      (result) => {
        alert('Thank you for your inquiry! We will contact you soon.');
        setFormData({
          name: "",
          email: "",
          phone: "",
          quantity: "",
          purpose: "",
          message: "",
        });
      },
      (error) => {
        alert('There was an error sending your message. Please try again later.');
      }
    );
  };

  return (
    <>
      <Helmet>
        <title>Contact LUQI HARVEST - Get in Touch</title>
        <meta name="description" content="Contact LUQI HARVEST for inquiries about our premium fruit products, export services, or partnership opportunities. We're here to help!" />
        <meta name="keywords" content="contact, LUQI HARVEST, fruit exporter, inquiry, partnership, India" />
        <meta property="og:title" content="Contact LUQI HARVEST - Get in Touch" />
        <meta property="og:description" content="Contact LUQI HARVEST for inquiries about our premium fruit products, export services, or partnership opportunities. We're here to help!" />
        <meta property="og:image" content="/Contact-banner.jpg" />
        <meta property="og:url" content="https://luqi-harvest.com/contact" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact LUQI HARVEST - Get in Touch" />
        <meta name="twitter:description" content="Contact LUQI HARVEST for inquiries about our premium fruit products, export services, or partnership opportunities. We're here to help!" />
        <meta name="twitter:image" content="/Contact-banner.jpg" />
      </Helmet>
      {/* Banner Image */}
      <div className="w-full py-16 md:py-24 text-center mb-12 relative" style={{
        backgroundImage: "url('/images/contactus1.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50" style={{zIndex:1}}></div>
        <div className="relative z-10">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Contact Us
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto drop-shadow">
            At LUQI HARVEST, we are always here to assist you! Whether you have questions about our products, want to place an order or need support with any of our services, feel free to reach out to us.
          </p>
        </div>
      </div>
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <AnimatedSection>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Corporate Office</h3>
                        <p className="text-gray-600">
                          LUQI HARVEST EXPORTS<br/>
                          Innov8 Mantri Commercio, Tower A,<br/>
                          No.51, 5th Floor, Deverabisanahalli,<br/>
                          Bengaluru, Karnataka, India – 560103
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Registered Office</h3>
                        <p className="text-gray-600">
                          LUQI HARVEST EXPORTS<br/>
                          No.30A, T.B.Road, Oldpet,<br/>
                          Krishnagiri, Tamil Nadu, India<br/>
                          PIN: 635 001
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Customer Support and Sales Inquiries</h3>
                        <p className="text-gray-600">+91-81224 29668</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                        <p className="text-gray-600">Support and Sales: luqiharvestindia@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <Clock className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                        <p className="text-gray-600">
                          Monday-Friday: 9 AM IST - 6 PM IST<br/>
                          Saturday and Sunday: Holiday
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                          <div className="flex items-center justify-center gap-2 w-full h-full">
                            <Facebook className="w-5 h-5 text-green-600" />
                            <Instagram className="w-5 h-5 text-green-600" />
                            <Linkedin className="w-5 h-5 text-green-600" />
                            <Twitter className="w-5 h-5 text-green-600" />
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Follow Us on Social Media</h3>
                        <div className="space-y-1">
                          <a 
                            href="https://www.facebook.com/share/1CFbUHTfK9/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-green-600 hover:text-green-700 flex items-center"
                          >
                            <Facebook className="w-4 h-4 mr-2" />
                            Facebook
                          </a>
                          <a 
                            href="https://www.instagram.com/luqi_harvest?utm_source=qr&igsh=dmI4eXpuYmlubWFw" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-green-600 hover:text-green-700 flex items-center"
                          >
                            <Instagram className="w-4 h-4 mr-2" />
                            Instagram
                          </a>
                          <a
                            href="https://www.linkedin.com/company/luqi-harvest/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-600 hover:text-green-700 flex items-center"
                          >
                            <Linkedin className="w-4 h-4 mr-2" />
                            LinkedIn
                          </a>
                          <a
                            href="https://x.com/LuqiHarvest"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-600 hover:text-green-700 flex items-center"
                          >
                            <Twitter className="w-4 h-4 mr-2" />
                            X
                          </a>
                          <a 
                            href="https://youtube.com/@luqi_harvest?si=cYyWkmuJWN3t-jFR" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-green-600 hover:text-green-700 flex items-center"
                          >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><polygon points="10,8 16,12 10,16 10,8" fill="#FF0000"/></svg>
                            YouTube
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection delay={200}>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us A Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Quantity Required
                      </label>
                      <input
                        type="text"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Purpose of Contact
                    </label>
                    <select
                      name="purpose"
                      value={formData.purpose}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    >
                      <option value="">Select Purpose</option>
                      <option value="bulk-order">Bulk Order Inquiry</option>
                      <option value="export">Export Inquiry</option>
                      <option value="product-info">Product Information</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="Please describe your requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-all transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-[#f7f5f1] py-16 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8">Our Locations</h2>
            <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
              <iframe
                title="LUQI HARVEST Location"
                src="https://www.google.com/maps?q=Innov8+Mantri+Commercio,+Tower+A,+No.51,+5th+Floor,+Bengaluru,+Karnataka,+India+560103&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage; 