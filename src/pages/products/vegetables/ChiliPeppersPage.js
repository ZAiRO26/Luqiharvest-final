import React from "react";
import ProductDetailLayout from "../ProductDetailLayout";

const description = `Chili peppers come in various sizes, shapes, and heat levels, adding bold flavors and heat to your favorite dishes. From mild to fiery hot, chili peppers bring warmth to any recipe.`;

const benefits = [
  "Rich in Vitamin C: Boosts immunity and enhances skin health.",
  "Capsaicin: Stimulates metabolism and can help burn fat.",
  "Anti-Inflammatory: Known for reducing inflammation in the body.",
  "Supports Digestion: Improves digestion and gut health."
];

const uses = [
  "Spicy Sauces & Dips: A key ingredient in spicy sauces and dips.",
  "Curry & Stews: Adds heat and depth to soups, stews, and curries.",
  "Pickled: A popular way to preserve chili peppers for later use in recipes."
];

const ChiliPeppersPage = () => (
  <ProductDetailLayout
    image={process.env.PUBLIC_URL + "/images/products/AS11-Red Chilli.jpg"}
    name="Chili Peppers"
    description={description}
    benefits={benefits}
    uses={uses}
  />
);

export default ChiliPeppersPage; 