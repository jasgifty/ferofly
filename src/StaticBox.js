import React from "react";
import "./StaticBox.css";

function StaticBox({ title, text }) {
  return (
    <div className={"staicBox__container"}>
      <div className="staicBox__data">
        <h1>{title}</h1>
        <p>{text}</p>
        <button className="staticBox__button">Book a Room</button>
      </div>
    </div>
  );
}

export default StaticBox;
