import React, { useState, useEffect } from 'react';
import TrekPlannerForm from './TrekPlannerForm';

const Trek = () => {
  const [treks, setTreks] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // Fetch trek data from the backend API
    fetch('http://localhost:5000/api/treks')
      .then(response => response.json())
      .then(data => setTreks(data))
      .catch(error => console.error(error));
  }, []);

  const handleTrekPlannerClick = () => {
    setShowForm(true);
  };

  const handleGoBack = () => {
    setShowForm(false);
  };

  return (
    <div className="container">
      <h2>Trek Component</h2>
      {!showForm && (
        <>
          <div className="mt-4">
            <h1 className="mb-4">Ongoing Treks</h1>
            {treks.length === 0 ? (
              <p>No ongoing treks found.</p>
            ) : (
              <ul className="list-group">
                {treks.map((trek) => (
                  <li key={trek._id} className="list-group-item">
                    <strong>Name:</strong> {trek.trekName}<br/>
                    <strong>Email:</strong> {trek.email}<br/>
                    <strong>Trek DateTime:</strong> {trek.trekDateTime}<br/>
                    <strong>Starting Point:</strong> {trek.startingPoint}<br/>
                    <strong>End Point:</strong> {trek.endPoint}<br/>
                    <strong>Trek Difficulty:</strong> {trek.trekDifficulty}<br/>
                    <strong>More Info:</strong> {trek.moreInfo}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <h2 className="mt-4">If you want to create your own trek, click on the button below:</h2>
          <button className="btn btn-primary mt-3" onClick={handleTrekPlannerClick}>
            Trek Planner
          </button>
          
        </>
      )}
      {showForm && <TrekPlannerForm handleGoBack={handleGoBack} />}
      
    </div>
    
  );
  
  
};

export default Trek;








