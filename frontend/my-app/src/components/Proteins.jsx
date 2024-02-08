import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './proteins.css';

function Proteine() {
  const [data, setData] = useState([]);
  const [expandedState, setExpandedState] = useState({});

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/protein') // Adjust the API endpoint based on your server setup
      .then((res) => {
        // Initialize expanded state for each item
        const initialExpandedState = res.data.reduce((acc, item) => {
          acc[item.id] = false;
          return acc;
        }, {});
        setExpandedState(initialExpandedState);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const toggleExpand = (id) => {
    setExpandedState((prevExpandedState) => ({
      ...prevExpandedState,
      [id]: !prevExpandedState[id],
    }));
  };

  return (
    <div className="shop">
      <div className="container">
        <div className="row">
          {data.map((e) => (
            <div key={e.id} className="col">
              <div className="card h-100 box">
                <img src={e.Image} className="img" alt="Proteine" />
                <div className="de">
                  <p className="in">
                    <strong>{e.name}</strong> -{' '}
                    {expandedState[e.id] ? e.description : `${e.description.slice(0, 100)}...`}
                  </p>
                  <button onClick={() => toggleExpand(e.id)}>
                    {expandedState[e.id] ? 'Read Less' : 'Read More'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Proteine;