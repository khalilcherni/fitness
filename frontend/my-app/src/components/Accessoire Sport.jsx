import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './accessoiresport.css';

function AssesoiresSport() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedItems, setExpandedItems] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/Products')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleReadMore = (id) => {
    setExpandedItems((prev) => [...prev, id]);
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
          {filteredData.length === 0 ? (
            <p>No results found.</p>
          ) : (
            filteredData.map((e) => (
              <div key={e.id} className="col">
                <div className="card">
                  <img src={e.Image} className="img" alt="Proteine" />
                  <div className="de">
                    <h3>{e.name}</h3>
                    <p className="in">
                      {expandedItems.includes(e.id)
                        ? e.description // Show full description if item is expanded
                        : `${e.description.slice(0, 100)}...`} {/* Show only a part of description initially */}
                    </p>
                    <button onClick={() => handleReadMore(e.id)}>
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default AssesoiresSport;
