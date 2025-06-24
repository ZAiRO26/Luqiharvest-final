import React from "react";
import ProductDetailLayout from "../ProductDetailLayout";

const description = `Jalapenos are medium-sized chili peppers known for their vibrant green color and moderate heat. They add a spicy kick to a variety of dishes, including salsas, sauces, and tacos.`;

const benefits = [
  "Vitamin C Rich: Helps enhance immunity and promote healthy skin.",
  "Capsaicin: A natural compound that can boost metabolism and help with weight loss.",
  "Antioxidants: Helps protect cells from damage caused by free radicals.",
  "Digestive Health: Known to support digestion and reduce stomach bloating."
];

const uses = [
  "Salsas & Sauces: Perfect for adding heat to fresh salsas and hot sauces.",
  "Toppings: Great for topping pizzas, tacos, and sandwiches.",
  "Pickled: Adds extra flavor when pickled for a tangy kick."
];

const JalapenosPage = () => (
  <ProductDetailLayout
    image={process.env.PUBLIC_URL + "/images/products/AS10-Green Chilli.jpg"}
    name="Jalapenos"
    description={description}
    benefits={benefits}
    uses={uses}
  />
);

export default JalapenosPage; 