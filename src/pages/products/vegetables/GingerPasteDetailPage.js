import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function GingerPasteDetailPage() {
  const navigate = useNavigate();
  const images = [
    "/images/products/AS13-Ginger.jpg",
    "/images/products/NT13-Ginger.jpg"
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
            alt="Ginger Paste"
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
          <h1 className="text-3xl font-bold mb-4 text-orange-700">Ginger Paste</h1>
          <div className="text-gray-700 mb-4 whitespace-pre-line text-lg space-y-4">
            <p>Ginger paste is made by grinding fresh ginger root into a smooth, thick consistency, often with a little water or oil. It is a staple ingredient in Asian, Middle Eastern, and African cuisines.</p>
            <p><span className="font-bold">Nutritional Benefits of Ginger Paste:</span><br />
            • Anti-inflammatory & antioxidant properties due to gingerol.<br />
            • Helps relieve nausea, especially morning sickness and motion sickness.<br />
            • Aids digestion and reduces bloating or gas.<br />
            • Known to boost immunity and reduce cold/flu symptoms.<br />
            • Supports joint health and may reduce arthritis pain.<br />
            • May help lower blood sugar and improve heart health.</p>
            <p><span className="font-bold">Ginger Paste Uses:</span><br />
            • Indian cuisine: Used in curries, dals, chutneys, and gravies.<br />
            • Stir-fries & marinades: Common in Chinese and Southeast Asian dishes.<br />
            • Soups & stews: Adds warmth and depth.<br />
            • Tea & drinks: Mixed into herbal teas or detox drinks.<br />
            • Baking: Occasionally used in gingerbread or spiced sweets.</p>
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