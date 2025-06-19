import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Globe, ChevronDown } from 'lucide-react';

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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar */}
      <div className="border-b border-gray-200 py-2">
        <div className="flex justify-between items-center text-sm text-gray-600 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-1" />
              <span>+91-81224 29668</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-1" />
              <span>contact@mangoozz.com</span>
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
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" onClick={scrollToTop} className="flex items-center">
              <img src="/logo.png" alt="LUQI HARVEST" className="h-28 w-auto mr-2" />
            </Link>
            <span className="ml-1 text-xs text-gray-500">INTERNATIONAL</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              link.dropdown ? (
                <div key={link.path} className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                  <Link
                    to={link.path}
                    onClick={scrollToTop}
                    className={`px-3 py-2 text-lg font-medium flex items-center transition-colors ${
                      location.pathname.startsWith('/products')
                        ? 'text-orange-600 border-b-2 border-orange-600'
                        : 'text-gray-700 hover:text-orange-600'
                    }`}
                    style={{ zIndex: 2 }}
                  >
                    {link.name}
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </Link>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                      <Link
                        to="/products"
                        onClick={scrollToTop}
                        className="block w-full text-left px-4 py-2 text-base text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                      >
                        All Products
                      </Link>
                      <Link
                        to="/products/fruit-pulp"
                        onClick={scrollToTop}
                        className="block w-full text-left px-4 py-2 text-base text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                      >
                        Fruit Pulp & Puree
                      </Link>
                      <Link
                        to="/products/fruit-concentrate"
                        onClick={scrollToTop}
                        className="block w-full text-left px-4 py-2 text-base text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                      >
                        Fruit Concentrate
                      </Link>
                      <Link
                        to="/products/fruit-slices"
                        onClick={scrollToTop}
                        className="block w-full text-left px-4 py-2 text-base text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                      >
                        Fruit Slices
                      </Link>
                      <Link
                        to="/products/frozen-fruits"
                        onClick={scrollToTop}
                        className="block w-full text-left px-4 py-2 text-base text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                      >
                        Frozen Fruits
                      </Link>
                      <Link
                        to="/products/vegetables"
                        onClick={scrollToTop}
                        className="block w-full text-left px-4 py-2 text-base text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                      >
                        Vegetables
                      </Link>
                      <Link
                        to="/products/juice-commodities"
                        onClick={scrollToTop}
                        className="block w-full text-left px-4 py-2 text-base text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                      >
                        Juice Commodities
                      </Link>
                    </div>
                  )}
                </div>
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
                link.dropdown ? (
                  <div key={link.path}>
                    <button className="w-full text-left px-4 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50 flex items-center">
                      {link.name}
                      <ChevronDown className="ml-1 w-4 h-4" />
                    </button>
                    <div className="pl-4 space-y-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => { setMobileOpen(false); scrollToTop(); }}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:text-orange-600 hover:bg-gray-50"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
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