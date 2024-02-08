// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './gain.css'; // Import your CSS file


// function Gain() {
//   const [data, setData] = useState([]);
//   const [updateData, setUpdateData] = useState({
//     id: null,
//     name: '',
//     calories: '',
//     description: '',
//     type: '',
//     image: '',
//   });
//   const [searchTerm, setSearchTerm] = useState('');
//   const [addFormData, setAddFormData] = useState({
//     name: '',
//     calories: '',
//     description: '',
//     type: '',
//     image: '',
//   });
//   const [showAddForm, setShowAddForm] = useState(false);

//   useEffect(() => {
//     axios
//       .get('http://localhost:5000/api/getAll')
//       .then((res) => setData(res.data))
//       .catch((err) => console.log(err));
//   }, []);

//   const handleDelete = (id) => {
//     axios
//       .delete(`http://localhost:5000/api/${id}`)
//       .then(() => {
//         setData(data.filter((item) => item.id !== id));
//       })
//       .catch((err) => console.log(err));
//   };

//   const handleUpdate = (item) => {
//     setUpdateData(item);
//   };

//   const handleInputChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleAddInputChange = (e) => {
//     setAddFormData({ ...addFormData, [e.target.name]: e.target.value });
//   };

//   const handleAddSubmit = () => {
//     axios
//       .post('http://localhost:5000/api/add', addFormData)
//       .then((res) => {
//         setData([...data, res.data]);
//         setAddFormData({
//           name: '',
//           calories: '',
//           description: '',
//           type: '',
//           image: '',
//         });
//         setShowAddForm(false);
//       })
//       .catch((err) => console.log(err));
//   };

//   const handleUpdateSubmit = () => {
//     axios
//       .put(`http://localhost:5000/api/${updateData.id}`, updateData)
//       .then(() => {
//         setData(data.map((item) => (item.id === updateData.id ? updateData : item)));
//         setUpdateData({
//           id: null,
//           name: '',
//           calories: '',
//           description: '',
//           type: '',
//           image: '',
//         });
//       })
//       .catch((err) => console.log(err));
//   };

//   const filteredData = data.filter((item) =>
//     item.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="shop container"> {/* Applying class "shop" and "container" */}
//       <input
//         type="text"
//         placeholder="Search by name"
//         value={searchTerm}
//         onChange={handleInputChange}
//       />
//       <button onClick={() => setShowAddForm(!showAddForm)}>Add Food</button>
//       {showAddForm && (
//         <div className="add-form">
//           <input
//             type="text"
//             placeholder="Name"
//             name="name"
//             value={addFormData.name}
//             onChange={handleAddInputChange}
//           />
//           <input
//             type="text"
//             placeholder="Calories"
//             name="calories"
//             value={addFormData.calories}
//             onChange={handleAddInputChange}
//           />
//           <input
//             type="text"
//             placeholder="Description"
//             name="description"
//             value={addFormData.description}
//             onChange={handleAddInputChange}
//           />
//           <input
//             type="text"
//             placeholder="Type"
//             name="type"
//             value={addFormData.type}
//             onChange={handleAddInputChange}
//           />
//           <input
//             type="text"
//             placeholder="Image"
//             name="image"
//             value={addFormData.image}
//             onChange={handleAddInputChange}
//           />
//           <button onClick={handleAddSubmit}>Submit</button>
//         </div>
//       )}
//       <div className="row">
//         {filteredData.map((item) => (
//           <div key={item.id} className="col">
//             <div className="card">
//               <img src={item.image} className="img" alt="item Weight" />
//               <div className="card-body">
//                 <h5 className="card-title">{item.name}</h5>
//                 <p className="card-text">Type: {item.type}</p>
//                 <p className="card-text">Calories: {item.calories}</p>
//                 <p className="card-text">Description: {item.description}</p>
//                 {updateData.id === item.id ? (
//                   <div className="update-form">
//                     <input
//                       type="text"
//                       placeholder="Name"
//                       name="name"
//                       value={updateData.name}
//                       onChange={(e) =>
//                         setUpdateData({ ...updateData, [e.target.name]: e.target.value })
//                       }
//                     />
//                     <input
//                       type="text"
//                       placeholder="Calories"
//                       name="calories"
//                       value={updateData.calories}
//                       onChange={(e) =>
//                         setUpdateData({ ...updateData, [e.target.name]: e.target.value })
//                       }
//                     />
//                     <input
//                       type="text"
//                       placeholder="Description"
//                       name="description"
//                       value={updateData.description}
//                       onChange={(e) =>
//                         setUpdateData({ ...updateData, [e.target.name]: e.target.value })
//                       }
//                     />
//                     <input
//                       type="text"
//                       placeholder="Type"
//                       name="type"
//                       value={updateData.type}
//                       onChange={(e) =>
//                         setUpdateData({ ...updateData, [e.target.name]: e.target.value })
//                       }
//                     />
//                     <input
//                       type="text"
//                       placeholder="Image"
//                       name="image"
//                       value={updateData.image}
//                       onChange={(e) =>
//                         setUpdateData({ ...updateData, [e.target.name]: e.target.value })
//                       }
//                     />
//                     <button onClick={handleUpdateSubmit}>Submit</button>
//                   </div>
//                 ) : (
//                   <div>
//                     <button className="btn btn-danger de" onClick={() => handleDelete(item.id)}>Delete</button>
//                     <button className="btn btn-primary in" onClick={() => handleUpdate(item)}>Update</button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Gain;

// gain.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './gain.css'; // Import your CSS file

function Gain() {
  const [data, setData] = useState([]);
  const [updateData, setUpdateData] = useState({
    id: null,
    name: '',
    calories: '',
    description: '',
    type: '',
    image: '',
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [addFormData, setAddFormData] = useState({
    name: '',
    calories: '',
    description: '',
    type: '',
    image: '',
  });
  const [showAddForm, setShowAddForm] = useState(false);
  const [file, setFile] = useState(null); // Added state for file

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/getAll')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/api/${id}`)
      .then(() => {
        setData(data.filter((item) => item.id !== id));
      })
      .catch((err) => console.log(err));
  };

  const handleUpdate = (item) => {
    setUpdateData(item);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAddInputChange = (e) => {
    setAddFormData({ ...addFormData, [e.target.name]: e.target.value });
  };

  const handleAddSubmit = () => {
    axios
      .post('http://localhost:5000/api/add', addFormData)
      .then((res) => {
        setData([...data, res.data]);
        setAddFormData({
          name: '',
          calories: '',
          description: '',
          type: '',
          image: '',
        });
        setShowAddForm(false);
      })
      .catch((err) => console.log(err));
  };

  const handleUpdateSubmit = () => {
    axios
      .put(`http://localhost:5000/api/${updateData.id}`, updateData)
      .then(() => {
        setData(data.map((item) => (item.id === updateData.id ? updateData : item)));
        setUpdateData({
          id: null,
          name: '',
          calories: '',
          description: '',
          type: '',
          image: '',
        });
      })
      .catch((err) => console.log(err));
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadImage = async () => {
    const form = new FormData();
    form.append("File", file);
    form.append("upload_preset", "hibahiba11");

    try {
      const result = await axios.post("https://api.cloudinary.com/v1_1/dsrcopz7v/upload", form);
      console.log("Image uploaded successfully:", result.data.secure_url);
      setAddFormData({ ...addFormData, image: result.data.secure_url });
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className="shop container"> {/* Applying class "shop" and "container" */}
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button onClick={() => setShowAddForm(!showAddForm)}>Add Food</button>
      {showAddForm && (
        <div className="add-form">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={addFormData.name}
            onChange={handleAddInputChange}
          />
          <input
            type="text"
            placeholder="Calories"
            name="calories"
            value={addFormData.calories}
            onChange={handleAddInputChange}
          />
          <input
            type="text"
            placeholder="Description"
            name="description"
            value={addFormData.description}
            onChange={handleAddInputChange}
          />
          <input
            type="text"
            placeholder="Type"
            name="type"
            value={addFormData.type}
            onChange={handleAddInputChange}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
          <button onClick={uploadImage}>Upload Image</button>
          <button onClick={handleAddSubmit}>Submit</button>
        </div>
      )}
      <div className="row">
        {filteredData.map((item) => (
          <div key={item.id} className="col">
            <div className="card">
              <img src={item.image} className="img" alt="item Weight" />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Type: {item.type}</p>
                <p className="card-text">Calories: {item.calories}</p>
                <p className="card-text">Description: {item.description}</p>
                {updateData.id === item.id ? (
                  <div className="update-form">
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      value={updateData.name}
                      onChange={(e) =>
                        setUpdateData({ ...updateData, [e.target.name]: e.target.value })
                      }
                    />
                    <input
                      type="text"
                      placeholder="Calories"
                      name="calories"
                      value={updateData.calories}
                      onChange={(e) =>
                        setUpdateData({ ...updateData, [e.target.name]: e.target.value })
                      }
                    />
                    <input
                      type="text"
                      placeholder="Description"
                      name="description"
                      value={updateData.description}
                      onChange={(e) =>
                        setUpdateData({ ...updateData, [e.target.name]: e.target.value })
                      }
                    />
                    <input
                      type="text"
                      placeholder="Type"
                      name="type"
                      value={updateData.type}
                      onChange={(e) =>
                        setUpdateData({ ...updateData, [e.target.name]: e.target.value })
                      }
                    />
                    <input
                      type="text"
                      placeholder="Image"
                      name="image"
                      value={updateData.image}
                      onChange={(e) =>
                        setUpdateData({ ...updateData, [e.target.name]: e.target.value })
                      }
                    />
                    <button onClick={handleUpdateSubmit}>Submit</button>
                  </div>
                ) : (
                  <div>
                    <button className="btn btn-danger de" onClick={() => handleDelete(item.id)}>Delete</button>
                    <button className="btn btn-primary in" onClick={() => handleUpdate(item)}>Update</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gain;
