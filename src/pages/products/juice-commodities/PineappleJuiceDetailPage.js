import React from "react";
import { useNavigate } from "react-router-dom";

export default function PineappleJuiceDetailPage() {
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
            src="/images/products/SJ4-Pineapple Juice.jpg"
            alt="Pineapple Juice"
            className="object-contain w-full max-w-xs md:max-w-sm h-96 bg-white"
          />
        </div>
        <div className="w-full p-8 flex flex-col justify-center items-start">
          <h1 className="text-3xl font-bold mb-4 text-orange-700">Pineapple Juice</h1>
          <div className="text-gray-700 mb-4 whitespace-pre-line text-lg space-y-4">
            <p>Made by juicing ripe pineapples, pineapple juice offers a bold, tangy-sweet taste with a golden-yellow color and tropical aroma. It's rich in Vitamin C, Bromelain (a natural enzyme), and antioxidants, which support digestion, boost immunity, and reduce inflammation. This energizing drink is perfect on its own or as a base for cocktails, smoothies, and mocktails. Pineapple juice delivers a burst of natural flavor and health benefits in every sip, making it both delicious and nourishing.</p>
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