import React from "react";
import { Link } from "react-router-dom";

const products = [
  { name: "Gherkins", image: "/images/products/AS15-Gharkins.jpg", slug: "gherkins" },
  { name: "Baby Corn", image: "/images/products/AS16-Baby Corn.jpg", slug: "baby-corn" },
  { name: "Sweet Corn", image: "/images/products/AS16-Baby Corn.jpg", slug: "sweet-corn" },
  { name: "Jalapenos", image: "/images/products/AS10-Green Chilli.jpg", slug: "jalapenos" },
  { name: "Chili Peppers", image: "/images/products/AS11-Red Chilli.jpg", slug: "chili-peppers" },
  { name: "Green Beans", image: "/images/products/AS14-Garlic.jpg", slug: "green-beans" },
  { name: "French Beans", image: "/images/products/AS14-Garlic.jpg", slug: "french-beans" },
  { name: "Jackfruit", image: "/images/products/NT8-Jackfruit.jpg", slug: "jackfruit" },
  { name: "Sapota (Chikku)", image: "/images/products/NT7-Sapota(Chikku).jpg", slug: "sapota-chikku" },
  { name: "Pineapple", image: "/images/products/NT6-Pineapple.jpg", slug: "pineapple" },
  { name: "Pink Guava", image: "/images/products/NT5-Pink Guava.jpg", slug: "pink-guava" },
  { name: "White Guava", image: "/images/products/NT4-White Guava.jpg", slug: "white-guava" },
  { name: "Kesar Mango", image: "/images/products/NT3-Kesar Mango.jpg", slug: "kesar-mango" },
  { name: "Totapuri Mango", image: "/images/products/NT2-Totapuri Mango.jpg", slug: "totapuri-mango" },
  { name: "Alphonso Mango", image: "/images/products/NT1-Alphanso Mango.jpg", slug: "alphonso-mango" }
];

const description = `Our Premium Vegetables are sourced from trusted farms and processed for freshness and quality. From gherkins to baby corn and exotic vegetables, our range is perfect for culinary and industrial use.`;

export default function VegetablesPage() {
  return (
    <div>
      <div className="w-full py-12 md:py-20 bg-gradient-to-r from-yellow-200 to-yellow-400 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-yellow-900 mb-4">Premium Vegetables</h1>
        <p className="text-lg md:text-xl text-yellow-900 mb-6 max-w-2xl mx-auto">{description}</p>
      </div>
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          {products.map((product, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
              <Link to={`/products/vegetables/${product.slug}`} className="block">
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