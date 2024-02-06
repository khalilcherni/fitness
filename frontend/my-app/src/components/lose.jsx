import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Lose.css'; // Import your CSS file

function Lose() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/lose/getAll') // Assuming your backend endpoint for lose weights is '/api/loseweight'
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {data.map((lose) => (
          <div key={lose.id} className="col mb-4">
            <div className="card h-100 lose-card">
              <img src={lose.image} className="card-img-top" alt="Lose Weight" />
              <div className="card-body">
                <h5 className="card-title">{lose.name}</h5>
                <p className="card-text">Type: {lose.type}</p>
                <p className="card-text">Calories: {lose.calories}</p>
                <p className="card-text">Description: {lose.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lose;
