import React from "react";
import ProductDetailLayout from "../ProductDetailLayout";

const description = `White Guava (Vegetable) offers a delicate, mildly sweet flavor and is ideal for salads, salsas, and healthy snacks. Its subtle taste and high nutrient content make it a great addition to many dishes.`;

const benefits = [
  "Rich in Vitamin A & C: Promotes healthy vision, skin, and boosts immunity.",
  "High in Fiber: Supports digestion and gut health.",
  "Potassium: Helps regulate blood pressure.",
  "Supports Blood Sugar Control: Low Glycemic Index, making it diabetic-friendly."
];

const uses = [
  "Salads: Adds mild sweetness and nutrition to fruit and vegetable salads.",
  "Salsas: Perfect for tropical salsas and chutneys.",
  "Snacks: Can be eaten fresh or dried as a healthy snack.",
  "Smoothies: Blends well for a naturally sweet beverage."
];

const WhiteGuavaPage = () => (
  <ProductDetailLayout
    image={process.env.PUBLIC_URL + "/images/products/NT4-White Guava.jpg"}
    name="White Guava (Vegetable)"
    description={description}
    benefits={benefits}
    uses={uses}
  />
);

export default WhiteGuavaPage; 