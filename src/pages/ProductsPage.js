import React from "react";
import { useParams, useNavigate, Link } from 'react-router-dom';
import AnimatedSection from "../AnimatedSection";

const categories = [
  { key: 'all', label: 'All Products', icon: '🛒' },
  { key: 'fruits', label: 'Fruits', icon: '🥭' },
  { key: 'vegetables', label: 'Vegetables', icon: '🥬' },
  { key: 'juice-commodities', label: 'Juice Commodities', icon: '🥤' },
];

const products = {
  "fruits": [
    {
      name: "Alphanso Mango",
      description: "Deep golden color, rich creamy texture, and unparalleled sweetness. Perfect for beverages, desserts, ice creams, and jams.",
      image: "/images/products/AS1-Alphanso Mango.jpg"
    },
    {
      name: "Totapuri Mango",
      description: "Vibrant yellow color with distinct tangy taste, perfect for juices and smoothies.",
      image: "/images/products/AS2-Totapuri Mango.jpg"
    },
    {
      name: "Kesar Mango",
      description: "Saffron-like color with fragrant aroma and sweet flavor.",
      image: "/images/products/AS3-Kesar Mango.jpg"
    },
    {
      name: "Pink/White Guava",
      description: "Delicate, mildly sweet flavor packed with nutrients. Available in both pink and white varieties.",
      image: "/images/products/AS4-White Guava.jpg"
    },
    {
      name: "Pineapple",
      description: "Tangy and sweet flavor with refreshing aroma. Perfect for juices and desserts.",
      image: "/images/products/AS6-Pineapple.jpg"
    },
    {
      name: "Sapota(Chikku)",
      description: "Rich, malty flavor and soft, grainy texture. Naturally sweet and packed with nutrients.",
      image: "/images/products/AS7-Sapota(Chikku).jpg"
    },
    {
      name: "Jackfruit",
      description: "Tropical sweet taste and fibrous texture. Used in jams, smoothies, and traditional desserts.",
      image: "/images/products/AS8-Jackfruit.jpg"
    }
  ],
  "vegetables": [
    {
      name: "Gherkins",
      description: "Small cucumbers with tangy flavor, perfect for pickling.",
      image: "/images/products/AS15-Gharkins.jpg"
    },
    {
      name: "Baby Corn",
      description: "Sweet and tender corn harvested early. Popular in stir-fries, salads, and soups.",
      image: "/images/products/AS16-Baby Corn.jpg"
    },
    {
      name: "Tomato Paste",
      description: "Concentrated tomato product for culinary applications. Perfect for sauces and soups.",
      image: "/images/products/AS9-Tomato.jpg"
    },
    {
      name: "Tamarind Paste",
      description: "Tangy and flavorful paste used in a variety of dishes.",
      image: "/images/products/AS12-Tamarind.jpg"
    },
    {
      name: "Ginger Paste",
      description: "Aromatic and spicy paste used for flavoring dishes.",
      image: "/images/products/AS13-Ginger.jpg"
    },
    {
      name: "Garlic Paste",
      description: "Pungent and flavorful paste used in many cuisines.",
      image: "/images/products/AS14-Garlic.jpg"
    },
    {
      name: "Green Chilly Paste",
      description: "Spicy paste made from green chillies, adds heat to dishes.",
      image: "/images/products/AS10-Green Chilli.jpg"
    },
    {
      name: "Red Chilly Paste",
      description: "Hot and vibrant paste made from red chillies.",
      image: "/images/products/AS11-Red Chilli.jpg"
    }
  ],
  "juice-commodities": [
    {
      name: "Mango Juice",
      description: "Refreshing juice made from ripe mangoes.",
      image: "/images/products/SJ1-Mango Juice.jpg"
    },
    {
      name: "Guava Juice",
      description: "Delicious juice made from fresh guavas.",
      image: "/images/products/SJ2-Guava Juice.jpg"
    },
    {
      name: "Lemon Juice",
      description: "Tangy and zesty juice made from lemons.",
      image: "/images/products/SJ3-Lemon Juice.jpg"
    },
    {
      name: "Pineapple Juice",
      description: "Sweet and tangy juice made from pineapples.",
      image: "/images/products/SJ4-Pineapple Juice.jpg"
    },
    {
      name: "Lychee Juice",
      description: "Exotic and sweet juice made from lychees.",
      image: "/images/products/SJ5-Lychee Juice.jpg"
    }
  ]
};

// SVG icons for packaging options
const DrumIcon = () => (
  <svg width="48" height="48" fill="none" viewBox="0 0 48 48"><rect x="10" y="8" width="28" height="32" rx="6" stroke="#4CAF50" strokeWidth="3" fill="#E0F7FA"/><rect x="16" y="16" width="16" height="16" rx="3" stroke="#4CAF50" strokeWidth="2" fill="#fff"/></svg>
);
const CanIcon = () => (
  <svg width="48" height="48" fill="none" viewBox="0 0 48 48"><rect x="12" y="10" width="24" height="28" rx="5" stroke="#FFC107" strokeWidth="3" fill="#FFF8E1"/><rect x="18" y="18" width="12" height="12" rx="2" stroke="#FFC107" strokeWidth="2" fill="#fff"/></svg>
);
const FrozenIcon = () => (
  <svg width="48" height="48" fill="none" viewBox="0 0 48 48"><rect x="10" y="14" width="28" height="20" rx="5" stroke="#2196F3" strokeWidth="3" fill="#E3F2FD"/><path d="M24 14v20" stroke="#2196F3" strokeWidth="2"/><path d="M16 24h16" stroke="#2196F3" strokeWidth="2"/></svg>
);

export default function ProductsPage() {
  const params = useParams();
  const navigate = useNavigate();
  const categoryParam = params.category;
  const currentCategory = categoryParam || 'all';

  // Always show tabs, and show products for the current category
  let currentProducts;
  if (currentCategory === 'all') {
    currentProducts = Object.values(products).flat();
  } else {
    currentProducts = products[currentCategory] || [];
  }
  const selectedCategory = categories.find(c => c.key === currentCategory);

  return (
    <div>
      {/* Gradient Banner/Header */}
      <div className="w-full py-12 md:py-20 text-center" style={{
        backgroundImage: "url('/product-banner.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <AnimatedSection>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Our Premium Products</h1>
          <p className="text-lg md:text-xl text-white mb-6">Quality & Flavor in Every Bite - Sourced from the finest farms in India</p>
        </AnimatedSection>
        <div className="flex justify-center">
          <span className="inline-block bg-white bg-opacity-30 text-white font-bold text-lg md:text-xl rounded-full px-8 py-2 mb-2 shadow-lg">
            {selectedCategory?.label}
          </span>
        </div>
      </div>

      {/* Category Tabs with Icons, always visible */}
      <div className="flex flex-wrap justify-center gap-2 mt-[-1.5rem] mb-8 relative z-10">
        {categories.map(cat => {
          const to = cat.key === 'all' ? '/products' : `/products/${cat.key}`;
          const isActive = currentCategory === cat.key;
          return (
            <Link
              key={cat.key}
              to={to}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-base shadow transition-all focus:outline-none ${
                isActive
                  ? 'bg-green-500 text-white scale-105 shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-green-100'
              }`}
            >
              <span className="text-xl">{cat.icon}</span>
              {cat.label}
            </Link>
          );
        })}
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {currentProducts.map((product, idx) => {
            let detailLink = null;
            // Fruits
            if (currentCategory === 'fruits' || (currentCategory === 'all' && products['fruits'].some(f => f.name === product.name))) {
              switch (product.name) {
                case 'Alphanso Mango':
                  detailLink = '/products/fruit-detail/alphonso-mango';
                  break;
                case 'Totapuri Mango':
                  detailLink = '/products/fruit-detail/totapuri-mango';
                  break;
                case 'Kesar Mango':
                  detailLink = '/products/fruit-detail/kesar-mango';
                  break;
                case 'Pink/White Guava':
                  detailLink = '/products/fruit-detail/guava';
                  break;
                case 'Sapota(Chikku)':
                  detailLink = '/products/fruit-detail/sapota';
                  break;
                case 'Jackfruit':
                  detailLink = '/products/fruit-detail/jackfruit';
                  break;
                case 'Pineapple':
                  detailLink = '/products/fruit-detail/pineapple';
                  break;
                default:
                  detailLink = null;
              }
            }
            // Vegetables
            else if (currentCategory === 'vegetables' || (currentCategory === 'all' && products['vegetables'].some(f => f.name === product.name))) {
              switch (product.name) {
                case 'Gherkins':
                  detailLink = '/products/vegetables/gherkins';
                  break;
                case 'Baby Corn':
                  detailLink = '/products/vegetables/baby-corn';
                  break;
                case 'Tomato Paste':
                  detailLink = '/products/vegetables/tomato-paste';
                  break;
                case 'Tamarind Paste':
                  detailLink = '/products/vegetables/tamarind-paste';
                  break;
                case 'Ginger Paste':
                  detailLink = '/products/vegetables/ginger-paste';
                  break;
                case 'Garlic Paste':
                  detailLink = '/products/vegetables/garlic-paste';
                  break;
                case 'Green Chilly Paste':
                  detailLink = '/products/vegetables/green-chilly-paste';
                  break;
                case 'Red Chilly Paste':
                  detailLink = '/products/vegetables/red-chilly-paste';
                  break;
                default:
                  detailLink = null;
              }
            }
            // Juice Commodities
            else if (currentCategory === 'juice-commodities' || (currentCategory === 'all' && products['juice-commodities'].some(f => f.name === product.name))) {
              switch (product.name) {
                case 'Mango Juice':
                  detailLink = '/products/juice-commodities/mango-juice';
                  break;
                case 'Guava Juice':
                  detailLink = '/products/juice-commodities/guava-juice';
                  break;
                case 'Lemon Juice':
                  detailLink = '/products/juice-commodities/lemon-juice';
                  break;
                case 'Pineapple Juice':
                  detailLink = '/products/juice-commodities/pineapple-juice';
                  break;
                case 'Lychee Juice':
                  detailLink = '/products/juice-commodities/lychee-juice';
                  break;
                default:
                  detailLink = null;
              }
            }
            return (
            <div
              key={idx}
              className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
                {detailLink ? (
                  <Link to={detailLink}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-contain bg-white cursor-pointer"
                    />
                  </Link>
                ) : (
              <img
                src={product.image}
                alt={product.name}
                    className="w-full h-48 object-contain bg-white"
              />
                )}
              <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">
                    {detailLink ? (
                      <Link to={detailLink} className="hover:underline text-black">
                        {product.name}
                      </Link>
                    ) : (
                      product.name
                    )}
                  </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                  {detailLink ? (
                    <Link
                      to={detailLink}
                      className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition inline-block"
                    >
                      View Details
                    </Link>
                  ) : (
                <button
                  className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition"
                  onClick={() => navigate('/contact')}
                >
                  Get Quote
                </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* --- Long Scrollable Sections Below --- */}
      <div className="bg-amber-50">
      {/* Packaging Options Section */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Packaging Options</h2>
          <p className="text-lg text-gray-600 mb-10 text-center max-w-2xl mx-auto">We offer a variety of packaging solutions to suit your needs, ensuring product freshness and safety from our facility to your destination.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
              <DrumIcon />
              <h3 className="text-xl font-semibold mb-2">Aseptic Drums</h3>
              <p className="text-gray-600 text-center mb-2">220/215 kg, 100% sterile, ideal for export and long shelf life.</p>
              <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Most Popular</span>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
              <CanIcon />
              <h3 className="text-xl font-semibold mb-2">OTS Cans</h3>
              <p className="text-gray-600 text-center mb-2">Available in 3.1kg, 850g, 450g. Perfect for retail and food service.</p>
              <span className="inline-block bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">Retail & Food Service</span>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
              <FrozenIcon />
              <h3 className="text-xl font-semibold mb-2">Frozen Packaging</h3>
              <p className="text-gray-600 text-center mb-2">IQF, blocks, and custom frozen packs for maximum freshness.</p>
              <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Frozen Solutions</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Highlights Section */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Why Choose LUQI HARVEST?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
              <span className="text-4xl mb-4">🥭</span>
              <h3 className="text-xl font-semibold mb-2">Premium Fruit Selection</h3>
              <p className="text-gray-600 text-center">Handpicked, fully ripened fruits for the best taste and nutrition.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
              <span className="text-4xl mb-4">🌱</span>
              <h3 className="text-xl font-semibold mb-2">Sustainable Practices</h3>
              <p className="text-gray-600 text-center">Supporting local farmers and eco-friendly processing methods.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
              <span className="text-4xl mb-4">🌏</span>
              <h3 className="text-xl font-semibold mb-2">Global Export</h3>
              <p className="text-gray-600 text-center">Supplying to USA, Europe, Middle East, and more international markets.</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      {/* End of long scrollable sections */}
    </div>
  );
} 