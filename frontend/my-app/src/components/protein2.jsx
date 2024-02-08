import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './proteins.css';

function Proteine({ cart, setCart }) {
  const [data, setData] = useState([]);
  const [expandedStates, setExpandedStates] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [updateData, setUpdateData] = useState({
    id: null,
    name: '',
    description: '',
    price: 0,
    rating: 0,
    image: '',
  });

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/Protein')
      .then((res) => {
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

  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const handleUpdate = (item) => {
    setUpdateData(item);
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/api/Protein/${id}`)
      .then(() => {
        setData(data.filter((item) => item.id !== id));
      })
      .catch((err) => console.log(err));
  };

  const handleUpdateSubmit = () => {
    axios
      .put(`http://localhost:5000/api/Protein/${updateData.id}`, updateData)
      .then(() => {
        setData(data.map((item) => (item.id === updateData.id ? updateData : item)));
        setUpdateData({
          id: null,
          name: '',
          description: '',
          price: 0,
          rating: 0,
          image: '',
        });
      })
      .catch((err) => console.log(err));
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
                <img src={e.image} className="img" alt="Proteine" />
                <div className="de">
                  <h3>{e.name}</h3>
                  <p>{e.description}</p>
                  <p>Price: {e.price} TND</p>
                  <div className="rating">
                    {Array.from({ length: e.rating }).map((_, index) => (
                      <span key={index}>&#9733;</span>
                    ))}
                  </div>
                  <button onClick={() => toggleExpand(e.id)}>Read More</button>
                  <button onClick={() => handleAddToCart(e)}>Add to Cart</button>
                  <button onClick={() => handleUpdate(e)}>Update</button>
                  <button onClick={() => handleDelete(e.id)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {updateData.id !== null && (
        <div className="update-form">
          <input
            type="text"
            placeholder="Name"
            value={updateData.name}
            onChange={(e) => setUpdateData({ ...updateData, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Description"
            value={updateData.description}
            onChange={(e) => setUpdateData({ ...updateData, description: e.target.value })}
          />
          <input
            type="number"
            placeholder="Price"
            value={updateData.price}
            onChange={(e) => setUpdateData({ ...updateData, price: e.target.value })}
          />
          <input
            type="number"
            placeholder="Rating"
            value={updateData.rating}
            onChange={(e) => setUpdateData({ ...updateData, rating: e.target.value })}
          />
          <input
            type="text"
            placeholder="Image"
            value={updateData.image}
            onChange={(e) => setUpdateData({ ...updateData, image: e.target.value })}
          />
          <button onClick={handleUpdateSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
}

export default Proteine;
