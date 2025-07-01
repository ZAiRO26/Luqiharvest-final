import React from "react";
import ProductDetailLayout from "../ProductDetailLayout";
import { Link } from "react-router-dom";

const description = `Alphonso Mangoes, often called the "King of Mangoes," are prized for their deep golden color, rich creamy texture, and unparalleled sweetness. The smooth, aromatic pulp makes it a perfect ingredient for beverages, desserts, ice creams, and jams.`;

const benefits = [
  "Rich in Vitamins A, C, and E: Boosts immunity, promotes skin health, and supports collagen formation.",
  "High in Antioxidants: Fights free radicals and reduces oxidative stress.",
  "Dietary Fiber: Aids digestion and promotes a healthy gut.",
  "Minerals: Contains potassium and magnesium, supporting blood pressure, muscle, and nerve health.",
  "Low in Fat and Cholesterol-Free: A healthy option for weight-conscious individuals."
];

const uses = [
  "Beverages: Perfect for mango juices, smoothies, cocktails, and nectars.",
  "Desserts: Ideal for ice creams, milkshakes, sorbets, and puddings.",
  "Bakery: Adds natural sweetness to cakes, pastries, and pies.",
  "Sauces & Jams: A base for chutneys, sauces, and fruit preserves.",
  "Frozen Treats: Perfect for popsicles and other frozen desserts."
];

const AlphonsoMangoPage = () => (
  <>
    <div className="max-w-5xl mx-auto w-full pt-8">
      <Link to="/products" className="text-green-600 hover:underline font-semibold mb-6 inline-block">← Back to Products</Link>
    </div>
    <ProductDetailLayout
      image={process.env.PUBLIC_URL + "/images/products/AS1-Alphanso Mango.jpg"}
      name="Alphonso Mango Pulp"
      description={description}
      benefits={benefits}
      uses={uses}
    />
  </>
);

export default AlphonsoMangoPage; 