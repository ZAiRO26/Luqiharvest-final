import React from "react";
import ProductDetailLayout from "../ProductDetailLayout";

const description = `Also known as Chikku, Sapota has a rich, malty flavor and soft, grainy texture. Perfect for milkshakes, smoothies, and desserts, it's naturally sweet and packed with nutrients.`;

const benefits = [
  "Natural Sugars: Provides instant energy, ideal for athletes.",
  "High in Fiber: Promotes digestion and prevents constipation.",
  "Vitamins A & C: Boost immunity and improve skin health.",
  "Rich in Iron, Folate, Magnesium and Potassium: Supports blood circulation, regulates blood pressure, and supports heart health."
];

const uses = [
  "Beverages: Health drinks, smoothies, and milkshakes.",
  "Desserts: Ice creams, puddings, and fruit-based sweets.",
  "Bakery Products: Cakes, pastries, and muffins.",
  "Dairy Industry: Flavored milkshakes and yogurt products.",
  "Confectionery: Fruit bars, candies, jams, and jellies."
];

const SapotaPage = () => (
  <ProductDetailLayout
    image={process.env.PUBLIC_URL + "/images/products/AS7-Sapota(Chikku).jpg"}
    name="Sapota (Chikku) Pulp"
    description={description}
    benefits={benefits}
    uses={uses}
  />
);

export default SapotaPage; 