import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="/logo.png" alt="LUQI HARVEST" className="h-10 w-auto mb-4" />
            <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent mb-4">
              LUQI HARVEST
            </div>
            <p className="text-gray-300 mb-4">
              Premium fruit pulp exporter delivering nature's finest to global markets.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Facebook</a>
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Instagram</a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-orange-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-orange-400 transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-orange-400 transition-colors">Products</Link></li>
              <li><Link to="/quality" className="text-gray-300 hover:text-orange-400 transition-colors">Quality</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-orange-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Mango Pulp</span></li>
              <li><span className="text-gray-300">Guava Pulp</span></li>
              <li><span className="text-gray-300">Fruit Concentrates</span></li>
              <li><span className="text-gray-300">Frozen Fruits</span></li>
              <li><span className="text-gray-300">Vegetables</span></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-300">
              <p>+91-81224 29668</p>
              <p>contact@mangoozz.com</p>
              <p>Bengaluru, Karnataka, India</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 LUQI HARVEST INTERNATIONAL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 