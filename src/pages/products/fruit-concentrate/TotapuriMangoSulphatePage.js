import React from "react";
import ProductDetailLayout from "../ProductDetailLayout";

const description = `Totapuri Mango Sulphate is a preserved mango concentrate with extended shelf life, ideal for long-term storage and industrial applications.`;

const benefits = [
  "Extended Shelf Life: Preserved with sulphate for long-term storage and industrial use.",
  "Rich in Vitamins A & C: Supports immunity, skin, and vision health.",
  "High in Antioxidants: Reduces oxidative stress and combats free radicals.",
  "Good Source of Fiber: Promotes digestive health."
];

const uses = [
  "Beverages: Used in juices, smoothies, and health drinks.",
  "Industrial Applications: Ideal for large-scale food processing and manufacturing.",
  "Bakery: Adds tangy flavor to cakes, pastries, and fillings.",
  "Sauces & Chutneys: Used to create flavorful, tangy condiments."
];

const TotapuriMangoSulphatePage = () => (
  <ProductDetailLayout
    image={process.env.PUBLIC_URL + "/images/products/AS2-Totapuri Mango.jpg"}
    name="Totapuri Mango Sulphate"
    description={description}
    benefits={benefits}
    uses={uses}
  />
);

export default TotapuriMangoSulphatePage; 