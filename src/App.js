import './App.css';
import React, { useState } from "react";          

function App() {
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [age, setAge] = useState(0);

  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    const ageInYears = today.getFullYear() - birthDate.getFullYear();
    const ageInMonths = today.getMonth() - birthDate.getMonth();
    const ageInDays = today.getDate() - birthDate.getDate();

    setAge(`${ageInYears} years ${ageInMonths} months ${ageInDays} days`);
  };

  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <input
        type="date"
        value={dateOfBirth}
        onChange={(e) => setDateOfBirth(e.target.value)}
      />
      <button onClick={calculateAge}>Calculate Age</button>
      <h4>Your age is: {age}</h4>
    </div>
  );
}

export default App;
