import React from 'react';
import './SearchForm.css';

const SearchForm = () => {

  return (
    <div>
      <input type="text" placeholder="enter a .vtt file url here" />
      <button>load file</button>
    </div>
  );
}

export default SearchForm;
