import React from "react";
import ProductDetailLayout from "../ProductDetailLayout";

const description = `Guava Juice is packed with tropical flavor and nutrients, perfect for a refreshing drink.`;

const benefits = [
  "Rich in Vitamin A & C: Promotes healthy vision, skin, and boosts immunity.",
  "High in Fiber: Supports digestion and gut health.",
  "Potassium: Helps regulate blood pressure.",
  "Supports Blood Sugar Control: Low Glycemic Index, making it diabetic-friendly."
];

const uses = [
  "Beverages: Enjoy chilled or over ice for a tropical treat.",
  "Cocktails: Adds a fruity twist to mixed drinks.",
  "Desserts: Use in sorbets, jellies, and fruit salads.",
  "Culinary: Enhances sauces and marinades for savory dishes."
];

const GuavaJuicePage = () => (
  <ProductDetailLayout
    image={process.env.PUBLIC_URL + "/images/products/SJ2-Guava Juice.jpg"}
    name="Guava Juice"
    description={description}
    benefits={benefits}
    uses={uses}
  />
);

export default GuavaJuicePage; 