import React from 'react';

const TextInput = ({ Input, handleChange }) => {
  return (
    <input
      type="text"
      value={Input}
      onChange={handleChange}
      placeholder="Start typing..."
    />
  );
};

export default TextInput;
