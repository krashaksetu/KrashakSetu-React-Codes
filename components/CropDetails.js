// src/CropDetails.js
import React, { useEffect, useState } from 'react';
import { ref, onValue, remove } from 'firebase/database';
import { db } from './firebase';

const CropDetails = () => {
  const [crops, setCrops] = useState([]);

  useEffect(() => {
    const cropRef = ref(db, 'farmer/');
    const unsubscribe = onValue(cropRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const cropArray = Object.values(data);
        cropArray.sort((a, b) => a.cropName.localeCompare(b.cropName));
        setCrops(cropArray);
      } else {
        setCrops([]);
      }
    }, (error) => {
      console.error('Error fetching crop data: ', error);
    });

    return () => unsubscribe(); // Clean up the subscription
  }, []);

  const removeCrop = (farmerName) => {
    if (window.confirm(`Are you sure you want to remove the crop data for ${farmerName}?`)) {
      const cropRef = ref(db, 'farmer/' + farmerName);
      remove(cropRef)
        .then(() => {
          alert('Crop data removed successfully!');
        })
        .catch((error) => {
          console.error('Error removing crop: ', error);
        });
    }
  };

  return (
    <div className="container">
      <h1 className="title">Crop Details</h1>
      <div className="crop-list">
        {crops.length === 0 ? (
          <p>No crop data available.</p>
        ) : (
          crops.map((crop, index) => (
            <div className="crop-item" key={index}>
              <div className="crop-name">{crop.cropName || "Unknown"}</div>
              <div className="crop-details">Farmer: {crop.farmerName || "Unknown"}</div>
              <div className="crop-details">Type: {crop.cropType || "Unknown"}</div>
              <div className="crop-details">Quantity: {crop.quantity || "N/A"} kg</div>
              <div className="crop-details">Price: ₹{crop.price || "N/A"} per kg</div>
              <div className="buttons">
                <button className="btn btn-remove" onClick={() => removeCrop(crop.farmerName)}>Remove</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CropDetails;
