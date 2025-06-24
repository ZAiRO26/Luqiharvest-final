import React from "react";
import { useNavigate } from "react-router-dom";

export default function RedChillyPasteDetailPage() {
  const navigate = useNavigate();
  return (
    <div className="max-w-4xl mx-auto my-12 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
      <div className="w-full flex justify-center items-start bg-gray-50">
        <img
          src="/images/products/NT11-Red Chilli.jpg"
          alt="Red Chilly Paste"
          className="object-contain w-full max-w-xs md:max-w-sm h-96 bg-white"
        />
      </div>
      <div className="w-full p-8 flex flex-col justify-center items-start">
        <h1 className="text-3xl font-bold mb-4 text-orange-700">Red Chilli Paste</h1>
        <div className="text-gray-700 mb-4 whitespace-pre-line text-lg space-y-4">
          <p>Red chilli paste is a thick, vibrant condiment made by blending dried or fresh red chillies with ingredients like garlic, vinegar, salt, and oil. It is widely used to impart spice, color, and flavor to a variety of dishes.</p>
          <p><span className="font-bold">Nutritional Benefits of Red Chilli Paste:</span><br />
          • Rich in capsaicin, known for its pain-relieving, anti-inflammatory, and metabolism-boosting properties.<br />
          • High in Vitamin A – supports eye health and immunity.<br />
          • Powerful antioxidant – protects cells from oxidative damage.<br />
          • Promotes digestion by stimulating gastric juices.<br />
          • Helps in burning calories and reducing appetite.</p>
          <p><span className="font-bold">Red Chilli Paste Uses:</span><br />
          • Indian cooking: Used in curries, dals, chutneys, and masalas.<br />
          • Spice blends: Added to ginger-garlic paste or coriander paste.<br />
          • Marinades: Enhances spice level in meat and vegetable marinades.<br />
          • Pickles & chutneys: Key ingredient in spicy accompaniments.<br />
          • Snacks: Mixed into batters for pakoras, samosas, and fritters.<br />
          • Asian cuisines: Adds kick to stir-fries, noodles, and sauces.</p>
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