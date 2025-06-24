import React from "react";
import ProductDetailLayout from "../ProductDetailLayout";

const description = `Tomato Paste and Puree are concentrated tomato products perfect for sauces, soups, and food processing applications.`;

const TomatoPastePage = () => (
  <ProductDetailLayout
    image={process.env.PUBLIC_URL + "/images/products/AS9-Tomato.jpg"}
    name="Tomato Paste and Puree"
    description={description}
  />
);

export default TomatoPastePage; 