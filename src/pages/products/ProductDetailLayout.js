import React from "react";
import { Link } from "react-router-dom";

const ProductDetailLayout = ({ image, name, description, children }) => (
  <div className="max-w-5xl mx-auto flex flex-col items-center bg-white rounded-2xl shadow-lg p-6 md:p-12 my-10 gap-8">
    <div className="w-full flex justify-center items-start">
      <img src={image} alt={name} className="w-full max-w-xs md:max-w-sm rounded-xl shadow-md object-contain bg-white" />
    </div>
    <div className="w-full flex flex-col items-start px-2 md:px-8" style={{lineHeight: '1.8'}}>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{name}</h1>
      <div className="text-gray-700 text-lg mb-6 space-y-4">
        {typeof description === 'string' ? (
          description
            .replace(/(Nutritional Benefits[^:]*:)/g, '\n<strong>$1</strong>\n')
            .replace(/(Uses[^:]*:)/g, '\n<strong>$1</strong>\n')
            .split(/\n+/)
            .filter(line => line.trim())
            .map((line, i) => <p key={i} dangerouslySetInnerHTML={{ __html: line }} />)
        ) : description}
      </div>
      {children}
      <Link to="/contact" className="mt-6 inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all">Get Quote</Link>
    </div>
  </div>
);

export default ProductDetailLayout; 