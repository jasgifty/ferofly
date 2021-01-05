import React, { useState, useEffect } from "react";
import "./Image.css";

function Image({ imageList }) {
  const [bg, setBg] = useState(imageList[0]);
  const [i, setI] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBg(imageList[i]);
      setI((i + 1) % imageList.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [i]);

  return <img className="image" src={bg} alt="..." />;
}

export default Image;
