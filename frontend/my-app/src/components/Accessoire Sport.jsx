import React from 'react';

const AccessoireSport = ({ data }) => {
  return (
    <div>
      {data.map(item => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <img src={item.image} alt={item.name} />
        </div>
      ))}
    </div>
  );
};

export default AccessoireSport;
