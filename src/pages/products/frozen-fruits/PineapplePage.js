import React from "react";
import ProductDetailLayout from "../ProductDetailLayout";

const description = `Frozen Pineapple is made from ripe pineapples, offering a tangy and sweet flavor with a refreshing aroma. Perfect for juices, sauces, ice creams, and bakery products.`;

const benefits = [
  "Vitamins A & C: Support immunity and skin health.",
  "High in Antioxidants: Fights free radicals and reduces oxidative stress.",
  "Good Source of Fiber: Aids digestion and promotes overall health."
];

const uses = [
  "Culinary: Fresh, in juices, smoothies, salads, and desserts.",
  "Beverages: Tropical cocktails and fermented drinks like Tepache.",
  "Beauty: Used in exfoliating face masks and hair care products.",
  "Cleaning: Bromelain enzyme helps clean stains and tenderize meat."
];

const PineapplePage = () => (
  <ProductDetailLayout
    image={process.env.PUBLIC_URL + "/images/products/FZ6-Pineapple.jpg"}
    name="Frozen Pineapple"
    description={description}
    benefits={benefits}
    uses={uses}
  />
);

export default PineapplePage; 