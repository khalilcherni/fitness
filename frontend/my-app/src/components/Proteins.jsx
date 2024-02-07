import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './proteins.css';

function Proteine() {
  const [data, setData] = useState([]);
  const [expandedStates, setExpandedStates] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/protein') // Adjust the API endpoint based on your server setup
      .then((res) => {
        // Initialize expanded state for each item
        const initialExpandedStates = res.data.reduce((acc, item) => {
          acc[item.id] = false;
          return acc;
        }, {});
        setExpandedStates(initialExpandedStates);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const toggleExpand = (id) => {
    setExpandedStates((prevExpandedStates) => {
      return { ...prevExpandedStates, [id]: !prevExpandedStates[id] };
    });
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="shop">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      <div className="container">
        <div className="row">
          {filteredData.map((e) => (
            <div key={e.id} className="col">
              <div className="card h-100 box">
                <img src={e.Image} className="img" alt="Proteine" />
                <div className="de">
                  <p className="in">
                    <strong>{e.name}</strong> -{' '}
                    {expandedStates[e.id] ? e.description : `${e.description.slice(0, 100)}...`}
                  </p>
                  <button onClick={() => toggleExpand(e.id)}>
                    {expandedStates[e.id] ? 'Read Less' : 'Read More'}
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
