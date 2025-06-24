import React from "react";
import ProductDetailLayout from "../ProductDetailLayout";

const description = `Sweet and tangy pineapple cut into slices and tidbits. Perfect for garnishing and tropical applications.`;

const benefits = [
  "Vitamins A & C: Support immunity and skin health.",
  "High in Antioxidants: Fights free radicals and reduces oxidative stress.",
  "Good Source of Fiber: Aids digestion and promotes overall health."
];

const uses = [
  "Garnishing: Perfect for decorating desserts and tropical dishes.",
  "Desserts: Ideal for ice creams, cakes, and fruit salads.",
  "Bakery: Adds tangy sweetness to pastries and tarts.",
  "Beverages: Used in cocktails, smoothies, and juices."
];

const PineappleSlicesPage = () => (
  <ProductDetailLayout
    image={process.env.PUBLIC_URL + "/images/products/AS6-Pineapple.jpg"}
    name="Pineapple Slices and Tidbits"
    description={description}
    benefits={benefits}
    uses={uses}
  />
);

export default PineappleSlicesPage; 