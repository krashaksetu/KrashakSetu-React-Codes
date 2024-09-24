// src/App.js
import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import MainApp from './components/MainApp'; // Your main app component

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : (
        <MainApp />
      )}
    </div>
  );
}

export default App;
