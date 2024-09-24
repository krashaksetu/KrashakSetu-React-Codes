// src/components/CropDetailsForm.js

import React, { useState } from 'react';
import { ref, set } from 'firebase/database';
import { db } from './firebase'; // Ensure this path is correct
import './CropDetailsForm.module.css';

const CropDetailsForm = () => {
  const [formData, setFormData] = useState({
    cropName: '',
    farmerName: '',
    cropType: '',
    quantity: '',
    price: ''
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle changes in the form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Form Data:', formData); // Log the formData for debugging

    try {
      // Save data to Firebase Realtime Database
      await set(ref(db, 'farmer/' + formData.farmerName), {
        cropName: formData.cropName,
        cropType: formData.cropType,
        quantity: parseFloat(formData.quantity),
        price: parseFloat(formData.price),
        farmerName: formData.farmerName
      });

      alert('Data saved successfully to Firebase!'); // This should show up
      setSubmitted(true); // Set submission state to true
    } catch (error) {
      console.error('Error saving data: ', error); // Log error to console
      alert('Failed to save data to Firebase!'); // This should also show up
    }

    // Reset form data after submission
    setFormData({
      cropName: '',
      farmerName: '',
      cropType: '',
      quantity: '',
      price: ''
    });
  };

  return (
    <div className="container">
      <h1>Add Crop Details</h1>

      {submitted ? (
        <div>
          <h2>Thank you! Your form has been submitted.</h2>
        </div>
      ) : (
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="cropName">Crop Name:</label>
          <input
            type="text"
            id="cropName"
            name="cropName"
            value={formData.cropName}
            onChange={handleChange}
            required
          />

          <label htmlFor="farmerName">Farmer Name:</label>
          <input
            type="text"
            id="farmerName"
            name="farmerName"
            value={formData.farmerName}
            onChange={handleChange}
            required
          />

          <label htmlFor="cropType">Crop Type:</label>
          <input
            type="text"
            id="cropType"
            name="cropType"
            value={formData.cropType}
            onChange={handleChange}
            required
          />

          <label htmlFor="quantity">Quantity (in kg):</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
          />

          <label htmlFor="price">Price (per kg):</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />

          <button type="submit" className="btn-submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default CropDetailsForm;
