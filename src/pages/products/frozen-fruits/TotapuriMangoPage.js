import React from "react";
import ProductDetailLayout from "../ProductDetailLayout";

const description = `Frozen Totapuri Mango is made from Totapuri Mangoes, known for their vibrant yellow color and distinct tangy taste. The frozen pulp is perfect for juices, nectars, smoothies, and sauces.`;

const benefits = [
  "Vitamins A & C: Supports immunity, skin, and vision health.",
  "High in Antioxidants: Reduces oxidative stress and combats free radicals.",
  "Good Source of Fiber: Promotes digestive health.",
  "Natural Energy Booster: Provides quick energy from natural sugars.",
  "Low in Fat & Cholesterol-Free: Supports a healthy lifestyle.",
  "Hydrating & Refreshing: High water content for hydration."
];

const uses = [
  "Beverages: Used in juices, smoothies, and health drinks.",
  "Ice Creams & Desserts: Adds a tangy flavor to frozen treats.",
  "Bakery Products: Ideal for cakes, pastries, and tropical fillings.",
  "Dairy Products: Perfect for lassis, yogurts, and flavored milk.",
  "Sauces & Chutneys: Used to create flavorful, tangy condiments."
];

const TotapuriMangoPage = () => (
  <ProductDetailLayout
    image={process.env.PUBLIC_URL + "/images/products/FZ2-Totapuri Mango.jpg"}
    name="Frozen Totapuri Mango"
    description={description}
    benefits={benefits}
    uses={uses}
  />
);

export default TotapuriMangoPage; 