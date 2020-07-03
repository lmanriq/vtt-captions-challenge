import React, { useState } from "react";
import "./SearchForm.css";

const SearchForm = () => {
  const [url, setUrl] = useState("");

  const handleInputChange = e => {
    setUrl(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="enter a .vtt file url here"
        value={url}
        onChange={(e) => handleInputChange(e)}
      />
      <button onClick={() => console.log(url)}>load file</button>
    </div>
  );
};

export default SearchForm;
