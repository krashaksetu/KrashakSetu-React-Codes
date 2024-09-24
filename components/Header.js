// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img src="images/LOGO FINAL (1).jpeg" alt="Logo" />
          <span id="element"></span>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/display">Listed Crops</Link></li> {/* Link to CropDetails */}
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#news">News</a></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
