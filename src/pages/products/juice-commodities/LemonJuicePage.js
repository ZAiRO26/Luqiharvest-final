import React from "react";
import ProductDetailLayout from "../ProductDetailLayout";

const description = `Lemon Juice is zesty and refreshing, ideal for beverages, culinary uses, and health drinks.`;

const benefits = [
  "Rich in Vitamin C: Supports immune health and skin protection.",
  "Antioxidants: Helps fight oxidative stress and supports overall wellness.",
  "Digestive Aid: Known to support digestion and hydration.",
  "Low in Calories: A light, healthy beverage option."
];

const uses = [
  "Beverages: Enjoy as lemonade or in cocktails.",
  "Culinary: Adds zest to marinades, dressings, and sauces.",
  "Desserts: Use in sorbets, cakes, and fruit salads.",
  "Health Drinks: Combine with water for a detoxifying drink."
];

const LemonJuicePage = () => (
  <ProductDetailLayout
    image={process.env.PUBLIC_URL + "/images/products/SJ3-Lemon Juice.jpg"}
    name="Lemon Juice"
    description={description}
    benefits={benefits}
    uses={uses}
  />
);

export default LemonJuicePage; 