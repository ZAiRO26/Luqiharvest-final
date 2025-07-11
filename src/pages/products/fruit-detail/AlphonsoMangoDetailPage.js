import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AlphonsoMangoDetailPage() {
  const navigate = useNavigate();
  const images = [
    "/images/products/AS1-Alphanso Mango.jpg",
    "/images/products/CT1-Alphanso Mango.jpg",
    "/images/products/FZ1-Alphanso Mango.jpg",
    "/images/products/NT1-Alphanso Mango.jpg"
  ];
  const [current, setCurrent] = useState(0);
  const prevSlide = () => setCurrent((current - 1 + images.length) % images.length);
  const nextSlide = () => setCurrent((current + 1) % images.length);
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
        <div className="w-full flex flex-col justify-center items-center bg-gray-50 relative">
          <img
            src={images[current]}
            alt="Alphonso Mango"
            className="object-contain w-full max-w-xs md:max-w-sm h-96 bg-white"
          />
          <button onClick={prevSlide} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow hover:bg-orange-100" aria-label="Previous image">&#8592;</button>
          <button onClick={nextSlide} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow hover:bg-orange-100" aria-label="Next image">&#8594;</button>
          <div className="flex justify-center mt-2 space-x-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full ${current === idx ? 'bg-orange-600' : 'bg-gray-300'}`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
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
    </>
  );
} 