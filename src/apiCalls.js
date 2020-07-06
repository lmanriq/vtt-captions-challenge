export const fetchVttFile = async url => {
  const response = await fetch(`https://cors-anywhere.herokuapp.com/${url}`, {
    headers: {
      "Content-Type": "text/vtt",
    },
  });
  const text = await response.text();
  return text;
};
