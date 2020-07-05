import React, { useState, useEffect } from "react";
import "./CueContainer.css";

const CueContainer = ({ url }) => {
  const [captions, setCaptions] = useState("");

  useEffect(() => {
    if (url) {
      fetchData(url);
    }
  }, [url]);

  const fetchData = async (url) => {
    console.log("enter");
    const response = await fetch(`https://cors-anywhere.herokuapp.com/${url}`, {
      headers: {
        "Content-Type": "text/vtt",
      },
    });
    const text = await response.text();
    setCaptions(text);
  };

  return (<div>
    {captions && captions}
  </div>);
};

export default CueContainer;
