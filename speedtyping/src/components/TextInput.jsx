import React from 'react';

const TextInput = ({ input, handleChange }) => {
  return (
    <input
      className='p-4 m-4 max-w-full max-h-fit bg-gray-300'
      type="text"
      value={input}
      onChange={handleChange}
      placeholder="Start typing..."
    />
  );
};

export default TextInput;
