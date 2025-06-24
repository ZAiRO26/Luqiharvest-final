import React from "react";
import { useNavigate } from "react-router-dom";

export default function TamarindPasteDetailPage() {
  const navigate = useNavigate();
  return (
    <div className="max-w-4xl mx-auto my-12 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
      <div className="w-full flex justify-center items-start bg-gray-50">
        <img
          src="/images/products/NT12-Tamarind.jpg"
          alt="Tamarind Paste"
          className="object-contain w-full max-w-xs md:max-w-sm h-96 bg-white"
        />
      </div>
      <div className="w-full p-8 flex flex-col justify-center items-start">
        <h1 className="text-3xl font-bold mb-4 text-orange-700">Tamarind Paste</h1>
        <div className="text-gray-700 mb-4 whitespace-pre-line text-lg space-y-4">
          <p>Tamarind paste is a thick, sticky concentrate made by extracting the pulp from the tamarind fruit (Tamarindus indica), a tropical leguminous tree native to Africa but widely used in South Asian, African, and Latin American cuisines.</p>
          <p><span className="font-bold">Nutritional Benefits of Tamarind paste:</span><br />
          • Rich in antioxidants – helps fight free radicals and inflammation.<br />
          • Good source of potassium & magnesium – supports heart and muscle health.<br />
          • Natural laxative – aids digestion and relieves constipation.<br />
          • Improves iron absorption due to Vitamin C content.<br />
          • Traditionally used to reduce fever, aid bile production, and cool the body.</p>
          <p><span className="font-bold">Tamarind paste Uses:</span><br />
          • Indian cuisine: Used in sambar, rasam, chutneys, and tamarind rice.<br />
          • Thai cooking: Essential for pad Thai, tamarind-based sauces and soups.<br />
          • Chutneys & dips: Tangy base for snacks like samosas and pakoras.<br />
          • Marinades: Adds sourness and depth to meat, poultry, and fish dishes.<br />
          • Beverages: Tamarind juice or sharbat, popular in summer.<br />
          • Jams, sauces, and candies: Common in tropical and Latin snacks.</p>
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