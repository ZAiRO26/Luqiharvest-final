import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    name: "Alphonso Mango Pulp & Puree",
    image: "/images/products/AS1-Alphanso Mango.jpg",
    slug: "alphonso-mango-pulp-puree"
  },
  {
    name: "Totapuri Mango Pulp & Puree",
    image: "/images/products/AS2-Totapuri Mango.jpg",
    slug: "totapuri-mango-pulp-puree"
  },
  {
    name: "Kesar Mango Pulp & Puree",
    image: "/images/products/AS3-Kesar Mango.jpg",
    slug: "kesar-mango-pulp-puree"
  },
  {
    name: "White Guava Pulp & Puree",
    image: "/images/products/AS4-White Guava.jpg",
    slug: "white-guava-pulp-puree"
  },
  {
    name: "Pink Guava Pulp & Puree",
    image: "/images/products/AS5-Pink Guava.jpg",
    slug: "pink-guava-pulp-puree"
  },
  {
    name: "Pineapple Pulp & Puree",
    image: "/images/products/AS6-Pineapple.jpg",
    slug: "pineapple-pulp-puree"
  },
  {
    name: "Sapota(Chikku) Pulp & Puree",
    image: "/images/products/AS7-Sapota(Chikku).jpg",
    slug: "sapota-chikku-pulp-puree"
  },
  {
    name: "Jackfruit Pulp & Puree",
    image: "/images/products/AS8-Jackfruit.jpg",
    slug: "jackfruit-pulp-puree"
  }
];

const description = `Our Fruit Pulp & Puree is made from the finest, handpicked fruits, processed with care to preserve natural flavor, color, and nutrition. Ideal for beverages, desserts, and culinary applications, our pulp is available in aseptic, canned, and frozen packaging.`;

export default function FruitPulpPage() {
  return (
    <div>
      <div className="w-full py-12 md:py-20 bg-gradient-to-r from-yellow-200 to-yellow-400 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-yellow-900 mb-4">Fruit Pulp & Puree</h1>
        <p className="text-lg md:text-xl text-yellow-900 mb-6 max-w-2xl mx-auto">{description}</p>
      </div>
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          {products.map((product, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
              <Link to={`/products/fruit-pulp/${product.slug}`} className="block">
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