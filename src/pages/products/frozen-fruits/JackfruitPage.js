import React from "react";
import ProductDetailLayout from "../ProductDetailLayout";

const description = `Frozen Jackfruit is made from jackfruit, with its tropical sweet taste and fibrous texture. Used in jams, smoothies, candies, and traditional desserts with rich flavor and nutritional benefits.`;

const benefits = [
  "Rich in Vitamins & Minerals: A great source of vitamin C, A, potassium, magnesium, and calcium.",
  "High in Fiber: Supports digestion, promotes satiety, and regulates blood sugar.",
  "Antioxidants: Fights oxidative stress and may reduce inflammation.",
  "Low in Fat: A healthy, low-fat option for a balanced diet."
];

const uses = [
  "Beverages: Health juices, smoothies, and cocktails.",
  "Desserts: Ice creams, parfaits, and puddings.",
  "Bakery Products: Cakes, pastries, muffins, and tarts.",
  "Dairy Industry: Flavored milkshakes and yogurt products.",
  "Confectionery: Jams, jellies, and fruit preserves."
];

const JackfruitPage = () => (
  <ProductDetailLayout
    image={process.env.PUBLIC_URL + "/images/products/FZ8-Jackfruit.jpg"}
    name="Frozen Jackfruit"
    description={description}
    benefits={benefits}
    uses={uses}
  />
);

export default JackfruitPage; 