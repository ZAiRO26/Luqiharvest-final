import React from "react";
import { useNavigate } from "react-router-dom";

export default function MangoJuiceDetailPage() {
  const navigate = useNavigate();
  return (
    <div className="max-w-4xl mx-auto my-12 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
      <div className="w-full flex justify-center items-start bg-gray-50">
        <img
          src="/images/products/SJ1-Mango Juice.jpg"
          alt="Mango Juice"
          className="object-contain w-full max-w-xs md:max-w-sm h-96 bg-white"
        />
      </div>
      <div className="w-full p-8 flex flex-col justify-center items-start">
        <h1 className="text-3xl font-bold mb-4 text-orange-700">Mango Juice</h1>
        <div className="text-gray-700 mb-4 whitespace-pre-line text-lg space-y-4">
          <p>Mango juice is extracted from pulped mango fruit, typically from varieties like Alphonso, Totapuri, or Kesar. It has a thick consistency, bright golden-orange color, and a naturally sweet and slightly tangy flavor. Rich in Vitamin A, C, and antioxidants, it provides a healthy dose of nutrients along with delicious taste. Mango juice is widely used in beverages, mocktails, smoothies, desserts, and culinary recipes. It is often preserved with minimal additives and sometimes blended with other fruit juices to enhance flavor.</p>
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