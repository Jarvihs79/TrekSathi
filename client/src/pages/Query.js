import React, { useState, useEffect } from 'react';

const QueryForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState('');
  const [queries, setQueries] = useState([]);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    // Fetch the queries from the backend server
    fetch('http://localhost:5000/api/queries')
      .then((response) => response.json())
      .then((data) => {
        setQueries(data.queries);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object with the email and query data
    const formData = {
      email,
      query,
    };

    // Send a POST request to the backend server
    fetch('http://localhost:5000/api/submit-query', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        setSubmitMessage(data.message); // Set the submit message
        // Clear the form inputs after successful submission
        setEmail('');
        setQuery('');
        // Fetch the updated queries from the backend server
        fetch('http://localhost:5000/api/queries')
          .then((response) => response.json())
          .then((data) => {
            setQueries(data.queries);
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleGoBack = () => {
    setShowForm(false);
    setSubmitMessage(''); // Clear the submit message
  };

  return (
    <div className="container">
      <h1 className="my-4">Query Form</h1>
      <div className="mb-3">
        {queries.map((query) => (
          <div key={query._id}>
            <strong>Email:</strong> {query.email}, <strong>Query:</strong> {query.query}
          </div>
        ))}
      </div>
      {submitMessage && (
        <div className="alert alert-success" role="alert">
          {submitMessage}
        </div>
      )}
      {!showForm && (
        <button className="btn btn-primary" onClick={handleButtonClick}>
          Write a Query
        </button>
      )}
      {showForm && (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              className="form-control"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Query:</label>
            <textarea
              className="form-control"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              required
            ></textarea>
          </div>
          <div>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
            <button className="btn btn-secondary" onClick={handleGoBack}>
              Go Back
            </button>
          </div>
        </form>
      )}
      
    </div>
  );
};

export default QueryForm;
