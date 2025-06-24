import React from "react";
import ProductDetailLayout from "../ProductDetailLayout";

const description = `Frozen White Guava is made from white guava pulp, offering a delicate, mildly sweet flavor. Perfect for juices, smoothies, jams, and desserts.`;

const benefits = [
  "Rich in Vitamin A & C: Promotes healthy vision, skin, and boosts immunity.",
  "High in Fiber: Supports digestion and gut health.",
  "Potassium: Helps regulate blood pressure.",
  "Supports Blood Sugar Control: Low Glycemic Index, making it diabetic-friendly."
];

const uses = [
  "Beverages: Juices, smoothies, and nectars.",
  "Desserts: Sorbets, ice creams, and puddings.",
  "Bakery Products: Cakes, pastries, muffins, and tropical tarts.",
  "Dairy Industry: Flavored milkshakes and yogurt-based products.",
  "Confectionery: Candies, fruit bars, jams, and jellies."
];

const WhiteGuavaPage = () => (
  <ProductDetailLayout
    image={process.env.PUBLIC_URL + "/images/products/FZ4-White Guava.jpg"}
    name="Frozen White Guava"
    description={description}
    benefits={benefits}
    uses={uses}
  />
);

export default WhiteGuavaPage; 