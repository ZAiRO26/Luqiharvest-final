import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function KesarMangoDetailPage() {
  const navigate = useNavigate();
  const images = [
    "/images/products/AS3-Kesar Mango.jpg",
    "/images/products/CT3-Kesar Mango.jpg",
    "/images/products/FZ3-Kesar Mango.jpg",
    "/images/products/NT3-Kesar Mango.jpg"
  ];
  const [current, setCurrent] = useState(0);
  const prevSlide = () => setCurrent((current - 1 + images.length) % images.length);
  const nextSlide = () => setCurrent((current + 1) % images.length);
  return (
    <div className="max-w-4xl mx-auto my-12 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
      <div className="w-full flex flex-col justify-center items-center bg-gray-50 relative">
        <img
          src={images[current]}
          alt="Kesar Mango"
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
        <h1 className="text-3xl font-bold mb-4 text-orange-700">Kesar Mango - Sweet, Fragrant, and Nutritious</h1>
        <div className="text-gray-700 mb-4 whitespace-pre-line text-lg space-y-4">
          <p>Known for its saffron-like color and fragrant aroma, Kesar Mangoes are celebrated for their sweet flavor and pulpy texture, making them ideal for desserts, juices, and ice creams.</p>
          <p><span className="font-bold">Nutritional Benefits of Kesar Mango:</span><br />
          • Vitamin C: Boosts immunity and promotes healthy skin.<br />
          • Vitamin A: Supports eye health and improves skin quality.<br />
          • Good Source of Fiber: Aids digestion and supports gut health.<br />
          • Natural Energy Booster: Quick energy from natural sugars.<br />
          • Heart-Healthy Potassium: Regulates blood pressure and supports heart health.<br />
          • Low in Fat & Cholesterol-Free: Ideal for weight management.</p>
          <p><span className="font-bold">Kesar Mango Uses:</span><br />
          • Beverages: Mango shakes, smoothies, and cocktails.<br />
          • Desserts: Ideal for ice creams, puddings, and sorbets.<br />
          • Bakery Products: Adds mango flavor to cakes, muffins, and tarts.<br />
          • Dairy Industry: Used in flavored milk and yogurt products.<br />
          • Confectionery: Perfect for candies, jams, and jellies.</p>
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