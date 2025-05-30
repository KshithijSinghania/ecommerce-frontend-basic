// src/pages/Home.js

import React from 'react';
import { products } from '../data';
import ProductCard from '../components/ProductCard';
import '../styles/Home.css'
const Home = () => {
  return (
    <div className="home">
      <h1 className="text-2xl font-bold mb-4">Featured Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
