import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Men.css'; // Import your CSS file

function Men() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/get')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const filteredData = data.filter((e) =>
    e.ExerciseName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <input
  className="search-input"
  type="text"
  placeholder="Search by exercise name"
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {filteredData.map((e) => (
          <div key={e.id} className="col mb-4">
            <div className="card h-100 men-card">
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
