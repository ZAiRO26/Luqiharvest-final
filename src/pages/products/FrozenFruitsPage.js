import React from "react";
import { Link } from "react-router-dom";

const products = [
  { name: "Frozen Alphonso Mango", image: "/images/products/FZ1-Alphanso Mango.jpg", slug: "frozen-alphonso-mango" },
  { name: "Frozen Totapuri Mango", image: "/images/products/FZ2-Totapuri Mango.jpg", slug: "frozen-totapuri-mango" },
  { name: "Frozen Kesar Mango", image: "/images/products/FZ3-Kesar Mango.jpg", slug: "frozen-kesar-mango" },
  { name: "Frozen White Guava", image: "/images/products/FZ4-White Guava.jpg", slug: "frozen-white-guava" },
  { name: "Frozen Pink Guava", image: "/images/products/FZ5-Pink Guava.jpg", slug: "frozen-pink-guava" },
  { name: "Frozen Pineapple", image: "/images/products/FZ6-Pineapple.jpg", slug: "frozen-pineapple" },
  { name: "Frozen Sapota (Chikku)", image: "/images/products/FZ7-Sapota(Chikku).jpg", slug: "frozen-sapota-chikku" },
  { name: "Frozen Jack Fruit", image: "/images/products/FZ8-Jackfruit.jpg", slug: "frozen-jack-fruit" },
  { name: "Tender Coconut Preparations (Malai)", image: "/images/products/FZ8-Jackfruit.jpg", slug: "tender-coconut-preparations-malai" }
];

const description = `Our Frozen Fruits are rapidly frozen at peak ripeness to lock in nutrients, flavor, and color. Ideal for smoothies, desserts, and food service, our frozen range offers year-round availability and convenience.`;

export default function FrozenFruitsPage() {
  return (
    <div>
      <div className="w-full py-12 md:py-20 bg-gradient-to-r from-yellow-200 to-yellow-400 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-yellow-900 mb-4">Frozen Fruits</h1>
        <p className="text-lg md:text-xl text-yellow-900 mb-6 max-w-2xl mx-auto">{description}</p>
      </div>
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          {products.map((product, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
              <Link to={`/products/frozen-fruits/${product.slug}`} className="block">
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