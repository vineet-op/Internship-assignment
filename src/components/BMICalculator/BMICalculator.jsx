import React, { useState } from "react";
import "./BMICalculator.css";

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    const heightMeters = height / 100;
    const bmiValue = weight / (heightMeters * heightMeters);
    setBMI(bmiValue.toFixed(2));
  };

  return (
    <div className="bmi-calculator">
      <h2>BMI Calculator</h2>
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
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmi !== null && (
        <div className="bmi-result">
          <h3>Your BMI:</h3>
          <p>{bmi}</p>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
