import React from "react";
import ProductDetailLayout from "../ProductDetailLayout";

const description = `French beans, or haricot verts, are thinner and more tender than regular green beans. Known for their delicate texture and fine flavor, French beans are a popular choice in gourmet cooking.`;

const benefits = [
  "Rich in Fiber: Promotes healthy digestion and prevents constipation.",
  "Vitamins A & C: Boost immunity and maintain healthy skin.",
  "Low in Calories: A healthy, low-calorie vegetable choice.",
  "Rich in Folate: Essential for cell growth and metabolism."
];

const uses = [
  "Gourmet Side Dishes: Often sautéed or steamed for a refined side dish.",
  "Salads & Soups: Adds elegance and flavor to vegetable salads and soups.",
  "Stir-Fries: Great for quick stir-fries and Asian-style dishes."
];

const FrenchBeansPage = () => (
  <ProductDetailLayout
    image={process.env.PUBLIC_URL + "/images/products/AS14-Garlic.jpg"}
    name="French Beans"
    description={description}
    benefits={benefits}
    uses={uses}
  />
);

export default FrenchBeansPage; 