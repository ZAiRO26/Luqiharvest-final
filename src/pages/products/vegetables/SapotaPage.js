import React from "react";
import ProductDetailLayout from "../ProductDetailLayout";

const description = `Sapota (Chikku) (Vegetable) is sweet, aromatic, and packed with nutrients. Its soft texture and natural sweetness make it ideal for desserts, salads, and healthy snacks.`;

const benefits = [
  "Natural Sugars: Provides instant energy, ideal for athletes and children.",
  "High in Fiber: Promotes digestion and prevents constipation.",
  "Vitamins A & C: Boosts immunity and improves skin health.",
  "Rich in Iron, Folate, Magnesium, and Potassium: Supports blood circulation and heart health."
];

const uses = [
  "Desserts: Adds sweetness and nutrition to puddings, ice creams, and fruit salads.",
  "Salads: Enhances flavor and texture in fresh salads.",
  "Snacks: Can be eaten fresh or dried as a healthy snack.",
  "Smoothies: Blends well for a naturally sweet beverage."
];

const SapotaPage = () => (
  <ProductDetailLayout
    image={process.env.PUBLIC_URL + "/images/products/NT7-Sapota(Chikku).jpg"}
    name="Sapota (Chikku) (Vegetable)"
    description={description}
    benefits={benefits}
    uses={uses}
  />
);

export default SapotaPage; 