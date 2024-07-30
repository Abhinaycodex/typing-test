import React from 'react';

const Results = ({ text, Input }) => {
  const calculateWPM = () => {
     // Ensure input is defined and is a string
     if (!Input || typeof Input !== 'string') {
      return 0;
    }
    const words = Input.trim().split(/\s+/).filter(word => word.length > 0);
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
