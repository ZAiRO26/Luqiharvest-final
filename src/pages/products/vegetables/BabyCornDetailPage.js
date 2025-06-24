import React from "react";
import { useNavigate } from "react-router-dom";

export default function BabyCornDetailPage() {
  const navigate = useNavigate();
  return (
    <div className="max-w-4xl mx-auto my-12 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
      <div className="w-full flex justify-center items-start bg-gray-50">
        <img
          src="/images/products/NT16-Baby Corn.jpg"
          alt="Baby Corn"
          className="object-contain w-full max-w-xs md:max-w-sm h-96 bg-white"
        />
      </div>
      <div className="w-full p-8 flex flex-col justify-center items-start">
        <h1 className="text-3xl font-bold mb-4 text-orange-700">Baby Corn - Sweet and Tender Crunch</h1>
        <div className="text-gray-700 mb-4 whitespace-pre-line text-lg space-y-4">
          <p>Baby corn is harvested early, offering a mild, sweet flavor and tender texture. It's a popular ingredient in stir-fries, salads, and soups, especially in Asian cuisine.</p>
          <p><span className="font-bold">Nutritional Benefits of Baby Corn:</span><br />
          • High in Fiber: Supports digestion and promotes gut health.<br />
          • Vitamins A & C: Help boost immunity and maintain healthy skin and vision.<br />
          • Low in Calories: Ideal for weight management.<br />
          • Natural Energy Source: Packed with carbohydrates for a quick energy boost.</p>
          <p><span className="font-bold">Baby Corn Uses:</span><br />
          • Stir-Fries & Soups: Adds a sweet and crunchy element to stir-fries and soups.<br />
          • Salads: Enhances the texture and flavor of vegetable salads.<br />
          • Side Dishes: A great addition to any meal as a side dish.</p>
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