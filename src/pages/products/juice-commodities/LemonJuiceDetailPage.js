import React from "react";
import { useNavigate } from "react-router-dom";

export default function LemonJuiceDetailPage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-row max-w-4xl mx-auto my-12 bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="md:w-1/2 w-full flex items-start justify-center bg-gray-50">
        <img
          src="/images/products/SJ3-Lemon Juice.jpg"
          alt="Lemon Juice"
          className="object-contain w-full h-96 md:h-full bg-white"
        />
      </div>
      <div className="md:w-1/2 w-full p-8 flex flex-col justify-center">
        <h1 className="text-3xl font-bold mb-4 text-orange-700">Lemon Juice</h1>
        <div className="text-gray-700 mb-4 whitespace-pre-line text-lg space-y-4">
          <p>Extracted from fresh lemons, lemon juice is rich in Vitamin C, antioxidants, and citric acid. It has a sharp, sour flavor that instantly refreshes and revitalizes. Lemon juice is commonly used in lemonades, detox drinks, marinades, and salad dressings. It aids digestion, boosts immunity, and acts as a natural cleanser. Whether enjoyed as a cool summer drink or used as a versatile kitchen ingredient, lemon juice is both flavorful and health-boosting.</p>
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