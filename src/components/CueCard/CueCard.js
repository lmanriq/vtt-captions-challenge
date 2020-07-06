import React, { useState } from "react";
import "./CueCard.css";

const CueCard = ({ capt }) => {
  const [caption, setCaption] = useState(capt);

  const handleInputChange = (e) => {
    setCaption(e.target.value);
  };

  return (
    <div class="caption-box">
      <textarea
        className="caption-input"
        type="text"
        value={caption}
        onChange={(e) => handleInputChange(e)}
      />
    </div>
  );
};

export default CueCard;
