import React from "react";
import ProductDetailLayout from "../ProductDetailLayout";

const description = `Kesar Mango (Vegetable) is prized for its sweetness and color, making it a unique addition to salads, salsas, and savory dishes. Its vibrant flavor enhances both raw and cooked recipes.`;

const benefits = [
  "Vitamin C: Boosts immunity and promotes healthy skin.",
  "Vitamin A: Supports eye health and improves skin quality.",
  "Good Source of Fiber: Aids digestion and supports gut health.",
  "Natural Energy Booster: Quick energy from natural sugars."
];

const uses = [
  "Salads: Adds sweetness and color to fruit and vegetable salads.",
  "Salsas: Perfect for tropical salsas and chutneys.",
  "Savory Dishes: Used in stir-fries, curries, and rice dishes.",
  "Snacks: Can be eaten fresh or dried as a healthy snack."
];

const KesarMangoPage = () => (
  <ProductDetailLayout
    image={process.env.PUBLIC_URL + "/images/products/NT3-Kesar Mango.jpg"}
    name="Kesar Mango (Vegetable)"
    description={description}
    benefits={benefits}
    uses={uses}
  />
);

export default KesarMangoPage; 