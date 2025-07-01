import React from "react";
import { useNavigate } from "react-router-dom";

export default function GuavaJuiceDetailPage() {
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
            src="/images/products/SJ2-Guava Juice.jpg"
            alt="Guava Juice"
            className="object-contain w-full max-w-xs md:max-w-sm h-96 bg-white"
          />
        </div>
        <div className="w-full p-8 flex flex-col justify-center items-start">
          <h1 className="text-3xl font-bold mb-4 text-orange-700">Guava Juice</h1>
          <div className="text-gray-700 mb-4 whitespace-pre-line text-lg space-y-4">
            <p>Guava juice is made by blending ripe guavas, often pink or white varieties, into a smooth liquid. It boasts a unique taste—sweet, mildly tart, and highly aromatic. Naturally packed with Vitamin C, dietary fiber, and antioxidants, guava juice supports immunity, digestion, and skin health. Its vibrant color and exotic flavor make it a popular choice in fruit blends, smoothies, and health drinks. Often consumed chilled, guava juice is both delicious and beneficial, offering a natural boost of energy and nutrients.</p>
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