import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Globe } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Products', path: '/products',
    dropdown: [
      { name: 'Fruit Pulp & Puree', path: '/products/fruit-pulp' },
      { name: 'Fruit Concentrate', path: '/products/fruit-concentrate' },
      { name: 'Fruit Slices', path: '/products/fruit-slices' },
      { name: 'Frozen Fruits', path: '/products/frozen-fruits' },
      { name: 'Vegetables', path: '/products/vegetables' },
      { name: 'Juice Commodities', path: '/products/juice-commodities' },
    ]
  },
  { name: 'Quality & Certification', path: '/quality' },
  { name: 'Blog & Trends', path: '/blog' },
  { name: 'Contact Us', path: '/contact' },
];

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar */}
      <div className="border-b border-gray-200 py-2">
        <div className="flex justify-between items-center text-sm text-gray-600 w-full md:w-7/10 mx-auto px-4 sm:px-6 lg:px-8" style={{maxWidth: '70%'}}>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-1" />
              <span>+91-81224 29668</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-1" />
              <span>luqiharvestindia@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Globe className="w-4 h-4" />
            <span>Exporting Worldwide</span>
          </div>
        </div>
      </div>
      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-0" style={{minHeight: '3.6rem'}}>
          <div className="flex items-center ml-24">
            <Link to="/" onClick={scrollToTop} className="flex items-center mr-6">
              <div className="bg-white rounded-lg p-1">
                <img src="/logo1.jpg" alt="LUQI HARVEST Logo" className="h-16 w-auto" />
              </div>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8 whitespace-nowrap ml-8">
            {navLinks.map(link => (
              link.name === 'Products' ? (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={scrollToTop}
                  className={`px-3 py-2 text-lg font-medium transition-colors ${
                    location.pathname.startsWith('/products')
                      ? 'text-orange-600 border-b-2 border-orange-600'
                      : 'text-gray-700 hover:text-orange-600'
                  }`}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={scrollToTop}
                  className={`px-3 py-2 text-lg font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-orange-600 border-b-2 border-orange-600'
                      : 'text-gray-700 hover:text-orange-600'
                  }`}
                >
                  {link.name}
                </Link>
              )
            ))}
          </nav>
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-orange-600 hover:bg-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="material-icons">menu</span>
          </button>
        </div>
        {mobileOpen && (
          <nav className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map(link => (
                link.name === 'Products' ? (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => { setMobileOpen(false); scrollToTop(); }}
                    className="px-4 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => { setMobileOpen(false); scrollToTop(); }}
                    className="px-4 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50"
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
} 