import React from "react";
import ProductDetailLayout from "../ProductDetailLayout";

const description = `Sweet corn is known for its natural sweetness and satisfying crunch. Whether boiled, grilled, or used in salads, this vegetable brings joy to any dish.`;

const benefits = [
  "High in Fiber: Aids in digestion and promotes healthy bowel movements.",
  "Rich in Antioxidants: Packed with antioxidants to reduce oxidative stress.",
  "Low in Fat: Great for a healthy diet.",
  "Vitamins A & C: Support immune health and skin protection."
];

const uses = [
  "Grilled & Boiled: Perfect for grilling or boiling and served as a side dish.",
  "Salads & Soups: Adds a sweet pop to salads and soups.",
  "Snacks: Great in dips, salsas, or eaten straight from the cob."
];

const SweetCornPage = () => (
  <ProductDetailLayout
    image={process.env.PUBLIC_URL + "/images/products/AS16-Baby Corn.jpg"}
    name="Sweet Corn"
    description={description}
    benefits={benefits}
    uses={uses}
  />
);

export default SweetCornPage; 