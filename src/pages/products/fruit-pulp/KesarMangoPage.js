import React from "react";
import ProductDetailLayout from "../ProductDetailLayout";

const description = `Known for its saffron-like color and fragrant aroma, Kesar Mangoes are celebrated for their sweet flavor and pulpy texture, making them ideal for desserts, juices, and ice creams.`;

const benefits = [
  "Vitamin C: Boosts immunity and promotes healthy skin.",
  "Vitamin A: Supports eye health and improves skin quality.",
  "Good Source of Fiber: Aids digestion and supports gut health.",
  "Natural Energy Booster: Quick energy from natural sugars.",
  "Heart-Healthy Potassium: Regulates blood pressure and supports heart health.",
  "Low in Fat & Cholesterol-Free: Ideal for weight management."
];

const uses = [
  "Beverages: Mango shakes, smoothies, and cocktails.",
  "Desserts: Ideal for ice creams, puddings, and sorbets.",
  "Bakery Products: Adds mango flavor to cakes, muffins, and tarts.",
  "Dairy Industry: Used in flavored milk and yogurt products.",
  "Confectionery: Perfect for candies, jams, and jellies."
];

const KesarMangoPage = () => (
  <ProductDetailLayout
    image={process.env.PUBLIC_URL + "/images/products/AS3-Kesar Mango.jpg"}
    name="Kesar Mango Pulp"
    description={description}
    benefits={benefits}
    uses={uses}
  />
);

export default KesarMangoPage; 