import React from "react";
import ProductDetailLayout from "../ProductDetailLayout";

const description = `Fresh tender coconut meat preserved for extended use. Perfect for traditional and modern applications.`;

const benefits = [
  "Rich in Electrolytes: Supports hydration and replenishes minerals.",
  "Low in Calories: A healthy, light food option.",
  "Good Source of Fiber: Aids digestion and promotes gut health.",
  "Contains Healthy Fats: Provides energy and supports cell function."
];

const uses = [
  "Traditional Sweets: Used in Indian desserts and sweets.",
  "Smoothies & Beverages: Adds creaminess and nutrition.",
  "Culinary: Used in curries, salads, and baked goods.",
  "Snacking: Enjoyed as a fresh, hydrating snack."
];

const TenderCoconutPage = () => (
  <ProductDetailLayout
    image={process.env.PUBLIC_URL + "/images/products/FZ8-Jackfruit.jpg"}
    name="Tender Coconut Preparations (Malai)"
    description={description}
    benefits={benefits}
    uses={uses}
  />
);

export default TenderCoconutPage; 