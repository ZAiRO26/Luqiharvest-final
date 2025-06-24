import React from "react";
import { Link } from "react-router-dom";

const products = [
  { name: "Totapuri Mango Concentrate", image: "/images/products/AS2-Totapuri Mango.jpg", slug: "totapuri-mango-concentrate" },
  { name: "Totapuri Mango Sulphate", image: "/images/products/AS2-Totapuri Mango.jpg", slug: "totapuri-mango-sulphate" },
  { name: "White Guava Concentrate", image: "/images/products/AS4-White Guava.jpg", slug: "white-guava-concentrate" },
  { name: "Pink Guava Concentrate", image: "/images/products/AS5-Pink Guava.jpg", slug: "pink-guava-concentrate" },
  { name: "Tomato Paste and Puree", image: "/images/products/AS9-Tomato.jpg", slug: "tomato-paste-and-puree" }
];

const description = `Our Fruit Concentrates are produced by removing water from fruit juice, resulting in a rich, flavorful product perfect for beverages, jams, and confectionery. We ensure high quality and consistent taste in every batch.`;

export default function FruitConcentratePage() {
  return (
    <div>
      <div className="w-full py-12 md:py-20 bg-gradient-to-r from-yellow-200 to-yellow-400 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-yellow-900 mb-4">Fruit Concentrate</h1>
        <p className="text-lg md:text-xl text-yellow-900 mb-6 max-w-2xl mx-auto">{description}</p>
      </div>
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          {products.map((product, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
              <Link to={`/products/fruit-concentrate/${product.slug}`} className="block">
                <div className="flex items-center justify-center min-h-[200px] bg-white p-4 border-b border-gray-100">
                  <img src={product.image} alt={product.name} className="max-h-40 w-auto object-contain mx-auto" />
                </div>
                <div className="p-4 text-center">
                  <h2 className="font-bold text-lg text-gray-800 mb-2">{product.name}</h2>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 