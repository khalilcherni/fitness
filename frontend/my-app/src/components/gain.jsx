import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Gain.css'; // Import your CSS file

function Gain() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3005/api/getAll') 
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {data.map((item) => (
          <div key={item.id} className="col mb-4">
            <div className="card h-100 men-card">
              <img src={item.image} className="card-img-top" alt="item Weight" />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Type: {item.type}</p>
                <p className="card-text">Calories: {item.calories}</p>
                <p className="card-text">Description: {item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gain;
