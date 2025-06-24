import React from "react";
import ProductDetailLayout from "../ProductDetailLayout";

const description = `Totapuri Mango (Vegetable) is tangy and flavorful, ideal for salads, salsas, and savory dishes. Its unique taste and texture make it a favorite in both raw and cooked recipes.`;

const benefits = [
  "Vitamins A & C: Supports immunity, skin, and vision health.",
  "High in Antioxidants: Reduces oxidative stress and combats free radicals.",
  "Good Source of Fiber: Promotes digestive health.",
  "Natural Energy Booster: Provides quick energy from natural sugars."
];

const uses = [
  "Salads: Adds tang and nutrition to fruit and vegetable salads.",
  "Salsas: Perfect for tropical salsas and chutneys.",
  "Savory Dishes: Used in stir-fries, curries, and rice dishes.",
  "Snacks: Can be eaten fresh or dried as a healthy snack."
];

const TotapuriMangoPage = () => (
  <ProductDetailLayout
    image={process.env.PUBLIC_URL + "/images/products/NT2-Totapuri Mango.jpg"}
    name="Totapuri Mango (Vegetable)"
    description={description}
    benefits={benefits}
    uses={uses}
  />
);

export default TotapuriMangoPage; 