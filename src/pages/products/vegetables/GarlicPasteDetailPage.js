import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function GarlicPasteDetailPage() {
  const navigate = useNavigate();
  const images = [
    "/images/products/AS14-Garlic.jpg",
    "/images/products/NT14-Garlic.jpg"
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
            alt="Garlic Paste"
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
    </>
  );
} 