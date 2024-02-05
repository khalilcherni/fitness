import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Men() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/get')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {data.map((e) => (
          <div key={e.id} className="col mb-4">
            <div className="card h-100">
              <img src={e.Image} className="card-img-top" alt="Exercise" />
              <div className="card-body">
                <h5 className="card-title">{e.ExerciseName}</h5>
                <p className="card-text">{e.Description}</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated: {e.DurationInMinutes}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Men;
