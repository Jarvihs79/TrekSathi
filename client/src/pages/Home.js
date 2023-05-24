import React from "react";
import { Link } from "react-router-dom";
import welcomeImage from "../utils/redfort.jpg";

const Home = () => {
  const features = [
    "Detailed information about popular forts in Maharashtra",
    "Interactive map with fort locations and nearby attractions",
    "Trail routes and trekking information for each fort",
    "Historical facts and stories about the forts",
    "Photographs and videos showcasing the beauty of the forts",
    "Tips and recommendations for trekkers and tourists",
    "Guides and resources for planning fort exploration trips",
    "User reviews and ratings for forts and trekking experiences",
    "Community forums for discussions and sharing experiences",
    "Events and organized treks for fort enthusiasts",
  ];

  return (
    <div className="container">
      <div className="jumbotron mt-5">
        <h1 className="display-4 fw-bold text-center">Welcome to TrekSathi</h1>
        <p className="lead text-center">
          Explore the rich heritage of Maharashtra's forts
        </p>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="image-container text-center">
            <img
              src={welcomeImage}
              alt="Welcome"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-12">
          <h2 className="fw-bold">Features offered on TrekSathi</h2>
          <ul className="list-group">
            {features.map((feature, index) => (
              <li key={index} className="list-group-item">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-12 text-center">
          <blockquote className="blockquote">
            <p className="mb-0">
              जगातलं भारतीय परंपरेचं प्रेम, संस्कृतीच्या अभिव्यक्तींचं आनंद,
              मनातलं समृद्धींचं जशा सौंदर्य, भारतीयतेचं मानतो जिंदगीचं गान
            </p>
            <br/>
            <footer className="blockquote-footer">शिवराज</footer>
          </blockquote>
        </div>
      </div>

      {/* Add more sections or features as needed */}
    </div>
  );
};

export default Home;
