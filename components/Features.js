// src/components/Features.js
import React from 'react';
import './Features.css';
import { Link } from 'react-router-dom'; // Import Link for navigation
const Features = () => {
  return (
    <section id="features" className="features">
      <div className="card-container">
        <div className="card">
          <img src="images/payment.jpg" alt="Crop Management" />
          <div className="card-content">
            <h2>Crop Management</h2>
            <p>Get real-time insights and management tools for your crops.</p>
            <a href="/login" className="button-35">Learn More</a>
          </div>
        </div>
        <div className="card">
          <img src="images/LOGO FINAL (1).jpeg" alt="Market Access" />
          <div className="card-content">
            <h2>Add Crops</h2>
            <p>Directly connect with buyers and sellers in the marketplace.</p>
           <Link to={'/cropdetails'} className="button-35">Add Crops</Link>
           
          </div>
        </div>
        <div className="card">
          <img src="images/image1.jpg" alt="Government Schemes" />
          <div className="card-content">
            <h2>Government Schemes</h2>
            <p>Access information on government subsidies and support.</p>
            <a href="#" className="button-35">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
