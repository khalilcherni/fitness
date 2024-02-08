import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './proteins.css';

function Proteine() {
  const [data, setData] = useState([]);
  const [expandedState, setExpandedState] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/protein')
      .then((res) => {
        const initialExpandedState = res.data.reduce((acc, item) => {
          acc[item.id] = false;
          return acc;
        }, {});
        setExpandedState(initialExpandedState);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const toggleExpand = (id) => {
    setExpandedState((prevExpandedState) => ({
      ...prevExpandedState,
      [id]: !prevExpandedState[id],
    }));
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="shop">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
          className="search-input"
        />
      </div>
      <div className="container">
        <div className="row">
          {filteredData.map((e) => (
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
