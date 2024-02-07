import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Men.css';

function Men() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/get')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const [showFullDescriptions, setShowFullDescriptions] = useState(
    new Array(data.length).fill(false)
  );

  const toggleDescription = (index) => {
    setShowFullDescriptions((prevDescriptions) => {
      const newDescriptions = [...prevDescriptions];
      newDescriptions[index] = !newDescriptions[index];
      return newDescriptions;
    });
  };

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
        {data.map((e, index) => (
          <div key={e.id} className="col mb-4">
            <div className="card h-100 men-card">
              <img src={e.Image} className="card-img-top" alt="Exercise" />
              <h1>{e.ExerciseName}</h1>
              <h2>{e.DurationInMinutes}min</h2>
              <h2>{e.Repetitions} repetition</h2>
              {showFullDescriptions[index] ? (
                <div>
                  <div className="full-description">{e.Description}</div>
                  <button
                    className="read-more-button"
                    onClick={() => toggleDescription(index)}
                  >
                    Close
                  </button>
                </div>
              ) : (
                <div>
                  <p>{`${e.Description.substring(0, 100)}...`}</p>
                  <button
                    className="read-more-button"
                    onClick={() => toggleDescription(index)}
                  >
                    Read More
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Men;
