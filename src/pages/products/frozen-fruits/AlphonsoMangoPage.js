import React from "react";
import ProductDetailLayout from "../ProductDetailLayout";

const description = `Frozen Alphonso Mango is made from Alphonso Mangoes, often called the 'King of Mangoes,' prized for their deep golden color, rich creamy texture, and unparalleled sweetness. The smooth, aromatic pulp is frozen to preserve its quality for desserts, smoothies, and culinary uses.`;

const benefits = [
  "Rich in Vitamins A, C, and E: Boosts immunity, promotes skin health, and supports collagen formation.",
  "High in Antioxidants: Fights free radicals and reduces oxidative stress.",
  "Dietary Fiber: Aids digestion and promotes a healthy gut.",
  "Minerals: Contains potassium and magnesium, supporting blood pressure, muscle, and nerve health.",
  "Low in Fat and Cholesterol-Free: A healthy option for weight-conscious individuals."
];

const uses = [
  "Beverages: Perfect for mango juices, smoothies, cocktails, and nectars.",
  "Desserts: Ideal for ice creams, milkshakes, sorbets, and puddings.",
  "Bakery: Adds natural sweetness to cakes, pastries, and pies.",
  "Sauces & Jams: A base for chutneys, sauces, and fruit preserves.",
  "Frozen Treats: Perfect for popsicles and other frozen desserts."
];

const AlphonsoMangoPage = () => (
  <ProductDetailLayout
    image={process.env.PUBLIC_URL + "/images/products/FZ1-Alphanso Mango.jpg"}
    name="Frozen Alphonso Mango"
    description={description}
    benefits={benefits}
    uses={uses}
  />
);

export default AlphonsoMangoPage; 