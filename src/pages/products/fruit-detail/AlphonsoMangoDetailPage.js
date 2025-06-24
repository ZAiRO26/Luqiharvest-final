import React from "react";
import { useNavigate } from "react-router-dom";

export default function AlphonsoMangoDetailPage() {
  const navigate = useNavigate();
  return (
    <div className="max-w-4xl mx-auto my-12 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
      <div className="w-full flex justify-center items-start bg-gray-50">
        <img
          src="/images/products/AS1-Alphanso Mango.jpg"
          alt="Alphonso Mango"
          className="object-contain w-full max-w-xs md:max-w-sm h-96 bg-white"
        />
      </div>
      <div className="w-full p-8 flex flex-col justify-center items-start">
        <h1 className="text-3xl font-bold mb-4 text-orange-700">Alphonso Mango - The King of Mangoes</h1>
        <div className="text-gray-700 mb-4 whitespace-pre-line text-lg space-y-4">
          <p>Alphonso Mangoes, often called the "King of Mangoes," are prized for their deep golden color, rich creamy texture, and unparalleled sweetness. The smooth, aromatic pulp makes it a perfect ingredient for beverages, desserts, ice creams, and jams.</p>
          <p><span className="font-bold">Nutritional Benefits of Alphonso Mango:</span><br />
          • Rich in Vitamins A, C, and E: Boosts immunity, promotes skin health, and supports collagen formation.<br />
          • High in Antioxidants: Fights free radicals and reduces oxidative stress.<br />
          • Dietary Fiber: Aids digestion and promotes a healthy gut.<br />
          • Minerals: Contains potassium and magnesium, supporting blood pressure, muscle, and nerve health.<br />
          • Low in Fat and Cholesterol-Free: A healthy option for weight-conscious individuals.</p>
          <p><span className="font-bold">Alphonso Mango Uses:</span><br />
          • Beverages: Perfect for mango juices, smoothies, cocktails, and nectars.<br />
          • Desserts: Ideal for ice creams, milkshakes, sorbets, and puddings.<br />
          • Bakery: Adds natural sweetness to cakes, pastries, and pies.<br />
          • Sauces & Jams: A base for chutneys, sauces, and fruit preserves.<br />
          • Frozen Treats: Perfect for popsicles and other frozen desserts.</p>
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