import React, { useState } from 'react';

export default function Card2() {
  const [number, setNumber] = useState("");
  const [output, setOutput] = useState("");

  const handleCheck = () => {
    if (number.trim() === "") {
      setOutput("Please enter a number");
    } else if (isNaN(number)) {
      setOutput("Invalid input. Please enter a valid number");
    } else if (number % 2 === 0) {
      setOutput(`The number ${number} is even`);
    } else {
      setOutput(`The number ${number} is odd`);
    }
  };

  return (
    <div style={{
      justifyContent: "center",
      display: "flex",
    }}>
      <div className="w3-card-4">
        <header className="w3-container w3-light-green">
          <h3>Is this number odd or even?</h3>
        </header>

        <div className="w3-container">
          <form>
            Number
            <input
              type="number"
              value={number}
              onChange={(e)=>setNumber(e.target.value)}
            />
            <hr />
            <button
              className="w3-button w3-block w3-green"
              onClick={(e) => {
                e.preventDefault();
                handleCheck();
              }}
            >
              Check
            </button>
          </form>
        </div>
        <hr />
        <footer className="w3-container w3-block w3-green">
          Output:  {output}
        </footer>
      </div>
    </div>
  );
}