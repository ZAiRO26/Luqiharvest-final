import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BabyCornDetailPage() {
  const navigate = useNavigate();
  const images = [
    "/images/products/AS16-Baby Corn.jpg",
    "/images/products/NT16-Baby Corn.jpg"
  ];
  const [current, setCurrent] = useState(0);
  const prevSlide = () => setCurrent((current - 1 + images.length) % images.length);
  const nextSlide = () => setCurrent((current + 1) % images.length);
  return (
    <div className="max-w-4xl mx-auto my-12 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
      <div className="w-full flex flex-col justify-center items-center bg-gray-50 relative">
        <img
          src={images[current]}
          alt="Baby Corn"
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
        <h1 className="text-3xl font-bold mb-4 text-orange-700">Baby Corn - Sweet and Tender Crunch</h1>
        <div className="text-gray-700 mb-4 whitespace-pre-line text-lg space-y-4">
          <p>Baby corn is harvested early, offering a mild, sweet flavor and tender texture. It's a popular ingredient in stir-fries, salads, and soups, especially in Asian cuisine.</p>
          <p><span className="font-bold">Nutritional Benefits of Baby Corn:</span><br />
          • High in Fiber: Supports digestion and promotes gut health.<br />
          • Vitamins A & C: Help boost immunity and maintain healthy skin and vision.<br />
          • Low in Calories: Ideal for weight management.<br />
          • Natural Energy Source: Packed with carbohydrates for a quick energy boost.</p>
          <p><span className="font-bold">Baby Corn Uses:</span><br />
          • Stir-Fries & Soups: Adds a sweet and crunchy element to stir-fries and soups.<br />
          • Salads: Enhances the texture and flavor of vegetable salads.<br />
          • Side Dishes: A great addition to any meal as a side dish.</p>
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