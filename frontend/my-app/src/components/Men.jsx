import React, { useEffect, useState } from 'react';
import axios from "axios"
function Men() {
const [data,setdata]=useState([])

useEffect(()=>{
axios.get("http://localhost:3001/api/get")
.then(res=>setdata(res.data))
.catch(err=>console.log(err))
},[])


  return (
    <div>
  {data.map((e)=>(
        <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card">
            <img src={e.Image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{e.ExerciseName}</h5>
              <p className="card-text">{e.Description}</p>
            </div>
          </div>
        </div>
      </div>
  ))}
    </div>
  );
}

export default Men;
