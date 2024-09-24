// src/MainApp.js
import React from 'react';
import Header from './Header'; // Your Header component
import Features from './Features'; // Your Features component
import Footer from './Footer'; // Your Footer component
import CropDetails from './CropDetails'; // Your CropDetails component
import ContactForm from './ContactForm';
import CropDetailsForm from './CropDetailsForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const MainApp = () => {
  return (
    <Router>
      <Header />

      {/* This part will render either Features or CropDetails */}
      <Routes>
        <Route path="/" element={<Features />} /> {/* Render Features on the home page */}
        <Route path="/display" element={<CropDetails />} /> {/* Route for CropDetails */}
        <Route path='/contact' element={<ContactForm/>}></Route>
        <Route path='/cropdetails' element={<CropDetailsForm/>}></Route>
        <Route path="/" exact component={CropDetailsForm} />
        <Route path="/crops" component={CropDetails} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default MainApp;
