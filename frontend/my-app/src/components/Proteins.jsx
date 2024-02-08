import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './proteins.css';

function Proteine() {
  const [data, setData] = useState([]);
  const [expandedState, setExpandedState] = useState({});
  const [cart, setCart] = useState([]); // Local cart state for Proteine component
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProteine, setSelectedProteine] = useState(null);
  const [updateMode, setUpdateMode] = useState(false);
  const [updatedProteine, setUpdatedProteine] = useState({});

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

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const handleDelete = () => {
    if (!selectedProteine) {
      return;
    }

    axios
      .delete(`http://localhost:5000/api/protein/delete/${selectedProteine.id}`)
      .then((response) => {
        console.log('Delete response:', response.data);
        setData((prevData) => prevData.filter((item) => item.id !== selectedProteine.id));
        setSelectedProteine(null);
        setUpdateMode(false);
      })
      .catch((err) => console.log('Delete error:', err));
  };

  const handleUpdate = () => {
    setUpdateMode(true);
    setUpdatedProteine({ ...selectedProteine });
  };

  const handleCancelUpdate = () => {
    setUpdateMode(false);
    setUpdatedProteine({});
  };

  const handleSaveUpdate = () => {
    axios
      .put(`http://localhost:5000/api/protein/update/${updatedProteine.id}`, updatedProteine)
      .then((response) => {
        console.log('Update response:', response.data);
        setData((prevData) =>
          prevData.map((item) => (item.id === updatedProteine.id ? updatedProteine : item))
        );
        setUpdateMode(false);
        setUpdatedProteine({});
      })
      .catch((err) => console.log('Update error:', err));
  };

  const handleImageClick = (proteine) => {
    setSelectedProteine(proteine);
  };

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
          {selectedProteine ? (
            <div className="update-container">
              {/* Add your update form inputs here */}
              <button onClick={handleSaveUpdate}>Save Update</button>
              <button onClick={handleCancelUpdate}>Cancel</button>
            </div>
          ) : (
            filteredData.map((e) => (
              <div key={e.id} className="col">
                <div className="card h-100 box">
                  <img
                    src={e.Image}
                    className="img"
                    alt="Proteine"
                    onClick={() => handleImageClick(e)}
                  />
                  <div className="de">
                    <p className="in">
                      <strong>{e.name}</strong> -{' '}
                      {expandedState[e.id]
                        ? e.description
                          ? e.description
                          : 'No description available'
                        : e.description
                        ? `${e.description.slice(0, 100)}...`
                        : 'No description available'}
                    </p>
                    {selectedProteine ? (
                      <>
                        <button onClick={handleDelete}>Delete</button>
                        <button onClick={handleUpdate}>Update</button>
                      </>
                    ) : (
                      <button onClick={() => addToCart(e)}>Add to Cart</button>
                    )}
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

export default Proteine;
