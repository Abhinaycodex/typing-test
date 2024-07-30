import React from 'react';

const TextInput = ({ Input, handleChange }) => {
  return (
    <input
      className='p-4 m-4 max-w-full max-h-fit'
      type="text"
      value={Input}
      onChange={handleChange}
      placeholder="Start typing..."
    />
  );
};

export default TextInput;
