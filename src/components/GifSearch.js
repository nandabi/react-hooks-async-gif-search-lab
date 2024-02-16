import React, { useState } from 'react';

const GifSearch = (props) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className='input'
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search for GIFs"
      />
      <button className='btn btn-success' type="submit">Search</button>
    </form>
  );
};

export default GifSearch;