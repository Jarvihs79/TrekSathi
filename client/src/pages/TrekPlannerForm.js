import React, { useState } from 'react';

const TrekPlannerForm = ({handleGoBack}) => {
  const [email, setEmail] = useState('');
  const [trekDateTime, setTrekDateTime] = useState('');
  const [startingPoint, setStartingPoint] = useState('');
  const [endPoint, setEndPoint] = useState('');
  const [trekDifficulty, setTrekDifficulty] = useState('');
  const [moreInfo, setMoreInfo] = useState('');
  const [trekName, setTrekName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object with the form data
    const trekData = {
      email,
      trekDateTime,
      startingPoint,
      endPoint,
      trekDifficulty,
      moreInfo,
      trekName,
    };

    // Send the trekData object to the backend
    fetch('http://localhost:5000/api/submitTrekData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(trekData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        console.log(data);
        setSubmitted(true);
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Trek Planner</h2>
      <button className="btn btn-primary" onClick={handleGoBack}>
        Go Back to Ongoing Treks
      </button>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Trek Date and Time:</label>
          <input
            type="datetime-local"
            className="form-control"
            value={trekDateTime}
            onChange={(e) => setTrekDateTime(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Starting Point:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter the starting point"
            value={startingPoint}
            onChange={(e) => setStartingPoint(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>End Point:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter the end point"
            value={endPoint}
            onChange={(e) => setEndPoint(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Trek Difficulty:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter the trek difficulty"
            value={trekDifficulty}
            onChange={(e) => setTrekDifficulty(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Trek Name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter the trek name"
            value={trekName}
            onChange={(e) => setTrekName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>More Info:</label>
          <textarea
            className="form-control"
            placeholder="Enter any additional information"
            value={moreInfo}
            onChange={(e) => setMoreInfo(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        
      </form>
      {submitted && (
        <div className="alert alert-success mt-3" role="alert">
          Submitted successfully!
        </div>
      )}
    </div>
  );
};

export default TrekPlannerForm;
