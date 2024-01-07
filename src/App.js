import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

// Functional component to display advice fetched from an API
const App = () => {
  // State to store the fetched advice
  const [advice, setAdvice] = useState('');

  // Function to fetch advice from the API
  const fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;
        setAdvice(advice);
      })
      .catch((error) => {
        console.error('Error fetching advice:', error);
      });
  };

  // useEffect to fetch advice when the component mounts
  useEffect(() => {
    fetchAdvice();
  }, []); // Empty dependency array ensures it runs only once on mount

  // Render the component
  return (
    <div className="app">
      <div className="card">
        {/* Conditional rendering based on whether advice is available */}
        {advice ? (
          <>
            {/* Display the fetched advice */}
            <h1 className="heading">{advice}</h1>
            {/* Button to fetch new advice */}
            <button className="button" onClick={fetchAdvice}>
              <span>Click Me</span>
            </button>
          </>
        ) : (
          // Loading message when advice is being fetched
          <p>Loading advice...</p>
        )}
      </div>
    </div>
  );
};

export default App;
