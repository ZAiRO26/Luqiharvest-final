import React from "react";
import ProductDetailLayout from "../ProductDetailLayout";

const description = `Gherkins, a type of small cucumber, are known for their tangy flavor and crisp texture. Perfect for pickling, gherkins are a popular addition to salads, sandwiches, and snacks.`;

const benefits = [
  "Rich in Vitamin K: Essential for bone health and blood clotting.",
  "Low in Calories: A great snack for weight-conscious individuals.",
  "High in Water Content: Helps in hydration and supports skin health.",
  "Contains Antioxidants: Fights oxidative stress and promotes overall wellness."
];

const uses = [
  "Pickles: Ideal for making tangy, crunchy pickles.",
  "Salads: Adds crunch and flavor to fresh vegetable salads.",
  "Snacks: Perfect for snacking or adding to charcuterie boards.",
  "Sandwiches & Burgers: Adds a zesty crunch to sandwiches and burgers."
];

const GherkinsPage = () => (
  <ProductDetailLayout
    image={[
      process.env.PUBLIC_URL + "/images/products/AS15-Gharkins.jpg",
      process.env.PUBLIC_URL + "/images/products/NT15-Gharkin.jpg"
    ]}
    name="Gherkins"
    description={description}
    benefits={benefits}
    uses={uses}
  />
);

export default GherkinsPage; 