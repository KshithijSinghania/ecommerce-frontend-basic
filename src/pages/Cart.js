// src/pages/Cart.js

import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import '../styles/Cart.css'

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  if (cart.length === 0) {
    return (
      <div className="p-4 text-center">
        <h2 className="text-xl font-semibold mb-2">Your cart is empty.</h2>
        <Link to="/" className="text-blue-600 hover:underline">Go Shopping</Link>
      </div>
    );
  }

  return (
    <div className="cart-item">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.map((item, index) => (
        <div key={index} className="flex justify-between items-center border-b py-2">
          <div>
            <h2 className="text-lg">{item.name}</h2>
            <p className="text-gray-600">${item.price}</p>
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-600 hover:underline"
          >
            Remove
          </button>
        </div>
      ))}
      <div className="mt-4 text-right font-semibold">
        Total: ${total.toFixed(2)}
      </div>
      <Link
        to="/checkout"
        className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Proceed to Checkout
      </Link>
    </div>
  );
};

export default Cart;
