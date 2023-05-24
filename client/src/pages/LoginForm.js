import React, { useState } from 'react';
import  Query  from './Query.js';
import Treks from './Treks.js';
import './design.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSignUp) {
      // Handle signup logic
      // Send the signup request to the server using fetch or axios
      // Include email and password in the request body
      const userData = { email, password };
      // Example fetch request
      fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response from the server
          // Example: show a success message or redirect to a login page
          console.log(data);
          setIsSuccess(true);
        })
        .catch((error) => {
          // Handle errors
          console.error(error);
        });
    } else {
      // Handle login logic
      // Send the login request to the server using fetch or axios
      // Include email and password in the request body
      const userData = { email, password };
      // Example fetch request
      fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response from the server
          // Example: redirect to a dashboard page
          console.log(data);
          setIsLoggedIn(true); // Set the login status to true
        })
        .catch((error) => {
          // Handle errors
          console.error(error);
        });
    }
  };


  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleGoBack = () => {
    setIsLoggedIn(false);
    setSelectedOption('');
  };

  
  if (isLoggedIn) {
    // Render the selected component based on the button click
    if (selectedOption === 'query') {
      return <Query />;
    } else if (selectedOption === 'trek') {
      return <Treks />;
    }

    return (
        <div className="container">
          <div className="card mt-4">
            <div className="card-body">
              <h2 className="card-title">Welcome, {email}!</h2>
              <p className="card-text">Choose an option:</p>
            </div>
          </div>
      
          <div className="row mt-4">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Query Features</h5>
                  <ul className="list-group">
                    <li className="list-group-item">Post your Questions</li>
                    <li className="list-group-item">Ask for assistance</li>
                    <li className="list-group-item">enquire about treks</li>
                    <li className="list-group-item">report misbehaviourt</li>
                  </ul>
                  <button className="btn btn-primary mt-3" onClick={() => handleOptionClick('query')}>
                    Query
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Trek Features</h5>
                  <ul className="list-group">
                    <li className="list-group-item">Can see all upcoming treks</li>
                    <li className="list-group-item">plan your own trek</li>
                    <li className="list-group-item">get details</li>
                    <li className="list-group-item">hike around</li>
                  </ul>
                  <button className="btn btn-primary mt-3" onClick={() => handleOptionClick('trek')}>
                    Trek
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
      
      
      
  }

  return (
    <div className="container login-form-container mt-5" style={{ width: "500px", height: "500px" , borderRadius: "12px" }}>
      <h2 className="text-center">{isSignUp ? 'Sign Up' : 'Login'}</h2>
      {isSuccess && (
        <div className="alert alert-success" role="alert">
          {isSignUp ? 'Successful Signup!' : 'Successful Login!'}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {isSignUp ? 'Sign Up' : 'Login'}
        </button>
      </form>
      <div className="text-center mt-3">
        <button
          className="btn btn-link"
          onClick={() => setIsSignUp(!isSignUp)}
        >
          {isSignUp ? 'Login instead' : 'Sign Up instead'}
        </button>
      </div>
    </div>
  );
  
  
};

export default LoginForm;









