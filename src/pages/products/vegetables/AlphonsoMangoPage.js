import React from "react";
import ProductDetailLayout from "../ProductDetailLayout";

const description = `Alphonso Mango (Vegetable) is selected for its quality and freshness, making it a premium ingredient for salads, salsas, and savory dishes.`;

const benefits = [
  "Rich in Vitamins A, C, and E: Boosts immunity, promotes skin health, and supports collagen formation.",
  "High in Antioxidants: Fights free radicals and reduces oxidative stress.",
  "Dietary Fiber: Aids digestion and promotes a healthy gut.",
  "Low in Fat and Cholesterol-Free: A healthy option for weight-conscious individuals."
];

const uses = [
  "Salads: Adds sweetness and nutrition to fruit and vegetable salads.",
  "Salsas: Perfect for tropical salsas and chutneys.",
  "Savory Dishes: Used in stir-fries, curries, and rice dishes.",
  "Snacks: Can be eaten fresh or dried as a healthy snack."
];

const AlphonsoMangoPage = () => (
  <ProductDetailLayout
    image={process.env.PUBLIC_URL + "/images/products/NT1-Alphanso Mango.jpg"}
    name="Alphonso Mango (Vegetable)"
    description={description}
    benefits={benefits}
    uses={uses}
  />
);

export default AlphonsoMangoPage; 