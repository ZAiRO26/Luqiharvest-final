import React from "react";
import ProductDetailLayout from "../ProductDetailLayout";

const description = `Baby corn is harvested early, offering a mild, sweet flavor and tender texture. It's a popular ingredient in stir-fries, salads, and soups, especially in Asian cuisine.`;

const benefits = [
  "High in Fiber: Supports digestion and promotes gut health.",
  "Vitamins A & C: Help boost immunity and maintain healthy skin and vision.",
  "Low in Calories: Ideal for weight management.",
  "Natural Energy Source: Packed with carbohydrates for a quick energy boost."
];

const uses = [
  "Stir-Fries & Soups: Adds a sweet and crunchy element to stir-fries and soups.",
  "Salads: Enhances the texture and flavor of vegetable salads.",
  "Side Dishes: A great addition to any meal as a side dish."
];

const BabyCornPage = () => (
  <ProductDetailLayout
    image={process.env.PUBLIC_URL + "/images/products/AS16-Baby Corn.jpg"}
    name="Baby Corn"
    description={description}
    benefits={benefits}
    uses={uses}
  />
);

export default BabyCornPage; 