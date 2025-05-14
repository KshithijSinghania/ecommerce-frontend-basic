// src/components/Navbar.js

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import '../styles/Navbar.css';
const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar">
      <Link to="/" className="font-bold text-xl">
        MyShop
      </Link>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/cart" className="hover:underline">
          Cart ({cart.length})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
