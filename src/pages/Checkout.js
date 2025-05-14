// src/pages/Checkout.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Checkout.css'

const Checkout = () => {
  return (
    <div className="checkout">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <p className="mb-6">
        This is a demo checkout page. You can integrate payment gateways like Stripe or Razorpay here.
      </p>
      <div className="space-y-2">
        <p className="text-gray-700">Thank you for shopping with us!</p>
        <Link to="/" className="text-blue-600 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
