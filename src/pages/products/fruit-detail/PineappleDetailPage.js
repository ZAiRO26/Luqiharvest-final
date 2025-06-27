import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PineappleDetailPage() {
  const navigate = useNavigate();
  const images = [
    "/images/products/AS6-Pineapple.jpg",
    "/images/products/CT6-Pineapple.jpg",
    "/images/products/FZ6-Pineapple.jpg",
    "/images/products/NT6-Pineapple.jpg"
  ];
  const [current, setCurrent] = useState(0);
  const prevSlide = () => setCurrent((current - 1 + images.length) % images.length);
  const nextSlide = () => setCurrent((current + 1) % images.length);
  return (
    <div className="max-w-4xl mx-auto my-12 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
      <div className="w-full flex flex-col justify-center items-center bg-gray-50 relative">
        <img
          src={images[current]}
          alt="Pineapple"
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
        <h1 className="text-3xl font-bold mb-4 text-orange-700">Pineapple - Sweet, Tangy, and Refreshing</h1>
        <div className="text-gray-700 mb-4 whitespace-pre-line text-lg space-y-4">
          <p>Extracted from ripe pineapples, our pineapple pulp offers a tangy and sweet flavor with a refreshing aroma, perfect for juices, sauces, ice creams, and bakery products.</p>
          <p><span className="font-bold">Nutritional Benefits of Pineapple:</span><br />
          • Vitamins A & C: Support immunity and skin health.<br />
          • High in Antioxidants: Fights free radicals and reduces oxidative stress.<br />
          • Good Source of Fiber: Aids digestion and promotes overall health.</p>
          <p><span className="font-bold">Pineapple Uses:</span><br />
          • Culinary: Fresh, in juices, smoothies, salads, and desserts.<br />
          • Beverages: Tropical cocktails and fermented drinks like Tepache.<br />
          • Beauty: Used in exfoliating face masks and hair care products.<br />
          • Cleaning: Bromelain enzyme helps clean stains and tenderize meat.</p>
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