import React from "react";
import ProductDetailLayout from "../ProductDetailLayout";

const description = `Pink Guava (Vegetable) is vibrant and tropical, perfect for salads, salsas, and healthy snacks. Its unique color and flavor make it a standout ingredient in many dishes.`;

const benefits = [
  "Rich in Vitamin A & C: Promotes healthy vision, skin, and boosts immunity.",
  "High in Fiber: Supports digestion and gut health.",
  "Potassium: Helps regulate blood pressure.",
  "Supports Blood Sugar Control: Low Glycemic Index, making it diabetic-friendly."
];

const uses = [
  "Salads: Adds color and nutrition to fruit and vegetable salads.",
  "Salsas: Perfect for tropical salsas and chutneys.",
  "Snacks: Can be eaten fresh or dried as a healthy snack.",
  "Smoothies: Blends well for a naturally sweet beverage."
];

const PinkGuavaPage = () => (
  <ProductDetailLayout
    image={process.env.PUBLIC_URL + "/images/products/NT5-Pink Guava.jpg"}
    name="Pink Guava (Vegetable)"
    description={description}
    benefits={benefits}
    uses={uses}
  />
);

export default PinkGuavaPage; 