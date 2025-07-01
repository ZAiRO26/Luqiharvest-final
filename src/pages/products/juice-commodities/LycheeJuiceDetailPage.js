import React from "react";
import { useNavigate } from "react-router-dom";

export default function LycheeJuiceDetailPage() {
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
            src="/images/products/SJ5-Lychee Juice.jpg"
            alt="Lychee Juice"
            className="object-contain w-full max-w-xs md:max-w-sm h-96 bg-white"
          />
        </div>
        <div className="w-full p-8 flex flex-col justify-center items-start">
          <h1 className="text-3xl font-bold mb-4 text-orange-700">Lychee Juice</h1>
          <div className="text-gray-700 mb-4 whitespace-pre-line text-lg space-y-4">
            <p>Extracted from ripe lychees, lychee juice has a light, translucent texture and a naturally sweet, fragrant taste. It is rich in Vitamin C, potassium, and antioxidants, making it a hydrating and immune-boosting drink. The juice is often enjoyed chilled and can be used in mocktails, fruit blends, or desserts. With its smooth flavor and health benefits, lychee juice is a perfect choice for those who enjoy light, fruity beverages with a tropical twist.</p>
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