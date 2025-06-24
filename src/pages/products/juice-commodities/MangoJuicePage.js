import React from "react";
import ProductDetailLayout from "../ProductDetailLayout";

const description = `Mango Juice is made from the finest mangoes, offering a refreshing and tropical flavor experience.`;

const benefits = [
  "Rich in Vitamins A, C, and E: Boosts immunity, promotes skin health, and supports collagen formation.",
  "High in Antioxidants: Fights free radicals and reduces oxidative stress.",
  "Dietary Fiber: Aids digestion and promotes a healthy gut.",
  "Low in Fat and Cholesterol-Free: A healthy option for weight-conscious individuals."
];

const uses = [
  "Beverages: Enjoy chilled or over ice for a tropical treat.",
  "Cocktails: Adds a mango twist to mixed drinks.",
  "Desserts: Use in sorbets, jellies, and fruit salads.",
  "Culinary: Enhances sauces and marinades for savory dishes."
];

const MangoJuicePage = () => (
  <ProductDetailLayout
    image={process.env.PUBLIC_URL + "/images/products/SJ1-Mango Juice.jpg"}
    name="Mango Juice"
    description={description}
    benefits={benefits}
    uses={uses}
  />
);

export default MangoJuicePage; 