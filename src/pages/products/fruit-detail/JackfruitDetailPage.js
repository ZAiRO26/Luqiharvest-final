import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function JackfruitDetailPage() {
  const navigate = useNavigate();
  const images = [
    "/images/products/AS8-Jackfruit.jpg",
    "/images/products/CT8-Jackfruit.jpg",
    "/images/products/FZ8-Jackfruit.jpg",
    "/images/products/NT8-Jackfruit.jpg"
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
            alt="Jackfruit"
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
          <h1 className="text-3xl font-bold mb-4 text-orange-700">Jackfruit - A Tropical Delight</h1>
          <div className="text-gray-700 mb-4 whitespace-pre-line text-lg space-y-4">
            <p>Jackfruit, with its tropical sweet taste and fibrous texture, is used in jams, smoothies, candies, and traditional desserts. Its rich flavor and nutritional benefits make it a great choice for many culinary applications.</p>
            <p><span className="font-bold">Nutritional Benefits of Jackfruit:</span><br />
            • Rich in Vitamins & Minerals: A great source of vitamin C, A, potassium, magnesium, and calcium.<br />
            • High in Fiber: Supports digestion, promotes satiety, and regulates blood sugar.<br />
            • Antioxidants: Fights oxidative stress and may reduce inflammation.<br />
            • Low in Fat: A healthy, low-fat option for a balanced diet.</p>
            <p><span className="font-bold">Jackfruit Uses:</span><br />
            • Beverages: Health juices, smoothies, and cocktails.<br />
            • Desserts: Ice creams, parfaits, and puddings.<br />
            • Bakery Products: Cakes, pastries, muffins, and tarts.<br />
            • Dairy Industry: Flavored milkshakes and yogurt products.<br />
            • Confectionery: Jams, jellies, and fruit preserves.</p>
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