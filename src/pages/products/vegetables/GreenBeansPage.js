import React from "react";
import ProductDetailLayout from "../ProductDetailLayout";

const description = `Green beans, also known as string beans, are a healthy, versatile vegetable with a mild flavor and crunchy texture. They are perfect for steaming, sautéing, or adding to soups.`;

const benefits = [
  "High in Fiber: Helps regulate digestion and maintain a healthy gut.",
  "Vitamins A & C: Supports eye health and boosts immunity.",
  "Low in Calories: Ideal for those looking to maintain a balanced diet.",
  "Minerals: A good source of essential minerals like folate and iron."
];

const uses = [
  "Side Dishes: Often steamed or sautéed as a delicious side dish.",
  "Soups & Casseroles: Perfect for adding flavor and nutrition to soups and casseroles.",
  "Salads: Adds a fresh crunch to vegetable salads."
];

const GreenBeansPage = () => (
  <ProductDetailLayout
    image={process.env.PUBLIC_URL + "/images/products/AS14-Garlic.jpg"}
    name="Green Beans"
    description={description}
    benefits={benefits}
    uses={uses}
  />
);

export default GreenBeansPage; 