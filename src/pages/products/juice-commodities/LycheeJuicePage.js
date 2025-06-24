import React from "react";
import ProductDetailLayout from "../ProductDetailLayout";

const description = `Lychee Juice is sweet and aromatic, offering a unique and exotic flavor experience.`;

const benefits = [
  "Rich in Vitamin C: Supports immune health and skin vitality.",
  "Antioxidants: Helps fight oxidative stress and supports overall wellness.",
  "Hydrating: High water content helps keep you refreshed.",
  "Low in Calories: A light, healthy beverage option."
];

const uses = [
  "Beverages: Enjoy chilled as a refreshing drink.",
  "Cocktails: Adds a sweet, exotic twist to mixed drinks.",
  "Desserts: Use in sorbets, jellies, and fruit salads.",
  "Culinary: Enhances sauces and marinades for Asian cuisine."
];

const LycheeJuicePage = () => (
  <ProductDetailLayout
    image={process.env.PUBLIC_URL + "/images/products/SJ5-Lychee Juice.jpg"}
    name="Lychee Juice"
    description={description}
    benefits={benefits}
    uses={uses}
  />
);

export default LycheeJuicePage; 