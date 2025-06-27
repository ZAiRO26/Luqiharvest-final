import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function GuavaDetailPage() {
  const navigate = useNavigate();
  const images = [
    "/images/products/AS4-White Guava.jpg",
    "/images/products/AS5-Pink Guava.jpg",
    "/images/products/CT4-White Guava.jpg",
    "/images/products/CT5-Pink Guava.jpg",
    "/images/products/FZ4-White Guava.jpg",
    "/images/products/FZ5-Pink Guava.jpg",
    "/images/products/NT4-White Guava.jpg",
    "/images/products/NT5-Pink Guava.jpg"
  ];
  const [current, setCurrent] = useState(0);
  const prevSlide = () => setCurrent((current - 1 + images.length) % images.length);
  const nextSlide = () => setCurrent((current + 1) % images.length);
  return (
    <div className="max-w-4xl mx-auto my-12 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
      <div className="w-full flex flex-col justify-center items-center bg-gray-50 relative">
        <img
          src={images[current]}
          alt="Guava"
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
        <h1 className="text-3xl font-bold mb-4 text-orange-700">Guava (Pink & White) - A Nutrient Powerhouse</h1>
        <div className="text-gray-700 mb-4 whitespace-pre-line text-lg space-y-4">
          <p>Our guava pulp comes in two varieties: White Guava with its delicate, mildly sweet flavor and Pink Guava, which offers a fruitier, tropical taste. Both are perfect for juices, smoothies, jams, and desserts.</p>
          <p><span className="font-bold">Nutritional Benefits of Guava:</span><br />
          • Rich in Vitamin A & C: Promotes healthy vision, skin, and boosts immunity.<br />
          • High in Fiber: Supports digestion and gut health.<br />
          • Potassium: Helps regulate blood pressure.<br />
          • Supports Blood Sugar Control: Low Glycemic Index, making it diabetic-friendly.</p>
          <p><span className="font-bold">Guava Uses:</span><br />
          • Beverages: Juices, smoothies, and nectars.<br />
          • Desserts: Sorbets, ice creams, and puddings.<br />
          • Bakery Products: Cakes, pastries, muffins, and tropical tarts.<br />
          • Dairy Industry: Flavored milkshakes and yogurt-based products.<br />
          • Confectionery: Candies, fruit bars, jams, and jellies.</p>
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