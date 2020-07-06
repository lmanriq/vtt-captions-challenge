import React, { useState } from "react";
import "./CueCard.css";

const CueCard = ({ capt, timeStamp, updateCaption }) => {
  const [caption, setCaption] = useState(capt);

  const handleInputChange = (e) => {
    const newCapt = e.target.value;
    setCaption(newCapt);
    updateCaption(newCapt, timeStamp);
  };

  return (
    <div className="caption-box">
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
