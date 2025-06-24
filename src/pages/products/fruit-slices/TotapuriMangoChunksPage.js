import React from "react";
import ProductDetailLayout from "../ProductDetailLayout";

const description = `Tangy Totapuri mango cut into uniform dice and chunks. Perfect for beverages, desserts, and food processing.`;

const benefits = [
  "Vitamins A & C: Supports immunity, skin, and vision health.",
  "High in Antioxidants: Reduces oxidative stress and combats free radicals.",
  "Good Source of Fiber: Promotes digestive health.",
  "Natural Energy Booster: Provides quick energy from natural sugars."
];

const uses = [
  "Beverages: Used in juices, smoothies, and health drinks.",
  "Desserts: Adds a tangy flavor to ice creams and puddings.",
  "Bakery: Ideal for cakes, pastries, and tropical fillings.",
  "Culinary: Perfect for salads, salsas, and savory dishes."
];

const TotapuriMangoChunksPage = () => (
  <ProductDetailLayout
    image={process.env.PUBLIC_URL + "/images/products/AS2-Totapuri Mango.jpg"}
    name="Totapuri Mango Dice and Chunks"
    description={description}
    benefits={benefits}
    uses={uses}
  />
);

export default TotapuriMangoChunksPage; 