import React from "react";
import ProductDetailLayout from "../ProductDetailLayout";

const description = `Pineapple (Vegetable) delivers a sweet and tangy flavor, ideal for salads, salsas, and savory dishes. Its juicy texture and tropical aroma make it a favorite in both raw and cooked recipes.`;

const benefits = [
  "Vitamins A & C: Support immunity and skin health.",
  "High in Antioxidants: Fights free radicals and reduces oxidative stress.",
  "Good Source of Fiber: Aids digestion and promotes overall health."
];

const uses = [
  "Salads: Adds sweetness and acidity to fruit and vegetable salads.",
  "Salsas: Perfect for tropical salsas and chutneys.",
  "Grilled: Delicious when grilled as a side or topping.",
  "Savory Dishes: Used in stir-fries, curries, and rice dishes."
];

const PineapplePage = () => (
  <ProductDetailLayout
    image={process.env.PUBLIC_URL + "/images/products/NT6-Pineapple.jpg"}
    name="Pineapple (Vegetable)"
    description={description}
    benefits={benefits}
    uses={uses}
  />
);

export default PineapplePage; 