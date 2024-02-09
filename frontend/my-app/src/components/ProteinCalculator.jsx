import React, { useState } from 'react';

function ProteinCalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [proteinIntake, setProteinIntake] = useState(null);

  const calculateProteinIntake = () => {
    // Formula for calculating protein intake: 0.8 grams of protein per kilogram of body weight
    const protein = 0.8 * parseFloat(weight);
    setProteinIntake(protein.toFixed(2)); // Round to two decimal places
  };

  return (
    <div>
      <h2>Protein Intake Calculator</h2>
      <div>
        <label>Height (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <div>
        <label>Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <button onClick={calculateProteinIntake}>Calculate Protein Intake</button>
      {proteinIntake !== null && (
        <div>
          <h3>Protein Intake:</h3>
          <p>{proteinIntake} grams per day</p>
        </div>
      )}
    </div>
  );
}

export default ProteinCalculator;
