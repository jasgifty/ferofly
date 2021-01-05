import React, { useEffect, useState } from "react";
import "./DynamicBox.css";

function DynamicBox({ title, text }) {
  const [textList, setTextList] = useState(text[0]);
  const [i, setI] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTextList(text[i]);
      setI((i + 1) % text.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [i, text]);
  return (
    <div className="dynamicBox">
      <div className="dynamicBox__data">
        <h1>{title}</h1>
        <p>{textList}</p>
        <div className="dynamicBox__dots">
          <div
            className={`dot ${i === 0 && "active"}`}
            onClick={() => {
              setI(0);
              setTextList(text[i]);
            }}
          >
            .
          </div>
          <div
            className={`dot ${i === 1 && "active"}`}
            onClick={() => {
              setI(1);
              setTextList(text[i]);
            }}
          >
            .
          </div>
          <div
            className={`dot ${i === 2 && "active"}`}
            onClick={() => {
              setI(2);
              setTextList(text[i]);
            }}
          >
            .
          </div>
        </div>
      </div>
    </div>
  );
}

export default DynamicBox;
