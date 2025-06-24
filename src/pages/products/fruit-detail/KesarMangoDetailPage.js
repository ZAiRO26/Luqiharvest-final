import React from "react";
import { useNavigate } from "react-router-dom";

export default function KesarMangoDetailPage() {
  const navigate = useNavigate();
  return (
    <div className="max-w-4xl mx-auto my-12 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
      <div className="w-full flex justify-center items-start bg-gray-50">
        <img
          src="/images/products/AS3-Kesar Mango.jpg"
          alt="Kesar Mango"
          className="object-contain w-full max-w-xs md:max-w-sm h-96 bg-white"
        />
      </div>
      <div className="w-full p-8 flex flex-col justify-center items-start">
        <h1 className="text-3xl font-bold mb-4 text-orange-700">Kesar Mango - Sweet, Fragrant, and Nutritious</h1>
        <div className="text-gray-700 mb-4 whitespace-pre-line text-lg space-y-4">
          <p>Known for its saffron-like color and fragrant aroma, Kesar Mangoes are celebrated for their sweet flavor and pulpy texture, making them ideal for desserts, juices, and ice creams.</p>
          <p><span className="font-bold">Nutritional Benefits of Kesar Mango:</span><br />
          • Vitamin C: Boosts immunity and promotes healthy skin.<br />
          • Vitamin A: Supports eye health and improves skin quality.<br />
          • Good Source of Fiber: Aids digestion and supports gut health.<br />
          • Natural Energy Booster: Quick energy from natural sugars.<br />
          • Heart-Healthy Potassium: Regulates blood pressure and supports heart health.<br />
          • Low in Fat & Cholesterol-Free: Ideal for weight management.</p>
          <p><span className="font-bold">Kesar Mango Uses:</span><br />
          • Beverages: Mango shakes, smoothies, and cocktails.<br />
          • Desserts: Ideal for ice creams, puddings, and sorbets.<br />
          • Bakery Products: Adds mango flavor to cakes, muffins, and tarts.<br />
          • Dairy Industry: Used in flavored milk and yogurt products.<br />
          • Confectionery: Perfect for candies, jams, and jellies.</p>
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