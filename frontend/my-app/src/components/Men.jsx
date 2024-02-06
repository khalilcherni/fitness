import React, { useEffect, useState } from 'react';
import axios from 'axios';
 // Import your CSS file

function Proteine() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/protein') // Adjust the API endpoint based on your server setup
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {data.map((e) => (
          <div key={e.id} className="col mb-4">
            <div className="card h-100 proteine-card">
              <img src={e.Image} className="card-img-top" alt="Proteine" />
              <div className="card-body">
                
                <p className="card-text">{e.Description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Proteine;
