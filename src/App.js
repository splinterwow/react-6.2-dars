import React, { useState } from "react";

function App() {
  const [photo, setphoto] = useState(0);

  const images = [
    "/assets/night-sky.jpg",
    "/assets/2.jpg",
    "/assets/3.jpg",
    "/assets/4.jpg",
  ];

  const handleNextClick = () => {
    if (photo < images.length - 1) {
      setphoto(photo + 1);
    }
  };

  const handleBackClick = () => {
    if (photo > 0) {
      setphoto(photo - 1);
    }
  };

  return (
    <div>
      <img src={images[photo]} alt="" width={300} /> <br />
      <br />
      <button onClick={handleBackClick}>Back</button>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
}

export default App;


