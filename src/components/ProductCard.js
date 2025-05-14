// src/components/ProductCard.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductCard.css'
const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover mb-2"
      />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-700 mb-2">${product.price}</p>
      <Link
        to={`/product/${product.id}`}
        className="text-blue-600 hover:underline"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
