import React from "react";
import ProductDetailLayout from "../ProductDetailLayout";

const description = `Premium Alphonso mango cut into perfect slices and dice. Ideal for garnishing, desserts, and premium applications.`;

const benefits = [
  "Rich in Vitamins A, C, and E: Boosts immunity, promotes skin health, and supports collagen formation.",
  "High in Antioxidants: Fights free radicals and reduces oxidative stress.",
  "Dietary Fiber: Aids digestion and promotes a healthy gut.",
  "Low in Fat and Cholesterol-Free: A healthy option for weight-conscious individuals."
];

const uses = [
  "Garnishing: Perfect for decorating desserts and premium dishes.",
  "Desserts: Ideal for ice creams, milkshakes, and puddings.",
  "Bakery: Adds natural sweetness to cakes, pastries, and pies.",
  "Frozen Treats: Perfect for popsicles and other frozen desserts."
];

const AlphonsoMangoSlicesPage = () => (
  <ProductDetailLayout
    image={process.env.PUBLIC_URL + "/images/products/AS1-Alphanso Mango.jpg"}
    name="Alphonso Mango Slices and Dice"
    description={description}
    benefits={benefits}
    uses={uses}
  />
);

export default AlphonsoMangoSlicesPage; 