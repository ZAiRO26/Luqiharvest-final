import React from "react";
import ProductDetailLayout from "../ProductDetailLayout";

const description = `Pineapple Juice delivers a sweet and tangy flavor, perfect for a tropical refreshment.`;

const benefits = [
  "Vitamins A & C: Support immunity and skin health.",
  "High in Antioxidants: Fights free radicals and reduces oxidative stress.",
  "Good Source of Fiber: Aids digestion and promotes overall health."
];

const uses = [
  "Beverages: Enjoy chilled or over ice for a tropical treat.",
  "Cocktails: Adds a tangy twist to mixed drinks.",
  "Desserts: Use in sorbets, jellies, and fruit salads.",
  "Culinary: Enhances sauces and marinades for savory dishes."
];

const PineappleJuicePage = () => (
  <ProductDetailLayout
    image={process.env.PUBLIC_URL + "/images/products/SJ4-Pineapple Juice.jpg"}
    name="Pineapple Juice"
    description={description}
    benefits={benefits}
    uses={uses}
  />
);

export default PineappleJuicePage; 