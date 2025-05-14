// src/pages/Product.js

import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data';
import { CartContext } from '../context/CartContext';
import '../styles/Product.css'
const Product = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useContext(CartContext);

  if (!product) return <div className="p-4">Product not found.</div>;

  return (
    <div className="product-detail">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover mb-4 rounded"
      />
      <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
      <p className="text-lg text-gray-700 mb-4">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
