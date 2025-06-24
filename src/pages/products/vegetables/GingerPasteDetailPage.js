import React from "react";
import { useNavigate } from "react-router-dom";

export default function GingerPasteDetailPage() {
  const navigate = useNavigate();
  return (
    <div className="max-w-4xl mx-auto my-12 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
      <div className="w-full flex justify-center items-start bg-gray-50">
        <img
          src="/images/products/NT13-Ginger.jpg"
          alt="Ginger Paste"
          className="object-contain w-full max-w-xs md:max-w-sm h-96 bg-white"
        />
      </div>
      <div className="w-full p-8 flex flex-col justify-center items-start">
        <h1 className="text-3xl font-bold mb-4 text-orange-700">Ginger Paste</h1>
        <div className="text-gray-700 mb-4 whitespace-pre-line text-lg space-y-4">
          <p>Ginger paste is made by grinding fresh ginger root into a smooth, thick consistency, often with a little water or oil. It is a staple ingredient in Asian, Middle Eastern, and African cuisines.</p>
          <p><span className="font-bold">Nutritional Benefits of Ginger Paste:</span><br />
          • Anti-inflammatory & antioxidant properties due to gingerol.<br />
          • Helps relieve nausea, especially morning sickness and motion sickness.<br />
          • Aids digestion and reduces bloating or gas.<br />
          • Known to boost immunity and reduce cold/flu symptoms.<br />
          • Supports joint health and may reduce arthritis pain.<br />
          • May help lower blood sugar and improve heart health.</p>
          <p><span className="font-bold">Ginger Paste Uses:</span><br />
          • Indian cuisine: Used in curries, dals, chutneys, and gravies.<br />
          • Stir-fries & marinades: Common in Chinese and Southeast Asian dishes.<br />
          • Soups & stews: Adds warmth and depth.<br />
          • Tea & drinks: Mixed into herbal teas or detox drinks.<br />
          • Baking: Occasionally used in gingerbread or spiced sweets.</p>
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