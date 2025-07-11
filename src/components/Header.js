import React, { useState, useEffect, useRef } from 'react';
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
  const contactBarRef = useRef();
  const headerRef = useRef();
  const lastScrollY = useRef(window.scrollY);
  const menuRef = useRef();
  const burgerRef = useRef();

  // Auto-hide menu on outside click or route change
  useEffect(() => {
    if (!mobileOpen) return;
    const handleClick = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        burgerRef.current &&
        !burgerRef.current.contains(e.target)
      ) {
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [mobileOpen]);

  // Auto-hide menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 768) { // Only on mobile
        if (window.scrollY > lastScrollY.current) {
          // Scrolling down
          if (contactBarRef.current) contactBarRef.current.style.transform = 'translateY(-100%)';
          if (headerRef.current) headerRef.current.style.transform = 'translateY(-100%)';
        } else {
          // Scrolling up
          if (contactBarRef.current) contactBarRef.current.style.transform = 'translateY(0)';
          if (headerRef.current) headerRef.current.style.transform = 'translateY(0)';
        }
        lastScrollY.current = window.scrollY;
      } else {
        // Always show on desktop
        if (contactBarRef.current) contactBarRef.current.style.transform = 'translateY(0)';
        if (headerRef.current) headerRef.current.style.transform = 'translateY(0)';
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header ref={headerRef} style={{ transition: 'transform 0.3s ease', willChange: 'transform' }} className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar */}
      <div ref={contactBarRef} style={{ transition: 'transform 0.3s ease', willChange: 'transform' }} className="border-b border-gray-200 py-2">
        <div className="w-full md:w-7/10 mx-auto px-4 sm:px-6 lg:px-8" style={{maxWidth: '70%'}}>
          {/* Mobile: stack and center, Desktop: flex row */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center text-sm text-gray-600">
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start">
                <Phone className="w-4 h-4 mr-1" />
                <span>+91-81224 29668</span>
              </div>
              <div className="flex items-center justify-center md:justify-start mt-1 md:mt-0">
                <Mail className="w-4 h-4 mr-1" />
                <span>contact@luqiharvest.com</span>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-end space-x-2 mt-1 md:mt-0">
              <Globe className="w-4 h-4" />
              <span>Exporting Worldwide</span>
            </div>
          </div>
        </div>
      </div>
      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center py-0 md:py-0" style={{minHeight: '3.6rem'}}>
          {/* Mobile header: logo left, burger icon right */}
          <div className="w-full flex md:hidden flex-row items-center justify-between pt-2 pb-2 relative">
            <Link to="/" onClick={scrollToTop} className="flex items-center ml-[-12]">
              <div className="bg-white rounded-lg p-1">
                <img src="/logo1.jpg" alt="LUQI HARVEST Logo" className="h-14 w-auto" />
              </div>
            </Link>
            <button
              ref={burgerRef}
              className="p-2 rounded-md text-gray-600 hover:text-orange-600 hover:bg-gray-100"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Open menu"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          {/* Desktop header: logo left, nav right */}
          <div className="hidden md:flex items-center" style={{ marginLeft: '8px' }}>
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
        </div>
        {mobileOpen && (
          <nav ref={menuRef} className="md:hidden border-t border-gray-200 py-4">
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