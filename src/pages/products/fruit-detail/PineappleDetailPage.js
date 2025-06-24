import React from "react";
import { useNavigate } from "react-router-dom";

export default function PineappleDetailPage() {
  const navigate = useNavigate();
  return (
    <div className="max-w-4xl mx-auto my-12 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
      <div className="w-full flex justify-center items-start bg-gray-50">
        <img
          src="/images/products/AS6-Pineapple.jpg"
          alt="Pineapple"
          className="object-contain w-full max-w-xs md:max-w-sm h-96 bg-white"
        />
      </div>
      <div className="w-full p-8 flex flex-col justify-center items-start">
        <h1 className="text-3xl font-bold mb-4 text-orange-700">Pineapple - Sweet, Tangy, and Refreshing</h1>
        <div className="text-gray-700 mb-4 whitespace-pre-line text-lg space-y-4">
          <p>Extracted from ripe pineapples, our pineapple pulp offers a tangy and sweet flavor with a refreshing aroma, perfect for juices, sauces, ice creams, and bakery products.</p>
          <p><span className="font-bold">Nutritional Benefits of Pineapple:</span><br />
          • Vitamins A & C: Support immunity and skin health.<br />
          • High in Antioxidants: Fights free radicals and reduces oxidative stress.<br />
          • Good Source of Fiber: Aids digestion and promotes overall health.</p>
          <p><span className="font-bold">Pineapple Uses:</span><br />
          • Culinary: Fresh, in juices, smoothies, salads, and desserts.<br />
          • Beverages: Tropical cocktails and fermented drinks like Tepache.<br />
          • Beauty: Used in exfoliating face masks and hair care products.<br />
          • Cleaning: Bromelain enzyme helps clean stains and tenderize meat.</p>
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