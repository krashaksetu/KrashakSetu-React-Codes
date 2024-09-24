// src/components/Login.js
import React, { useState } from 'react';
import './Login.css';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA9SySrp3W0Af_0b9HtJbEND8qHAvtuzRc",
  authDomain: "loginauth-6b2ca.firebaseapp.com",
  projectId: "loginauth-6b2ca",
  storageBucket: "loginauth-6b2ca.appspot.com",
  messagingSenderId: "616286044098",
  appId: "1:616286044098:web:23da3ae855b70716bd205b",
  measurementId: "G-XQ2DQQDZ3T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
auth.languageCode = 'en';

const Login = ({ onLoginSuccess }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    if (username === 'vatsal' && password === '1234') {
      onLoginSuccess();
    } else {
      alert('Invalid username or password');
    }
  };
  const handleGoogleLogin = () => {
    setIsLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setIsLoading(false);
        onLoginSuccess();
      })
      .catch((error) => {
        console.error('Google login error:', error);
        alert('Failed to login with Google. Please try again.');
        setIsLoading(false);
      });
  };

  return (
    <>
      <div className="container">
        <div className="left-side">
          <img src="images/LOGO FINAL (1).jpeg" alt="Government Logo" className="logo" />
          <h1>कृषक सेतु में आपका स्वागत है</h1>
          <p>Welcome to the Krashak Setu official website</p>
        </div>
        <div className="right-side">
          <div className="form-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button type="submit">Login</button>
              <span>Or</span>
              <button type="button" id="loginbtn" onClick={handleGoogleLogin}>
                Login with Google
              </button>
            </form>
            <p>Don't have an account? <a href="#">Sign up here</a></p>
          </div>
        </div>
      </div>

      {isLoading && (
        <div id="animation-overlay">
          <div className="spinner"></div>
        </div>
      )}
    </>
  );
};

export default Login;
