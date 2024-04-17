import React, { useState } from "react";

function App() {
  const [rasim, setRasim] = useState(0);

  const images = [
    "/assets/night-sky.jpg",
    "/assets/2.jpg",
    "/assets/3.jpg",
    "/assets/4.jpg",
  ];

  const handleNextClick = () => {
    if (rasim < images.length - 1) {
      setRasim(rasim + 1);
    }
  };

  const handleBackClick = () => {
    if (rasim > 0) {
      setRasim(rasim - 1);
    }
  };

  return (
    <div>
      <img src={images[rasim]} alt="" width={300} /> <br />
      <br />
      <button onClick={handleBackClick}>Back</button>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
}

export default App;


