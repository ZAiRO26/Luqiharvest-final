import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TotapuriMangoDetailPage() {
  const navigate = useNavigate();
  const images = [
    "/images/products/AS2-Totapuri Mango.jpg",
    "/images/products/CT2-Totapuri Mango.jpg",
    "/images/products/FZ2-Totapuri Mango.jpg",
    "/images/products/NT2-Totapuri Mango.jpg"
  ];
  const [current, setCurrent] = useState(0);
  const prevSlide = () => setCurrent((current - 1 + images.length) % images.length);
  const nextSlide = () => setCurrent((current + 1) % images.length);
  return (
    <div className="max-w-4xl mx-auto my-12 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
      <div className="w-full flex flex-col justify-center items-center bg-gray-50 relative">
        <img
          src={images[current]}
          alt="Totapuri Mango"
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
        <h1 className="text-3xl font-bold mb-4 text-orange-700">Totapuri Mango - A Tangy Delight</h1>
        <div className="text-gray-700 mb-4 whitespace-pre-line text-lg space-y-4">
          <p>Totapuri Mangoes stand out for their vibrant yellow color and distinct tangy taste. Their balanced sweet and sour flavor makes them perfect for juices, nectars, smoothies, and sauces.</p>
          <p><span className="font-bold">Nutritional Benefits of Totapuri Mango:</span><br />
          • Vitamins A & C: Supports immunity, skin, and vision health.<br />
          • High in Antioxidants: Reduces oxidative stress and combats free radicals.<br />
          • Good Source of Fiber: Promotes digestive health.<br />
          • Natural Energy Booster: Provides quick energy from natural sugars.<br />
          • Low in Fat & Cholesterol-Free: Supports a healthy lifestyle.<br />
          • Hydrating & Refreshing: High water content for hydration.</p>
          <p><span className="font-bold">Totapuri Mango Uses:</span><br />
          • Beverages: Used in juices, smoothies, and health drinks.<br />
          • Ice Creams & Desserts: Adds a tangy flavor to frozen treats.<br />
          • Bakery Products: Ideal for cakes, pastries, and tropical fillings.<br />
          • Dairy Products: Perfect for lassis, yogurts, and flavored milk.<br />
          • Sauces & Chutneys: Used to create flavorful, tangy condiments.</p>
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