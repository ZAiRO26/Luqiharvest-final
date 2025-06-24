import React from "react";
import { useNavigate } from "react-router-dom";

export default function GarlicPasteDetailPage() {
  const navigate = useNavigate();
  return (
    <div className="max-w-4xl mx-auto my-12 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
      <div className="w-full flex justify-center items-start bg-gray-50">
        <img
          src="/images/products/NT14-Garlic.jpg"
          alt="Garlic Paste"
          className="object-contain w-full max-w-xs md:max-w-sm h-96 bg-white"
        />
      </div>
      <div className="w-full p-8 flex flex-col justify-center items-start">
        <h1 className="text-3xl font-bold mb-4 text-orange-700">Garlic Paste</h1>
        <div className="text-gray-700 mb-4 whitespace-pre-line text-lg space-y-4">
          <p>Garlic paste is a smooth, creamy blend made from fresh garlic cloves, often with a small amount of oil or salt to enhance preservation. It is a foundational ingredient in global cuisines, known for its pungent aroma and strong flavor.</p>
          <p><span className="font-bold">Nutritional Benefits of Garlic Paste:</span><br />
          • Rich in allicin, a natural antibiotic and immune booster.<br />
          • Known to reduce blood pressure and lower cholesterol.<br />
          • Supports heart health and circulation.<br />
          • Has an anti-inflammatory, antibacterial and antifungal property.<br />
          • Helps in detoxifying the body and boosting liver health.<br />
          • May help in preventing colds, flu and infections.</p>
          <p><span className="font-bold">Garlic Paste Uses:</span><br />
          • Indian cooking: Essential in gravies, dals, curries, and biryanis.<br />
          • Stir-fries & sauces: Used in Chinese, Thai, and Mediterranean dishes.<br />
          • Marinades: For meats, seafood, and vegetables.<br />
          • Soups & stews: Enhances base flavor.<br />
          • Dips & spreads: Mixed into hummus, aioli, or garlic butter.</p>
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