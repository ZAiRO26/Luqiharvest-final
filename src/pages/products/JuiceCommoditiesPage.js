import React from "react";
import { Link } from "react-router-dom";

const products = [
  { name: "Mango Juice", image: "/images/products/SJ1-Mango Juice.jpg", slug: "mango-juice" },
  { name: "Guava Juice", image: "/images/products/SJ2-Guava Juice.jpg", slug: "guava-juice" },
  { name: "Lemon Juice", image: "/images/products/SJ3-Lemon Juice.jpg", slug: "lemon-juice" },
  { name: "Pineapple Juice", image: "/images/products/SJ4-Pineapple Juice.jpg", slug: "pineapple-juice" },
  { name: "Lychee Juice", image: "/images/products/SJ5-Lychee Juice.jpg", slug: "lychee-juice" }
];

const description = `Our Juice Commodities include a wide range of fruit juices and blends, crafted for purity and taste. Perfect for bottling, food service, and industrial use, our juices are available in bulk and retail packaging.`;

export default function JuiceCommoditiesPage() {
  return (
    <div>
      <div className="w-full py-12 md:py-20 bg-gradient-to-r from-yellow-200 to-yellow-400 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-yellow-900 mb-4">Juice Commodities</h1>
        <p className="text-lg md:text-xl text-yellow-900 mb-6 max-w-2xl mx-auto">{description}</p>
      </div>
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          {products.map((product, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
              <Link to={`/products/juice-commodities/${product.slug}`} className="block">
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