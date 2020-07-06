import React, { useState } from "react";
import "./SearchForm.css";

const SearchForm = ({ saveUrl }) => {
  const [url, setUrl] = useState("");

  const handleInputChange = (e) => {
    setUrl(e.target.value);
  };

  return (
    <div>
      <input
        className="search-input"
        type="text"
        placeholder="enter a .vtt file url here"
        value={url}
        onChange={(e) => handleInputChange(e)}
      />
      <button onClick={() => saveUrl(url)}>load file</button>
    </div>
  );
};

export default SearchForm;
