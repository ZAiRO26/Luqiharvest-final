import React from "react";
import ProductDetailLayout from "../ProductDetailLayout";

const description = `Jackfruit (Vegetable) is a versatile ingredient, prized for its fibrous texture and mild flavor. Used as a meat substitute in vegetarian dishes, it absorbs flavors well and is perfect for curries, stir-fries, and salads.`;

const benefits = [
  "Rich in Fiber: Supports healthy digestion and gut health.",
  "Vitamins A & C: Boosts immunity and promotes skin health.",
  "Low in Fat: A healthy, low-calorie option for balanced diets.",
  "Potassium & Magnesium: Supports heart and muscle function."
];

const uses = [
  "Curries & Stir-Fries: Used as a meat substitute in vegetarian and vegan recipes.",
  "Salads: Adds texture and nutrition to fresh salads.",
  "Sandwiches & Wraps: Shredded jackfruit is perfect for plant-based fillings.",
  "Snacks: Can be roasted or fried for a healthy snack."
];

const JackfruitPage = () => (
  <ProductDetailLayout
    image={process.env.PUBLIC_URL + "/images/products/NT8-Jackfruit.jpg"}
    name="Jackfruit (Vegetable)"
    description={description}
    benefits={benefits}
    uses={uses}
  />
);

export default JackfruitPage; 