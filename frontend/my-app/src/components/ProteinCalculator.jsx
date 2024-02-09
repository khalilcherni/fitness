import React, { useState } from 'react';
import "./ProteinCalc.css"

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
    <div className="protein-calculator-container">
      <h2 className='azert'>Protein Intake Calculator</h2>
      <div>
        <label className="form-label">Height (cm):</label>
        <input
          className="form-input"
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <div>
        <label className="form-label">Weight (kg):</label>
        <input
          className="form-input"
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <button className="button-calculate" onClick={calculateProteinIntake}>Calculate Protein Intake</button>
      {proteinIntake !== null && (
        <div className="protein-result">
          <h3>Protein Intake:</h3>
          <p>{proteinIntake} grams per day</p>
        </div>
      )}
    </div>
  );
}

export default ProteinCalculator;
