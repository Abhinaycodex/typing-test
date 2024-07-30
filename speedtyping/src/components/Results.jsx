import React from 'react';

const Results = ({ text, input, timeElapsed }) => {
  const calculateWPM = () => {
    // Ensure input is defined and is a string
    if (!input || typeof input !== 'string' || timeElapsed === 0) {
      return 0;
    }
    // Split the input into words using any whitespace character as the separator
    const words = input.trim().split(/\s+/).filter(word => word.length > 0);
    const wordsTyped = words.length;
    const minutes = timeElapsed/60 ;
    return Math.round(wordsTyped / minutes);
  };

  return (
    <div>
      <p>Your typing speed is WPM.  </p>
      <p>Words typed: {calculateWPM()}</p>
    </div>
  );
};

export default Results;
