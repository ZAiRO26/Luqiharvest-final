import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TamarindPasteDetailPage() {
  const navigate = useNavigate();
  const images = [
    "/images/products/AS12-Tamarind.jpg",
    "/images/products/NT12-Tamarind.jpg"
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
            alt="Tamarind Paste"
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
          <h1 className="text-3xl font-bold mb-4 text-orange-700">Tamarind Paste</h1>
          <div className="text-gray-700 mb-4 whitespace-pre-line text-lg space-y-4">
            <p>Tamarind paste is a thick, sticky concentrate made by extracting the pulp from the tamarind fruit (Tamarindus indica), a tropical leguminous tree native to Africa but widely used in South Asian, African, and Latin American cuisines.</p>
            <p><span className="font-bold">Nutritional Benefits of Tamarind paste:</span><br />
            • Rich in antioxidants – helps fight free radicals and inflammation.<br />
            • Good source of potassium & magnesium – supports heart and muscle health.<br />
            • Natural laxative – aids digestion and relieves constipation.<br />
            • Improves iron absorption due to Vitamin C content.<br />
            • Traditionally used to reduce fever, aid bile production, and cool the body.</p>
            <p><span className="font-bold">Tamarind paste Uses:</span><br />
            • Indian cuisine: Used in sambar, rasam, chutneys, and tamarind rice.<br />
            • Thai cooking: Essential for pad Thai, tamarind-based sauces and soups.<br />
            • Chutneys & dips: Tangy base for snacks like samosas and pakoras.<br />
            • Marinades: Adds sourness and depth to meat, poultry, and fish dishes.<br />
            • Beverages: Tamarind juice or sharbat, popular in summer.<br />
            • Jams, sauces, and candies: Common in tropical and Latin snacks.</p>
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