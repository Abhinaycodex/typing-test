import React from 'react';

const Results = ({ text, input }) => {
  const calculateWPM = () => {
    // Ensure input is defined and is a string
    if (!input || typeof input !== 'string') {
      return 0;
    }
    // Split the input into words using any whitespace character as the separator
    const words = input.trim().split(/\s+/).filter(word => word.length > 0);
    const wordsTyped = words.length;
    return wordsTyped;
  };

  return (
    <div>
      <p>Your typing speed is {calculateWPM()} WPM.</p>
    </div>
  );
};

export default Results;
