import React from "react";
import { useNavigate } from "react-router-dom";

export default function LemonJuiceDetailPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="max-w-4xl mx-auto w-full pt-8">
        <button
          onClick={() => navigate('/products')}
          className="text-green-600 hover:underline font-semibold mb-6 inline-block"
        >
          ← Back to Products
        </button>
      </div>
      <div className="max-w-4xl mx-auto my-12 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
        <div className="w-full flex justify-center items-start bg-gray-50">
          <img
            src="/images/products/SJ3-Lemon Juice.jpg"
            alt="Lemon Juice"
            className="object-contain w-full max-w-xs md:max-w-sm h-96 bg-white"
          />
        </div>
        <div className="w-full p-8 flex flex-col justify-center items-start">
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
    </>
  );
} 