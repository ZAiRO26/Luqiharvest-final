import React from "react";
import { useNavigate } from "react-router-dom";

export default function TotapuriMangoDetailPage() {
  const navigate = useNavigate();
  return (
    <div className="max-w-4xl mx-auto my-12 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
      <div className="w-full flex justify-center items-start bg-gray-50">
        <img
          src="/images/products/AS2-Totapuri Mango.jpg"
          alt="Totapuri Mango"
          className="object-contain w-full max-w-xs md:max-w-sm h-96 bg-white"
        />
      </div>
      <div className="w-full p-8 flex flex-col justify-center items-start">
        <h1 className="text-3xl font-bold mb-4 text-orange-700">Totapuri Mango - A Tangy Delight</h1>
        <div className="text-gray-700 mb-4 whitespace-pre-line text-lg space-y-4">
          <p>Totapuri Mangoes stand out for their vibrant yellow color and distinct tangy taste. Their balanced sweet and sour flavor makes them perfect for juices, nectars, smoothies, and sauces.</p>
          <p><span className="font-bold">Nutritional Benefits of Totapuri Mango:</span><br />
          • Vitamins A & C: Supports immunity, skin, and vision health.<br />
          • High in Antioxidants: Reduces oxidative stress and combats free radicals.<br />
          • Good Source of Fiber: Promotes digestive health.<br />
          • Natural Energy Booster: Provides quick energy from natural sugars.<br />
          • Low in Fat & Cholesterol-Free: Supports a healthy lifestyle.<br />
          • Hydrating & Refreshing: High water content for hydration.</p>
          <p><span className="font-bold">Totapuri Mango Uses:</span><br />
          • Beverages: Used in juices, smoothies, and health drinks.<br />
          • Ice Creams & Desserts: Adds a tangy flavor to frozen treats.<br />
          • Bakery Products: Ideal for cakes, pastries, and tropical fillings.<br />
          • Dairy Products: Perfect for lassis, yogurts, and flavored milk.<br />
          • Sauces & Chutneys: Used to create flavorful, tangy condiments.</p>
        </div>
        <button
          className="bg-orange-600 text-white px-6 py-3 rounded font-semibold mt-4 hover:bg-orange-700 transition"
          onClick={() => navigate('/contact')}
        >
          Get Quote
        </button>
      </div>
    </div>
  );
} 