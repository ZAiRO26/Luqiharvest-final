import React from "react";
import { useNavigate } from "react-router-dom";

export default function GuavaDetailPage() {
  const navigate = useNavigate();
  return (
    <div className="max-w-4xl mx-auto my-12 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
      <div className="w-full flex justify-center items-start bg-gray-50">
        <img
          src="/images/products/AS4-White Guava.jpg"
          alt="Guava"
          className="object-contain w-full max-w-xs md:max-w-sm h-96 bg-white"
        />
      </div>
      <div className="w-full p-8 flex flex-col justify-center items-start">
        <h1 className="text-3xl font-bold mb-4 text-orange-700">Guava (Pink & White) - A Nutrient Powerhouse</h1>
        <div className="text-gray-700 mb-4 whitespace-pre-line text-lg space-y-4">
          <p>Our guava pulp comes in two varieties: White Guava with its delicate, mildly sweet flavor and Pink Guava, which offers a fruitier, tropical taste. Both are perfect for juices, smoothies, jams, and desserts.</p>
          <p><span className="font-bold">Nutritional Benefits of Guava:</span><br />
          • Rich in Vitamin A & C: Promotes healthy vision, skin, and boosts immunity.<br />
          • High in Fiber: Supports digestion and gut health.<br />
          • Potassium: Helps regulate blood pressure.<br />
          • Supports Blood Sugar Control: Low Glycemic Index, making it diabetic-friendly.</p>
          <p><span className="font-bold">Guava Uses:</span><br />
          • Beverages: Juices, smoothies, and nectars.<br />
          • Desserts: Sorbets, ice creams, and puddings.<br />
          • Bakery Products: Cakes, pastries, muffins, and tropical tarts.<br />
          • Dairy Industry: Flavored milkshakes and yogurt-based products.<br />
          • Confectionery: Candies, fruit bars, jams, and jellies.</p>
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