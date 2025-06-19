import React from "react";
import { useParams, useNavigate, Link } from 'react-router-dom';

const categories = [
  { key: 'all', label: 'All Products', icon: '🛒' },
  { key: 'fruit-pulp', label: 'Fruit Pulp & Puree', icon: '🥭' },
  { key: 'vegetables', label: 'Premium Vegetables', icon: '🥬' },
  { key: 'fruit-concentrate', label: 'Fruit Concentrates', icon: '🧃' },
  { key: 'frozen-fruits', label: 'Frozen Fruits', icon: '❄️' },
  { key: 'fruit-slices', label: 'Fruit Slices', icon: '🍎' },
  { key: 'juice-commodities', label: 'Juice Commodities', icon: '🥤' },
];

const products = {
  "fruit-pulp": [
    {
      name: "Alphonso Mango Pulp & Puree",
      description: "The King of Mangoes with rich creamy texture and unparalleled sweetness. The smooth, aromatic pulp makes it a perfect ingredient for beverages, desserts, ice creams, and jams.",
      image: "/images/products/AS1-Alphanso Mango.jpg",
      benefits: ["Rich in Vitamins A, C, and E", "High in Antioxidants", "Dietary Fiber", "Low in Fat"],
      uses: ["Beverages", "Desserts", "Bakery", "Sauces & Jams", "Frozen Treats"],
      nutritional: "Boosts immunity, promotes skin health, supports collagen formation, fights free radicals, aids digestion, contains potassium and magnesium",
      rating: 5,
      featured: true
    },
    {
      name: "Totapuri Mango Pulp & Puree",
      description: "Vibrant yellow color with distinct tangy taste, perfect for juices, nectars, smoothies, and sauces. Their balanced sweet and sour flavor makes them ideal for various applications.",
      image: "/images/products/AS2-Totapuri Mango.jpg",
      benefits: ["Vitamins A & C", "Natural Energy Booster", "High Water Content", "Antioxidants"],
      uses: ["Beverages", "Ice Creams & Desserts", "Bakery Products", "Dairy Products", "Sauces & Chutneys"],
      nutritional: "Supports immunity, skin, and vision health, reduces oxidative stress, promotes digestive health, provides quick energy",
      rating: 5,
      featured: true
    },
    {
      name: "Kesar Mango Pulp & Puree",
      description: "Saffron-like color with fragrant aroma and sweet flavor. Celebrated for their sweet flavor and pulpy texture, making them ideal for desserts, juices, and ice creams.",
      image: "/images/products/AS3-Kesar Mango.jpg",
      benefits: ["Vitamin C", "Heart-Healthy Potassium", "Natural Energy", "Low Fat"],
      uses: ["Beverages", "Desserts", "Bakery Products", "Dairy Industry", "Confectionery"],
      nutritional: "Boosts immunity, promotes healthy skin, supports eye health, regulates blood pressure, supports heart health",
      rating: 5
    },
    {
      name: "White Guava Pulp & Puree",
      description: "Delicate, mildly sweet flavor packed with nutrients. Perfect for juices, smoothies, jams, and desserts with excellent nutritional profile.",
      image: "/images/products/AS4-White Guava.jpg",
      benefits: ["Rich in Vitamin C", "High Fiber", "Blood Sugar Control", "Potassium"],
      uses: ["Beverages", "Desserts", "Bakery Products", "Dairy Industry", "Confectionery"],
      nutritional: "Promotes healthy vision, skin, and boosts immunity, supports digestion and gut health, helps regulate blood pressure",
      rating: 5
    },
    {
      name: "Pink Guava Pulp & Puree",
      description: "Fruitier, tropical taste with excellent nutritional profile. Perfect for juices, smoothies, jams, and desserts with vibrant color and rich flavor.",
      image: "/images/products/AS5-Pink Guava.jpg",
      benefits: ["Vitamin A & C", "Antioxidants", "Fiber Rich", "Diabetic-Friendly"],
      uses: ["Beverages", "Desserts", "Bakery Products", "Dairy Industry", "Confectionery"],
      nutritional: "Promotes healthy vision, skin, and boosts immunity, fights oxidative stress, supports digestion, low glycemic index",
      rating: 5
    },
    {
      name: "Pineapple Pulp & Puree",
      description: "Tangy and sweet flavor with refreshing aroma. Extracted from ripe pineapples, perfect for juices, sauces, ice creams, and bakery products.",
      image: "/images/products/AS6-Pineapple.jpg",
      benefits: ["Vitamins A & C", "Antioxidants", "Digestive Health", "Bromelain Enzyme"],
      uses: ["Beverages", "Desserts", "Bakery Products", "Sauces", "Frozen Treats"],
      nutritional: "Supports immunity and skin health, fights free radicals, aids digestion, contains bromelain enzyme for protein digestion",
      rating: 5
    },
    {
      name: "Sapota(Chikku) Pulp & Puree",
      description: "Rich, malty flavor and soft, grainy texture. Naturally sweet and packed with nutrients, perfect for milkshakes, smoothies, and desserts.",
      image: "/images/products/AS7-Sapota(Chikku).jpg",
      benefits: ["Natural Sugars", "High in Fiber", "Vitamins A & C", "Rich in Minerals"],
      uses: ["Beverages", "Desserts", "Bakery Products", "Dairy Industry", "Confectionery"],
      nutritional: "Provides instant energy, promotes digestion, boosts immunity, improves skin health, supports blood circulation",
      rating: 5
    },
    {
      name: "Jackfruit Pulp & Puree",
      description: "Tropical sweet taste and fibrous texture. Used in jams, smoothies, candies, and traditional desserts with rich flavor and nutritional benefits.",
      image: "/images/products/AS8-Jackfruit.jpg",
      benefits: ["Rich in Vitamins & Minerals", "High in Fiber", "Antioxidants", "Low in Fat"],
      uses: ["Beverages", "Desserts", "Bakery Products", "Dairy Industry", "Confectionery"],
      nutritional: "Great source of vitamin C, A, potassium, magnesium, and calcium, supports digestion, promotes satiety, regulates blood sugar",
      rating: 5
    }
  ],
  "vegetables": [
    {
      name: "Gherkins",
      description: "Small cucumbers with tangy flavor, perfect for pickling. Known for their tangy flavor and crisp texture, ideal for salads, sandwiches, and snacks.",
      image: "/images/products/AS15-Gharkins.jpg",
      benefits: ["Rich in Vitamin K", "Low Calories", "High Water Content", "Antioxidants"],
      uses: ["Pickles", "Salads", "Snacks", "Sandwiches & Burgers"],
      nutritional: "Essential for bone health and blood clotting, great for weight-conscious individuals, helps in hydration, supports skin health",
      rating: 5
    },
    {
      name: "Baby Corn",
      description: "Sweet and tender corn harvested early. Offers a mild, sweet flavor and tender texture, popular in stir-fries, salads, and soups.",
      image: "/images/products/AS16-Baby Corn.jpg",
      benefits: ["High Fiber", "Vitamins A & C", "Low Calories", "Natural Energy"],
      uses: ["Stir-Fries & Soups", "Salads", "Side Dishes"],
      nutritional: "Supports digestion and promotes gut health, helps boost immunity, maintains healthy skin and vision, ideal for weight management",
      rating: 5
    },
    {
      name: "Sweet Corn",
      description: "Natural sweetness with satisfying crunch. Whether boiled, grilled, or used in salads, this vegetable brings joy to any dish.",
      image: "/images/products/AS16-Baby Corn.jpg",
      benefits: ["High Fiber", "Antioxidants", "Low Fat", "Vitamin A & C"],
      uses: ["Grilled & Boiled", "Salads & Soups", "Snacks"],
      nutritional: "Aids in digestion and promotes healthy bowel movements, packed with antioxidants to reduce oxidative stress, supports immune health",
      rating: 5
    },
    {
      name: "Jalapenos",
      description: "Medium-sized chili peppers with moderate heat. Add a spicy kick to a variety of dishes, including salsas, sauces, and tacos.",
      image: "/images/products/AS10-Green Chilli.jpg",
      benefits: ["Vitamin C Rich", "Capsaicin", "Antioxidants", "Digestive Health"],
      uses: ["Salsas & Sauces", "Toppings", "Pickled"],
      nutritional: "Helps enhance immunity and promote healthy skin, can boost metabolism and help with weight loss, protects cells from damage"
    },
    {
      name: "Chili Peppers",
      description: "Various sizes, shapes, and heat levels, adding bold flavors and heat to your favorite dishes. From mild to fiery hot, chili peppers bring warmth to any recipe.",
      image: "/images/products/AS11-Red Chilli.jpg",
      benefits: ["Rich in Vitamin C", "Capsaicin", "Anti-Inflammatory", "Supports Digestion"],
      uses: ["Spicy Sauces & Dips", "Curry & Stews", "Pickled"],
      nutritional: "Boosts immunity and enhances skin health, stimulates metabolism and can help burn fat, reduces inflammation in the body"
    },
    {
      name: "Green Beans",
      description: "Healthy, versatile vegetable with a mild flavor and crunchy texture. Perfect for steaming, sautéing, or adding to soups.",
      image: "/images/products/AS14-Garlic.jpg",
      benefits: ["High Fiber", "Vitamins A & C", "Low Calories", "Minerals"],
      uses: ["Side Dishes", "Soups & Casseroles", "Salads"],
      nutritional: "Helps regulate digestion and maintain a healthy gut, supports eye health and boosts immunity, good source of folate and iron"
    },
    {
      name: "French Beans",
      description: "Thinner and more tender than regular green beans. Known for their delicate texture and fine flavor, popular in gourmet cooking.",
      image: "/images/products/AS14-Garlic.jpg",
      benefits: ["Rich in Fiber", "Vitamins A & C", "Low in Calories", "Rich in Folate"],
      uses: ["Gourmet Side Dishes", "Salads & Soups", "Stir-Fries"],
      nutritional: "Promotes healthy digestion and prevents constipation, boosts immunity and maintains healthy skin, essential for cell growth"
    }
  ],
  "fruit-concentrate": [
    {
      name: "Totapuri Mango Concentrate",
      description: "Concentrated mango flavor for industrial use. Perfect for beverages, sauces, and food processing applications.",
      image: "/images/products/AS2-Totapuri Mango.jpg",
      benefits: ["Concentrated Flavor", "Long Shelf Life", "Versatile Use", "Cost Effective"],
      uses: ["Beverages", "Food Processing", "Sauces", "Industrial Applications"],
      rating: 5
    },
    {
      name: "Totapuri Mango Sulphate",
      description: "Preserved mango concentrate with extended shelf life. Ideal for long-term storage and industrial applications.",
      image: "/images/products/AS2-Totapuri Mango.jpg",
      benefits: ["Extended Shelf Life", "Preserved Quality", "Industrial Grade", "Cost Effective"],
      uses: ["Industrial Processing", "Long-term Storage", "Export Markets"]
    },
    {
      name: "White Guava Concentrate",
      description: "Pure guava concentrate with authentic taste. Perfect for beverages, desserts, and food processing applications.",
      image: "/images/products/AS4-White Guava.jpg",
      benefits: ["Rich Flavor", "High Vitamin C", "Natural", "Premium Quality"],
      uses: ["Beverages", "Desserts", "Food Processing", "Export Markets"],
      rating: 5
    },
    {
      name: "Pink Guava Concentrate",
      description: "Vibrant pink guava concentrate with rich flavor. Ideal for colorful beverages and premium food applications.",
      image: "/images/products/AS5-Pink Guava.jpg",
      benefits: ["Vibrant Color", "Rich Flavor", "High Nutrients", "Premium Quality"],
      uses: ["Beverages", "Desserts", "Food Processing", "Premium Applications"]
    },
    {
      name: "Tomato Paste and Puree",
      description: "Concentrated tomato products for culinary applications. Perfect for sauces, soups, and food processing.",
      image: "/images/products/AS9-Tomato.jpg",
      benefits: ["Rich Flavor", "High Lycopene", "Versatile", "Long Shelf Life"],
      uses: ["Sauces", "Soups", "Food Processing", "Culinary Applications"]
    }
  ],
  "frozen-fruits": [
    {
      name: "Frozen Alphonso Mango",
      description: "Premium mango pieces preserved at peak freshness. Retains all nutritional value and flavor for year-round availability.",
      image: "/images/products/FZ1-Alphanso Mango.jpg",
      benefits: ["Retains Nutrients", "Long Storage", "Convenient", "Premium Quality"],
      uses: ["Smoothies", "Desserts", "Beverages", "Direct Consumption"],
      rating: 5
    },
    {
      name: "Frozen Totapuri Mango",
      description: "Flash-frozen Totapuri mango maintaining nutritional value. Perfect for industrial and retail applications.",
      image: "/images/products/FZ2-Totapuri Mango.jpg",
      benefits: ["Extended Shelf Life", "Quality Preserved", "Convenient", "Industrial Grade"],
      uses: ["Food Processing", "Beverages", "Desserts", "Export Markets"]
    },
    {
      name: "Frozen Pineapple",
      description: "Sweet and tangy frozen pineapple pieces. Perfect for tropical beverages and desserts.",
      image: "/images/products/FZ6-Pineapple.jpg",
      benefits: ["Retains Flavor", "Long Storage", "Convenient", "Nutrient Rich"],
      uses: ["Beverages", "Desserts", "Smoothies", "Direct Consumption"],
      rating: 5
    },
    {
      name: "Frozen Pink Guava",
      description: "Vibrant pink guava pieces preserved at peak freshness. Ideal for colorful beverages and desserts.",
      image: "/images/products/FZ5-Pink Guava.jpg",
      benefits: ["Color Preserved", "Nutrient Rich", "Long Storage", "Premium Quality"],
      uses: ["Beverages", "Desserts", "Smoothies", "Premium Applications"]
    },
    {
      name: "Frozen White Guava",
      description: "Delicate white guava pieces with mild sweetness. Perfect for subtle flavored applications.",
      image: "/images/products/FZ4-White Guava.jpg",
      benefits: ["Mild Flavor", "Nutrient Rich", "Long Storage", "Versatile"],
      uses: ["Beverages", "Desserts", "Smoothies", "Food Processing"]
    },
    {
      name: "Frozen Sapota (Chikku)",
      description: "Rich and malty frozen sapota pieces. Perfect for traditional desserts and beverages.",
      image: "/images/products/FZ7-Sapota(Chikku).jpg",
      benefits: ["Rich Flavor", "Nutrient Dense", "Long Storage", "Traditional Use"],
      uses: ["Traditional Desserts", "Beverages", "Smoothies", "Cultural Applications"]
    },
    {
      name: "Frozen Jack Fruit",
      description: "Tropical sweet jackfruit pieces preserved at peak freshness. Ideal for exotic desserts and beverages.",
      image: "/images/products/FZ8-Jackfruit.jpg",
      benefits: ["Tropical Flavor", "Nutrient Rich", "Long Storage", "Exotic Appeal"],
      uses: ["Exotic Desserts", "Beverages", "Smoothies", "Premium Applications"]
    },
    {
      name: "Tender Coconut Preparations (Malai)",
      description: "Fresh tender coconut meat preserved for extended use. Perfect for traditional and modern applications.",
      image: "/images/products/FZ8-Jackfruit.jpg",
      benefits: ["Fresh Taste", "Nutrient Rich", "Traditional", "Versatile"],
      uses: ["Traditional Desserts", "Beverages", "Modern Cuisine", "Health Drinks"]
    }
  ],
  "fruit-slices": [
    {
      name: "Alphonso Mango Slices and Dice",
      description: "Premium Alphonso mango cut into perfect slices and dice. Ideal for garnishing, desserts, and premium applications.",
      image: "/images/products/AS1-Alphanso Mango.jpg",
      benefits: ["Premium Quality", "Perfect Cut", "Versatile", "Garnish Ready"],
      uses: ["Garnishing", "Desserts", "Premium Dishes", "Direct Consumption"],
      rating: 5
    },
    {
      name: "Totapuri Mango Dice and Chunks",
      description: "Tangy Totapuri mango cut into uniform dice and chunks. Perfect for beverages, desserts, and food processing.",
      image: "/images/products/AS2-Totapuri Mango.jpg",
      benefits: ["Uniform Cut", "Tangy Flavor", "Versatile", "Processing Ready"],
      uses: ["Beverages", "Desserts", "Food Processing", "Industrial Applications"]
    },
    {
      name: "Pineapple Slices and Tidbits",
      description: "Sweet and tangy pineapple cut into slices and tidbits. Perfect for garnishing and tropical applications.",
      image: "/images/products/AS6-Pineapple.jpg",
      benefits: ["Tropical Flavor", "Perfect Cut", "Versatile", "Garnish Ready"],
      uses: ["Garnishing", "Tropical Dishes", "Beverages", "Direct Consumption"]
    },
    {
      name: "Pink Guava Slices and Dice",
      description: "Vibrant pink guava cut into slices and dice. Ideal for colorful applications and premium dishes.",
      image: "/images/products/AS5-Pink Guava.jpg",
      benefits: ["Vibrant Color", "Perfect Cut", "Premium Quality", "Versatile"],
      uses: ["Premium Dishes", "Colorful Applications", "Garnishing", "Direct Consumption"]
    }
  ],
  "juice-commodities": [
    {
      name: "Mango Juice",
      description: "Pure and natural mango juice extracted from premium mango varieties. Perfect for direct consumption and beverage applications.",
      image: "/images/products/SJ1-Mango Juice.jpg",
      benefits: ["Pure Natural", "Rich Flavor", "Nutrient Dense", "Versatile"],
      uses: ["Direct Consumption", "Beverages", "Smoothies", "Cocktails"],
      rating: 5
    },
    {
      name: "Guava Juice",
      description: "Fresh guava juice with authentic taste and rich nutrients. Perfect for health drinks and tropical beverages.",
      image: "/images/products/SJ2-Guava Juice.jpg",
      benefits: ["Authentic Taste", "Rich Nutrients", "Health Benefits", "Tropical Flavor"],
      uses: ["Health Drinks", "Tropical Beverages", "Smoothies", "Direct Consumption"]
    },
    {
      name: "Lychee Juice",
      description: "Exotic lychee juice with unique floral taste. Perfect for premium beverages and exotic applications.",
      image: "/images/products/SJ5-Lychee Juice.jpg",
      benefits: ["Exotic Flavor", "Unique Taste", "Premium Quality", "Versatile"],
      uses: ["Premium Beverages", "Exotic Applications", "Cocktails", "Direct Consumption"]
    }
  ]
};

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
      <div className="w-full py-12 md:py-20 bg-gradient-to-r from-green-400 to-yellow-400 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Our Premium Products</h1>
        <p className="text-lg md:text-xl text-white mb-6">Quality & Flavor in Every Bite - Sourced from the finest farms in India</p>
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
          {currentProducts.map((product, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <button
                  className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition"
                  onClick={() => navigate('/contact')}
                >
                  Get Quote
                </button>
              </div>
            </div>
          ))}
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
              <img src="/images/products/AS1-Alphanso Mango.jpg" alt="Aseptic Packaging" className="w-24 h-24 object-contain mb-4" />
              <h3 className="text-xl font-semibold mb-2">Aseptic Drums</h3>
              <p className="text-gray-600 text-center mb-2">220/215 kg, 100% sterile, ideal for export and long shelf life.</p>
              <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Most Popular</span>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
              <img src="/images/products/AS2-Totapuri Mango.jpg" alt="OTS Cans" className="w-24 h-24 object-contain mb-4" />
              <h3 className="text-xl font-semibold mb-2">OTS Cans</h3>
              <p className="text-gray-600 text-center mb-2">Available in 3.1kg, 850g, 450g, 215g. Perfect for retail and food service.</p>
              <span className="inline-block bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">Retail & Food Service</span>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
              <img src="/images/products/FZ1-Alphanso Mango.jpg" alt="Frozen Packaging" className="w-24 h-24 object-contain mb-4" />
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