import React, { useState, useEffect } from "react";
import "./CueContainer.css";
import CueCard from '../CueCard/CueCard'

const CueContainer = ({ url }) => {
  const [captions, setCaptions] = useState([]);

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
    parseData(text);
  };

  const parseData = (text) => {
    const captionsArray = text.split("\n");
    const matched = {};
    let currentStamp;
    captionsArray.forEach((caption) => {
      if (caption.includes("-->")) {
        currentStamp = caption;
        matched[currentStamp] = [];
      } else if (matched[currentStamp]) {
        matched[currentStamp].push(caption);
      }
    });
    const timeStamps = Object.keys(matched);
    timeStamps.forEach(stamp => {
      const captions = matched[stamp];
      const captionsString = captions.join(' ');
      matched[stamp] = captionsString
    })
    setCaptions(matched);
  };

  return (
    <section class="cue-container">
      <section className="captions-container">
        <section className="time-column">
          {captions &&
            Object.keys(captions).map((time, index) => {
              const splitTime = time.split(" ");
              const startTime = splitTime[0];
              const endTime = splitTime[2];
              return (
                <article key={index} className="time-box">
                  <p>{startTime}</p>
                  <p>{endTime}</p>
                </article>
              );
            })}
        </section>
        <section className="caption-column">
          {captions &&
            Object.values(captions).map((capt, index) => {
              return (
                <CueCard key={index} capt={capt}/>
              );
            })}
        </section>
      </section>
      <button className="download-btn">Download</button>
    </section>
  );
};

export default CueContainer;
