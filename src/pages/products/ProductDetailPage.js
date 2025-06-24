import React from "react";
import { useParams, Link } from "react-router-dom";
import ProductDetailLayout from "./ProductDetailLayout";

// Copy the products object from ProductsPage.js
const products = {
  "fruit-pulp": [
    { name: "Alphonso Mango Pulp & Puree", description: "The King of Mangoes with rich creamy texture and unparalleled sweetness. The smooth, aromatic pulp makes it a perfect ingredient for beverages, desserts, ice creams, and jams.", image: "/images/products/AS1-Alphanso Mango.jpg", benefits: ["Rich in Vitamins A, C, and E", "High in Antioxidants", "Dietary Fiber", "Low in Fat"], uses: ["Beverages", "Desserts", "Bakery", "Sauces & Jams", "Frozen Treats"], nutritional: "Boosts immunity, promotes skin health, supports collagen formation, fights free radicals, aids digestion, contains potassium and magnesium", rating: 5, featured: true },
    { name: "Totapuri Mango Pulp & Puree", description: "Vibrant yellow color with distinct tangy taste, perfect for juices, nectars, smoothies, and sauces. Their balanced sweet and sour flavor makes them ideal for various applications.", image: "/images/products/AS2-Totapuri Mango.jpg", benefits: ["Vitamins A & C", "Natural Energy Booster", "High Water Content", "Antioxidants"], uses: ["Beverages", "Ice Creams & Desserts", "Bakery Products", "Dairy Products", "Sauces & Chutneys"], nutritional: "Supports immunity, skin, and vision health, reduces oxidative stress, promotes digestive health, provides quick energy", rating: 5, featured: true },
    { name: "Kesar Mango Pulp & Puree", description: "Saffron-like color with fragrant aroma and sweet flavor. Celebrated for their sweet flavor and pulpy texture, making them ideal for desserts, juices, and ice creams.", image: "/images/products/AS3-Kesar Mango.jpg", benefits: ["Vitamin C", "Heart-Healthy Potassium", "Natural Energy", "Low Fat"], uses: ["Beverages", "Desserts", "Bakery Products", "Dairy Industry", "Confectionery"], nutritional: "Boosts immunity, promotes healthy skin, supports eye health, regulates blood pressure, supports heart health", rating: 5 },
    { name: "White Guava Pulp & Puree", description: "Delicate, mildly sweet flavor packed with nutrients. Perfect for juices, smoothies, jams, and desserts with excellent nutritional profile.", image: "/images/products/AS4-White Guava.jpg", benefits: ["Rich in Vitamin C", "High Fiber", "Blood Sugar Control", "Potassium"], uses: ["Beverages", "Desserts", "Bakery Products", "Dairy Industry", "Confectionery"], nutritional: "Promotes healthy vision, skin, and boosts immunity, supports digestion and gut health, helps regulate blood pressure", rating: 5 },
    { name: "Pink Guava Pulp & Puree", description: "Fruitier, tropical taste with excellent nutritional profile. Perfect for juices, smoothies, jams, and desserts with vibrant color and rich flavor.", image: "/images/products/AS5-Pink Guava.jpg", benefits: ["Vitamin A & C", "Antioxidants", "Fiber Rich", "Diabetic-Friendly"], uses: ["Beverages", "Desserts", "Bakery Products", "Dairy Industry", "Confectionery"], nutritional: "Promotes healthy vision, skin, and boosts immunity, fights oxidative stress, supports digestion, low glycemic index", rating: 5 },
    { name: "Pineapple Pulp & Puree", description: "Tangy and sweet flavor with refreshing aroma. Extracted from ripe pineapples, perfect for juices, sauces, ice creams, and bakery products.", image: "/images/products/AS6-Pineapple.jpg", benefits: ["Vitamins A & C", "Antioxidants", "Digestive Health", "Bromelain Enzyme"], uses: ["Beverages", "Desserts", "Bakery Products", "Sauces", "Frozen Treats"], nutritional: "Supports immunity and skin health, fights free radicals, aids digestion, contains bromelain enzyme for protein digestion", rating: 5 },
    { name: "Sapota(Chikku) Pulp & Puree", description: "Rich, malty flavor and soft, grainy texture. Naturally sweet and packed with nutrients, perfect for milkshakes, smoothies, and desserts.", image: "/images/products/AS7-Sapota(Chikku).jpg", benefits: ["Natural Sugars", "High in Fiber", "Vitamins A & C", "Rich in Minerals"], uses: ["Beverages", "Desserts", "Bakery Products", "Dairy Industry", "Confectionery"], nutritional: "Provides instant energy, promotes digestion, boosts immunity, improves skin health, supports blood circulation", rating: 5 },
    { name: "Jackfruit Pulp & Puree", description: "Tropical sweet taste and fibrous texture. Used in jams, smoothies, candies, and traditional desserts with rich flavor and nutritional benefits.", image: "/images/products/AS8-Jackfruit.jpg", benefits: ["Rich in Vitamins & Minerals", "High in Fiber", "Antioxidants", "Low in Fat"], uses: ["Beverages", "Desserts", "Bakery Products", "Dairy Industry", "Confectionery"], nutritional: "Great source of vitamin C, A, potassium, magnesium, and calcium, supports digestion, promotes satiety, regulates blood sugar", rating: 5 }
  ],
  // ... (copy the rest of the products object from ProductsPage.js)
};

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export default function ProductDetailPage() {
  const { category, slug } = useParams();
  const productList = products[category] || [];
  const product = productList.find(p => slugify(p.name) === slug);

  if (!product) {
    return (
      <div className="max-w-2xl mx-auto my-20 p-8 bg-white rounded-xl shadow text-center">
        <h2 className="text-2xl font-bold mb-4 text-red-600">Product not found</h2>
        <p className="mb-6">Sorry, we couldn't find the product you're looking for.</p>
        <Link to="/products" className="text-green-600 font-semibold hover:underline">Back to Products</Link>
      </div>
    );
  }

  return (
    <ProductDetailLayout
      image={product.image}
      name={product.name}
      description={product.description}
    >
      {/* Optionally render benefits, uses, nutritional info, etc. */}
      {product.benefits && (
        <div className="mb-4">
          <h3 className="font-semibold text-lg mb-1">Key Benefits:</h3>
          <ul className="list-disc ml-6 text-gray-700">
            {product.benefits.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        </div>
      )}
      {product.uses && (
        <div className="mb-4">
          <h3 className="font-semibold text-lg mb-1">Uses:</h3>
          <ul className="list-disc ml-6 text-gray-700">
            {product.uses.map((u, i) => <li key={i}>{u}</li>)}
          </ul>
        </div>
      )}
      {product.nutritional && (
        <div className="mb-4">
          <h3 className="font-semibold text-lg mb-1">Nutritional Info:</h3>
          <p className="text-gray-700">{product.nutritional}</p>
        </div>
      )}
    </ProductDetailLayout>
  );
} 