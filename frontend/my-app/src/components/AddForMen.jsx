import React, { useState } from 'react';
import axios from 'axios';

function Add() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handle = () => {
    const newprod = {
      title: title,
      image: image,
      description: description,
      date: date,
    };

    console.log(newprod);

    axios
      .post(`http://localhost:3000/api/home/add`, newprod)
      .then((res) => {
        console.log(res.data);
        setTitle('');
        setImage('');
        setDescription('');
        setDate('');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Add New Product</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Title:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Image URL:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description:</label>
          <textarea
            className="form-control"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Date:</label>
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <button className='button-55' type="button"  onClick={handle}>
          ADD
        </button>
      </form>
    </div>
  );
}

export default Add;
