import React from "react";
import { useNavigate } from "react-router-dom";

export default function GherkinsDetailPage() {
  const navigate = useNavigate();
  return (
    <div className="max-w-4xl mx-auto my-12 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
      <div className="w-full flex justify-center items-start bg-gray-50">
        <img
          src="/images/products/NT15-Gharkin.jpg"
          alt="Gherkins"
          className="object-contain w-full max-w-xs md:max-w-sm h-96 bg-white"
        />
      </div>
      <div className="w-full p-8 flex flex-col justify-center items-start">
        <h1 className="text-3xl font-bold mb-4 text-orange-700">Gherkins - A Tangy Delight</h1>
        <div className="text-gray-700 mb-4 whitespace-pre-line text-lg space-y-4">
          <p>Gherkins, a type of small cucumber, are known for their tangy flavor and crisp texture. Perfect for pickling, gherkins are a popular addition to salads, sandwiches, and snacks.</p>
          <p><span className="font-bold">Nutritional Benefits of Gherkins:</span><br />
          • Rich in Vitamin K: Essential for bone health and blood clotting.<br />
          • Low in Calories: A great snack for weight-conscious individuals.<br />
          • High in Water Content: Helps in hydration and supports skin health.<br />
          • Contains Antioxidants: Fights oxidative stress and promotes overall wellness.</p>
          <p><span className="font-bold">Gherkins Uses:</span><br />
          • Pickles: Ideal for making tangy, crunchy pickles.<br />
          • Salads: Adds crunch and flavor to fresh vegetable salads.<br />
          • Snacks: Perfect for snacking or adding to charcuterie boards.<br />
          • Sandwiches & Burgers: Adds a zesty crunch to sandwiches and burgers.</p>
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