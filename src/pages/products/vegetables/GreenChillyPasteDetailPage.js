import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function GreenChillyPasteDetailPage() {
  const navigate = useNavigate();
  const images = [
    "/images/products/AS10-Green Chilli.jpg",
    "/images/products/NT10-Green Chilli.jpg"
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
            alt="Green Chilly Paste"
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
          <h1 className="text-3xl font-bold mb-4 text-orange-700">Green Chilli Paste</h1>
          <div className="text-gray-700 mb-4 whitespace-pre-line text-lg space-y-4">
            <p>Green chilli paste is made by grinding fresh green chillies into a smooth or slightly coarse consistency, often with a bit of water, oil, or vinegar to preserve freshness. It adds heat, flavor, and color to a variety of dishes.</p>
            <p><span className="font-bold">Nutritional Benefits of Green Chilli Paste:</span><br />
            • Rich in Vitamin C – boosts immunity and improves skin health.<br />
            • Aids in pain relief and metabolism.<br />
            • Has an anti-inflammatory and fat-burning property.<br />
            • Promotes digestion by stimulating gastric juices.<br />
            • May help in clearing congestion and fighting colds.<br />
            • Low in calories and fat – good for weight management diets.</p>
            <p><span className="font-bold">Green Chilli Paste Uses:</span><br />
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
    </>
  );
} 