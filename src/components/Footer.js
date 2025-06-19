import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  // Scroll to top on link click
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#f7f5f1] text-[#3d372c] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* LUQI HARVEST Info */}
          <div>
            <div className="text-2xl font-bold mb-4">LUQI HARVEST</div>
            <p className="mb-6 max-w-xs">
              A Bangalore and Krishnagiri-based company that produces, trades, and exports high-quality, natural fruit pulp worldwide.
            </p>
            <div className="flex space-x-4 text-2xl">
              <a href="https://www.facebook.com/share/1CFbUHTfK9/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[#3b5998] transition-colors">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.instagram.com/luqi_harvest?utm_source=qr&igsh=dmI4eXpuYmlubWFw" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#E1306C] transition-colors">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg>
              </a>
              <a href="https://youtube.com/@luqi_harvest?si=cYyWkmuJWN3t-jFR" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-[#FF0000] transition-colors">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><polygon points="10,8 16,12 10,16 10,8" fill="#FF0000"/></svg>
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <div className="text-xl font-semibold mb-4">Quick Links</div>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:underline" onClick={handleLinkClick}>Home</Link></li>
              <li><Link to="/about" className="hover:underline" onClick={handleLinkClick}>About Us</Link></li>
              <li><Link to="/products" className="hover:underline" onClick={handleLinkClick}>Products</Link></li>
              <li><Link to="/blog" className="hover:underline" onClick={handleLinkClick}>Blog</Link></li>
              <li><Link to="/contact" className="hover:underline" onClick={handleLinkClick}>Contact</Link></li>
            </ul>
          </div>
          {/* Products */}
          <div>
            <div className="text-xl font-semibold mb-4">Products</div>
            <ul className="space-y-2">
              <li><Link to="/products/fruit-pulp" className="hover:underline cursor-pointer" onClick={handleLinkClick}>Fruit Pulp & Puree</Link></li>
              <li><Link to="/products/fruit-concentrate" className="hover:underline cursor-pointer" onClick={handleLinkClick}>Fruit Concentrate</Link></li>
              <li><Link to="/products/fruit-slices" className="hover:underline cursor-pointer" onClick={handleLinkClick}>Fruit Slices</Link></li>
              <li><Link to="/products/frozen-fruits" className="hover:underline cursor-pointer" onClick={handleLinkClick}>Frozen Fruit</Link></li>
              <li><Link to="/products/vegetables" className="hover:underline cursor-pointer" onClick={handleLinkClick}>Premium Vegetables</Link></li>
            </ul>
          </div>
          {/* Contact Us */}
          <div>
            <div className="text-xl font-semibold mb-4">Contact Us</div>
            <div className="space-y-2 text-[#3d372c] text-base">
              <div className="flex items-start space-x-2">
                <span className="mt-1">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v4.5c0 7.5 9 11.5 9 11.5s9-4 9-11.5z"/></svg>
                </span>
                <span>LUQI HARVEST INTERNATIONAL, Innov8 Mantri Commercio, Tower A, No.51, 5th Floor, Bengaluru, Karnataka, India – 560103</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22 16.92V19a2 2 0 0 1-2 2A19.72 19.72 0 0 1 3 5a2 2 0 0 1 2-2h2.09a2 2 0 0 1 2 1.72c.13.81.36 1.6.7 2.34a2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 6 6l1.74-1.74a2 2 0 0 1 2.11-.45c.74.34 1.53.57 2.34.7A2 2 0 0 1 22 16.92z"/></svg>
                </span>
                <span>+91-81224 29668</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M4 4h16v16H4z"/><polyline points="22,6 12,13 2,6"/></svg>
                </span>
                <span>contact@mangoozz.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-[#e5e1d8] mt-8 pt-8 text-center text-[#8c8575]">
          <p>&copy; 2025 LUQI HARVEST. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 