import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './proteins.css';

function AssesoiresSport() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3005/api/Products')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="shop">
      <div className="cont">
        <div className="ro">
          {data.length === 0 ? (
            <p>Loading...</p>
          ) : (
            data.map((e) => (
              <div key={e.id} className="co">
                <div className="car">
                  <img src={e.Image} className="img_box" alt="Proteine" />
                  <div className="di">
                    <p className="i">{e.description}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default AssesoiresSport;
