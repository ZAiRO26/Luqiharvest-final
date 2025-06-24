import React from "react";
import ProductDetailLayout from "../ProductDetailLayout";

const description = `Pink Guava cut into slices and dice. Pink Guava offers a fruitier, tropical taste. Perfect for juices, smoothies, jams, and desserts.`;

const benefits = [
  "Rich in Vitamin A & C: Promotes healthy vision, skin, and boosts immunity.",
  "High in Fiber: Supports digestion and gut health.",
  "Potassium: Helps regulate blood pressure.",
  "Supports Blood Sugar Control: Low Glycemic Index, making it diabetic-friendly."
];

const uses = [
  "Garnishing: Perfect for decorating desserts and premium dishes.",
  "Desserts: Ideal for ice creams, milkshakes, and puddings.",
  "Bakery: Adds tropical sweetness to cakes, pastries, and pies.",
  "Frozen Treats: Perfect for popsicles and other frozen desserts."
];

const PinkGuavaSlicesPage = () => (
  <ProductDetailLayout
    image={process.env.PUBLIC_URL + "/images/products/AS5-Pink Guava.jpg"}
    name="Pink Guava Slices and Dice"
    description={description}
    benefits={benefits}
    uses={uses}
  />
);

export default PinkGuavaSlicesPage; 