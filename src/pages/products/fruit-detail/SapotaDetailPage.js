import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SapotaDetailPage() {
  const navigate = useNavigate();
  const images = [
    "/images/products/AS7-Sapota(Chikku).jpg",
    "/images/products/CT7-Sapota(Chikku).jpg",
    "/images/products/FZ7-Sapota(Chikku).jpg",
    "/images/products/NT7-Sapota(Chikku).jpg"
  ];
  const [current, setCurrent] = useState(0);
  const prevSlide = () => setCurrent((current - 1 + images.length) % images.length);
  const nextSlide = () => setCurrent((current + 1) % images.length);
  return (
    <div className="max-w-4xl mx-auto my-12 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
      <div className="w-full flex flex-col justify-center items-center bg-gray-50 relative">
        <img
          src={images[current]}
          alt="Sapota"
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
        <h1 className="text-3xl font-bold mb-4 text-orange-700">Sapota (Chikku) - A Sweet & Nutritious Delight</h1>
        <div className="text-gray-700 mb-4 whitespace-pre-line text-lg space-y-4">
          <p>Also known as Chikku, Sapota has a rich, malty flavor and soft, grainy texture. Perfect for milkshakes, smoothies, and desserts, it's naturally sweet and packed with nutrients.</p>
          <p><span className="font-bold">Nutritional Benefits of Sapota:</span><br />
          • Natural Sugars: Provides instant energy, ideal for athletes.<br />
          • High in Fiber: Promotes digestion and prevents constipation.<br />
          • Vitamins A & C: Boost immunity and improve skin health.<br />
          • Rich in Iron, Folate, Potassium & Magnesium: Supports blood circulation, regulates blood pressure, and supports heart health.</p>
          <p><span className="font-bold">Sapota Uses:</span><br />
          • Beverages: Health drinks, smoothies, and milkshakes.<br />
          • Desserts: Ice creams, puddings, and fruit-based sweets.<br />
          • Bakery Products: Cakes, pastries, and muffins.<br />
          • Dairy Industry: Flavored milkshakes and yogurt products.<br />
          • Confectionery: Fruit bars, candies, jams, and jellies.</p>
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